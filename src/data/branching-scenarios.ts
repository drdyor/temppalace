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
// TODO STUBS for remaining 12 rooms
// ============================================

const entranceHallStub: BranchingScenario = {
  id: 'entrance-hall-stub',
  roomId: 'entrance-hall',
  title: 'Meeting the Family',
  titleNative: 'Incontrare la Famiglia',
  timeContext: 'Sunday lunch',
  startNodeId: 'enter',
  culturalLesson: 'Italian family introductions are warm but formal at first. Always greet everyone individually.',
  phrasesLearned: [
    { target: 'Piacere di conoscerti.', source: 'Nice to meet you.', situation: 'Introduction' },
  ],
  catCharacter: { id: 'stub', name: 'Family', emoji: '👋', color: '#E7A04D' },
  nodes: {
    enter: { id: 'enter', speaker: 'narrator', text: 'TODO: Practical conversation scenario for entrance-hall.', choices: [] }
  }
};

const libraryStub: BranchingScenario = {
  id: 'library-stub',
  roomId: 'library',
  title: 'At the Library',
  titleNative: 'In Biblioteca',
  timeContext: 'Tuesday afternoon',
  startNodeId: 'enter',
  culturalLesson: 'Italian libraries are quiet spaces. Asking for help in a whisper is polite.',
  phrasesLearned: [
    { target: 'Dov\'è la sezione storia?', source: 'Where is the history section?', situation: 'Asking in library' },
  ],
  catCharacter: { id: 'stub', name: 'Librarian', emoji: '📚', color: '#8B5CF6' },
  nodes: {
    enter: { id: 'enter', speaker: 'narrator', text: 'TODO: Practical conversation scenario for library.', choices: [] }
  }
};

const bathroomStub: BranchingScenario = {
  id: 'bathroom-stub',
  roomId: 'bathroom',
  title: 'The Shared Bathroom',
  titleNative: 'Il Bagno Condiviso',
  timeContext: 'Morning rush',
  startNodeId: 'enter',
  culturalLesson: 'In shared Italian homes, bathroom time is negotiated, not claimed.',
  phrasesLearned: [
    { target: 'Quanto ci metti?', source: 'How long will you be?', situation: 'Asking about time' },
  ],
  catCharacter: { id: 'stub', name: 'Roommate', emoji: '🚿', color: '#3B82F6' },
  nodes: {
    enter: { id: 'enter', speaker: 'narrator', text: 'TODO: Practical conversation scenario for bathroom.', choices: [] }
  }
};

const galleryStub: BranchingScenario = {
  id: 'gallery-stub',
  roomId: 'gallery',
  title: 'At the Gallery',
  titleNative: 'In Galleria',
  timeContext: 'Saturday afternoon',
  startNodeId: 'enter',
  culturalLesson: 'Italian galleries often have free entry on first Sundays. Asking about discounts is normal.',
  phrasesLearned: [
    { target: 'Quanto costa il biglietto?', source: 'How much is the ticket?', situation: 'Asking price' },
  ],
  catCharacter: { id: 'stub', name: 'Guide', emoji: '🎨', color: '#EC4899' },
  nodes: {
    enter: { id: 'enter', speaker: 'narrator', text: 'TODO: Practical conversation scenario for gallery.', choices: [] }
  }
};

const animalsStub: BranchingScenario = {
  id: 'animals-stub',
  roomId: 'animals',
  title: 'At the Pet Shop',
  titleNative: 'Nel Negozio di Animali',
  timeContext: 'Saturday morning',
  startNodeId: 'enter',
  culturalLesson: 'Italians love their pets. Asking about an animal\'s age and diet shows you care.',
  phrasesLearned: [
    { target: 'Quanti anni ha questo cane?', source: 'How old is this dog?', situation: 'Asking about pet' },
  ],
  catCharacter: { id: 'stub', name: 'Shopkeeper', emoji: '🐕', color: '#10B981' },
  nodes: {
    enter: { id: 'enter', speaker: 'narrator', text: 'TODO: Practical conversation scenario for animals.', choices: [] }
  }
};

const weatherStub: BranchingScenario = {
  id: 'weather-stub',
  roomId: 'weather',
  title: 'Checking the Forecast',
  titleNative: 'Controllare le Previsioni',
  timeContext: 'Before leaving',
  startNodeId: 'enter',
  culturalLesson: 'Weather is the ultimate Italian small talk. Everyone has an opinion.',
  phrasesLearned: [
    { target: 'Pioverà oggi?', source: 'Will it rain today?', situation: 'Asking about rain' },
  ],
  catCharacter: { id: 'stub', name: 'Neighbor', emoji: '🌦️', color: '#6366F1' },
  nodes: {
    enter: { id: 'enter', speaker: 'narrator', text: 'TODO: Practical conversation scenario for weather.', choices: [] }
  }
};

