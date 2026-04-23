'use client'

import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/context/LangContext'

/* Ease-out cubic — fast at start, slows toward the target. Feels "alive". */
function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

function useCounter(target: number, active: boolean, duration = 2000) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let rafId = 0
    const start = performance.now()
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutCubic(progress)
      setVal(Math.round(target * eased))
      if (progress < 1) {
        rafId = requestAnimationFrame(tick)
      }
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [active, target, duration])
  return val
}

function StatItem({ n, suffix, l, active }: { n: number; suffix: string; l: string; active: boolean }) {
  const val = useCounter(n, active)
  const isDone = active && val >= n
  return (
    <div className={`ni fade-item${active ? ' ni-active' : ''}${isDone ? ' ni-done' : ''}`}>
      <div className="ni-n">
        <span className="ni-num-val">{val.toLocaleString()}</span>
        <span className="ni-suffix">{suffix}</span>
      </div>
      <div className="ni-l" style={{ whiteSpace: 'pre-line' }}>{l}</div>
    </div>
  )
}

export default function Numbers() {
  const { t } = useLang()
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    // If SSR/older browsers: just activate immediately
    if (!('IntersectionObserver' in window)) {
      setActive(true)
      return
    }

    const obs = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setActive(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )
    obs.observe(ref.current)

    /* Safety fallback: even if observer misses (edge cases), kick in after 2s */
    const fallback = setTimeout(() => setActive(true), 2000)

    return () => {
      obs.disconnect()
      clearTimeout(fallback)
    }
  }, [])

  return (
    <section className="nums" id="numbers" ref={ref}>
      <div className="nums-grid">
        {t.nums.map((item, i) => (
          <StatItem key={i} n={item.n} suffix={item.suffix} l={item.l} active={active} />
        ))}
      </div>
    </section>
  )
}
