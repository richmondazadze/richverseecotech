import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  breadcrumbs?: { name: string; url: string }[];
}

const SEO = ({
  title = 'RichverseEcoTech',
  description = 'Leading provider of sustainable digital solutions, offering web development, digital marketing, cybersecurity, and renewable energy services.',
  keywords = 'sustainable technology, web development, digital marketing, cybersecurity, renewable energy, eco-friendly solutions',
  image = '/assets/img/og-image.jpg',
  url = 'https://richverseecotech.com',
  type = 'website',
  breadcrumbs
}: SEOProps) => {
  const siteTitle = title === 'RichverseEcoTech' ? title : `${title} | RichverseEcoTech`;

  // Breadcrumbs JSON-LD
  const breadcrumbsJsonLd = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": item.name,
      "item": item.url
    }))
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="RichverseEcoTech" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* PWA Meta Tags */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="RichverseEcoTech" />
      
      {/* Favicon Tags */}
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png" />
      <link rel="mask-icon" href="/assets/icons/safari-pinned-tab.svg" color="#3B82F6" />
      
      {/* Structured Data: Organization, WebSite, Breadcrumbs */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "RichverseEcoTech",
          "url": "https://richverseecotech.com",
          "logo": "https://richverseecotech.com/assets/img/logo.png",
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          },
          "sameAs": [
            "https://twitter.com/richve_ecotech",
            "https://www.linkedin.com/company/richverseecotech",
            "https://www.facebook.com/richverseecotech"
          ]
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "RichverseEcoTech",
          "url": "https://richverseecotech.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://richverseecotech.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
      {breadcrumbsJsonLd && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbsJsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO; 