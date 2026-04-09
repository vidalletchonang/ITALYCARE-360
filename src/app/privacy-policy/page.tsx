'use client'

import { useLang } from '@/context/LangContext'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const T = {
  title: {
    fr: 'Politique de Confidentialit\u00e9',
    en: 'Privacy Policy',
    it: 'Informativa sulla Privacy',
    ar: '\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629',
    ru: '\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438',
  },
  updated: {
    fr: 'Derni\u00e8re mise \u00e0 jour : 8 avril 2026',
    en: 'Last updated: April 8, 2026',
    it: 'Ultimo aggiornamento: 8 aprile 2026',
    ar: '\u0622\u062e\u0631 \u062a\u062d\u062f\u064a\u062b: 8 \u0623\u0628\u0631\u064a\u0644 2026',
    ru: '\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435: 8 \u0430\u043f\u0440\u0435\u043b\u044f 2026',
  },
  sections: {
    fr: [
      {
        h: 'Introduction',
        p: "ITALYCARE 360 (\"nous\", \"notre\") s'engage \u00e0 prot\u00e9ger votre vie priv\u00e9e. Cette politique d\u00e9crit comment nous collectons, utilisons et prot\u00e9geons vos donn\u00e9es personnelles conform\u00e9ment au R\u00e8glement G\u00e9n\u00e9ral sur la Protection des Donn\u00e9es (RGPD) et \u00e0 la l\u00e9gislation italienne en vigueur.",
      },
      {
        h: 'Responsable du traitement',
        p: "ITALYCARE 360\nVia Corso del Popolo 222, 45100 Rovigo, Italie\nE-mail : info@italycare360.com\nT\u00e9l\u00e9phone : +39 351 750 1164",
      },
      {
        h: 'Donn\u00e9es collect\u00e9es',
        p: "Nous collectons les donn\u00e9es suivantes :\n\u2022 Donn\u00e9es d'identification : nom, pr\u00e9nom, adresse e-mail, num\u00e9ro de t\u00e9l\u00e9phone\n\u2022 Donn\u00e9es de navigation : adresse IP, type de navigateur, pages visit\u00e9es, dur\u00e9e de visite\n\u2022 Donn\u00e9es de formulaire : informations fournies lors d'une demande de rendez-vous ou d'un devis\n\u2022 Donn\u00e9es analytiques : via Google Analytics 4 (donn\u00e9es anonymis\u00e9es)",
      },
      {
        h: 'Finalit\u00e9s du traitement',
        p: "Vos donn\u00e9es sont utilis\u00e9es pour :\n\u2022 R\u00e9pondre \u00e0 vos demandes de contact et de rendez-vous\n\u2022 Fournir nos services d'accompagnement en Italie\n\u2022 Am\u00e9liorer notre site web et votre exp\u00e9rience utilisateur\n\u2022 Envoyer des communications li\u00e9es \u00e0 nos services (avec votre consentement)\n\u2022 Respecter nos obligations l\u00e9gales",
      },
      {
        h: 'Base juridique',
        p: "Le traitement de vos donn\u00e9es repose sur :\n\u2022 Votre consentement (formulaires de contact, newsletter)\n\u2022 L'ex\u00e9cution d'un contrat (fourniture de services)\n\u2022 Notre int\u00e9r\u00eat l\u00e9gitime (am\u00e9lioration du site, s\u00e9curit\u00e9)\n\u2022 Obligations l\u00e9gales (conservation fiscale)",
      },
      {
        h: 'Cookies et technologies',
        p: "Notre site utilise :\n\u2022 Cookies essentiels : n\u00e9cessaires au fonctionnement du site (pr\u00e9f\u00e9rence de langue)\n\u2022 Cookies analytiques : Google Analytics 4 pour comprendre l'utilisation du site\n\u2022 Cookies tiers : int\u00e9gration Google Maps sur la page Contact\n\nVous pouvez g\u00e9rer vos pr\u00e9f\u00e9rences de cookies dans les param\u00e8tres de votre navigateur.",
      },
      {
        h: 'Partage des donn\u00e9es',
        p: "Nous ne vendons jamais vos donn\u00e9es. Elles peuvent \u00eatre partag\u00e9es avec :\n\u2022 Nos partenaires de services (avocats, agents immobiliers, m\u00e9decins) dans le cadre de votre projet\n\u2022 Google (Analytics, Maps) pour l'analyse du site\n\u2022 Les autorit\u00e9s comp\u00e9tentes en cas d'obligation l\u00e9gale",
      },
      {
        h: 'Dur\u00e9e de conservation',
        p: "Vos donn\u00e9es sont conserv\u00e9es pendant :\n\u2022 Donn\u00e9es de contact : 3 ans apr\u00e8s le dernier contact\n\u2022 Donn\u00e9es contractuelles : 10 ans (obligation fiscale italienne)\n\u2022 Donn\u00e9es analytiques : 14 mois (Google Analytics)",
      },
      {
        h: 'Vos droits (RGPD)',
        p: "Vous disposez des droits suivants :\n\u2022 Droit d'acc\u00e8s \u00e0 vos donn\u00e9es\n\u2022 Droit de rectification\n\u2022 Droit \u00e0 l'effacement (\"droit \u00e0 l'oubli\")\n\u2022 Droit \u00e0 la limitation du traitement\n\u2022 Droit \u00e0 la portabilit\u00e9\n\u2022 Droit d'opposition\n\nPour exercer vos droits, contactez-nous \u00e0 : info@italycare360.com",
      },
      {
        h: 'S\u00e9curit\u00e9',
        p: "Nous mettons en \u0153uvre des mesures techniques et organisationnelles pour prot\u00e9ger vos donn\u00e9es : chiffrement SSL/TLS, acc\u00e8s restreint, sauvegardes r\u00e9guli\u00e8res.",
      },
      {
        h: 'Contact',
        p: "Pour toute question relative \u00e0 cette politique :\n\nITALYCARE 360\nVia Corso del Popolo 222, 45100 Rovigo, Italie\ninfo@italycare360.com\n+39 351 750 1164",
      },
    ],
    en: [
      {
        h: 'Introduction',
        p: 'ITALYCARE 360 ("we", "our") is committed to protecting your privacy. This policy describes how we collect, use and protect your personal data in accordance with the General Data Protection Regulation (GDPR) and applicable Italian law.',
      },
      {
        h: 'Data Controller',
        p: 'ITALYCARE 360\nVia Corso del Popolo 222, 45100 Rovigo, Italy\nEmail: info@italycare360.com\nPhone: +39 351 750 1164',
      },
      {
        h: 'Data Collected',
        p: 'We collect the following data:\n\u2022 Identification data: name, email address, phone number\n\u2022 Browsing data: IP address, browser type, pages visited, visit duration\n\u2022 Form data: information provided when requesting an appointment or quote\n\u2022 Analytics data: via Google Analytics 4 (anonymized)',
      },
      {
        h: 'Purpose of Processing',
        p: 'Your data is used to:\n\u2022 Respond to your contact and appointment requests\n\u2022 Provide our support services in Italy\n\u2022 Improve our website and your user experience\n\u2022 Send service-related communications (with your consent)\n\u2022 Comply with our legal obligations',
      },
      {
        h: 'Legal Basis',
        p: 'Data processing is based on:\n\u2022 Your consent (contact forms, newsletter)\n\u2022 Performance of a contract (service delivery)\n\u2022 Our legitimate interest (site improvement, security)\n\u2022 Legal obligations (tax record keeping)',
      },
      {
        h: 'Cookies & Technologies',
        p: 'Our site uses:\n\u2022 Essential cookies: required for site operation (language preference)\n\u2022 Analytics cookies: Google Analytics 4 to understand site usage\n\u2022 Third-party cookies: Google Maps integration on the Contact page\n\nYou can manage your cookie preferences in your browser settings.',
      },
      {
        h: 'Data Sharing',
        p: 'We never sell your data. It may be shared with:\n\u2022 Our service partners (lawyers, real estate agents, doctors) as part of your project\n\u2022 Google (Analytics, Maps) for site analysis\n\u2022 Competent authorities when required by law',
      },
      {
        h: 'Data Retention',
        p: 'Your data is retained for:\n\u2022 Contact data: 3 years after last contact\n\u2022 Contractual data: 10 years (Italian tax obligation)\n\u2022 Analytics data: 14 months (Google Analytics)',
      },
      {
        h: 'Your Rights (GDPR)',
        p: 'You have the following rights:\n\u2022 Right of access to your data\n\u2022 Right to rectification\n\u2022 Right to erasure ("right to be forgotten")\n\u2022 Right to restrict processing\n\u2022 Right to data portability\n\u2022 Right to object\n\nTo exercise your rights, contact us at: info@italycare360.com',
      },
      {
        h: 'Security',
        p: 'We implement technical and organizational measures to protect your data: SSL/TLS encryption, restricted access, regular backups.',
      },
      {
        h: 'Contact',
        p: 'For any questions about this policy:\n\nITALYCARE 360\nVia Corso del Popolo 222, 45100 Rovigo, Italy\ninfo@italycare360.com\n+39 351 750 1164',
      },
    ],
    it: [
      {
        h: 'Introduzione',
        p: 'ITALYCARE 360 ("noi", "nostro") si impegna a proteggere la vostra privacy. Questa informativa descrive come raccogliamo, utilizziamo e proteggiamo i vostri dati personali in conformit\u00e0 al Regolamento Generale sulla Protezione dei Dati (GDPR) e alla legislazione italiana vigente.',
      },
      {
        h: 'Titolare del trattamento',
        p: 'ITALYCARE 360\nVia Corso del Popolo 222, 45100 Rovigo, Italia\nEmail: info@italycare360.com\nTelefono: +39 351 750 1164',
      },
      {
        h: 'Dati raccolti',
        p: "I dati che raccogliamo:\n\u2022 Dati identificativi: nome, cognome, indirizzo email, numero di telefono\n\u2022 Dati di navigazione: indirizzo IP, tipo di browser, pagine visitate, durata della visita\n\u2022 Dati dei moduli: informazioni fornite durante una richiesta di appuntamento o preventivo\n\u2022 Dati analitici: tramite Google Analytics 4 (dati anonimizzati)",
      },
      {
        h: 'Finalit\u00e0 del trattamento',
        p: "I vostri dati vengono utilizzati per:\n\u2022 Rispondere alle vostre richieste di contatto e appuntamento\n\u2022 Fornire i nostri servizi di assistenza in Italia\n\u2022 Migliorare il nostro sito web e la vostra esperienza utente\n\u2022 Inviare comunicazioni relative ai nostri servizi (con il vostro consenso)\n\u2022 Adempiere ai nostri obblighi legali",
      },
      {
        h: 'Base giuridica',
        p: 'Il trattamento dei dati si basa su:\n\u2022 Il vostro consenso (moduli di contatto, newsletter)\n\u2022 Esecuzione di un contratto (fornitura di servizi)\n\u2022 Nostro legittimo interesse (miglioramento del sito, sicurezza)\n\u2022 Obblighi legali (conservazione fiscale)',
      },
      {
        h: 'Cookie e tecnologie',
        p: "Il nostro sito utilizza:\n\u2022 Cookie essenziali: necessari per il funzionamento del sito (preferenza lingua)\n\u2022 Cookie analitici: Google Analytics 4 per comprendere l'utilizzo del sito\n\u2022 Cookie di terze parti: integrazione Google Maps nella pagina Contatti\n\nPotete gestire le vostre preferenze sui cookie nelle impostazioni del browser.",
      },
      {
        h: 'Condivisione dei dati',
        p: 'Non vendiamo mai i vostri dati. Possono essere condivisi con:\n\u2022 I nostri partner di servizio (avvocati, agenti immobiliari, medici) nell\'ambito del vostro progetto\n\u2022 Google (Analytics, Maps) per l\'analisi del sito\n\u2022 Le autorit\u00e0 competenti in caso di obbligo legale',
      },
      {
        h: 'Durata di conservazione',
        p: 'I vostri dati vengono conservati per:\n\u2022 Dati di contatto: 3 anni dall\'ultimo contatto\n\u2022 Dati contrattuali: 10 anni (obbligo fiscale italiano)\n\u2022 Dati analitici: 14 mesi (Google Analytics)',
      },
      {
        h: 'I vostri diritti (GDPR)',
        p: "Avete i seguenti diritti:\n\u2022 Diritto di accesso ai vostri dati\n\u2022 Diritto di rettifica\n\u2022 Diritto alla cancellazione (\"diritto all'oblio\")\n\u2022 Diritto alla limitazione del trattamento\n\u2022 Diritto alla portabilit\u00e0 dei dati\n\u2022 Diritto di opposizione\n\nPer esercitare i vostri diritti, contattateci a: info@italycare360.com",
      },
      {
        h: 'Sicurezza',
        p: 'Implementiamo misure tecniche e organizzative per proteggere i vostri dati: crittografia SSL/TLS, accesso limitato, backup regolari.',
      },
      {
        h: 'Contatto',
        p: 'Per qualsiasi domanda relativa a questa informativa:\n\nITALYCARE 360\nVia Corso del Popolo 222, 45100 Rovigo, Italia\ninfo@italycare360.com\n+39 351 750 1164',
      },
    ],
    ar: [
      { h: '\u0645\u0642\u062f\u0645\u0629', p: 'ITALYCARE 360 ("\u0646\u062d\u0646") \u0645\u0644\u062a\u0632\u0645\u0629 \u0628\u062d\u0645\u0627\u064a\u0629 \u062e\u0635\u0648\u0635\u064a\u062a\u0643\u0645. \u062a\u0648\u0636\u062d \u0647\u0630\u0647 \u0627\u0644\u0633\u064a\u0627\u0633\u0629 \u0643\u064a\u0641 \u0646\u062c\u0645\u0639 \u0648\u0646\u0633\u062a\u062e\u062f\u0645 \u0648\u0646\u062d\u0645\u064a \u0628\u064a\u0627\u0646\u0627\u062a\u0643\u0645 \u0627\u0644\u0634\u062e\u0635\u064a\u0629 \u0648\u0641\u0642\u064b\u0627 \u0644\u0644\u0627\u0626\u062d\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0644\u062d\u0645\u0627\u064a\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a (GDPR) \u0648\u0627\u0644\u0642\u0627\u0646\u0648\u0646 \u0627\u0644\u0625\u064a\u0637\u0627\u0644\u064a.' },
      { h: '\u0627\u0644\u0645\u0633\u0624\u0648\u0644 \u0639\u0646 \u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629', p: 'ITALYCARE 360\nVia Corso del Popolo 222, 45100 Rovigo, \u0625\u064a\u0637\u0627\u0644\u064a\u0627\ninfo@italycare360.com\n+39 351 750 1164' },
      { h: '\u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0629', p: '\u0646\u062c\u0645\u0639 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0627\u0644\u064a\u0629:\n\u2022 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0639\u0631\u064a\u0641: \u0627\u0644\u0627\u0633\u0645\u060c \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u060c \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641\n\u2022 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0635\u0641\u062d: \u0639\u0646\u0648\u0627\u0646 IP\u060c \u0646\u0648\u0639 \u0627\u0644\u0645\u062a\u0635\u0641\u062d\u060c \u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0627\u0644\u062a\u064a \u062a\u0645\u062a \u0632\u064a\u0627\u0631\u062a\u0647\u0627\n\u2022 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0646\u0645\u0627\u0630\u062c: \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u0642\u062f\u0645\u0629 \u0639\u0646\u062f \u0637\u0644\u0628 \u0645\u0648\u0639\u062f\n\u2022 \u0628\u064a\u0627\u0646\u0627\u062a \u062a\u062d\u0644\u064a\u0644\u064a\u0629: \u0639\u0628\u0631 Google Analytics 4' },
      { h: '\u0623\u063a\u0631\u0627\u0636 \u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629', p: '\u062a\u064f\u0633\u062a\u062e\u062f\u0645 \u0628\u064a\u0627\u0646\u0627\u062a\u0643\u0645 \u0644\u0640:\n\u2022 \u0627\u0644\u0631\u062f \u0639\u0644\u0649 \u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0648\u0627\u0644\u0645\u0648\u0627\u0639\u064a\u062f\n\u2022 \u062a\u0642\u062f\u064a\u0645 \u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0645\u0631\u0627\u0641\u0642\u0629 \u0641\u064a \u0625\u064a\u0637\u0627\u0644\u064a\u0627\n\u2022 \u062a\u062d\u0633\u064a\u0646 \u0645\u0648\u0642\u0639\u0646\u0627 \u0648\u062a\u062c\u0631\u0628\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\n\u2022 \u0627\u0644\u0627\u0645\u062a\u062b\u0627\u0644 \u0644\u0644\u0627\u0644\u062a\u0632\u0627\u0645\u0627\u062a \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064a\u0629' },
      { h: '\u0645\u0644\u0641\u0627\u062a \u062a\u0639\u0631\u064a\u0641 \u0627\u0644\u0627\u0631\u062a\u0628\u0627\u0637', p: '\u064a\u0633\u062a\u062e\u062f\u0645 \u0645\u0648\u0642\u0639\u0646\u0627 \u0645\u0644\u0641\u0627\u062a \u062a\u0639\u0631\u064a\u0641 \u0627\u0644\u0627\u0631\u062a\u0628\u0627\u0637 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629 \u0648\u0645\u0644\u0641\u0627\u062a Google Analytics 4 \u0648Google Maps. \u064a\u0645\u0643\u0646\u0643\u0645 \u0625\u062f\u0627\u0631\u0629 \u062a\u0641\u0636\u064a\u0644\u0627\u062a\u0643\u0645 \u0645\u0646 \u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u062a\u0635\u0641\u062d.' },
      { h: '\u062d\u0642\u0648\u0642\u0643\u0645 (GDPR)', p: '\u0644\u062f\u064a\u0643\u0645 \u0627\u0644\u062d\u0642 \u0641\u064a \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0628\u064a\u0627\u0646\u0627\u062a\u0643\u0645\u060c \u062a\u0635\u062d\u064a\u062d\u0647\u0627\u060c \u062d\u0630\u0641\u0647\u0627\u060c \u062a\u0642\u064a\u064a\u062f \u0645\u0639\u0627\u0644\u062c\u062a\u0647\u0627\u060c \u0646\u0642\u0644\u0647\u0627 \u0648\u0627\u0644\u0627\u0639\u062a\u0631\u0627\u0636 \u0639\u0644\u064a\u0647\u0627.\n\n\u0644\u0645\u0645\u0627\u0631\u0633\u0629 \u062d\u0642\u0648\u0642\u0643\u0645: info@italycare360.com' },
      { h: '\u0627\u0644\u0627\u062a\u0635\u0627\u0644', p: 'ITALYCARE 360\nVia Corso del Popolo 222, 45100 Rovigo, \u0625\u064a\u0637\u0627\u0644\u064a\u0627\ninfo@italycare360.com\n+39 351 750 1164' },
    ],
    ru: [
      { h: '\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435', p: 'ITALYCARE 360 (\"\u043c\u044b\") \u0441\u0442\u0440\u0435\u043c\u0438\u0442\u0441\u044f \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c \u0432\u0430\u0448\u0443 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c. \u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0430\u044f \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442, \u043a\u0430\u043a \u043c\u044b \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0438 \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u043c \u0432\u0430\u0448\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 GDPR \u0438 \u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u0438\u043c \u0437\u0430\u043a\u043e\u043d\u043e\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e\u043c.' },
      { h: '\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u0451\u0440 \u0434\u0430\u043d\u043d\u044b\u0445', p: 'ITALYCARE 360\nVia Corso del Popolo 222, 45100 Rovigo, \u0418\u0442\u0430\u043b\u0438\u044f\ninfo@italycare360.com\n+39 351 750 1164' },
      { h: '\u0421\u043e\u0431\u0438\u0440\u0430\u0435\u043c\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435', p: '\u041c\u044b \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c:\n\u2022 \u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435: \u0438\u043c\u044f, email, \u0442\u0435\u043b\u0435\u0444\u043e\u043d\n\u2022 \u0414\u0430\u043d\u043d\u044b\u0435 \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438: IP, \u0431\u0440\u0430\u0443\u0437\u0435\u0440, \u043f\u043e\u0441\u0435\u0449\u0451\u043d\u043d\u044b\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b\n\u2022 \u0414\u0430\u043d\u043d\u044b\u0435 \u0444\u043e\u0440\u043c: \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u0440\u0438 \u0437\u0430\u043f\u0438\u0441\u0438 \u043d\u0430 \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044e\n\u2022 \u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430: Google Analytics 4' },
      { h: '\u0426\u0435\u043b\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438', p: '\u0412\u0430\u0448\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f:\n\u2022 \u041e\u0442\u0432\u0435\u0442\u043e\u0432 \u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u044b\n\u2022 \u041e\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u0443\u0441\u043b\u0443\u0433 \u0441\u043e\u043f\u0440\u043e\u0432\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0432 \u0418\u0442\u0430\u043b\u0438\u0438\n\u2022 \u0423\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u0441\u0430\u0439\u0442\u0430\n\u2022 \u0421\u043e\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432' },
      { h: 'Cookie', p: '\u041d\u0430\u0448 \u0441\u0430\u0439\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 cookie, Google Analytics 4 \u0438 Google Maps. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c\u0438 cookie \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435.' },
      { h: '\u0412\u0430\u0448\u0438 \u043f\u0440\u0430\u0432\u0430 (GDPR)', p: '\u0412\u044b \u0438\u043c\u0435\u0435\u0442\u0435 \u043f\u0440\u0430\u0432\u043e \u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f, \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435, \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435, \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438, \u043f\u0435\u0440\u0435\u043d\u043e\u0441 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0432\u043e\u0437\u0440\u0430\u0436\u0435\u043d\u0438\u0435.\n\n\u041a\u043e\u043d\u0442\u0430\u043a\u0442: info@italycare360.com' },
      { h: '\u041a\u043e\u043d\u0442\u0430\u043a\u0442', p: 'ITALYCARE 360\nVia Corso del Popolo 222, 45100 Rovigo, \u0418\u0442\u0430\u043b\u0438\u044f\ninfo@italycare360.com\n+39 351 750 1164' },
    ],
  } as Record<string, { h: string; p: string }[]>,
}

export default function PrivacyPolicy() {
  const { lang } = useLang()
  const l = lang || 'fr'
  const sections = T.sections[l] || T.sections.en

  return (
    <>
      <Nav onRdv={() => {}} />
      <main style={{ paddingTop: 100 }}>
        {/* Hero */}
        <section className="contact-hero">
          <div className="contact-hero-inner">
            <span className="contact-tag">ITALYCARE 360</span>
            <h1>{(T.title as Record<string, string>)[l]}</h1>
            <p style={{ marginTop: 8, opacity: 0.6, fontSize: 14 }}>
              {(T.updated as Record<string, string>)[l]}
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px 80px' }}>
          {sections.map((s, i) => (
            <div
              key={i}
              style={{
                marginBottom: 40,
                paddingBottom: i < sections.length - 1 ? 40 : 0,
                borderBottom: i < sections.length - 1 ? '1px solid #E8E4DD' : 'none',
              }}
            >
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 24,
                  fontWeight: 600,
                  color: '#141C2B',
                  marginBottom: 16,
                }}
              >
                {s.h}
              </h2>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: 16,
                  lineHeight: 1.9,
                  color: '#4a4f58',
                  whiteSpace: 'pre-line',
                }}
              >
                {s.p}
              </p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}
