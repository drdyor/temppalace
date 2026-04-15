// ITALIAN Cultural Fluency Guide
// How to not look like a tourist in Italy
// These rules are ITALY-SPECIFIC and do not apply to other languages/cultures

export interface CulturalRule {
  id: string;
  category: 'food' | 'coffee' | 'greetings' | 'timing' | 'shopping' | 'transport' | 'social';
  title: string;
  titleNative: string;
  // The rule
  rule: string;
  // Why it matters
  why: string;
  // What happens if you break it
  consequence: string;
  // The elegant solution
  solution: string;
  // Exact phrases to use
  phrases: { situation: string; italian: string; english: string }[];
  // Regional variations
  regionalNote?: string;
}

export interface RoomCulture {
  roomId: string;
  specificRules: CulturalRule[];
  // Dialogue showing the rule in action
  exampleDialogue: {
    context: string;
    lines: { speaker: string; italian: string; english: string; note?: string }[];
  };
}

// ============================================
// UNIVERSAL ITALIAN CULTURAL RULES
// ============================================

export const universalRules: CulturalRule[] = [
  // COFFEE RULES
  {
    id: 'coffee-morning-only',
    category: 'coffee',
    title: 'The Cappuccino Curfew',
    titleNative: 'Il Coprifuoco del Cappuccino',
    rule: 'Never order cappuccino after 11 AM (or after any meal)',
    why: 'Milk is considered a breakfast thing. After that, it\'s espresso only.',
    consequence: 'You\'ll get looked at funny. The barista might ask "Sicuro?" (Sure?)',
    solution: 'Before 11: cappuccino, caffè latte. After 11: espresso, macchiato, americano.',
    regionalNote: 'Less strict in Milan (business culture); strictly observed in Naples/Sicily.',
    phrases: [
      { situation: 'Ordering morning coffee', italian: 'Un cappuccino, per favore.', english: 'A cappuccino, please.' },
      { situation: 'Ordering afternoon coffee', italian: 'Un caffè, per favore.', english: 'A coffee, please.' },
      { situation: 'If they ask "sistero?" (stay?)', italian: 'Al banco, grazie.', english: 'At the counter, thanks.' },
    ],
  },
  {
    id: 'coffee-standing',
    category: 'coffee',
    title: 'Stand at the Bar',
    titleNative: 'Stare al Banco',
    rule: 'Drink coffee standing at the bar, not sitting at tables (unless you want to pay 3x)',
    why: 'Tables are for lingering. Bar is for quick caffeine hit.',
    consequence: 'Sitting = "coperto" charge (€2-5) + higher prices.',
    solution: 'Order at register, get receipt, give to barista, drink standing, leave.',
    phrases: [
      { situation: 'Ordering at the bar', italian: 'Un caffè al banco.', english: 'A coffee at the counter.' },
      { situation: 'Paying', italian: 'Quanto viene?', english: 'How much is it?' },
      { situation: 'Saying thanks and leaving', italian: 'Grazie, arrivederci.', english: 'Thanks, goodbye.' },
    ],
  },

  // FOOD RULES
  {
    id: 'compliment-food',
    category: 'food',
    title: 'Compliment the Food',
    titleNative: 'Fare i Complimenti',
    rule: 'Always compliment the food, especially if someone cooked it or recommended the place',
    why: 'Food is sacred. Not praising it is almost insulting.',
    consequence: 'Host might think you didn\'t like it. Awkward silence.',
    solution: 'Over-praise: "Buonissimo!" "Che bontà!" "Da leccarsi i baffi!"',
    phrases: [
      { situation: 'Complimenting pasta', italian: 'Questa pasta è buonissima!', english: 'This pasta is delicious!' },
      { situation: 'Complimenting the cook', italian: 'Complimenti alla cuoca!', english: 'Compliments to the cook!' },
      { situation: 'Wanting more', italian: 'È da leccarsi i baffi!', english: 'It\'s lip-smacking good!' },
    ],
  },
  {
    id: 'no-cheese-on-fish',
    category: 'food',
    title: 'No Cheese on Fish Pasta',
    titleNative: 'Mai Formaggio sul Pesce',
    rule: 'Never put parmesan on seafood pasta',
    why: 'It\'s considered a crime against the food. Covers the delicate fish flavor.',
    consequence: 'Waiter may hover near the cheese, or gently say "Non si usa il formaggio col pesce" (We don\'t use cheese with fish).',
    solution: 'Just don\'t. If they offer parmigiano with fish pasta, they\'re testing you.',
    phrases: [
      { situation: 'When offered cheese on fish pasta', italian: 'No grazie, così è perfetto.', english: 'No thanks, it\'s perfect like this.' },
      { situation: 'Defending your choice', italian: 'Non si mette il formaggio sul pesce.', english: 'You don\'t put cheese on fish.' },
    ],
  },
  {
    id: 'bread-purpose',
    category: 'food',
    title: 'Bread is for Sauce',
    titleNative: 'Il Pane è per la Salsa',
    rule: 'Bread ("fare la scarpetta") is for mopping up sauce, not for eating with butter before the meal',
    why: 'Bread is a tool, not an appetizer. Butter before pasta ruins your palate.',
    consequence: 'Using bread wrong marks you as foreign.',
    solution: 'Save bread for after the pasta. Use it to scrape the plate ("fare la scarpetta").',
    phrases: [
      { situation: 'Praising the sauce (implies you want to do scarpetta)', italian: 'Questo sugo è troppo buono per lasciare.', english: 'This sauce is too good to leave.' },
      { situation: 'Joking with friends about scarpetta', italian: 'La scarpetta è obbligatoria!', english: 'Scarpetta is mandatory!' },
      { situation: 'After finishing (just do it, no need to ask)', italian: '(Just use the bread - no words needed)', english: 'The compliment is in the action' },
    ],
  },

  // TIMING RULES
  {
    id: 'lunch-dinner-time',
    category: 'timing',
    title: 'Eat at Italian Time',
    titleNative: 'Mangiare all\'Ora Italiana',
    rule: 'Lunch: 1-2:30 PM. Dinner: 8-10 PM.',
    why: 'Eating earlier means tourist restaurants or closed kitchens.',
    consequence: 'You\'ll be eating alone with other tourists. No atmosphere.',
    solution: 'Adjust your schedule. Aperitivo at 7, dinner at 8:30.',
    phrases: [
      { situation: 'Asking when a place opens', italian: 'A che ora apre per cena?', english: 'What time do you open for dinner?' },
      { situation: 'Making reservation', italian: 'Per le nove, per favore.', english: 'For nine o\'clock, please.' },
    ],
  },
  {
    id: 'riposo',
    category: 'timing',
    title: 'Respect the Riposo',
    titleNative: 'Rispettare il Riposo',
    rule: 'Everything closes 1-4 PM (sometimes 12:30-4:30). Plan accordingly.',
    why: 'Lunch is sacred. Shops, banks, offices close. People go home to eat with family.',
    consequence: 'Standing in front of closed doors. Missing appointments.',
    solution: 'Shop in morning or after 4. Eat lunch properly. Relax.',
    regionalNote: 'Large chains and tourist areas (Rome center) often stay open. Small towns observe strictly.',
    phrases: [
      { situation: 'Asking when they reopen', italian: 'A che ora riapre?', english: 'What time do you reopen?' },
      { situation: 'Acknowledging riposo', italian: 'Capisco, riposa bene!', english: 'I understand, rest well!' },
    ],
  },

  // GREETINGS
  {
    id: 'greeting-buongiorno',
    category: 'greetings',
    title: 'Say Buongiorno First',
    titleNative: 'Dire Buongiorno Prima',
    rule: 'Always say "Buongiorno/Buonasera" when entering ANY shop, bar, office',
    why: 'Acknowledging people\'s existence is basic courtesy. Jumping to business is rude.',
    consequence: 'Cold service. They\'ll think you\'re rude or foreign.',
    solution: 'Enter → Buongiorno → Pause → Make request. Everyone does it.',
    phrases: [
      { situation: 'Entering a shop', italian: 'Buongiorno!', english: 'Good morning!' },
      { situation: 'Evening entry', italian: 'Buonasera!', english: 'Good evening!' },
      { situation: 'Leaving', italian: 'Grazie, arrivederci!', english: 'Thanks, goodbye!' },
    ],
  },
  {
    id: 'tu-vs-lei',
    category: 'social',
    title: 'Tu vs Lei (The Formality Dance)',
    titleNative: 'Tu vs Lei',
    rule: 'Use "Lei" (formal) with: elderly, professionals, first meetings. Use "tu" (informal) with: friends, peers, children.',
    why: 'Wrong level = awkwardness. Too informal = disrespect. Too formal = distance.',
    consequence: 'Offending someone or seeming cold.',
    solution: 'Start with Lei. They\'ll say "Dammi del tu" (use tu) if they want informal.',
    phrases: [
      { situation: 'Asking permission to use tu', italian: 'Posso darle del tu?', english: 'May I use tu with you?' },
      { situation: 'Being told to use tu', italian: 'Dammi pure del tu.', english: 'Use tu with me.' },
      { situation: 'Safe default greeting', italian: 'Come sta?', english: 'How are you? (formal)' },
    ],
  },

  // SHOPPING
  {
    id: 'no-touching-produce',
    category: 'shopping',
    title: 'Don\'t Touch the Produce',
    titleNative: 'Non Toccare la Frutta',
    rule: 'At markets, you choose by pointing/talking - they handle the produce.',
    why: 'The vendor is the expert selector; you are the grateful recipient. Touching implies you don\'t trust their judgment (and their hands are cleaner).',
    consequence: 'The vendor gently asserts their role: "Lascio fare a me" (Let me handle it). You feel awkward for overstepping. The dynamic is clear: they\'re the expert, you receive their expertise.',
    solution: 'Point, ask, receive: "Un chilo di queste" or "Mi dia le migliori." Show appreciation for their selection.',
    phrases: [
      { situation: 'Asking for fruit', italian: 'Un chilo di pesche, per favore.', english: 'A kilo of peaches, please.' },
      { situation: 'Asking them to choose', italian: 'Le scelga lei le migliori.', english: 'You choose the best ones.' },
      { situation: 'Complimenting quality', italian: 'Sembrano buone queste.', english: 'These look good.' },
    ],
  },

  // SOCIAL
  {
    id: 'bella-figura',
    category: 'social',
    title: 'La Bella Figura',
    titleNative: 'La Bella Figura',
    rule: 'Always present your best self. Dress well, be polite, make a good impression.',
    why: 'How you appear reflects on your family, your city, your country.',
    consequence: 'Being remembered as "that messy foreigner." Missing opportunities.',
    solution: 'Dress slightly nicer than you think. Be extra polite. Presentation matters.',
    phrases: [
      { situation: 'Apologizing for appearance', italian: 'Scusi il disordine.', english: 'Excuse the mess.' },
      { situation: 'Complimenting someone\'s appearance', italian: 'Che bella figura!', english: 'What a good impression!' },
    ],
  },

  // MISSING RULES FROM AUDIT
  {
    id: 'church-dress-code',
    category: 'social',
    title: 'Church Dress Code',
    titleNative: 'Vestirsi per la Chiesa',
    rule: 'Cover shoulders and knees when entering churches. No shorts, tank tops, or short skirts.',
    why: 'Churches are sacred spaces. Modest dress is a sign of respect.',
    consequence: 'You will be denied entry at major churches (San Pietro, Duomo, etc.).',
    solution: 'Carry a scarf to cover shoulders. Wear pants or long skirts.',
    phrases: [
      { situation: 'Being denied entry', italian: 'Mi dispiace, devo coprire le spalle?', english: 'Sorry, do I need to cover my shoulders?' },
      { situation: 'Asking if outfit is okay', italian: 'Posso entrare così?', english: 'Can I enter like this?' },
    ],
  },
  {
    id: 'no-cappuccino-with-meals',
    category: 'food',
    title: 'No Milk Coffee with Meals',
    titleNative: 'Caffè Macchiato a Pranzo',
    rule: 'Milk coffee (cappuccino, caffè latte) is strictly for breakfast. Never with lunch or dinner.',
    why: 'Milk is considered heavy for digestion. After a meal, it\'s espresso only.',
    consequence: 'Waiter may explain "Il latte è solo per la mattina" (Milk is only for morning).',
    solution: 'Order espresso, macchiato, or americano. Save milk coffee for breakfast.',
    phrases: [
      { situation: 'Ordering after lunch', italian: 'Un caffè, per favore.', english: 'A coffee, please.' },
      { situation: 'Clarifying no milk', italian: 'Senza latte, grazie.', english: 'Without milk, thanks.' },
    ],
  },
  {
    id: 'tipping-culture',
    category: 'social',
    title: 'Tipping is Optional',
    titleNative: 'La Mancia',
    rule: 'Tipping is not mandatory like in the US. Round up or leave small change (€1-2).',
    why: 'Service is included (servizio incluso). Staff earn living wages without tips.',
    consequence: 'Over-tipping marks you as a tourist who doesn\'t know local customs.',
    solution: 'Round up to nearest euro, or leave €1-2 for good service. No percentage calculation.',
    phrases: [
      { situation: 'Asking if service is included', italian: 'Il servizio è incluso?', english: 'Is service included?' },
      { situation: 'Leaving small tip', italian: 'Tenga il resto.', english: 'Keep the change.' },
    ],
  },
  {
    id: 'cash-is-king',
    category: 'shopping',
    title: 'Cash is King',
    titleNative: 'Il Contante',
    rule: 'Small bars, markets, and shops often prefer or only accept cash.',
    why: 'Card fees are high for small businesses. Some places avoid tax traceability.',
    consequence: 'Transaction refused. Embarrassment. Running to find an ATM.',
    solution: 'Always carry €50-100 in cash. Ask "Accetta carta?" before ordering if unsure.',
    phrases: [
      { situation: 'Asking if they take card', italian: 'Accettate carta?', english: 'Do you accept card?' },
      { situation: 'Only have card', italian: 'Non ho contanti, c\'è un bancomat vicino?', english: 'I don\'t have cash, is there an ATM nearby?' },
    ],
  },
];

