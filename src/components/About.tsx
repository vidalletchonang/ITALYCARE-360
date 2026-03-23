'use client'

import { useLang } from '@/context/LangContext'

export default function About() {
  const { t } = useLang()

  return (
    <section className="about" id="about">
      <div className="about-vis">
        <div className="avis-glow" />
        <div className="orbit-wrap">
          <div className="orbit-ring" />
          <div className="orbit-center">
            <div className="oc-t">ITALY<br />CARE<br />360°</div>
          </div>
          <div className="oi oi1">🏠<div className="oi-lbl">Immo</div></div>
          <div className="oi oi2">🏥<div className="oi-lbl">Santé</div></div>
          <div className="oi oi3">🔨<div className="oi-lbl">Rénov.</div></div>
          <div className="oi oi4">📦<div className="oi-lbl">Export</div></div>
          <div className="oi oi5">🎓<div className="oi-lbl">Visa</div></div>
          <div className="oi oi6">⚖️<div className="oi-lbl">Droit</div></div>
          <div className="oi oi7">🚗<div className="oi-lbl">Concierg.</div></div>
          <div className="oi oi8">📋<div className="oi-lbl">Admin</div></div>
        </div>
      </div>

      <div className="about-txt">
        <div className="sl">
          <div className="sl-ln" />
          <span>{t.about.label}</span>
        </div>
        <h2 className="about-h2 font-playfair">
          {t.about.h1}<br />
          <em>{t.about.h2}</em><br />
          {t.about.h3}
        </h2>
        <p className="about-p">{t.about.p1}</p>
        <p className="about-p">{t.about.p2}</p>
        <div className="vals">
          {t.about.vals.map((v, i) => (
            <div key={i} className="val fade-item">
              <div className="val-ico">{v.icon}</div>
              <div>
                <h4>{v.h}</h4>
                <p>{v.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
