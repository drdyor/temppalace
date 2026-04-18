// Branching Dialogue Scenarios — Practical Conversations
// Language-agnostic structure: 'text' = English context, 'textTarget' = target language phrase.
// TODO(LANG-VELCRO): Content is currently Italian-targeted. For French/Spanish, replace textTarget strings.

import type { BranchingScenario } from '../types';

// ============================================
// KITCHEN — The Messy Roommate
// ============================================

const kitchenScenario: BranchingScenario = {
  id: 'kitchen-messy-roommate',
  roomId: 'kitchen',
  title: 'The Messy Roommate',
  titleNative: 'Il Coinquilino Disordinato',
  timeContext: 'Saturday morning, 10:00 AM',
  startNodeId: 'enter-kitchen',
  culturalLesson: 'In shared Italian homes, kitchen cleanliness is a shared responsibility. Direct confrontation is avoided; polite requests work better.',
  phrasesLearned: [
    { target: 'Puoi pulire il tavolo, per favore?', source: 'Can you clean the table, please?', situation: 'Polite request' },
    { target: 'Mi dai una mano in cucina?', source: 'Can you give me a hand in the kitchen?', situation: 'Asking for help' },
    { target: 'Dopo mangiato laviamo i piatti?', source: 'After eating, shall we wash the dishes?', situation: 'Suggesting shared task' },
  ],
  catCharacter: {
    id: 'roommate-cat',
    name: 'Roommate',
    emoji: '🧑',
    color: '#E7A04D'
  },
  nodes: {
    'enter-kitchen': {
      id: 'enter-kitchen',
      speaker: 'narrator',
      text: 'You walk into the kitchen. The sink is full of dishes and crumbs cover the table. Your roommate is scrolling on their phone.',
      textTarget: 'Entri in cucina. Il lavello è pieno di piatti e ci sono briciole sul tavolo. Il tuo coinquilino sta scrollando sul telefono.',
      choices: [
        { text: '💬 "Puoi pulire il tavolo, per favore?"', textTarget: 'Puoi pulire il tavolo, per favore?', nextNodeId: 'polite-request' },
        { text: '😤 "Questa cucina è un disastro!"', textTarget: 'Questa cucina è un disastro!', nextNodeId: 'direct-complaint' },
        { text: '🧽 "Io lavo i piatti, tu pulisci il tavolo?"', textTarget: 'Io lavo i piatti, tu pulisci il tavolo?', nextNodeId: 'offer-split' },
      ]
    },
    'polite-request': {
      id: 'polite-request',
      speaker: 'npc',
      text: '"Ah, scusa! Ho dimenticato. Lo faccio subito." Your roommate grabs a cloth and starts cleaning. Politeness wins.',
      textTarget: '"Ah, scusa! Ho dimenticato. Lo faccio subito." Il tuo coinquilino prende uno straccio e inizia a pulire. La cortesia vince.',
      backgroundEffect: 'happy',
      choices: [
        { text: '💬 "Grazie mille!"', textTarget: 'Grazie mille!', nextNodeId: 'end-perfect' },
      ]
    },
    'direct-complaint': {
      id: 'direct-complaint',
      speaker: 'npc',
      text: '"Non è solo colpa mia!" Your roommate gets defensive. Direct complaints often backfire in shared spaces.',
      textTarget: '"Non è solo colpa mia!" Il tuo coinquilino si difende. I reclami diretti spesso si ritorcono contro negli spazi condivisi.',
      backgroundEffect: 'angry',
      choices: [
        { text: '💬 "Scusa, hai ragione. Dividiamo il lavoro."', textTarget: 'Scusa, hai ragione. Dividiamo il lavoro.', nextNodeId: 'recover-good' },
        { text: '😤 "Sì, invece lo è!"', textTarget: 'Sì, invece lo è!', nextNodeId: 'end-hostile' },
      ]
    },
    'offer-split': {
      id: 'offer-split',
      speaker: 'npc',
      text: '"Va bene, affare fatto. Tu lavi, io pulisco." Teamwork makes the dream work.',
      textTarget: '"Va bene, affare fatto. Tu lavi, io pulisco." Il lavoro di squadra funziona.',
      backgroundEffect: 'happy',
      choices: [
        { text: '💬 "Perfetto, iniziamo!"', textTarget: 'Perfetto, iniziamo!', nextNodeId: 'end-perfect' },
      ]
    },
    'recover-good': {
      id: 'recover-good',
      speaker: 'npc',
      text: '"Ok, d\'accordo. La prossima volta avvisami prima." Crisis averted.',
      textTarget: '"Ok, d\'accordo. La prossima volta avvisami prima." Crisi evitata.',
      backgroundEffect: 'neutral',
      choices: [
        { text: '💬 "Certo, grazie."', textTarget: 'Certo, grazie.', nextNodeId: 'end-good' },
      ]
    },
    'end-perfect': {
      id: 'end-perfect',
      speaker: 'narrator',
      text: '✅ The kitchen is clean and harmony is restored. Shared responsibility + polite communication = success.',
      textTarget: '✅ La cucina è pulita e l\'armonia è ripristinata. Responsabilità condivisa + comunicazione educata = successo.',
      choices: []
    },
    'end-good': {
      id: 'end-good',
      speaker: 'narrator',
      text: '✅ You recovered from a tense moment. Admitting fault and offering a solution goes a long way.',
      textTarget: '✅ Ti sei ripreso da un momento teso. Ammettere la colpa e offrire una soluzione fa molto.',
      choices: []
    },
    'end-hostile': {
      id: 'end-hostile',
      speaker: 'narrator',
      text: '⚠️ The argument escalated. In shared living, blaming never solves anything. Offer solutions, not accusations.',
      textTarget: '⚠️ La discussione è degenerata. In convivenza, dare la colpa non risolve nulla. Offri soluzioni, non accuse.',
      choices: []
    },
  }
};

// ============================================
// CAFE — Ordering Coffee
// ============================================

const cafeScenario: BranchingScenario = {
  id: 'cafe-order-coffee',
  roomId: 'cafe',
  title: 'Ordering at the Bar',
  titleNative: "Ordinare al Bar",
  timeContext: 'Monday morning, 9:00 AM',
  startNodeId: 'enter-cafe',
  culturalLesson: 'At Italian bars, you usually pay first at the register (cassa), then order at the counter. "Al banco" means standing at the counter.',
  phrasesLearned: [
    { target: 'Un caffè, per favore.', source: 'A coffee, please.', situation: 'Ordering' },
    { target: 'Vorrei un cappuccino e un cornetto.', source: 'I would like a cappuccino and a croissant.', situation: 'Ordering breakfast' },
    { target: 'Quanto viene?', source: 'How much is it?', situation: 'Asking for the bill' },
    { target: 'Il conto, per favore.', source: 'The bill, please.', situation: 'Asking for the bill (at table)' },
  ],
  catCharacter: {
    id: 'barista-cat',
    name: 'Barista',
    emoji: '☕',
    color: '#A16207'
  },
  nodes: {
    'enter-cafe': {
      id: 'enter-cafe',
      speaker: 'narrator',
      text: 'You enter a busy café. The barista is steaming milk behind the espresso machine.',
      textTarget: 'Entri in un caffè affollato. Il barista sta montando il latte dietro la macchina del caffè.',
      choices: [
        { text: '💬 "Un caffè, per favore."', textTarget: 'Un caffè, per favore.', nextNodeId: 'order-direct' },
        { text: '💬 "Vorrei un cappuccino e un cornetto."', textTarget: 'Vorrei un cappuccino e un cornetto.', nextNodeId: 'order-polite' },
        { text: '🪑 Sit down at a table first', textTarget: 'Mi siedo prima a un tavolo.', nextNodeId: 'table-wrong' },
      ]
    },
    'order-direct': {
      id: 'order-direct',
      speaker: 'npc',
      text: '"Certo. Macchiato o normale?" The barista assumes you know the system.',
      textTarget: '"Certo. Macchiato o normale?" Il barista assume che tu conosca il sistema.',
      backgroundEffect: 'neutral',
      choices: [
        { text: '☕ "Normale, grazie."', textTarget: 'Normale, grazie.', nextNodeId: 'get-coffee' },
        { text: '🥛 "Macchiato, per favore."', textTarget: 'Macchiato, per favore.', nextNodeId: 'get-coffee' },
      ]
    },
    'order-polite': {
      id: 'order-polite',
      speaker: 'npc',
      text: '"Volentieri! Lo mangi qui o da portar via?" Polite orders get warmer service.',
      textTarget: '"Volentieri! Lo mangi qui o da portar via?" Gli ordini educati ricevono un servizio più caloroso.',
      backgroundEffect: 'happy',
      choices: [
        { text: '🪑 "Qui, grazie."', textTarget: 'Qui, grazie.', nextNodeId: 'pay-question' },
        { text: '📦 "Da portar via."', textTarget: 'Da portar via.', nextNodeId: 'pay-question' },
      ]
    },
    'table-wrong': {
      id: 'table-wrong',
      speaker: 'narrator',
      text: 'You sit down, but nobody comes to take your order. In many Italian bars, you order at the counter.',
      textTarget: 'Ti siedi, ma nessuno viene a prendere l\'ordine. In molti bar italiani, si ordina al bancone.',
      backgroundEffect: 'neutral',
      choices: [
        { text: '🚶 Go to the counter', textTarget: 'Vado al bancone.', nextNodeId: 'enter-cafe' },
      ]
    },
    'pay-question': {
      id: 'pay-question',
      speaker: 'npc',
      text: '"Tre euro e cinquanta." The barista hands you the receipt.',
      textTarget: '"Tre euro e cinquanta." Il barista ti consegna lo scontrino.',
      backgroundEffect: 'happy',
      choices: [
        { text: '💶 "Ecco i soldi."', textTarget: 'Ecco i soldi.', nextNodeId: 'end-perfect' },
        { text: '💳 "Accettate carta?"', textTarget: 'Accettate carta?', nextNodeId: 'card-check' },
      ]
    },
    'get-coffee': {
      id: 'get-coffee',
      speaker: 'npc',
      text: '"Ecco il caffè, buona giornata!" The barista slides the tiny cup across the counter.',
      textTarget: '"Ecco il caffè, buona giornata!" Il barista fa scivolare la tazzina sul bancone.',
      backgroundEffect: 'happy',
      choices: [
        { text: '☕ "Grazie, buona giornata!"', textTarget: 'Grazie, buona giornata!', nextNodeId: 'end-perfect' },
      ]
    },
    'card-check': {
      id: 'card-check',
      speaker: 'npc',
      text: '"Sì, certo." The barista pulls out the card reader. Always good to ask first in small bars.',
      textTarget: '"Sì, certo." Il barista tira fuori il POS. È sempre bene chiedere prima nei bar piccoli.',
      backgroundEffect: 'happy',
      choices: [
        { text: '💳 "Perfetto, grazie."', textTarget: 'Perfetto, grazie.', nextNodeId: 'end-perfect' },
      ]
    },
    'end-perfect': {
      id: 'end-perfect',
      speaker: 'narrator',
      text: '✅ Coffee ordered, paid for, and enjoyed. Remember: polite requests and knowing the system make you look like a local.',
      textTarget: '✅ Caffè ordinato, pagato e gustato. Ricorda: le richieste educate e conoscere il sistema ti fanno sembrare un locale.',
      choices: []
    },
  }
};

// ============================================
// SUPERMARKET — Finding Items
// ============================================

