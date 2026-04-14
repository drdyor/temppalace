// Strategic Dialogues: The 48 Laws of Conversation
// Power dynamics, persuasion, social strategy
// Each dialogue teaches not just WHAT to say, but WHY

import type { RolePlayScenario } from './dialogues';

export interface StrategicLayer {
  // What's really happening beneath the surface
  hiddenAgenda: string;
  powerDynamic: 'superior' | 'inferior' | 'equal' | 'shifting';
  emotionalState: string;
  // What law of power is being applied
  lawOfPower?: string;
}

export interface StrategicDialogue extends RolePlayScenario {
  id: string;
  strategyTitle: string; // e.g., "Law 3: Conceal Your Intentions"
  strategicLayers?: StrategicLayer[]; // One per key line (optional, can use strategicLayer per line)
  // What you should be thinking/doing
  playerStrategy: string;
  // Common mistakes that reveal weakness
  mistakesToAvoid: string[];
  // How to recover if you mess up
  recoveryTactics: string[];
}

// ============================================
// STRATEGIC DIALOGUES
// ============================================

export const strategicDialogues: StrategicDialogue[] = [
  // ==================== CAFE ====================
  {
    id: 'cafe-networking',
    roomId: 'cafe',
    title: 'The Informal Meeting',
    titleNative: 'L\'Incontro Informale',
    strategyTitle: 'Law 13: Appeal to Self-Interest',
    context: 'You\'re meeting a potential business contact at a cafe. You need something from them, but showing neediness is fatal. Make them WANT to help you.',
    yourRole: 'Marco (needs a favor/information/connection)',
    partnerRole: 'Giorgio (influential, busy, slightly arrogant)',
    goal: 'Get what you need while making Giorgio feel powerful and generous',
    playerStrategy: 'Never ask directly. Make him OFFER. Flatter without groveling. Show value first.',
    patterns: ['praise-indirect', 'value-demonstration', 'strategic-pause', 'withdrawal-tactic'],
    mistakesToAvoid: [
      'Asking too soon (shows desperation)',
      'Complimenting too much (seems fake)',
      'Talking about yourself too much (boring)',
    ],
    recoveryTactics: [
      'If you asked too soon: Pivot to their interests',
      'If they seem bored: Ask about their recent success',
      'If rejected gracefully: Plant a seed for future contact',
    ],
    dialogue: [
      {
        speaker: 'Giorgio',
        italian: 'Scusa il ritardo, sono incasinato con questo nuovo progetto.',
        english: 'Sorry I\'m late, I\'m swamped with this new project.',
        level: 'intermediate',
      },
      {
        speaker: 'You',
        italian: 'Non ti preoccupare. Ho sentito parlare del progetto - impressionante.',
        english: 'Don\'t worry. I heard about the project - impressive.',
        level: 'intermediate',
        strategicLayer: {
          hiddenAgenda: 'Flatter by showing you did research',
          powerDynamic: 'inferior',
          emotionalState: 'Calm, unhurried (powerful position)',
          lawOfPower: 'Law 46: Never Appear Too Perfect',
        },
      },
      {
        speaker: 'Giorgio',
        italian: 'Ah, sai del progetto? Cosa ne pensi?',
        english: 'Ah, you know about the project? What do you think?',
        level: 'intermediate',
      },
      {
        speaker: 'You',
        italian: 'Penso che pochi avrebbero il coraggio di farlo così. Tu sì.',
        english: 'I think few would have the courage to do it that way. You do.',
        level: 'advanced',
        strategicLayer: {
          hiddenAgenda: 'Appeal to his self-image as bold/different',
          powerDynamic: 'shifting',
          emotionalState: 'Interest piqued',
          lawOfPower: 'Law 8: Make Other People Come to You',
        },
      },
      {
        speaker: 'Giorgio',
        italian: '[sorride] Eh, non è facile. Tanti ostacoli.',
        english: '[smiles] Eh, it\'s not easy. Many obstacles.',
        level: 'intermediate',
      },
      {
        speaker: 'You',
        italian: 'Già. A proposito, io lavoro proprio su quella problematica che hai menzionato.',
        english: 'Right. By the way, I actually work exactly on that problem you mentioned.',
        level: 'advanced',
        strategicLayer: {
          hiddenAgenda: 'Reveal value only after he\'s interested',
          powerDynamic: 'equal',
          emotionalState: 'Now you\'re valuable',
          lawOfPower: 'Law 11: Learn to Keep People Dependent',
        },
      },
      {
        speaker: 'Giorgio',
        italian: 'Davvero? E come approcci il problema?',
        english: 'Really? And how do you approach the problem?',
        level: 'intermediate',
      },
      {
        speaker: 'You',
        italian: 'Ho sviluppato un metodo. Forse potrebbe interessarti per il tuo progetto.',
        english: 'I\'ve developed a method. Maybe it could interest you for your project.',
        level: 'intermediate',
        strategicLayer: {
          hiddenAgenda: 'Make HIM ask. You never beg.',
          powerDynamic: 'superior',
          emotionalState: 'Curiosity + Need',
          lawOfPower: 'Law 13: When Asking for Help, Appeal to Self-Interest',
        },
      },
      {
        speaker: 'Giorgio',
        italian: 'Interessante. Dovremmo parlarne meglio. Hai tempo venerdì?',
        english: 'Interesting. We should talk more. Do you have time Friday?',
        level: 'intermediate',
      },
    ],
    alternatives: [
      {
        situation: 'If he doesn\'t ask about your work',
        responses: ['Create mystery: "Comunque, ho scoperto una cosa curiosa sul tuo settore..."', 'Ask strategic question: "Tu come risolvi il problema X?"'],
      },
      {
        situation: 'If he tries to dominate the conversation',
        responses: ['Let him talk 70% of the time (he\'ll love you for it)', 'Use strategic silence: just nod and say "Capisco..."'],
      },
    ],
  },

  // ==================== SUPERMARKET ====================
  {
    id: 'supermarket-complaint-strategic',
    roomId: 'supermarket',
    title: 'The Art of Complaint',
    titleNative: 'L\'Arte del Reclamo',
    strategyTitle: 'Law 19: Know Who You\'re Dealing With',
    context: 'You bought bad meat yesterday. You could yell (and be remembered as "that crazy customer") or handle this strategically to get compensation PLUS future benefits.',
    yourRole: 'Marco (wronged customer, but playing long game)',
    partnerRole: 'Store Manager (has power to help, but defensive)',
    goal: 'Full refund + store credit + manager remembers you positively',
    playerStrategy: 'Never attack. Make them WANT to fix it. Show you\'re reasonable but memorable.',
    patterns: ['strategic-praise', 'emotional-control', 'future-incentive', 'dignified-withdrawal'],
    mistakesToAvoid: [
      'Yelling (makes them defensive)',
      'Threatening (creates enemies)',
      'Accepting first offer (shows desperation)',
    ],
    recoveryTactics: [
      'If you got angry: "Mi scuso, sono solo deluso perché solitamente siete impeccabili."',
      'If they refuse: "Capisco. Scriverò una recensione onesta online." (gentle threat)',
    ],
    dialogue: [
      {
        speaker: 'Manager',
        italian: 'Sì, mi dica. Ha un problema?',
        english: 'Yes, tell me. Do you have a problem?',
        level: 'beginner',
      },
      {
        speaker: 'You',
        italian: 'Buongiorno. Prima di tutto, complimenti per il negozio - è sempre pulito.',
        english: 'Good morning. First of all, compliments on the store - it\'s always clean.',
        level: 'intermediate',
        strategicLayer: {
          hiddenAgenda: 'Disarm with unexpected praise',
          powerDynamic: 'equal',
          emotionalState: 'Caught off-guard, less defensive',
          lawOfPower: 'Law 12: Use Selective Honesty',
        },
      },
      {
        speaker: 'Manager',
        italian: 'Grazie... Sì, ci teniamo molto.',
        english: 'Thanks... Yes, we care a lot.',
        level: 'beginner',
      },
      {
        speaker: 'You',
        italian: 'Appunto. Per questo sono sorpreso di questo.',
        english: 'Exactly. That\'s why I\'m surprised about this.',
        level: 'intermediate',
        strategicLayer: {
          hiddenAgenda: 'Create cognitive dissonance - good store vs bad product',
          powerDynamic: 'shifting',
          emotionalState: 'Curious about what\'s coming',
          lawOfPower: 'Law 6: Court Attention at All Cost',
        },
      },
      {
        speaker: 'You',
        italian: 'Ho comprato questa carne ieri. L\'ho aperta stamattina. Guardi.',
        english: 'I bought this meat yesterday. I opened it this morning. Look.',
        level: 'intermediate',
      },
      {
        speaker: 'Manager',
        italian: 'Oh... capisco. Mi dispiace molto.',
        english: 'Oh... I see. I\'m very sorry.',
        level: 'beginner',
      },
      {
        speaker: 'You',
        italian: 'Non è per i soldi. È che mi fidavo di voi. Ora non so più se tornare.',
        english: 'It\'s not about the money. It\'s that I trusted you. Now I don\'t know if I\'ll come back.',
        level: 'advanced',
        strategicLayer: {
          hiddenAgenda: 'Appeal to their desire for loyalty, not just fix problem',
          powerDynamic: 'superior',
          emotionalState: 'Guilt + desire to retain customer',
          lawOfPower: 'Law 11: Learn to Keep People Dependent',
        },
      },
      {
        speaker: 'Manager',
        italian: 'No no, guardi... Le faccio il rimborso completo. E uno sconto del 20% sul prossimo acquisto.',
        english: 'No no, look... I\'ll give you a full refund. And 20% off your next purchase.',
        level: 'intermediate',
      },
      {
        speaker: 'You',
        italian: 'Gentile. Ma potrebbe anche controllare la data di scadenza di quel banco? Per gli altri clienti.',
        english: 'Kind. But could you also check the expiration date on that counter? For the other customers.',
        level: 'advanced',
        strategicLayer: {
          hiddenAgenda: 'Show you\'re thinking of THEM, not just yourself. Now you\'re valuable ally.',
          powerDynamic: 'superior',
          emotionalState: 'Grateful + Impressed',
          lawOfPower: 'Law 16: Use Absence to Increase Respect',
        },
      },
    ],
    alternatives: [
      {
        situation: 'If they offer minimum compensation',
        responses: ['Pause. Silence. Let them fill it.', 'Say: "Capisco che non potete fare di più. Va bene." (guilt trip)'],
      },
      {
        situation: 'If they get defensive',
        responses: ['Never argue facts. Say: "Non voglio litigare. Cerco solo una soluzione."', 'Use Law 9: Win Through Actions, Never Argument'],
      },
    ],
  },

  // ==================== BEDROOM ====================
  {
    id: 'bedroom-seduction',
    roomId: 'bedroom',
    title: 'The Long Game',
    titleNative: 'Il Gioco Lungo',
    strategyTitle: 'Law 8: Make Other People Come to You',
    context: 'Your partner seems distant. You could confront them (weak) or make them want to close the distance (strong).',
    yourRole: 'Marco (noticed distance, choosing strategy)',
    partnerRole: 'Luisa (distracted, stressed, not aware of the game)',
    goal: 'Reconnection without appearing needy or demanding',
    playerStrategy: 'Withdraw slightly. Create space. Let them feel the absence. Then reappear as something new.',
    patterns: ['strategic-absence', 'mystery-creation', 'selective-availability', 'delayed-gratification'],
    mistakesToAvoid: [
      '"We need to talk" (creates pressure)',
      'Asking "What\'s wrong?" (puts them on defense)',
      'Being too available (taken for granted)',
    ],
    recoveryTactics: [
      'If you already seemed needy: Create distance for 48 hours',
      'If they ask what\'s wrong: "Niente, solo pensieroso. Tu come stai?" (deflect, ask about them)',
    ],
    dialogue: [
      {
        speaker: 'Luisa',
        italian: 'Stasera esco con le amiche. Tu?',
        english: 'Tonight I\'m going out with friends. You?',
        level: 'beginner',
      },
      {
        speaker: 'You',
        italian: 'Ho da fare anch\'io. Ci vediamo dopo.',
        english: 'I have things to do too. See you later.',
        level: 'beginner',
        strategicLayer: {
          hiddenAgenda: 'Don\'t ask what she\'s doing. Don\'t show interest in her plans.',
          powerDynamic: 'equal',
          emotionalState: 'Slightly confused (expected you to ask)',
          lawOfPower: 'Law 8: Make Other People Come to You',
        },
      },
      {
        speaker: 'Luisa',
        italian: 'Cosa devi fare?',
        english: 'What do you have to do?',
        level: 'beginner',
      },
      {
        speaker: 'You',
        italian: 'Sto leggendo un libro interessante. Tu divertiti.',
        english: 'I\'m reading an interesting book. You have fun.',
        level: 'intermediate',
        strategicLayer: {
          hiddenAgenda: 'You have a life. You\'re not waiting.',
          powerDynamic: 'superior',
          emotionalState: 'Curiosity + slight jealousy',
          lawOfPower: 'Law 16: Use Absence',
        },
      },
      {
        speaker: 'Luisa',
        italian: '[più tardi] Sei ancora sveglio?',
        english: '[later] Are you still awake?',
        level: 'beginner',
      },
      {
        speaker: 'You',
        italian: 'Sì. Sto quasi finendo. Entri?',
        english: 'Yes. I\'m almost done. Coming in?',
        level: 'intermediate',
      },
      {
        speaker: 'Luisa',
        italian: 'Di cosa parla il libro?',
        english: 'What\'s the book about?',
        level: 'beginner',
      },
      {
        speaker: 'You',
        italian: 'Di come le persone si dimenticano di coltivare ciò che hanno. Tu? Com\'era uscire?',
        english: 'About how people forget to cultivate what they have. You? How was going out?',
        level: 'advanced',
        strategicLayer: {
          hiddenAgenda: 'Indirect message. Then immediately ask about her (she\'s still important)',
          powerDynamic: 'shifting',
          emotionalState: 'Reflective + valued',
          lawOfPower: 'Law 12: Selective Honesty',
        },
      },
    ],
    alternatives: [
      {
        situation: 'If she doesn\'t ask what you\'re doing',
        responses: ['Wait 2 days. Be polite but slightly distant.', 'Then: "Ho scoperto questo posto nuovo. Vuoi venire sabato?" (new experience invitation)'],
      },
      {
        situation: 'If she confronts you',
        responses: ['"Ti sto dando spazio. Mi sembravi distante."', 'Never apologize for having your own life.'],
      },
    ],
  },

  // ==================== TRANSPORT ====================
  {
    id: 'transport-authority',
    roomId: 'transport',
    title: 'Dealing with Authority',
    titleNative: 'Trattare con l\'Autorità',
    strategyTitle: 'Law 22: Surrender Tactic',
    context: 'Ticket inspector caught you with an invalid ticket. Fighting will cost you €100+ fine. Surrender strategically to minimize damage.',
    yourRole: 'Marco (guilty, but playing for sympathy)',
    partnerRole: 'Ticket Inspector (has absolute power in this moment)',
    goal: 'Avoid fine. Make inspector feel magnanimous.',
    playerStrategy: 'Complete surrender. Make them feel powerful by forgiving you. Never make excuses.',
    patterns: ['complete-surrender', 'strategic-humility', 'flattery-authority', 'gratitude-excess'],
    mistakesToAvoid: [
      'Making excuses (angers authority)',
      'Knowing your rights (challenges their power)',
      'Being silent (missed opportunity for connection)',
    ],
    recoveryTactics: [
      'If already argued: Stop immediately. Complete surrender.',
      'If they\'re writing ticket: "Ha ragione. Mi merito la multa. Solo... grazie per la pazienza."',
    ],
    dialogue: [
      {
        speaker: 'Inspector',
        italian: 'Il biglietto non è valido. Non l\'ha convalidato.',
        english: 'The ticket isn\'t valid. You didn\'t validate it.',
        level: 'intermediate',
      },
      {
        speaker: 'You',
        italian: 'Ha perfettamente ragione. Sono nel torto completamente.',
        english: 'You\'re absolutely right. I\'m completely in the wrong.',
        level: 'intermediate',
        strategicLayer: {
          hiddenAgenda: 'Disarm completely. No defense possible.',
          powerDynamic: 'inferior',
          emotionalState: 'Confused by lack of resistance',
          lawOfPower: 'Law 22: Surrender Tactic',
        },
      },
      {
        speaker: 'Inspector',
        italian: '...Ehm, sa che la multa è di cinquanta euro?',
        english: '...Um, you know the fine is fifty euros?',
        level: 'intermediate',
      },
      {
        speaker: 'You',
        italian: 'Lo so. Me la merito. Lei fa il suo lavoro bene - io ho sbagliato.',
        english: 'I know. I deserve it. You do your job well - I made the mistake.',
        level: 'intermediate',
        strategicLayer: {
          hiddenAgenda: 'Praise their professionalism while accepting blame',
          powerDynamic: 'shifting',
          emotionalState: 'Uncomfortable with excessive guilt',
          lawOfPower: 'Law 48: Assume Formlessness',
        },
      },
      {
        speaker: 'Inspector',
        italian: 'Beh... non è che posso fare eccezioni.',
        english: 'Well... it\'s not that I can make exceptions.',
        level: 'intermediate',
      },
      {
        speaker: 'You',
        italian: 'Capisco. Ma grazie per essere stato chiaro e professionale. Raramente trovo questo.',
        english: 'I understand. But thanks for being clear and professional. I rarely find this.',
        level: 'advanced',
        strategicLayer: {
          hiddenAgenda: 'Make them feel special for doing basic job',
          powerDynamic: 'shifting',
          emotionalState: 'Flattered + considering mercy',
          lawOfPower: 'Law 8: Make Others Come to You',
        },
      },
      {
        speaker: 'Inspector',
        italian: '[pausa] ...Guardi, stavolta le faccio una ramanzina. Ma la prossima volta...',
        english: '[pause] ...Look, this time I\'ll give you a warning. But next time...',
        level: 'intermediate',
      },
      {
        speaker: 'You',
        italian: 'Grazie. Non lo dimenticherò. E convaliderò sempre.',
        english: 'Thank you. I won\'t forget. And I\'ll always validate.',
        level: 'beginner',
        strategicLayer: {
          hiddenAgenda: 'Show you learned lesson. They are your teacher now.',
          powerDynamic: 'equal (with gratitude)',
          emotionalState: 'Magnanimous',
          lawOfPower: 'Law 12: Use Selective Honesty',
        },
      },
    ],
    alternatives: [
      {
        situation: 'If they insist on fine despite surrender',
        responses: ['Accept gracefully: "Capisco. È giusto."', 'Pay immediately. Don\'t delay. Show you\'re not fighting.'],
      },
      {
        situation: 'If they seem especially harsh',
        responses: ['Ask: "Da quanto fa questo lavoro? Sembra difficile." (humanize them)', 'People help people they\'ve talked to.'],
      },
    ],
  },
];

