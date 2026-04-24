'use client'

import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/context/LangContext'

const LABELS: Record<string, { tag: string; h1: string; h2: string; sub: string }> = {
  fr: {
    tag: "L'ITALIE EN MOUVEMENT",
    h1: 'Carnets de',
    h2: 'voyage',
    sub: "Quelques instants capturés entre Toscane, Venise et Amalfi — cliquez sur un reel pour activer le son.",
  },
  en: {
    tag: 'ITALY IN MOTION',
    h1: 'Travel',
    h2: 'journals',
    sub: 'A few moments captured between Tuscany, Venice and Amalfi — tap a reel to unmute.',
  },
  it: {
    tag: "L'ITALIA IN MOVIMENTO",
    h1: 'Diari di',
    h2: 'viaggio',
    sub: 'Alcuni istanti catturati tra Toscana, Venezia e Amalfi — tocca un reel per attivare l\'audio.',
  },
  de: {
    tag: 'ITALIEN IN BEWEGUNG',
    h1: 'Reise',
    h2: 'tagebücher',
    sub: 'Einige Momente zwischen Toskana, Venedig und Amalfi — tippen Sie auf ein Reel, um den Ton zu aktivieren.',
  },
  ar: {
    tag: 'إيطاليا في حركة',
    h1: 'يوميات',
    h2: 'السفر',
    sub: 'لحظات مختارة بين توسكانا والبندقية وأمالفي — انقر على أي مقطع لتشغيل الصوت.',
  },
  ru: {
    tag: 'ИТАЛИЯ В ДВИЖЕНИИ',
    h1: 'Путевые',
    h2: 'дневники',
    sub: 'Несколько мгновений между Тосканой, Венецией и Амальфи — коснитесь, чтобы включить звук.',
  },
}

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

/* Vertical reels. Each has:
 *  - `src`: direct MP4 (local /reels/ folder for our own content, or Pexels CC0 for fillers).
 *           If a remote MP4 fails to load, the poster stays visible.
 *  - `poster`: high-quality image fallback — local JPG for our videos, Unsplash for Pexels.
 *  - `caption`: short label in 6 languages, Instagram-style.
 *  - `location`: subtitle in gold, matching one of our 18 service categories when possible.
 */
const REELS: {
  src: string
  poster: string
  location: Record<string, string>
  caption: Record<string, string>
}[] = [
  // Note: the 4 branded ITALYCARE 360 reels (visa, real estate, logistics,
  // after-arrival) are now shown in the richer <ReelsJourney /> section.
  // This gallery keeps lightweight atmospheric clips for ambiance only.
  {
    src: 'https://videos.pexels.com/video-files/4328989/4328989-hd_1080_1920_25fps.mp4',
    poster: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=85',
    location: { fr: 'Venise', en: 'Venice', it: 'Venezia', de: 'Venedig', ar: 'البندقية', ru: 'Венеция' },
    caption: { fr: 'Gondoles au crépuscule', en: 'Gondolas at dusk', it: 'Gondole al tramonto', de: 'Gondeln in der Dämmerung', ar: 'جندول عند الغسق', ru: 'Гондолы на закате' },
  },
  {
    src: 'https://videos.pexels.com/video-files/5077067/5077067-hd_1080_1920_30fps.mp4',
    poster: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=800&q=85',
    location: { fr: 'Amalfi', en: 'Amalfi', it: 'Amalfi', de: 'Amalfi', ar: 'أمالفي', ru: 'Амальфи' },
    caption: { fr: 'Le bleu de la côte', en: 'Coastal blue', it: 'L\'azzurro della costa', de: 'Das Blau der Küste', ar: 'أزرق الساحل', ru: 'Лазурь побережья' },
  },
  {
    src: 'https://videos.pexels.com/video-files/3209828/3209828-hd_1080_1920_25fps.mp4',
    poster: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=800&q=85',
    location: { fr: 'Toscane', en: 'Tuscany', it: 'Toscana', de: 'Toskana', ar: 'توسكانا', ru: 'Тоскана' },
    caption: { fr: 'Collines et cyprès', en: 'Hills and cypresses', it: 'Colline e cipressi', de: 'Hügel und Zypressen', ar: 'تلال وسرو', ru: 'Холмы и кипарисы' },
  },
  {
    src: 'https://videos.pexels.com/video-files/5059229/5059229-hd_1080_1920_30fps.mp4',
    poster: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=85',
    location: { fr: 'Naples', en: 'Naples', it: 'Napoli', de: 'Neapel', ar: 'نابولي', ru: 'Неаполь' },
    caption: { fr: 'Pizza napolitaine', en: 'Napoletana pizza', it: 'Pizza napoletana', de: 'Pizza aus Neapel', ar: 'بيتزا نابولية', ru: 'Неаполитанская пицца' },
  },
  {
    src: 'https://videos.pexels.com/video-files/4608283/4608283-hd_1080_1920_25fps.mp4',
    poster: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=1200&q=85',
    location: { fr: 'Rome', en: 'Rome', it: 'Roma', de: 'Rom', ar: 'روما', ru: 'Рим' },
    caption: { fr: 'Lumière éternelle', en: 'Eternal light', it: 'Luce eterna', de: 'Ewiges Licht', ar: 'نور أبدي', ru: 'Вечный свет' },
  },
  {
    src: 'https://videos.pexels.com/video-files/5077064/5077064-hd_1080_1920_30fps.mp4',
    poster: 'https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=800&q=85',
    location: { fr: 'Lac de Côme', en: 'Lake Como', it: 'Lago di Como', de: 'Comer See', ar: 'بحيرة كومو', ru: 'Озеро Комо' },
    caption: { fr: 'Villas au bord de l\'eau', en: 'Lakeside villas', it: 'Ville sul lago', de: 'Villen am See', ar: 'فيلات على الضفة', ru: 'Виллы у воды' },
  },
]

