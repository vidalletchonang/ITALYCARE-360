import type { Translation } from './types'

export const it: Translation = {
  nav: {
    services: 'Servizi',
    about: 'Chi siamo',
    process: 'Il processo',
    testi: 'Testimonianze',
    contact: 'Contatto',
    cta: 'Consulenza gratuita',
  },
  hero: {
    tag: 'Il tuo partner di fiducia in Italia',
    line1: "L'Italia,",
    line2: 'semplificata',
    line3: 'per te.',
    desc: "ITALYCARE 360 accompagna gli stranieri in tutti i loro progetti in Italia — immobiliare, salute, ristrutturazione, export, visto studente e molto altro. Un solo interlocutore, competenza totale.",
    btn1: 'Inizia il mio progetto →',
    btn2: 'Vedi i servizi ↓',
    scroll: 'Scorri',
  },
  marquee: ['Immobiliare', 'Assistenza Medica 360°', 'Ristrutturazione', 'Export Made in Italy', 'Visto Studente', 'Assistenza Legale', 'Concierge Premium', 'Pratiche Amministrative'],
  about: {
    label: 'Chi siamo',
    h1: 'Molto più di un servizio.',
    h2: 'Un partner di vita',
    h3: 'in Italia.',
    p1: "ITALYCARE 360 è nato da una semplice osservazione: gli stranieri che vogliono vivere, investire o studiare in Italia si scontrano con un labirinto amministrativo, linguistico e culturale.",
    p2: "Il nostro team di specialisti — avvocati, medici partner, agenti immobiliari, artigiani certificati — vi accompagna nella vostra lingua, con trasparenza ed eccellenza.",
    vals: [
      { icon: '🛡️', h: 'Fiducia totale', p: 'Partner verificati, contratti chiari, nessuna sorpresa nascosta.' },
      { icon: '⚡', h: 'Risposta 48h', p: 'Ogni richiesta riceve una risposta qualificata entro 48 ore.' },
      { icon: '🌍', h: 'Multilingue', p: 'FR, EN, AR, ES, IT — servizio nella tua lingua.' },
      { icon: '📊', h: 'Monitoraggio in tempo reale', p: 'Dashboard dedicata — ogni fase visibile in diretta.' },
    ],
  },
  services: {
    label: 'Cosa facciamo',
    h1: 'I nostri',
    h2: 'Servizi 360°',
    desc: "Dall'immobiliare alle cure mediche — ITALYCARE copre tutte le tue esigenze in Italia.",
    discover: 'Scopri →',
    items: [
      {
        icon: '🏠',
        t: 'Immobiliare & Investimenti',
        d: "Acquisto, vendita, due diligence, notaio, consulenza fiscale. Troviamo l'immobile ideale e gestiamo tutte le pratiche per gli acquirenti stranieri.",
        slug: 'immobilier',
        details: {
          hero: "Investi in Italia in tutta tranquillità — gestiamo ogni fase del tuo acquisto immobiliare.",
          whatIs: "Il nostro servizio immobiliare accompagna gli acquirenti stranieri dalla ricerca dell'immobile fino alla firma dal notaio. Ti guidiamo nel quadro giuridico e fiscale italiano, identifichiamo le opportunità adatte al tuo budget e gestiamo tutte le pratiche amministrative. Che tu stia cercando una residenza principale, una casa vacanze o un investimento locativo, siamo al tuo fianco in ogni fase.",
          includes: [
            'Ricerca e selezione di immobili secondo i tuoi criteri',
            'Due diligence legale e verifica dei titoli di proprietà',
            'Negoziazione del prezzo e accompagnamento alle visite',
            'Coordinamento con il notaio italiano',
            'Ottenimento del codice fiscale per l\'acquirente straniero',
            'Consulenza fiscale e ottimizzazione dell\'investimento',
          ],
          notIncludes: [
            'Spese notarili e tasse d\'acquisto (a carico dell\'acquirente)',
            'Lavori di ristrutturazione o allestimento post-acquisto',
          ],
          price: 'A partire da €1.500 (in base al budget d\'acquisto)',
          duration: 'Da 4 a 12 settimane a seconda del progetto',
          quiz: [
            {
              question: "Qual è il tuo budget di investimento?",
              options: [
                { text: 'Meno di €50.000', points: 0 },
                { text: 'Tra €50.000 e €150.000', points: 1 },
                { text: 'Tra €150.000 e €500.000', points: 2 },
                { text: 'Più di €500.000', points: 2 },
              ],
            },
            {
              question: "Hai un codice fiscale italiano?",
              options: [
                { text: "No, non so cosa sia", points: 0 },
                { text: "No, ma vorrei ottenerlo", points: 1 },
                { text: "Sì, ne ho già uno", points: 2 },
              ],
            },
            {
              question: "Qual è il tuo status di residenza?",
              options: [
                { text: "Vivo fuori dall'Europa", points: 0 },
                { text: "Vivo in Europa (UE)", points: 1 },
                { text: "Risiedo o andrò a risiedere in Italia", points: 2 },
              ],
            },
            {
              question: "Qual è il tuo obiettivo principale?",
              options: [
                { text: "Sto solo cercando informazioni", points: 0 },
                { text: "Investimento locativo o residenza secondaria", points: 1 },
                { text: "Residenza principale o progetto concreto entro 6 mesi", points: 2 },
              ],
            },
          ],
        },
      },
      {
        icon: '🔨',
        t: 'Ristrutturazione & Lavori',
        d: "Ristrutturazione completa, impianto elettrico, idraulica, gas. Coordinamento con artigiani certificati e supervisione del cantiere a distanza.",
        slug: 'renovation',
        details: {
          hero: "Trasforma il tuo immobile in Italia senza essere presente — coordiniamo tutto dal tuo paese.",
          whatIs: "Il nostro servizio di ristrutturazione gestisce tutti i tuoi lavori in Italia, che tu sia presente o all'estero. Selezioniamo artigiani certificati, prepariamo i preventivi, otteniamo i permessi necessari e assicuriamo un monitoraggio rigoroso del cantiere con report fotografici settimanali. Dai piccoli lavori di allestimento alle ristrutturazioni complete, ogni progetto è gestito con la massima cura.",
          includes: [
            'Selezione e coordinamento di artigiani certificati',
            'Preparazione e confronto di preventivi',
            'Richiesta di permessi edilizi',
            'Monitoraggio cantiere con report fotografici settimanali',
            'Controllo qualità finale prima della consegna dei lavori',
            'Gestione delle controversie e garanzie legali',
          ],
          notIncludes: [
            'Costo dei materiali e della manodopera (fatturazione diretta)',
            'Arredamento e decorazione d\'interni',
          ],
          price: 'A partire da €800 (gestione del progetto)',
          duration: 'Da 2 settimane a 6 mesi a seconda dell\'entità dei lavori',
          quiz: [
            {
              question: "Sei proprietario di un immobile in Italia?",
              options: [
                { text: "No", points: 0 },
                { text: "Ho un progetto di acquisto in corso", points: 1 },
                { text: "Sì, ho un immobile in Italia", points: 2 },
              ],
            },
            {
              question: "Che tipo di lavori vuoi realizzare?",
              options: [
                { text: "Non lo so ancora", points: 0 },
                { text: "Piccoli lavori / allestimento interno", points: 1 },
                { text: "Ristrutturazione completa o ristrutturazione", points: 2 },
              ],
            },
            {
              question: "Hai un budget stimato?",
              options: [
                { text: "Meno di €5.000", points: 0 },
                { text: "Tra €5.000 e €30.000", points: 1 },
                { text: "Più di €30.000", points: 2 },
              ],
            },
            {
              question: "Sei sul posto o a distanza?",
              options: [
                { text: "Sul posto e gestisco da solo", points: 0 },
                { text: "Posso spostarmi occasionalmente", points: 1 },
                { text: "Sono a distanza e ho bisogno di un monitoraggio completo", points: 2 },
              ],
            },
          ],
        },
      },
      {
        icon: '🏥',
        t: 'Assistenza Medica 360°',
        d: "Prenotazione appuntamenti, interpretariato medico, coordinamento ospedaliero, accompagnamento per cure specializzate in Italia.",
        slug: 'medical',
        details: {
          hero: "Accedi ai migliori specialisti italiani con un supporto medico completo nella tua lingua.",
          whatIs: "Il nostro servizio medico ti dà accesso al sistema sanitario italiano senza barriere linguistiche o amministrative. Organizziamo i tuoi appuntamenti con specialisti rinomati, forniamo interpretariato medico durante le consulenze, coordiniamo i ricoveri ospedalieri e gestiamo tutti i documenti medici. Per i pazienti internazionali che necessitano di cure specializzate non disponibili nel loro paese, offriamo un supporto completo dalla A alla Z.",
          includes: [
            'Prenotazione appuntamenti con specialisti selezionati',
            'Interpretariato medico durante le consulenze',
            'Coordinamento ospedaliero e gestione dei ricoveri',
            'Traduzione di referti medici e prescrizioni',
            'Supporto logistico (trasporto, alloggio medico)',
            'Follow-up post-consulenza e coordinamento del trattamento',
          ],
          notIncludes: [
            'Spese mediche e ospedaliere (a carico del paziente)',
            'Farmaci e dispositivi medici',
          ],
          price: 'A partire da €300 / consulenza',
          duration: 'Da 1 giorno a diverse settimane a seconda del trattamento',
          quiz: [
            {
              question: "Di che tipo di cure hai bisogno?",
              options: [
                { text: "Consulenza generale (disponibile localmente)", points: 0 },
                { text: "Consulenza specializzata non disponibile nel mio paese", points: 2 },
                { text: "Chirurgia o trattamento ospedaliero", points: 2 },
                { text: "Monitoraggio medico cronico a distanza", points: 1 },
              ],
            },
            {
              question: "Parli italiano?",
              options: [
                { text: "Sì, correntemente", points: 0 },
                { text: "Un po', livello principiante", points: 1 },
                { text: "No, ho bisogno di un interprete medico", points: 2 },
              ],
            },
            {
              question: "Hai un'assicurazione sanitaria internazionale?",
              options: [
                { text: "No", points: 1 },
                { text: "Sì, assicurazione base", points: 1 },
                { text: "Sì, assicurazione completa che include l'Italia", points: 2 },
              ],
            },
            {
              question: "Quando hai bisogno delle cure?",
              options: [
                { text: "Entro 2 settimane (urgente)", points: 2 },
                { text: "Entro il mese", points: 1 },
                { text: "Entro 3-6 mesi", points: 1 },
                { text: "È solo per informarmi", points: 0 },
              ],
            },
          ],
        },
      },
      {
        icon: '📦',
        t: 'Export Made in Italy',
        d: "Selezione di produttori italiani autentici, logistica internazionale, gestione doganale e certificazioni.",
        slug: 'export',
        details: {
          hero: "Importa l'eccellenza italiana direttamente dai produttori — autenticità e qualità garantite.",
          whatIs: "Il nostro servizio export ti mette in contatto con i migliori produttori italiani nei settori alimentare, moda, arredamento e design. Selezioniamo fornitori verificati, negoziamo le condizioni commerciali, gestiamo la logistica internazionale e assistiamo in tutte le pratiche doganali e le certificazioni. Che tu sia distributore, rivenditore o acquirente diretto, costruiamo la tua catena di approvvigionamento Made in Italy.",
          includes: [
            'Sourcing e selezione di produttori italiani certificati',
            'Negoziazione commerciale e condizioni di partnership',
            'Gestione logistica e coordinamento delle spedizioni',
            'Assistenza doganale e certificazioni di esportazione',
            'Controllo qualità pre-spedizione',
            'Assistenza legale per contratti di importazione',
          ],
          notIncludes: [
            'Costo delle merci e spese di trasporto',
            'Tasse e dazi doganali nel paese di destinazione',
          ],
          price: 'A partire da €1.200 (impostazione della partnership)',
          duration: 'Da 4 a 8 settimane per il primo ordine',
          quiz: [
            {
              question: "Hai già una struttura giuridica (società)?",
              options: [
                { text: "No", points: 0 },
                { text: "In fase di costituzione", points: 1 },
                { text: "Sì, società consolidata", points: 2 },
              ],
            },
            {
              question: "Che tipo di prodotti Made in Italy ti interessa?",
              options: [
                { text: "Non lo so ancora", points: 0 },
                { text: "Alimentare, moda, arredamento o design", points: 1 },
                { text: "Ho già identificato prodotti specifici", points: 2 },
              ],
            },
            {
              question: "Qual è il tuo mercato target?",
              options: [
                { text: "Solo locale / nazionale", points: 0 },
                { text: "Regionale / alcuni paesi", points: 1 },
                { text: "Internazionale con volumi", points: 2 },
              ],
            },
            {
              question: "Hai già importato prodotti dall'Europa?",
              options: [
                { text: "No, prima volta", points: 0 },
                { text: "Una o due volte", points: 1 },
                { text: "Sì, ho esperienza di importazione", points: 2 },
              ],
            },
          ],
        },
      },
      {
        icon: '🎓',
        t: 'Visto Studente Italia',
        d: "Gestione completa del visto, iscrizione universitaria, alloggio studentesco, accompagnamento all'arrivo in Italia.",
        slug: 'visa-etudiant',
        details: {
          hero: "Realizza il tuo sogno di studiare in Italia — dall'iscrizione universitaria al tuo arrivo e insediamento.",
          whatIs: "Il nostro servizio visto studente gestisce l'intero progetto di studi in Italia. Consigliamo su università e programmi, prepariamo il tuo fascicolo di candidatura, gestiamo la richiesta di visto e organizziamo il tuo arrivo. La nostra esperienza nel sistema universitario italiano e nelle procedure consolari garantisce il trattamento più efficace della tua pratica.",
          includes: [
            'Consulenza su università italiane e programmi disponibili',
            'Preparazione e verifica del fascicolo di candidatura',
            'Preparazione completa del fascicolo visto studente',
            'Ricerca di alloggio studentesco o residenza universitaria',
            'Accompagnamento all\'arrivo e pratiche amministrative',
            'Aiuto per l\'apertura di conto bancario e codice fiscale',
          ],
          notIncludes: [
            'Tasse universitarie e visto (pagate direttamente agli enti)',
            'Biglietti aerei e spese personali di soggiorno',
          ],
          price: 'A partire da €900 (fascicolo completo)',
          duration: 'Da 6 a 16 settimane a seconda dell\'università e del consolato',
          quiz: [
            {
              question: "Hai ricevuto l'accettazione di un'università italiana?",
              options: [
                { text: "No, non ho ancora fatto domanda", points: 0 },
                { text: "Ho fatto domanda ma non ho ancora risposta", points: 1 },
                { text: "Sì, ho una lettera di accettazione", points: 2 },
              ],
            },
            {
              question: "Hai risorse finanziarie sufficienti? (min. €6.000/anno)",
              options: [
                { text: "No", points: 0 },
                { text: "Parzialmente", points: 1 },
                { text: "Sì, posso dimostrarlo", points: 2 },
              ],
            },
            {
              question: "Qual è la tua situazione attuale?",
              options: [
                { text: "Sono in Italia con un altro visto", points: 1 },
                { text: "Sono nel mio paese d'origine", points: 2 },
                { text: "Sono in un paese terzo", points: 1 },
              ],
            },
            {
              question: "Hai un alloggio previsto in Italia?",
              options: [
                { text: "No, nessun piano", points: 0 },
                { text: "Sto ancora cercando", points: 1 },
                { text: "Sì, residenza universitaria o appartamento trovato", points: 2 },
              ],
            },
          ],
        },
      },
      {
        icon: '⚖️',
        t: 'Assistenza Legale',
        d: "Diritto immobiliare, fiscale, successorio, costituzione di società in Italia. Avvocati partner multilingue disponibili.",
        slug: 'juridique',
        details: {
          hero: "Tutela i tuoi interessi in Italia con avvocati partner multilingue ed esperti.",
          whatIs: "La nostra rete di avvocati italiani partner copre tutti i settori del diritto rilevanti per gli stranieri in Italia: diritto immobiliare, fiscale, societario, successorio e di famiglia. Facciamo da tramite tra te e il tuo avvocato, forniamo le traduzioni legali necessarie e monitoriamo l'avanzamento della tua pratica. Benefici di una competenza giuridica italiana di alto livello nella tua lingua.",
          includes: [
            'Consulenza legale iniziale con un avvocato specializzato',
            'Traduzione e analisi di documenti giuridici italiani',
            'Supporto per la costituzione di società in Italia',
            'Assistenza in diritto immobiliare e fiscale',
            'Gestione di pratiche successorie e di famiglia',
            'Rappresentanza e follow-up di controversie',
          ],
          notIncludes: [
            'Onorari dell\'avvocato (fatturati separatamente in base alla pratica)',
            'Spese giudiziarie e procedure ufficiali',
          ],
          price: 'A partire da €150 / consulenza',
          duration: 'Variabile a seconda della complessità della pratica',
          quiz: [
            {
              question: "Che tipo di assistenza legale stai cercando?",
              options: [
                { text: "Non lo so ancora", points: 0 },
                { text: "Diritto immobiliare o fiscale", points: 2 },
                { text: "Costituzione di società in Italia", points: 2 },
                { text: "Diritto successorio o di famiglia", points: 1 },
              ],
            },
            {
              question: "Hai una pratica urgente?",
              options: [
                { text: "No, è solo per informarmi", points: 0 },
                { text: "Entro 3 mesi", points: 1 },
                { text: "Urgente — entro 2 settimane", points: 2 },
              ],
            },
            {
              question: "Hai già documenti in lingua italiana da trattare?",
              options: [
                { text: "No", points: 0 },
                { text: "Sì, alcuni documenti", points: 1 },
                { text: "Sì, un fascicolo completo", points: 2 },
              ],
            },
            {
              question: "Hai già un avvocato o consulente in Italia?",
              options: [
                { text: "No", points: 2 },
                { text: "Sì, ma non parla la mia lingua", points: 1 },
                { text: "Sì, soddisfatto dei miei servizi attuali", points: 0 },
              ],
            },
          ],
        },
      },
      {
        icon: '🚗',
        t: 'Concierge Premium',
        d: "Transfer aeroporto, alloggio temporaneo, traduzione ufficiale, domiciliazione postale, assistenza quotidiana.",
        slug: 'conciergerie',
        details: {
          hero: "La tua vita quotidiana in Italia semplificata — gestiamo tutto perché tu possa concentrarti su ciò che conta.",
          whatIs: "Il nostro servizio concierge premium si occupa di tutti gli aspetti logistici e pratici della tua vita in Italia. Dal tuo arrivo all'aeroporto al tuo insediamento duraturo, orchestriamo ogni dettaglio: alloggio, trasporto, traduzioni ufficiali, domiciliazione e assistenza quotidiana. Un interlocutore dedicato è disponibile 7 giorni su 7 per rispondere a tutte le tue richieste.",
          includes: [
            'Transfer aeroporto e accoglienza all\'arrivo',
            'Ricerca e prenotazione di alloggio temporaneo o permanente',
            'Traduzioni ufficiali giurate',
            'Domiciliazione postale e amministrativa',
            'Assistenza per le pratiche quotidiane (banca, SIM, ecc.)',
            'Interlocutore dedicato disponibile 7 giorni su 7',
          ],
          notIncludes: [
            'Spese di trasporto e alloggio (rifatturate al costo reale)',
            'Spese di traduzione giurata (in base al volume)',
          ],
          price: 'A partire da €200 / mese o a prestazione',
          duration: 'Una tantum o abbonamento mensile secondo le esigenze',
          quiz: [
            {
              question: "Quando prevedi di arrivare in Italia?",
              options: [
                { text: "Nessuna data precisa", points: 0 },
                { text: "Entro 3 mesi", points: 2 },
                { text: "Entro meno di un mese", points: 2 },
              ],
            },
            {
              question: "Di quali servizi hai bisogno?",
              options: [
                { text: "Solo un transfer aeroporto", points: 1 },
                { text: "Alloggio + trasporto + assistenza", points: 2 },
                { text: "Servizio completo (alloggio, trasporto, traduzione, domiciliazione)", points: 2 },
              ],
            },
            {
              question: "Qual è la durata del tuo soggiorno?",
              options: [
                { text: "Meno di una settimana", points: 0 },
                { text: "Da 1 a 4 settimane", points: 1 },
                { text: "Più di un mese", points: 2 },
              ],
            },
            {
              question: "Hai bisogno di traduzioni ufficiali?",
              options: [
                { text: "No", points: 0 },
                { text: "Forse", points: 1 },
                { text: "Sì, diversi documenti", points: 2 },
              ],
            },
          ],
        },
      },
      {
        icon: '📋',
        t: 'Pratiche Amministrative',
        d: "Codice fiscale, permesso di soggiorno, residenza, immatricolazione — tutti i tuoi documenti ufficiali gestiti dalla A alla Z.",
        slug: 'administratif',
        details: {
          hero: "Semplifica le tue pratiche amministrative in Italia — il nostro team gestisce ogni documento ufficiale per te.",
          whatIs: "Navigare nell'amministrazione italiana può sembrare una sfida insormontabile per uno straniero. Il nostro servizio amministrativo gestisce tutte le tue pratiche ufficiali: ottenimento del codice fiscale, richiesta di permesso di soggiorno, iscrizione all'anagrafe, immatricolazione e qualsiasi altro documento amministrativo. Ti evitiamo le code, gli errori nella pratica e i ritardi inutili.",
          includes: [
            'Ottenimento del codice fiscale (numero fiscale italiano)',
            'Costituzione del fascicolo permesso di soggiorno',
            'Iscrizione all\'anagrafe (residenza)',
            'Immatricolazione e registrazione ufficiale',
            'Legalizzazione e apostille di documenti',
            'Monitoraggio della pratica fino all\'ottenimento del documento finale',
          ],
          notIncludes: [
            'Spese amministrative e marche da bollo (a carico del richiedente)',
            'Spostamenti alle prefetture o questure (se necessari)',
          ],
          price: 'A partire da €150 per pratica',
          duration: 'Da 1 a 8 settimane a seconda del tipo di documento',
          quiz: [
            {
              question: "Hai già un codice fiscale?",
              options: [
                { text: "No", points: 2 },
                { text: "Sì", points: 0 },
              ],
            },
            {
              question: "Quale pratica vuoi effettuare?",
              options: [
                { text: "Ottenere il codice fiscale", points: 2 },
                { text: "Permesso di soggiorno", points: 2 },
                { text: "Iscrizione all'anagrafe / residenza ufficiale", points: 2 },
                { text: "Più pratiche", points: 2 },
              ],
            },
            {
              question: "Sei attualmente in Italia?",
              options: [
                { text: "No, sono all'estero", points: 1 },
                { text: "Sì, da meno di 90 giorni", points: 2 },
                { text: "Sì, da più di 90 giorni senza permesso", points: 2 },
              ],
            },
            {
              question: "Parli italiano?",
              options: [
                { text: "No", points: 2 },
                { text: "Un po'", points: 1 },
                { text: "Correntemente", points: 0 },
              ],
            },
          ],
        },
      },
    ],
  },
  process: {
    label: 'Il nostro approccio',
    h1: 'Come',
    h2: 'funziona?',
    sub: "Un processo chiaro, trasparente e centrato su di te — dal primo contatto alla realizzazione completa del tuo progetto.",
    steps: [
      { icon: '💬', t: 'Consulenza gratuita', d: "Condividi il tuo progetto in una videochiamata gratuita. Analizziamo le tue esigenze in profondità." },
      { icon: '🎯', t: 'Piano personalizzato', d: "Piano d'azione su misura con calendario, budget stimato e interlocutori dedicati al tuo fascicolo." },
      { icon: '🤝', t: 'Avvio del progetto', d: "Contratto di servizio, accesso alla tua area cliente e assegnazione del tuo consulente personale dedicato." },
      { icon: '📊', t: 'Monitoraggio in tempo reale', d: "Dashboard dedicata: ogni fase visibile, ogni documento disponibile, ogni decisione validata insieme." },
      { icon: '✅', t: 'Realizzazione e oltre', d: "Progetto realizzato con follow-up post-servizio incluso in ogni prestazione ITALYCARE 360." },
    ],
  },
  nums: [
    { n: 500, suffix: '+', l: "Clienti assistiti\ncon successo" },
    { n: 20, suffix: '+', l: "Paesi di origine\ndei clienti" },
    { n: 98, suffix: '%', l: "Tasso di soddisfazione\nclientela" },
    { n: 48, suffix: 'h', l: "Tempo di risposta\ngarantito" },
  ],
  testi: {
    label: 'Cosa dicono',
    h1: 'Ci hanno dato',
    h2: 'fiducia',
    items: [
      { text: "ITALYCARE ha gestito l'intero acquisto immobiliare a Firenze. Dalla ricerca fino alla firma dal notaio, tutto era perfettamente coordinato. Non avrei potuto farcela senza di loro.", name: 'Sophie Marchand', meta: 'Acquirente — Parigi, Francia', flag: '🇫🇷', bg: '#e8f5ee' },
      { text: "Mio figlio studia all'Università di Milano grazie a ITALYCARE 360. Visto, alloggio, iscrizione — tutto gestito in 3 settimane. Servizio impeccabile e team davvero attento.", name: 'Ahmed Benzara', meta: 'Genitore — Algeri, Algeria', flag: '🇩🇿', bg: '#fef9e7' },
      { text: "Avevo bisogno di un follow-up medico specializzato in Italia. ITALYCARE ha organizzato gli appuntamenti, l'interprete, il trasporto. Un livello di servizio che non mi aspettavo. Lo consiglio senza esitare.", name: 'Khalid Al-Rashidi', meta: 'Paziente — Riyad, Arabia Saudita', flag: '🇸🇦', bg: '#fdf0f0' },
    ],
  },
  cta: {
    label: 'Inizia oggi',
    h1: 'Il tuo progetto',
    h2: 'in Italia',
    h3: 'inizia qui.',
    desc: "Consulenza gratuita di 30 minuti con un esperto ITALYCARE. Parlaci del tuo progetto, ti proporremo una soluzione su misura, senza impegno.",
    btn1: 'Prenota appuntamento — Gratuito →',
    btn2: 'Vedi tutti i servizi',
  },
  bar: [
    { icon: '📧', text: 'contact@italycare360.com' },
    { icon: '📱', text: '+39 02 1234 5678' },
    { icon: '📍', text: 'Milano · Roma · Firenze' },
    { icon: '💬', text: 'WhatsApp 7/7' },
  ],
  footer: {
    desc: "Il tuo partner di fiducia per tutti i tuoi progetti in Italia. Un solo interlocutore, competenza totale, accompagnamento umano.",
    cols: [
      { title: 'Servizi', links: ['Immobiliare', 'Ristrutturazione', 'Assistenza Medica', 'Export Italy', 'Visto Studente', 'Legale', 'Concierge', 'Amministrativo'] },
      { title: 'Azienda', links: ['Chi siamo', 'Il nostro team', 'Partner', 'Testimonianze', 'Blog & Guide', 'Carriere'] },
      { title: 'Contatto', links: ['Consulenza gratuita', 'WhatsApp', 'Area clienti', 'FAQ', 'Note legali', 'T&C / GDPR'] },
    ],
    copy: '© 2025 ITALYCARE 360 — Tutti i diritti riservati',
    tagline: "Fatto con ♥ per gli amanti dell'Italia",
  },
  form: {
    title: 'Prenota un appuntamento',
    subtitle: 'Consulenza gratuita · 30 minuti',
    name: 'Nome completo',
    email: 'Indirizzo e-mail',
    phone: 'Telefono (con prefisso)',
    service: 'Servizio desiderato',
    serviceOpts: ['Immobiliare & Investimenti', 'Ristrutturazione & Lavori', 'Assistenza Medica 360°', 'Export Made in Italy', 'Visto Studente', 'Assistenza Legale', 'Concierge Premium', 'Pratiche Amministrative', 'Altro'],
    date: 'Data preferita',
    message: 'Descrivi il tuo progetto',
    submit: 'Invia la mia richiesta →',
    sending: 'Invio in corso...',
    success: 'Richiesta inviata!',
    successMsg: 'Ti contatteremo entro 48 ore. Controlla le tue email.',
    error: 'Errore',
    errorMsg: 'Si è verificato un errore. Riprova o contattaci direttamente.',
    close: 'Chiudi',
  },
  serviceDetail: {
    backBtn: '← Torna ai servizi',
    eligibilityTitle: 'Sei idoneo?',
    eligibilitySubtitle: 'Rispondi a 4 domande per scoprire se questo servizio è adatto alla tua situazione',
    startBtn: 'Inizia il quiz →',
    nextBtn: 'Domanda successiva →',
    prevBtn: '← Precedente',
    resultTitle: 'Risultato della tua idoneità',
    eligible: '✅ Sei idoneo',
    partial: '⚠️ Parzialmente idoneo',
    notEligible: '❌ Servizio poco adatto',
    eligibleMsg: 'Eccellente! Questo servizio è perfettamente adatto alla tua situazione. Prenota una consulenza gratuita di 30 minuti.',
    partialMsg: 'Questo servizio può adattarsi alla tua situazione con alcune modifiche. I nostri esperti possono analizzare la tua situazione in dettaglio durante una consulenza gratuita.',
    notEligibleMsg: "Questo servizio sembra poco adatto alla tua situazione attuale. Ma non scoraggiarti — contattaci e troveremo una soluzione alternativa.",
    rdvBtn: 'Prenota consulenza gratuita →',
    retryBtn: 'Ricomincia il quiz',
    question: 'Domanda',
    of: 'di',
    included: '✅ Incluso in questo servizio',
    notIncluded: '❌ Non incluso',
    price: 'Budget stimato',
    duration: 'Durata stimata',
    contact: 'Una domanda? Contattaci',
  },
}
