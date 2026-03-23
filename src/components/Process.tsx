'use client'

import { useLang } from '@/context/LangContext'

export default function Process() {
  const { t } = useLang()

  return (
    <section className="proc" id="process">
      <div className="proc-c">
        <div className="sl" style={{ justifyContent: 'center' }}>
          <div className="sl-ln" /><span>{t.process.label}</span><div className="sl-ln" />
        </div>
        <h2 className="font-playfair">
          {t.process.h1} <em>{t.process.h2}</em>
        </h2>
      </div>
      <p className="proc-sub">{t.process.sub}</p>

      <div className="proc-steps">
        <div className="proc-line" />
        {t.process.steps.map((step, i) => (
          <div key={i} className="ps fade-item">
            <div className="ps-c">
              {step.icon}
              <div className="ps-num">{i + 1}</div>
            </div>
            <div className="ps-t">{step.t}</div>
            <div className="ps-d">{step.d}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