const supermarketScenario: BranchingScenario = {
  id: 'supermarket-finding-items',
  roomId: 'supermarket',
  title: 'Finding Something',
  titleNative: 'Trovare Qualcosa',
  timeContext: 'Tuesday afternoon',
  startNodeId: 'enter-market',
  culturalLesson: 'In Italian supermarkets, produce is often weighed and labeled at special scales before checkout. Asking employees for help is normal and expected.',
  phrasesLearned: [
    { target: 'Mi scusi, sa dov\'è la pasta?', source: 'Excuse me, do you know where the pasta is?', situation: 'Asking for location' },
    { target: 'Dov\'è il latte senza lattosio?', source: 'Where is the lactose-free milk?', situation: 'Asking for specific item' },
    { target: 'Quanto costa questo?', source: 'How much does this cost?', situation: 'Asking price' },
  ],
  catCharacter: {
    id: 'employee-cat',
    name: 'Employee',
    emoji: '🛒',
    color: '#22C55E'
  },
  nodes: {
    'enter-market': {
      id: 'enter-market',
      speaker: 'narrator',
      text: 'You\'re in the supermarket but can\'t find the pasta aisle. An employee is stocking shelves nearby.',
      textTarget: 'Sei al supermercato ma non trovi il reparto della pasta. Un dipendente sta rifornendo gli scaffali vicino.',
      choices: [
        { text: '💬 "Mi scusi, sa dov\'è la pasta?"', textTarget: 'Mi scusi, sa dov\'è la pasta?', nextNodeId: 'ask-polite' },
        { text: '🔍 Look around without asking', textTarget: 'Guardo in giro senza chiedere.', nextNodeId: 'wander-lost' },
        { text: '📱 Check your phone map', textTarget: 'Controllo la mappa sul telefono.', nextNodeId: 'phone-map' },
      ]
    },
    'ask-polite': {
      id: 'ask-polite',
      speaker: 'npc',
      text: '"Sì, al terzo scaffale, dietro di lei." The employee points clearly. Asking politely always works.',
      textTarget: '"Sì, al terzo scaffale, dietro di lei." Il dipendente indica chiaramente. Chiedere educatamente funziona sempre.',
      backgroundEffect: 'happy',
      choices: [
        { text: '💬 "Grazie mille!"', textTarget: 'Grazie mille!', nextNodeId: 'end-perfect' },
        { text: '💬 "E il pane integrale?"', textTarget: 'E il pane integrale?', nextNodeId: 'follow-up' },
      ]
    },
    'wander-lost': {
      id: 'wander-lost',
      speaker: 'narrator',
      text: 'You wander for ten minutes. The pasta was behind the rice. Sometimes asking saves time.',
      textTarget: 'Giri per dieci minuti. La pasta era dietro il riso. A volte chiedere fa risparmiare tempo.',
      backgroundEffect: 'neutral',
      choices: [
        { text: '💬 "Mi scusi, dov\'è la pasta?"', textTarget: 'Mi scusi, dov\'è la pasta?', nextNodeId: 'ask-polite' },
      ]
    },
    'phone-map': {
      id: 'phone-map',
      speaker: 'narrator',
      text: 'The store app shows the layout. Technology helps, but a smile and "scusi" builds connections.',
      textTarget: 'L\'app del negozio mostra la pianta. La tecnologia aiuta, ma un sorriso e uno "scusi" costruiscono connessioni.',
      backgroundEffect: 'neutral',
      choices: [
        { text: '📱 Follow the map', textTarget: 'Seguo la mappa.', nextNodeId: 'end-good' },
      ]
    },
    'follow-up': {
      id: 'follow-up',
      speaker: 'npc',
      text: '"Il pane integrale è al reparto panetteria, di fronte alle casse." Helpful and specific.',
      textTarget: '"Il pane integrale è al reparto panetteria, di fronte alle casse." Utile e specifico.',
      backgroundEffect: 'happy',
      choices: [
        { text: '💬 "Perfetto, grazie ancora!"', textTarget: 'Perfetto, grazie ancora!', nextNodeId: 'end-perfect' },
      ]
    },
    'end-perfect': {
      id: 'end-perfect',
      speaker: 'narrator',
      text: '✅ You found everything and made a friendly connection. "Mi scusi" opens doors — and aisles.',
      textTarget: '✅ Hai trovato tutto e creato un contatto amichevole. "Mi scusi" apre porte — e corsie.',
      choices: []
    },
    'end-good': {
      id: 'end-good',
      speaker: 'narrator',
      text: '✅ You found the pasta, but next time try asking. Small interactions are where language lives.',
      textTarget: '✅ Hai trovato la pasta, ma la prossima volta prova a chiedere. Le piccole interazioni sono dove vive la lingua.',
      choices: []
    },
  }
};

// ============================================
// BEDROOM — The Morning Rush
// ============================================

const bedroomScenario: BranchingScenario = {
  id: 'bedroom-morning-rush',
  roomId: 'bedroom',
  title: 'The Morning Rush',
  titleNative: 'La Fuga Mattutina',
  timeContext: 'Weekday, 8:15 AM',
  startNodeId: 'wake-up',
  culturalLesson: 'Italians often live with family longer and share bathrooms. Coordinating morning routines requires negotiation, not demands.',
  phrasesLearned: [
    { target: 'Che ore sono?', source: 'What time is it?', situation: 'Asking time' },
    { target: 'Mi presti il phon?', source: 'Can you lend me the hair dryer?', situation: 'Borrowing item' },
    { target: 'Dobbiamo uscire tra dieci minuti.', source: 'We have to leave in ten minutes.', situation: 'Urging hurry' },
  ],
  catCharacter: {
    id: 'partner-cat',
    name: 'Partner',
    emoji: '🧑',
    color: '#8B5CF6'
  },
  nodes: {
    'wake-up': {
      id: 'wake-up',
      speaker: 'narrator',
      text: 'Your alarm didn\'t go off. You\'re late. Your partner is already getting dressed.',
      textTarget: 'La sveglia non è suonata. Sei in ritardo. Il tuo partner si sta già vestendo.',
      choices: [
        { text: '⏰ "Che ore sono?"', textTarget: 'Che ore sono?', nextNodeId: 'ask-time' },
        { text: '😱 "Siamo in ritardo!"', textTarget: 'Siamo in ritardo!', nextNodeId: 'panic-mode' },
        { text: '🚿 "Mi presti il phon?"', textTarget: 'Mi presti il phon?', nextNodeId: 'borrow-dryer' },
      ]
    },
    'ask-time': {
      id: 'ask-time',
      speaker: 'npc',
      text: '"Sono le otto e un quarto. Dobbiamo correre!" At least now you know how much time you have.',
      textTarget: '"Sono le otto e un quarto. Dobbiamo correre!" Almeno ora sai quanto tempo hai.',
      backgroundEffect: 'surprised',
      choices: [
        { text: '💬 "Dieci minuti e sono pronto."', textTarget: 'Dieci minuti e sono pronto.', nextNodeId: 'promise-ready' },
        { text: '🏃 "Vado in bagno prima tu!"', textTarget: 'Vado in bagno prima tu!', nextNodeId: 'bathroom-race' },
      ]
    },
    'panic-mode': {
      id: 'panic-mode',
      speaker: 'npc',
      text: '"Lo so! Non serve gridare!" Panic is contagious — and unproductive.',
      textTarget: '"Lo so! Non serve gridare!" Il panico è contagioso — e improduttivo.',
      backgroundEffect: 'angry',
      choices: [
        { text: '💬 "Scusa, sono stressato."', textTarget: 'Scusa, sono stressato.', nextNodeId: 'recover-calm' },
        { text: '😤 "Dobbiamo andare!"', textTarget: 'Dobbiamo andare!', nextNodeId: 'end-hostile' },
      ]
    },
    'borrow-dryer': {
      id: 'borrow-dryer',
      speaker: 'npc',
      text: '"Certo, ecco. Ma sbrigati, per favore." Sharing is caring, but time is ticking.',
      textTarget: '"Certo, ecco. Ma sbrigati, per favore." Condividere è bello, ma il tempo stringe.',
      backgroundEffect: 'happy',
      choices: [
        { text: '💬 "Grazie, due minuti."', textTarget: 'Grazie, due minuti.', nextNodeId: 'end-good' },
      ]
    },
    'promise-ready': {
      id: 'promise-ready',
      speaker: 'npc',
      text: '"Va bene, ti aspetto in macchina." Setting clear expectations helps.',
      textTarget: '"Va bene, ti aspetto in macchina." Stabilire aspettative chiare aiuta.',
      backgroundEffect: 'neutral',
      choices: [
        { text: '💬 "Perfetto, arrivo subito."', textTarget: 'Perfetto, arrivo subito.', nextNodeId: 'end-good' },
      ]
    },
    'bathroom-race': {
      id: 'bathroom-race',
      speaker: 'npc',
      text: '"No, io devo truccarmi! Tu aspetta." Some battles aren\'t worth fighting at 8:15 AM.',
      textTarget: '"No, io devo truccarmi! Tu aspetta." Alcune battaglie non valgono la pena alle 8:15.',
      backgroundEffect: 'angry',
      choices: [
        { text: '💬 "Va bene, vado dopo."', textTarget: 'Va bene, vado dopo.', nextNodeId: 'end-good' },
      ]
    },
    'recover-calm': {
      id: 'recover-calm',
      speaker: 'npc',
      text: '"Tranquillo, ce la facciamo." Acknowledging stress calms the situation.',
      textTarget: '"Tranquillo, ce la facciamo." Riconoscere lo stress calma la situazione.',
      backgroundEffect: 'happy',
      choices: [
        { text: '💬 "Grazie. Andiamo!"', textTarget: 'Grazie. Andiamo!', nextNodeId: 'end-perfect' },
      ]
    },
    'end-perfect': {
      id: 'end-perfect',
      speaker: 'narrator',
      text: '✅ You handled the rush with grace. Clear communication + apologies when needed = smooth mornings.',
      textTarget: '✅ Hai gestito la fuga con eleganza. Comunicazione chiara + scuse quando necessario = mattine serene.',
      choices: []
    },
    'end-good': {
      id: 'end-good',
      speaker: 'narrator',
      text: '✅ You made it out the door. Morning coordination is a skill — keep practicing those polite requests.',
      textTarget: '✅ Sei uscito di casa. La coordinazione mattutina è un\'abilità — continua a praticare quelle richieste educate.',
      choices: []
    },
    'end-hostile': {
      id: 'end-hostile',
      speaker: 'narrator',
      text: '⚠️ You left in a bad mood. Stress happens, but taking it out on others doesn\'t help.',
      textTarget: '⚠️ Sei uscito di cattivo umore. Lo stress capita, ma scaricarlo sugli altri non aiuta.',
      choices: []
    },
  }
};

// ============================================
// TRANSPORT — At the Station
// ============================================

const transportScenario: BranchingScenario = {
  id: 'transport-station',
  roomId: 'transport',
  title: 'At the Station',
  titleNative: 'Alla Stazione',
  timeContext: 'Thursday, 11:00 AM',
  startNodeId: 'arrive-station',
  culturalLesson: 'Italian train tickets often need validation (timbratura) before boarding. Look for the small green machines on the platform.',
  phrasesLearned: [
    { target: 'Un biglietto per Roma, per favore.', source: 'A ticket to Rome, please.', situation: 'Buying ticket' },
    { target: 'A che ora parte il prossimo treno?', source: 'What time does the next train leave?', situation: 'Asking schedule' },
    { target: 'Devo timbrare il biglietto?', source: 'Do I need to validate the ticket?', situation: 'Asking about validation' },
  ],
  catCharacter: {
    id: 'ticket-cat',
    name: 'Ticket Agent',
    emoji: '🎫',
    color: '#3B82F6'
  },
  nodes: {
    'arrive-station': {
      id: 'arrive-station',
      speaker: 'narrator',
      text: 'You\'re at the train station. The departure board shows multiple trains to Rome. You need a ticket.',
      textTarget: 'Sei alla stazione. Il tabellone partenze mostra diversi treni per Roma. Ti serve un biglietto.',
      choices: [
        { text: '💬 "Un biglietto per Roma, per favore."', textTarget: 'Un biglietto per Roma, per favore.', nextNodeId: 'buy-ticket' },
        { text: '⏰ "A che ora parte il prossimo treno?"', textTarget: 'A che ora parte il prossimo treno?', nextNodeId: 'ask-schedule' },
        { text: '📱 Use the ticket machine', textTarget: 'Uso la macchinetta.', nextNodeId: 'machine-buy' },
      ]
    },
    'buy-ticket': {
      id: 'buy-ticket',
      speaker: 'npc',
      text: '"Andata o andata e ritorno?" The agent waits for your choice.',
      textTarget: '"Andata o andata e ritorno?" L\'agente aspetta la tua scelta.',
      backgroundEffect: 'neutral',
      choices: [
        { text: '💬 "Solo andata, grazie."', textTarget: 'Solo andata, grazie.', nextNodeId: 'ticket-price' },
        { text: '💬 "Andata e ritorno, per favore."', textTarget: 'Andata e ritorno, per favore.', nextNodeId: 'ticket-price' },
      ]
    },
    'ask-schedule': {
      id: 'ask-schedule',
      speaker: 'npc',
      text: '"Il prossimo parte alle undici e trenta, binario quattro." Clear and precise.',
      textTarget: '"Il prossimo parte alle undici e trenta, binario quattro." Chiaro e preciso.',
      backgroundEffect: 'happy',
      choices: [
        { text: '💬 "Grazie. E devo timbrare il biglietto?"', textTarget: 'Grazie. E devo timbrare il biglietto?', nextNodeId: 'validate-question' },
        { text: '💬 "Quanto costa?"', textTarget: 'Quanto costa?', nextNodeId: 'ticket-price' },
      ]
    },
    'machine-buy': {
      id: 'machine-buy',
      speaker: 'narrator',
      text: 'The machine works in English too, but practicing Italian at the counter builds confidence.',
      textTarget: 'La macchinetta funziona anche in inglese, ma praticare l\'italiano allo sportello costruisce fiducia.',
      backgroundEffect: 'neutral',
      choices: [
        { text: '💬 Go back to the counter', textTarget: 'Torno allo sportello.', nextNodeId: 'arrive-station' },
        { text: '💳 Buy from the machine', textTarget: 'Compro dalla macchinetta.', nextNodeId: 'end-good' },
      ]
    },
    'ticket-price': {
      id: 'ticket-price',
      speaker: 'npc',
      text: '"Quindici euro. Ecco lo scontrino." You have your ticket.',
      textTarget: '"Quindici euro. Ecco lo scontrino." Hai il tuo biglietto.',
      backgroundEffect: 'happy',
      choices: [
        { text: '💬 "Devo timbrare il biglietto?"', textTarget: 'Devo timbrare il biglietto?', nextNodeId: 'validate-question' },
        { text: '💬 "Grazie, buona giornata!"', textTarget: 'Grazie, buona giornata!', nextNodeId: 'end-perfect' },
      ]
    },
    'validate-question': {
      id: 'validate-question',
      speaker: 'npc',
      text: '"Sì, alle macchinette verdi sul binario. È importante!" Validation saved — no fine.',
      textTarget: '"Sì, alle macchinette verdi sul binario. È importante!" Convalida fatta — nessuna multa.',
      backgroundEffect: 'happy',
      choices: [
        { text: '💬 "Grazie per l\'avviso!"', textTarget: 'Grazie per l\'avviso!', nextNodeId: 'end-perfect' },
      ]
    },
    'end-perfect': {
      id: 'end-perfect',
      speaker: 'narrator',
      text: '✅ Ticket bought, validated, and you\'re on the right platform. Small questions prevent big problems.',
      textTarget: '✅ Biglietto comprato, convalidato e sei sul binario giusto. Le piccole domande prevengono grandi problemi.',
      choices: []
    },
    'end-good': {
      id: 'end-good',
      speaker: 'narrator',
      text: '✅ You got your ticket. Next time, try asking in Italian — even a simple "per favore" goes a long way.',
      textTarget: '✅ Hai ottenuto il biglietto. La prossima volta prova a chiedere in italiano — anche un semplice "per favore" conta molto.',
      choices: []
    },
  }
};

