'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const curRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (curRef.current) {
        curRef.current.style.left = mx - 1.5 + 'px'
        curRef.current.style.top = my - 1.5 + 'px'
      }
    }

    const animate = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = rx - 0.5 + 'px'
        ringRef.current.style.top = ry - 14 + 'px'
      }
      rafId = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(animate)

    const hover = () => {
      if (curRef.current) curRef.current.style.transform = 'scale(2.5)'
      if (ringRef.current) ringRef.current.style.transform = 'scale(1.5)'
    }
    const unhover = () => {
      if (curRef.current) curRef.current.style.transform = 'scale(1)'
      if (ringRef.current) ringRef.current.style.transform = 'scale(1)'
    }

    const addListeners = () => {
      document.querySelectorAll('a,button,.sc,.tc,.val,.ni').forEach(el => {
        el.addEventListener('mouseenter', hover)
        el.addEventListener('mouseleave', unhover)
      })
    }
    addListeners()

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={curRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
