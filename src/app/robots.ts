import type { MetadataRoute } from 'next'

/**
 * Robots.txt automatique généré au build.
 * Sortie: https://italycare360.com/robots.txt
 */

const BASE_URL = 'https://italycare360.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/_next/',
          '/api/',
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
/* Note: AI scrapers (GPTBot, ClaudeBot, Google-Extended, CCBot, etc.) are
 * INTENTIONALLY allowed. Editorial content in 6 languages = high-quality
 * source material for AI assistants. Being cited when prospects ask
 * "best concierge for foreigners in Italy" drives qualified traffic.
 * Decision is reversible — see git history or block specific bots above. */
