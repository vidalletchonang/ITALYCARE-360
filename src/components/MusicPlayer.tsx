'use client'

import { useEffect, useRef, useState } from 'react'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''
const TRACK = `${BASE}/music/momenti-di-gloria.mp3`
const VOLUME = 0.22 // discreet background level

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [loaded, setLoaded] = useState(false)

  // Restore user preference
  useEffect(() => {
    if (typeof window === 'undefined') return
    const saved = localStorage.getItem('italycare-music')
    if (saved === 'on') {
      // Try to resume; may be blocked until user interacts
      const audio = audioRef.current
      if (audio) {
        audio.volume = VOLUME
        audio.play().then(() => setPlaying(true)).catch(() => {})
      }
    }
  }, [loaded])

  const toggle = async () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
      localStorage.setItem('italycare-music', 'off')
    } else {
      audio.volume = VOLUME
      try {
        await audio.play()
        setPlaying(true)
        localStorage.setItem('italycare-music', 'on')
      } catch (err) {
        console.error('Music play blocked:', err)
      }
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={TRACK}
        loop
        preload="metadata"
        onLoadedData={() => setLoaded(true)}
      />
      <button
        className={`music-btn ${playing ? 'playing' : ''}`}
        onClick={toggle}
        aria-label={playing ? 'Mute music' : 'Play music'}
        title={playing ? 'Pause music' : 'Play Italian music'}
      >
        {playing ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <path d="M9 18V5l12-2v13"/>
            <circle cx="6" cy="18" r="3"/>
            <circle cx="18" cy="16" r="3"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <path d="M9 18V5l12-2v13"/>
            <circle cx="6" cy="18" r="3"/>
            <circle cx="18" cy="16" r="3"/>
            <line x1="3" y1="3" x2="21" y2="21" />
          </svg>
        )}
        {playing && (
          <span className="music-waves" aria-hidden="true">
            <span /><span /><span />
          </span>
        )}
      </button>
    </>
  )
}