// ============================================
// LIVING ROOM — The Remote
// ============================================

const livingRoomScenario: BranchingScenario = {
  id: 'living-room-remote',
  roomId: 'living-room',
  title: 'The Remote Control',
  titleNative: 'Il Telecomando',
  timeContext: 'Sunday evening',
  startNodeId: 'on-sofa',
  culturalLesson: 'Italian TV culture is strong, but asking to change the channel is normal. Just be ready for a debate about which show is best.',
  phrasesLearned: [
    { target: 'Puoi alzare il volume?', source: 'Can you turn up the volume?', situation: 'Asking to adjust TV' },
    { target: 'Cambi canale, per favore?', source: 'Can you change the channel, please?', situation: 'Asking to change channel' },
    { target: 'A che ora inizia il film?', source: 'What time does the movie start?', situation: 'Asking about schedule' },
  ],
  catCharacter: {
    id: 'friend-cat',
    name: 'Friend',
    emoji: '🧑',
    color: '#10B981'
  },
  nodes: {
    'on-sofa': {
      id: 'on-sofa',
      speaker: 'narrator',
      text: 'You\'re on the sofa watching TV with a friend. The volume is too low and you can\'t hear the dialogue.',
      textTarget: 'Sei sul divano a guardare la TV con un amico. Il volume è troppo basso e non senti i dialoghi.',
      choices: [
        { text: '🔊 "Puoi alzare il volume?"', textTarget: 'Puoi alzare il volume?', nextNodeId: 'ask-volume' },
        { text: '📺 "Cambi canale, per favore?"', textTarget: 'Cambi canale, per favore?', nextNodeId: 'ask-channel' },
        { text: '🤐 Say nothing', textTarget: 'Non dico niente.', nextNodeId: 'stay-quiet' },
      ]
    },
    'ask-volume': {
      id: 'ask-volume',
      speaker: 'npc',
      text: '"Certo, meglio?" Your friend turns it up. Simple requests get simple results.',
      textTarget: '"Certo, meglio?" Il tuo amico alza. Le richieste semplici ottengono risultati semplici.',
      backgroundEffect: 'happy',
      choices: [
        { text: '💬 "Sì, perfetto. Grazie!"', textTarget: 'Sì, perfetto. Grazie!', nextNodeId: 'end-perfect' },
      ]
    },
    'ask-channel': {
      id: 'ask-channel',
      speaker: 'npc',
      text: '"Su che canale? Stanno dando il calcio!" Your friend is protective of the match.',
      textTarget: '"Su che canale? Stanno dando il calcio!" Il tuo amico è protettivo della partita.',
      backgroundEffect: 'neutral',
      choices: [
        { text: '⚽ "Va bene, lascia il calcio."', textTarget: 'Va bene, lascia il calcio.', nextNodeId: 'end-good' },
        { text: '📺 "Dopo il calcio, mettiamo un film?"', textTarget: 'Dopo il calcio, mettiamo un film?', nextNodeId: 'negotiate-movie' },
      ]
    },
    'stay-quiet': {
      id: 'stay-quiet',
      speaker: 'narrator',
      text: 'You miss the whole plot. Speaking up is part of conversation practice — and friendship.',
      textTarget: 'Hai perso tutta la trama. Esprimersi è parte della pratica conversazionale — e dell\'amicizia.',
      backgroundEffect: 'neutral',
      choices: [
        { text: '💬 "Scusa, puoi alzare il volume?"', textTarget: 'Scusa, puoi alzare il volume?', nextNodeId: 'ask-volume' },
      ]
    },
    'negotiate-movie': {
      id: 'negotiate-movie',
      speaker: 'npc',
      text: '"D\'accordo, dopo il calcio. A che ora inizia il film?" Negotiation successful.',
      textTarget: '"D\'accordo, dopo il calcio. A che ora inizia il film?" Negoziazione riuscita.',
      backgroundEffect: 'happy',
      choices: [
        { text: '💬 "Alle nove, penso."', textTarget: 'Alle nove, penso.', nextNodeId: 'end-perfect' },
      ]
    },
    'end-perfect': {
      id: 'end-perfect',
      speaker: 'narrator',
      text: '✅ You spoke up and got what you needed. Small daily requests are the backbone of fluency.',
      textTarget: '✅ Ti sei espresso e hai ottenuto ciò di cui avevi bisogno. Le piccole richieste quotidiane sono la spina dorsale della fluidità.',
      choices: []
    },
    'end-good': {
      id: 'end-good',
      speaker: 'narrator',
      text: '✅ You compromised. Sometimes letting others have their way is the most social thing you can do.',
      textTarget: '✅ Hai fatto un compromesso. A volte lasciare che gli altri abbiano la loro strada è la cosa più sociale che puoi fare.',
      choices: []
    },
  }
};

// ============================================
// GARDEN — The Weekend Plan
// ============================================

const gardenScenario: BranchingScenario = {
  id: 'garden-weekend-plan',
  roomId: 'garden',
  title: 'The Weekend Plan',
  titleNative: "Il Programma del Weekend",
  timeContext: 'Saturday morning',
  startNodeId: 'grass',
  culturalLesson: 'Italians often adapt plans to the weather. Arguing with rain is futile — flexibility is key.',
  phrasesLearned: [
    { target: 'Che tempo fa oggi?', source: 'What\'s the weather like today?', situation: 'Asking about weather' },
    { target: 'Andiamo al parco?', source: 'Shall we go to the park?', situation: 'Suggesting activity' },
    { target: 'Restiamo a casa?', source: 'Shall we stay home?', situation: 'Suggesting alternative' },
  ],
  catCharacter: {
    id: 'friend-cat',
    name: 'Friend',
    emoji: '🧑',
    color: '#22C55E'
  },
  nodes: {
    'grass': {
      id: 'grass',
      speaker: 'narrator',
      text: 'You and a friend are in the garden. The sun is warm but a dark cloud is approaching.',
      textTarget: 'Tu e un amico siete in giardino. Il sole è caldo ma si avvicina una nuvola scura.',
      choices: [
        { text: '🌤️ "Che tempo fa oggi?"', textTarget: 'Che tempo fa oggi?', nextNodeId: 'check-weather' },
        { text: '🏞️ "Andiamo al parco?"', textTarget: 'Andiamo al parco?', nextNodeId: 'park-plan' },
        { text: '🏠 "Restiamo a casa?"', textTarget: 'Restiamo a casa?', nextNodeId: 'stay-home' },
      ]
    },
    'check-weather': {
      id: 'check-weather',
      speaker: 'npc',
      text: '"Sembra che pioverà. Meglio restare qui." Your friend reads the sky better than the app.',
      textTarget: '"Sembra che pioverà. Meglio restare qui." Il tuo amico legge il cielo meglio dell\'app.',
      backgroundEffect: 'neutral',
      choices: [
        { text: '🏠 "Hai ragione, restiamo a casa."', textTarget: 'Hai ragione, restiamo a casa.', nextNodeId: 'end-perfect' },
        { text: '☂️ "Non importa, andiamo lo stesso!"', textTarget: 'Non importa, andiamo lo stesso!', nextNodeId: 'brave-rain' },
      ]
    },
    'park-plan': {
      id: 'park-plan',
      speaker: 'npc',
      text: '"Bella idea! Ma guarda quella nuvola..." Plans are great, but weather rules.',
      textTarget: '"Bella idea! Ma guarda quella nuvola..." I piani sono belli, ma il tempo comanda.',
      backgroundEffect: 'surprised',
      choices: [
        { text: '🏠 "Allora restiamo a casa."', textTarget: 'Allora restiamo a casa.', nextNodeId: 'stay-home' },
        { text: '🌳 "Andiamo nel giardino dietro casa."', textTarget: 'Andiamo nel giardino dietro casa.', nextNodeId: 'end-good' },
      ]
    },
    'stay-home': {
      id: 'stay-home',
      speaker: 'npc',
      text: '"Perfetto. Preparo il tè." Sometimes the best plan is no plan.',
      textTarget: '"Perfetto. Preparo il tè." A volte il miglior piano è non avere un piano.',
      backgroundEffect: 'happy',
      choices: [
        { text: '💬 "Ottima idea!"', textTarget: 'Ottima idea!', nextNodeId: 'end-perfect' },
      ]
    },
    'brave-rain': {
      id: 'brave-rain',
      speaker: 'narrator',
      text: 'You go out and get soaked. In Italy, you adapt to the weather, not the other way around.',
      textTarget: 'Sei uscito e ti sei bagnato. In Italia ti adatti al tempo, non il contrario.',
      backgroundEffect: 'angry',
      choices: [
        { text: '🏠 "Ok, torniamo indietro!"', textTarget: 'Ok, torniamo indietro!', nextNodeId: 'end-good' },
      ]
    },
    'end-perfect': {
      id: 'end-perfect',
      speaker: 'narrator',
      text: '✅ Flexible, resourceful, and culturally aware. That\'s Italian weekend harmony.',
      textTarget: '✅ Flessibile, ingegnoso e culturalmente consapevole. Questa è l\'armonia del weekend italiano.',
      choices: []
    },
    'end-good': {
      id: 'end-good',
      speaker: 'narrator',
      text: '✅ You adapted. Weather in Italy is unpredictable — being ready to change plans is a life skill.',
      textTarget: '✅ Ti sei adattato. Il tempo in Italia è imprevedibile — essere pronti a cambiare piano è un\'abilità di vita.',
      choices: []
    },
  }
};

// ============================================
// ENTRANCE-HALL — Meeting the Family
// ============================================

