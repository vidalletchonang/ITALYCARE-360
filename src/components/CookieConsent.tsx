'use client'

/**
 * GDPR-compliant cookie consent banner + conditional Google Analytics loader.
 *
 * Behaviour:
 *   - Reads localStorage key `italycare-consent` ("accepted" | "rejected" | null)
 *   - If null → banner is shown on first visit (GA4 NOT loaded yet)
 *   - If "accepted" → GA4 is injected and initialised (anonymised IP)
 *   - If "rejected" → GA4 never loads
 *   - User can revoke via footer link / DevTools
 *
 * No cookies are set before the user makes a choice (strict GDPR compliance).
 */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { useLang } from '@/context/LangContext'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-PCT2YT8RWG'

type Decision = 'accepted' | 'rejected' | null

const TXT: Record<string, {
  title: string
  body: string
  accept: string
  reject: string
  privacy: string
}> = {
  fr: {
    title: 'Nous respectons votre vie privée',
    body: "Nous utilisons des cookies d'analyse (Google Analytics) pour comprendre l'utilisation du site et améliorer votre expérience. Votre adresse IP est anonymisée. Aucun cookie n'est déposé avant votre consentement.",
    accept: 'Accepter',
    reject: 'Refuser',
    privacy: 'Politique de confidentialité',
  },
  en: {
    title: 'We respect your privacy',
    body: "We use analytics cookies (Google Analytics) to understand site usage and improve your experience. Your IP address is anonymised. No cookie is set before your consent.",
    accept: 'Accept',
    reject: 'Reject',
    privacy: 'Privacy policy',
  },
  it: {
    title: 'Rispettiamo la tua privacy',
    body: "Utilizziamo cookie di analisi (Google Analytics) per capire l'uso del sito e migliorare la tua esperienza. Il tuo indirizzo IP è anonimo. Nessun cookie viene impostato prima del tuo consenso.",
    accept: 'Accetta',
    reject: 'Rifiuta',
    privacy: 'Informativa sulla privacy',
  },
  de: {
    title: 'Wir respektieren Ihre Privatsphäre',
    body: 'Wir verwenden Analyse-Cookies (Google Analytics), um die Nutzung der Website zu verstehen und Ihre Erfahrung zu verbessern. Ihre IP-Adresse wird anonymisiert. Vor Ihrer Zustimmung wird kein Cookie gesetzt.',
    accept: 'Akzeptieren',
    reject: 'Ablehnen',
    privacy: 'Datenschutzerklärung',
  },
  ar: {
    title: 'نحترم خصوصيتك',
    body: 'نستخدم ملفات تعريف الارتباط التحليلية (Google Analytics) لفهم استخدام الموقع وتحسين تجربتك. يتم إخفاء عنوان IP الخاص بك. لا يتم تعيين أي ملف قبل موافقتك.',
    accept: 'قبول',
    reject: 'رفض',
    privacy: 'سياسة الخصوصية',
  },
  ru: {
    title: 'Мы уважаем вашу конфиденциальность',
    body: 'Мы используем аналитические cookie (Google Analytics), чтобы понять использование сайта и улучшить ваш опыт. Ваш IP-адрес анонимизируется. До вашего согласия cookie не устанавливаются.',
    accept: 'Принять',
    reject: 'Отклонить',
    privacy: 'Политика конфиденциальности',
  },
}

export default function CookieConsent() {
  const { lang } = useLang()
  const [decision, setDecision] = useState<Decision>(null)
  const [mounted, setMounted] = useState(false)

  /* Read existing decision on mount (SSR-safe) */
  useEffect(() => {
    setMounted(true)
    try {
      const saved = localStorage.getItem('italycare-consent') as Decision
      if (saved === 'accepted' || saved === 'rejected') setDecision(saved)
    } catch {}
  }, [])

  const persist = (d: Exclude<Decision, null>) => {
    try { localStorage.setItem('italycare-consent', d) } catch {}
    setDecision(d)
  }

  if (!mounted) return null

  const t = TXT[lang] || TXT.en
  const showBanner = decision === null
  const loadAnalytics = decision === 'accepted' && !!GA_ID

  return (
    <>
      {/* Google Analytics — ONLY loaded after user accepts */}
      {loadAnalytics && (
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
                anonymize_ip: true,
                page_path: window.location.pathname,
                send_page_view: true,
                allow_google_signals: false,
                allow_ad_personalization_signals: false
              });
            `}
          </Script>
        </>
      )}

      {/* Consent banner */}
      {showBanner && (
        <div className="cookie-consent" role="dialog" aria-live="polite" aria-label={t.title}>
          <div className="cookie-consent-inner">
            <div className="cookie-consent-text">
              <h3 className="cookie-consent-title">{t.title}</h3>
              <p className="cookie-consent-body">
                {t.body}{' '}
                <Link href="/privacy-policy" className="cookie-consent-link">{t.privacy}</Link>
              </p>
            </div>
            <div className="cookie-consent-actions">
              <button type="button" className="cookie-btn cookie-btn-reject" onClick={() => persist('rejected')}>
                {t.reject}
              </button>
              <button type="button" className="cookie-btn cookie-btn-accept" onClick={() => persist('accepted')}>
                {t.accept}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
