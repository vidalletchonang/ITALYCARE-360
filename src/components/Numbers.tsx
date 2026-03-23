'use client'

import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/context/LangContext'

function useCounter(target: number, active: boolean) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let v = 0
    const step = target / 55
    const id = setInterval(() => {
      v += step
      if (v >= target) { v = target; clearInterval(id) }
      setVal(Math.round(v))
    }, 20)
    return () => clearInterval(id)
  }, [active, target])
  return val
}

function StatItem({ n, suffix, l, active }: { n: number; suffix: string; l: string; active: boolean }) {
  const val = useCounter(n, active)
  return (
    <div className="ni fade-item">
      <div className="ni-n">
        {val}<span>{suffix}</span>
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
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setActive(true)
        obs.disconnect()
      }
    }, { threshold: 0.4 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="nums" ref={ref}>
      <div className="nums-grid">
        {t.nums.map((item, i) => (
          <StatItem key={i} n={item.n} suffix={item.suffix} l={item.l} active={active} />
        ))}
      </div>
    </section>
  )
}