const entranceHallScenario: BranchingScenario = {
  id: 'entrance-hall-meeting-family',
  roomId: 'entrance-hall',
  title: 'Meeting the Family',
  titleNative: 'Incontrare la Famiglia',
  timeContext: 'Sunday lunch',
  startNodeId: 'arrive',
  culturalLesson: 'Italian family introductions are warm but formal at first. Always greet everyone individually with a handshake or cheek kisses. Bring a small gift.',
  phrasesLearned: [
    { target: 'Piacere di conoscerti.', source: 'Nice to meet you.', situation: 'Introduction' },
    { target: 'Grazie per l\'invito.', source: 'Thank you for the invitation.', situation: 'Arriving' },
    { target: 'Complimenti per il pranzo!', source: 'Compliments on the lunch!', situation: 'Complimenting food' },
  ],
  catCharacter: { id: 'family-cat', name: 'Nonna', emoji: '👋', color: '#E7A04D' },
  nodes: {
    'arrive': {
      id: 'arrive',
      speaker: 'narrator',
      text: 'You ring the doorbell at your Italian partner\'s family home. Sunday lunch smells drift through the door. The whole family is inside.',
      textTarget: 'Suoni il campanello a casa della famiglia italiana del tuo partner. Il profumo del pranzo domenicale arriva dalla porta. Tutta la famiglia è dentro.',
      choices: [
        { text: '🌹 Present flowers and say \'Buongiorno a tutti!\'', textTarget: 'Buongiorno a tutti!', nextNodeId: 'good-entrance' },
        { text: '👋 Walk in and wave generally at the room', textTarget: 'Ciao!', nextNodeId: 'awkward-entrance' },
      ],
    },
    'good-entrance': {
      id: 'good-entrance',
      speaker: 'npc',
      text: 'Nonna beams. \'Che bel ragazzo/ragazza! Prego, prego, siediti!\' The family nods approvingly at your flowers.',
      textTarget: '\'Che bel ragazzo/ragazza! Prego, prego, siediti!\' La nonna sorride. La famiglia approva i fiori.',
      backgroundEffect: 'happy',
      choices: [
        { text: '💬 Shake everyone\'s hand: \'Piacere di conoscerti.\'', textTarget: 'Piacere di conoscerti.', nextNodeId: 'greet-all' },
        { text: '🙏 Compliment the food smell: \'Che buon profumo!\'', textTarget: 'Che buon profumo!', nextNodeId: 'compliment-food' },
      ],
    },
    'awkward-entrance': {
      id: 'awkward-entrance',
      speaker: 'npc',
      text: 'Nonna looks surprised. No flowers. No individual greetings. A brief silence falls over the room.',
      textTarget: 'La nonna sembra sorpresa. Niente fiori. Niente saluti individuali. Un breve silenzio cade nella stanza.',
      backgroundEffect: 'neutral',
      choices: [
        { text: '💬 Recover quickly: \'Scusate, buongiorno a tutti! Piacere!\'', textTarget: 'Scusate, buongiorno a tutti! Piacere!', nextNodeId: 'recover' },
      ],
    },
    'greet-all': {
      id: 'greet-all',
      speaker: 'narrator',
      text: 'You go around the table — handshake for nonno, cheek kisses for nonna, firm handshake for dad. Everyone relaxes.',
      textTarget: 'Giri attorno al tavolo — stretta di mano per il nonno, baci sulle guance per la nonna, stretta ferma per il padre. Tutti si rilassano.',
      backgroundEffect: 'happy',
      choices: [
        { text: '💬 Sit down: \'Grazie per l\'invito.\'', textTarget: 'Grazie per l\'invito.', nextNodeId: 'end-perfect' },
      ],
    },
    'compliment-food': {
      id: 'compliment-food',
      speaker: 'npc',
      text: '\'Ho fatto il ragù tutta la mattina!\' Nonna pulls you into the kitchen to taste the sauce. You have made a friend for life.',
      textTarget: '\'Ho fatto il ragù tutta la mattina!\' La nonna ti porta in cucina ad assaggiare il sugo. Ti sei fatto un amico per la vita.',
      backgroundEffect: 'happy',
      choices: [
        { text: '😋 \'Complimenti per il pranzo! È delizioso!\'', textTarget: 'Complimenti per il pranzo! È delizioso!', nextNodeId: 'end-perfect' },
      ],
    },
    'recover': {
      id: 'recover',
      speaker: 'npc',
      text: 'The family smiles. A quick recovery counts. You go around and shake hands. Nonna pinches your cheek — forgiven.',
      textTarget: 'La famiglia sorride. Una ripresa rapida conta. Stringa la mano a tutti. La nonna ti pizzica la guancia — perdonato.',
      backgroundEffect: 'neutral',
      choices: [
        { text: '💬 \'Piacere di conoscerti\' to each person', textTarget: 'Piacere di conoscerti.', nextNodeId: 'end-good' },
      ],
    },
    'end-perfect': {
      id: 'end-perfect',
      speaker: 'narrator',
      text: '✅ Perfect first impression. Flowers, individual greetings, and food compliments — you passed the Italian family test.',
      textTarget: '✅ Prima impressione perfetta. Fiori, saluti individuali e complimenti per il cibo — hai superato il test della famiglia italiana.',
      choices: [
      ],
    },
    'end-good': {
      id: 'end-good',
      speaker: 'narrator',
      text: '✅ A rocky start but a solid recovery. In Italian culture, how you handle mistakes matters as much as not making them.',
      textTarget: '✅ Un inizio difficile ma una buona ripresa. Nella cultura italiana, come gestisci gli errori è importante quanto non commetterli.',
      choices: [
      ],
    },
  }
};

// ============================================
// LIBRARY — At the Library
// ============================================

const libraryScenario: BranchingScenario = {
  id: 'library-finding-book',
  roomId: 'library',
  title: 'At the Library',
  titleNative: 'In Biblioteca',
  timeContext: 'Tuesday afternoon',
  startNodeId: 'enter-library',
  culturalLesson: 'Italian libraries are quiet community spaces. Ask for help in a whisper. Librarians appreciate specific requests.',
  phrasesLearned: [
    { target: 'Dov\'è la sezione storia?', source: 'Where is the history section?', situation: 'Finding section' },
    { target: 'Posso rinnovare il prestito?', source: 'Can I renew the loan?', situation: 'Renewing a book' },
  ],
  catCharacter: { id: 'librarian-cat', name: 'Librarian', emoji: '📚', color: '#8B5CF6' },
  nodes: {
    'enter-library': {
      id: 'enter-library',
      speaker: 'narrator',
      text: 'You arrive at a quiet Italian library on Tuesday afternoon. The librarian is at the desk. You need to find a history book, but the shelves are tall and crowded.',
      textTarget: 'Arrivi in una tranquilla biblioteca italiana un pomeriggio di martedì. Il bibliotecario è al banco. Hai bisogno di trovare un libro di storia, ma gli scaffali sono alti e affollati.',
      choices: [
        { text: ' Whisper: "Dov\'è la sezione storia?"', textTarget: 'Dov\'è la sezione storia?', nextNodeId: 'ask-section' },
        { text: ' 🗂️ "Scusi, posso chiedere dove trovo la storia?"', textTarget: 'Scusi, posso chiedere dove trovo la storia?', nextNodeId: 'polite-ask' },
      ],
    },
    'ask-section': {
      id: 'ask-section',
      speaker: 'npc',
      text: '"Sussurri, per favore. La sezione storia è in fondo a destra." The librarian points silently.',
      textTarget: '"Sussurri, per favore. La sezione storia è in fondo a destra." Il bibliotecario indica silenziosamente.',
      backgroundEffect: 'neutral',
      choices: [
        { text: ' 📚 "Grazie! Cerco un libro su Roma." ', textTarget: 'Grazie! Cerco un libro su Roma.', nextNodeId: 'find-book' },
      ],
    },
    'polite-ask': {
      id: 'polite-ask',
      speaker: 'npc',
      text: '"La sezione storia è in fondo a destra. Sussurri, per favore." The librarian nods and gestures.',
      textTarget: '"La sezione storia è in fondo a destra. Sussurri, per favore." Il bibliotecario annuisce e indica.',
      backgroundEffect: 'neutral',
      choices: [
        { text: ' 📚 "Grazie! Cerco un libro su Roma." ', textTarget: 'Grazie! Cerco un libro su Roma.', nextNodeId: 'find-book' },
      ],
    },
    'find-book': {
      id: 'find-book',
      speaker: 'npc',
      text: '"Ecco, ma è in prestito." The librarian holds up a dusty book with a loan tag.',
      textTarget: '"Ecco, ma è in prestito." Il bibliotecario mostra un libro polveroso con un\'etichetta di prestito.',
      backgroundEffect: 'neutral',
      choices: [
        { text: ' 🔄 "Posso rinnovare il prestito?"', textTarget: 'Posso rinnovare il prestito?', nextNodeId: 'ask-renew' },
        { text: ' 📖 "Posso prenotarlo?"', textTarget: 'Posso prenotarlo?', nextNodeId: 'ask-reserve' },
      ],
    },
    'ask-renew': {
      id: 'ask-renew',
      speaker: 'npc',
      text: '"Sì, puoi rinnovare. Ma solo se non è in sospeso." The librarian checks a computer.',
      textTarget: '"Sì, puoi rinnovare. Ma solo se non è in sospeso." Il bibliotecario controlla un computer.',
      backgroundEffect: 'neutral',
      choices: [
        { text: ' ✅ "Grazie! Lo rinnovo." ', textTarget: 'Grazie! Lo rinnovo.', nextNodeId: 'end-good' },
        { text: ' ⚠️ "Non è in sospeso?" ', textTarget: 'Non è in sospeso?', nextNodeId: 'end-bad' },
      ],
    },
    'ask-reserve': {
      id: 'ask-reserve',
      speaker: 'npc',
      text: '"Puoi prenotarlo, ma devi aspettare due settimane." The librarian writes your name on a list.',
      textTarget: '"Puoi prenotarlo, ma devi aspettare due settimane." Il bibliotecario scrive il tuo nome su una lista.',
      backgroundEffect: 'neutral',
      choices: [
        { text: ' 📅 "Certo, aspetto." ', textTarget: 'Certo, aspetto.', nextNodeId: 'end-good' },
        { text: ' 😕 "Non posso aspettare." ', textTarget: 'Non posso aspettare.', nextNodeId: 'end-bad' },
      ],
    },
    'end-good': {
      id: 'end-good',
      speaker: 'narrator',
      text: '✅ You successfully secure the book. The librarian smiles and offers help with research.',
      textTarget: '✅ Riuscisci a ottenere il libro. Il bibliotecario sorride e ti offre aiuto per le ricerche.',
      choices: [
      ],
    },
    'end-bad': {
      id: 'end-bad',
      speaker: 'narrator',
      text: '⚠️ The librarian sighs. You\'ll need to return later or find an alternative source.',
      textTarget: '⚠️ Il bibliotecario sospira. Dovrai tornare più tardi o trovare un\'altra fonte.',
      choices: [
      ],
    },
  }
};

// ============================================
// BATHROOM — The Shared Bathroom
// ============================================

