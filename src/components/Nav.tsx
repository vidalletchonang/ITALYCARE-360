'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { useLang } from '@/context/LangContext'
import type { LangCode } from '@/i18n'

const LANGS: LangCode[] = ['fr', 'en', 'it', 'de', 'ar', 'ru']

/* Flag emojis for each language */
const FLAGS: Record<LangCode, string> = {
  fr: '🇫🇷',
  en: '🇬🇧',
  it: '🇮🇹',
  de: '🇩🇪',
  ar: '🇸🇦',
  ru: '🇷🇺',
}

/* Full language names */
const LANG_NAMES: Record<LangCode, string> = {
  fr: 'Français',
  en: 'English',
  it: 'Italiano',
  de: 'Deutsch',
  ar: 'العربية',
  ru: 'Русский',
}

/* Sub-labels for About dropdown */
const ABOUT_SUB: Record<string, { story: string; numbers: string; why: string; process: string; team: string; video: string; lifestyle: string; testimonials: string }> = {
  fr: { story: 'Notre histoire',    numbers: 'En chiffres',     why: 'Pourquoi nous',  process: 'Notre méthode',    team: 'Notre équipe',    video: 'Vidéo',  lifestyle: "L'art de vivre",    testimonials: 'Témoignages'   },
  en: { story: 'Our story',         numbers: 'By the numbers',  why: 'Why choose us',  process: 'Our method',       team: 'Our team',        video: 'Video',  lifestyle: 'The art of living', testimonials: 'Testimonials'  },
  it: { story: 'La nostra storia',  numbers: 'In numeri',       why: 'Perché noi',     process: 'Il nostro metodo', team: 'Il nostro team',  video: 'Video',  lifestyle: "L'arte del vivere", testimonials: 'Testimonianze' },
  de: { story: 'Unsere Geschichte', numbers: 'In Zahlen',       why: 'Warum wir',      process: 'Unsere Methode',   team: 'Unser Team',      video: 'Video',  lifestyle: 'Die Kunst zu leben', testimonials: 'Referenzen'   },
  ar: { story: 'قصتنا',             numbers: 'بالأرقام',         why: 'لماذا نحن',      process: 'منهجنا',           team: 'فريقنا',          video: 'فيديو',  lifestyle: 'فنُّ العيش',         testimonials: 'شهادات'        },
  ru: { story: 'Наша история',      numbers: 'В цифрах',        why: 'Почему мы',      process: 'Наш метод',        team: 'Наша команда',    video: 'Видео',  lifestyle: 'Искусство жизни',    testimonials: 'Отзывы'        },
}

/* Sub-labels for Blog dropdown */
const BLOG_SUB: Record<string, { all: string; guides: string; news: string }> = {
  fr: { all: 'Tous les articles', guides: 'Guides pratiques', news: 'Actualités' },
  en: { all: 'All articles',      guides: 'Practical guides', news: 'News'       },
  it: { all: 'Tutti gli articoli', guides: 'Guide pratiche', news: 'Notizie'     },
  de: { all: 'Alle Artikel',      guides: 'Praktische Guides', news: 'Aktuelles' },
  ar: { all: 'كل المقالات',       guides: 'أدلة عملية',      news: 'أخبار'       },
  ru: { all: 'Все статьи',        guides: 'Практические гиды', news: 'Новости'   },
}

