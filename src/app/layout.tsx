import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { LangProvider } from '@/context/LangContext'
import Cursor from '@/components/Cursor'

// ─── Google Analytics 4 ───────────────────────────────────────────────────────
// Remplacez GA_MEASUREMENT_ID par votre vrai ID (ex: G-ABC123XYZ)
// Obtenez-le sur : https://analytics.google.com → Admin → Flux de données → Web
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-PCT2YT8RWG'
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'ITALYCARE 360 — Votre Vie en Italie, Réinventée',
  description: 'ITALYCARE 360 accompagne les étrangers dans tous leurs projets en Italie — immobilier, santé, rénovation, export, visa étudiant et bien plus.',
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;0,900;1,400;1,700&family=Jost:wght@200;300;400;500;600&family=Cairo:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

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
        <Cursor />
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  )
}
