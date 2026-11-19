/* =========================================================================
   JSON-LD structured data builders (schema.org)
   Single source of truth for all rich-result markup. Injected via <JsonLd>.
   ========================================================================= */
import { brand, services, team, Service } from './site';
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
  const url = `${SITE}/services/${service.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': url + '#service',
    name: service.name,
    serviceType: service.name,
    description: service.intro,
    url,
    mainEntityOfPage: url,
    provider: { '@id': ORG_ID },
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
      item: { '@id': `${SITE}/services/${s.slug}#service` },
    })),
  };
}

export function articleSchema(post: BlogPost) {
  const url = `${SITE}/blog/${post.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': url + '#article',
    url,
    headline: post.title,
    description: post.summary,
    image: post.image.startsWith('http') ? post.image : `${SITE}${post.image}`,
    datePublished: post.published,
    dateModified: post.revised ?? post.published,
    author: { '@type': 'Organization', name: post.author, '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: url,
    keywords: post.tags.join(', '),
    articleSection: post.category,
    inLanguage: 'en',
  };
}

/** Describe the same stories, in the same order, that a reader sees. */
export function journalSchema(path: string, name: string, posts: BlogPost[]) {
  const url = SITE + path;
  return {
    '@context': 'https://schema.org', '@type': 'CollectionPage', '@id': url + '#collection',
    url, name, isPartOf: { '@id': WEBSITE_ID }, publisher: { '@id': ORG_ID }, inLanguage: 'en',
    mainEntity: {
      '@type': 'ItemList', numberOfItems: posts.length,
      itemListElement: posts.map((post, i) => ({
        '@type': 'ListItem', position: i + 1, name: post.title, url: `${SITE}/blog/${post.slug}`,
        item: { '@id': `${SITE}/blog/${post.slug}#article` },
      })),
    },
  };
}

export function aboutPageSchema() {
  return {
    '@context': 'https://schema.org', '@type': 'AboutPage', '@id': SITE + '/about#page',
    url: SITE + '/about', name: 'Our studio and team', isPartOf: { '@id': WEBSITE_ID },
    mainEntity: { '@id': ORG_ID },
    mentions: team.map(person => ({
      '@type': 'Person', name: person.name, jobTitle: person.role, description: person.bio,
      worksFor: { '@id': ORG_ID }, sameAs: [person.linkedin, ...(person.x ? [person.x] : [])],
    })),
  };
}

/** The studio built its own site; this is not a client testimonial or review. */
export function studioWorkSchema(path: string, story: {
  title: string; brief: string; kind: string; image: string; service: string;
}) {
  return {
    '@context': 'https://schema.org', '@type': 'CreativeWork', '@id': SITE + path + '#work',
    url: SITE + path, name: story.title, genre: story.kind, description: story.brief,
    image: SITE + story.image, creator: { '@id': ORG_ID }, isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': SITE + '/services/' + story.service + '#service' }, inLanguage: 'en',
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
