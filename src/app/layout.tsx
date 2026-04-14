import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { LangProvider } from '@/context/LangContext'

// ─── Google Analytics 4 ───────────────────────────────────────────────────────
// Remplacez GA_MEASUREMENT_ID par votre vrai ID (ex: G-ABC123XYZ)
// Obtenez-le sur : https://analytics.google.com → Admin → Flux de données → Web
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-PCT2YT8RWG'
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'ITALYCARE 360 — Acheter un bien en Italie | Visa Étudiant Italie | Services pour Étrangers',
  description: 'Achat immobilier en Italie, visa étudiant italien, soins médicaux en Italie, rénovation maison Italie, export Made in Italy, assistance juridique — ITALYCARE 360 accompagne les étrangers dans tous leurs projets en Italie. Consultation gratuite.',
  keywords: 'acheter maison Italie, immobilier Italie étranger, visa étudiant Italie, soins médicaux Italie, rénovation Italie, export Made in Italy, avocat Italie étranger, vivre en Italie, investir en Italie, conciergerie Italie, buy property Italy, Italian student visa, healthcare Italy expats, Italy relocation services',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'ITALYCARE 360 — Your Life in Italy, Simplified',
    description: 'Buy property in Italy, student visa, medical care, renovation, legal assistance — one partner for your entire life in Italy.',
    type: 'website',
    siteName: 'ITALYCARE 360',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Playfair+Display:ital,wght@0,500;0,700;1,400&family=Jost:wght@400;500;600&family=Cairo:wght@400;600&display=swap" rel="stylesheet" />

        {/* Google Analytics 4 */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: true
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body>
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  )
}
