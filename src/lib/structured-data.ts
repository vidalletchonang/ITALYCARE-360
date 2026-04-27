/**
 * Structured data (Schema.org / JSON-LD) builders for ITALYCARE 360.
 * Generates rich snippets for Google, Bing and AI assistants.
 *
 * All builders return JS objects. Wrap in:
 *   <script type="application/ld+json"
 *           dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
 */

const BASE_URL = 'https://italycare360.com'

/* ─────────── Reusable identity blocks ─────────── */

const ORG_REF = { '@id': `${BASE_URL}#organization` }

const POSTAL_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Via Corso del Popolo 222',
  addressLocality: 'Rovigo',
  addressRegion: 'Veneto',
  postalCode: '45100',
  addressCountry: 'IT',
}

const GEO = {
  '@type': 'GeoCoordinates',
  latitude: 45.0700,
  longitude: 11.7900,
}

const OPENING_HOURS = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    opens: '09:00',
    closes: '16:30',
  },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: 'Friday',
    opens: '09:00',
    closes: '14:30',
  },
]

const SAME_AS = [
  'https://www.instagram.com/italycare360',
  'https://youtube.com/@italycare360',
  'https://github.com/vidalletchonang/ITALYCARE-360',
]

/* ─────────── Builders ─────────── */

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
    '@id': `${BASE_URL}#organization`,
    name: 'ITALYCARE 360',
    legalName: 'ITALYCARE 360',
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/logo-original.png`,
      width: 512,
      height: 512,
    },
    image: `${BASE_URL}/logo-original.png`,
    description: '360° premium concierge service for foreigners who want to live, invest, work, study or retire in Italy. 18 services covering real estate, healthcare, visa, legal, education, and lifestyle support.',
    telephone: '+39 351 750 1164',
    email: 'info@italycare360.com',
    address: POSTAL_ADDRESS,
    geo: GEO,
    openingHoursSpecification: OPENING_HOURS,
    sameAs: SAME_AS,
    foundingDate: '2024',
    founder: {
      '@type': 'Person',
      name: 'Fabrizio Permunian',
    },
    areaServed: [
      { '@type': 'Country', name: 'Italy' },
      { '@type': 'AdministrativeArea', name: 'European Union' },
    ],
    knowsLanguage: ['en', 'fr', 'it', 'de', 'ar', 'ru'],
    priceRange: '€€€',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+39 351 750 1164',
        email: 'info@italycare360.com',
        contactType: 'customer service',
        availableLanguage: ['English', 'French', 'Italian', 'German', 'Arabic', 'Russian'],
        areaServed: 'Worldwide',
      },
    ],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}#website`,
    url: BASE_URL,
    name: 'ITALYCARE 360',
    description: 'Your life in Italy, simplified. Premium concierge for foreigners — real estate, visa, healthcare, legal, lifestyle.',
    publisher: ORG_REF,
    inLanguage: ['en', 'fr', 'it', 'de', 'ar', 'ru'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
    })),
  }
}

export function serviceSchema(opts: {
  slug: string
  name: string
  description: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}/services/${opts.slug}#service`,
    name: opts.name,
    description: opts.description,
    url: `${BASE_URL}/services/${opts.slug}`,
    image: opts.image,
    provider: ORG_REF,
    areaServed: { '@type': 'Country', name: 'Italy' },
    serviceType: opts.name,
    audience: {
      '@type': 'Audience',
      audienceType: 'Foreign residents, expatriates and international investors',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/services/${opts.slug}`,
    },
  }
}

export function blogPostingSchema(opts: {
  slug: string
  title: string
  description: string
  image: string
  datePublished: string         // ISO 8601
  dateModified?: string
  category?: string
  inLanguage?: string
}) {
  const url = `${BASE_URL}/blog/${opts.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#blogpost`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: opts.title,
    description: opts.description,
    image: { '@type': 'ImageObject', url: opts.image },
    url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    author: {
      '@type': 'Organization',
      name: 'ITALYCARE 360',
      url: BASE_URL,
    },
    publisher: ORG_REF,
    articleSection: opts.category,
    inLanguage: opts.inLanguage || 'en',
    isPartOf: { '@type': 'Blog', '@id': `${BASE_URL}/blog#blog` },
  }
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}
