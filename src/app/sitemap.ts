import type { MetadataRoute } from 'next'

/**
 * Sitemap automatique généré au build.
 * Sortie: https://italycare360.com/sitemap.xml
 *
 * Conventions:
 *  - Home page: priority 1.0, weekly
 *  - Pages clés (about, services, contact, blog): 0.9, weekly
 *  - Privacy policy: 0.3, yearly
 *  - Pages services individuelles: 0.8, monthly
 *  - Articles blog: 0.7, monthly
 *  - Date de modification: today (rebuilt on each deploy)
 */

const BASE_URL = 'https://italycare360.com'

const STATIC_PAGES: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
  { path: '',                priority: 1.0, changeFrequency: 'weekly'  },
  { path: '/about',          priority: 0.9, changeFrequency: 'weekly'  },
  { path: '/services',       priority: 0.9, changeFrequency: 'weekly'  },
  { path: '/blog',           priority: 0.9, changeFrequency: 'weekly'  },
  { path: '/contact',        priority: 0.7, changeFrequency: 'monthly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly'  },
  /* Buyer-targeted landing pages (high SEO priority) */
  { path: '/buyers/us-american-buyers',          priority: 0.95, changeFrequency: 'monthly' },
  /* Lead-magnet guides */
  { path: '/guides/americans-buying-italy-2026', priority: 0.85, changeFrequency: 'monthly' },
]

/* Mêmes slugs que dans /src/app/services/[slug]/page.tsx */
const SERVICE_SLUGS = [
  'immobilier',
  'renovation',
  'medical',
  'export',
  'visa-etudiant',
  'juridique',
  'conciergerie',
  'administratif',
  'evenements',
  'maisons-retraite',
  'financement',
  'professionnels',
  'silver-economy',
  'property-care',
  'thermal-wellness',
  'aviation-privee',
  'assistenza-scolastica',
  'vehicules',
]

/* Mêmes slugs que dans /src/app/blog/[slug]/page.tsx */
const BLOG_SLUGS = [
  'acheter-immobilier-italie-guide',
  'renovation-travaux-italie-etranger',
  'soins-medicaux-italie-guide-patients-etrangers',
  'visa-etudiant-italie-guide-complet',
  'export-produits-italiens-guide',
  'droit-immobilier-italien-etrangers',
  'codice-fiscale-permesso-soggiorno-guide',
  'conciergerie-italie-service-premium',
  'organisation-mariage-italie',
  'maisons-retraite-italie-choisir',
  'financement-immobilier-italie-non-residents',
  'trouver-architecte-geometre-italie',
  'silver-economy-retraite-italie-seniors',
  'property-care-gerer-bien-italie-distance',
  'thermal-wellness-cures-thermales-italie',
  'aviation-privee-italie-guide',
  'scolarite-ecoles-italie-enfants-expats',
  'importer-vehicule-italie-guide',
  'codice-fiscale-residence-permit-italy-2026',
  'foreigners-buy-property-italy-2026',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date()

  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: today,
    changeFrequency,
    priority,
  }))

  const serviceEntries: MetadataRoute.Sitemap = SERVICE_SLUGS.map(slug => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const blogEntries: MetadataRoute.Sitemap = BLOG_SLUGS.map(slug => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticEntries, ...serviceEntries, ...blogEntries]
}
