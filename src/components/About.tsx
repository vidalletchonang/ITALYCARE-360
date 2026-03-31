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
          <div className="oi oi1"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg><div className="oi-lbl">Immo</div></div>
          <div className="oi oi2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2z"/><path d="M12 8v4l3 3"/></svg><div className="oi-lbl">Santé</div></div>
          <div className="oi oi3"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg><div className="oi-lbl">Rénov.</div></div>
          <div className="oi oi4"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg><div className="oi-lbl">Export</div></div>
          <div className="oi oi5"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg><div className="oi-lbl">Visa</div></div>
          <div className="oi oi6"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><div className="oi-lbl">Droit</div></div>
          <div className="oi oi7"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0112 0v2"/></svg><div className="oi-lbl">Concierg.</div></div>
          <div className="oi oi8"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg><div className="oi-lbl">Admin</div></div>
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
