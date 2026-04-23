'use client'

import { useState, useRef, useEffect } from 'react'
import { useLang } from '@/context/LangContext'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''
const WORKER_URL = process.env.NEXT_PUBLIC_CHAT_WORKER_URL || ''

/* ── UI strings ───────────────────────────────────────── */
const UI: Record<string, {
  title: string
  subtitle: string
  placeholder: string
  send: string
  welcome: string
  suggestions: string[]
  thinking: string
  error: string
  poweredBy: string
  close: string
  book: string
  bookBanner: string
  bookCta: string
  maxedOut: string
  formTitle: string
  formSubtitle: string
  formName: string
  formEmail: string
  formMessage: string
  formSubmit: string
  formSending: string
  formSuccess: string
  formError: string
}> = {
  fr: {
    title: 'Assistant ITALYCARE 360',
    subtitle: 'Pré-qualification rapide',
    placeholder: 'Posez votre question…',
    send: 'Envoyer',
    welcome: 'Bonjour ! Je suis votre conseiller ITALYCARE 360. Posez-moi vos questions sur l\'Italie — je vous oriente en 2-3 échanges et vous mets en contact avec l\'expert adapté.',
    suggestions: ['Acheter une villa en Toscane', 'Visa étudiant', 'Frais et services', 'Prendre rendez-vous'],
    thinking: 'L\'assistant réfléchit…',
    error: 'Désolé, une erreur est survenue. Contactez-nous directement.',
    poweredBy: 'Powered by AI',
    close: 'Fermer',
    book: 'Prendre rendez-vous gratuit',
    bookBanner: '✨ Prêt pour l\'étape suivante ? Nos experts vous offrent une consultation gratuite de 30 min.',
    bookCta: 'Réserver 30 min gratuites →',
    maxedOut: 'Pour approfondir votre projet, parlons de vive voix avec un expert — c\'est gratuit et sans engagement.',
    formTitle: 'Réservez votre consultation gratuite',
    formSubtitle: 'Notre expert vous rappellera sous 48h.',
    formName: 'Votre nom',
    formEmail: 'Votre email',
    formMessage: 'Votre projet en une phrase',
    formSubmit: 'Envoyer ma demande',
    formSending: 'Envoi en cours…',
    formSuccess: '✅ Reçu ! Notre expert vous contactera sous 48h.',
    formError: 'Une erreur est survenue. Contactez-nous directement à italycare360@gmail.com',
  },
  en: {
    title: 'ITALYCARE 360 Assistant',
    subtitle: 'Quick pre-qualification',
    placeholder: 'Ask your question…',
    send: 'Send',
    welcome: 'Hello! I\'m your ITALYCARE 360 advisor. Ask me your questions about Italy — I\'ll guide you in 2-3 exchanges then connect you with the right expert.',
    suggestions: ['Buy a villa in Tuscany', 'Student visa', 'Fees and services', 'Book a consultation'],
    thinking: 'Assistant is thinking…',
    error: 'Sorry, something went wrong. Please contact us directly.',
    poweredBy: 'Powered by AI',
    close: 'Close',
    book: 'Book free consultation',
    bookBanner: '✨ Ready for the next step? Our experts offer a free 30-min consultation.',
    bookCta: 'Book 30 free min →',
    maxedOut: 'To go deeper into your project, let\'s talk with a real expert — it\'s free, no commitment.',
    formTitle: 'Book your free consultation',
    formSubtitle: 'Our expert will reply within 48h.',
    formName: 'Your name',
    formEmail: 'Your email',
    formMessage: 'Your project in one sentence',
    formSubmit: 'Send my request',
    formSending: 'Sending…',
    formSuccess: '✅ Got it! Our expert will contact you within 48h.',
    formError: 'Something went wrong. Contact us directly at italycare360@gmail.com',
  },
  it: {
    title: 'Assistente ITALYCARE 360',
    subtitle: 'Pre-qualifica veloce',
    placeholder: 'Fai la tua domanda…',
    send: 'Invia',
    welcome: 'Ciao! Sono il tuo consulente ITALYCARE 360. Fammi le tue domande sull\'Italia — ti oriento in 2-3 scambi e ti connetto con l\'esperto giusto.',
    suggestions: ['Comprare una villa in Toscana', 'Visto studente', 'Costi e servizi', 'Prenota consulenza'],
    thinking: 'L\'assistente sta pensando…',
    error: 'Scusa, qualcosa è andato storto. Contattaci direttamente.',
    poweredBy: 'Powered by AI',
    close: 'Chiudi',
    book: 'Prenota consulenza gratuita',
    bookBanner: '✨ Pronto per il prossimo passo? I nostri esperti offrono una consulenza gratuita di 30 min.',
    bookCta: 'Prenota 30 min gratis →',
    maxedOut: 'Per approfondire il progetto, parliamo con un esperto reale — è gratis, senza impegno.',
    formTitle: 'Prenota la tua consulenza gratuita',
    formSubtitle: 'Il nostro esperto ti risponderà entro 48h.',
    formName: 'Il tuo nome',
    formEmail: 'La tua email',
    formMessage: 'Il tuo progetto in una frase',
    formSubmit: 'Invia la richiesta',
    formSending: 'Invio in corso…',
    formSuccess: '✅ Ricevuto! Il nostro esperto ti contatterà entro 48h.',
    formError: 'Qualcosa è andato storto. Scrivici a italycare360@gmail.com',
  },
  ar: {
    title: 'مساعد ITALYCARE 360',
    subtitle: 'تأهيل سريع',
    placeholder: 'اطرح سؤالك…',
    send: 'إرسال',
    welcome: 'مرحبًا! أنا مستشارك في ITALYCARE 360. اطرح أسئلتك حول إيطاليا — سأوجهك في 2-3 تبادلات ثم أصلك بالخبير المناسب.',
    suggestions: ['شراء فيلا في توسكانا', 'تأشيرة طالب', 'الرسوم والخدمات', 'حجز استشارة'],
    thinking: 'المساعد يفكر…',
    error: 'عذرًا، حدث خطأ. تواصل معنا مباشرة.',
    poweredBy: 'Powered by AI',
    close: 'إغلاق',
    book: 'احجز استشارة مجانية',
    bookBanner: '✨ مستعد للخطوة التالية؟ خبراؤنا يقدمون استشارة مجانية 30 دقيقة.',
    bookCta: '← احجز 30 دقيقة مجانية',
    maxedOut: 'للتعمق في مشروعك، تحدث مع خبير حقيقي — مجاني وبدون التزام.',
    formTitle: 'احجز استشارتك المجانية',
    formSubtitle: 'سيتواصل معك خبيرنا خلال 48 ساعة.',
    formName: 'اسمك',
    formEmail: 'بريدك الإلكتروني',
    formMessage: 'مشروعك في جملة واحدة',
    formSubmit: 'إرسال الطلب',
    formSending: 'جاري الإرسال…',
    formSuccess: '✅ تم الاستلام! سيتواصل معك خبيرنا خلال 48 ساعة.',
    formError: 'حدث خطأ. راسلنا مباشرة: italycare360@gmail.com',
  },
  ru: {
    title: 'Ассистент ITALYCARE 360',
    subtitle: 'Быстрая квалификация',
    placeholder: 'Задайте вопрос…',
    send: 'Отправить',
    welcome: 'Здравствуйте! Я ваш консультант ITALYCARE 360. Задавайте вопросы об Италии — я помогу за 2-3 обмена и свяжу с подходящим экспертом.',
    suggestions: ['Купить виллу в Тоскане', 'Студенческая виза', 'Стоимость и услуги', 'Записаться'],
    thinking: 'Ассистент думает…',
    error: 'Извините, произошла ошибка. Свяжитесь с нами напрямую.',
    poweredBy: 'Powered by AI',
    close: 'Закрыть',
    book: 'Бесплатная консультация',
    bookBanner: '✨ Готовы к следующему шагу? Наши эксперты дают бесплатную 30-минутную консультацию.',
    bookCta: 'Записаться на 30 мин →',
    maxedOut: 'Чтобы углубиться в проект, поговорите с реальным экспертом — бесплатно, без обязательств.',
    formTitle: 'Запишитесь на бесплатную консультацию',
    formSubtitle: 'Наш эксперт свяжется с вами в течение 48 часов.',
    formName: 'Ваше имя',
    formEmail: 'Ваш email',
    formMessage: 'Ваш проект в одном предложении',
    formSubmit: 'Отправить запрос',
    formSending: 'Отправляется…',
    formSuccess: '✅ Получено! Наш эксперт свяжется с вами в течение 48 часов.',
    formError: 'Произошла ошибка. Напишите нам на italycare360@gmail.com',
  },
  de: {
    title: 'ITALYCARE 360 Assistent',
    subtitle: 'Schnelle Vorqualifizierung',
    placeholder: 'Stellen Sie Ihre Frage…',
    send: 'Senden',
    welcome: 'Ciao! Ich bin Ihre ITALYCARE 360 Beraterin. Erzählen Sie mir von Ihrem Projekt in Italien — in wenigen Austauschen verbinde ich Sie mit dem passenden Experten.',
    suggestions: ['Villa in Toskana kaufen', 'Studentenvisum', 'Leistungen & Preise', 'Beratung buchen'],
    thinking: 'Der Assistent überlegt…',
    error: 'Entschuldigung, etwas ist schiefgegangen. Kontaktieren Sie uns direkt.',
    poweredBy: 'Powered by AI',
    close: 'Schließen',
    book: 'Kostenlose Beratung',
    bookBanner: '✨ Bereit für den nächsten Schritt? Unsere Experten bieten eine kostenlose 30-min Beratung.',
    bookCta: '30 Min kostenlos buchen →',
    maxedOut: 'Um tiefer in Ihr Projekt einzutauchen, sprechen Sie mit einem echten Experten — kostenlos, unverbindlich.',
    formTitle: 'Buchen Sie Ihre kostenlose Beratung',
    formSubtitle: 'Unser Experte antwortet innerhalb von 48 Stunden.',
    formName: 'Ihr Name',
    formEmail: 'Ihre E-Mail',
    formMessage: 'Ihr Projekt in einem Satz',
    formSubmit: 'Anfrage senden',
    formSending: 'Wird gesendet…',
    formSuccess: '✅ Erhalten! Unser Experte kontaktiert Sie innerhalb von 48 Stunden.',
    formError: 'Etwas ist schiefgegangen. Kontaktieren Sie uns direkt: info@italycare360.com',
  },
}

