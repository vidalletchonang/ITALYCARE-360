export type LangCode = 'fr' | 'en' | 'ar' | 'it'

export interface QuizOption {
  text: string
  points: number
}

export interface QuizQuestion {
  question: string
  options: QuizOption[]
}

export interface ServiceDetails {
  hero: string
  whatIs: string
  includes: string[]
  notIncludes: string[]
  price: string
  duration: string
  quiz: QuizQuestion[]
}

export interface ServiceItem {
  icon: string
  t: string
  d: string
  slug: string
  details: ServiceDetails
}

export interface Translation {
  nav: {
    services: string
    about: string
    process: string
    testi: string
    contact: string
    cta: string
  }
  hero: {
    tag: string
    line1: string
    line2: string
    line3: string
    desc: string
    btn1: string
    btn2: string
    scroll: string
  }
  marquee: string[]
  about: {
    label: string
    h1: string
    h2: string
    h3: string
    p1: string
    p2: string
    vals: { icon: string; h: string; p: string }[]
  }
  services: {
    label: string
    h1: string
    h2: string
    desc: string
    discover: string
    items: ServiceItem[]
  }
  process: {
    label: string
    h1: string
    h2: string
    sub: string
    steps: { icon: string; t: string; d: string }[]
  }
  nums: { n: number; suffix: string; l: string }[]
  testi: {
    label: string
    h1: string
    h2: string
    items: { text: string; name: string; meta: string; flag: string; bg: string }[]
  }
  cta: {
    label: string
    h1: string
    h2: string
    h3: string
    desc: string
    btn1: string
    btn2: string
  }
  bar: { icon: string; text: string }[]
  footer: {
    desc: string
    cols: { title: string; links: string[] }[]
    copy: string
    tagline: string
  }
  form: {
    title: string
    subtitle: string
    name: string
    email: string
    phone: string
    service: string
    serviceOpts: string[]
    date: string
    message: string
    submit: string
    sending: string
    success: string
    successMsg: string
    error: string
    errorMsg: string
    close: string
  }
  serviceDetail: {
    backBtn: string
    eligibilityTitle: string
    eligibilitySubtitle: string
    startBtn: string
    nextBtn: string
    prevBtn: string
    resultTitle: string
    eligible: string
    partial: string
    notEligible: string
    eligibleMsg: string
    partialMsg: string
    notEligibleMsg: string
    rdvBtn: string
    retryBtn: string
    question: string
    of: string
    included: string
    notIncluded: string
    price: string
    duration: string
    contact: string
  }
  gallery: {
    label: string
    h1: string
    h2: string
    photos: { label: string }[]
  }
  video: {
    label: string
    h1: string
    h2: string
    p: string
  }
  team: {
    label: string
    h1: string
    h2: string
    desc: string
    badge: string
    emailBtn: string
    readMore: string
    readLess: string
  }
}
