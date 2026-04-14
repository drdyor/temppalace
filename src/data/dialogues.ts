// Role-Play Dialogues & Conversation Patterns
// Real situations, real patterns, real practice

export interface DialogueLine {
  speaker: 'A' | 'B' | string;
  italian: string;
  english: string;
  // What pattern this teaches
  pattern?: string;
  // Difficulty level
  level: 'beginner' | 'intermediate' | 'advanced';
  // Pronunciation hint
  tip?: string;
  // Strategic layer (for strategy dialogues)
  strategicLayer?: {
    hiddenAgenda: string;
    powerDynamic: 'superior' | 'inferior' | 'equal' | 'shifting' | string;
    emotionalState: string;
    lawOfPower?: string;
  };
}

export interface ConversationPattern {
  id: string;
  name: string;
  nameNative: string;
  // The reusable formula
  formula: string;
  examples: { italian: string; english: string }[];
  variations: string[];
  whenToUse: string;
}

export interface RolePlayScenario {
  id: string;
  roomId: string;
  title: string;
  titleNative: string;
  context: string;
  yourRole: string;
  partnerRole: string;
  goal: string;
  // The actual dialogue
  dialogue: DialogueLine[];
  // What patterns this teaches
  patterns: string[];
  // Alternative responses you could give
  alternatives: { situation: string; responses: string[] }[];
}

// ============================================
// CONVERSATION PATTERNS (The Building Blocks)
// ============================================

