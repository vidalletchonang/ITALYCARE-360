'use client'

import { useEffect } from 'react'

export default function ScrollFade() {
  useEffect(() => {
    const items = document.querySelectorAll('.fade-item')
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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    items.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
