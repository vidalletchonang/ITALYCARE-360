'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import { fr, en, ar, it, ru } from '@/i18n'
import type { Translation, LangCode } from '@/i18n'

const translations: Record<LangCode, Translation> = { fr, en, ar, it, ru }

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

  const setLang = useCallback((l: LangCode) => {
    console.log('[ITALYCARE] Switching language to:', l)
    setLangState(l)
    try {
      localStorage.setItem('italycare-lang', l)
    } catch (e) {
      console.error('Failed to save language:', e)
    }
  }, [])

  useEffect(() => {
    try {
      const saved = localStorage.getItem('italycare-lang') as LangCode | null
      if (saved && ['fr', 'en', 'ar', 'it', 'ru'].includes(saved)) {
        console.log('[ITALYCARE] Restoring language from localStorage:', saved)
        setLangState(saved)
      }
    } catch (e) {
      console.error('Failed to read language:', e)
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
