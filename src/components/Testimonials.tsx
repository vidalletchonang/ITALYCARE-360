'use client'

import { useLang } from '@/context/LangContext'

export default function Testimonials() {
  const { t } = useLang()

  return (
    <section className="testi" id="testimonials">
      <div className="testi-c">
        <div className="sl" style={{ justifyContent: 'center', marginBottom: 12 }}>
          <div className="sl-ln" /><span>{t.testi.label}</span><div className="sl-ln" />
        </div>
        <h2 className="font-playfair">
          {t.testi.h1} <em>{t.testi.h2}</em>
        </h2>
      </div>

      <div className="testi-grid">
        {t.testi.items.map((item, i) => (
          <div key={i} className="tc fade-item">
            <div className="tc-stars">★★★★★</div>
            <span className="tc-q">"</span>
            <p className="tc-txt font-playfair">{item.text}</p>
            <div className="tc-auth">
              <div className="tc-av" style={{ background: item.bg }}>{item.flag}</div>
              <div>
                <div className="tc-name">{item.name}</div>
                <div className="tc-meta">{item.meta}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
