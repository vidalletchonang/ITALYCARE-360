'use client'

import { useEffect } from 'react'

export default function ScrollFade() {
  useEffect(() => {
    const items = document.querySelectorAll('.fade-item')
    if (!('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('visible'))
      return
    }
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.transitionDelay = `${(i % 8) * 0.07}s`
            el.classList.add('visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px 50px 0px' }
    )
    items.forEach(el => observer.observe(el))
    // Fallback: make all visible after 2s if observer didn't trigger
    const fallback = setTimeout(() => {
      items.forEach(el => el.classList.add('visible'))
    }, 1000)
    return () => { observer.disconnect(); clearTimeout(fallback) }
  }, [])

  return null
}