const MAX_USER_MESSAGES = 5  // After this, chat becomes "booking only"
const SHOW_BANNER_AFTER = 3  // Show prominent booking banner after N user messages

/* Italian first names — randomly picked at session start */
const ADVISOR_NAMES = [
  'Maria', 'Giulia', 'Sofia', 'Alessandra', 'Lucia',
  'Francesca', 'Valentina', 'Chiara', 'Elena', 'Isabella',
  'Beatrice', 'Martina', 'Aurora', 'Elisa', 'Federica',
]

function pickAdvisorName() {
  return ADVISOR_NAMES[Math.floor(Math.random() * ADVISOR_NAMES.length)]
}

function welcomeMessage(name: string, lang: string) {
  const templates: Record<string, string> = {
    fr: `Ciao ! Je m'appelle ${name}, votre conseillère ITALYCARE 360. Dites-moi votre projet en Italie — je vous oriente en quelques échanges puis je vous connecte avec l'expert adapté.`,
    en: `Ciao! I'm ${name}, your ITALYCARE 360 advisor. Tell me about your project in Italy — I'll guide you in a few exchanges and connect you with the right expert.`,
    it: `Ciao! Sono ${name}, la tua consulente ITALYCARE 360. Dimmi del tuo progetto in Italia — ti oriento in pochi scambi e ti connetto con l'esperto giusto.`,
    ar: `!Ciao أنا ${name}، مستشارتك في ITALYCARE 360. أخبرني عن مشروعك في إيطاليا — سأوجهك في بضع تبادلات ثم أصلك بالخبير المناسب.`,
    ru: `Ciao! Меня зовут ${name}, я ваш консультант ITALYCARE 360. Расскажите о вашем проекте в Италии — я помогу в нескольких обменах и свяжу вас с нужным экспертом.`,
    de: `Ciao! Ich heiße ${name}, Ihre ITALYCARE 360 Beraterin. Erzählen Sie mir von Ihrem Projekt in Italien — in wenigen Austauschen verbinde ich Sie mit dem passenden Experten.`,
  }
  return templates[lang] || templates.en
}

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatBot() {
  const { lang, isRTL } = useLang()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [formName, setFormName] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formMessage, setFormMessage] = useState('')
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [advisorName, setAdvisorName] = useState<string>('')
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const ui = UI[lang] || UI.en

  const userMessageCount = messages.filter(m => m.role === 'user').length
  const showBookingBanner = userMessageCount >= SHOW_BANNER_AFTER
  const isMaxedOut = userMessageCount >= MAX_USER_MESSAGES

  /* Fresh session on every page load — pick a random advisor name */
  useEffect(() => {
    setAdvisorName(pickAdvisorName())
    // Also clear any stale localStorage from previous versions
    try { localStorage.removeItem('italycare-chat') } catch {}
  }, [])

  /* Auto-scroll to bottom */
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, loading])

  /* Focus input when opened */
  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 200)
    }
  }, [open])

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return
    setError(false)

    const userMsg: Message = { role: 'user', content: text.trim() }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      if (!WORKER_URL) {
        // Fallback if worker not configured — friendly offline response
        await new Promise(r => setTimeout(r, 800))
        const fallback: Record<string, string> = {
          fr: `Merci pour votre question ! Notre assistant IA sera bientôt disponible. En attendant, contactez-nous directement :\n\n📧 info@italycare360.com\n📱 +39 351 750 1164\n💬 WhatsApp disponible\n\nOu prenez rendez-vous pour une consultation gratuite de 30 min.`,
          en: `Thanks for your question! Our AI assistant will be available soon. In the meantime, please contact us directly:\n\n📧 info@italycare360.com\n📱 +39 351 750 1164\n💬 WhatsApp available\n\nOr book a free 30-min consultation.`,
          it: `Grazie per la tua domanda! Il nostro assistente IA sarà presto disponibile. Nel frattempo, contattaci direttamente:\n\n📧 info@italycare360.com\n📱 +39 351 750 1164\n💬 WhatsApp disponibile\n\nO prenota una consulenza gratuita di 30 min.`,
          ar: `شكرًا على سؤالك! سيكون مساعدنا الذكي متاحًا قريبًا. في هذه الأثناء، تواصل معنا مباشرة:\n\n📧 info@italycare360.com\n📱 +39 351 750 1164\n💬 WhatsApp متاح\n\nأو احجز استشارة مجانية لمدة 30 دقيقة.`,
          ru: `Спасибо за ваш вопрос! Наш ИИ-ассистент скоро будет доступен. Пока свяжитесь с нами напрямую:\n\n📧 info@italycare360.com\n📱 +39 351 750 1164\n💬 WhatsApp доступен\n\nИли запишитесь на бесплатную 30-минутную консультацию.`,
        }
        setMessages([...newMessages, { role: 'assistant', content: fallback[lang] || fallback.en }])
        setLoading(false)
        return
      }

      /* Real Worker call with streaming */
      const response = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages, lang, advisorName }),
      })

      if (!response.ok || !response.body) {
        throw new Error(`HTTP ${response.status}`)
      }

      /* Append empty assistant message we'll fill with streaming tokens */
      setMessages(prev => [...prev, { role: 'assistant', content: '' }])

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() || ''
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6).trim()
            if (data === '[DONE]') continue
            try {
              const parsed = JSON.parse(data)
              if (parsed.delta) {
                setMessages(prev => {
                  const copy = [...prev]
                  copy[copy.length - 1] = {
                    ...copy[copy.length - 1],
                    content: copy[copy.length - 1].content + parsed.delta,
                  }
                  return copy
                })
              }
            } catch {}
          }
        }
      }
    } catch (err) {
      console.error('[ChatBot]', err)
      setError(true)
      setMessages(prev => [...prev, { role: 'assistant', content: ui.error }])
    } finally {
      setLoading(false)
    }
  }

  const clearChat = () => {
    setMessages([])
    setShowForm(false)
    setFormStatus('idle')
    setFormName('')
    setFormEmail('')
    setFormMessage('')
    try { localStorage.removeItem('italycare-chat') } catch {}
  }

  const submitLead = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formName.trim() || !formEmail.trim() || !formMessage.trim()) return
    setFormStatus('sending')

    try {
      if (!WORKER_URL) throw new Error('Worker not configured')
      const res = await fetch(`${WORKER_URL}/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formName.trim(),
          email: formEmail.trim(),
          message: formMessage.trim(),
          lang,
          conversation: messages,
        }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setFormStatus('success')
    } catch (err) {
      console.error('[Lead]', err)
      setFormStatus('error')
    }
  }

  return (
    <>
      {/* Floating bubble button */}
      {!open && (
        <button
          className="chat-bubble"
          onClick={() => setOpen(true)}
          aria-label="Open chat"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          <span className="chat-bubble-dot" />
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div className={`chat-panel ${isRTL ? 'rtl' : ''}`} role="dialog" aria-label={ui.title}>
          <div className="chat-header">
            <div className="chat-header-left">
              <img
                src={`${BASE}/moneta.svg`}
                alt=""
                className="chat-header-coin"
                aria-hidden="true"
              />
              <div>
                <div className="chat-title">{advisorName ? `${advisorName} · ITALYCARE 360` : ui.title}</div>
                <div className="chat-subtitle">
                  <span className="chat-online-dot" />
                  {ui.subtitle}
                </div>
              </div>
            </div>
            <button className="chat-close" onClick={() => setOpen(false)} aria-label={ui.close}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="18" height="18">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="chat-messages" ref={scrollRef}>
            {/* Welcome */}
            {messages.length === 0 && advisorName && (
              <>
                <div className="chat-message chat-message-bot">
                  <div className="chat-bubble-bot">{welcomeMessage(advisorName, lang)}</div>
                </div>
                <div className="chat-suggestions">
                  {ui.suggestions.map((s, i) => (
                    <button key={i} className="chat-suggestion" onClick={() => sendMessage(s)}>
                      {s}
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Messages */}
            {messages.map((m, i) => (
              <div key={i} className={`chat-message ${m.role === 'user' ? 'chat-message-user' : 'chat-message-bot'}`}>
                <div className={m.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'}>
                  {m.content || (loading && i === messages.length - 1 ? <ChatTyping /> : '')}
                </div>
              </div>
            ))}

            {loading && messages[messages.length - 1]?.role === 'user' && (
              <div className="chat-message chat-message-bot">
                <div className="chat-bubble-bot">
                  <ChatTyping />
                </div>
              </div>
            )}

            {/* Booking banner — appears after 3 exchanges */}
            {showBookingBanner && !loading && !showForm && formStatus !== 'success' && (
              <div className="chat-booking-banner">
                <div className="chat-booking-text">
                  {isMaxedOut ? ui.maxedOut : ui.bookBanner}
                </div>
                <button type="button" className="chat-booking-cta" onClick={() => {
                  setShowForm(true)
                  // Pre-fill project field with last user message
                  const lastUser = [...messages].reverse().find(m => m.role === 'user')
                  if (lastUser && !formMessage) setFormMessage(lastUser.content)
                }}>
                  {ui.bookCta}
                </button>
              </div>
            )}

            {/* Inline lead form */}
            {showForm && formStatus !== 'success' && (
              <form className="chat-lead-form" onSubmit={submitLead}>
                <div className="chat-lead-title">{ui.formTitle}</div>
                <div className="chat-lead-sub">{ui.formSubtitle}</div>
                <input
                  type="text"
                  className="chat-lead-input"
                  placeholder={ui.formName}
                  value={formName}
                  onChange={e => setFormName(e.target.value)}
                  required
                  autoFocus
                />
                <input
                  type="email"
                  className="chat-lead-input"
                  placeholder={ui.formEmail}
                  value={formEmail}
                  onChange={e => setFormEmail(e.target.value)}
                  required
                />
                <textarea
                  className="chat-lead-input"
                  placeholder={ui.formMessage}
                  value={formMessage}
                  onChange={e => setFormMessage(e.target.value)}
                  rows={3}
                  required
                />
                <button type="submit" className="chat-lead-submit" disabled={formStatus === 'sending'}>
                  {formStatus === 'sending' ? ui.formSending : ui.formSubmit}
                </button>
                {formStatus === 'error' && (
                  <div className="chat-lead-error">{ui.formError}</div>
                )}
              </form>
            )}

            {/* Success confirmation */}
            {formStatus === 'success' && (
              <div className="chat-lead-success">{ui.formSuccess}</div>
            )}
          </div>

          <form
            className="chat-input-row"
            onSubmit={(e) => {
              e.preventDefault()
              sendMessage(input)
            }}
          >
            <textarea
              ref={inputRef}
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isMaxedOut ? ui.maxedOut : ui.placeholder}
              rows={1}
              disabled={isMaxedOut}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  sendMessage(input)
                }
              }}
            />
            <button type="submit" className="chat-send" disabled={loading || !input.trim() || isMaxedOut} aria-label={ui.send}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
              </svg>
            </button>
          </form>

          <div className="chat-footer">
            <span>{ui.poweredBy}</span>
            {messages.length > 0 && (
              <button className="chat-clear" onClick={clearChat}>↺</button>
            )}
          </div>
        </div>
      )}
    </>
  )
}

function ChatTyping() {
  return (
    <span className="chat-typing">
      <span /><span /><span />
    </span>
  )
}