function Reel({ r, idx }: { r: typeof REELS[number]; idx: number }) {
  const { lang } = useLang()
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)

  /* Autoplay (muted) when the reel scrolls into view, pause when out. Saves bandwidth and respects browser autoplay rules. */
  useEffect(() => {
    const el = containerRef.current
    const video = videoRef.current
    if (!el || !video || videoFailed) return

    if (!('IntersectionObserver' in window)) {
      video.play().catch(() => {})
      return
    }
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            video.play().then(() => setPlaying(true)).catch(() => {})
          } else {
            video.pause()
            setPlaying(false)
          }
        })
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [videoFailed])

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
    if (v.paused) v.play().catch(() => {})
  }

  const l = lang as keyof typeof r.location
  const locationText = r.location[l] || r.location.en
  const captionText = r.caption[l] || r.caption.en

  return (
    <div
      ref={containerRef}
      className="reel fade-item"
      onClick={toggleMute}
      role="button"
      tabIndex={0}
      aria-label={`${locationText} — ${captionText}`}
      style={{ animationDelay: `${idx * 80}ms` }}
    >
      <div className="reel-media">
        {!videoFailed && (
          <video
            ref={videoRef}
            src={r.src}
            poster={r.poster}
            muted={muted}
            loop
            playsInline
            preload="metadata"
            onError={() => setVideoFailed(true)}
          />
        )}
        {videoFailed && (
          <img src={r.poster} alt={locationText} loading="lazy" width={260} height={464} />
        )}
        <div className="reel-gradient" />
      </div>

      {/* Mute / unmute button */}
      <button
        type="button"
        className="reel-mute"
        onClick={e => { e.stopPropagation(); toggleMute() }}
        aria-label={muted ? 'Unmute' : 'Mute'}
      >
        {muted ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        )}
      </button>

      {/* Play indicator */}
      {playing && !videoFailed && <div className="reel-live">LIVE</div>}

      {/* Bottom caption */}
      <div className="reel-caption">
        <span className="reel-loc">{locationText}</span>
        <span className="reel-txt">{captionText}</span>
      </div>
    </div>
  )
}

export default function ItalyReels() {
  const { lang } = useLang()
  const l = LABELS[lang] || LABELS.en

  return (
    <section className="reels-section" id="reels">
      <div className="reels-header">
        <span className="reels-tag">{l.tag}</span>
        <h2 className="reels-h2 font-playfair">
          {l.h1} <em>{l.h2}</em>
        </h2>
        <p className="reels-sub">{l.sub}</p>
      </div>

      <div className="reels-row">
        {REELS.map((r, i) => (
          <Reel key={i} r={r} idx={i} />
        ))}
      </div>
    </section>
  )
}
