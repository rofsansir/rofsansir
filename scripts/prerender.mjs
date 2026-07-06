/**
 * Post-build prerender step.
 *
 * Problem: this is a client-side React SPA. Social-media crawlers
 * (WhatsApp, Facebook, Twitter/X, LinkedIn, Telegram, iMessage, Slack) do
 * NOT execute JavaScript, so they only ever see the static `index.html` —
 * meaning every shared URL shows the home-page preview.
 *
 * Solution: after `vite build`, read the built `dist/index.html` as a
 * template and emit a dedicated HTML file PER ROUTE with that route's
 * correct `<title>`, `<meta description>`, Open Graph and Twitter tags.
 * Static routes come from `resources/js/data/seo.json`; dynamic routes
 * (books, past papers, tips) are derived from their JSON data files.
 *
 * Output convention: `dist/<path>/index.html` (directory index), which is
 * served for the clean URL `/path` by every major static host (Netlify,
 * Cloudflare Pages, GitHub Pages, Vercel, S3+CloudFront, nginx `try_files`).
 *
 * Run automatically via `npm run build`. Run manually: `node scripts/prerender.mjs`.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const DIST = path.join(ROOT, 'dist');
const TEMPLATE_HTML = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

// ---- Data sources (plain JSON — importable from Node) ----------------------
const seoConfig = JSON.parse(
    fs.readFileSync(path.join(ROOT, 'resources/js/data/seo.json'), 'utf8'),
);
const bookData = JSON.parse(
    fs.readFileSync(path.join(ROOT, 'resources/js/data/bookData.json'), 'utf8'),
);
const pastPapers = JSON.parse(
    fs.readFileSync(path.join(ROOT, 'resources/js/data/pastPapers.json'), 'utf8'),
);
const blogContent = JSON.parse(
    fs.readFileSync(path.join(ROOT, 'resources/js/data/blogContent.json'), 'utf8'),
);
const faqs = JSON.parse(
    fs.readFileSync(path.join(ROOT, 'resources/js/data/faq.json'), 'utf8'),
);

const SITE_URL = seoConfig.siteUrl.replace(/\/$/, '');

/**
 * Path aliases (must match `PATH_ALIASES` in resources/js/seo.ts).
 * Each alias renders the same page, so we also emit a prerendered file for it
 * so direct shares of the alias URL preview correctly.
 */
const PATH_ALIASES = {
    '/class-viii': '/class-8',
    '/class-ix': '/class-9',
    '/class-x': '/class-10',
    '/courses': '/routine',
};

// ---- Per-route metadata -----------------------------------------------------
const routes = [];

// Static routes from seo.json
for (const r of seoConfig.routes) {
    routes.push({ path: r.path, ...r });
}

// Alias routes (inherit the canonical route's meta)
for (const [alias, canonical] of Object.entries(PATH_ALIASES)) {
    const base = seoConfig.routes.find((r) => r.path === canonical);
    if (base) {
        routes.push({
            path: alias,
            title: base.title,
            description: base.description,
            keywords: base.keywords,
            ogImage: base.ogImage,
            type: base.type,
        });
    }
}

// Book detail routes
for (const book of bookData) {
    routes.push({
        path: `/${book.id}`,
        title: `${book.title} | Rofsan Sir O Level Bengali Book`,
        description: book.code || book.subtitle || seoConfig.defaultDescription,
        keywords: seoConfig.defaultKeywords,
        ogImage: seoConfig.defaultOgImage,
        type: 'book',
    });
}

// Past paper detail routes
for (const paper of pastPapers) {
    if (!paper.isActive) continue;
    routes.push({
        path: `/past-papers/${paper.slug}`,
        title: `${paper.title} | Rofsan Sir`,
        description: paper.description || seoConfig.defaultDescription,
        keywords: paper.metaKeywords || seoConfig.defaultKeywords,
        ogImage: seoConfig.defaultOgImage,
        type: 'article',
    });
}

// Examiner tip article routes (/tips/:id)
for (const blog of blogContent) {
    const desc =
        blog.subtitle ||
        (Array.isArray(blog.content) ? blog.content[0] : '') ||
        seoConfig.defaultDescription;
    routes.push({
        path: `/tips/${blog.id}`,
        title: `${blog.title} | Rofsan Sir Examiner Tips`,
        description: String(desc).slice(0, 160),
        keywords: seoConfig.defaultKeywords,
        ogImage: seoConfig.defaultOgImage,
        type: 'article',
    });
}

// ---- JSON-LD structured data -----------------------------------------------
function buildJsonLd(r) {
    if (r.path === '/faq' && faqs) {
        const entries = [...(faqs.student || []), ...(faqs.parent || [])];
        return {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: entries.map((e) => ({
                '@type': 'Question',
                name: e.question,
                acceptedAnswer: { '@type': 'Answer', text: e.answer },
            })),
        };
    }
    return null;
}

