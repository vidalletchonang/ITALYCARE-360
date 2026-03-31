'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLang } from '@/context/LangContext'
import Cursor from '@/components/Cursor'
import ContactModal from '@/components/ContactModal'

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
  const g = '#1a8f5c'
  const gd = '#0b3d28'
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
        <Link href="/" style={{ color: o, textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.05em' }}>
          {sd.backBtn}
        </Link>
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>ITALYCARE 360</span>
      </div>

      {/* Hero Section */}
      <div style={{ background: `linear-gradient(135deg, ${bk} 0%, ${gd} 100%)`, padding: '4rem 2rem 5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(26,107,60,0.12) 0%, transparent 50%)' }} />
        <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{service.icon}</div>
          <h1 style={{ fontFamily: titleFont, fontSize: 'clamp(2rem, 4vw, 3rem)', color: cr, marginBottom: '1rem', fontWeight: 700 }}>
            {service.t}
          </h1>
          <p style={{ color: op, fontSize: '1.1rem', lineHeight: 1.7, opacity: 0.9 }}>
            {service.details.hero}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '3rem 1.5rem' }}>

        {/* What Is Section */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '2rem', marginBottom: '2rem', boxShadow: '0 2px 20px rgba(0,0,0,0.06)', border: '1px solid rgba(201,168,76,0.12)' }}>
          <h2 style={{ fontFamily: titleFont, fontSize: '1.6rem', color: bk, marginBottom: '1rem' }}>
            {service.t}
          </h2>
          <p style={{ color: '#3a3730', lineHeight: 1.8, fontSize: '1rem' }}>
            {service.details.whatIs}
          </p>
        </div>

        {/* Includes / Not Includes */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          {/* Included */}
          <div style={{ background: '#f0faf4', borderRadius: 16, padding: '1.75rem', border: '1px solid #c3e6d0' }}>
            <h3 style={{ color: g, fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', letterSpacing: '0.02em' }}>
              {sd.included}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {service.details.includes.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', marginBottom: '0.7rem', color: '#2a4a35', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  <span style={{ color: g, marginTop: '0.1rem', flexShrink: 0 }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Included + Price & Duration */}
          <div style={{ background: '#fdf4f4', borderRadius: 16, padding: '1.75rem', border: '1px solid #e8c5c5' }}>
            <h3 style={{ color: '#b5261e', fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', letterSpacing: '0.02em' }}>
              {sd.notIncluded}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {service.details.notIncludes.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', marginBottom: '0.7rem', color: '#5a2a2a', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  <span style={{ color: '#b5261e', marginTop: '0.1rem', flexShrink: 0 }}>✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '1.5rem', paddingTop: '1.2rem', borderTop: '1px solid #e8c5c5' }}>
              <div style={{ marginBottom: '0.7rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#8a7a6a', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>{sd.price}</span>
                <p style={{ color: bk, fontWeight: 600, fontSize: '0.95rem', marginTop: '0.2rem' }}>{service.details.price}</p>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#8a7a6a', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>{sd.duration}</span>
                <p style={{ color: bk, fontWeight: 600, fontSize: '0.95rem', marginTop: '0.2rem' }}>{service.details.duration}</p>
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
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: 16,
                  padding: '1.5rem 2.5rem',
                  marginBottom: '1.5rem',
                  border: `1px solid ${result === 'eligible' ? 'rgba(26,107,60,0.5)' : result === 'partial' ? 'rgba(201,168,76,0.5)' : 'rgba(181,38,30,0.5)'}`,
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                    {result === 'eligible' ? sd.eligible : result === 'partial' ? sd.partial : sd.notEligible}
                  </div>
                  <div style={{ color: 'rgba(245,237,214,0.6)', fontSize: '0.9rem' }}>
                    Score: {totalScore} / {maxScore}
                  </div>
                </div>

                <p style={{ color: 'rgba(245,237,214,0.85)', fontSize: '1rem', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 2rem' }}>
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
            <a href="mailto:contact@italycare360.com" style={{ background: 'rgba(255,255,255,0.12)', color: cr, textDecoration: 'none', borderRadius: 50, padding: '0.6rem 1.5rem', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.2)' }}>
              📧 contact@italycare360.com
            </a>
            <a href="https://wa.me/393517501164" style={{ background: 'rgba(255,255,255,0.12)', color: cr, textDecoration: 'none', borderRadius: 50, padding: '0.6rem 1.5rem', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.2)' }}>
              💬 WhatsApp
            </a>
          </div>
        </div>

      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
