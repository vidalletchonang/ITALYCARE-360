import type { Metadata, Viewport } from 'next'
import './globals.css'
import { LangProvider } from '@/context/LangContext'
import ChatBotMount from '@/components/ChatBotMount'
import MusicPlayerMount from '@/components/MusicPlayerMount'
import CookieConsent from '@/components/CookieConsent'

/* Google Analytics is no longer loaded eagerly here.
 * It now lives inside <CookieConsent />, which only injects the GA4 scripts
 * AFTER the visitor explicitly accepts analytics cookies (GDPR-compliant). */

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#141C2B',
}

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
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://italycare-chat.italycare360.workers.dev" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400&family=Jost:wght@400;500;600;700&family=Cairo:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LangProvider>
          {children}
          <MusicPlayerMount />
          <ChatBotMount />
          <CookieConsent />
        </LangProvider>
      </body>
    </html>
  )
}