export const conversationPatterns: ConversationPattern[] = [
  // GREETINGS & OPENINGS
  {
    id: 'greeting-casual',
    name: 'Casual Greeting',
    nameNative: 'Saluto informale',
    formula: 'Ciao + [name]! Come va? / Tutto bene?',
    examples: [
      { italian: 'Ciao Marco! Come va?', english: 'Hi Marco! How\'s it going?' },
      { italian: 'Ehi Luisa! Tutto bene?', english: 'Hey Luisa! Everything good?' },
    ],
    variations: ['Come butta?', 'Come te la passi?', 'Tutto a posto?'],
    whenToUse: 'Friends, family, peers - informal situations',
  },
  {
    id: 'greeting-formal',
    name: 'Formal Greeting',
    nameNative: 'Saluto formale',
    formula: 'Buongiorno/Buonasera + [title/name]. Come sta?',
    examples: [
      { italian: 'Buongiorno dottoressa. Come sta?', english: 'Good morning doctor. How are you?' },
      { italian: 'Buonasera signor Rossi. Come sta?', english: 'Good evening Mr. Rossi. How are you?' },
    ],
    variations: ['Come si sente?', 'Tutto bene?'],
    whenToUse: 'Professional settings, elderly, first meetings, authority figures',
  },
  {
    id: 'small-talk-weather',
    name: 'Weather Small Talk',
    nameNative: 'Chiacchiere sul tempo',
    formula: 'Che [weather] oggi, eh? / Fa [weather], non trovi?',
    examples: [
      { italian: 'Che caldo oggi, eh?', english: 'Hot today, huh?' },
      { italian: 'Fa freddo, non trovi?', english: 'It\'s cold, don\'t you think?' },
    ],
    variations: ['Piove sempre!', 'Che bella giornata!', 'Fa un freddo cane!'],
    whenToUse: 'Breaking silence, starting conversation, filler',
  },

  // ASKING FOR THINGS
  {
    id: 'request-polite',
    name: 'Polite Request',
    nameNative: 'Richiesta educata',
    formula: 'Mi scusi, [potrebbe/per favore]...? / Mi farebbe...?',
    examples: [
      { italian: 'Mi scusi, potrebbe aiutarmi?', english: 'Excuse me, could you help me?' },
      { italian: 'Mi farebbe un caffè?', english: 'Would you make me a coffee?' },
    ],
    variations: ['Potresti...?', 'Puoi...?', 'Saresti così gentile da...?'],
    whenToUse: 'Asking for help, services, favors - polite context',
  },
  {
    id: 'request-direct',
    name: 'Direct Request',
    nameNative: 'Richiesta diretta',
    formula: '[Dammi/Prendimi/Passami]... / Ho bisogno di...',
    examples: [
      { italian: 'Dammi il sale, per favore.', english: 'Give me the salt, please.' },
      { italian: 'Ho bisogno di una mano.', english: 'I need a hand.' },
    ],
    variations: ['Mi passi...?', 'Mi dai...?', 'Prendimi...'],
    whenToUse: 'Family, close friends, urgent situations',
  },

  // COMPLAINING & PROBLEMS
  {
    id: 'complaint-mild',
    name: 'Mild Complaint',
    nameNative: 'Lamentela leggera',
    formula: 'Scusa, ma... / Non è che...?',
    examples: [
      { italian: 'Scusa, ma fa un po\' freddo qui.', english: 'Sorry, but it\'s a bit cold here.' },
      { italian: 'Non è che hai l\'ora?', english: 'You don\'t happen to have the time?' },
    ],
    variations: ['Senti, non vorrei lamentarmi, ma...', 'Ti devo dire una cosa...'],
    whenToUse: 'Gentle complaints, avoiding conflict',
  },
  {
    id: 'complaint-strong',
    name: 'Strong Complaint',
    nameNative: 'Reclamo forte',
    formula: 'Ma come è possibile...? / Questo è...!',
    examples: [
      { italian: 'Ma come è possibile? Aspetto da un\'ora!', english: 'How is this possible? I\'ve been waiting an hour!' },
      { italian: 'Questo è inaccettabile!', english: 'This is unacceptable!' },
    ],
    variations: ['Non ci credo!', 'Sono stanco/a di...', 'Basta così!'],
    whenToUse: 'Service situations, serious problems',
  },

  // AGREEMENT & DISAGREEMENT
  {
    id: 'agreement-enthusiastic',
    name: 'Enthusiastic Agreement',
    nameNative: 'Accordo entusiasta',
    formula: 'Certo! / Assolutamente! / Ma sì!',
    examples: [
      { italian: 'Certo, ottima idea!', english: 'Sure, great idea!' },
      { italian: 'Assolutamente sì!', english: 'Absolutely yes!' },
    ],
    variations: ['Ma certo!', 'Figurati!', 'Volentieri!', 'Con piacere!'],
    whenToUse: 'Saying yes warmly, showing enthusiasm',
  },
  {
    id: 'agreement-reluctant',
    name: 'Reluctant Agreement',
    nameNative: 'Accordo riluttante',
    formula: 'Va bene... / Se devo... / D\'accordo, ma...',
    examples: [
      { italian: 'Va bene, ma solo per stavolta.', english: 'Okay, but just this once.' },
      { italian: 'Se devo...', english: 'If I must...' },
    ],
    variations: ['Se proprio insisti...', 'Beh, d\'accordo...'],
    whenToUse: 'Giving in, reluctant yes',
  },
  {
    id: 'disagreement-soft',
    name: 'Soft Disagreement',
    nameNative: 'Disaccordo morbido',
    formula: 'Sì, però... / Capisco, ma... / Non sono sicuro/a...',
    examples: [
      { italian: 'Sì, però costa troppo.', english: 'Yes, but it costs too much.' },
      { italian: 'Capisco, ma non posso.', english: 'I understand, but I can\'t.' },
    ],
    variations: ['In teoria sì, ma...', 'Ci ho pensato, ma...'],
    whenToUse: 'Disagreeing without conflict, polite refusal',
  },
  {
    id: 'disagreement-direct',
    name: 'Direct Disagreement',
    nameNative: 'Disaccordo diretto',
    formula: 'No, non credo / Non sono d\'accordo / Assolutamente no',
    examples: [
      { italian: 'No, non credo sia giusto.', english: 'No, I don\'t think it\'s right.' },
      { italian: 'Non sono d\'accordo.', english: 'I don\'t agree.' },
    ],
    variations: ['Non funziona così.', 'Non mi convince.'],
    whenToUse: 'Clear disagreement, stating boundaries',
  },

  // CHANGING SUBJECT / ENDING
  {
    id: 'subject-change',
    name: 'Changing Subject',
    nameNative: 'Cambiare argomento',
    formula: 'A proposito... / Tornando a noi... / Comunque...',
    examples: [
      { italian: 'A proposito, hai finito il lavoro?', english: 'By the way, did you finish the work?' },
      { italian: 'Comunque, che fai stasera?', english: 'Anyway, what are you doing tonight?' },
    ],
    variations: ['Senti...', 'Dicevi...', 'Ah, dimenticavo...'],
    whenToUse: 'Moving conversation forward, awkward transitions',
  },
  {
    id: 'ending-conversation',
    name: 'Ending Conversation',
    nameNative: 'Concludere la conversazione',
    formula: 'Devo andare... / Ci sentiamo... / A dopo/allora',
    examples: [
      { italian: 'Devo andare, scusa.', english: 'I have to go, sorry.' },
      { italian: 'Ci sentiamo domani, ok?', english: 'We\'ll talk tomorrow, ok?' },
    ],
    variations: ['Ti lascio andare.', 'Devo scappare.', 'Ci vediamo!'],
    whenToUse: 'Exiting conversation gracefully',
  },

  // EMOTIONAL RESPONSES
  {
    id: 'surprise-positive',
    name: 'Positive Surprise',
    nameNative: 'Sorpresa positiva',
    formula: 'Ma dai! / Davvero? / Non ci credo! (positivo)',
    examples: [
      { italian: 'Ma dai! Che bello!', english: 'No way! How nice!' },
      { italian: 'Davvero? Sono felicissimo!', english: 'Really? I\'m so happy!' },
    ],
    variations: ['Wow!', 'Incredibile!', 'Fantastico!'],
    whenToUse: 'Good news, surprises, excitement',
  },
  {
    id: 'sympathy',
    name: 'Expressing Sympathy',
    nameNative: 'Esprimere solidarietà',
    formula: 'Mi dispiace... / Che peccato... / Povero/a...',
    examples: [
      { italian: 'Mi dispiace tanto.', english: 'I\'m so sorry.' },
      { italian: 'Che peccato!', english: 'What a shame!' },
    ],
    variations: ['Mi sento per te.', 'Capisco come ti senti.', 'Forza!'],
    whenToUse: 'Someone shares bad news, showing support',
  },

  // UNCERTAINTY & THINKING
  {
    id: 'hesitation',
    name: 'Hesitation',
    nameNative: 'Esitazione',
    formula: 'Boh... / Mah... / Non lo so... / Vediamo...',
    examples: [
      { italian: 'Boh, forse sì forse no.', english: 'Dunno, maybe yes maybe no.' },
      { italian: 'Mah, vediamo...', english: 'Well, let\'s see...' },
    ],
    variations: ['Ci devo pensare.', 'Non saprei...', 'Mmmm...'],
    whenToUse: 'Buying time, genuine uncertainty, casual dismissal',
  },
  {
    id: 'clarification',
    name: 'Asking for Clarification',
    nameNative: 'Chiedere chiarimenti',
    formula: 'Cioè? / Come? / Scusa, non ho capito... / Puoi ripetere?',
    examples: [
      { italian: 'Cioè, cosa vuoi dire?', english: 'Like, what do you mean?' },
      { italian: 'Scusa, non ho capito. Puoi ripetere?', english: 'Sorry, I didn\'t understand. Can you repeat?' },
    ],
    variations: ['Come dici?', 'Puoi spiegare?', 'In che senso?'],
    whenToUse: 'Didn\'t hear, didn\'t understand, need explanation',
  },
];

