// ─── Google Analytics 4 — Event Tracking ─────────────────────────────────────
// Usage: import { trackEvent } from '@/lib/analytics'
//        trackEvent('rdv_opened', { service: 'immobilier' })
// ─────────────────────────────────────────────────────────────────────────────

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}

// ── Événements prédéfinis ITALYCARE 360 ──────────────────────────────────────

/** Ouverture du modal de RDV */
export const trackRdvOpen = (source?: string) =>
  trackEvent('rdv_modal_open', { source: source ?? 'unknown' })

/** Clic sur le bouton WhatsApp */
export const trackWhatsApp = () =>
  trackEvent('whatsapp_click')

/** Début du quiz d'éligibilité */
export const trackQuizStart = (service: string) =>
  trackEvent('quiz_start', { service })

/** Fin du quiz — résultat */
export const trackQuizResult = (service: string, result: 'eligible' | 'partial' | 'notEligible') =>
  trackEvent('quiz_result', { service, result })

/** Clic "Choisir mon créneau" → étape Calendly */
export const trackCalendlyOpen = (service?: string) =>
  trackEvent('calendly_open', { service: service ?? 'unknown' })

/** Clic sur un service */
export const trackServiceClick = (service: string) =>
  trackEvent('service_click', { service })

/** Clic sur une ville dans la carte */
export const trackCityClick = (city: string) =>
  trackEvent('map_city_click', { city })

/** Soumission du calculateur de coût */
export const trackCalculatorResult = (service: string, city: string, budget: string) =>
  trackEvent('calculator_result', { service, city, budget })