// Strategy guides for each Law of Power mentioned
export const lawOfPowerExplanations: Record<string, { title: string; explanation: string; conversationApplication: string }> = {
  'Law 8': {
    title: 'Make Other People Come to You',
    explanation: 'When you force others to act, you are in control. Let them come to you.',
    conversationApplication: 'Don\'t ask for things directly. Create situations where others offer. Be the one who ends conversations first.',
  },
  'Law 11': {
    title: 'Learn to Keep People Dependent',
    explanation: 'Make others depend on you for their happiness and prosperity.',
    conversationApplication: 'Show unique value before asking for anything. Make them need your help, advice, or company.',
  },
  'Law 12': {
    title: 'Use Selective Honesty',
    explanation: 'One sincere move can cover dozens of dishonest ones.',
    conversationApplication: 'Strategic vulnerability opens doors. A genuine compliment disarms.',
  },
  'Law 16': {
    title: 'Use Absence to Increase Respect',
    explanation: 'Too much circulation makes the price go down. Create value through scarcity.',
    conversationApplication: 'Don\'t always be available. Let them miss you. End conversations while they still want more.',
  },
  'Law 22': {
    title: 'Surrender Tactic',
    explanation: 'If you\'re weaker, surrender. You turn weakness into power.',
    conversationApplication: 'When caught in error, surrender completely. Make them feel merciful for forgiving you.',
  },
  'Law 48': {
    title: 'Assume Formlessness',
    explanation: 'Be fluid like water. Adapt. Never show your full hand.',
    conversationApplication: 'Don\'t be predictable. Change your approach based on who you\'re talking to.',
  },
};