/* Short service names for dropdown menu */
const SVC_SHORT: Record<string, Record<string, string>> = {
  'immobilier':            { fr: 'Immobilier',        en: 'Real Estate',        it: 'Immobiliare',         de: 'Immobilien',           ar: 'عقارات',           ru: 'Недвижимость' },
  'renovation':            { fr: 'Rénovation',        en: 'Renovation',         it: 'Ristrutturazione',    de: 'Renovierung',          ar: 'تجديد',            ru: 'Ремонт' },
  'medical':               { fr: 'Suivi Médical',     en: 'Medical Care',       it: 'Assistenza Medica',   de: 'Medizinische Betreuung', ar: 'رعاية طبية',       ru: 'Медицина' },
  'export':                { fr: 'Export Italy',      en: 'Export Italy',       it: 'Export Italy',        de: 'Export Italy',         ar: 'تصدير إيطالي',     ru: 'Экспорт' },
  'visa-etudiant':         { fr: 'Visa Étudiant',     en: 'Student Visa',       it: 'Visto Studente',      de: 'Studentenvisum',       ar: 'تأشيرة طالب',      ru: 'Виза студента' },
  'juridique':             { fr: 'Juridique',         en: 'Legal',              it: 'Legale',              de: 'Recht',                ar: 'قانوني',           ru: 'Юридическая' },
  'conciergerie':          { fr: 'Conciergerie',      en: 'Concierge',          it: 'Concierge',           de: 'Concierge',            ar: 'كونسيرج',          ru: 'Консьерж' },
  'administratif':         { fr: 'Administratif',     en: 'Administrative',     it: 'Amministrativo',      de: 'Verwaltung',           ar: 'إداري',            ru: 'Админ.' },
  'evenements':            { fr: 'Événements',        en: 'Events',             it: 'Eventi',              de: 'Events',               ar: 'فعاليات',          ru: 'Мероприятия' },
  'maisons-retraite':      { fr: 'Maisons Retraite',  en: 'Retirement Homes',   it: 'Case di Riposo',      de: 'Seniorenresidenzen',   ar: 'دور مسنين',        ru: 'Дома престарелых' },
  'financement':           { fr: 'Financement',       en: 'Financing',          it: 'Finanziamento',       de: 'Finanzierung',         ar: 'تمويل',            ru: 'Финансирование' },
  'professionnels':        { fr: 'Professionnels',    en: 'Professionals',      it: 'Professionisti',      de: 'Fachleute',            ar: 'مهنيون',           ru: 'Специалисты' },
  'silver-economy':        { fr: 'Silver Economy',    en: 'Silver Economy',     it: 'Silver Economy',      de: 'Silver Economy',       ar: 'Silver Economy',   ru: 'Silver Economy' },
  'property-care':         { fr: 'Property Care',     en: 'Property Care',      it: 'Property Care',       de: 'Property Care',        ar: 'Property Care',    ru: 'Property Care' },
  'thermal-wellness':      { fr: 'Thermal Wellness',  en: 'Thermal Wellness',   it: 'Terme & Wellness',    de: 'Thermal Wellness',     ar: 'علاج حراري',       ru: 'Термы' },
  'aviation-privee':       { fr: 'Aviation Privée',   en: 'Private Aviation',   it: 'Aviazione Privata',   de: 'Privatluftfahrt',      ar: 'طيران خاص',        ru: 'Авиация' },
  'assistenza-scolastica': { fr: 'Scolarité',         en: 'School Assistance',  it: 'Assistenza Scolastica', de: 'Schulberatung',      ar: 'مدرسة',          ru: 'Школа' },
  'vehicules':             { fr: 'Véhicules',         en: 'Vehicles',           it: 'Veicoli',             de: 'Fahrzeuge',            ar: 'مركبات',           ru: 'Автомобили' },
}

interface NavProps {
  onRdv: () => void
}

