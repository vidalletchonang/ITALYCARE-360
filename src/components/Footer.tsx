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
              <div>ITALY<span style={{ fontStyle: 'italic' }}>Care</span></div>
            </div>
          </div>
          <p className="fb-p">{t.footer.desc}</p>
          <div className="socials">
            <a href="#" className="soc">f</a>
            <a href="#" className="soc">in</a>
            <a href="#" className="soc">ig</a>
            <a href="#" className="soc">yt</a>
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