// ---- HTML rewriting ---------------------------------------------------------
const esc = (s) =>
    String(s ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

function absoluteUrl(p) {
    if (!p) return SITE_URL + '/';
    if (p.startsWith('http')) return p;
    return SITE_URL + (p.startsWith('/') ? '' : '/') + p;
}

function buildHead(r) {
    const title = r.title || seoConfig.defaultTitle;
    const description = r.description || seoConfig.defaultDescription;
    const keywords = r.keywords || seoConfig.defaultKeywords;
    const ogImage = absoluteUrl(r.ogImage || seoConfig.defaultOgImage);
    const url = absoluteUrl(r.path);
    const type = r.type || 'website';

    const tags = [
        `<title>${esc(title)}</title>`,
        `<meta name="title" content="${esc(title)}" />`,
        `<meta name="description" content="${esc(description)}" />`,
        `<meta name="keywords" content="${esc(keywords)}" />`,
        `<link rel="canonical" href="${esc(url)}" />`,
        `<meta property="og:type" content="${esc(type)}" />`,
        `<meta property="og:url" content="${esc(url)}" />`,
        `<meta property="og:title" content="${esc(title)}" />`,
        `<meta property="og:description" content="${esc(description)}" />`,
        `<meta property="og:image" content="${esc(ogImage)}" />`,
        `<meta property="og:image:secure_url" content="${esc(ogImage)}" />`,
        `<meta property="og:image:width" content="1200" />`,
        `<meta property="og:image:height" content="630" />`,
        `<meta property="og:image:type" content="image/jpeg" />`,
        `<meta property="og:image:alt" content="${esc(title)}" />`,
        `<meta property="og:site_name" content="${esc(seoConfig.siteName)}" />`,
        `<meta property="og:locale" content="en_US" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:url" content="${esc(url)}" />`,
        `<meta name="twitter:title" content="${esc(title)}" />`,
        `<meta name="twitter:description" content="${esc(description)}" />`,
        `<meta name="twitter:image" content="${esc(ogImage)}" />`,
        `<meta name="twitter:image:alt" content="${esc(title)}" />`,
    ];
    return tags.join('\n        ');
}

/**
 * Replace the template's head metadata block with this route's metadata.
 * We strip the existing title / description / og and twitter tags and inject
 * fresh ones, while leaving favicons, fonts, manifest and the JS bundle intact.
 */
function renderHtml(r) {
    let html = TEMPLATE_HTML;

    // Remove existing metadata tags we own (title, description, canonical,
    // og:*, twitter:*, plus the name=title / name=author duplicate).
    html = html.replace(/\s*<title>[\s\S]*?<\/title>\s*/g, '\n        ');
    html = html.replace(
        /\s*<meta\s+name="(title|description|keywords|author)"\s+content="[^"]*"\s*\/?>\s*/gi,
        '\n        ',
    );
    html = html.replace(
        /\s*<meta\s+name="twitter:[^"]*"\s+content="[^"]*"\s*\/?>\s*/gi,
        '\n        ',
    );
    html = html.replace(
        /\s*<meta\s+property="og:[^"]*"\s+content="[^"]*"\s*\/?>\s*/gi,
        '\n        ',
    );
    html = html.replace(/\s*<link\s+rel="canonical"[^>]*>\s*/gi, '\n        ');

    // Collapse accidental blank lines we may have left.
    html = html.replace(/\n[ \t]*\n[ \t]*\n/g, '\n\n');

    // Inject our fresh head tags right after <head ...>.
    const headBlock = `\n        ${buildHead(r)}\n    `;
    html = html.replace(/<head(\s[^>]*)?>/, `<head$1>${headBlock}`);

    // Bake route-specific JSON-LD structured data into the static HTML so
    // crawlers that don't run JS (and for rich-result reliability) still see it.
    const jsonLd = buildJsonLd(r);
    if (jsonLd) {
        const script = `\n    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
        html = html.replace('</head>', `${script}\n</head>`);
    }

    return html;
}

// ---- Emit files -------------------------------------------------------------
let count = 0;

function writeRoute(r) {
    // Home route overwrites dist/index.html (already correct, but keep in sync).
    if (r.path === '/') {
        fs.writeFileSync(path.join(DIST, 'index.html'), renderHtml(r));
        count++;
        return;
    }

    const rel = r.path.replace(/^\//, '');
    const dir = path.join(DIST, rel);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), renderHtml(r));
    count++;
}

for (const r of routes) writeRoute(r);

// ---- sitemap.xml ------------------------------------------------------------
const today = new Date().toISOString().slice(0, 10);
const sitemapRoutes = routes
    .filter((r) => !r.path.startsWith('/privacy') && !r.path.startsWith('/terms'))
    .map(
        (r) =>
            `  <url>\n    <loc>${absoluteUrl(r.path)}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${r.path === '/' ? '1.0' : '0.7'}</priority>\n  </url>`,
    )
    .join('\n');

fs.writeFileSync(
    path.join(DIST, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapRoutes}\n</urlset>\n`,
);

console.log(
    `[prerender] Wrote ${count} static HTML files + sitemap.xml into dist/`,
);
