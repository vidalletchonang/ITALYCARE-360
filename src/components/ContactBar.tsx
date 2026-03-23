'use client'

import { useLang } from '@/context/LangContext'

export default function ContactBar() {
  const { t } = useLang()

  return (
    <div className="cbar">
      {t.bar.map((item, i) => (
        <div key={i} className="cb">
          <span className="cb-ic">{item.icon}</span>
          {item.text}
        </div>
      ))}
    </div>
  )
}
