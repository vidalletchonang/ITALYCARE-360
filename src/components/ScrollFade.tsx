'use client'

import { useEffect } from 'react'

/* Auto-reveal common elements on scroll, plus subtle parallax on hero & gentle gold cursor glow */
export default function ScrollFade() {
  useEffect(() => {
    /* ---------- 1. Scroll reveal ---------- */
    const candidates = document.querySelectorAll(
      '.fade-item, .reveal, section h2, section .sl, .svc-card, .wcu-card, .tc, .nums-grid > *, .ils-item, .testi-card-img, .vals .val, .proc-step, .team-card, .ag-slide.active, .blog-card, .article-hero, .article-body > *'
    )
    if (!candidates.length) return

    candidates.forEach(el => el.classList.add('reveal-init'))

    if (!('IntersectionObserver' in window)) {
      candidates.forEach(el => el.classList.add('reveal-visible'))
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.transitionDelay = `${(i % 6) * 0.08}s`
            el.classList.add('reveal-visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    candidates.forEach(el => observer.observe(el))

    /* Safety fallback */
    const fallback = setTimeout(() => {
      candidates.forEach(el => el.classList.add('reveal-visible'))
    }, 2200)

    /* ---------- 2. Gentle parallax on hero text via mouse ---------- */
    const heroFrame = document.querySelector('.hero-frame') as HTMLElement | null
    let rafId = 0
    const onMouse = (e: MouseEvent) => {
      if (!heroFrame) return
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 8
        const y = (e.clientY / window.innerHeight - 0.5) * 6
        heroFrame.style.transform = `translate(${x}px, ${y}px)`
      })
    }
    window.addEventListener('mousemove', onMouse, { passive: true })

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
      window.removeEventListener('mousemove', onMouse)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return null
}