const bathroomScenario: BranchingScenario = {
  id: 'bathroom-morning-rush',
  roomId: 'bathroom',
  title: 'The Shared Bathroom',
  titleNative: 'Il Bagno Condiviso',
  timeContext: 'Monday morning rush',
  startNodeId: 'knock-door',
  culturalLesson: 'In shared Italian homes, bathroom time is negotiated politely. Being considerate builds household harmony.',
  phrasesLearned: [
    { target: 'Quanto ci metti?', source: 'How long will you be?', situation: 'Asking for bathroom' },
    { target: 'Puoi sbrigarti, per favore?', source: 'Can you hurry up, please?', situation: 'Running late' },
  ],
  catCharacter: { id: 'roommate-cat', name: 'Roommate', emoji: '🚿', color: '#3B82F6' },
  nodes: {
    'knock-door': {
      id: 'knock-door',
      speaker: 'narrator',
      text: 'It\'s Monday morning and you\'re late for work. Your roommate is in the bathroom. You knock politely.',
      textTarget: 'È lunedì mattina e sei in ritardo per il lavoro. Il tuo coinquilino è in bagno. Batti sulla porta educatamente.',
      choices: [
        { text: '❓ "Quanto ci metti?"', textTarget: 'Quanto ci metti?', nextNodeId: 'ask-time' },
        { text: '🏃 "Puoi sbrigarti, per favore?"', textTarget: 'Puoi sbrigarti, per favore?', nextNodeId: 'rush-request' },
        { text: '🚪 "Scusa, posso usare il bagno?"', textTarget: 'Scusa, posso usare il bagno?', nextNodeId: 'direct-access' },
      ],
    },
    'ask-time': {
      id: 'ask-time',
      speaker: 'npc',
      text: '"Devo finire le mie cose, ma non molto a lungo." Your roommate sighs, clearly in a hurry.',
      textTarget: '"Devo finire le mie cose, ma non molto a lungo." Il tuo coinquilino espira, chiaramente in fretta.',
      backgroundEffect: 'neutral',
      choices: [
        { text: '⏳ "Quando finisci?"', textTarget: 'Quando finisci?', nextNodeId: 'ask-finish' },
        { text: '🙏 "Scusa, devo andare."', textTarget: 'Scusa, devo andare.', nextNodeId: 'apologize-leave' },
      ],
    },
    'rush-request': {
      id: 'rush-request',
      speaker: 'npc',
      text: '"Non posso, devo finire il bagno!" Your roommate slams the door, leaving you stuck.',
      textTarget: '"Non posso, devo finire il bagno!" Il tuo coinquilino chiude la porta, lasciandoti bloccato.',
      backgroundEffect: 'angry',
      choices: [
        { text: '💭 "Scusa, non volevo disturbare."', textTarget: 'Scusa, non volevo disturbare.', nextNodeId: 'apologize-leave' },
        { text: '😤 "Non è colpa tua!"', textTarget: 'Non è colpa tua!', nextNodeId: 'end-hostile' },
      ],
    },
    'direct-access': {
      id: 'direct-access',
      speaker: 'npc',
      text: '"Non puoi, sto usando il bagno." Your roommate refuses, leaving you no choice but to wait.',
      textTarget: '"Non puoi, sto usando il bagno." Il tuo coinquilino rifiuta, lasciandoti senza scelta.',
      backgroundEffect: 'neutral',
      choices: [
        { text: '🤝 "C\'è un modo per risolvere questo?"', textTarget: 'C\'è un modo per risolvere questo?', nextNodeId: 'resolve-conflict' },
        { text: '😡 "Non ho tempo per aspettare!"', textTarget: 'Non ho tempo per aspettare!', nextNodeId: 'end-hostile' },
      ],
    },
    'ask-finish': {
      id: 'ask-finish',
      speaker: 'npc',
      text: '"Tra cinque minuti, promesso!" Your roommate agrees to let you in soon.',
      textTarget: '"Tra cinque minuti, promesso!" Il tuo coinquilino accetta di lasciarti entrare presto.',
      backgroundEffect: 'happy',
      choices: [
        { text: '✅ "Grazie, arrivo in tempo!"', textTarget: 'Grazie, arrivo in tempo!', nextNodeId: 'end-perfect' },
      ],
    },
    'apologize-leave': {
      id: 'apologize-leave',
      speaker: 'npc',
      text: '"Non preoccuparti, vai pure. Ti aspetto." Your roommate softens and lets you go.',
      textTarget: '"Non preoccuparti, vai pure. Ti aspetto." Il tuo coinquilino si tranquillizza e ti lascia andare.',
      backgroundEffect: 'happy',
      choices: [
        { text: '🚶 "Arrivederci!"', textTarget: 'Arrivederci!', nextNodeId: 'end-perfect' },
      ],
    },
    'resolve-conflict': {
      id: 'resolve-conflict',
      speaker: 'npc',
      text: '"Puoi aspettare fuori, ma non più di dieci minuti." Your roommate compromises.',
      textTarget: '"Puoi aspettare fuori, ma non più di dieci minuti." Il tuo coinquilino compromette.',
      backgroundEffect: 'neutral',
      choices: [
        { text: '👍 "D\'accordo, grazie!"', textTarget: 'D\'accordo, grazie!', nextNodeId: 'end-perfect' },
      ],
    },
    'end-perfect': {
      id: 'end-perfect',
      speaker: 'narrator',
      text: '✅ You negotiated politely and left on good terms.',
      textTarget: '✅ Hai negoziato educatamente e sei andato via con buone intenzioni.',
      choices: [
      ],
    },
    'end-hostile': {
      id: 'end-hostile',
      speaker: 'narrator',
      text: '⚠️ The situation escalated. Use polite phrases to avoid conflict.',
      textTarget: '⚠️ La situazione è esplosa. Usa frasi educative per evitare conflitti.',
      choices: [
      ],
    },
  }
};

// ============================================
// GALLERY — At the Gallery
// ============================================

const galleryScenario: BranchingScenario = {
  id: 'gallery-buying-ticket',
  roomId: 'gallery',
  title: 'At the Gallery',
  titleNative: 'In Galleria',
  timeContext: 'Saturday afternoon',
  startNodeId: 'enter-gallery',
  culturalLesson: 'Italian galleries often have discounts for students and EU citizens. Always ask. Free entry on first Sundays is common.',
  phrasesLearned: [
    { target: 'Quanto costa il biglietto?', source: 'How much is the ticket?', situation: 'Buying ticket' },
    { target: 'C\'è lo sconto per studenti?', source: 'Is there a student discount?', situation: 'Asking for discount' },
  ],
  catCharacter: { id: 'guide-cat', name: 'Guide', emoji: '🎨', color: '#EC4899' },
  nodes: {
    'enter-gallery': {
      id: 'enter-gallery',
      speaker: 'narrator',
      text: 'You arrive at a modern art gallery on a Saturday afternoon. The entrance has a ticket booth and a sign saying \'Free entry on first Sundays.\' A guide is nearby, but the ticket prices are unclear. You want to buy a ticket, ask about student discounts, and clarify a confusing artwork.',
      textTarget: 'Arrivi in una galleria d\'arte moderna un sabato pomeriggio. All\'ingresso c\'è un bancone per i biglietti e un cartello che dice \'Ingresso gratuito nei primi giorni della settimana.\' Un guida è vicino, ma i prezzi dei biglietti non sono chiari. Vuoi comprare un biglietto, chiedere uno sconto per studenti e chiarire un\'opera d\'arte confusa.',
      choices: [
        { text: '🎟️ "Quanto costa il biglietto?"', textTarget: 'Quanto costa il biglietto?', nextNodeId: 'ticket-price' },
        { text: '📚 "C\'è lo sconto per studenti?"', textTarget: 'C\'è lo sconto per studenti?', nextNodeId: 'discount-ask' },
        { text: '🖼️ "Scusi, posso chiedere qualcosa sull\'opera?"', textTarget: 'Scusi, posso chiedere qualcosa sull\'opera?', nextNodeId: 'artwork-ask' },
      ],
    },
    'ticket-price': {
      id: 'ticket-price',
      speaker: 'npc',
      text: '"Il biglietto costa 10 euro. Ma c\'è uno sconto per gli studenti e i cittadini UE." The ticket seller adds, "Per favore, mostrami il tuo documento."',
      textTarget: '"Il biglietto costa 10 euro. Ma c\'è uno sconto per gli studenti e i cittadini UE." Il venditore del biglietto aggiunge, "Per favore, mostrami il tuo documento."',
      backgroundEffect: 'neutral',
      choices: [
        { text: '📚 "C\'è lo sconto per studenti?"', textTarget: 'C\'è lo sconto per studenti?', nextNodeId: 'discount-ask' },
        { text: '🖼️ "Scusi, posso chiedere qualcosa sull\'opera?"', textTarget: 'Scusi, posso chiedere qualcosa sull\'opera?', nextNodeId: 'artwork-ask' },
      ],
    },
    'discount-ask': {
      id: 'discount-ask',
      speaker: 'npc',
      text: '"Sì, lo sconto è del 30% per studenti e cittadini UE. Mostrami il tuo documento, per favore."',
      textTarget: '"Sì, lo sconto è del 30% per studenti e cittadini UE. Mostrami il tuo documento, per favore."',
      backgroundEffect: 'happy',
      choices: [
        { text: '🖼️ "Scusi, posso chiedere qualcosa sull\'opera?"', textTarget: 'Scusi, posso chiedere qualcosa sull\'opera?', nextNodeId: 'artwork-ask' },
        { text: '🎟️ "Grazie, non ho bisogno dello sconto."', textTarget: 'Grazie, non ho bisogno dello sconto.', nextNodeId: 'end-good' },
      ],
    },
    'artwork-ask': {
      id: 'artwork-ask',
      speaker: 'npc',
      text: '"Questa opera è un\'installazione interattiva. I visitatori possono toccare le pareti per far brillare le luci." The guide smiles and points to the artwork.',
      textTarget: '"Questa opera è un\'installazione interattiva. I visitatori possono toccare le pareti per far brillare le luci." La guida sorride e indica l\'opera d\'arte.',
      backgroundEffect: 'happy',
      choices: [
        { text: '✅ "Grazie, ora capisco!"', textTarget: 'Grazie, ora capisco!', nextNodeId: 'end-perfect' },
        { text: '⚠️ "Non è chiaro. Puoi spiegarlo di nuovo?"', textTarget: 'Non è chiaro. Puoi spiegarlo di nuovo?', nextNodeId: 'end-good' },
      ],
    },
    'end-perfect': {
      id: 'end-perfect',
      speaker: 'narrator',
      text: '✅ You bought the ticket, claimed the discount, and understood the artwork. Everything went smoothly!',
      textTarget: '✅ Hai comprato il biglietto, hai ottenuto lo sconto e hai capito l\'opera d\'arte. Tutto è andato liscio!',
      choices: [
      ],
    },
    'end-good': {
      id: 'end-good',
      speaker: 'narrator',
      text: '✅ You resolved the confusion and left the gallery with a better understanding.',
      textTarget: '✅ Hai risolto la confusione e sei uscito dalla galleria con una migliore comprensione.',
      choices: [
      ],
    },
    'end-hostile': {
      id: 'end-hostile',
      speaker: 'narrator',
      text: '⚠️ The guide became frustrated. Always ask politely and clarify your questions.',
      textTarget: '⚠️ La guida si è arrabbiata. Chiedi sempre con cortesia e chiarisci le tue domande.',
      choices: [
      ],
    },
  }
};

// ============================================
// ANIMALS — At the Pet Shop
// ============================================

