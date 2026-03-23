'use client'

import { useLang } from '@/context/LangContext'

export default function MarqueeBanner() {
  const { t } = useLang()
  // Duplicate items for seamless loop
  const items = [...t.marquee, ...t.marquee]

  return (
    <div className="mq">
      <div className="mq-track">
        {items.map((item, i) => (
          <span key={i} className="mq-item">
            {item} <span className="mq-dot" />
          </span>
        ))}
      </div>
    </div>
  )
}
