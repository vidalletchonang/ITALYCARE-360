'use client'

import { useLang } from '@/context/LangContext'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const TITLE: Record<string, string> = {
  fr: 'Contactez-nous',
  en: 'Contact Us',
  it: 'Contattaci',
  ar: 'اتصل بنا',
  ru: 'Свяжитесь с нами',
}

const SUBTITLE: Record<string, string> = {
  fr: 'Nous sommes à votre disposition pour répondre à toutes vos questions.',
  en: 'We are available to answer all your questions.',
  it: 'Siamo a vostra disposizione per rispondere a tutte le vostre domande.',
  ar: 'نحن متاحون للإجابة على جميع أسئلتكم.',
  ru: 'Мы готовы ответить на все ваши вопросы.',
}

const HOURS_TITLE: Record<string, string> = {
  fr: 'Horaires d\'ouverture',
  en: 'Opening Hours',
  it: 'Orari di apertura',
  ar: 'ساعات العمل',
  ru: 'Часы работы',
}

const HOURS_DETAIL: Record<string, string> = {
  fr: 'Lundi – Jeudi : 9h00 – 16h30\nVendredi : 9h00 – 14h30',
  en: 'Monday – Thursday: 9:00 AM – 4:30 PM\nFriday: 9:00 AM – 2:30 PM',
  it: 'Lunedì – Giovedì: 9:00 – 16:30\nVenerdì: 9:00 – 14:30',
  ar: 'الإثنين – الخميس: 9:00 – 16:30\nالجمعة: 9:00 – 14:30',
  ru: 'Понедельник – Четверг: 9:00 – 16:30\nПятница: 9:00 – 14:30',
}

const WRITE_US: Record<string, string> = {
  fr: 'Écrivez-nous',
  en: 'Write to Us',
  it: 'Scrivici',
  ar: 'راسلنا',
  ru: 'Напишите нам',
}

const CALL_US: Record<string, string> = {
  fr: 'Appelez-nous',
  en: 'Call Us',
  it: 'Chiamaci',
  ar: 'اتصل بنا',
  ru: 'Позвоните нам',
}

const VISIT_US: Record<string, string> = {
  fr: 'Rendez-nous visite',
  en: 'Visit Us',
  it: 'Vieni a trovarci',
  ar: 'زورنا',
  ru: 'Посетите нас',
}

export default function ContactPage() {
  const { lang } = useLang()
  const l = lang || 'fr'

  return (
    <>
      <Nav onRdv={() => {}} />
      <main style={{ paddingTop: 76 }}>
        {/* Hero */}
        <section className="page-hero">
          <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1920&q=80')" }} />
          <div className="page-hero-overlay" />
          <div className="page-hero-inner">
            <span className="page-hero-tag">ITALYCARE 360</span>
            <h1>{TITLE[l]}</h1>
            <p>{SUBTITLE[l]}</p>
          </div>
        </section>

        {/* Cards */}
        <section className="contact-cards">
          <div className="contact-card">
            <div className="contact-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d4a843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <h3>{WRITE_US[l]}</h3>
            <a href="mailto:info@italycare360.com" className="contact-link">info@italycare360.com</a>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d4a843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <h3>{CALL_US[l]}</h3>
            <a href="tel:+393517501164" className="contact-link">+39 351 750 1164</a>
            <a href="https://wa.me/393517501164" className="contact-link contact-link--wa">WhatsApp →</a>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d4a843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3>{VISIT_US[l]}</h3>
            <p className="contact-address">Via Corso del Popolo 222<br/>45100 Rovigo, Italia</p>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d4a843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h3>{HOURS_TITLE[l]}</h3>
            <p className="contact-address" style={{ whiteSpace: 'pre-line' }}>{HOURS_DETAIL[l]}</p>
          </div>
        </section>

        {/* Map */}
        <section className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2845.6!2d11.787!3d45.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f2e0b1e6b3b0f%3A0x0!2sVia+del+Popolo+222%2C+45100+Rovigo+RO!5e0!3m2!1sfr!2sit!4v1"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: 16 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>
      <Footer />
    </>
  )
}
