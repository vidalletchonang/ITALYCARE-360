'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLang } from '@/context/LangContext'
import Cursor from '@/components/Cursor'
import ContactModal from '@/components/ContactModal'

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  immobilier: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <path d="M6 20L24 6l18 14v22a2 2 0 01-2 2H8a2 2 0 01-2-2V20z"/>
      <path d="M18 42V28h12v14"/>
    </svg>
  ),
  renovation: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <path d="M34 8l6 6-22 22-6-6L34 8z"/>
      <path d="M8 38l4-4 4 4-4 4-4-4z"/>
      <path d="M36 6l6 6"/>
      <path d="M10 36l2-2"/>
    </svg>
  ),
  medical: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <rect x="6" y="14" width="36" height="28" rx="3"/>
      <path d="M16 14V10a8 8 0 0116 0v4"/>
      <path d="M24 22v12M18 28h12"/>
    </svg>
  ),
  export: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <path d="M40 32v6a2 2 0 01-2 2H10a2 2 0 01-2-2V10a2 2 0 012-2h6"/>
      <path d="M26 8h14v14"/>
      <path d="M20 28L40 8"/>
    </svg>
  ),
  'visa-etudiant': (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <path d="M24 6L44 16l-20 10L4 16 24 6z"/>
      <path d="M12 22v12c0 4 5.4 8 12 8s12-4 12-8V22"/>
      <path d="M44 16v10"/>
    </svg>
  ),
  juridique: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <path d="M24 6v36M6 40h36"/>
      <path d="M10 18l8 16M10 18L2 34M38 18l8 16M38 18l-8 16"/>
      <circle cx="10" cy="18" r="2" fill="currentColor" stroke="none"/>
      <circle cx="38" cy="18" r="2" fill="currentColor" stroke="none"/>
    </svg>
  ),
  conciergerie: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <circle cx="18" cy="16" r="8"/>
      <path d="M10 16a8 8 0 018-8"/>
      <path d="M26 22l12 12"/>
      <path d="M34 30l4-4 4 4-4 4-4-4z"/>
    </svg>
  ),
  administratif: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <rect x="10" y="6" width="28" height="36" rx="3"/>
      <path d="M18 16h12M18 24h12M18 32h8"/>
      <path d="M10 12h4M10 20h4M10 28h4"/>
    </svg>
  ),
  evenements: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <rect x="6" y="12" width="36" height="30" rx="3"/>
      <path d="M6 20h36"/>
      <path d="M16 8v8M32 8v8"/>
      <path d="M16 28h4v4h-4zM22 28h4v4h-4zM28 28h4v4h-4z"/>
    </svg>
  ),
  'maisons-retraite': (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <circle cx="24" cy="12" r="6"/>
      <path d="M14 42v-6a10 10 0 0120 0v6"/>
      <path d="M10 42h28"/>
      <path d="M16 30a6 6 0 01-4 4M32 30a6 6 0 004 4"/>
    </svg>
  ),
  financement: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <rect x="6" y="30" width="8" height="12"/>
      <rect x="20" y="20" width="8" height="22"/>
      <rect x="34" y="10" width="8" height="32"/>
      <path d="M6 26l10-10 10 6 14-14"/>
      <path d="M36 8l4 4h-4"/>
    </svg>
  ),
  professionnels: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <circle cx="16" cy="14" r="6"/>
      <circle cx="32" cy="14" r="6"/>
      <path d="M4 42v-4a10 10 0 0124 0v4"/>
      <path d="M36 22a10 10 0 018 8v4h-8"/>
    </svg>
  ),
  'silver-economy': (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <circle cx="24" cy="12" r="6"/>
      <path d="M10 42c0-7.7 6.3-14 14-14s14 6.3 14 14"/>
      <path d="M24 28v6M20 38l4-4 4 4"/>
      <path d="M12 22a6 6 0 01-4 8M36 22a6 6 0 004 8"/>
    </svg>
  ),
  'property-care': (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <path d="M6 20L24 6l18 14v22a2 2 0 01-2 2H8a2 2 0 01-2-2V20z"/>
      <circle cx="31" cy="30" r="6"/>
      <path d="M28 34l-4 4M34 26l-2 2"/>
      <path d="M34 34l-2-2M28 28l2 2"/>
    </svg>
  ),
  'thermal-wellness': (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <path d="M24 6c0 6-8 10-8 18a8 8 0 0016 0c0-8-8-12-8-18z"/>
      <path d="M14 28c-4 0-8-4-8-8 0 0 4 2 8 0"/>
      <path d="M34 28c4 0 8-4 8-8 0 0-4 2-8 0"/>
      <path d="M18 42h12"/>
    </svg>
  ),
  'aviation-privee': (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <path d="M6 28l8-8 20 4 8-8c2-2 2-6 0-8-2-2-6-2-8 0l-8 8-20 4-4 8 8-4 4 4-4 4 4 4z"/>
      <path d="M8 40h32"/>
    </svg>
  ),
  'assistenza-scolastica': (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
      <path d="M24 4L4 14l20 10 20-10L24 4z"/>
      <path d="M4 14v14l20 10 20-10V14"/>
      <path d="M24 24v20"/>
      <path d="M36 19v10"/>
    </svg>
  ),
}

