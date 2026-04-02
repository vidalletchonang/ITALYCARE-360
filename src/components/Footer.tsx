'use client'

import { useLang } from '@/context/LangContext'

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
              <div className="fb-sub" style={{ marginTop: '2px', marginBottom: 0 }}>360° Services in Italy</div>
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
              {col.links.map((link, j) => (
                <li key={j}><a href="#">{link}</a></li>
              ))}
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
