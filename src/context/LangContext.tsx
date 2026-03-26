'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { fr, en, ar, it } from '@/i18n'
import type { Translation, LangCode } from '@/i18n'

const translations: Record<LangCode, Translation> = { fr, en, ar, it }

interface LangContextValue {
  lang: LangCode
  t: Translation
  setLang: (l: LangCode) => void
  isRTL: boolean
}

const LangContext = createContext<LangContextValue>({
  lang: 'en',
  t: en,
  setLang: () => {},
  isRTL: false,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>('en')

  const setLang = (l: LangCode) => {
    setLangState(l)
    if (typeof window !== 'undefined') {
      localStorage.setItem('italycare-lang', l)
    }
  }

  useEffect(() => {
    const saved = localStorage.getItem('italycare-lang') as LangCode | null
    if (saved && ['fr', 'en', 'ar', 'it'].includes(saved)) {
      setLangState(saved)
    }
  }, [])

  useEffect(() => {
    const isRTL = lang === 'ar'
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }, [lang])

  const isRTL = lang === 'ar'

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], setLang, isRTL }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