type QuizState = 'intro' | 'quiz' | 'result'

interface Props {
  slug: string
}

export default function ServiceDetailClient({ slug }: Props) {
  const { t, isRTL } = useLang()

  const service = t.services.items.find((item) => item.slug === slug)

  const [quizState, setQuizState] = useState<QuizState>('intro')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  if (!service) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0b1a36', color: '#eef4ff' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Service introuvable</p>
          <Link href="/" style={{ color: '#d4a843', textDecoration: 'none' }}>← Retour à l'accueil</Link>
        </div>
      </div>
    )
  }

  const sd = t.serviceDetail
  const quiz = service.details.quiz
  const totalQuestions = quiz.length

  const totalScore = answers.reduce((sum, a) => sum + a, 0)
  const maxScore = quiz.reduce((sum, q) => sum + Math.max(...q.options.map((o) => o.points)), 0)

  function getResult() {
    const ratio = totalScore / maxScore
    if (ratio >= 0.75) return 'eligible'
    if (ratio >= 0.45) return 'partial'
    return 'notEligible'
  }

  function handleSelectOption(_points: number, idx: number) {
    setSelectedOption(idx)
  }

  function handleNext() {
    if (selectedOption === null) return
    const points = quiz[currentQuestion].options[selectedOption].points
    const newAnswers = [...answers, points]
    setAnswers(newAnswers)
    setSelectedOption(null)
    if (currentQuestion + 1 < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setQuizState('result')
    }
  }

  function handlePrev() {
    if (currentQuestion === 0) {
      setQuizState('intro')
      setAnswers([])
      setCurrentQuestion(0)
      setSelectedOption(null)
      return
    }
    const newAnswers = answers.slice(0, -1)
    setAnswers(newAnswers)
    setCurrentQuestion(currentQuestion - 1)
    setSelectedOption(null)
  }

  function handleRetry() {
    setQuizState('intro')
    setAnswers([])
    setCurrentQuestion(0)
    setSelectedOption(null)
  }

  const result = quizState === 'result' ? getResult() : null
  const progressPercent = quizState === 'quiz' ? ((currentQuestion) / totalQuestions) * 100 : 0

  const bk = '#0b1a36'
  const o = '#d4a843'
  const g = '#1e3d72'
  const gd = '#071228'
  const op = '#eef4ff'
  const cr = '#f8faff'

  const dir = isRTL ? 'rtl' : 'ltr'
  const titleFont = isRTL ? "'Cairo', sans-serif" : "'Playfair Display', serif"
  const bodyFont = isRTL ? "'Cairo', sans-serif" : "'Jost', sans-serif"

  return (
    <div dir={dir} style={{ background: cr, minHeight: '100vh', fontFamily: bodyFont }}>
      <Cursor />

      {/* Header */}
      <div style={{ background: bk, padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/services" style={{ color: o, textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.05em' }}>
          {sd.backBtn}
        </Link>
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>ITALYCARE 360</span>
      </div>

      {/* Hero Section */}
      <div style={{ background: `linear-gradient(135deg, ${bk} 0%, ${gd} 100%)`, padding: '4rem 2rem 5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(30,61,114,0.12) 0%, transparent 50%)' }} />
        <div style={{ position: 'relative', maxWidth: 860, margin: '0 auto' }}>
          <div style={{ color: '#d4a843', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
            {SERVICE_ICONS[slug] || null}
          </div>
          <h1 style={{ fontFamily: titleFont, fontSize: 'clamp(2rem, 4vw, 3rem)', color: cr, marginBottom: '1rem', fontWeight: 700 }}>
            {service.t}
          </h1>
          <p style={{ color: op, fontSize: '1.25rem', lineHeight: 1.7, opacity: 0.9 }}>
            {service.details.hero}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3.5rem 2.5rem' }}>

        {/* What Is Section */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '2.5rem 3rem', marginBottom: '2.5rem', boxShadow: '0 2px 20px rgba(0,0,0,0.06)', border: '1px solid rgba(201,168,76,0.12)' }}>
          <h2 style={{ fontFamily: titleFont, fontSize: '2rem', color: bk, marginBottom: '1.2rem' }}>
            {service.t}
          </h2>
          <p style={{ color: '#3a3730', lineHeight: 1.9, fontSize: '1.15rem' }}>
            {service.details.whatIs}
          </p>
        </div>

        {/* Includes / Not Includes */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
          {/* Included */}
          <div style={{ background: '#f0faf4', borderRadius: 16, padding: '2.25rem', border: '1px solid #c3e6d0' }}>
            <h3 style={{ color: g, fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.2rem', letterSpacing: '0.02em' }}>
              {sd.included}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {service.details.includes.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', marginBottom: '0.85rem', color: '#2a4a35', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  <span style={{ color: g, marginTop: '0.15rem', flexShrink: 0, fontSize: '1.1rem' }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Included + Price & Duration */}
          <div style={{ background: '#fdf4f4', borderRadius: 16, padding: '2.25rem', border: '1px solid #e8c5c5' }}>
            <h3 style={{ color: '#b5261e', fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.2rem', letterSpacing: '0.02em' }}>
              {sd.notIncluded}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {service.details.notIncludes.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', marginBottom: '0.85rem', color: '#5a2a2a', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  <span style={{ color: '#b5261e', marginTop: '0.15rem', flexShrink: 0, fontSize: '1.1rem' }}>✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '1.8rem', paddingTop: '1.4rem', borderTop: '1px solid #e8c5c5' }}>
              <div style={{ marginBottom: '0.9rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#8a7a6a', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>{sd.price}</span>
                <p style={{ color: bk, fontWeight: 600, fontSize: '1.1rem', marginTop: '0.3rem' }}>{service.details.price}</p>
              </div>
              <div>
                <span style={{ fontSize: '0.85rem', color: '#8a7a6a', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>{sd.duration}</span>
                <p style={{ color: bk, fontWeight: 600, fontSize: '1.1rem', marginTop: '0.3rem' }}>{service.details.duration}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Eligibility Quiz */}
        <div style={{ background: bk, borderRadius: 20, padding: '2.5rem', marginBottom: '2rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${o}, ${g})` }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 90% 10%, rgba(201,168,76,0.06) 0%, transparent 50%)' }} />

          <div style={{ position: 'relative' }}>

            {/* INTRO STATE */}
            {quizState === 'intro' && (
              <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'inline-block', background: 'rgba(201,168,76,0.12)', borderRadius: 50, padding: '0.75rem 1.5rem', marginBottom: '1.5rem' }}>
                  <span style={{ color: o, fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Quiz</span>
                </div>
                <h2 style={{ fontFamily: titleFont, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: cr, marginBottom: '1rem' }}>
                  {sd.eligibilityTitle}
                </h2>
                <p style={{ color: 'rgba(245,237,214,0.7)', fontSize: '1rem', lineHeight: 1.7, maxWidth: 500, margin: '0 auto 2rem' }}>
                  {sd.eligibilitySubtitle}
                </p>
                <button
                  onClick={() => setQuizState('quiz')}
                  style={{ background: `linear-gradient(135deg, ${o}, #f0cb6a)`, color: bk, border: 'none', borderRadius: 50, padding: '0.9rem 2.5rem', fontSize: '1rem', fontWeight: 700, cursor: 'pointer', letterSpacing: '0.02em' }}
                >
                  {sd.startBtn}
                </button>
              </div>
            )}

            {/* QUIZ STATE */}
            {quizState === 'quiz' && (
              <div>
                {/* Progress */}
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ color: o, fontSize: '0.85rem', fontWeight: 600 }}>
                      {sd.question} {currentQuestion + 1} {sd.of} {totalQuestions}
                    </span>
                    <span style={{ color: 'rgba(245,237,214,0.5)', fontSize: '0.8rem' }}>
                      {Math.round(((currentQuestion) / totalQuestions) * 100)}%
                    </span>
                  </div>
                  <div style={{ height: 6, background: 'rgba(255,255,255,0.1)', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${progressPercent}%`, background: `linear-gradient(90deg, ${o}, ${g})`, borderRadius: 3, transition: 'width 0.4s ease' }} />
                  </div>
                </div>

                {/* Question */}
                <h3 style={{ color: cr, fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem', lineHeight: 1.5 }}>
                  {quiz[currentQuestion].question}
                </h3>

                {/* Options */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {quiz[currentQuestion].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(opt.points, idx)}
                      style={{
                        background: selectedOption === idx ? 'rgba(201,168,76,0.2)' : 'rgba(255,255,255,0.05)',
                        border: selectedOption === idx ? `2px solid ${o}` : '2px solid rgba(255,255,255,0.1)',
                        borderRadius: 12,
                        padding: '1rem 1.25rem',
                        color: selectedOption === idx ? o : op,
                        fontSize: '0.95rem',
                        cursor: 'pointer',
                        textAlign: isRTL ? 'right' : 'left',
                        transition: 'all 0.2s ease',
                        fontFamily: bodyFont,
                        lineHeight: 1.4,
                      }}
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>

                {/* Navigation */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button
                    onClick={handlePrev}
                    style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(245,237,214,0.6)', borderRadius: 50, padding: '0.7rem 1.5rem', fontSize: '0.9rem', cursor: 'pointer' }}
                  >
                    {sd.prevBtn}
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={selectedOption === null}
                    style={{
                      background: selectedOption !== null ? `linear-gradient(135deg, ${o}, #f0cb6a)` : 'rgba(255,255,255,0.1)',
                      border: 'none',
                      color: selectedOption !== null ? bk : 'rgba(255,255,255,0.3)',
                      borderRadius: 50,
                      padding: '0.7rem 2rem',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      cursor: selectedOption !== null ? 'pointer' : 'not-allowed',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {sd.nextBtn}
                  </button>
                </div>
              </div>
            )}

            {/* RESULT STATE */}
            {quizState === 'result' && result && (
              <div style={{ textAlign: 'center' }}>
                <h2 style={{ fontFamily: titleFont, color: cr, fontSize: '1.5rem', marginBottom: '1rem' }}>
                  {sd.resultTitle}
                </h2>

                <div style={{
                  display: 'inline-block',
                  background: result === 'eligible' ? 'rgba(34,197,94,0.18)' : result === 'partial' ? 'rgba(212,168,67,0.18)' : 'rgba(220,60,60,0.18)',
                  borderRadius: 16,
                  padding: '1.5rem 2.5rem',
                  marginBottom: '1.5rem',
                  border: `2px solid ${result === 'eligible' ? 'rgba(34,197,94,0.7)' : result === 'partial' ? 'rgba(212,168,67,0.7)' : 'rgba(220,60,60,0.7)'}`,
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#ffffff' }}>
                    {result === 'eligible' ? sd.eligible : result === 'partial' ? sd.partial : sd.notEligible}
                  </div>
                  <div style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 600, letterSpacing: '1px' }}>
                    Score: {totalScore} / {maxScore}
                  </div>
                </div>

                <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1rem', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 2rem' }}>
                  {result === 'eligible' ? sd.eligibleMsg : result === 'partial' ? sd.partialMsg : sd.notEligibleMsg}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  {result !== 'notEligible' && (
                    <button
                      onClick={() => setModalOpen(true)}
                      style={{ background: `linear-gradient(135deg, ${o}, #f0cb6a)`, color: bk, border: 'none', borderRadius: 50, padding: '0.9rem 2.5rem', fontSize: '1rem', fontWeight: 700, cursor: 'pointer' }}
                    >
                      {sd.rdvBtn}
                    </button>
                  )}
                  <button
                    onClick={handleRetry}
                    style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(245,237,214,0.6)', borderRadius: 50, padding: '0.7rem 1.75rem', fontSize: '0.9rem', cursor: 'pointer' }}
                  >
                    {sd.retryBtn}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact CTA */}
        <div style={{ background: `linear-gradient(135deg, ${g}, ${gd})`, borderRadius: 16, padding: '2rem', textAlign: 'center' }}>
          <p style={{ color: cr, fontSize: '1rem', fontWeight: 500, marginBottom: '1rem' }}>
            {sd.contact}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
            <a href="mailto:info@italycare360.com" style={{ background: 'rgba(255,255,255,0.12)', color: cr, textDecoration: 'none', borderRadius: 50, padding: '0.6rem 1.5rem', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.2)' }}>
              info@italycare360.com
            </a>
            <a href="https://wa.me/393517501164" style={{ background: 'rgba(255,255,255,0.12)', color: cr, textDecoration: 'none', borderRadius: 50, padding: '0.6rem 1.5rem', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.2)' }}>
              WhatsApp
            </a>
          </div>
        </div>

      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
