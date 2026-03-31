'use client'
import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/context/LangContext'

const LABELS = {
  tag: { fr: "L'ITALIE EN MOUVEMENT", en: 'ITALY IN MOTION', it: "L'ITALIA IN MOVIMENTO", ar: 'إيطاليا في الحركة' },
  h1:  { fr: "Vivez l'Italie", en: 'Experience Italy', it: "Vivi l'Italia", ar: 'عِش إيطاليا' },
  h2:  { fr: 'avant même d\'y être', en: 'before you arrive', it: 'prima ancora di arrivarci', ar: 'قبل أن تصل' },
  sub: { fr: 'Architecture millénaire, dolce vita, paysages à couper le souffle — votre nouvelle vie vous attend.', en: 'Millennial architecture, dolce vita, breathtaking landscapes — your new life awaits.', it: 'Architettura millenaria, dolce vita, paesaggi mozzafiato — la tua nuova vita ti aspetta.', ar: 'معمار عريق، دولتشي فيتا، مناظر خلابة — حياتك الجديدة تنتظرك.' },
  play: { fr: 'Regarder le film', en: 'Watch the film', it: 'Guarda il film', ar: 'شاهد الفيلم' },
}

// A reliable cinematic Italy video on YouTube
const VIDEO_ID = 'YrPpAB0a6T0'

export default function CinematicVideo() {
  const { lang } = useLang()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [playing, setPlaying] = useState(false)

  const s = (k: keyof typeof LABELS) =>
    (LABELS[k] as Record<string, string>)[lang] || (LABELS[k] as Record<string, string>)['en']

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="cv-section"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 1s ease, transform 1s ease',
      }}
    >
      {/* Header */}
      <div className="cv-label">
        <div className="cv-label-line" />
        <span>{s('tag')}</span>
        <div className="cv-label-line" />
      </div>
      <h2 className="font-playfair cv-h2">
        {s('h1')} <em>{s('h2')}</em>
      </h2>
      <p className="cv-sub">{s('sub')}</p>

      {/* Video Frame */}
      <div className="cv-frame">
        <div className="cv-corner cv-corner-tl" />
        <div className="cv-corner cv-corner-tr" />
        <div className="cv-corner cv-corner-bl" />
        <div className="cv-corner cv-corner-br" />

        <div className="cv-video-wrap">
          {!playing ? (
            /* Thumbnail + Play button */
            <div className="cv-thumb" onClick={() => setPlaying(true)}>
              <img
                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=80"
                alt="Italy cinematic"
                className="cv-thumb-img"
              />
              <div className="cv-thumb-overlay" />
              {/* Animated play button */}
              <div className="cv-play-btn">
                <div className="cv-play-pulse" />
                <div className="cv-play-circle">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="white">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="cv-thumb-caption">
                <span className="cv-caption-dot">●</span>
                {s('play')}
              </div>
            </div>
          ) : (
            /* YouTube player */
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
              title="Italy Cinematic"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              style={{ border: 'none', width: '100%', height: '100%' }}
            />
          )}
        </div>

        {/* Bottom bar */}
        <div className="cv-controls">
          <div className="cv-controls-row">
            <span className="cv-live">● ITALYCARE 360 · ITALY IN MOTION</span>
            {playing && (
              <button className="cv-btn" onClick={() => setPlaying(false)}>✕ Fermer</button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