// ============================================
// ROLE-PLAY SCENARIOS (By Room)
// ============================================

export const rolePlayScenarios: RolePlayScenario[] = [
  // ==================== KITCHEN ====================
  {
    id: 'kitchen-morning-chaos',
    roomId: 'kitchen',
    title: 'Morning Chaos',
    titleNative: 'Caos Mattutino',
    context: 'It\'s 7:30 AM. You\'re trying to make breakfast but running late. Your spouse is also stressed.',
    yourRole: 'Marco (stressed parent, needs coffee)',
    partnerRole: 'Luisa (your spouse, also stressed)',
    goal: 'Get coffee, coordinate the morning, don\'t fight',
    patterns: ['request-direct', 'complaint-mild', 'agreement-reluctant', 'ending-conversation'],
    dialogue: [
      {
        speaker: 'Luisa',
        italian: 'Marco, il caffè è finito!',
        english: 'Marco, we\'re out of coffee!',
        level: 'beginner',
        pattern: 'complaint-mild',
      },
      {
        speaker: 'You',
        italian: 'Cosa? Ma è possibile? Aspetta, guarda sopra...',
        english: 'What? Is that possible? Wait, look up there...',
        level: 'intermediate',
        pattern: 'complaint-strong',
      },
      {
        speaker: 'Luisa',
        italian: 'Non c\'è! Devi comprarne oggi, ok?',
        english: 'There isn\'t any! You need to buy some today, ok?',
        level: 'beginner',
      },
      {
        speaker: 'You',
        italian: 'Va bene, ma ora che beviamo?',
        english: 'Okay, but what do we drink now?',
        level: 'intermediate',
        pattern: 'agreement-reluctant',
      },
      {
        speaker: 'Luisa',
        italian: 'C\'è il tè. O i bambini prenderanno il succo.',
        english: 'There\'s tea. Or the kids will have juice.',
        level: 'beginner',
      },
      {
        speaker: 'You',
        italian: 'D\'accordo. Scusa, sono stanco.',
        english: 'Alright. Sorry, I\'m tired.',
        level: 'beginner',
      },
      {
        speaker: 'Luisa',
        italian: 'Lo so. Anche io. Forza, andiamo.',
        english: 'I know. Me too. Come on, let\'s go.',
        level: 'beginner',
        pattern: 'sympathy',
      },
    ],
    alternatives: [
      {
        situation: 'If you want to ask for tea instead',
        responses: ['Mi fai un tè, per favore?', 'Prendo il tè, va bene?', 'Dammi il tè.'],
      },
      {
        situation: 'If you want to promise to buy coffee',
        responses: ['Compro il caffè dopo, ok?', 'Stasera compro il caffè.', 'Prometto, compro il caffè.'],
      },
    ],
  },

  // ==================== CAFE ====================
  {
    id: 'cafe-ordering',
    roomId: 'cafe',
    title: 'Ordering at the Bar',
    titleNative: 'Ordinare al Bar',
    context: 'You\'re at an Italian café (bar). The barista is busy but friendly. Order your coffee and maybe a snack.',
    yourRole: 'Customer (you want a cappuccino and cornetto)',
    partnerRole: 'Barista (busy but professional)',
    goal: 'Order correctly, pay, maybe small talk',
    patterns: ['greeting-casual', 'request-polite', 'small-talk-weather', 'ending-conversation'],
    dialogue: [
      {
        speaker: 'Barista',
        italian: 'Buongiorno! Che tempo brutto, eh?',
        english: 'Good morning! Bad weather, huh?',
        level: 'beginner',
        pattern: 'small-talk-weather',
      },
      {
        speaker: 'You',
        italian: 'Buongiorno! Sì, piove sempre. Un cappuccino, per favore.',
        english: 'Good morning! Yes, it always rains. A cappuccino, please.',
        level: 'beginner',
        pattern: 'request-polite',
      },
      {
        speaker: 'Barista',
        italian: 'Certo. Macchiato o normale?',
        english: 'Sure. Macchiato or regular?',
        level: 'intermediate',
      },
      {
        speaker: 'You',
        italian: 'Normale, grazie. E un cornetto alla marmellata.',
        english: 'Regular, thanks. And a jam croissant.',
        level: 'beginner',
      },
      {
        speaker: 'Barista',
        italian: 'Va bene. Lo mangi qui o da portar via?',
        english: 'Alright. Are you eating here or to go?',
        level: 'intermediate',
      },
      {
        speaker: 'You',
        italian: 'Qui, grazie. Quanto viene?',
        english: 'Here, thanks. How much is it?',
        level: 'beginner',
      },
      {
        speaker: 'Barista',
        italian: 'Tre euro e cinquanta. Ecco lo scontrino.',
        english: 'Three fifty. Here\'s the receipt.',
        level: 'beginner',
      },
    ],
    alternatives: [
      {
        situation: 'If you want to eat at the counter (cheaper)',
        responses: ['Al banco, per favore.', 'Lo prendo al banco.'],
      },
      {
        situation: 'If they\'re out of croissants',
        responses: ['Va bene un ciambellino?', 'Prendo un pezzo di torta.', 'Allora, solo il caffè.'],
      },
    ],
  },

  // ==================== SUPERMARKET ====================
  {
    id: 'supermarket-help',
    roomId: 'supermarket',
    title: 'Finding Something',
    titleNative: 'Trovare Qualcosa',
    context: 'You can\'t find the pasta. Ask another shopper or employee for help.',
    yourRole: 'Lost shopper (looking for pasta)',
    partnerRole: 'Other shopper or employee',
    goal: 'Get directions, confirm the right product',
    patterns: ['request-polite', 'clarification', 'agreement-enthusiastic', 'ending-conversation'],
    dialogue: [
      {
        speaker: 'You',
        italian: 'Mi scusi, sa dov\'è la pasta?',
        english: 'Excuse me, do you know where the pasta is?',
        level: 'beginner',
        pattern: 'request-polite',
      },
      {
        speaker: 'Employee',
        italian: 'Sì, al terzo scaffale, dietro di lei.',
        english: 'Yes, third shelf, behind you.',
        level: 'intermediate',
      },
      {
        speaker: 'You',
        italian: 'Cioè, a sinistra o a destra?',
        english: 'Like, left or right?',
        level: 'intermediate',
        pattern: 'clarification',
      },
      {
        speaker: 'Employee',
        italian: 'A destra, vicino al riso.',
        english: 'Right, near the rice.',
        level: 'beginner',
      },
      {
        speaker: 'You',
        italian: 'Ah, vedo! Grazie mille!',
        english: 'Ah, I see! Thanks so much!',
        level: 'beginner',
        pattern: 'agreement-enthusiastic',
      },
      {
        speaker: 'Employee',
        italian: 'Figurati! Buona giornata.',
        english: 'You\'re welcome! Have a good day.',
        level: 'beginner',
        pattern: 'ending-conversation',
      },
    ],
    alternatives: [
      {
        situation: 'If you can\'t find a specific type',
        responses: ['Dov\'è la pasta integrale?', 'Cerco la pasta senza glutine.', 'Avete pasta fresca?'],
      },
      {
        situation: 'If you want to ask about price',
        responses: ['Quanto costa questo?', 'È in offerta?', 'C\'è lo sconto?'],
      },
    ],
  },

  // ==================== TRANSPORT ====================
  {
    id: 'transport-lost',
    roomId: 'transport',
    title: 'Lost Tourist',
    titleNative: 'Turista Perso',
    context: 'You\'re at the train station. You missed your train or don\'t know which platform. Ask for help.',
    yourRole: 'Confused traveler',
    partnerRole: 'Station employee or helpful local',
    goal: 'Get correct information, understand the answer',
    patterns: ['request-polite', 'clarification', 'complaint-mild', 'agreement-enthusiastic'],
    dialogue: [
      {
        speaker: 'You',
        italian: 'Mi scusi, il treno per Roma?',
        english: 'Excuse me, the train to Rome?',
        level: 'beginner',
        pattern: 'request-polite',
      },
      {
        speaker: 'Employee',
        italian: 'Quale? Alle dieci o alle dieci e trenta?',
        english: 'Which one? Ten o\'clock or ten thirty?',
        level: 'intermediate',
      },
      {
        speaker: 'You',
        italian: 'Alle dieci. Binario?',
        english: 'Ten o\'clock. Platform?',
        level: 'beginner',
      },
      {
        speaker: 'Employee',
        italian: 'È in ritardo. Parte dal binario sette, ma tra venti minuti.',
        english: 'It\'s delayed. Leaves from platform seven, but in twenty minutes.',
        level: 'intermediate',
      },
      {
        speaker: 'You',
        italian: 'Grazie. Scusi, dove compro il biglietto?',
        english: 'Thanks. Sorry, where do I buy the ticket?',
        level: 'beginner',
        pattern: 'clarification',
      },
      {
        speaker: 'Employee',
        italian: 'Lì, alle macchinette. O in biglietteria.',
        english: 'There, at the machines. Or at the ticket office.',
        level: 'beginner',
      },
      {
        speaker: 'You',
        italian: 'Perfetto, grazie mille!',
        english: 'Perfect, thank you so much!',
        level: 'beginner',
        pattern: 'agreement-enthusiastic',
      },
    ],
    alternatives: [
      {
        situation: 'If the train is cancelled',
        responses: ['C\'è un altro treno?', 'Quando parte il prossimo?', 'Devo aspettare molto?'],
      },
      {
        situation: 'If you need to validate ticket',
        responses: ['Devo timbrare il biglietto?', 'Dove si convalida?', 'È già valido?'],
      },
    ],
  },

  // ==================== BEDROOM ====================
  {
    id: 'bedroom-planning',
    roomId: 'bedroom',
    title: 'Planning Tomorrow',
    titleNative: 'Pianificare Domani',
    context: 'You\'re in bed, about to sleep. Discuss tomorrow\'s plans with your partner.',
    yourRole: 'Marco (thinking about work)',
    partnerRole: 'Luisa (your spouse)',
    goal: 'Coordinate schedules, make decisions without fighting',
    patterns: ['subject-change', 'disagreement-soft', 'agreement-reluctant', 'ending-conversation'],
    dialogue: [
      {
        speaker: 'Luisa',
        italian: 'Marco, domani devi prendere i bambini a scuola.',
        english: 'Marco, tomorrow you need to pick up the kids from school.',
        level: 'beginner',
      },
      {
        speaker: 'You',
        italian: 'Cosa? Ma ho una riunione alle cinque!',
        english: 'What? But I have a meeting at five!',
        level: 'intermediate',
        pattern: 'disagreement-soft',
      },
      {
        speaker: 'Luisa',
        italian: 'E io devo andare dal dottore. Non puoi saltare la riunione?',
        english: 'And I have to go to the doctor. Can\'t you skip the meeting?',
        level: 'intermediate',
      },
      {
        speaker: 'You',
        italian: 'Mah, vediamo... Posso chiedere a Paolo di coprirmi?',
        english: 'Well, let\'s see... Can I ask Paolo to cover for me?',
        level: 'intermediate',
        pattern: 'hesitation',
      },
      {
        speaker: 'Luisa',
        italian: 'Sì, perfetto. Grazie, tesoro.',
        english: 'Yes, perfect. Thanks, honey.',
        level: 'beginner',
      },
      {
        speaker: 'You',
        italian: 'A proposito, parliamo delle vacanze questo weekend?',
        english: 'By the way, can we talk about vacation this weekend?',
        level: 'intermediate',
        pattern: 'subject-change',
      },
      {
        speaker: 'Luisa',
        italian: 'Sì, certo. Ora però dormiamo. Buonanotte.',
        english: 'Yes, sure. But now let\'s sleep. Goodnight.',
        level: 'beginner',
        pattern: 'ending-conversation',
      },
    ],
    alternatives: [
      {
        situation: 'If you can\'t skip the meeting',
        responses: ['Non posso saltare, è importante.', 'Mi dispiace, non ce la faccio.', 'Chiedo aiuto a mia madre?'],
      },
      {
        situation: 'If you want to confirm',
        responses: ['Allora, prendo io i bambini.', 'D\'accordo, ci penso io.', 'Va bene, sistemo io.'],
      },
    ],
  },
];

// Get scenarios for a specific room
export const getScenariosForRoom = (roomId: string): RolePlayScenario[] => {
  return rolePlayScenarios.filter(s => s.roomId === roomId);
};

// Get patterns used in a scenario
export const getPatternsForScenario = (scenarioId: string): ConversationPattern[] => {
  const scenario = rolePlayScenarios.find(s => s.id === scenarioId);
  if (!scenario) return [];
  return conversationPatterns.filter(p => scenario.patterns.includes(p.id));
};
