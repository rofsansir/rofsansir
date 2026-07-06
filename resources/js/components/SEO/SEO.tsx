import { Helmet } from 'react-helmet-async';
import React from 'react';

import {
    DEFAULT_OG_IMAGE,
    SITE_NAME,
    SITE_URL,
    SEO_CONFIG,
    absoluteUrl,
    getStaticRouteMeta,
} from '../../seo';

export interface SEOProps {
    /**
     * Route path to auto-resolve title/description/etc. from the central
     * `seo.json` config. If provided, you can omit the other props entirely.
     */
    path?: string;
    /** Full page title (already formatted — no suffix is appended). */
    title?: string;
    description?: string;
    keywords?: string;
    /** Site-relative or absolute OG image. Defaults to the site OG image. */
    ogImage?: string;
    ogType?: string;
    /** Site-relative canonical URL. Defaults to the current pathname. */
    canonicalUrl?: string;
    noindex?: boolean;
}

/**
 * Renders all `<title>` / Open Graph / Twitter card tags for a page.
 *
 * NOTE: This only updates tags at runtime in the browser. For social crawlers
 * (WhatsApp, Facebook, etc.) that do NOT run JavaScript, the per-route static
 * HTML produced by `scripts/prerender.mjs` (run after `vite build`) contains
 * the correct tags already. Keep this component's values in sync with the
 * central config in `resources/js/data/seo.json` (via `resources/js/seo.ts`).
 */
const SEO: React.FC<SEOProps> = ({
    path,
    title,
    description,
    keywords,
    ogImage,
    ogType,
    canonicalUrl,
    noindex = false,
}) => {
    const route = path ? getStaticRouteMeta(path) : null;

    const resolvedTitle = title ?? route?.title ?? SEO_CONFIG.defaultTitle;
    const resolvedDescription =
        description ?? route?.description ?? SEO_CONFIG.defaultDescription;
    const resolvedKeywords = keywords ?? route?.keywords ?? SEO_CONFIG.defaultKeywords;
    const resolvedOgImage = ogImage ?? route?.ogImage ?? DEFAULT_OG_IMAGE;
    const resolvedType = ogType ?? route?.type ?? 'website';

    const canonical = canonicalUrl
        ? absoluteUrl(canonicalUrl)
        : `${SITE_URL}${window.location.pathname}`;

    const absoluteOgImage = absoluteUrl(resolvedOgImage);

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{resolvedTitle}</title>
            <meta name="title" content={resolvedTitle} />
            <meta name="description" content={resolvedDescription} />
            <meta name="keywords" content={resolvedKeywords} />

            {/* Robots */}
            {noindex && <meta name="robots" content="noindex, nofollow" />}

            {/* Canonical URL */}
            <link rel="canonical" href={canonical} />

            {/* Open Graph / Facebook / WhatsApp */}
            <meta property="og:type" content={resolvedType} />
            <meta property="og:url" content={canonical} />
            <meta property="og:title" content={resolvedTitle} />
            <meta property="og:description" content={resolvedDescription} />
            <meta property="og:image" content={absoluteOgImage} />
            <meta property="og:image:secure_url" content={absoluteOgImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:alt" content={resolvedTitle} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonical} />
            <meta name="twitter:title" content={resolvedTitle} />
            <meta name="twitter:description" content={resolvedDescription} />
            <meta name="twitter:image" content={absoluteOgImage} />
            <meta name="twitter:image:alt" content={resolvedTitle} />
            {SEO_CONFIG.twitterHandle && (
                <meta name="twitter:site" content={SEO_CONFIG.twitterHandle} />
            )}

            {/* Additional Meta Tags */}
            <meta name="author" content="Rofsan Khan" />
            <meta name="language" content="English" />
            <meta name="geo.region" content="BD-C" />
            <meta name="geo.placename" content="Dhaka" />
            <meta name="geo.position" content="23.7461;90.3742" />
            <meta name="ICBM" content="23.7461, 90.3742" />
        </Helmet>
    );
};

export default SEO;
