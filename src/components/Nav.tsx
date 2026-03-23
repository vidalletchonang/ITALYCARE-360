'use client'

import { useState } from 'react'
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
    { href: '#services', label: t.nav.services },
    { href: '#about', label: t.nav.about },
    { href: '#process', label: t.nav.process },
    { href: '#testi', label: t.nav.testi },
    { href: '#contact', label: t.nav.contact },
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
          <div className="nl-main">ITALY<span>CARE</span></div>
          <div className="nl-sub">360° Services en Italie</div>
        </div>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={e => smoothScroll(e, l.href)}>{l.label}</a>
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
          <a key={l.href} href={l.href} onClick={e => smoothScroll(e, l.href)}>{l.label}</a>
        ))}
        <button className="nav-cta" onClick={() => { onRdv(); setMenuOpen(false) }} style={{ marginTop: 8 }}>
          {t.nav.cta}
        </button>
      </div>
    </>
  )
}