const animalsScenario: BranchingScenario = {
  id: 'animals-pet-shop',
  roomId: 'animals',
  title: 'At the Pet Shop',
  titleNative: 'Nel Negozio di Animali',
  timeContext: 'Saturday morning',
  startNodeId: 'enter-shop',
  culturalLesson: 'Italians are very attached to pets. Asking thoughtful questions about an animal\'s needs shows you are a responsible owner.',
  phrasesLearned: [
    { target: 'Quanti anni ha questo cane?', source: 'How old is this dog?', situation: 'Asking about pet' },
    { target: 'Cosa mangia?', source: 'What does it eat?', situation: 'Asking about diet' },
  ],
  catCharacter: { id: 'shopkeeper-cat', name: 'Shopkeeper', emoji: '🐕', color: '#10B981' },
  nodes: {
    'enter-shop': {
      id: 'enter-shop',
      speaker: 'narrator',
      text: 'You enter a cozy pet shop on a Saturday morning. A friendly shopkeeper greets you. A golden retriever puppy is playing with a ball near the counter. You want to ask about the dog\'s age, diet, and temperament.',
      textTarget: 'Entri in un negozio di animali tranquillo una mattina di sabato. Un commesso gentile ti saluta. Un cucciolo di golden retriever sta giocando con una palla vicino al bancone. Vuoi chiedere informazioni sull\'età, l\'alimentazione e la temperanza del cane.',
      choices: [
        { text: '🐕 "Quanti anni ha questo cane?"', textTarget: 'Quanti anni ha questo cane?', nextNodeId: 'ask-age' },
        { text: '🍲 "Cosa mangia?"', textTarget: 'Cosa mangia?', nextNodeId: 'ask-diet' },
        { text: '💭 "Come è il carattere?"', textTarget: 'Come è il carattere?', nextNodeId: 'ask-temperament' },
      ],
    },
    'ask-age': {
      id: 'ask-age',
      speaker: 'npc',
      text: '"Questo cane ha 2 anni. È stato allevato in un ambiente sereno e ha un carattere dolce." The shopkeeper pauses, then adds, "Se sei serio nel prendere un cane, posso mostrarti il certificato di vaccinazione."',
      textTarget: '"Questo cane ha 2 anni. È stato allevato in un ambiente sereno e ha un carattere dolce." Il commesso fa una pausa, poi aggiunge: "Se sei serio nel prendere un cane, posso mostrarti il certificato di vaccinazione."',
      backgroundEffect: 'neutral',
      choices: [
        { text: '📄 "Posso vedere il certificato?"', textTarget: 'Posso vedere il certificato?', nextNodeId: 'show-docs' },
        { text: '❌ "Non mi interessa."', textTarget: 'Non mi interessa.', nextNodeId: 'end-dismissed' },
      ],
    },
    'ask-diet': {
      id: 'ask-diet',
      speaker: 'npc',
      text: '"Mangia un\'alimentazione bilanciata di crocchette specifiche per cani attivi. Beve sempre acqua fresca." The shopkeeper adds, "Se sei interessato, posso darti consigli su come addestrarlo."',
      textTarget: '"Mangia un\'alimentazione bilanciata di crocchette specifiche per cani attivi. Beve sempre acqua fresca." Il commesso aggiunge: "Se sei interessato, posso darti consigli su come addestrarlo."',
      backgroundEffect: 'happy',
      choices: [
        { text: '🐾 "Posso avere il menu?"', textTarget: 'Posso avere il menu?', nextNodeId: 'get-menu' },
        { text: '⛔ "Non ho tempo."', textTarget: 'Non ho tempo.', nextNodeId: 'end-busy' },
      ],
    },
    'ask-temperament': {
      id: 'ask-temperament',
      speaker: 'npc',
      text: '"È molto socievole e adatto a famiglie. Tuttavia, richiede attenzione e spazio per giocare." The shopkeeper raises an eyebrow, "Se non sei pronto a dedicargli tempo, non è il cane giusto per te."',
      textTarget: '"È molto socievole e adatto a famiglie. Tuttavia, richiede attenzione e spazio per giocare." Il commesso alza un sopracciglio, "Se non sei pronto a dedicargli tempo, non è il cane giusto per te."',
      backgroundEffect: 'neutral',
      choices: [
        { text: '⏰ "Ho tempo e spazio."', textTarget: 'Ho tempo e spazio.', nextNodeId: 'commit-time' },
        { text: '🚶 "Non posso."', textTarget: 'Non posso.', nextNodeId: 'end-unavailable' },
      ],
    },
    'show-docs': {
      id: 'show-docs',
      speaker: 'npc',
      text: '"Ecco il certificato. Il cane è aggiornato sulle vaccinazioni e ha un comportamento tranquillo." The shopkeeper smiles, "Sei serio nel prendere un cane, quindi possiamo procedere."',
      textTarget: '"Ecco il certificato. Il cane è aggiornato sulle vaccinazioni e ha un comportamento tranquillo." Il commesso sorride, "Sei serio nel prendere un cane, quindi possiamo procedere."',
      backgroundEffect: 'happy',
      choices: [
        { text: '✅ "Grazie, lo prendo!"', textTarget: 'Grazie, lo prendo!', nextNodeId: 'end-success' },
      ],
    },
    'get-menu': {
      id: 'get-menu',
      speaker: 'npc',
      text: '"Ecco il menu: crocchette per cani attivi, frutta fresca, e un supplemento di omega-3." The shopkeeper adds, "Questo è il modo migliore per mantenere il cane in salute."',
      textTarget: '"Ecco il menu: crocchette per cani attivi, frutta fresca, e un supplemento di omega-3." Il commesso aggiunge: "Questo è il modo migliore per mantenere il cane in salute."',
      backgroundEffect: 'happy',
      choices: [
        { text: '✅ "Tutto chiaro, grazie!"', textTarget: 'Tutto chiaro, grazie!', nextNodeId: 'end-success' },
      ],
    },
    'commit-time': {
      id: 'commit-time',
      speaker: 'npc',
      text: '"Bravo! Questo cane è perfetto per te. Possiamo portarlo a casa oggi." The shopkeeper hands you a collar, "Fai buon viaggio con il tuo nuovo amico!"',
      textTarget: '"Bravo! Questo cane è perfetto per te. Possiamo portarlo a casa oggi." Il commesso ti dà una collare, "Fai buon viaggio con il tuo nuovo amico!"',
      backgroundEffect: 'happy',
      choices: [
        { text: '✅ "Grazie, arrivo!"', textTarget: 'Grazie, arrivo!', nextNodeId: 'end-success' },
      ],
    },
    'end-success': {
      id: 'end-success',
      speaker: 'narrator',
      text: '✅ You found a responsible pet and made a great choice!',
      textTarget: '✅ Hai trovato un animale responsabile e fatto una grande scelta!',
      choices: [
      ],
    },
    'end-dismissed': {
      id: 'end-dismissed',
      speaker: 'narrator',
      text: '⚠️ The shopkeeper walks away. Show genuine interest to build trust.',
      textTarget: '⚠️ Il commesso si allontana. Mostra interesse sincero per guadagnare fiducia.',
      choices: [
      ],
    },
    'end-busy': {
      id: 'end-busy',
      speaker: 'narrator',
      text: '⚠️ The shopkeeper sighs. Be ready to commit before asking questions.',
      textTarget: '⚠️ Il commesso espira. Sii pronto a impegnarti prima di chiedere informazioni.',
      choices: [
      ],
    },
    'end-unavailable': {
      id: 'end-unavailable',
      speaker: 'narrator',
      text: '⚠️ The shopkeeper shakes their head. Find someone who can commit to a pet.',
      textTarget: '⚠️ Il commesso scuote la testa. Trova qualcuno che possa impegnarsi con un animale.',
      choices: [
      ],
    },
  }
};

// ============================================
// WEATHER — Checking the Forecast
// ============================================

const weatherScenario: BranchingScenario = {
  id: 'weather-small-talk',
  roomId: 'weather',
  title: 'Checking the Forecast',
  titleNative: 'Controllare le Previsioni',
  timeContext: 'Before leaving the house',
  startNodeId: 'meet-neighbor',
  culturalLesson: 'Weather is the ultimate Italian small talk opener. Everyone has an opinion and joining in makes you seem local.',
  phrasesLearned: [
    { target: 'Pioverà oggi?', source: 'Will it rain today?', situation: 'Asking about rain' },
    { target: 'Che caldo che fa!', source: 'It is so hot!', situation: 'Commenting on heat' },
    { target: 'Meglio portare l\'ombrello.', source: 'Better bring an umbrella.', situation: 'Giving advice' },
  ],
  catCharacter: { id: 'neighbor-cat', name: 'Signora Rosa', emoji: '🌦️', color: '#6366F1' },
  nodes: {
    'meet-neighbor': {
      id: 'meet-neighbor',
      speaker: 'narrator',
      text: 'You bump into Signora Rosa at the front door. She glances at the sky and sighs dramatically.',
      textTarget: 'Incontri la Signora Rosa davanti alla porta. Guarda il cielo e sospira drammaticamente.',
      choices: [
        { text: '🌧️ Ask: \'Pioverà oggi, signora?\'', textTarget: 'Pioverà oggi, signora?', nextNodeId: 'opens-up' },
        { text: '☀️ Comment: \'Che bel sole stamattina!\'', textTarget: 'Che bel sole stamattina!', nextNodeId: 'disagrees' },
      ],
    },
    'opens-up': {
      id: 'opens-up',
      speaker: 'npc',
      text: '\'Eh, sicuro piove! Lo dicono le previsioni e lo sento nelle ossa.\' She settles in for a full weather analysis.',
      textTarget: '\'Eh, sicuro piove! Lo dicono le previsioni e lo sento nelle ossa.\' Si prepara per un\'analisi meteo completa.',
      backgroundEffect: 'happy',
      choices: [
        { text: '🌂 \'Meglio portare l\'ombrello, allora.\'', textTarget: 'Meglio portare l\'ombrello, allora.', nextNodeId: 'wisdom' },
        { text: '📱 \'Io ho guardato il telefono — dice sole.\'', textTarget: 'Io ho guardato il telefono — dice sole.', nextNodeId: 'offends' },
      ],
    },
    'disagrees': {
      id: 'disagrees',
      speaker: 'npc',
      text: '\'Sole?! Non lo vedi che è nuvoloso a ovest? Arriva il temporale!\' She looks offended by your optimism.',
      textTarget: '\'Sole?! Non lo vedi che è nuvoloso a ovest? Arriva il temporale!\' Sembra offesa dal tuo ottimismo.',
      backgroundEffect: 'neutral',
      choices: [
        { text: '💬 \'Ha ragione, meglio essere prudenti. Grazie!\'', textTarget: 'Ha ragione, meglio essere prudenti. Grazie!', nextNodeId: 'wisdom' },
      ],
    },
    'wisdom': {
      id: 'wisdom',
      speaker: 'npc',
      text: '\'Bravo/a! Mio marito non porta mai l\'ombrello e si lamenta sempre.\' She approves of your common sense.',
      textTarget: '\'Bravo/a! Mio marito non porta mai l\'ombrello e si lamenta sempre.\' Approva il tuo buon senso.',
      backgroundEffect: 'happy',
      choices: [
        { text: '😄 \'Che caldo che fa però, eh signora!\'', textTarget: 'Che caldo che fa però, eh signora!', nextNodeId: 'end-perfect' },
      ],
    },
    'offends': {
      id: 'offends',
      speaker: 'npc',
      text: '\'Il telefono! Ai miei tempi guardavamo il cielo!\' She shakes her head and goes back inside.',
      textTarget: '\'Il telefono! Ai miei tempi guardavamo il cielo!\' Scuote la testa ed entra.',
      backgroundEffect: 'angry',
      choices: [
        { text: '💬 \'Scusi, ha ragione. Confido nella sua esperienza!\'', textTarget: 'Scusi, ha ragione. Confido nella sua esperienza!', nextNodeId: 'end-good' },
      ],
    },
    'end-perfect': {
      id: 'end-perfect',
      speaker: 'narrator',
      text: '✅ Perfect small talk. You agreed, validated her wisdom, and threw in your own comment. Signora Rosa will greet you warmly for weeks.',
      textTarget: '✅ Piccolo talk perfetto. Hai concordato, valorizzato la sua saggezza e aggiunto il tuo commento. La Signora Rosa ti saluterà calorosamente per settimane.',
      choices: [
      ],
    },
    'end-good': {
      id: 'end-good',
      speaker: 'narrator',
      text: '✅ Good recovery. Deferring to a neighbour\'s experience is always the right move in Italian small talk.',
      textTarget: '✅ Buona ripresa. Affidarsi all\'esperienza di un vicino è sempre la mossa giusta nel piccolo talk italiano.',
      choices: [
      ],
    },
  }
};

// ============================================
// TOOLS — Borrowing Tools
// ============================================

const toolsScenario: BranchingScenario = {
  id: 'tools-borrowing',
  roomId: 'tools',
  title: 'Borrowing Tools',
  titleNative: 'Prendere in Prestito degli Attrezzi',
  timeContext: 'Saturday DIY project',
  startNodeId: 'knock-neighbor',
  culturalLesson: 'Italian neighbours lend tools freely but expect them back the same day in good condition. Return with a small thank-you.',
  phrasesLearned: [
    { target: 'Mi presti il cacciavite?', source: 'Can you lend me the screwdriver?', situation: 'Borrowing' },
    { target: 'Te lo riporto subito.', source: 'I will bring it back right away.', situation: 'Promising to return' },
    { target: 'Mi dispiace, l\'ho graffiato un po\'.', source: 'I\'m sorry, I scratched it a little.', situation: 'Confessing damage' },
  ],
  catCharacter: { id: 'neighbor-cat', name: 'Giorgio', emoji: '🔧', color: '#A16207' },
  nodes: {
    'knock-neighbor': {
      id: 'knock-neighbor',
      speaker: 'narrator',
      text: 'You knock on Giorgio\'s door. He answers in his work clothes — he was also doing DIY. You need his screwdriver.',
      textTarget: 'Bussi alla porta di Giorgio. Apre in abiti da lavoro — stava anche lui facendo lavori in casa. Hai bisogno del suo cacciavite.',
      choices: [
        { text: '💬 \'Ciao Giorgio, mi presti il cacciavite?\'', textTarget: 'Ciao Giorgio, mi presti il cacciavite?', nextNodeId: 'lends-it' },
        { text: '😅 \'Ho bisogno di tutto il tuo kit — cacciavite, martello, tutto!\'', textTarget: 'Ho bisogno di tutto il tuo kit!', nextNodeId: 'too-much' },
      ],
    },
    'lends-it': {
      id: 'lends-it',
      speaker: 'npc',
      text: '\'Certo! Ma portamelo prima di sera, eh?\' Giorgio hands it over. A clear agreement: back by evening.',
      textTarget: '\'Certo! Ma portamelo prima di sera, eh?\' Giorgio te lo consegna. Accordo chiaro: restituiscilo entro sera.',
      backgroundEffect: 'happy',
      choices: [
        { text: '👍 \'Te lo riporto subito, grazie mille!\'', textTarget: 'Te lo riporto subito, grazie mille!', nextNodeId: 'accidentally-scratch' },
      ],
    },
    'too-much': {
      id: 'too-much',
      speaker: 'npc',
      text: '\'Eh, tutto?! Sto lavorando anch\'io!\' Giorgio looks put out. Asking for too much at once is bad form.',
      textTarget: '\'Eh, tutto?! Sto lavorando anch\'io!\' Giorgio sembra infastidito. Chiedere troppo in una volta sola è scortese.',
      backgroundEffect: 'neutral',
      choices: [
        { text: '💬 \'Scusa, solo il cacciavite allora. Mi presti quello?\'', textTarget: 'Scusa, solo il cacciavite allora. Mi presti quello?', nextNodeId: 'lends-it' },
      ],
    },
    'accidentally-scratch': {
      id: 'accidentally-scratch',
      speaker: 'narrator',
      text: 'You drop the screwdriver on tiles and it gets a small scratch on the handle. You return to Giorgio\'s door.',
      textTarget: 'Fai cadere il cacciavite sulle piastrelle e il manico si graffia un po\'. Torni alla porta di Giorgio.',
      choices: [
        { text: '😬 Say nothing — it\'s just a small scratch', textTarget: 'Eccolo, grazie.', nextNodeId: 'end-bad' },
        { text: '💬 \'Mi dispiace, l\'ho graffiato un po\'. Te lo faccio sostituire.\'', textTarget: 'Mi dispiace, l\'ho graffiato un po\'. Te lo faccio sostituire.', nextNodeId: 'end-perfect' },
      ],
    },
    'end-perfect': {
      id: 'end-perfect',
      speaker: 'npc',
      text: '\'Ma no, dai, è solo un graffio!\' Giorgio waves it off but remembers your honesty. You have a reliable neighbour relationship.',
      textTarget: '\'Ma no, dai, è solo un graffio!\' Giorgio lascia perdere ma ricorda la tua onestà. Avete un rapporto di vicinato affidabile.',
      backgroundEffect: 'happy',
      choices: [
      ],
    },
    'end-bad': {
      id: 'end-bad',
      speaker: 'narrator',
      text: '⚠️ Giorgio notices the scratch next time he uses it. Small dishonesty damages trust with Italian neighbours permanently.',
      textTarget: '⚠️ Giorgio nota il graffio la prossima volta che lo usa. La piccola disonestà danneggia la fiducia con i vicini italiani in modo permanente.',
      choices: [
      ],
    },
  }
};

