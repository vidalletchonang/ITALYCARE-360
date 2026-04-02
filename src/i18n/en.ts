import type { Translation } from './types'

export const en: Translation = {
  nav: {
    home: 'Home',
    services: 'Services',
    about: 'About',
    process: 'Process',
    testi: 'Testimonials',
    blog: 'Blog',
    contact: 'Contact',
    cta: 'Free Consultation',
  },
  hero: {
    tag: 'Your trusted partner in Italy',
    line1: 'Italy,',
    line2: 'simplified',
    line3: 'for you.',
    desc: 'ITALYCARE 360 guides expats through all their projects in Italy — real estate, healthcare, renovation, export, student visa and more. One contact, total expertise.',
    btn1: 'Start my project →',
    btn2: 'View services ↓',
    scroll: 'Scroll',
  },
  marquee: ['Real Estate', 'Medical Care 360°', 'Renovation & Works', 'Export Made in Italy', 'Student Visa', 'Legal Assistance', 'Premium Concierge', 'Administrative Services', 'Event Planning', 'Retirement Homes', 'Financing', 'Certified Professionals'],
  about: {
    label: 'Who we are',
    h1: 'More than a service.',
    h2: 'A life partner',
    h3: 'in Italy.',
    p1: 'ITALYCARE 360 was born from a simple observation: foreigners who want to live, invest or study in Italy face an administrative, linguistic and cultural maze.',
    p2: 'Our team of specialists — lawyers, partner doctors, real estate agents, certified craftsmen — supports you in your language, with transparency and excellence.',
    vals: [
      { icon: '🛡️', h: 'Total Trust', p: 'Verified partners, clear contracts, no hidden surprises.' },
      { icon: '⚡', h: '48h Response', p: 'Every request receives a qualified response within 48 hours.' },
      { icon: '🌍', h: 'Multi-language', p: 'FR, EN, AR, ES, IT — service in your language.' },
      { icon: '📊', h: 'Real-time tracking', p: 'Dedicated dashboard — every step visible in real time.' },
    ],
  },
  services: {
    label: 'What we do',
    h1: 'Our',
    h2: 'Services 360°',
    desc: 'From real estate to medical care — ITALYCARE manages all the aspects related to your everyday life in Italy & more.',
    discover: 'Discover →',
    items: [
      {
        icon: '🏠',
        t: 'Real Estate & Investment',
        d: 'Purchase, sale, due diligence, notary, tax advice. We find the ideal property and handle all procedures for foreign buyers.',
        slug: 'immobilier',
        details: {
          hero: "Invest in Italy with complete peace of mind — we handle every step of your property acquisition.",
          whatIs: "Our real estate service supports foreign buyers from property search to signing at the notary. We guide you through the Italian legal and fiscal framework, identify opportunities matching your budget and manage all administrative procedures. Whether you are looking for a primary residence, holiday home or rental investment, we are by your side every step of the way.",
          includes: [
            'Personalised property sourcing',
            'Legal and technical due diligence',
            'Investment and yield analysis',
            'End-to-end purchase assistance',
            'Price and terms negotiation',
            'Post-purchase support',
            'Rental management and property management',
          ],
          notIncludes: [
            'Notary fees and purchase taxes (buyer\'s responsibility)',
            'Post-purchase renovation or fitting works',
          ],
          price: 'From €1,500 (depending on purchase budget)',
          duration: '4 to 12 weeks depending on the project',
          quiz: [
            {
              question: "What is your investment budget?",
              options: [
                { text: 'Less than €50,000', points: 0 },
                { text: 'Between €50,000 and €150,000', points: 1 },
                { text: 'Between €150,000 and €500,000', points: 2 },
                { text: 'More than €500,000', points: 2 },
              ],
            },
            {
              question: "Do you have an Italian codice fiscale?",
              options: [
                { text: "No, I don't know what that is", points: 0 },
                { text: "No, but I would like to get one", points: 1 },
                { text: "Yes, I already have one", points: 2 },
              ],
            },
            {
              question: "What is your residency status?",
              options: [
                { text: "I live outside Europe", points: 0 },
                { text: "I live in Europe (EU)", points: 1 },
                { text: "I reside or will reside in Italy", points: 2 },
              ],
            },
            {
              question: "What is your main objective?",
              options: [
                { text: "I'm just looking for information", points: 0 },
                { text: "Rental investment or secondary residence", points: 1 },
                { text: "Primary residence or concrete project within 6 months", points: 2 },
              ],
            },
          ],
        },
      },
      {
        icon: '🔨',
        t: 'Renovation & Works',
        d: 'Complete restructuring, electricity, plumbing, gas. Coordination with certified craftsmen and remote site monitoring.',
        slug: 'renovation',
        details: {
          hero: "Transform your Italian property without being on-site — we coordinate everything from your country.",
          whatIs: "Our renovation service manages all your works in Italy, whether you are present or abroad. We select certified craftsmen, prepare quotes, obtain necessary permits and ensure rigorous site monitoring with weekly photo reports. From small interior works to complete restructuring, every project is handled with the utmost care.",
          includes: [
            'Initial technical assessment',
            'Quotes and supplier selection',
            'Project management',
            'Interior design and space planning',
            'Site supervision',
            'Quality control and timeline monitoring',
            'Assistance accessing applicable renovation bonuses',
          ],
          notIncludes: [
            'Cost of materials and labor (direct billing)',
            'Furnishing and interior decoration',
          ],
          price: 'From €800 (project management fee)',
          duration: '2 weeks to 6 months depending on project scope',
          quiz: [
            {
              question: "Do you own a property in Italy?",
              options: [
                { text: "No", points: 0 },
                { text: "I have an ongoing purchase project", points: 1 },
                { text: "Yes, I own a property in Italy", points: 2 },
              ],
            },
            {
              question: "What type of works do you want to carry out?",
              options: [
                { text: "I don't know yet", points: 0 },
                { text: "Small works / interior layout", points: 1 },
                { text: "Complete renovation or restructuring", points: 2 },
              ],
            },
            {
              question: "Do you have an estimated budget?",
              options: [
                { text: "Less than €5,000", points: 0 },
                { text: "Between €5,000 and €30,000", points: 1 },
                { text: "More than €30,000", points: 2 },
              ],
            },
            {
              question: "Are you on-site or remote?",
              options: [
                { text: "On-site and managing myself", points: 0 },
                { text: "I can travel occasionally", points: 1 },
                { text: "I'm remote and need full monitoring", points: 2 },
              ],
            },
          ],
        },
      },
      {
        icon: '🏥',
        t: 'Medical Care 360°',
        d: 'Appointment booking, medical interpretation, hospital coordination, support for specialized, thermal and respiratory care in Italy.',
        slug: 'medical',
        details: {
          hero: "Access Italy's top specialists with comprehensive medical support in your own language.",
          whatIs: "Our medical service gives you access to the Italian healthcare system without any language or administrative barriers. We organize your appointments with renowned specialists, provide medical interpretation during consultations, coordinate hospital admissions and manage all medical documents. We also organize thermal and respiratory care stays in Italy. For international patients requiring specialized care not available in their home country, we offer full end-to-end support.",
          includes: [
            'Selection of healthcare facilities',
            'Appointment and examination booking',
            'Specialist coordination',
            'Second medical opinion',
            'Translation of medical documentation',
            'Assistance during hospitalisations and procedures',
          ],
          notIncludes: [
            'Medical and hospital fees (patient\'s responsibility)',
            'Medications and medical devices',
          ],
          price: 'From €300 / consultation',
          duration: 'From 1 day to several weeks depending on treatment',
          quiz: [
            {
              question: "What type of care do you need?",
              options: [
                { text: "General consultation (available locally)", points: 0 },
                { text: "Specialized consultation not available in my country", points: 2 },
                { text: "Surgery or hospital treatment", points: 2 },
                { text: "Chronic remote medical follow-up", points: 1 },
              ],
            },
            {
              question: "Do you speak Italian?",
              options: [
                { text: "Yes, fluently", points: 0 },
                { text: "A little, beginner level", points: 1 },
                { text: "No, I need a medical interpreter", points: 2 },
              ],
            },
            {
              question: "Do you have international health insurance?",
              options: [
                { text: "No", points: 1 },
                { text: "Yes, basic insurance", points: 1 },
                { text: "Yes, comprehensive insurance covering Italy", points: 2 },
              ],
            },
            {
              question: "When do you need care?",
              options: [
                { text: "Within 2 weeks (urgent)", points: 2 },
                { text: "Within the month", points: 1 },
                { text: "Within 3 to 6 months", points: 1 },
                { text: "Just gathering information", points: 0 },
              ],
            },
          ],
        },
      },
      {
        icon: '📦',
        t: 'Export Made in Italy',
        d: 'Selection of authentic Italian producers, international logistics, customs management and certifications.',
        slug: 'export',
        details: {
          hero: "Import Italian excellence directly from producers — authenticity and quality guaranteed.",
          whatIs: "Our export service connects you with the best Italian producers in food, fashion, furniture and design. We select verified suppliers, negotiate commercial terms, manage international logistics and assist with all customs procedures and certifications. Whether you are a distributor, reseller or direct buyer, we build your Made in Italy supply chain.",
          includes: [
            'Research and selection of local Italian producers',
            'Support for exporting Italian products abroad',
            'Logistics management and international shipping',
            'Coordination with certified suppliers and distributors',
            'Customs assistance and export/import documentation',
            'Sourcing of typical regional products (food, wine, lifestyle goods)',
            'Support for commercial partnerships between Italian and foreign companies',
          ],
          notIncludes: [
            'Cost of goods and transport fees',
            'Taxes and customs duties in destination country',
          ],
          price: 'From €1,200 (partnership setup)',
          duration: '4 to 8 weeks for the first order',
          quiz: [
            {
              question: "Do you already have a legal structure (company)?",
              options: [
                { text: "No", points: 0 },
                { text: "In the process of creating one", points: 1 },
                { text: "Yes, established company", points: 2 },
              ],
            },
            {
              question: "What type of Made in Italy products interest you?",
              options: [
                { text: "I don't know yet", points: 0 },
                { text: "Food, fashion, furniture or design", points: 1 },
                { text: "I have already identified specific products", points: 2 },
              ],
            },
            {
              question: "What is your target market?",
              options: [
                { text: "Local / national only", points: 0 },
                { text: "Regional / a few countries", points: 1 },
                { text: "International with volume", points: 2 },
              ],
            },
            {
              question: "Have you imported products from Europe before?",
              options: [
                { text: "No, first time", points: 0 },
                { text: "Once or twice", points: 1 },
                { text: "Yes, I have import experience", points: 2 },
              ],
            },
          ],
        },
      },
      {
        icon: '🎓',
        t: 'Italian Student Visa',
        d: 'Complete visa file processing, university enrollment, student housing, arrival support in Italy.',
        slug: 'visa-etudiant',
        details: {
          hero: "Make your dream of studying in Italy a reality — from university enrollment to your arrival and settlement.",
          whatIs: "Our student visa service handles your entire study project in Italy. We advise on universities and programs, prepare your application file, handle your visa request and organize your arrival. Our expertise in the Italian university system and consular procedures ensures the most efficient processing of your application.",
          includes: [
            'Requirements assessment',
            'University and school enrolment support',
            'Visa documentation preparation',
            'Residence permit application assistance',
            'Renewal support',
            'Arrival orientation in Italy',
            'Accommodation search',
          ],
          notIncludes: [
            'Tuition and visa fees (paid directly to institutions)',
            'Airfare and personal travel expenses',
          ],
          price: 'From €900 (complete file)',
          duration: '6 to 16 weeks depending on university and consulate',
          quiz: [
            {
              question: "Have you received acceptance from an Italian university?",
              options: [
                { text: "No, I haven't applied yet", points: 0 },
                { text: "I've applied but no response yet", points: 1 },
                { text: "Yes, I have an acceptance letter", points: 2 },
              ],
            },
            {
              question: "Do you have sufficient financial resources? (min. €6,000/year)",
              options: [
                { text: "No", points: 0 },
                { text: "Partially", points: 1 },
                { text: "Yes, I can prove it", points: 2 },
              ],
            },
            {
              question: "What is your current situation?",
              options: [
                { text: "I am in Italy with another visa", points: 1 },
                { text: "I am in my home country", points: 2 },
                { text: "I am in a third country", points: 1 },
              ],
            },
            {
              question: "Do you have accommodation planned in Italy?",
              options: [
                { text: "No, no plans", points: 0 },
                { text: "Still looking", points: 1 },
                { text: "Yes, university residence or apartment found", points: 2 },
              ],
            },
          ],
        },
      },
      {
        icon: '⚖️',
        t: 'Legal Assistance',
        d: 'Real estate, tax, inheritance law, company formation in Italy. Multilingual partner lawyers available.',
        slug: 'juridique',
        details: {
          hero: "Protect your interests in Italy with experienced multilingual partner lawyers.",
          whatIs: "Our network of Italian partner lawyers covers all areas of law relevant to foreigners in Italy: real estate, tax, corporate, inheritance and family law. We liaise between you and your lawyer, provide necessary legal translations and monitor your case progress. You benefit from high-level Italian legal expertise in your own language.",
          includes: [
            'Real estate law',
            'Immigration law (visas, residence permits)',
            'Corporate and commercial law',
            'Contract law',
            'Tax and fiscal law',
            'Inheritance and succession law',
            'Family law',
            'Civil and commercial litigation',
            'Debt recovery',
            'Legal due diligence',
            'Notarial assistance',
            'Regulatory compliance',
            'Arbitration and ADR',
          ],
          notIncludes: [
            'Lawyer fees (billed separately depending on the case)',
            'Court fees and official procedures',
          ],
          price: 'From €150 / consultation',
          duration: 'Variable depending on case complexity',
          quiz: [
            {
              question: "What type of legal assistance are you looking for?",
              options: [
                { text: "I don't know yet", points: 0 },
                { text: "Real estate or tax law", points: 2 },
                { text: "Company formation in Italy", points: 2 },
                { text: "Inheritance or family law", points: 1 },
              ],
            },
            {
              question: "Do you have an urgent case?",
              options: [
                { text: "No, just gathering information", points: 0 },
                { text: "Within the next 3 months", points: 1 },
                { text: "Urgent — within 2 weeks", points: 2 },
              ],
            },
            {
              question: "Do you already have Italian-language documents to process?",
              options: [
                { text: "No", points: 0 },
                { text: "Yes, a few documents", points: 1 },
                { text: "Yes, a complete file", points: 2 },
              ],
            },
            {
              question: "Do you already have a lawyer or advisor in Italy?",
              options: [
                { text: "No", points: 2 },
                { text: "Yes, but they don't speak my language", points: 1 },
                { text: "Yes, satisfied with my current services", points: 0 },
              ],
            },
          ],
        },
      },
      {
        icon: '🚗',
        t: 'Premium Concierge',
        d: 'Airport transfer, temporary accommodation, official translation, postal domiciliation, daily assistance.',
        slug: 'conciergerie',
        details: {
          hero: "Your daily life in Italy simplified — we handle everything so you can focus on what matters.",
          whatIs: "Our premium concierge service takes care of all the logistical and practical aspects of your life in Italy. From your arrival at the airport to your long-term settlement, we orchestrate every detail: accommodation, transport, official translations, domiciliation and daily assistance. A dedicated contact is available 7 days a week to handle all your requests.",
          includes: [
            'Short and long-term property rental search',
            'Restaurant, hotel and experience bookings',
            'Private transfers and mobility',
            'Personal shopping',
            'Tailored lifestyle organisation',
            'Daily assistance and support',
          ],
          notIncludes: [
            'Transport and accommodation costs (rebilled at actual cost)',
            'Sworn translation fees (depending on volume)',
          ],
          price: 'From €200 / month or per service',
          duration: 'One-time or monthly subscription as needed',
          quiz: [
            {
              question: "When are you planning to arrive in Italy?",
              options: [
                { text: "No specific date", points: 0 },
                { text: "Within 3 months", points: 2 },
                { text: "Within less than a month", points: 2 },
              ],
            },
            {
              question: "What services do you need?",
              options: [
                { text: "Just an airport transfer", points: 1 },
                { text: "Accommodation + transport + assistance", points: 2 },
                { text: "Full service (accommodation, transport, translation, domiciliation)", points: 2 },
              ],
            },
            {
              question: "How long is your stay?",
              options: [
                { text: "Less than a week", points: 0 },
                { text: "1 to 4 weeks", points: 1 },
                { text: "More than a month", points: 2 },
              ],
            },
            {
              question: "Do you need official translations?",
              options: [
                { text: "No", points: 0 },
                { text: "Maybe", points: 1 },
                { text: "Yes, several documents", points: 2 },
              ],
            },
          ],
        },
      },
      {
        icon: '📋',
        t: 'Administrative Services',
        d: 'Codice fiscale, permesso di soggiorno, residency, registration — all your official documents handled A to Z.',
        slug: 'administratif',
        details: {
          hero: "Simplify your administrative procedures in Italy — our team handles every official document for you.",
          whatIs: "Navigating Italian bureaucracy can seem like an insurmountable challenge for a foreigner. Our administrative service handles all your official procedures: obtaining the codice fiscale, applying for a permesso di soggiorno, registering residency, vehicle registration and any other administrative document. We save you queues, filing errors and unnecessary delays.",
          includes: [
            'Codice fiscale (Italian tax number)',
            'Bank account opening',
            'Residency registration (anagrafe)',
            'Domestic utilities (electricity, gas, internet)',
            'Driving licence and conversions',
            'General administrative assistance',
          ],
          notIncludes: [
            'Administrative fees and official stamps (applicant\'s responsibility)',
            'Travel to prefectures or questure (if required)',
          ],
          price: 'From €150 per procedure',
          duration: '1 to 8 weeks depending on document type',
          quiz: [
            {
              question: "Do you already have a codice fiscale?",
              options: [
                { text: "No", points: 2 },
                { text: "Yes", points: 0 },
              ],
            },
            {
              question: "What procedure do you want to complete?",
              options: [
                { text: "Get a codice fiscale", points: 2 },
                { text: "Permesso di soggiorno (residency permit)", points: 2 },
                { text: "Official residency registration", points: 2 },
                { text: "Multiple procedures", points: 2 },
              ],
            },
            {
              question: "Are you currently in Italy?",
              options: [
                { text: "No, I am abroad", points: 1 },
                { text: "Yes, for less than 90 days", points: 2 },
                { text: "Yes, for more than 90 days without a permit", points: 2 },
              ],
            },
            {
              question: "Do you speak Italian?",
              options: [
                { text: "No", points: 2 },
                { text: "A little", points: 1 },
                { text: "Fluently", points: 0 },
              ],
            },
          ],
        },
      },
      {
        icon: '🎉',
        t: 'Event Planning 360°',
        d: 'Weddings, christenings, birthdays, corporate seminars in Italy. Venue search, catering, decoration, full logistics.',
        slug: 'evenements',
        details: {
          hero: 'Celebrate your precious moments in Italy — complete event organisation with exceptional care.',
          whatIs: 'Our event planning service takes care of the full organisation of your events in Italy, whether it is a romantic wedding in Tuscany, a christening in a Roman villa or a corporate seminar in Milan. We manage the search for the perfect venue, supplier selection, logistical coordination and on-the-day management to ensure every moment is perfect.',
          includes: [
            'Event design and concept creation',
            'Venue search and booking',
            'Catering and supplier selection',
            'Logistics management',
            'Day-of coordination',
            'Private and corporate events',
          ],
          notIncludes: [
            'Cost of suppliers (catering, venue hire, etc.)',
            'Airfare for guests',
          ],
          price: 'From €800 (project coordination)',
          duration: '2 to 12 months depending on the event',
          quiz: [
            {
              question: 'What type of event are you planning?',
              options: [
                { text: "I haven't decided yet", points: 0 },
                { text: 'Birthday or private party', points: 1 },
                { text: 'Wedding, christening or communion', points: 2 },
                { text: 'Seminar or corporate event', points: 2 },
              ],
            },
            {
              question: 'How many guests are you expecting?',
              options: [
                { text: 'Fewer than 20 people', points: 0 },
                { text: 'Between 20 and 50 people', points: 1 },
                { text: 'More than 50 people', points: 2 },
              ],
            },
            {
              question: 'Do you have a planned date?',
              options: [
                { text: 'No, not yet', points: 0 },
                { text: 'In 6 to 12 months', points: 1 },
                { text: 'In less than 6 months', points: 2 },
              ],
            },
            {
              question: 'Do you have a defined budget?',
              options: [
                { text: 'No', points: 0 },
                { text: 'Approximate budget', points: 1 },
                { text: 'Yes, confirmed budget', points: 2 },
              ],
            },
          ],
        },
      },
      {
        icon: '🏡',
        t: 'Retirement Homes & Senior Residences',
        d: 'Search and selection of retirement homes in Italy based on the medical, linguistic and financial needs of each resident.',
        slug: 'maisons-retraite',
        details: {
          hero: 'Find the ideal senior residence in Italy — selected according to the medical, cultural and personal needs of your loved one.',
          whatIs: 'Our specialist service helps you find the most suitable retirement home or senior residence in Italy based on the medical, linguistic and financial requirements of your loved one. We analyse the medical file, identify matching establishments, arrange visits and handle all admission procedures. Regular follow-up is provided after settling in.',
          includes: [
            'Search for qualified facilities',
            'Service and standards assessment',
            'Admission support',
            'Healthcare coordination',
            'Regular reporting to families',
            'Ongoing monitoring',
          ],
          notIncludes: [
            'Retirement home stay costs',
            'Special medical expenses',
          ],
          price: 'From €500 (search and placement)',
          duration: '4 to 10 weeks depending on availability',
          quiz: [
            {
              question: 'Who are you looking for a residence for?',
              options: [
                { text: 'For myself', points: 2 },
                { text: 'For a close family member', points: 2 },
                { text: 'I am gathering information for the future', points: 0 },
              ],
            },
            {
              question: 'Are there specific medical needs?',
              options: [
                { text: 'No, fully independent', points: 1 },
                { text: 'Light assistance (daily help)', points: 2 },
                { text: 'Regular or specialist medical care', points: 2 },
              ],
            },
            {
              question: 'What is the available monthly budget?',
              options: [
                { text: 'Less than €1,500/month', points: 0 },
                { text: 'Between €1,500 and €3,000/month', points: 1 },
                { text: 'More than €3,000/month', points: 2 },
              ],
            },
            {
              question: 'Which region of Italy do you prefer?',
              options: [
                { text: 'No preference', points: 1 },
                { text: 'Northern Italy (Milan, Turin, Venice)', points: 2 },
                { text: 'Central or Southern Italy (Rome, Florence, Naples)', points: 2 },
              ],
            },
          ],
        },
      },
      {
        icon: '💰',
        t: 'Financing & Financial Solutions',
        d: 'Financing search for your real estate, entrepreneurial or personal projects in Italy. Banking partners and tailor-made solutions.',
        slug: 'financement',
        details: {
          hero: 'Finance your projects in Italy — we identify the best banking and financial solutions for your situation.',
          whatIs: 'Our financing service supports you in finding the best solutions to fund your projects in Italy. Whether you wish to take out a mortgage, finance the creation of your company or obtain personal credit, our network of Italian banking and financial partners offers conditions tailored to your profile as a foreigner.',
          includes: [
            'Mortgage advisory',
            'Financial planning',
            'Tax optimisation',
            'Liaison with banking institutions',
            'Certified translation of banking documents',
          ],
          notIncludes: [
            'Loan approval guarantee',
            'Banking and administration fees',
          ],
          price: 'From €400 (file review)',
          duration: '4 to 12 weeks depending on the type of financing',
          quiz: [
            {
              question: 'What type of project are you looking to finance?',
              options: [
                { text: "I don't know yet", points: 0 },
                { text: 'Real estate purchase', points: 2 },
                { text: 'Company creation or development', points: 2 },
                { text: 'Personal financing or other project', points: 1 },
              ],
            },
            {
              question: 'What amount are you looking to finance?',
              options: [
                { text: 'Less than €20,000', points: 0 },
                { text: 'Between €20,000 and €100,000', points: 1 },
                { text: 'More than €100,000', points: 2 },
              ],
            },
            {
              question: 'Do you have provable income in Italy or abroad?',
              options: [
                { text: 'No', points: 0 },
                { text: 'Yes, income abroad', points: 1 },
                { text: 'Yes, income in Italy or mixed', points: 2 },
              ],
            },
            {
              question: 'Have you previously been refused financing?',
              options: [
                { text: 'Yes, several recent refusals', points: 0 },
                { text: 'No, first application', points: 2 },
                { text: 'Yes, one refusal but situation has improved', points: 1 },
              ],
            },
          ],
        },
      },
      {
        icon: '🔍',
        t: 'Certified Professionals Search',
        d: 'Connection with surveyors, architects, engineers, specialist doctors, lawyers, accountants and all certified professionals in Italy.',
        slug: 'professionnels',
        details: {
          hero: 'Find the right certified professional in Italy — we select and verify every expert for you.',
          whatIs: 'Our professional matching service connects you with the best certified Italian experts across all fields: surveyors, architects, engineers for your real estate and construction projects, specialist doctors, lawyers, accountants and chartered accountants. Every professional is verified, assessed and recommended based on their expertise and ability to work with foreign clients.',
          includes: [
            'Lawyer selection',
            'Accountants and tax advisors',
            'Architects and engineers',
            'Doctors and specialists',
            'Notaries',
            'Reference verification and coordination',
          ],
          notIncludes: [
            'Professional fees',
            'Travel for assignments outside Italy',
          ],
          price: 'From €200 (matching fee)',
          duration: '48h to 2 weeks depending on the specialty',
          quiz: [
            {
              question: 'What type of professional are you looking for?',
              options: [
                { text: "I don't know yet", points: 0 },
                { text: 'Surveyor, architect or engineer', points: 2 },
                { text: 'Specialist doctor', points: 2 },
                { text: 'Lawyer, accountant or financial expert', points: 2 },
              ],
            },
            {
              question: 'What type of assignment?',
              options: [
                { text: 'One-off assignment (quote, consultation)', points: 2 },
                { text: 'Multi-month project follow-up', points: 2 },
                { text: 'Just gathering information', points: 0 },
              ],
            },
            {
              question: 'Must the professional speak your language?',
              options: [
                { text: 'No, Italian is fine', points: 0 },
                { text: 'Preferred but not mandatory', points: 1 },
                { text: 'Yes, essential', points: 2 },
              ],
            },
            {
              question: 'Do you have an intervention deadline?',
              options: [
                { text: 'No specific deadline', points: 0 },
                { text: 'Within the month', points: 1 },
                { text: 'Urgent — within 2 weeks', points: 2 },
              ],
            },
          ],
        },
      },
      {
        icon: '💎',
        t: 'Silver Economy Support',
        d: 'Assisted relocation for seniors, long-term planning, healthcare and insurance support, real estate management and lifestyle integration in Italy.',
        slug: 'silver-economy',
        details: {
          hero: 'A comprehensive support service designed for seniors who wish to live, settle or receive care in Italy with complete peace of mind.',
          whatIs: 'Our Silver Economy service is specifically designed for seniors who wish to settle, relocate or spend their retirement in Italy. We coordinate every aspect of their project: assisted relocation, healthcare and insurance support, real estate management and lifestyle integration. Families can delegate the entire process to us with full confidence, benefiting from continuous personalised follow-up.',
          includes: [
            'Assisted senior relocation to Italy',
            'Long-term planning and personalised support',
            'Healthcare and insurance coordination',
            'Real estate and property management',
            'Lifestyle and social integration in Italy',
            'Continuous personalised follow-up',
          ],
          notIncludes: [
            'Medical and care costs (patient\'s responsibility)',
            'Purchase or rental of property (separate service)',
          ],
          price: 'From €600 (initial assessment)',
          duration: '4 to 16 weeks depending on project scope',
          quiz: [
            {
              question: 'Who is this service for?',
              options: [
                { text: 'For myself (senior)', points: 2 },
                { text: 'For a parent or close family member', points: 2 },
                { text: 'I am gathering information', points: 0 },
              ],
            },
            {
              question: 'What is the main objective?',
              options: [
                { text: 'Settle permanently in Italy', points: 2 },
                { text: 'Seasonal or extended stays', points: 1 },
                { text: 'Medical care and wellness in Italy', points: 2 },
              ],
            },
            {
              question: 'Are there specific healthcare needs?',
              options: [
                { text: 'No, fully independent', points: 1 },
                { text: 'Light assistance required', points: 2 },
                { text: 'Regular or specialist medical care', points: 2 },
              ],
            },
            {
              question: 'Do you have a planned timeline?',
              options: [
                { text: 'Not yet decided', points: 0 },
                { text: 'Within 6 to 12 months', points: 1 },
                { text: 'Within the next 3 months', points: 2 },
              ],
            },
          ],
        },
      },
      {
        icon: '🏘️',
        t: 'Property Care & Home Assistance',
        d: 'Complete management of your property in Italy: insurance, maintenance, tradespeople, security, pool, roof, garden and emergency assistance.',
        slug: 'property-care',
        details: {
          hero: 'Keep your property in Italy in perfect condition — we manage everything even when you are not there.',
          whatIs: 'Our Property Care service ensures the complete maintenance and management of your property in Italy. We coordinate all tradespeople and service providers, carry out regular inspections and handle any emergency on your behalf. Whether you own a city apartment or a country house, our team ensures your property is always protected, maintained and ready for your arrival.',
          includes: [
            'Home insurance activation and management',
            'Gardener search and coordination',
            'Regular and deep cleaning services',
            'Boiler and utilities maintenance',
            'Air conditioning installation and maintenance',
            'Alarm and security system installation',
            'Plumbing installation and maintenance',
            'Swimming pool maintenance',
            'Roof inspection and maintenance',
            'Routine and emergency maintenance works',
            'Supplier and tradesperson management',
            'Regular property inspections',
            'Emergency assistance and rapid intervention',
          ],
          notIncludes: [
            'Cost of materials and spare parts (billed at cost)',
            'Major structural renovation works',
          ],
          price: 'From €300 / month or per service',
          duration: 'Ongoing or one-time service as needed',
          quiz: [
            {
              question: 'What type of property do you own?',
              options: [
                { text: 'Apartment in a city', points: 1 },
                { text: 'Villa or house with garden', points: 2 },
                { text: 'Rural property or farmhouse', points: 2 },
              ],
            },
            {
              question: 'How often are you present at the property?',
              options: [
                { text: 'I live there permanently', points: 0 },
                { text: 'Several times a year', points: 1 },
                { text: 'Rarely or never', points: 2 },
              ],
            },
            {
              question: 'What services do you need?',
              options: [
                { text: 'A specific one-time service', points: 1 },
                { text: 'Regular maintenance package', points: 2 },
                { text: 'Full property management', points: 2 },
              ],
            },
            {
              question: 'Do you have an urgent need?',
              options: [
                { text: 'No, planning ahead', points: 0 },
                { text: 'Within the next month', points: 1 },
                { text: 'Yes, urgent intervention needed', points: 2 },
              ],
            },
          ],
        },
      },
      {
        icon: '🌿',
        t: 'Medical & Thermal Wellness 360°',
        d: 'Selection of thermal spas and medical wellness centres, therapeutic stays, physiotherapy, rehabilitation and personalised wellness programmes in Italy.',
        slug: 'thermal-wellness',
        details: {
          hero: 'Restore your health and wellbeing in Italy\'s finest thermal and medical wellness centres — fully organised for you.',
          whatIs: 'Our Thermal Wellness service gives you access to the best thermal spas, medical wellness centres and rehabilitation facilities in Italy. We design personalised therapeutic programmes combining traditional treatments (mud therapy, balneotherapy, hydrotherapy) with modern medical wellness approaches. From selecting the right centre to full logistical support throughout your stay, we handle everything.',
          includes: [
            'Research and selection of qualified medical spas and thermal centres',
            'Organisation of personalised therapeutic stays',
            'Access to physiotherapy and rehabilitation programmes',
            'Medical wellness programmes for prevention and recovery',
            'Selection of thermal hotels and specialist resorts',
            'Booking of treatment packages (mud therapy, balneotherapy, hydrotherapy)',
            'Coordination with thermal doctors and wellness specialists',
            'Complete logistical support for the stay',
            'Guidance in choosing the most suitable programmes',
          ],
          notIncludes: [
            'Treatment and accommodation costs (billed at actual cost)',
            'Medical prescriptions and personal medication',
          ],
          price: 'From €400 (programme coordination)',
          duration: '3 to 21 days depending on the programme',
          quiz: [
            {
              question: 'What is your main objective?',
              options: [
                { text: 'Relaxation and general wellbeing', points: 1 },
                { text: 'Medical treatment or rehabilitation', points: 2 },
                { text: 'Prevention and health maintenance', points: 2 },
              ],
            },
            {
              question: 'Do you have a specific medical condition?',
              options: [
                { text: 'No, general wellness', points: 1 },
                { text: 'Joint, respiratory or skin condition', points: 2 },
                { text: 'Post-surgical or post-trauma rehabilitation', points: 2 },
              ],
            },
            {
              question: 'What duration do you have in mind?',
              options: [
                { text: 'A weekend (2-3 days)', points: 0 },
                { text: 'A week', points: 1 },
                { text: '2 to 3 weeks (full programme)', points: 2 },
              ],
            },
            {
              question: 'Do you need a doctor\'s referral?',
              options: [
                { text: 'No, it\'s for personal wellness', points: 1 },
                { text: 'Yes, I have a medical recommendation', points: 2 },
                { text: 'I\'m not sure', points: 0 },
              ],
            },
          ],
        },
      },
      {
        icon: '✈️',
        t: 'Private Aviation & Travel Concierge',
        d: 'Private jet and helicopter booking, certified operators, complex itinerary coordination, VIP assistance and luxury hospitality integration.',
        slug: 'aviation-privee',
        details: {
          hero: 'Travel to Italy in absolute comfort and discretion — we handle every detail of your private aviation experience.',
          whatIs: 'Our Private Aviation service offers a complete solution for all your air travel needs in and around Italy. We select certified private aviation operators, coordinate your flights, ground transfers and full travel itinerary. Whether for an urgent business trip, a luxury leisure journey or a complex multi-destination itinerary, our team ensures seamless execution with total discretion and a VIP standard of service.',
          includes: [
            'Private jet and helicopter booking',
            'Selection of certified private aviation operators',
            'Door-to-airport transfer coordination',
            'Complex multi-destination itinerary management',
            'Logistical assistance for urgent or last-minute travel',
            'Dedicated VIP support with complete discretion',
            'Integration with concierge and luxury hospitality services',
          ],
          notIncludes: [
            'Flight costs and operator fees (billed at actual cost)',
            'Passport and visa formalities (separate service)',
          ],
          price: 'From €500 (booking coordination fee)',
          duration: '24h to 72h booking lead time',
          quiz: [
            {
              question: 'What type of flight are you looking for?',
              options: [
                { text: 'Commercial first class (I don\'t need private)', points: 0 },
                { text: 'Private jet for a group', points: 2 },
                { text: 'Helicopter transfer', points: 2 },
              ],
            },
            {
              question: 'How soon do you need to travel?',
              options: [
                { text: 'Just gathering information', points: 0 },
                { text: 'Within 2 to 4 weeks', points: 1 },
                { text: 'Urgent — within 72 hours', points: 2 },
              ],
            },
            {
              question: 'What is the nature of your trip?',
              options: [
                { text: 'Leisure or vacation', points: 1 },
                { text: 'Business or corporate travel', points: 2 },
                { text: 'Medical or urgent travel', points: 2 },
              ],
            },
            {
              question: 'Do you need additional concierge services?',
              options: [
                { text: 'No, just the flight', points: 1 },
                { text: 'Yes, hotel and ground transport', points: 2 },
                { text: 'Yes, full VIP experience', points: 2 },
              ],
            },
          ],
        },
      },
    ],
  },
  process: {
    label: 'Our approach',
    h1: 'How does',
    h2: 'it work?',
    sub: 'A clear, transparent process centered on you — from first contact to complete project realization.',
    steps: [
      { icon: '💬', t: 'Free Consultation', d: 'Share your project during a free video call. We analyze your needs in depth.' },
      { icon: '🎯', t: 'Personalized Plan', d: 'Custom action plan with schedule, estimated budget and dedicated contacts for your file.' },
      { icon: '🤝', t: 'Project Launch', d: 'Service contract, access to your client area and assignment of your dedicated personal advisor.' },
      { icon: '📊', t: 'Real-time Tracking', d: 'Dedicated dashboard: every step visible, every document available, every decision validated together.' },
      { icon: '✅', t: 'Completion & Beyond', d: 'Project completed with post-service follow-up included in every ITALYCARE 360 package.' },
    ],
  },
  nums: [
    { n: 500, suffix: '+', l: "Clients assisted\nsuccessfully" },
    { n: 20, suffix: '+', l: "Client countries\nof origin" },
    { n: 98, suffix: '%', l: "Client satisfaction\nrate" },
    { n: 48, suffix: 'h', l: "Guaranteed\nresponse time" },
  ],
  testi: {
    label: 'What they say',
    h1: 'They trusted',
    h2: 'us',
    items: [
      { text: "ITALYCARE managed my entire real estate purchase in Florence. From the search to signing at the notary, everything was perfectly coordinated. I couldn't have done it without them.", name: 'Sophie Marchand', meta: 'Buyer — Paris, France', flag: '🇫🇷', bg: '#e8f5ee' },
      { text: "My son studies at the University of Milan thanks to ITALYCARE 360. Visa, housing, enrollment — all handled in 3 weeks. Impeccable service and a truly attentive team.", name: 'Ahmed Benzara', meta: 'Parent — Algiers, Algeria', flag: '🇩🇿', bg: '#fef9e7' },
      { text: "I needed specialized medical follow-up in Italy. ITALYCARE organized the appointments, the interpreter, the transport. A level of service I didn't expect. I recommend without hesitation.", name: 'Khalid Al-Rashidi', meta: 'Patient — Riyadh, Saudi Arabia', flag: '🇸🇦', bg: '#fdf0f0' },
    ],
  },
  cta: {
    label: 'Start today',
    h1: 'Your project',
    h2: 'in Italy',
    h3: 'starts here.',
    desc: 'Free 30-minute consultation with an ITALYCARE expert. Tell us about your project, we will offer a tailored solution, with no commitment.',
    btn1: 'Book appointment — Free →',
    btn2: 'View all services',
  },
  bar: [
    { icon: '📧', text: 'info@italycare360.com' },
    { icon: '📱', text: '+39 351 750 1164' },
    { icon: '📍', text: 'Milan · Rome · Florence' },
    { icon: '💬', text: 'WhatsApp · +39 351 750 1164' },
  ],
  footer: {
    desc: 'Your trusted partner for all your projects in Italy. One contact, total expertise, a human approach.',
    cols: [
      { title: 'Services', links: ['Real Estate', 'Renovation', 'Medical Care', 'Export Italy', 'Student Visa', 'Legal', 'Concierge', 'Admin'] },
      { title: 'Company', links: ['About', 'Our Team', 'Partners', 'Testimonials', 'Blog & Guides', 'Careers'] },
      { title: 'Contact', links: ['Free Consultation', 'WhatsApp', 'Client Area', 'FAQ', 'Legal Notice', 'T&C / GDPR'] },
    ],
    copy: '© 2025 ITALYCARE 360 — All rights reserved',
    tagline: 'Made with ♥ for Italy lovers',
  },
  form: {
    title: 'Book an appointment',
    subtitle: 'Free consultation · 30 minutes',
    name: 'Full name',
    email: 'Email address',
    phone: 'Phone (with country code)',
    service: 'Desired service',
    serviceOpts: ['Real Estate & Investment', 'Renovation & Works', 'Medical Care 360°', 'Export Made in Italy', 'Student Visa', 'Legal Assistance', 'Premium Concierge', 'Administrative Services', 'Other'],
    date: 'Preferred date',
    time: 'Time slot',
    timeSelect: '— Choose a time slot —',
    weekendError: 'Weekends are not available. Please choose a weekday.',
    availability: 'Mon – Thu: 9:00am – 4:30pm  ·  Fri: 9:00am – 2:30pm',
    message: 'Describe your project',
    submit: 'Send my request →',
    sending: 'Sending...',
    success: 'Request sent!',
    successMsg: 'We will contact you within 48h to confirm your appointment.',
    error: 'Error',
    errorMsg: 'An error occurred. Please try again or contact us directly.',
    close: 'Close',
  },
  serviceDetail: {
    backBtn: '← Back to services',
    eligibilityTitle: 'Are you eligible?',
    eligibilitySubtitle: 'Answer 4 questions to find out if this service matches your situation',
    startBtn: 'Start the quiz →',
    nextBtn: 'Next question →',
    prevBtn: '← Previous',
    resultTitle: 'Your eligibility result',
    eligible: '✅ You are eligible',
    partial: '⚠️ Partially eligible',
    notEligible: '❌ Service not suitable',
    eligibleMsg: 'Excellent! This service is a perfect match for your situation. Schedule a free 30-minute consultation.',
    partialMsg: 'This service may suit you with some adjustments. Our experts can analyze your situation in detail during a free consultation.',
    notEligibleMsg: "This service seems not well-suited for your current situation. But don't give up — contact us and we'll find an alternative solution.",
    rdvBtn: 'Book free consultation →',
    retryBtn: 'Retake the quiz',
    question: 'Question',
    of: 'of',
    included: '✅ Included in this service',
    notIncluded: '❌ Not included',
    price: 'Estimated budget',
    duration: 'Estimated duration',
    contact: 'A question? Contact us',
  },
  gallery: {
    label: 'Italy in pictures',
    h1: 'The most beautiful',
    h2: 'destinations',
    photos: [
      { label: 'Florence' },
      { label: 'Rome' },
      { label: 'Amalfi Coast' },
      { label: 'Venice' },
      { label: 'Tuscany' },
      { label: 'Milan' },
    ],
  },
  video: {
    label: 'Discover Italy',
    h1: 'Italy is',
    h2: 'waiting for you',
    p: 'From Tuscany to Sicily, discover why thousands of expats choose Italy to live, invest and thrive.',
  },
  team: {
    label: 'Our Team',
    h1: 'The experts who',
    h2: 'support you',
    desc: 'An international team of specialists — lawyers, real estate experts, visa advisors and engineers — entirely dedicated to your success in Italy.',
    badge: 'ITALYCARE 360',
    emailBtn: 'Send an email',
    readMore: 'Read more →',
    readLess: '← Read less',
  },
}