const toolsStub: BranchingScenario = {
  id: 'tools-stub',
  roomId: 'tools',
  title: 'Borrowing Tools',
  titleNative: 'Prendere in Prestito degli Attrezzi',
  timeContext: 'Saturday DIY project',
  startNodeId: 'enter',
  culturalLesson: 'Italian neighbors often lend tools. Asking politely and returning them quickly builds trust.',
  phrasesLearned: [
    { target: 'Mi presti il cacciavite?', source: 'Can you lend me the screwdriver?', situation: 'Borrowing tool' },
  ],
  catCharacter: { id: 'stub', name: 'Neighbor', emoji: '🔧', color: '#A16207' },
  nodes: {
    enter: { id: 'enter', speaker: 'narrator', text: 'TODO: Practical conversation scenario for tools.', choices: [] }
  }
};

const actionsStub: BranchingScenario = {
  id: 'actions-stub',
  roomId: 'actions',
  title: 'At the Gym',
  titleNative: 'In Palestra',
  timeContext: 'After work',
  startNodeId: 'enter',
  culturalLesson: 'Italian gyms are social spaces. Asking to work in on a machine is normal.',
  phrasesLearned: [
    { target: 'Quante serie ti mancano?', source: 'How many sets do you have left?', situation: 'At the gym' },
  ],
  catCharacter: { id: 'stub', name: 'Trainer', emoji: '🏋️', color: '#F59E0B' },
  nodes: {
    enter: { id: 'enter', speaker: 'narrator', text: 'TODO: Practical conversation scenario for actions.', choices: [] }
  }
};

const emotionsStub: BranchingScenario = {
  id: 'emotions-stub',
  roomId: 'emotions',
  title: 'A Friend in Need',
  titleNative: 'Un Amico in Difficoltà',
  timeContext: 'Evening call',
  startNodeId: 'enter',
  culturalLesson: 'Italians express emotions openly. Asking "come stai?" and really listening matters.',
  phrasesLearned: [
    { target: 'Come stai?', source: 'How are you?', situation: 'Checking on friend' },
  ],
  catCharacter: { id: 'stub', name: 'Friend', emoji: '💙', color: '#EC4899' },
  nodes: {
    enter: { id: 'enter', speaker: 'narrator', text: 'TODO: Practical conversation scenario for emotions.', choices: [] }
  }
};

const farmStub: BranchingScenario = {
  id: 'farm-stub',
  roomId: 'farm',
  title: 'At the Market',
  titleNative: 'Al Mercato',
  timeContext: 'Saturday morning',
  startNodeId: 'enter',
  culturalLesson: 'Italian markets are about relationships. Regulars get the best produce and prices.',
  phrasesLearned: [
    { target: 'Quanto costa un chilo di pomodori?', source: 'How much is a kilo of tomatoes?', situation: 'At market' },
  ],
  catCharacter: { id: 'stub', name: 'Vendor', emoji: '🍅', color: '#22C55E' },
  nodes: {
    enter: { id: 'enter', speaker: 'narrator', text: 'TODO: Practical conversation scenario for farm.', choices: [] }
  }
};

const fantasyStub: BranchingScenario = {
  id: 'fantasy-stub',
  roomId: 'fantasy',
  title: 'The Bookstore',
  titleNative: 'In Libreria',
  timeContext: 'Rainy afternoon',
  startNodeId: 'enter',
  culturalLesson: 'Italian bookstores are cultural hubs. Asking for recommendations sparks real conversations.',
  phrasesLearned: [
    { target: 'Mi consiglia un bel romanzo?', source: 'Can you recommend a good novel?', situation: 'Asking recommendation' },
  ],
  catCharacter: { id: 'stub', name: 'Bookseller', emoji: '📖', color: '#8B5CF6' },
  nodes: {
    enter: { id: 'enter', speaker: 'narrator', text: 'TODO: Practical conversation scenario for fantasy.', choices: [] }
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
  entranceHallStub,
  libraryStub,
  bathroomStub,
  galleryStub,
  animalsStub,
  weatherStub,
  toolsStub,
  actionsStub,
  emotionsStub,
  farmStub,
  fantasyStub,
];