// ============================================
// ACTIONS — At the Gym
// ============================================

const actionsScenario: BranchingScenario = {
  id: 'actions-gym',
  roomId: 'actions',
  title: 'At the Gym',
  titleNative: 'In Palestra',
  timeContext: 'After work, 7 PM',
  startNodeId: 'enter-gym',
  culturalLesson: 'Italian gyms are social. Asking to work in on a machine is polite and normal. Offering to share builds friendships.',
  phrasesLearned: [
    { target: 'Quante serie ti mancano?', source: 'How many sets do you have left?', situation: 'Asking to share machine' },
    { target: 'Posso lavorare insieme a te?', source: 'Can I work in with you?', situation: 'Sharing equipment' },
  ],
  catCharacter: { id: 'gym-cat', name: 'Trainer', emoji: '🏋️', color: '#F59E0B' },
  nodes: {
    'enter-gym': {
      id: 'enter-gym',
      speaker: 'narrator',
      text: 'You arrive at the gym after work. The bench press is occupied. A man is lifting weights. You want to ask if you can use it. A trainer approaches, noticing your form.',
      textTarget: 'Arrivi in palestra dopo il lavoro. Il banco è occupato. Un uomo sta sollevando pesi. Vuoi chiedere se puoi usarlo. Un allenatore si avvicina, notando la tua forma.',
      choices: [
        { text: '🙋‍♂️ "Posso lavorare insieme a te?"', textTarget: 'Posso lavorare insieme a te?', nextNodeId: 'offer-share' },
        { text: '🤔 "Quante serie ti mancano?"', textTarget: 'Quante serie ti mancano?', nextNodeId: 'ask-series' },
        { text: '👀 "Scusa, non ti disturbo?"', textTarget: 'Scusa, non ti disturbo?', nextNodeId: 'polite-check' },
      ],
    },
    'offer-share': {
      id: 'offer-share',
      speaker: 'npc',
      text: '"Certo, ma non ti preoccupare. Io finisco tra cinque minuti." The man moves to a different machine. You get on the bench.',
      textTarget: '"Certo, ma non ti preoccupare. Io finisco tra cinque minuti." L\'uomo si sposta su un altro macchinario. Tu ti siedi sul banco.',
      backgroundEffect: 'happy',
      choices: [
        { text: '🏋️‍♀️ "Quante serie ti mancano?"', textTarget: 'Quante serie ti mancano?', nextNodeId: 'ask-series' },
        { text: '💪 "Vado subito, grazie!"', textTarget: 'Vado subito, grazie!', nextNodeId: 'end-good' },
      ],
    },
    'ask-series': {
      id: 'ask-series',
      speaker: 'npc',
      text: '"Due serie, poi finisco. Hai spazio per un paio di ripetizioni?" The man gestures to the empty spots on the bench.',
      textTarget: '"Due serie, poi finisco. Hai spazio per un paio di ripetizioni?" L\'uomo indica gli spazi vuoti sul banco.',
      backgroundEffect: 'neutral',
      choices: [
        { text: '🤝 "Certo, grazie!"', textTarget: 'Certo, grazie!', nextNodeId: 'end-good' },
        { text: '😅 "Non ti preoccupare, io finisco presto."', textTarget: 'Non ti preoccupare, io finisco presto.', nextNodeId: 'end-good' },
      ],
    },
    'polite-check': {
      id: 'polite-check',
      speaker: 'npc',
      text: '"No, non ti disturbo. Vai pure." The man waves you in. A trainer approaches, observing your movements.',
      textTarget: '"No, non ti disturbo. Vai pure." L\'uomo ti fa segno di entrare. Un allenatore si avvicina, osservando i tuoi movimenti.',
      backgroundEffect: 'neutral',
      choices: [
        { text: '🧘‍♂️ "Scusa, non so se faccio bene."', textTarget: 'Scusa, non so se faccio bene.', nextNodeId: 'trainer-advice' },
        { text: '👊 "Non preoccuparti, sto bene."', textTarget: 'Non preoccuparti, sto bene.', nextNodeId: 'end-good' },
      ],
    },
    'trainer-advice': {
      id: 'trainer-advice',
      speaker: 'npc',
      text: '"Il tuo form è buono, ma puoi spostare il peso più in alto." The trainer demonstrates the movement. You consider their suggestion.',
      textTarget: '"Il tuo form è buono, ma puoi spostare il peso più in alto." L\'allenatore dimostra il movimento. Tu consideri la loro suggerimento.',
      backgroundEffect: 'neutral',
      choices: [
        { text: '✅ "Grazie, lo farò!"', textTarget: 'Grazie, lo farò!', nextNodeId: 'end-good' },
        { text: '❌ "Non mi serve aiuto."', textTarget: 'Non mi serve aiuto.', nextNodeId: 'end-neutral' },
      ],
    },
    'end-good': {
      id: 'end-good',
      speaker: 'narrator',
      text: '✅ You built a friendly rapport and worked out successfully.',
      textTarget: '✅ Hai creato un rapporto amichevole e hai fatto bene l\'esercizio.',
      choices: [
      ],
    },
    'end-neutral': {
      id: 'end-neutral',
      speaker: 'narrator',
      text: '⚠️ The trainer offered helpful advice, but you declined. Consider being open to feedback.',
      textTarget: '⚠️ L\'allenatore ha dato un consiglio utile, ma tu hai rifiutato. Considera di essere aperto ai feedback.',
      choices: [
      ],
    },
  }
};

// ============================================
// EMOTIONS — A Friend in Need
// ============================================

const emotionsScenario: BranchingScenario = {
  id: 'emotions-friend-support',
  roomId: 'emotions',
  title: 'A Friend in Need',
  titleNative: 'Un Amico in Difficoltà',
  timeContext: 'Evening phone call',
  startNodeId: 'phone-rings',
  culturalLesson: 'Italians express emotions openly and expect empathy, not just solutions. Listen and validate feelings first.',
  phrasesLearned: [
    { target: 'Come stai davvero?', source: 'How are you really doing?', situation: 'Genuine concern' },
    { target: 'Ci sono per te.', source: 'I am here for you.', situation: 'Offering support' },
    { target: 'Ti capisco.', source: 'I understand you.', situation: 'Showing empathy' },
  ],
  catCharacter: { id: 'friend-cat', name: 'Marco', emoji: '💙', color: '#EC4899' },
  nodes: {
    'phone-rings': {
      id: 'phone-rings',
      speaker: 'narrator',
      text: 'Your phone rings at 9 PM. It is Marco — he sounds tired and flat. You can tell something is wrong.',
      textTarget: 'Il telefono squilla alle 21. È Marco — sembra stanco e piatto. Capisci che qualcosa non va.',
      choices: [
        { text: '💬 \'Ciao Marco, come stai davvero?\'', textTarget: 'Ciao Marco, come stai davvero?', nextNodeId: 'opens-up' },
        { text: '📋 \'Ciao, tutto bene? Veloce, sto guardando un film.\'', textTarget: 'Ciao, tutto bene? Sono un po\' occupato.', nextNodeId: 'shuts-down' },
      ],
    },
    'opens-up': {
      id: 'opens-up',
      speaker: 'npc',
      text: '\'Eh... ho litigato con Giulia. È una settimana che non ci parliamo.\' He sighs heavily.',
      textTarget: '\'Eh... ho litigato con Giulia. È una settimana che non ci parliamo.\' Sospira pesantemente.',
      backgroundEffect: 'neutral',
      choices: [
        { text: '💙 \'Ti capisco. Dev\'essere difficile. Cosa è successo?\'', textTarget: 'Ti capisco. Dev\'essere difficile.', nextNodeId: 'listens-well' },
        { text: '💡 \'Devi chiamarla subito e scusarti — funziona sempre.\'', textTarget: 'Chiamala subito e scusati — funziona sempre.', nextNodeId: 'too-fast' },
      ],
    },
    'shuts-down': {
      id: 'shuts-down',
      speaker: 'npc',
      text: '\'Ah, niente, lascia stare.\' Marco goes quiet. He needed to talk and you closed the door.',
      textTarget: '\'Ah, niente, lascia stare.\' Marco si zittisce. Aveva bisogno di parlare e tu hai chiuso la porta.',
      backgroundEffect: 'angry',
      choices: [
        { text: '💬 \'Aspetta, Marco — ci sono per te. Dimmi tutto.\'', textTarget: 'Aspetta, Marco — ci sono per te. Dimmi tutto.', nextNodeId: 'opens-up' },
      ],
    },
    'listens-well': {
      id: 'listens-well',
      speaker: 'npc',
      text: 'Marco talks for twenty minutes. You listen without interrupting. By the end he says: \'Grazie, mi ha fatto bene parlarne.\'',
      textTarget: 'Marco parla per venti minuti. Ascolti senza interrompere. Alla fine dice: \'Grazie, mi ha fatto bene parlarne.\'',
      backgroundEffect: 'happy',
      choices: [
        { text: '💙 \'Ci sono per te, sempre. In bocca al lupo.\'', textTarget: 'Ci sono per te, sempre. In bocca al lupo.', nextNodeId: 'end-perfect' },
      ],
    },
    'too-fast': {
      id: 'too-fast',
      speaker: 'npc',
      text: '\'Non è così semplice...\' Marco sounds deflated. Jumping to solutions before listening signals you are not really present.',
      textTarget: '\'Non è così semplice...\' Marco sembra deluso. Saltare alle soluzioni prima di ascoltare segnala che non sei davvero presente.',
      backgroundEffect: 'neutral',
      choices: [
        { text: '💬 \'Hai ragione, scusa. Raccontami — ti ascolto.\'', textTarget: 'Hai ragione, scusa. Raccontami — ti ascolto.', nextNodeId: 'listens-well' },
      ],
    },
    'end-perfect': {
      id: 'end-perfect',
      speaker: 'narrator',
      text: '✅ You gave Marco what he needed — a listening ear, not a lecture. In Italian culture, emotional presence is worth more than advice.',
      textTarget: '✅ Hai dato a Marco quello di cui aveva bisogno — un orecchio attento, non una lezione. Nella cultura italiana, la presenza emotiva vale più dei consigli.',
      choices: [
      ],
    },
  }
};

// ============================================
// FARM — At the Market
// ============================================

