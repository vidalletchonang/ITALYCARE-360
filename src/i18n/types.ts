export type LangCode = 'fr' | 'en' | 'ar' | 'it'

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
    items: { icon: string; t: string; d: string }[]
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
}
