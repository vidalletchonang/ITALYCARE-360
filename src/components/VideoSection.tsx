'use client'
import { useLang } from '@/context/LangContext'

export default function VideoSection() {
  const { t } = useLang()
  return (
    <section className="video-section" id="video">
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
      <a
        href="https://youtube.com/@italycare360"
        target="_blank"
        rel="noopener noreferrer"
        className="vs-yt-link"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>
        <span>@italycare360</span>
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" width="14" height="14"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
      </a>
    </section>
  )
}
