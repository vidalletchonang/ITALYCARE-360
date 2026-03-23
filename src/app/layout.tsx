import type { Metadata } from 'next'
import './globals.css'
import { LangProvider } from '@/context/LangContext'

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
      </head>
      <body>
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  )
}
