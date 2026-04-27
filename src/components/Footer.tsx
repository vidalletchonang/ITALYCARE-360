'use client'

import Link from 'next/link'
import { useLang } from '@/context/LangContext'

const WHATSAPP_URL = 'https://wa.me/393517501164'

/* Map footer link labels → actual routes (all 5 languages) */
const LINK_MAP: Record<string, string> = {
  /* Services column */
  'Immobilier': '/services/immobilier',
  'Real Estate': '/services/immobilier',
  'Immobiliare': '/services/immobilier',
  'العقارات': '/services/immobilier',
  'Недвижимость': '/services/immobilier',
  'Rénovation': '/services/renovation',
  'Renovation': '/services/renovation',
  'Ristrutturazione': '/services/renovation',
  'التجديد': '/services/renovation',
  'Ремонт': '/services/renovation',
  'Suivi Médical': '/services/medical',
  'Medical Care': '/services/medical',
  'Assistenza Medica': '/services/medical',
  'الرعاية الطبية': '/services/medical',
  'Медицина': '/services/medical',
  'Export Italy': '/services/export',
  'التصدير': '/services/export',
  'Экспорт Италия': '/services/export',
  'Visa Étudiant': '/services/visa-etudiant',
  'Student Visa': '/services/visa-etudiant',
  'Visto Studente': '/services/visa-etudiant',
  'تأشيرة الطالب': '/services/visa-etudiant',
  'Студенческая виза': '/services/visa-etudiant',
  'Juridique': '/services/juridique',
  'Legal': '/services/juridique',
  'Legale': '/services/juridique',
  'قانوني': '/services/juridique',
  'Юридическая': '/services/juridique',
  'Conciergerie': '/services/conciergerie',
  'Concierge': '/services/conciergerie',
  'كونسيرج': '/services/conciergerie',
  'Консьерж': '/services/conciergerie',
  'Admin': '/services/administratif',
  'Amministrativo': '/services/administratif',
  'إداري': '/services/administratif',
  'Административные': '/services/administratif',

  /* Company column */
  'À propos': '/about',
  'About': '/about',
  'Chi siamo': '/about',
  'من نحن': '/about',
  'О нас': '/about',
  'Notre équipe': '/about#team',
  'Our Team': '/about#team',
  'Il nostro team': '/about#team',
  'فريقنا': '/about#team',
  'Наша команда': '/about#team',
  'Partenaires': '/about#team',
  'Partners': '/about#team',
  'Partner': '/about#team',
  'الشركاء': '/about#team',
  'Партнёры': '/about#team',
  'Témoignages': '/#testimonials',
  'Testimonials': '/#testimonials',
  'Testimonianze': '/#testimonials',
  'الشهادات': '/#testimonials',
  'Отзывы': '/#testimonials',
  'Blog & Guides': '/blog',
  'Blog & Guide': '/blog',
  'المدونة والأدلة': '/blog',
  'Блог и гиды': '/blog',
  'Carrières': '/contact',
  'Careers': '/contact',
  'Carriere': '/contact',
  'الوظائف': '/contact',
  'Карьера': '/contact',

  /* Contact column */
  'Consultation gratuite': '/contact',
  'Free Consultation': '/contact',
  'Consulenza gratuita': '/contact',
  'استشارة مجانية': '/contact',
  'Бесплатная консультация': '/contact',
  'WhatsApp': WHATSAPP_URL,
  'واتساب': WHATSAPP_URL,
  'Espace client': '/contact',
  'Client Area': '/contact',
  'Area clienti': '/contact',
  'فضاء العميل': '/contact',
  'Личный кабинет': '/contact',
  'FAQ': '/contact',
  'الأسئلة الشائعة': '/contact',
  'Mentions légales': '/privacy-policy',
  'Legal Notice': '/privacy-policy',
  'Note legali': '/privacy-policy',
  'الإشعارات القانونية': '/privacy-policy',
  'Правовые уведомления': '/privacy-policy',
  'CGU / RGPD': '/privacy-policy',
  'T&C / GDPR': '/privacy-policy',
  'الشروط والخصوصية': '/privacy-policy',
  'Условия / GDPR': '/privacy-policy',
}

export default function Footer() {
  const { t } = useLang()

  return (
    <footer>
      <div className="ft">
        <div>
          <div className="fb-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo-original.png`}
              alt="ItalyCare360 logo"
              style={{ height: '52px', width: 'auto', flexShrink: 0 }}
            />
            <div>
              <div>ITALY<span style={{ fontStyle: 'italic' }}>Care</span><span className="nl-360">360°</span></div>
            </div>
          </div>
          <p className="fb-p">{t.footer.desc}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', margin: '20px 0' }}>
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/moneta.png`}
              alt="Founder"
              width={64}
              height={64}
              loading="lazy"
              style={{ width: '64px', height: '64px', objectFit: 'contain', filter: 'sepia(1) saturate(4) hue-rotate(-5deg) brightness(1.05) contrast(1.1)', flexShrink: 0 }}
            />
            <div style={{ fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
              Founded by<br />
              <span style={{ color: 'var(--o)', fontWeight: 600, fontSize: '12px' }}>Fabrizio Permunian</span>
            </div>
          </div>
          <div className="socials">
            <a
              href="https://www.instagram.com/italycare360"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ITALYCARE 360 on Instagram"
              title="Instagram @italycare360"
              className="soc"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/people/ItalyCare-360/61560213445080/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ITALYCARE 360 on Facebook"
              title="Facebook ItalyCare 360"
              className="soc"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073C0 18.062 4.388 23.027 10.125 23.927V15.54H7.078v-3.467h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.875v2.265h3.328l-.532 3.467h-2.796v8.387C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/italycare-360/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ITALYCARE 360 on LinkedIn"
              title="LinkedIn ITALYCARE 360"
              className="soc"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://youtube.com/@italycare360"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ITALYCARE 360 on YouTube"
              title="YouTube @italycare360"
              className="soc"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/>
              </svg>
            </a>
          </div>
        </div>
        {t.footer.cols.map((col, i) => (
          <div key={i} className="fc">
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link, j) => {
                const href = LINK_MAP[link] || LINK_MAP[link.trim()] || '#'
                const isExternal = href.startsWith('http')
                if (isExternal) {
                  return <li key={j}><a href={href} target="_blank" rel="noopener noreferrer">{link}</a></li>
                }
                return href !== '#' ? (
                  <li key={j}><Link href={href}>{link}</Link></li>
                ) : (
                  <li key={j}><a href="#">{link}</a></li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="fb-bot">
        <div>{t.footer.copy}</div>
        <div className="flag-m">
          <div className="fm fm1" /><div className="fm fm2" /><div className="fm fm3" />
        </div>
        <div>{t.footer.tagline}</div>
      </div>
    </footer>
  )
}
