/* =========================================================================
   JSON-LD structured data builders (schema.org)
   Single source of truth for all rich-result markup. Injected via <JsonLd>.
   ========================================================================= */
import { brand, services, Service } from './site';
import type { BlogPost } from './blog';

export const SITE = 'https://richverseecotech.com';
const ORG_ID = `${SITE}/#organization`;
const WEBSITE_ID = `${SITE}/#website`;
const LOGO = `${SITE}/logo.png`;
const OG = `${SITE}/og-image.jpg`;

const COUNTRY: Record<string, string> = { 'United States': 'US', Ghana: 'GH' };

/** Site-wide organization entity. Every other node references this by @id. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: brand.name,
    url: `${SITE}/`,
    logo: LOGO,
    image: OG,
    description: brand.blurb,
    email: brand.email,
    slogan: brand.tagline,
    areaServed: 'Worldwide',
    sameAs: brand.socials.map((s) => s.url),
    address: brand.offices.map((o) => ({
      '@type': 'PostalAddress',
      addressLocality: o.city,
      addressCountry: COUNTRY[o.country] ?? o.country,
    })),
    contactPoint: brand.offices.map((o) => ({
      '@type': 'ContactPoint',
      telephone: o.phone,
      contactType: 'customer service',
      email: brand.email,
      areaServed: COUNTRY[o.country] ?? o.country,
      availableLanguage: 'English',
    })),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE}/`,
    name: brand.name,
    description: brand.blurb,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en',
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: `${SITE}${t.path}`,
    })),
  };
}

export function serviceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    serviceType: service.name,
    description: service.intro,
    url: `${SITE}/services/${service.slug}`,
    provider: { '@id': ORG_ID },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.name} offerings`,
      itemListElement: service.offerings.map((o) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: o.title, description: o.body },
      })),
    },
  };
}

/** Aggregates all four services for the /services listing page. */
export function servicesItemListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE}/services/${s.slug}`,
      name: s.name,
    })),
  };
}

export function articleSchema(post: BlogPost) {
  const iso = new Date(post.date).toISOString().slice(0, 10);
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    image: post.image.startsWith('http') ? post.image : `${SITE}${post.image}`,
    datePublished: iso,
    dateModified: iso,
    author: { '@type': 'Organization', name: post.author, '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: `${SITE}/blog/${post.slug}`,
    keywords: post.tags.join(', '),
    articleSection: post.category,
    inLanguage: 'en',
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}