export default function Nav({ onRdv }: NavProps) {
  const { lang, setLang, t } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDd, setOpenDd] = useState<string | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const ab = ABOUT_SUB[lang] ?? ABOUT_SUB.en
  const bl = BLOG_SUB[lang]  ?? BLOG_SUB.en

  const openMenu  = (key: string) => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setOpenDd(key)
  }
  const closeMenu = () => {
    timerRef.current = setTimeout(() => setOpenDd(null), 120)
  }

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <div className="flag-bar">
        <div className="f1" /><div className="f2" /><div className="f3" />
      </div>
      <nav>
        <div className="nav-logo">
          <div className="nav-logo-shield" style={{ background: '#1a2744' }}>
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo-original.png`}
              alt="ItalyCare360 logo"
              style={{ height: '60px', width: 'auto' }}
            />
          </div>
          <div className="nl-text">
            <div className="nl-main">ITALY<span style={{ fontStyle: 'italic' }}>Care</span><span className="nl-360">360°</span><img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/moneta.png`}
              alt="Moneta"
              className="nl-coin"
              width={40}
              height={40}
              loading="eager"
            /></div>
          </div>
        </div>

        <ul className="nav-links">
          {/* Home */}
          <li><Link href="/">{t.nav.home}</Link></li>

          {/* Services — dropdown with all 16 services */}
          <li
            className="has-dd"
            onMouseEnter={() => openMenu('services')}
            onMouseLeave={closeMenu}
          >
            <Link href="/services" className="dd-trigger">
              {t.nav.services}
              <svg className="dd-arrow" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" width="10" height="6"><path d="M1 1l4 4 4-4"/></svg>
            </Link>
            {openDd === 'services' && (
              <div className="nav-dd nav-dd--wide" onMouseEnter={() => openMenu('services')} onMouseLeave={closeMenu}>
                <div className="nav-dd-heading">{t.nav.services}</div>
                <div className="nav-dd-grid">
                  {t.services.items.map(item => (
                    <Link key={item.slug} href={`/services/${item.slug}`} className="nav-dd-item" onClick={() => setOpenDd(null)}>
                      {SVC_SHORT[item.slug]?.[lang] || item.t}
                    </Link>
                  ))}
                </div>
                <div className="nav-dd-footer">
                  <Link href="/services" className="nav-dd-all" onClick={() => setOpenDd(null)}>
                    <span>{t.nav.services}</span>
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                  </Link>
                </div>
              </div>
            )}
          </li>

          {/* About — dropdown with sub-sections */}
          <li
            className="has-dd"
            onMouseEnter={() => openMenu('about')}
            onMouseLeave={closeMenu}
          >
            <Link href="/about" className="dd-trigger">
              {t.nav.about}
              <svg className="dd-arrow" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" width="10" height="6"><path d="M1 1l4 4 4-4"/></svg>
            </Link>
            {(openDd === 'about' || openDd === 'about-story') && (
              <div className="nav-dd nav-dd--sm" onMouseEnter={() => openMenu('about')} onMouseLeave={closeMenu}>
                {/* Notre Histoire — itself contains a sub-flyout */}
                <div
                  className="nav-dd-item has-sub"
                  onMouseEnter={() => openMenu('about-story')}
                  onMouseLeave={() => openMenu('about')}
                >
                  <Link href="/about" className="nav-dd-sub-trigger" onClick={() => setOpenDd(null)}>
                    <span>{ab.story}</span>
                    <svg viewBox="0 0 6 10" fill="none" stroke="currentColor" strokeWidth="1.5" width="6" height="10"><path d="M1 1l4 4-4 4"/></svg>
                  </Link>
                  {openDd === 'about-story' && (
                    <div className="nav-dd-sub" onMouseEnter={() => openMenu('about-story')} onMouseLeave={() => openMenu('about')}>
                      <Link href="/about#numbers" className="nav-dd-item" onClick={() => setOpenDd(null)}>{ab.why}</Link>
                      <Link href="/about#process" className="nav-dd-item" onClick={() => setOpenDd(null)}>{ab.process}</Link>
                      <Link href="/about#team"    className="nav-dd-item" onClick={() => setOpenDd(null)}>{ab.team}</Link>
                    </div>
                  )}
                </div>

                <Link href="/about#video"         className="nav-dd-item" onClick={() => setOpenDd(null)}>{ab.video}</Link>
                <Link href="/about#lifestyle"     className="nav-dd-item" onClick={() => setOpenDd(null)}>{ab.lifestyle}</Link>
                <Link href="/about#testimonials"  className="nav-dd-item" onClick={() => setOpenDd(null)}>{ab.testimonials}</Link>
              </div>
            )}
          </li>

          {/* Blog — dropdown */}
          <li
            className="has-dd"
            onMouseEnter={() => openMenu('blog')}
            onMouseLeave={closeMenu}
          >
            <Link href="/blog" className="dd-trigger">
              {t.nav.blog}
              <svg className="dd-arrow" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" width="10" height="6"><path d="M1 1l4 4 4-4"/></svg>
            </Link>
            {openDd === 'blog' && (
              <div className="nav-dd nav-dd--sm" onMouseEnter={() => openMenu('blog')} onMouseLeave={closeMenu}>
                <Link href="/blog"              className="nav-dd-item" onClick={() => setOpenDd(null)}>{bl.all}</Link>
              </div>
            )}
          </li>

          {/* Contact */}
          <li>
            <Link href="/contact">{t.nav.contact}</Link>
          </li>
        </ul>

        <div className="nav-right">
          <div
            className="lang-picker"
            onMouseEnter={() => openMenu('langs')}
            onMouseLeave={closeMenu}
          >
            <button
              className="lang-trigger"
              onClick={() => setOpenDd(openDd === 'langs' ? null : 'langs')}
              aria-label="Choose language"
            >
              <span className="lang-flag">{FLAGS[lang]}</span>
              <span className="lang-code">{lang.toUpperCase()}</span>
              <svg className="dd-arrow" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" width="10" height="6"><path d="M1 1l4 4 4-4"/></svg>
            </button>
            {openDd === 'langs' && (
              <div className="lang-dropdown" onMouseEnter={() => openMenu('langs')} onMouseLeave={closeMenu}>
                <div className="lang-dropdown-scroll">
                  {LANGS.map(l => (
                    <button
                      key={l}
                      className={`lang-item${lang === l ? ' active' : ''}`}
                      onClick={() => { setLang(l); setOpenDd(null) }}
                    >
                      <span className="lang-flag">{FLAGS[l]}</span>
                      <span className="lang-name">{LANG_NAMES[l]}</span>
                      <span className="lang-code-sm">{l.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/services#calculator" className="nav-estimate-btn">
            {{ fr:'Devis', en:'Estimate', it:'Preventivo', de:'Kostenvoranschlag', ar:'تقدير', ru:'Оценка' }[lang] || 'Estimate'}
          </Link>
          <button className="nav-cta" onClick={onRdv}>
            {t.nav.cta}
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <Link href="/" onClick={() => setMenuOpen(false)}>{t.nav.home}</Link>

        {/* Services with sub-items */}
        <Link href="/services" onClick={() => setMenuOpen(false)} style={{ fontWeight: 600 }}>{t.nav.services}</Link>
        <div className="mobile-sub">
          {t.services.items.map(item => (
            <Link key={item.slug} href={`/services/${item.slug}`} onClick={() => setMenuOpen(false)} className="mobile-sub-item">
              {item.t}
            </Link>
          ))}
        </div>

        {/* About with sub-items */}
        <Link href="/about" onClick={() => setMenuOpen(false)} style={{ fontWeight: 600 }}>{t.nav.about}</Link>
        <div className="mobile-sub">
          <Link href="/about"               onClick={() => setMenuOpen(false)} className="mobile-sub-item" style={{ fontWeight: 600 }}>{ab.story}</Link>
          <div className="mobile-sub-nested">
            <Link href="/about#numbers"       onClick={() => setMenuOpen(false)} className="mobile-sub-item">{ab.why}</Link>
            <Link href="/about#process"       onClick={() => setMenuOpen(false)} className="mobile-sub-item">{ab.process}</Link>
            <Link href="/about#team"          onClick={() => setMenuOpen(false)} className="mobile-sub-item">{ab.team}</Link>
          </div>
          <Link href="/about#video"         onClick={() => setMenuOpen(false)} className="mobile-sub-item">{ab.video}</Link>
          <Link href="/about#lifestyle"     onClick={() => setMenuOpen(false)} className="mobile-sub-item">{ab.lifestyle}</Link>
          <Link href="/about#testimonials"  onClick={() => setMenuOpen(false)} className="mobile-sub-item">{ab.testimonials}</Link>
        </div>

        {/* Blog with sub-items */}
        <Link href="/blog" onClick={() => setMenuOpen(false)} style={{ fontWeight: 600 }}>{t.nav.blog}</Link>
        <div className="mobile-sub">
          <Link href="/blog"             onClick={() => setMenuOpen(false)} className="mobile-sub-item">{bl.all}</Link>
        </div>

        <Link href="/contact" onClick={() => setMenuOpen(false)}>{t.nav.contact}</Link>

        <div className="mobile-langs">
          {LANGS.map(l => (
            <button
              key={l}
              className={`lang-btn${lang === l ? ' active' : ''}`}
              onClick={() => { setLang(l); setMenuOpen(false) }}
            >
              <span className="lang-flag">{FLAGS[l]}</span>
              <span className="lang-code">{l.toUpperCase()}</span>
            </button>
          ))}
        </div>
        <button className="nav-cta" onClick={() => { onRdv(); setMenuOpen(false) }} style={{ marginTop: 8 }}>
          {t.nav.cta}
        </button>
      </div>
    </>
  )
}
