/**
 * Central SEO / social-share metadata for the static site.
 *
 * This module is the SINGLE SOURCE OF TRUTH for per-route `<title>`,
 * `<meta description>` and Open Graph / Twitter card data.
 *
 * - The React <SEO> component (used in-browser) reads from here.
 * - The Node prerender script (`scripts/prerender.mjs`) reads the same
 *   `seo.json` (plus the book / past-paper / blog JSON) to bake the correct
 *   meta tags into a static HTML file PER ROUTE at build time, so that
 *   WhatsApp / Facebook / Twitter / LinkedIn / Telegram crawlers — which do
 *   NOT execute JavaScript — still see the right preview for each URL.
 */

import seoData from './data/seo.json';

export interface RouteMeta {
    path: string;
    title: string;
    description: string;
    keywords: string;
    ogImage: string;
    type: string;
}

interface SeoConfig {
    siteUrl: string;
    siteName: string;
    titleSuffix: string;
    defaultTitle: string;
    defaultDescription: string;
    defaultKeywords: string;
    defaultOgImage: string;
    twitterHandle: string;
    routes: RouteMeta[];
}

export const SEO_CONFIG: SeoConfig = seoData as SeoConfig;

export const SITE_URL = SEO_CONFIG.siteUrl;
export const SITE_NAME = SEO_CONFIG.siteName;
export const DEFAULT_OG_IMAGE = SEO_CONFIG.defaultOgImage;

/** Index static routes by exact path for O(1) lookup. */
const ROUTE_INDEX = new Map<string, RouteMeta>(
    SEO_CONFIG.routes.map((r) => [r.path, r]),
);

/**
 * Path aliases that render the same page / should share the same meta.
 * Maps alias path -> canonical path.
 */
export const PATH_ALIASES: Record<string, string> = {
    '/class-viii': '/class-8',
    '/class-ix': '/class-9',
    '/class-x': '/class-10',
};

/** Resolve a pathname (possibly an alias) to its canonical route path. */
export function canonicalPath(pathname: string): string {
    return PATH_ALIASES[pathname] ?? pathname;
}

/** Get static route meta for a path, or `null` if it isn't a static route. */
export function getStaticRouteMeta(pathname: string): RouteMeta | null {
    return ROUTE_INDEX.get(canonicalPath(pathname)) ?? null;
}

export interface ResolvedMeta {
    title: string;
    description: string;
    keywords: string;
    ogImage: string;
    type: string;
    /** Absolute URL for this page (canonical + og:url). */
    url: string;
    /** Absolute OG image URL. */
    absoluteOgImage: string;
}

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path: string): string {
    if (path.startsWith('http')) return path;
    return `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
}

/**
 * Resolve full meta for any path, including dynamic fallbacks for
 * book / past-paper / tip pages that aren't listed in seo.json.
 *
 * Pass optional `data` to supply dynamic titles (used by detail pages).
 */
export function getMetaForPath(
    pathname: string,
    data?: { title?: string; description?: string; ogImage?: string; type?: string },
): ResolvedMeta {
    const route = getStaticRouteMeta(pathname);

    const title = data?.title ?? route?.title ?? SEO_CONFIG.defaultTitle;
    const description =
        data?.description ?? route?.description ?? SEO_CONFIG.defaultDescription;
    const keywords = route?.keywords ?? SEO_CONFIG.defaultKeywords;
    const ogImage = data?.ogImage ?? route?.ogImage ?? DEFAULT_OG_IMAGE;
    const type = data?.type ?? route?.type ?? 'website';

    return {
        title,
        description,
        keywords,
        ogImage,
        type,
        url: absoluteUrl(pathname),
        absoluteOgImage: absoluteUrl(ogImage),
    };
}

export default SEO_CONFIG;
