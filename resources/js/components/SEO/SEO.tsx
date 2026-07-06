import { Helmet } from 'react-helmet-async';
import React from 'react';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    ogType?: string;
    canonicalUrl?: string;
    noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords = 'O Level Bengali, CAIE Bengali, Bengali tutor Dhaka, O Level Bangla, Cambridge Bengali',
    ogImage = 'https://rofsansir.com/assets/og/default-og.svg',
    ogType = 'website',
    canonicalUrl,
    noindex = false,
}) => {
    const fullTitle = `${title} | Rofsan Sir O Level Bengali`;
    const siteUrl = 'https://rofsansir.com';
    const canonical = canonicalUrl || `${siteUrl}${window.location.pathname}`;

    // Ensure ogImage is absolute URL
    const absoluteOgImage = ogImage.startsWith('http')
        ? ogImage
        : `${siteUrl}${ogImage}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Robots */}
            {noindex && <meta name="robots" content="noindex, nofollow" />}

            {/* Canonical URL */}
            <link rel="canonical" href={canonical} />

            {/* Open Graph / Facebook / WhatsApp */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonical} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={absoluteOgImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:alt" content={fullTitle} />
            <meta property="og:site_name" content="Rofsan Sir - O Level Bengali" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonical} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={absoluteOgImage} />
            <meta property="twitter:image:alt" content={fullTitle} />

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
