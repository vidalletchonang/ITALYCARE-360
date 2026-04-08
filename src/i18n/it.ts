import type { Translation } from './types'

export const it: Translation = {
  nav: {
    home: 'Home',
    services: 'I Nostri Servizi',
    about: 'Chi siamo',
    process: 'Il processo',
    testi: 'Testimonianze',
    blog: 'Blog',
    contact: 'Contatto',
    cta: 'Consulenza gratuita',
  },
  hero: {
    tag: 'Il tuo partner di fiducia in Italia',
    line1: "L'Italia,",
    line2: 'semplificata',
    line3: 'per te.',
    desc: "Comprare casa in Italia, ottenere un visto studentesco, accedere alle cure mediche italiane, ristrutturare un immobile o esportare il Made in Italy — ITALYCARE 360 accompagna gli stranieri in ogni passo. Un solo interlocutore, nella tua lingua.",
    btn1: 'Inizia il mio progetto →',
    btn2: 'Vedi i servizi ↓',
    scroll: 'Scorri',
  },
  marquee: ['Immobiliare', 'Assistenza Medica 360°', 'Ristrutturazione', 'Export Made in Italy', 'Visto Studente', 'Assistenza Legale', 'Concierge Premium', 'Pratiche Amministrative', 'Organizzazione Eventi', 'Case di Riposo', 'Finanziamento', 'Professionisti Certificati'],
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
      { icon: '🌍', h: 'Multilingue', p: 'FR, EN, AR, IT, RU — servizio nella tua lingua.' },
      { icon: '📊', h: 'Monitoraggio in tempo reale', p: 'Dashboard dedicata — ogni fase visibile in diretta.' },
    ],
  },
  services: {
    label: 'Cosa facciamo',
    h1: 'I nostri',
    h2: 'Servizi 360°',
    desc: "Acquisto immobiliare, visto studente, assistenza medica, ristrutturazione, assistenza legale, concierge — ITALYCARE gestisce ogni aspetto della tua vita in Italia.",
    discover: 'Scopri →',
    items: [
      {
        icon: '🏠',
        t: 'Immobiliare & Investimenti',
        d: "Comprare casa in Italia: ricerca immobili, due diligence, notaio, fiscalità italiana. Supporto completo per investire nell'immobiliare italiano con tranquillità.",
        slug: 'immobilier',
        details: {
          hero: "Investi in Italia in tutta tranquillità — gestiamo ogni fase del tuo acquisto immobiliare.",
          whatIs: "Il nostro servizio immobiliare accompagna gli acquirenti stranieri dalla ricerca dell'immobile fino alla firma dal notaio. Ti guidiamo nel quadro giuridico e fiscale italiano, identifichiamo le opportunità adatte al tuo budget e gestiamo tutte le pratiche amministrative. Che tu stia cercando una residenza principale, una casa vacanze o un investimento locativo, siamo al tuo fianco in ogni fase.",
          includes: [
            'Property sourcing personalizzato',
            'Due diligence immobiliare (legale e tecnica)',
            'Analisi investimento e rendimento',
            'Assistenza acquisto (end-to-end)',
            'Negoziazione prezzo e condizioni',
            'Supporto post-acquisto',
            'Gestione affitti e property management',
            'Firma con procura speciale',
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
            'Valutazione tecnica iniziale',
            'Preventivi e selezione fornitori',
            'Project management lavori',
            'Interior design e space planning',
            'Supervisione cantiere',
            'Controllo qualità e tempistiche',
            'Assistenza accesso bonus (se applicabili)',
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
        d: "Prenotazione appuntamenti, interpretariato medico, coordinamento ospedaliero, accompagnamento per cure specializzate, termali e respiratorie in Italia.",
        slug: 'medical',
        details: {
          hero: "Accedi ai migliori specialisti italiani con un supporto medico completo nella tua lingua.",
          whatIs: "Il nostro servizio medico ti dà accesso al sistema sanitario italiano senza barriere linguistiche o amministrative. Organizziamo i tuoi appuntamenti con specialisti rinomati, forniamo interpretariato medico durante le consulenze, coordiniamo i ricoveri ospedalieri e gestiamo tutti i documenti medici. Organizziamo anche soggiorni di cure termali e respiratorie in Italia. Per i pazienti internazionali che necessitano di cure specializzate non disponibili nel loro paese, offriamo un supporto completo dalla A alla Z.",
          includes: [
            'Selezione strutture sanitarie',
            'Prenotazione visite ed esami',
            'Coordinamento specialisti',
            'Second opinion medica',
            'Traduzione documentazione sanitaria',
            'Assistenza durante ricoveri/interventi',
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
            'Ricerca e selezione di produttori locali italiani',
            'Supporto all\'esportazione di prodotti italiani all\'estero',
            'Gestione logistica e spedizioni internazionali',
            'Coordinamento con fornitori e distributori certificati',
            'Assistenza doganale e documentazione export/import',
            'Sourcing di prodotti tipici regionali (food, wine, lifestyle goods)',
            'Supporto per partnership commerciali tra aziende italiane ed estere',
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
            'Valutazione requisiti',
            'Supporto iscrizione università/scuole',
            'Preparazione documentazione visto',
            'Assistenza richiesta permesso di soggiorno',
            'Supporto rinnovi',
            'Orientamento all\'arrivo in Italia',
            'Ricerca alloggio',
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
            'Diritto immobiliare',
            'Diritto dell\'immigrazione (visti, permessi di soggiorno)',
            'Diritto societario e commerciale',
            'Diritto contrattuale',
            'Diritto tributario e fiscale',
            'Diritto successorio ed ereditario',
            'Diritto di famiglia',
            'Contenzioso civile e commerciale',
            'Recupero crediti',
            'Due diligence legale',
            'Assistenza notarile',
            'Compliance normativa',
            'Arbitrati e ADR',
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
            'Ricerca immobili in affitto breve/lungo',
            'Prenotazioni (ristoranti, hotel, esperienze)',
            'Transfer e mobilità privata',
            'Personal shopper',
            'Organizzazione lifestyle su misura',
            'Assistenza quotidiana',
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
            'Codice fiscale',
            'Apertura conto bancario',
            'Residenza anagrafica',
            'Utenze domestiche (luce, gas, internet)',
            'Patente e conversioni',
            'Assistenza burocratica generale',
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
      {
        icon: '🎉',
        t: 'Organizzazione di Eventi 360°',
        d: 'Matrimoni, battesimi, anniversari, seminari aziendali in Italia. Ricerca di location, catering, decorazione, logistica completa.',
        slug: 'evenements',
        details: {
          hero: 'Celebrate i vostri momenti preziosi in Italia — organizzazione completa dei vostri eventi con cura eccezionale.',
          whatIs: "Il nostro servizio eventi si occupa dell'organizzazione completa dei vostri eventi in Italia, che si tratti di un matrimonio romantico in Toscana, di un battesimo in una villa romana o di un seminario aziendale a Milano. Gestiamo la ricerca della location ideale, la selezione dei fornitori, il coordinamento logistico e il follow-up il giorno dell'evento affinché ogni momento sia perfetto.",
          includes: [
            'Event design e concept',
            'Ricerca location',
            'Catering e fornitori',
            'Gestione logistica',
            'Coordinamento giorno evento',
            'Eventi privati e corporate',
          ],
          notIncludes: [
            'Costo dei fornitori (catering, affitto location, ecc.)',
            'Biglietti aerei degli ospiti',
          ],
          price: 'A partire da €800 (coordinamento del progetto)',
          duration: 'Da 2 a 12 mesi a seconda dell\'evento',
          quiz: [
            {
              question: "Che tipo di evento stai pianificando?",
              options: [
                { text: "Non ho ancora deciso", points: 0 },
                { text: "Compleanno o festa privata", points: 1 },
                { text: "Matrimonio, battesimo o comunione", points: 2 },
                { text: "Seminario o evento professionale", points: 2 },
              ],
            },
            {
              question: "Quanti ospiti vi aspettate?",
              options: [
                { text: "Meno di 20 persone", points: 0 },
                { text: "Tra 20 e 50 persone", points: 1 },
                { text: "Più di 50 persone", points: 2 },
              ],
            },
            {
              question: "Avete una data prevista?",
              options: [
                { text: "No, non ancora", points: 0 },
                { text: "Tra 6 e 12 mesi", points: 1 },
                { text: "In meno di 6 mesi", points: 2 },
              ],
            },
            {
              question: "Avete un budget definito?",
              options: [
                { text: "No", points: 0 },
                { text: "Budget approssimativo", points: 1 },
                { text: "Sì, budget confermato", points: 2 },
              ],
            },
          ],
        },
      },
      {
        icon: '🏡',
        t: 'Case di Riposo e Residenze per Anziani',
        d: 'Ricerca e selezione di case di riposo in Italia in base alle esigenze mediche, linguistiche e finanziarie di ogni residente.',
        slug: 'maisons-retraite',
        details: {
          hero: 'Trovate la residenza senior ideale in Italia — selezionata in base alle esigenze mediche, culturali e personali del vostro caro.',
          whatIs: "Il nostro servizio specializzato vi aiuta a trovare la casa di riposo o residenza senior più adatta in Italia in base alle esigenze mediche, linguistiche e finanziarie del vostro caro. Analizziamo il fascicolo medico, identifichiamo le strutture corrispondenti, organizziamo le visite e gestiamo tutte le pratiche di ammissione. Un follow-up regolare è garantito dopo l'insediamento.",
          includes: [
            'Ricerca strutture qualificate',
            'Valutazione servizi e standard',
            'Supporto inserimento',
            'Coordinamento sanitario',
            'Report ai familiari',
            'Monitoraggio continuo',
          ],
          notIncludes: [
            'Spese di soggiorno in casa di riposo',
            'Spese mediche speciali',
          ],
          price: 'A partire da €500 (ricerca e collocamento)',
          duration: 'Da 4 a 10 settimane a seconda delle disponibilità',
          quiz: [
            {
              question: "Per chi state cercando una residenza?",
              options: [
                { text: "Per me stesso", points: 2 },
                { text: "Per un parente stretto", points: 2 },
                { text: "Mi sto informando per il futuro", points: 0 },
              ],
            },
            {
              question: "Ci sono esigenze mediche specifiche?",
              options: [
                { text: "No, totale autonomia", points: 1 },
                { text: "Assistenza leggera (aiuto quotidiano)", points: 2 },
                { text: "Cure mediche regolari o specializzate", points: 2 },
              ],
            },
            {
              question: "Qual è il budget mensile disponibile?",
              options: [
                { text: "Meno di €1.500/mese", points: 0 },
                { text: "Tra €1.500 e €3.000/mese", points: 1 },
                { text: "Più di €3.000/mese", points: 2 },
              ],
            },
            {
              question: "In quale regione d'Italia preferite?",
              options: [
                { text: "Nessuna preferenza", points: 1 },
                { text: "Nord Italia (Milano, Torino, Venezia)", points: 2 },
                { text: "Centro o Sud (Roma, Firenze, Napoli)", points: 2 },
              ],
            },
          ],
        },
      },
      {
        icon: '💰',
        t: 'Finanziamento e Soluzioni Finanziarie',
        d: 'Ricerca di finanziamento per i vostri progetti immobiliari, imprenditoriali o personali in Italia. Partner bancari e soluzioni su misura.',
        slug: 'financement',
        details: {
          hero: 'Finanziate i vostri progetti in Italia — identifichiamo le migliori soluzioni bancarie e finanziarie per la vostra situazione.',
          whatIs: "Il nostro servizio finanziamento vi accompagna nella ricerca delle migliori soluzioni per finanziare i vostri progetti in Italia. Che vogliate contrarre un mutuo immobiliare, finanziare la creazione della vostra società o ottenere un credito personale, la nostra rete di partner bancari e finanziari italiani vi propone condizioni adatte al vostro profilo di straniero.",
          includes: [
            'Consulenza mutui',
            'Pianificazione finanziaria',
            'Ottimizzazione fiscale',
            'Relazione con istituti bancari',
            'Traduzione giurata di documenti bancari',
          ],
          notIncludes: [
            'Garanzia di ottenimento del prestito',
            'Spese bancarie e di istruttoria',
          ],
          price: 'A partire da €400 (studio del fascicolo)',
          duration: 'Da 4 a 12 settimane a seconda del tipo di finanziamento',
          quiz: [
            {
              question: "Per quale tipo di progetto cercate un finanziamento?",
              options: [
                { text: "Non lo so ancora", points: 0 },
                { text: "Acquisto immobiliare", points: 2 },
                { text: "Creazione o sviluppo d'impresa", points: 2 },
                { text: "Finanziamento personale o altro progetto", points: 1 },
              ],
            },
            {
              question: "Quale importo volete finanziare?",
              options: [
                { text: "Meno di €20.000", points: 0 },
                { text: "Tra €20.000 e €100.000", points: 1 },
                { text: "Più di €100.000", points: 2 },
              ],
            },
            {
              question: "Avete redditi documentabili in Italia o all'estero?",
              options: [
                { text: "No", points: 0 },
                { text: "Sì, redditi all'estero", points: 1 },
                { text: "Sì, redditi in Italia o misti", points: 2 },
              ],
            },
            {
              question: "Avete già avuto un rifiuto di finanziamento?",
              options: [
                { text: "Sì, diversi rifiuti recenti", points: 0 },
                { text: "No, prima richiesta", points: 2 },
                { text: "Sì, un rifiuto ma situazione migliorata", points: 1 },
              ],
            },
          ],
        },
      },
      {
        icon: '🔍',
        t: 'Ricerca di Professionisti Certificati',
        d: 'Messa in contatto con geometri, architetti, ingegneri, medici specialisti, avvocati, commercialisti e tutti i professionisti certificati in Italia.',
        slug: 'professionnels',
        details: {
          hero: 'Trovate il giusto professionista certificato in Italia — selezioniamo e verifichiamo ogni esperto per voi.',
          whatIs: "Il nostro servizio di messa in contatto professionale vi collega ai migliori esperti certificati italiani in tutti i settori: geometri, architetti, ingegneri per i vostri progetti immobiliari e di costruzione, medici specialisti, avvocati, commercialisti e revisori contabili. Ogni professionista è verificato, valutato e raccomandato in base alla sua competenza e capacità di lavorare con clienti stranieri.",
          includes: [
            'Selezione avvocati',
            'Commercialisti e fiscalisti',
            'Architetti e ingegneri',
            'Medici e specialisti',
            'Notai',
            'Verifica referenze e coordinamento',
          ],
          notIncludes: [
            'Onorari dei professionisti',
            'Spostamenti per missioni fuori dall\'Italia',
          ],
          price: 'A partire da €200 (messa in contatto)',
          duration: 'Da 48h a 2 settimane a seconda della specialità',
          quiz: [
            {
              question: "Che tipo di professionista state cercando?",
              options: [
                { text: "Non lo so ancora", points: 0 },
                { text: "Geometra, architetto o ingegnere", points: 2 },
                { text: "Medico specialista", points: 2 },
                { text: "Avvocato, commercialista o esperto finanziario", points: 2 },
              ],
            },
            {
              question: "Per quale tipo di missione?",
              options: [
                { text: "Missione puntuale (preventivo, consulenza)", points: 2 },
                { text: "Gestione di progetto su più mesi", points: 2 },
                { text: "Mi sto informando", points: 0 },
              ],
            },
            {
              question: "Il professionista deve parlare la vostra lingua?",
              options: [
                { text: "No, l'italiano è sufficiente", points: 0 },
                { text: "Preferenza ma non obbligatorio", points: 1 },
                { text: "Sì, indispensabile", points: 2 },
              ],
            },
            {
              question: "Avete un termine per l'intervento?",
              options: [
                { text: "Nessun termine preciso", points: 0 },
                { text: "Entro il mese", points: 1 },
                { text: "Urgente — entro 2 settimane", points: 2 },
              ],
            },
          ],
        },
      },
      {
        icon: '💎',
        t: 'Accompagnamento Silver Economy',
        d: 'Relocation assistita senior, pianificazione lungo termine, supporto sanitario e assicurativo, gestione patrimonio immobiliare e integrazione lifestyle in Italia.',
        slug: 'silver-economy',
        details: {
          hero: 'Un servizio di accompagnamento globale pensato per i senior che desiderano vivere, stabilirsi o curarsi in Italia in tutta serenità.',
          whatIs: 'Il nostro servizio Silver Economy è specificamente progettato per i senior che desiderano stabilirsi, trasferirsi o trascorrere la pensione in Italia. Coordiniamo ogni aspetto del loro progetto: relocation assistita, supporto sanitario e assicurativo, gestione del patrimonio immobiliare e integrazione lifestyle. Le famiglie possono delegarci l\'intero processo in piena fiducia, beneficiando di un follow-up personalizzato e continuativo.',
          includes: [
            'Relocation assistita senior',
            'Pianificazione lungo termine',
            'Supporto sanitario e assicurativo',
            'Gestione patrimonio immobiliare',
            'Lifestyle e integrazione in Italia',
            'Assistenza continuativa personalizzata',
          ],
          notIncludes: [
            'Spese mediche e di cura (a carico del paziente)',
            'Acquisto o affitto immobile (servizio separato)',
          ],
          price: 'A partire da €600 (valutazione iniziale)',
          duration: 'Da 4 a 16 settimane a seconda del progetto',
          quiz: [
            {
              question: 'Per chi è questo servizio?',
              options: [
                { text: 'Per me stesso (senior)', points: 2 },
                { text: 'Per un genitore o familiare', points: 2 },
                { text: 'Mi sto informando', points: 0 },
              ],
            },
            {
              question: "Qual è l'obiettivo principale?",
              options: [
                { text: 'Stabilirsi definitivamente in Italia', points: 2 },
                { text: 'Soggiorni prolungati o stagionali', points: 1 },
                { text: 'Cure mediche e benessere in Italia', points: 2 },
              ],
            },
            {
              question: 'Ci sono esigenze sanitarie specifiche?',
              options: [
                { text: 'No, totale autonomia', points: 1 },
                { text: 'Assistenza leggera richiesta', points: 2 },
                { text: 'Cure mediche regolari o specializzate', points: 2 },
              ],
            },
            {
              question: 'Avete un calendario previsto?',
              options: [
                { text: 'Non ancora deciso', points: 0 },
                { text: 'Entro 6-12 mesi', points: 1 },
                { text: 'Entro i prossimi 3 mesi', points: 2 },
              ],
            },
          ],
        },
      },
      {
        icon: '🏘️',
        t: 'Assistenza Casa & Property Care',
        d: 'Gestione completa del vostro immobile in Italia: assicurazione, manutenzione, tecnici, sicurezza, piscina, tetto, giardino e assistenza emergenze.',
        slug: 'property-care',
        details: {
          hero: 'Il vostro immobile in Italia sempre in perfette condizioni — gestiamo tutto anche in vostra assenza.',
          whatIs: 'Il nostro servizio Property Care garantisce la manutenzione e la gestione completa del vostro immobile in Italia. Coordiniamo tutti gli artigiani e fornitori, effettuiamo ispezioni regolari e gestiamo qualsiasi emergenza in vostra vece. Che possediate un appartamento in città o una casa di campagna, il nostro team garantisce che il vostro immobile sia sempre protetto, mantenuto e pronto per il vostro arrivo.',
          includes: [
            'Attivazione e gestione assicurazione casa',
            'Ricerca e coordinamento giardiniere',
            'Servizi di pulizia ordinaria e straordinaria',
            'Assistenza e manutenzione caldaia/impianti',
            'Installazione e manutenzione aria condizionata',
            'Installazione impianti di allarme e sicurezza',
            'Installazione e manutenzione impianto idrico',
            'Manutenzione piscina',
            'Controllo e manutenzione tetto',
            'Interventi di manutenzione ordinaria e straordinaria',
            'Gestione fornitori e tecnici',
            'Ispezioni periodiche dell\'immobile',
            'Assistenza in caso di emergenze',
          ],
          notIncludes: [
            'Costo materiali e ricambi (fatturati al costo reale)',
            'Lavori di ristrutturazione strutturali importanti',
          ],
          price: 'A partire da €300 / mese o a prestazione',
          duration: 'Servizio continuativo o una tantum secondo le esigenze',
          quiz: [
            {
              question: 'Che tipo di immobile possedete?',
              options: [
                { text: 'Appartamento in città', points: 1 },
                { text: 'Villa o casa con giardino', points: 2 },
                { text: 'Proprietà rurale o casale', points: 2 },
              ],
            },
            {
              question: "Con quale frequenza siete presenti nell'immobile?",
              options: [
                { text: 'Ci vivo in modo permanente', points: 0 },
                { text: 'Alcune volte all\'anno', points: 1 },
                { text: 'Raramente o mai', points: 2 },
              ],
            },
            {
              question: 'Di quali servizi avete bisogno?',
              options: [
                { text: 'Una prestazione puntuale specifica', points: 1 },
                { text: 'Pacchetto di manutenzione regolare', points: 2 },
                { text: 'Gestione completa della proprietà', points: 2 },
              ],
            },
            {
              question: 'Avete un bisogno urgente?',
              options: [
                { text: 'No, sto pianificando in anticipo', points: 0 },
                { text: 'Entro il prossimo mese', points: 1 },
                { text: 'Sì, intervento urgente necessario', points: 2 },
              ],
            },
          ],
        },
      },
      {
        icon: '🌿',
        t: 'Monitoraggio Medico & Thermal Wellness 360°',
        d: 'Ricerca di spa mediche e centri termali qualificati, soggiorni terapeutici, fisioterapia, riabilitazione e programmi di wellness personalizzati in Italia.',
        slug: 'thermal-wellness',
        details: {
          hero: 'Recupera salute e benessere nei migliori centri termali e di wellness medico d\'Italia — tutto organizzato per te.',
          whatIs: 'Il nostro servizio Thermal Wellness ti dà accesso alle migliori spa mediche, centri di benessere e strutture di riabilitazione in Italia. Progettiamo programmi terapeutici personalizzati che combinano trattamenti tradizionali (fangoterapia, balneoterapia, idrokinesiterapia) con approcci moderni di wellness medico. Dalla selezione del centro all\'assistenza logistica completa, gestiamo tutto.',
          includes: [
            'Ricerca e selezione di spa mediche e centri termali qualificati',
            'Organizzazione di soggiorni terapeutici personalizzati',
            'Accesso a percorsi di fisioterapia e riabilitazione in strutture termali',
            'Programmi di wellness medico per prevenzione e recupero',
            'Selezione di hotel termali e resort specializzati',
            'Prenotazione pacchetti cure (fangoterapia, balneoterapia, idrokinesiterapia)',
            'Coordinamento con medici termalisti e specialisti del benessere',
            'Supporto logistico completo del soggiorno',
            'Assistenza nella scelta dei percorsi più adatti',
          ],
          notIncludes: [
            'Costo delle cure e dell\'alloggio (fatturati al costo reale)',
            'Prescrizioni mediche e farmaci personali',
          ],
          price: 'A partire da €400 (coordinamento del programma)',
          duration: 'Da 3 a 21 giorni a seconda del programma',
          quiz: [
            {
              question: "Qual è il tuo obiettivo principale?",
              options: [
                { text: 'Relax e benessere generale', points: 1 },
                { text: 'Trattamento medico o riabilitazione', points: 2 },
                { text: 'Prevenzione e mantenimento della salute', points: 2 },
              ],
            },
            {
              question: 'Hai una patologia specifica?',
              options: [
                { text: 'No, benessere generale', points: 1 },
                { text: 'Problema articolare, respiratorio o cutaneo', points: 2 },
                { text: 'Riabilitazione post-operatoria o post-traumatica', points: 2 },
              ],
            },
            {
              question: 'Che durata hai in mente?',
              options: [
                { text: 'Un weekend (2-3 giorni)', points: 0 },
                { text: 'Una settimana', points: 1 },
                { text: '2-3 settimane (programma completo)', points: 2 },
              ],
            },
            {
              question: 'Hai una prescrizione medica?',
              options: [
                { text: 'No, è per il benessere personale', points: 1 },
                { text: 'Sì, ho una raccomandazione medica', points: 2 },
                { text: 'Non sono sicuro', points: 0 },
              ],
            },
          ],
        },
      },
      {
        icon: '✈️',
        t: 'Aviazione Privata & Travel Concierge',
        d: 'Prenotazione voli privati ed elicotteri, operatori certificati, coordinamento itinerari complessi, assistenza VIP e integrazione ospitalità di lusso.',
        slug: 'aviation-privee',
        details: {
          hero: 'Viaggia verso l\'Italia nel massimo comfort e con totale discrezione — gestiamo ogni dettaglio della tua esperienza in aviazione privata.',
          whatIs: 'Il nostro servizio di Aviazione Privata offre una soluzione completa per tutte le vostre esigenze di viaggio aereo verso e intorno all\'Italia. Selezioniamo operatori di aviazione privata certificati, coordiniamo i vostri voli, i trasferimenti terrestri e l\'intero itinerario di viaggio. Che si tratti di un viaggio d\'affari urgente, di un viaggio di lusso o di un itinerario multi-destinazione complesso, il nostro team garantisce un\'esecuzione impeccabile con totale discrezione e standard VIP.',
          includes: [
            'Prenotazione voli privati ed elicotteri',
            'Selezione operatori certificati di aviazione privata',
            'Organizzazione trasferimenti porta-aeroporto',
            'Coordinamento itinerari complessi multi-destinazione',
            'Assistenza logistica per viaggi urgenti o last-minute',
            'Supporto dedicato per esigenze VIP e discrezione totale',
            'Integrazione con servizi di concierge e ospitalità di lusso',
          ],
          notIncludes: [
            'Costo dei voli e onorari operatori (fatturati al costo reale)',
            'Pratiche passaporto e visto (servizio separato)',
          ],
          price: 'A partire da €500 (commissione di coordinamento)',
          duration: 'Lead time prenotazione da 24h a 72h',
          quiz: [
            {
              question: 'Che tipo di volo stai cercando?',
              options: [
                { text: 'Prima classe commerciale (non ho bisogno del privato)', points: 0 },
                { text: 'Jet privato per un gruppo', points: 2 },
                { text: 'Trasferimento in elicottero', points: 2 },
              ],
            },
            {
              question: 'In quanto tempo devi viaggiare?',
              options: [
                { text: 'Mi sto solo informando', points: 0 },
                { text: 'Entro 2-4 settimane', points: 1 },
                { text: 'Urgente — entro 72 ore', points: 2 },
              ],
            },
            {
              question: 'Qual è la natura del tuo viaggio?',
              options: [
                { text: 'Leisure o vacanza', points: 1 },
                { text: 'Viaggio d\'affari o professionale', points: 2 },
                { text: 'Viaggio medico o urgente', points: 2 },
              ],
            },
            {
              question: 'Hai bisogno di servizi concierge aggiuntivi?',
              options: [
                { text: 'No, solo il volo', points: 1 },
                { text: 'Sì, hotel e trasporto terrestre', points: 2 },
                { text: 'Sì, esperienza VIP completa', points: 2 },
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
    { icon: '📧', text: 'info@italycare360.com' },
    { icon: '📱', text: '+39 351 750 1164' },
    { icon: '📍', text: 'Via del Popolo 222, Rovigo' },
    { icon: '💬', text: 'WhatsApp · +39 351 750 1164' },
  ],
  footer: {
    desc: "Il tuo partner di fiducia per tutti i tuoi progetti in Italia. Un solo interlocutore, competenza totale, accompagnamento umano.",
    cols: [
      { title: 'Servizi', links: ['Immobiliare', 'Ristrutturazione', 'Assistenza Medica', 'Export Italy', 'Visto Studente', 'Legale', 'Concierge', 'Amministrativo'] },
      { title: 'Azienda', links: ['Chi siamo', 'Il nostro team', 'Partner', 'Testimonianze', 'Blog & Guide', 'Carriere'] },
      { title: 'Contatto', links: ['Consulenza gratuita', 'WhatsApp', 'Area clienti', 'FAQ', 'Note legali', 'T&C / GDPR'] },
    ],
    copy: '© 2026 ITALYCARE 360 — Tutti i diritti riservati',
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
    time: 'Fascia oraria',
    timeSelect: '— Scegli una fascia oraria —',
    weekendError: 'I fine settimana non sono disponibili. Scegli un giorno feriale.',
    availability: 'Lun – Gio: 9:00 – 16:30  ·  Ven: 9:00 – 14:30',
    message: 'Descrivi il tuo progetto',
    submit: 'Invia la mia richiesta →',
    sending: 'Invio in corso...',
    success: 'Richiesta inviata!',
    successMsg: 'Ti contatteremo entro 48 ore per confermare il tuo appuntamento.',
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
  gallery: {
    label: "L'Italia in immagini",
    h1: 'Le più belle',
    h2: 'destinazioni',
    photos: [
      { label: 'Firenze' },
      { label: 'Roma' },
      { label: 'Costiera Amalfitana' },
      { label: 'Venezia' },
      { label: 'Toscana' },
      { label: 'Milano' },
    ],
  },
  video: {
    label: "Scopri l'Italia",
    h1: "L'Italia vi",
    h2: 'aspetta',
    p: "Dalla Toscana alla Sicilia, scopri perché migliaia di stranieri scelgono l'Italia per vivere, investire e realizzarsi.",
  },
  team: {
    label: 'Il Nostro Team',
    h1: 'Gli esperti che',
    h2: 'ti accompagnano',
    desc: 'Un team internazionale di specialisti — avvocati, esperti immobiliari, consulenti visti e ingegneri — interamente dedicati al tuo successo in Italia.',
    badge: 'ITALYCARE 360',
    emailBtn: "Invia un'email",
    readMore: 'Leggi di più →',
    readLess: '← Riduci',
  },
}