// ============================================
// BRANCHING DIALOGUE SYSTEM (Optional Scenarios)
// ============================================

export interface DialogueChoice {
  text: string;
  nextNodeId: string;
  effect?: {
    reputationChange?: number;
    culturalNote?: string;
  };
}

export interface DialogueNode {
  id: string;
  speaker: 'user' | 'npc' | 'narrator';
  text: string;
  choices?: DialogueChoice[];
  backgroundEffect?: 'happy' | 'angry' | 'neutral' | 'surprised';
}

export interface BranchingScenario {
  id: string;
  roomId: string;
  title: string;
  titleNative: string;
  timeContext: string;
  startNodeId: string;
  nodes: Record<string, DialogueNode>;
  culturalLesson?: string;
}

// Branching scenarios for interactive exploration
// CAT CHARACTERS: All NPCs are anthropomorphic cats with expressive ears/tails
// DESIGN: Multiple correct paths, one "wrong/funny" path

export const branchingScenarios: BranchingScenario[] = [
  {
    id: 'bar-morning-greeting',
    roomId: 'cafe',
    title: 'The Morning Ritual',
    titleNative: 'Il Rituale del Mattino',
    timeContext: '10:30 AM',
    startNodeId: 'enter',
    culturalLesson: 'The greeting sets the tone. Without it, you\'re just a transaction.',
    nodes: {
      'enter': {
        id: 'enter',
        speaker: 'narrator',
        text: '🐱 Barista Cat is steaming milk, ears perked. The espresso machine hisses.',
        choices: [
          { text: '🙊 Silently point at the espresso machine', nextNodeId: 'silent-wrong', effect: { culturalNote: 'Silence can be seen as cold in Italy' } },
          { text: '😊 "Buongiorno!" with a smile', nextNodeId: 'greeting-good' },
          { text: '👋 "Ciao!" (casual wave)', nextNodeId: 'greeting-casual' },
        ],
      },
      'silent-wrong': {
        id: 'silent-wrong',
        speaker: 'npc',
        text: '🐱 Barista Cat\'s ears flatten slightly. He looks at you, waiting. "...Sì?" (Tail stops swishing)',
        backgroundEffect: 'neutral',
        choices: [
          { text: 'Continue pointing', nextNodeId: 'point-fail' },
          { text: 'Recover: "Scusa, buongiorno! Un caffè, per favore."', nextNodeId: 'recover-good' },
        ],
      },
      'greeting-good': {
        id: 'greeting-good',
        speaker: 'npc',
        text: '🐱 Barista Cat\'s ears perk up, tail curves happily. "Buongiorno! Cosa prendi?"',
        backgroundEffect: 'happy',
        choices: [
          { text: '☕ "Un cappuccino, per favore"', nextNodeId: 'order-cappuccino' },
          { text: '☕ "Un espresso, grazie"', nextNodeId: 'order-espresso' },
        ],
      },
      'greeting-casual': {
        id: 'greeting-casual',
        speaker: 'npc',
        text: '🐱 Barista Cat tilts head, one ear down. "Ciao..." (A bit informal for a stranger, but okay.)',
        backgroundEffect: 'neutral',
        choices: [
          { text: '☕ "Un caffè, per favore"', nextNodeId: 'order-espresso' },
        ],
      },
      'point-fail': {
        id: 'point-fail',
        speaker: 'npc',
        text: '🐱 Barista Cat makes the coffee, but his tail is still. No extra warmth.',
        backgroundEffect: 'neutral',
        choices: [
          { text: 'Pay and leave', nextNodeId: 'end-cold' },
        ],
      },
      'recover-good': {
        id: 'recover-good',
        speaker: 'npc',
        text: '🐱 Barista Cat\'s ears perk up! "Ah, buongiorno! Certo!" (Tail swishes happily)',
        backgroundEffect: 'happy',
        choices: [
          { text: '☕ Order and smile', nextNodeId: 'end-warm' },
        ],
      },
      'order-cappuccino': {
        id: 'order-cappuccino',
        speaker: 'narrator',
        text: '⏰ It\'s 10:30 AM - still acceptable for cappuccino.',
        choices: [
          { text: '🧍 "Al banco" (at the counter)', nextNodeId: 'end-perfect' },
          { text: '🪑 "Al tavolo" (at a table)', nextNodeId: 'end-expensive' },
        ],
      },
      'order-espresso': {
        id: 'order-espresso',
        speaker: 'npc',
        text: '🐱 Barista Cat nods approvingly. "Subito!" (Safe choice any time!)',
        backgroundEffect: 'happy',
        choices: [
          { text: '🧍 Stand at bar, drink quickly', nextNodeId: 'end-perfect' },
        ],
      },
      'end-cold': {
        id: 'end-cold',
        speaker: 'narrator',
        text: '⚠️ You got your coffee, but Barista Cat\'s ears stayed flat. The greeting matters!',
        choices: [],
      },
      'end-warm': {
        id: 'end-warm',
        speaker: 'narrator',
        text: '✅ You recovered! Barista Cat\'s tail is swishing again. The "buongiorno" saved it.',
        choices: [],
      },
      'end-perfect': {
        id: 'end-perfect',
        speaker: 'narrator',
        text: '✅ Perfect! Barista Cat purrs. Quick, cheap (€1.20), and culturally smooth.',
        choices: [],
      },
      'end-expensive': {
        id: 'end-expensive',
        speaker: 'narrator',
        text: '⚠️ You sit. The bill is €5.00. Barista Cat looks confused - why sit for 5 minutes?',
        choices: [],
      },
    },
  },
  {
    id: 'market-selection',
    roomId: 'supermarket',
    title: 'At the Market',
    titleNative: 'Al Mercato',
    timeContext: 'Saturday morning',
    startNodeId: 'arrive',
    culturalLesson: 'Trust the vendor. They are the experts; you are the grateful recipient.',
    nodes: {
      'arrive': {
        id: 'arrive',
        speaker: 'narrator',
        text: '🐱 Vendor Cat stands behind wooden crates of peaches, tail curled contentedly.',
        choices: [
          { text: '🍑 Pick up a peach to check ripeness (WRONG)', nextNodeId: 'touch-wrong', effect: { reputationChange: -1 } },
          { text: '😊 "Buongiorno, quanto costano le pesche?"', nextNodeId: 'greet-good' },
          { text: '👀 Look and point: "Quelle sembrano buone"', nextNodeId: 'compliment-good' },
        ],
      },
      'touch-wrong': {
        id: 'touch-wrong',
        speaker: 'npc',
        text: '🐱 Vendor Cat gently taps your hand with a paw. "Lascia fare a me." (Ears twitch)',
        backgroundEffect: 'surprised',
        choices: [
          { text: '😤 Insist: "Voglio scegliere io" (I want to choose)', nextNodeId: 'insist-fail' },
          { text: '😅 "Certo, scusa! Scegli tu le migliori."', nextNodeId: 'trust-good' },
        ],
      },
      'greet-good': {
        id: 'greet-good',
        speaker: 'npc',
        text: '🐱 Vendor Cat\'s ears perk up. "Buongiorno! Due euro al chilo. Sono buonissime oggi!" (Tail swishes)',
        backgroundEffect: 'happy',
        choices: [
          { text: '💬 "Un chilo, per favore. Scegli tu."', nextNodeId: 'trust-good' },
        ],
      },
      'compliment-good': {
        id: 'compliment-good',
        speaker: 'npc',
        text: '🐱 Vendor Cat smiles, ears forward. "Hai buon occhio! Sono appena arrivate."',
        backgroundEffect: 'happy',
        choices: [
          { text: '💬 "Perfetto, un chilo per favore."', nextNodeId: 'trust-good' },
        ],
      },
      'insist-fail': {
        id: 'insist-fail',
        speaker: 'npc',
        text: '🐱 Vendor Cat\'s tail stops. He bags fruit quickly, without care. (Ears slightly back)',
        backgroundEffect: 'neutral',
        choices: [
          { text: 'Pay and leave awkwardly', nextNodeId: 'end-awkward' },
        ],
      },
      'trust-good': {
        id: 'trust-good',
        speaker: 'npc',
        text: '🐱 Vendor Cat beams, selects carefully. "Ecco, le migliori per te!" (Proud tail up)',
        backgroundEffect: 'happy',
        choices: [
          { text: '😊 "Grazie mille, sembrano perfette!"', nextNodeId: 'end-perfect' },
        ],
      },
      'end-awkward': {
        id: 'end-awkward',
        speaker: 'narrator',
        text: '⚠️ You got peaches, but Vendor Cat\'s tail stayed down. Trust the expert!',
        choices: [],
      },
      'end-perfect': {
        id: 'end-perfect',
        speaker: 'narrator',
        text: '✅ Perfect! Vendor Cat gave you his best fruit, tail high with pride!',
        choices: [],
      },
    },
  },
  {
    id: 'train-digital-checkin',
    roomId: 'transport',
    title: 'The Digital Train',
    titleNative: 'Il Treno Digitale',
    timeContext: '15 minutes before departure',
    startNodeId: 'platform',
    culturalLesson: 'On Italian regional trains, you MUST check in via the Trenitalia app before boarding. A ticket without check-in is invalid.',
    nodes: {
      'platform': {
        id: 'platform',
        speaker: 'narrator',
        text: '🐱 Conductor Cat paces the platform, tail twitching nervously. Your phone shows the QR ticket, but the app says "Check-in richiesto".',
        choices: [
          { text: '📱 Board immediately without checking in', nextNodeId: 'board-wrong', effect: { culturalNote: 'Regional trains require check-in; high-speed trains do not' } },
          { text: '📱 Tap "Effettua check-in" on the app', nextNodeId: 'checkin-good' },
          { text: '📱 The app crashes when you tap check-in', nextNodeId: 'app-crash' },
          { text: '💬 "Scusa, devo fare il check-in?"', nextNodeId: 'ask-help' },
        ],
      },
      'board-wrong': {
        id: 'board-wrong',
        speaker: 'npc',
        text: '🐱 Conductor Cat scans your phone and frowns, ears flattening. "Non hai fatto il check-in. Devi pagare una multa."',
        backgroundEffect: 'angry',
        choices: [
          { text: '😰 Accept the fine silently', nextNodeId: 'end-fine' },
          { text: '💬 "Scusa, non lo sapevo. Posso farlo adesso?"', nextNodeId: 'recover-checkin' },
        ],
      },
      'checkin-good': {
        id: 'checkin-good',
        speaker: 'narrator',
        text: '✅ The app confirms: "Check-in effettuato. Buon viaggio!" The QR code turns green.',
        choices: [
          { text: '🚂 Board the train confidently', nextNodeId: 'onboard' },
        ],
      },
      'app-crash': {
        id: 'app-crash',
        speaker: 'narrator',
        text: '🚨 The app freezes on the loading screen. The train is about to leave. Panic rises.',
        choices: [
          { text: '😤 Keep restarting the app frantically', nextNodeId: 'board-wrong' },
          { text: '💬 "Scusa, l\'app non funziona, puoi aiutarmi?" to the conductor', nextNodeId: 'ask-help' },
        ],
      },
      'ask-help': {
        id: 'ask-help',
        speaker: 'npc',
        text: '🐱 Conductor Cat\'s ears perk up helpfully. "Sì, per i treni regionali è obbligatorio. Vedi, sul telefono, il pulsante verde."',
        backgroundEffect: 'happy',
        choices: [
          { text: '📱 Follow instructions and check in', nextNodeId: 'onboard' },
        ],
      },
      'recover-checkin': {
        id: 'recover-checkin',
        speaker: 'npc',
        text: '🐱 Conductor Cat\'s tail relaxes slightly. "Va bene, ma la prossima volta fallo prima." He watches you tap the app.',
        backgroundEffect: 'neutral',
        choices: [
          { text: '📱 Complete check-in and thank him', nextNodeId: 'onboard' },
        ],
      },
      'onboard': {
        id: 'onboard',
        speaker: 'narrator',
        text: 'You find your seat. An announcement crackles: "Attenzione passeggeri, il treno per Roma Termini è in partenza dal binario nove."',
        choices: [
          { text: '💬 "Scusa, questo è il posto 12A?" to the passenger', nextNodeId: 'seat-check' },
          { text: '😌 Sit down without asking', nextNodeId: 'end-uncertain' },
        ],
      },
      'seat-check': {
        id: 'seat-check',
        speaker: 'npc',
        text: '🐱 A friendly Passenger Cat nods. "Sì, è il tuo posto. Io sono 12B."',
        backgroundEffect: 'happy',
        choices: [
          { text: '💬 "Grazie, buon viaggio!"', nextNodeId: 'end-perfect' },
        ],
      },
      'end-fine': {
        id: 'end-fine',
        speaker: 'narrator',
        text: '⚠️ You pay a €50 fine. Always check in on regional trains — the app makes it easy, but forgetting is expensive.',
        choices: [],
      },
      'end-uncertain': {
        id: 'end-uncertain',
        speaker: 'narrator',
        text: '✅ You made the train, but you sat in silence wondering if it was your seat. Asking politely saves stress.',
        choices: [],
      },
      'end-perfect': {
        id: 'end-perfect',
        speaker: 'narrator',
        text: '✅ Perfect! Checked in, found your seat, and exchanged a friendly word. The modern Italian train journey mastered.',
        choices: [],
      },
    },
  },
  {
    id: 'busy-bar-ordering',
    roomId: 'cafe',
    title: 'At the Crowded Bar',
    titleNative: 'Al Bar Affollato',
    timeContext: '8:00 AM',
    startNodeId: 'enter-bar',
    culturalLesson: 'In a busy Italian bar, speed and clarity matter. Know your order before the barista looks at you.',
    nodes: {
      'enter-bar': {
        id: 'enter-bar',
        speaker: 'narrator',
        text: '🐱 Barista Cat is a blur of motion behind the counter, ears swiveling to catch orders from three directions. The bar is packed with locals.',
        choices: [
          { text: '🙊 Wait to be asked what you want', nextNodeId: 'ignored-wrong' },
          { text: '💬 "Buongiorno, un espresso e un cornetto, per favore"', nextNodeId: 'order-good' },
          { text: '📱 Try to order through an app', nextNodeId: 'app-wrong' },
        ],
      },
      'ignored-wrong': {
        id: 'ignored-wrong',
        speaker: 'npc',
        text: '🐱 Barista Cat serves two customers who spoke up, then glances at you with a questioning ear tilt. "Sì?"',
        backgroundEffect: 'neutral',
        choices: [
          { text: 'Continue waiting silently', nextNodeId: 'end-ignored' },
          { text: '💬 "Scusa, un caffè, per favore"', nextNodeId: 'order-late' },
        ],
      },
      'app-wrong': {
        id: 'app-wrong',
        speaker: 'npc',
        text: '🐱 Barista Cat looks confused at your phone screen. "Qui si ordina al banco." No app orders at this old-school bar.',
        backgroundEffect: 'surprised',
        choices: [
          { text: '💬 "Ah, scusa. Un espresso, per favore"', nextNodeId: 'order-late' },
        ],
      },
      'order-good': {
        id: 'order-good',
        speaker: 'npc',
        text: '🐱 Barista Cat\'s ears lock onto you. "Subito!" Espresso poured in three seconds. Cornetto placed on the counter.',
        backgroundEffect: 'happy',
        choices: [
          { text: '🧍 Drink standing, pay at the register', nextNodeId: 'end-perfect' },
          { text: '🪑 "Posso sedermi?"', nextNodeId: 'sit-expensive' },
        ],
      },
      'order-late': {
        id: 'order-late',
        speaker: 'npc',
        text: '🐱 Barista Cat nods, making your coffee. "Un euro e venti." Quick and efficient.',
        backgroundEffect: 'neutral',
        choices: [
          { text: 'Pay and leave', nextNodeId: 'end-okay' },
        ],
      },
      'sit-expensive': {
        id: 'sit-expensive',
        speaker: 'npc',
        text: '🐱 Barista Cat points to the tables. "Al tavolo? Ci sono tre euro di coperto."',
        backgroundEffect: 'surprised',
        choices: [
          { text: '💬 "No, grazie, al banco va benissimo"', nextNodeId: 'end-perfect' },
          { text: 'Sit down anyway', nextNodeId: 'end-expensive' },
        ],
      },
      'end-ignored': {
        id: 'end-ignored',
        speaker: 'narrator',
        text: '⚠️ You waited too long. In a busy Roman bar, you must speak up clearly and confidently.',
        choices: [],
      },
      'end-expensive': {
        id: 'end-expensive',
        speaker: 'narrator',
        text: '⚠️ Your €1.20 espresso became €4.20. Sitting at a table in a busy bar is for lingering, not a quick caffeine hit.',
        choices: [],
      },
      'end-okay': {
        id: 'end-okay',
        speaker: 'narrator',
        text: '✅ You got your coffee, but you hesitated. In Italy, confidence in ordering is half the battle.',
        choices: [],
      },
      'end-perfect': {
        id: 'end-perfect',
        speaker: 'narrator',
        text: '✅ Perfect! Fast, clear, standing at the bar. Barista Cat respects a traveler who knows the routine.',
        choices: [],
      },
    },
  },
  {
    id: 'self-checkout-help',
    roomId: 'supermarket',
    title: 'The Self-Checkout',
    titleNative: 'La Cassa Automatica',
    timeContext: 'Evening shopping',
    startNodeId: 'scan-error',
    culturalLesson: 'Italian self-checkouts often require staff approval for age-restricted items, discounts, or weighing errors. Knowing how to ask for help is essential.',
    nodes: {
      'scan-error': {
        id: 'scan-error',
        speaker: 'narrator',
        text: '🚨 The self-checkout machine freezes. Red light blinking. A message appears: "Operatore richiesto." Your pasta won\'t scan.',
        choices: [
          { text: '😤 Keep trying to scan the pasta aggressively', nextNodeId: 'frustrated-wrong' },
          { text: '💬 "Scusa, non funziona" to the nearest employee', nextNodeId: 'ask-help-good' },
          { text: '🙋 Raise your hand and look around', nextNodeId: 'wait-help' },
        ],
      },
      'frustrated-wrong': {
        id: 'frustrated-wrong',
        speaker: 'narrator',
        text: 'The machine beeps louder. A queue forms behind you. Frustration won\'t fix a technical problem.',
        choices: [
          { text: 'Abandon the cart and leave', nextNodeId: 'end-giveup' },
          { text: '💬 "Scusa, puoi aiutarmi?"', nextNodeId: 'ask-help-good' },
        ],
      },
      'wait-help': {
        id: 'wait-help',
        speaker: 'narrator',
        text: 'You stand there awkwardly. The employee is busy with another customer.',
        choices: [
          { text: 'Keep waiting', nextNodeId: 'end-waiting' },
          { text: '💬 "Scusa, c\'è un problema con la cassa"', nextNodeId: 'ask-help-good' },
        ],
      },
      'ask-help-good': {
        id: 'ask-help-good',
        speaker: 'npc',
        text: '🐱 Shop Assistant Cat approaches with a calm expression. "Sì, dimmi. Ah, la pasta. Devo inserire il codice manualmente."',
        backgroundEffect: 'happy',
        choices: [
          { text: '💬 "Grazie mille. Pago con la carta"', nextNodeId: 'pay-card' },
          { text: '💬 "Posso pagare in contanti?"', nextNodeId: 'pay-cash' },
          { text: '🛍️ The bag scale says "Peso inatteso" after packing', nextNodeId: 'bag-error' },
        ],
      },
      'pay-card': {
        id: 'pay-card',
        speaker: 'npc',
        text: '🐱 Shop Assistant Cat nods. "Certo, avvicina la carta."',
        backgroundEffect: 'happy',
        choices: [
          { text: 'Tap your card on the reader', nextNodeId: 'end-perfect' },
        ],
      },
      'pay-cash': {
        id: 'pay-cash',
        speaker: 'npc',
        text: '🐱 Shop Assistant Cat checks the machine. "Sì, accetta contanti. Inserisci qui."',
        backgroundEffect: 'neutral',
        choices: [
          { text: 'Insert cash and collect change', nextNodeId: 'end-perfect' },
        ],
      },
      'bag-error': {
        id: 'bag-error',
        speaker: 'narrator',
        text: '🚨 The machine screams: "ATTENZIONE: PESO INATTESO NELLA ZONA DI CARICO." Everyone looks at you.',
        choices: [
          { text: '😤 Push the bag harder onto the scale', nextNodeId: 'end-frustrated' },
          { text: '💬 "Scusa, di nuovo un problema con la cassa"', nextNodeId: 'ask-help-good' },
        ],
      },
      'end-giveup': {
        id: 'end-giveup',
        speaker: 'narrator',
        text: '⚠️ You left without dinner. Technical problems happen — knowing how to ask for help calmly is a survival skill.',
        choices: [],
      },
      'end-waiting': {
        id: 'end-waiting',
        speaker: 'narrator',
        text: '⚠️ You waited forever. In Italy, polite but clear communication gets attention faster than silence.',
        choices: [],
      },
      'end-frustrated': {
        id: 'end-frustrated',
        speaker: 'narrator',
        text: '⚠️ The machine beeps even louder. The bag scale is sensitive — force only makes it worse.',
        choices: [],
      },
      'end-perfect': {
        id: 'end-perfect',
        speaker: 'narrator',
        text: '✅ Problem solved! You asked clearly, stayed polite, and paid smoothly. That\'s modern Italian supermarket success.',
        choices: [],
      },
    },
  },
  {
    id: 'whatsapp-host',
    roomId: 'entrance-hall',
    title: 'The Host\'s Message',
    titleNative: 'Il Messaggio dell\'Host',
    timeContext: 'Arrival day',
    startNodeId: 'phone-beep',
    culturalLesson: 'In Italy, WhatsApp is the default communication channel for hosts, restaurants, and small businesses. Voice notes are extremely common.',
    nodes: {
      'phone-beep': {
        id: 'phone-beep',
        speaker: 'narrator',
        text: '📱 Your phone buzzes. A WhatsApp voice note from your Airbnb host, 🐱 Host Cat: "Ciao, sono Marco! Benvenuto. Il codice della cassaforte è 4821. Il WiFi si chiama CasaFiore, password BellaVista23. A presto!"',
        choices: [
          { text: '📱 Reply with a long English message', nextNodeId: 'english-wrong' },
          { text: '💬 Voice note: "Grazie Marco, sono arrivato. A presto"', nextNodeId: 'reply-good' },
          { text: '💬 Text: "Perfetto, grazie mille per le info"', nextNodeId: 'reply-text' },
        ],
      },
      'english-wrong': {
        id: 'english-wrong',
        speaker: 'narrator',
        text: 'Host Cat replies in confused Italian mixed with English. Many hosts appreciate the effort of Italian, even if it\'s simple.',
        choices: [
          { text: 'Send a short Italian correction', nextNodeId: 'reply-text' },
        ],
      },
      'reply-good': {
        id: 'reply-good',
        speaker: 'npc',
        text: '🐱 Host Cat replies immediately with a happy voice note. "Benvenuto! Se hai bisogno, scrivimi. Buona permanenza!"',
        backgroundEffect: 'happy',
        choices: [
          { text: '🔑 Find the key box and enter 4821', nextNodeId: 'enter-flat' },
        ],
      },
      'reply-text': {
        id: 'reply-text',
        speaker: 'npc',
        text: '🐱 Host Cat sends a thumbs-up emoji. "A disposizione!"',
        backgroundEffect: 'happy',
        choices: [
          { text: '🔑 Find the key box and enter 4821', nextNodeId: 'enter-flat' },
        ],
      },
      'enter-flat': {
        id: 'enter-flat',
        speaker: 'narrator',
        text: 'You\'re inside. The WiFi connects. But the hot water isn\'t working.',
        choices: [
          { text: '💬 Message: "C\'è un problema con l\'acqua calda"', nextNodeId: 'problem-good' },
          { text: '😤 Complain angrily about the hot water', nextNodeId: 'angry-wrong' },
          { text: 'Say nothing and take a cold shower', nextNodeId: 'end-suffering' },
          { text: '📱 Host isn\'t responding to messages', nextNodeId: 'host-silent' },
        ],
      },
      'problem-good': {
        id: 'problem-good',
        speaker: 'npc',
        text: '🐱 Host Cat replies quickly. "Scusa! Controllo subito. Aspetta due minuti e riprova. Se non funziona, mando il tecnico."',
        backgroundEffect: 'happy',
        choices: [
          { text: '💬 "Grazie, nessun problema"', nextNodeId: 'end-perfect' },
        ],
      },
      'angry-wrong': {
        id: 'angry-wrong',
        speaker: 'npc',
        text: '🐱 Host Cat\'s reply is defensive. "È un vecchio palazzo, a volte succede." The tone turns cold.',
        backgroundEffect: 'neutral',
        choices: [
          { text: 'Apologize and soften the message', nextNodeId: 'problem-good' },
          { text: 'Escalate the complaint', nextNodeId: 'end-hostile' },
        ],
      },
      'host-silent': {
        id: 'host-silent',
        speaker: 'narrator',
        text: 'You\'ve been waiting 20 minutes. No blue ticks. The hot water is still cold.',
        choices: [
          { text: '📱 Call the host directly', nextNodeId: 'problem-good' },
          { text: '😤 Leave a bad review threat', nextNodeId: 'end-hostile' },
          { text: '💬 Send a polite follow-up: "Scusa se ti disturbo ancora"', nextNodeId: 'problem-good' },
        ],
      },
      'end-suffering': {
        id: 'end-suffering',
        speaker: 'narrator',
        text: '⚠️ You froze unnecessarily. A polite message in Italian would have fixed it in minutes.',
        choices: [],
      },
      'end-hostile': {
        id: 'end-hostile',
        speaker: 'narrator',
        text: '⚠️ The host relationship is now tense. Italians respond much better to polite, collaborative problem-solving.',
        choices: [],
      },
      'end-perfect': {
        id: 'end-perfect',
        speaker: 'narrator',
        text: '✅ Perfect! You navigated the Italian host relationship like a local. WhatsApp, voice notes, and polite problem-solving.',
        choices: [],
      },
    },
  },
  {
    id: 'pharmacy-visit',
    roomId: 'bathroom',
    title: 'At the Pharmacy',
    titleNative: 'In Farmacia',
    timeContext: 'Morning',
    startNodeId: 'pharmacy-door',
    culturalLesson: 'Italian pharmacies are primary healthcare points. Pharmacists can diagnose minor issues and recommend medication without a prescription.',
    nodes: {
      'pharmacy-door': {
        id: 'pharmacy-door',
        speaker: 'narrator',
        text: '🐱 Pharmacist Cat looks up from behind the counter, ears alert and professional. "Buongiorno, dimmi."',
        choices: [
          { text: '💬 "Buongiorno, ho mal di testa. Mi consigli qualcosa?"', nextNodeId: 'explain-good' },
          { text: '📱 Show a photo of a medicine from your home country', nextNodeId: 'photo-wrong' },
          { text: '💬 "Voglio gli antibiotici"', nextNodeId: 'antibiotics-wrong' },
        ],
      },
      'photo-wrong': {
        id: 'photo-wrong',
        speaker: 'npc',
        text: '🐱 Pharmacist Cat squints at your phone. "Non conosco questo prodotto. Descrivimi i sintomi."',
        backgroundEffect: 'neutral',
        choices: [
          { text: '💬 "Mi fa male la testa da ieri sera"', nextNodeId: 'explain-good' },
        ],
      },
      'antibiotics-wrong': {
        id: 'antibiotics-wrong',
        speaker: 'npc',
        text: '🐱 Pharmacist Cat\'s ears flatten slightly. "Gli antibiotici servono la ricetta del dottore. Senza ricetta non posso darteli."',
        backgroundEffect: 'neutral',
        choices: [
          { text: '💬 "Capisco. Per il mal di testa, cosa posso prendere?"', nextNodeId: 'explain-good' },
          { text: 'Insist on antibiotics', nextNodeId: 'end-refused' },
        ],
      },
      'explain-good': {
        id: 'explain-good',
        speaker: 'npc',
        text: '🐱 Pharmacist Cat nods professionally, tail still. "Ah, mal di testa. Da quanto tempo? Hai anche la febbre?"',
        backgroundEffect: 'happy',
        choices: [
          { text: '💬 "Da ieri. No, non ho febbre."', nextNodeId: 'recommendation' },
          { text: '💬 "Sì, anche un po\' di febbre"', nextNodeId: 'recommendation-fever' },
        ],
      },
      'recommendation': {
        id: 'recommendation',
        speaker: 'npc',
        text: '🐱 Pharmacist Cat selects a box from the shelf. "Ti do questo. Uno ogni otto ore. Se domani non passa, vai dal dottore."',
        backgroundEffect: 'happy',
        choices: [
          { text: '💬 "Grazie. Costa molto?"', nextNodeId: 'pay-good' },
          { text: '💬 "Ha effetti collaterali?"', nextNodeId: 'side-effects' },
        ],
      },
      'recommendation-fever': {
        id: 'recommendation-fever',
        speaker: 'npc',
        text: '🐱 Pharmacist Cat\'s ears twitch with concern. "Con la febbre è meglio che prendi anche questo per abbassarla. E riposa."',
        backgroundEffect: 'surprised',
        choices: [
          { text: '💬 "Grazie mille, molto gentile"', nextNodeId: 'pay-good' },
          { text: '💬 "Ha effetti collaterali?"', nextNodeId: 'side-effects' },
        ],
      },
      'side-effects': {
        id: 'side-effects',
        speaker: 'npc',
        text: '🐱 Pharmacist Cat reassures you. "No, è molto leggero. Magari un po\' di sonnolenza."',
        backgroundEffect: 'happy',
        choices: [
          { text: '💬 "Perfetto, grazie"', nextNodeId: 'pay-good' },
        ],
      },
      'pay-good': {
        id: 'pay-good',
        speaker: 'npc',
        text: '🐱 Pharmacist Cat rings up the total. "Dieci euro e cinquanta. Accetti anche la carta?"',
        backgroundEffect: 'happy',
        choices: [
          { text: 'Pay with card', nextNodeId: 'end-perfect' },
        ],
      },
      'end-refused': {
        id: 'end-refused',
        speaker: 'narrator',
        text: '⚠️ Pharmacist Cat refused. Antibiotics require a prescription in Italy. Describe symptoms, don\'t demand specific drugs.',
        choices: [],
      },
      'end-perfect': {
        id: 'end-perfect',
        speaker: 'narrator',
        text: '✅ Perfect! You described your symptoms clearly, accepted professional advice, and paid smoothly. Italian pharmacy mastered.',
        choices: [],
      },
    },
  },
  {
    id: 'restaurant-reservation',
    roomId: 'kitchen',
    title: 'The Phone Reservation',
    titleNative: 'La Prenotazione Telefonica',
    timeContext: '11:00 AM',
    startNodeId: 'phone-rings',
    culturalLesson: 'Many traditional Italian restaurants still prefer phone reservations over apps. Speaking clearly on the phone is a real test of confidence.',
    nodes: {
      'phone-rings': {
        id: 'phone-rings',
        speaker: 'narrator',
        text: '📞 The phone rings twice before someone picks up. 🐱 Restaurant Cat\'s voice is warm but rushed. "Pronto, Da Mario, buongiorno!"',
        choices: [
          { text: '💬 "Buongiorno, vorrei prenotare un tavolo per stasera"', nextNodeId: 'booking-good' },
          { text: '💬 "Ciao, tavolo per due"', nextNodeId: 'casual-wrong' },
          { text: '💬 "Parli inglese?"', nextNodeId: 'english-wrong' },
        ],
      },
      'casual-wrong': {
        id: 'casual-wrong',
        speaker: 'npc',
        text: '🐱 Restaurant Cat pauses. "...Sì, certo. Per che ora?" (A bit too casual for a first phone call, but he\'s busy.)',
        backgroundEffect: 'neutral',
        choices: [
          { text: '💬 "Alle nove, per favore"', nextNodeId: 'time-set' },
        ],
      },
      'english-wrong': {
        id: 'english-wrong',
        speaker: 'npc',
        text: '🐱 Restaurant Cat\'s voice stiffens. "Un momento..." You hear him calling for someone else. Avoiding Italian slows everything down.',
        backgroundEffect: 'neutral',
        choices: [
          { text: '💬 "Scusa, posso provare in italiano. Vorrei prenotare"', nextNodeId: 'booking-good' },
          { text: 'Wait for the English speaker', nextNodeId: 'end-delayed' },
        ],
      },
      'booking-good': {
        id: 'booking-good',
        speaker: 'npc',
        text: '🐱 Restaurant Cat\'s tone brightens. "Buongiorno! Sì, per quante persone?"',
        backgroundEffect: 'happy',
        choices: [
          { text: '💬 "Per due persone"', nextNodeId: 'time-set' },
          { text: '💬 "Per quattro persone"', nextNodeId: 'time-set-four' },
        ],
      },
      'time-set': {
        id: 'time-set',
        speaker: 'npc',
        text: '🐱 Restaurant Cat checks the book. "Per due, alle nove va bene?"',
        backgroundEffect: 'happy',
        choices: [
          { text: '💬 "Perfetto, alle nove"', nextNodeId: 'dietary-question' },
          { text: '💬 "È possibile alle dieci?"', nextNodeId: 'late-check' },
        ],
      },
      'time-set-four': {
        id: 'time-set-four',
        speaker: 'npc',
        text: '🐱 Restaurant Cat hesitates. "Per quattro... alle nove e mezza? Alle nove è tutto pieno."',
        backgroundEffect: 'surprised',
        choices: [
          { text: '💬 "Va benissimo, alle nove e mezza"', nextNodeId: 'dietary-question' },
          { text: '💬 "Non va bene, devono essere alle nove"', nextNodeId: 'end-inflexible' },
        ],
      },
      'late-check': {
        id: 'late-check',
        speaker: 'npc',
        text: '🐱 Restaurant Cat\'s voice drops. "Alle dieci la cucina chiude alle undici. Meglio alle nove e un quarto."',
        backgroundEffect: 'neutral',
        choices: [
          { text: '💬 "D\'accordo, alle nove e un quarto"', nextNodeId: 'dietary-question' },
          { text: '💬 "No, alle dieci o niente"', nextNodeId: 'end-inflexible' },
        ],
      },
      'dietary-question': {
        id: 'dietary-question',
        speaker: 'npc',
        text: '🐱 Restaurant Cat asks efficiently. "A nome di? ...Bene. Hai qualche intolleranza o preferenza?"',
        backgroundEffect: 'happy',
        choices: [
          { text: '💬 "Sono vegetariano"', nextNodeId: 'note-dietary' },
          { text: '💬 "Nessuna, grazie"', nextNodeId: 'confirm-good' },
          { text: '💬 "Sono allergico alle noci"', nextNodeId: 'note-allergy' },
        ],
      },
      'note-dietary': {
        id: 'note-dietary',
        speaker: 'npc',
        text: '🐱 Restaurant Cat makes a note. "Perfetto, ci pensiamo noi. Benvenuto da Mario."',
        backgroundEffect: 'happy',
        choices: [
          { text: '💬 "Grazie, a stasera"', nextNodeId: 'end-perfect' },
        ],
      },
      'note-allergy': {
        id: 'note-allergy',
        speaker: 'npc',
        text: '🐱 Restaurant Cat\'s ears perk up with concern. "Ah, importante. Lo dico subito allo chef. Grazie per l\'avviso."',
        backgroundEffect: 'surprised',
        choices: [
          { text: '💬 "Grazie mille, a stasera"', nextNodeId: 'end-perfect' },
        ],
      },
      'confirm-good': {
        id: 'confirm-good',
        speaker: 'npc',
        text: '🐱 Restaurant Cat confirms. "Prenotato. A stasera, arrivederci!"',
        backgroundEffect: 'happy',
        choices: [
          { text: '💬 "Grazie, arrivederci"', nextNodeId: 'end-perfect' },
        ],
      },
      'end-delayed': {
        id: 'end-delayed',
        speaker: 'narrator',
        text: '⚠️ You waited on hold for three minutes. Most small restaurants in Italy operate in Italian — jumping to English just creates friction.',
        choices: [],
      },
      'end-inflexible': {
        id: 'end-inflexible',
        speaker: 'narrator',
        text: '⚠️ The restaurant couldn\'t accommodate your rigid time. In Italy, a little flexibility goes a long way.',
        choices: [],
      },
      'end-perfect': {
        id: 'end-perfect',
        speaker: 'narrator',
        text: '✅ Prenotazione confermata! You spoke clearly, handled the time negotiation, and communicated dietary needs. That\'s real-world Italian.',
        choices: [],
      },
    },
  },
];
// ============================================
// ROOM-SPECIFIC CULTURE
// ============================================

