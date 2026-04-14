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
          { text: 'Recover: "Scusi, buongiorno! Un caffè, per favore."', nextNodeId: 'recover-good' },
        ],
      },
      'greeting-good': {
        id: 'greeting-good',
        speaker: 'npc',
        text: '🐱 Barista Cat\'s ears perk up, tail curves happily. "Buongiorno a lei! Cosa prende?"',
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
        text: '🐱 Vendor Cat gently taps your hand with a paw. "Lascio fare a me, signore." (Ears twitch)',
        backgroundEffect: 'surprised',
        choices: [
          { text: '😤 Insist: "Voglio scegliere io" (I want to choose)', nextNodeId: 'insist-fail' },
          { text: '😅 "Certo, mi scusi! Le scelga lei le migliori."', nextNodeId: 'trust-good' },
        ],
      },
      'greet-good': {
        id: 'greet-good',
        speaker: 'npc',
        text: '🐱 Vendor Cat\'s ears perk up. "Buongiorno! Due euro al chilo. Sono buonissime oggi!" (Tail swishes)',
        backgroundEffect: 'happy',
        choices: [
          { text: '💬 "Un chilo, per favore. Le scelga lei."', nextNodeId: 'trust-good' },
        ],
      },
      'compliment-good': {
        id: 'compliment-good',
        speaker: 'npc',
        text: '🐱 Vendor Cat smiles, ears forward. "Ha buon occhio! Sono appena arrivate."',
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
        text: '🐱 Vendor Cat beams, selects carefully. "Ecco, le migliori per lei!" (Proud tail up)',
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