const farmScenario: BranchingScenario = {
  id: 'farm-market',
  roomId: 'farm',
  title: 'At the Market',
  titleNative: 'Al Mercato',
  timeContext: 'Saturday morning',
  startNodeId: 'approach-stall',
  culturalLesson: 'Italian markets reward regulars with better produce and prices. Chatting with the vendor, touching fruit correctly, and haggling gently is expected.',
  phrasesLearned: [
    { target: 'Quanto costa un chilo di pomodori?', source: 'How much for a kilo of tomatoes?', situation: 'Asking price' },
    { target: 'Sono freschi di oggi?', source: 'Are they fresh from today?', situation: 'Checking freshness' },
  ],
  catCharacter: { id: 'vendor-cat', name: 'Vendor', emoji: '🍅', color: '#22C55E' },
  nodes: {
    'approach-stall': {
      id: 'approach-stall',
      speaker: 'narrator',
      text: 'You approach a vibrant fruit and cheese stall at the Saturday market. The vendor, Nonna Rosa, greets you with a smile. She offers a discount if you prove you know how to choose good tomatoes.',
      textTarget: 'Avvicinarti a un vivace stand di frutta e formaggio al mercato sabato mattina. Il venditore, Nonna Rosa, ti saluta con un sorriso. Offre uno sconto se dimostri di sapere come scegliere i pomodori buoni.',
      choices: [
        { text: '🍅 "Quanto costa un chilo di pomodori?"', textTarget: 'Quanto costa un chilo di pomodori?', nextNodeId: 'ask-price' },
        { text: '🍓 "Sono freschi di oggi?"', textTarget: 'Sono freschi di oggi?', nextNodeId: 'check-freshness' },
        { text: '👋 "Ciao, Nonna Rosa!"', textTarget: 'Ciao, Nonna Rosa!', nextNodeId: 'greet-vendor' },
      ],
    },
    'ask-price': {
      id: 'ask-price',
      speaker: 'npc',
      text: '"Un chilo di pomodori è 3 euro." Nonna Rosa taps a tomato. "Ma prima, dimmi: come sai scegliere i buoni?"',
      textTarget: '"Un chilo di pomodori è 3 euro." Nonna Rosa tocca un pomodoro. "Ma prima, dimmi: come sai scegliere i buoni?"',
      choices: [
        { text: '🍅 "Guardo la forma e tocco delicatamente."', textTarget: 'Guardo la forma e tocco delicatamente.', nextNodeId: 'correct-answer' },
        { text: '🥄 "Li scelgo a caso."', textTarget: 'Li scelgo a caso.', nextNodeId: 'wrong-answer' },
      ],
    },
    'check-freshness': {
      id: 'check-freshness',
      speaker: 'npc',
      text: '"Sì, sono freschi! Ma non è sufficiente chiedere. Dimmi come sai distinguere i buoni." Nonna Rosa picks a tomato and holds it up.',
      textTarget: '"Sì, sono freschi! Ma non è sufficiente chiedere. Dimmi come sai distinguere i buoni." Nonna Rosa sceglie un pomodoro e lo mostra.',
      choices: [
        { text: '🍅 "Sono morbidi al tatto e hanno una bella colorazione."', textTarget: 'Sono morbidi al tatto e hanno una bella colorazione.', nextNodeId: 'correct-answer' },
        { text: '🥄 "Li scelgo solo per la forma."', textTarget: 'Li scelgo solo per la forma.', nextNodeId: 'wrong-answer' },
      ],
    },
    'greet-vendor': {
      id: 'greet-vendor',
      speaker: 'npc',
      text: '"Ah, sei tu! Hai un aspetto familiare. Vuoi provare i miei pomodori?" Nonna Rosa offers a tomato with a wink.',
      textTarget: '"Ah, sei tu! Hai un aspetto familiare. Vuoi provare i miei pomodori?" Nonna Rosa offre un pomodoro con un sorriso.',
      choices: [
        { text: '🍅 "Sì, grazie!"', textTarget: 'Sì, grazie!', nextNodeId: 'accept-offer' },
        { text: '🥄 "Non oggi, grazie."', textTarget: 'Non oggi, grazie.', nextNodeId: 'decline-offer' },
      ],
    },
    'correct-answer': {
      id: 'correct-answer',
      speaker: 'npc',
      text: '"Bravo! Ti do uno sconto. Vuoi anche del formaggio?" Nonna Rosa smiles and offers a wedge of pecorino.',
      textTarget: '"Bravo! Ti do uno sconto. Vuoi anche del formaggio?" Nonna Rosa sorride e offre un pezzo di pecorino.',
      choices: [
        { text: '🧀 "Sì, un pezzo di pecorino, per favore!"', textTarget: 'Sì, un pezzo di pecorino, per favore!', nextNodeId: 'end-good' },
        { text: '🥄 "No, grazie."', textTarget: 'No, grazie.', nextNodeId: 'end-good' },
      ],
    },
    'wrong-answer': {
      id: 'wrong-answer',
      speaker: 'npc',
      text: '"Purtroppo non posso darti lo sconto. Riprova domenica, forse sarai più bravo." Nonna Rosa turns away, muttering about \'incompetent buyers\'.',
      textTarget: '"Purtroppo non posso darti lo sconto. Riprova domenica, forse sarai più bravo." Nonna Rosa si allontana, mormorando su \'clienti incompetenti\'.',
      choices: [
        { text: '🍅 "Scusa, non sapevo."', textTarget: 'Scusa, non sapevo.', nextNodeId: 'end-neutral' },
        { text: '🥄 "Non preoccuparti."', textTarget: 'Non preoccuparti.', nextNodeId: 'end-neutral' },
      ],
    },
    'accept-offer': {
      id: 'accept-offer',
      speaker: 'npc',
      text: '"Ecco, prova questo! È il migliore della settimana." Nonna Rosa hands you a tomato. The vendor\'s eyes sparkle.',
      textTarget: '"Ecco, prova questo! È il migliore della settimana." Nonna Rosa ti dà un pomodoro. I suoi occhi brillano.',
      choices: [
        { text: '🍅 "Grazie! È ottimo!"', textTarget: 'Grazie! È ottimo!', nextNodeId: 'end-good' },
        { text: '🥄 "È buono, ma non ne prendo."', textTarget: 'È buono, ma non ne prendo.', nextNodeId: 'end-neutral' },
      ],
    },
    'decline-offer': {
      id: 'decline-offer',
      speaker: 'npc',
      text: '"Ah, non è un problema. Ma ricorda: i clienti regolari ricevono trattamenti speciali." Nonna Rosa nods and returns to her stall.',
      textTarget: '"Ah, non è un problema. Ma ricorda: i clienti regolari ricevono trattamenti speciali." Nonna Rosa annuisce e torna al suo stand.',
      choices: [
        { text: '👋 "Arrivederci, Nonna Rosa!"', textTarget: 'Arrivederci, Nonna Rosa!', nextNodeId: 'end-good' },
        { text: '🥄 "Ciao!"', textTarget: 'Ciao!', nextNodeId: 'end-neutral' },
      ],
    },
    'end-good': {
      id: 'end-good',
      speaker: 'narrator',
      text: '✅ You secured a discount and made a friendly connection. Buon mercato!',
      textTarget: '✅ Hai ottenuto uno sconto e hai creato una connessione amichevole. Buon mercato!',
      choices: [
      ],
    },
    'end-neutral': {
      id: 'end-neutral',
      speaker: 'narrator',
      text: '⚠️ The vendor remains neutral. Practice more to build rapport at the market.',
      textTarget: '⚠️ Il venditore rimane neutrale. Pratica di più per costruire relazioni al mercato.',
      choices: [
      ],
    },
  }
};

// ============================================
// FANTASY — The Bookstore
// ============================================

const fantasyScenario: BranchingScenario = {
  id: 'fantasy-bookstore',
  roomId: 'fantasy',
  title: 'The Bookstore',
  titleNative: 'In Libreria',
  timeContext: 'Rainy afternoon',
  startNodeId: 'enter-bookstore',
  culturalLesson: 'Italian bookstores are cultural hubs. Ask for a recommendation to spark a real conversation — booksellers are proud of their taste.',
  phrasesLearned: [
    { target: 'Mi consiglia un bel romanzo?', source: 'Can you recommend a good novel?', situation: 'Asking for recommendation' },
    { target: 'Di che parla?', source: 'What is it about?', situation: 'Asking about a book' },
    { target: 'Lo prendo, grazie.', source: 'I will take it, thank you.', situation: 'Buying' },
  ],
  catCharacter: { id: 'bookseller-cat', name: 'Libraio', emoji: '📖', color: '#8B5CF6' },
  nodes: {
    'enter-bookstore': {
      id: 'enter-bookstore',
      speaker: 'narrator',
      text: 'You push open the door of a small Italian bookshop on a rainy afternoon. The bookseller looks up from behind a towering stack of novels.',
      textTarget: 'Spingi la porta di una piccola libreria italiana un pomeriggio di pioggia. Il libraio alza lo sguardo da dietro una torre di romanzi.',
      choices: [
        { text: '💬 \'Buongiorno! Mi consiglia un bel romanzo?\'', textTarget: 'Buongiorno! Mi consiglia un bel romanzo?', nextNodeId: 'recommends' },
        { text: '📱 Browse silently on your phone for a bestseller list', textTarget: 'Guarda il telefono in silenzio.', nextNodeId: 'ignores-you' },
      ],
    },
    'recommends': {
      id: 'recommends',
      speaker: 'npc',
      text: 'The bookseller\'s eyes light up. \'Ha letto Pavese? No? Allora iniziamo da lì.\' He reaches confidently for a worn copy of \'La luna e i falò\'.',
      textTarget: '\'Ha letto Pavese? No? Allora iniziamo da lì.\' Il libraio prende con sicurezza una copia consumata di La luna e i falò.',
      backgroundEffect: 'happy',
      choices: [
        { text: '🤔 \'Di che parla?\'', textTarget: 'Di che parla?', nextNodeId: 'explains' },
        { text: '😬 \'Preferirei qualcosa di più moderno — tipo Ferrante?\'', textTarget: 'Preferirei qualcosa di più moderno — tipo Ferrante?', nextNodeId: 'debates' },
      ],
    },
    'ignores-you': {
      id: 'ignores-you',
      speaker: 'npc',
      text: 'The bookseller watches you scroll without a word. In a small Italian bookstore, ignoring the bookseller is noticed.',
      textTarget: 'Il libraio ti guarda scorrere senza dire una parola. In una piccola libreria italiana, ignorare il libraio viene notato.',
      backgroundEffect: 'neutral',
      choices: [
        { text: '💬 Put phone away: \'Scusi, mi consiglia lei qualcosa?\'', textTarget: 'Scusi, mi consiglia lei qualcosa?', nextNodeId: 'recommends' },
      ],
    },
    'explains': {
      id: 'explains',
      speaker: 'npc',
      text: '\'È la storia di un uomo che torna al suo paese e capisce che non esiste più. Un libro che ti cambia.\' He is completely sincere.',
      textTarget: '\'È la storia di un uomo che torna al suo paese e capisce che non esiste più. Un libro che ti cambia.\' È completamente sincero.',
      backgroundEffect: 'happy',
      choices: [
        { text: '📚 \'Lo prendo, grazie! Ha un bel stile di scrittura?\'', textTarget: 'Lo prendo, grazie! Ha un bel stile di scrittura?', nextNodeId: 'end-perfect' },
        { text: '😕 \'Sembra un po\' triste... ne ha uno più allegro?\'', textTarget: 'Sembra un po\' triste... ne ha uno più allegro?', nextNodeId: 'redirects' },
      ],
    },
    'debates': {
      id: 'debates',
      speaker: 'npc',
      text: '\'Ferrante! Tutti Ferrante!\' He throws his hands up but then smiles. \'Va bene, ma legga Pavese dopo, promesso?\'',
      textTarget: '\'Ferrante! Tutti Ferrante!\' Alza le mani ma poi sorride. \'Va bene, ma legga Pavese dopo, promesso?\'',
      backgroundEffect: 'neutral',
      choices: [
        { text: '🤝 \'Promesso! Grazie mille.\'', textTarget: 'Promesso! Grazie mille.', nextNodeId: 'end-good' },
      ],
    },
    'redirects': {
      id: 'redirects',
      speaker: 'npc',
      text: '\'Allegro!\' He laughs and hands you a Camilleri Inspector Montalbano. \'Questo fa ridere e insegna la Sicilia.\'',
      textTarget: '\'Allegro!\' Ride e ti passa un Camilleri del Commissario Montalbano. \'Questo fa ridere e insegna la Sicilia.\'',
      backgroundEffect: 'happy',
      choices: [
        { text: '😄 \'Perfetto! Lo prendo, grazie.\'', textTarget: 'Perfetto! Lo prendo, grazie.', nextNodeId: 'end-perfect' },
      ],
    },
    'end-perfect': {
      id: 'end-perfect',
      speaker: 'narrator',
      text: '✅ You trusted the bookseller, asked the right questions, and walked out with a book you would never have found yourself. That is what Italian bookshops are for.',
      textTarget: '✅ Hai dato fiducia al libraio, fatto le domande giuste, e sei uscito con un libro che non avresti mai trovato da solo. È a questo che servono le librerie italiane.',
      choices: [
      ],
    },
    'end-good': {
      id: 'end-good',
      speaker: 'narrator',
      text: '✅ A small disagreement became a connection. Italian booksellers respect readers who know their own taste — as long as they stay open to discovery.',
      textTarget: '✅ Un piccolo disaccordo è diventato una connessione. I librai italiani rispettano i lettori che conoscono i propri gusti — purché rimangano aperti alla scoperta.',
      choices: [
      ],
    },
  }
};

export const branchingScenarios: BranchingScenario[] = [
  kitchenScenario,
  cafeScenario,
  supermarketScenario,
  bedroomScenario,
  transportScenario,
  livingRoomScenario,
  gardenScenario,
  entranceHallScenario,
  libraryScenario,
  bathroomScenario,
  galleryScenario,
  animalsScenario,
  weatherScenario,
  toolsScenario,
  actionsScenario,
  emotionsScenario,
  farmScenario,
  fantasyScenario,
];
