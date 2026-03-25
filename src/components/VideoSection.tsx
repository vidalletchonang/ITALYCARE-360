'use client'
import { useLang } from '@/context/LangContext'

export default function VideoSection() {
  const { t } = useLang()
  return (
    <section className="video-section">
      <div className="sl" style={{ justifyContent: 'center', marginBottom: 12 }}>
        <div className="sl-ln" /><span>{t.video.label}</span><div className="sl-ln" />
      </div>
      <h2 className="font-playfair vs-h2">{t.video.h1} <em>{t.video.h2}</em></h2>
      <p className="vs-p">{t.video.p}</p>
      <div className="video-wrap">
        <iframe
          src="https://www.youtube.com/embed/YrPpAB0a6T0?autoplay=0&rel=0&modestbranding=1"
          title={t.video.label}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: '100%', height: '100%', borderRadius: '16px' }}
        />
      </div>
    </section>
  )
}
