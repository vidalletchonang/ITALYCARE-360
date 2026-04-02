'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLang } from '@/context/LangContext'
import type { LangCode } from '@/i18n'

const LANGS: LangCode[] = ['fr', 'en', 'ar', 'it']

interface NavProps {
  onRdv: () => void
}

export default function Nav({ onRdv }: NavProps) {
  const { lang, setLang, t } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '/', label: t.nav.home, isPage: true },
    { href: '/services', label: t.nav.services, isPage: true },
    { href: '/about', label: t.nav.about, isPage: true },
    { href: '/blog', label: t.nav.blog, isPage: true },
    { href: '/#contact', label: t.nav.contact, isPage: true },
  ]

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
          <div className="nav-logo-shield">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo-shield.svg?v=4`}
              alt="ItalyCare360 shield"
              style={{ height: '56px', width: 'auto' }}
            />
          </div>
          <div>
            <div className="nl-main">ITALY<span>CARE</span></div>
            <div className="nl-sub">360° Services en Italie</div>
          </div>
        </div>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              {l.isPage ? (
                <Link href={l.href}>{l.label}</Link>
              ) : (
                <a href={l.href} onClick={e => smoothScroll(e, l.href)}>{l.label}</a>
              )}
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <div className="langs">
            {LANGS.map(l => (
              <button
                key={l}
                className={`lang-btn${lang === l ? ' active' : ''}`}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <Link href="/services#calculator" className="nav-estimate-btn">
            {{ fr:'Devis', en:'Estimate', it:'Preventivo', ar:'تقدير' }[lang] || 'Estimate'}
          </Link>
          <button className="nav-cta" onClick={onRdv}>
            {t.nav.cta}
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          l.isPage ? (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</Link>
          ) : (
            <a key={l.href} href={l.href} onClick={e => smoothScroll(e, l.href)}>{l.label}</a>
          )
        ))}
        {/* Language switcher inside mobile menu */}
        <div className="mobile-langs">
          {LANGS.map(l => (
            <button
              key={l}
              className={`lang-btn${lang === l ? ' active' : ''}`}
              onClick={() => { setLang(l); setMenuOpen(false) }}
            >
              {l.toUpperCase()}
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