export const roomCultures: RoomCulture[] = [
  {
    roomId: 'cafe',
    specificRules: [
      {
        id: 'cafe-pay-first',
        category: 'coffee',
        title: 'Pay First, Then Order',
        titleNative: 'Pagare Prima, Poi Ordinare',
        rule: 'Go to cashier (cassa), pay, get receipt (scontrino), THEN go to bar and order',
        why: 'The barista doesn\'t handle money. Two-step process.',
        consequence: 'Confusion. Barista pointing you back to register.',
        solution: 'Look for "Cassa" sign. Pay. Get receipt. Give receipt to barista.',
        phrases: [
          { situation: 'At the register', italian: 'Un caffè al banco.', english: 'A coffee at the counter.' },
          { situation: 'Giving receipt to barista', italian: 'Un caffè, grazie.', english: 'A coffee, thanks.' },
        ],
      },
    ],
    exampleDialogue: {
      context: 'Your first time at an Italian bar. Do it right.',
      lines: [
        { speaker: 'You', italian: 'Buongiorno!', english: 'Good morning!', note: 'Always greet first' },
        { speaker: 'Cashier', italian: 'Buongiorno. Dica.', english: 'Good morning. Go ahead.' },
        { speaker: 'You', italian: 'Un cappuccino al banco.', english: 'A cappuccino at the counter.' },
        { speaker: 'Cashier', italian: 'Un euro e venti.', english: 'One twenty.' },
        { speaker: 'You', italian: 'Ecco. Grazie.', english: 'Here. Thanks.', note: 'Get receipt' },
        { speaker: 'Barista', italian: 'Sì?', english: 'Yes?' },
        { speaker: 'You', italian: 'Un cappuccino, grazie.', english: 'A cappuccino, thanks.', note: 'Give receipt' },
        { speaker: 'Barista', italian: 'Subito.', english: 'Right away.' },
        { speaker: 'You', italian: 'Grazie. Arrivederci!', english: 'Thanks. Goodbye!', note: 'Always say goodbye' },
      ],
    },
  },

  {
    roomId: 'supermarket',
    specificRules: [
      {
        id: 'supermarket-weigh-produce',
        category: 'shopping',
        title: 'Weigh Your Own Produce',
        titleNative: 'Pesare la Frutta',
        rule: 'Put produce in bag, weigh it at the scale, print label, THEN go to register',
        why: 'Cashier doesn\'t weigh. You must do it.',
        consequence: 'Cashier sending you back to weigh. Holding up line.',
        solution: 'Look for "Pesa" or digital scale. Put bag on. Press photo of item. Print sticker.',
        phrases: [
          { situation: 'Asking where to weigh', italian: 'Dove si pesa la frutta?', english: 'Where do you weigh the fruit?' },
          { situation: 'At the scale', italian: 'Mele... stampa etichetta.', english: 'Apples... print label.' },
        ],
      },
    ],
    exampleDialogue: {
      context: 'Buying produce at an Italian supermarket.',
      lines: [
        { speaker: 'You', italian: 'Scusi, devo pesare le mele prima?', english: 'Excuse me, do I need to weigh the apples first?' },
        { speaker: 'Employee', italian: 'Sì, là alla bilancia. Premi la foto.', english: 'Yes, there at the scale. Press the photo.' },
        { speaker: 'You', italian: 'Grazie. E poi alla cassa?', english: 'Thanks. And then to the register?' },
        { speaker: 'Employee', italian: 'Esatto. Attacca l\'etichetta.', english: 'Exactly. Stick the label on.' },
      ],
    },
  },

  {
    roomId: 'kitchen',
    specificRules: [
      {
        id: 'kitchen-meal-structure',
        category: 'food',
        title: 'The Italian Meal Structure',
        titleNative: 'La Struttura del Pasto',
        rule: 'Primo (pasta/rice) → Secondo (meat/fish) → Contorno (vegetables) → Dolce (dessert)',
        why: 'Each course has its place. Mixing them is wrong.',
        consequence: 'Confused looks if you order pasta AND meat as one plate.',
        solution: 'Order primo OR secondo for lunch. Full meal for dinner.',
        phrases: [
          { situation: 'Ordering full meal', italian: 'Vorrei un primo e un secondo.', english: 'I\'d like a first and second course.' },
          { situation: 'Skipping course', italian: 'Prendo solo il primo, grazie.', english: 'I\'ll just have the first course, thanks.' },
        ],
      },
    ],
    exampleDialogue: {
      context: 'Dinner at an Italian home. Understand the flow.',
      lines: [
        { speaker: 'Host', italian: 'Cominciamo con gli antipasti.', english: 'Let\'s start with appetizers.' },
        { speaker: 'You', italian: 'Grazie. Tutto sembra delizioso.', english: 'Thanks. Everything looks delicious.', note: 'Always compliment' },
        { speaker: 'Host', italian: 'Ecco il primo. Spaghetti alle vongole.', english: 'Here\'s the first. Spaghetti with clams.' },
        { speaker: 'You', italian: 'Buonissimi! Complimenti!', english: 'Delicious! Compliments!', note: 'Praise the food' },
        { speaker: 'Host', italian: 'Adesso il secondo. Pesce fresco.', english: 'Now the second. Fresh fish.' },
        { speaker: 'You', italian: 'Posso fare la scarpetta col pane?', english: 'May I do the scarpetta with bread?', note: 'Ask permission for scarpetta' },
        { speaker: 'Host', italian: 'Certo! È il miglior complimento!', english: 'Of course! It\'s the best compliment!', note: 'They LOVE scarpetta' },
      ],
    },
  },
];

// Quick reference: Top 10 Mistakes Tourists Make
export const touristMistakes = [
  { mistake: 'Cappuccino after 11 AM', fix: 'Espresso after meals', severity: 'medium' },
  { mistake: 'Sitting at cafe tables for 5-minute coffee', fix: 'Stand at bar, save €3-5', severity: 'high' },
  { mistake: 'Ordering cheese on seafood pasta', fix: 'Just say no', severity: 'medium' },
  { mistake: 'Eating dinner at 6 PM', fix: 'Wait until 8 PM', severity: 'high' },
  { mistake: 'Not saying buongiorno when entering shops', fix: 'Always greet first', severity: 'medium' },
  { mistake: 'Touching produce at markets', fix: 'Point, don\'t touch', severity: 'high' },
  { mistake: 'Rushing meals', fix: 'Slow down, enjoy', severity: 'low' },
  { mistake: 'Asking for tap water at restaurants', fix: 'Order "acqua naturale"', severity: 'low' },
  { mistake: 'Tipping 20%', fix: 'Round up or €1-2 is plenty', severity: 'low' },
  { mistake: 'Wearing shorts into churches', fix: 'Cover shoulders and knees', severity: 'high' },
];
