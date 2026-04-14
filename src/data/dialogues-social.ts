// Social Intelligence Dialogues
// Reading context, understanding subtext, communicating effectively
// Not manipulation - just cultural fluency and social awareness

export interface SocialContext {
  // What's the social situation
  setting: string;
  relationship: string;
  formalityLevel: 'intimate' | 'casual' | 'neutral' | 'formal' | 'official';
  // What's at stake
  stakes: 'low' | 'medium' | 'high';
}

export interface CulturalNote {
  // Why Italians speak this way
  concept: string;
  explanation: string;
  // What could go wrong
  commonMistake: string;
  // Better approach
  betterApproach: string;
}

export interface SocialDialogue {
  id: string;
  roomId: string;
  title: string;
  titleNative: string;
  context: SocialContext;
  // What you'll learn
  learningPoints: string[];
  dialogue: DialogueLine[];
  culturalNotes: CulturalNote[];
  // Alternative ways to handle
  alternatives: { situation: string; options: string[] }[];
}

// ============================================
// SOCIAL INTELLIGENCE DIALOGUES
// ============================================

export const socialDialogues: SocialDialogue[] = [
  // ==================== CAFE ====================
  {
    id: 'cafe-networking',
    roomId: 'cafe',
    title: 'Breaking the Ice',
    titleNative: 'Rompere il Ghiaccio',
    context: {
      setting: 'Professional meeting at a cafe',
      relationship: 'Acquaintances/colleagues',
      formalityLevel: 'neutral',
      stakes: 'medium',
    },
    learningPoints: [
      'How to build rapport before asking for help',
      'Reading social cues (when someone is receptive)',
      'Showing genuine interest vs. being transactional',
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
        italian: 'Non ti preoccupare. Ho sentito parlare del progetto - sembra ambizioso.',
        english: 'Don\'t worry. I heard about the project - it sounds ambitious.',
        level: 'intermediate',
      },
      {
        speaker: 'Giorgio',
        italian: 'Ah, sai del progetto? Cosa ne pensi?',
        english: 'Ah, you know about the project? What do you think?',
        level: 'intermediate',
      },
      {
        speaker: 'You',
        italian: 'Penso che pochi avrebbero il coraggio di affrontarlo così.',
        english: 'I think few would have the courage to tackle it that way.',
        level: 'advanced',
      },
      {
        speaker: 'Giorgio',
        italian: '[sorride] Eh, non è facile. Tanti ostacoli.',
        english: '[smiles] Eh, it\'s not easy. Many obstacles.',
        level: 'intermediate',
      },
      {
        speaker: 'You',
        italian: 'Già. A proposito, io lavoro proprio su quella problematica che hai menzionato ieri.',
        english: 'Right. By the way, I actually work on that exact problem you mentioned yesterday.',
        level: 'advanced',
      },
      {
        speaker: 'Giorgio',
        italian: 'Davvero? E come approcci il problema?',
        english: 'Really? And how do you approach the problem?',
        level: 'intermediate',
      },
      {
        speaker: 'You',
        italian: 'Ho sviluppato un metodo che potrebbe interessarti. Magari ne parliamo dopo?',
        english: 'I\'ve developed a method that might interest you. Maybe we can talk about it later?',
        level: 'intermediate',
      },
      {
        speaker: 'Giorgio',
        italian: 'Interessante. Dovremmo parlarne meglio. Hai tempo venerdì?',
        english: 'Interesting. We should talk more. Do you have time Friday?',
        level: 'intermediate',
      },
    ],
    culturalNotes: [
      {
        concept: 'La Bella Figura',
        explanation: 'Italians value making a good impression. Starting with genuine interest shows respect.',
        commonMistake: 'Asking for help immediately - seems transactional',
        betterApproach: 'Build connection first, let them offer help',
      },
      {
        concept: 'Indirectness',
        explanation: 'Direct requests can seem pushy. Italians often approach topics sideways.',
        commonMistake: '"Posso chiederti un favore?" (too direct)',
        betterApproach: 'Show value first, let them see the opportunity',
      },
    ],
    alternatives: [
      {
        situation: 'If they seem stressed/rushed',
        options: ['Keep it short', 'Offer to meet another time', 'Say: "Non voglio rubarti tempo, magari un caffè la prossima volta?"'],
      },
      {
        situation: 'If they ask about your work first',
        options: ['Give a brief interesting answer', 'Then turn it back to them', 'Show you\'re interested in THEM, not just pitching'],
      },
    ],
  },

  // ==================== SUPERMARKET ====================
  {
    id: 'supermarket-complaint',
    roomId: 'supermarket',
    title: 'Making a Complaint',
    titleNative: 'Fare un Reclamo',
    context: {
      setting: 'Customer service at supermarket',
      relationship: 'Customer and employee',
      formalityLevel: 'neutral',
      stakes: 'low',
    },
    learningPoints: [
      'How to be firm but respectful',
      'When to escalate vs. when to accept',
      'The power of acknowledging good service before the complaint',
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
        italian: 'Buongiorno. Prima di tutto, complimenti per il negozio - è sempre pulito e ben organizzato.',
        english: 'Good morning. First of all, compliments on the store - it\'s always clean and well organized.',
        level: 'intermediate',
      },
      {
        speaker: 'Manager',
        italian: 'Grazie... Sì, ci teniamo molto.',
        english: 'Thanks... Yes, we care a lot.',
        level: 'beginner',
      },
      {
        speaker: 'You',
        italian: 'Appunto. Per questo sono sorpreso di questo problema. Ho comprato questa carne ieri...',
        english: 'Exactly. That\'s why I\'m surprised about this problem. I bought this meat yesterday...',
        level: 'intermediate',
      },
      {
        speaker: 'You',
        italian: '...e l\'ho aperta stamattina. Non so se è normale.',
        english: '...and opened it this morning. I don\'t know if it\'s normal.',
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
        italian: 'Non è per i soldi, capisco che può capitare. È che mi fidavo della qualità qui.',
        english: 'It\'s not about the money, I understand these things happen. It\'s that I trusted the quality here.',
        level: 'advanced',
      },
      {
        speaker: 'Manager',
        italian: 'No no, guardi... Le faccio il rimborso completo. E uno sconto per il prossimo acquisto.',
        english: 'No no, look... I\'ll give you a full refund. And a discount for your next purchase.',
        level: 'intermediate',
      },
      {
        speaker: 'You',
        italian: 'Gentile. E se può controllare le altre confezioni di quel lotto, per gli altri clienti...',
        english: 'That\'s kind. And if you could check the other packages from that batch, for the other customers...',
        level: 'advanced',
      },
    ],
    culturalNotes: [
      {
        concept: 'Start Positive',
        explanation: 'Beginning with praise shows you\'re reasonable, not just complaining.',
        commonMistake: 'Starting angry - puts people defensive',
        betterApproach: 'Acknowledge good service before the problem',
      },
      {
        concept: 'Appeal to Shared Values',
        explanation: 'Mentioning trust/quality shows you care about the relationship, not just money.',
        commonMistake: 'Demanding compensation aggressively',
        betterApproach: 'Expressing disappointment about trust broken',
      },
    ],
    alternatives: [
      {
        situation: 'If they offer minimum help',
        options: ['Accept gracefully', 'Say: "Capisco. Grazie comunque per la disponibilità."', 'Your goal: leave with relationship intact'],
      },
      {
        situation: 'If they get defensive',
        options: ['Never argue facts', 'Say: "Non voglio litigare. Cerco solo una soluzione."', 'Stay calm, it\'s about the problem, not them'],
      },
    ],
  },

  // ==================== TRANSPORT ====================
  {
    id: 'transport-lost',
    roomId: 'transport',
    title: 'Asking for Help',
    titleNative: 'Chiedere Aiuto',
    context: {
      setting: 'Train station, confused traveler',
      relationship: 'Strangers',
      formalityLevel: 'neutral',
      stakes: 'medium',
    },
    learningPoints: [
      'How to interrupt someone politely',
      'Confirming you understood correctly',
      'Expressing gratitude appropriately',
    ],
    dialogue: [
      {
        speaker: 'You',
        italian: 'Mi scusi, posso disturbarla un momento?',
        english: 'Excuse me, can I disturb you for a moment?',
        level: 'beginner',
      },
      {
        speaker: 'Employee',
        italian: 'Sì, dica.',
        english: 'Yes, go ahead.',
        level: 'beginner',
      },
      {
        speaker: 'You',
        italian: 'Il treno per Roma? Non trovo il binario.',
        english: 'The train to Rome? I can\'t find the platform.',
        level: 'beginner',
      },
      {
        speaker: 'Employee',
        italian: 'Quale? Alle dieci o alle dieci e trenta?',
        english: 'Which one? Ten o\'clock or ten thirty?',
        level: 'intermediate',
      },
      {
        speaker: 'You',
        italian: 'Alle dieci. Scusi, non ho capito bene - a destra o a sinistra?',
        english: 'Ten o\'clock. Sorry, I didn\'t understand well - right or left?',
        level: 'intermediate',
      },
      {
        speaker: 'Employee',
        italian: 'È in ritardo. Parte dal binario sette, ma tra venti minuti.',
        english: 'It\'s delayed. Leaves from platform seven, but in twenty minutes.',
        level: 'intermediate',
      },
      {
        speaker: 'You',
        italian: 'Capisco. Quindi binario sette, ma tra venti minuti. Giusto?',
        english: 'I see. So platform seven, but in twenty minutes. Correct?',
        level: 'intermediate',
      },
      {
        speaker: 'Employee',
        italian: 'Esatto.',
        english: 'Exactly.',
        level: 'beginner',
      },
      {
        speaker: 'You',
        italian: 'Perfetto, grazie mille per la pazienza.',
        english: 'Perfect, thank you so much for your patience.',
        level: 'beginner',
      },
    ],
    culturalNotes: [
      {
        concept: 'Ask Permission to Interrupt',
        explanation: '"Posso disturbarla?" shows respect for their time.',
        commonMistake: 'Jumping straight to question',
        betterApproach: 'Acknowledge you\'re interrupting',
      },
      {
        concept: 'Confirm Understanding',
        explanation: 'Repeating back what you heard prevents mistakes.',
        commonMistake: 'Saying "ok" when you\'re confused',
        betterApproach: 'Repeat: "Quindi... giusto?"',
      },
    ],
    alternatives: [
      {
        situation: 'If they speak too fast',
        options: ['"Scusi, può ripetere più lentamente?"', '"Non capisco bene..."', 'Most people will slow down if asked politely'],
      },
      {
        situation: 'If you still don\'t understand',
        options: ['"Mi scriva per favore?" (ask them to write)', 'Point to map/schedule', 'Show your ticket, gesture'],
      },
    ],
  },

  // ==================== BEDROOM ====================
  {
    id: 'bedroom-conflict',
    roomId: 'bedroom',
    title: 'Navigating Tension',
    titleNative: 'Gestire la Tensione',
    context: {
      setting: 'Home, evening, partner seems distant',
      relationship: 'Long-term partners',
      formalityLevel: 'intimate',
      stakes: 'high',
    },
    learningPoints: [
      'Reading when someone needs space vs. connection',
      'Asking without interrogating',
      'Repair attempts when things feel off',
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
        italian: 'Ho da fare anch\'io. Ci sentiamo dopo.',
        english: 'I have things to do too. We\'ll talk later.',
        level: 'beginner',
      },
      {
        speaker: 'Luisa',
        italian: 'Cosa devi fare?',
        english: 'What do you have to do?',
        level: 'beginner',
      },
      {
        speaker: 'You',
        italian: 'Sto leggendo quel libro che mi hai consigliato. Tu divertiti.',
        english: 'I\'m reading that book you recommended. You have fun.',
        level: 'intermediate',
      },
      {
        speaker: 'Luisa',
        italian: '[più tardi] Sei ancora sveglio?',
        english: '[later] Are you still awake?',
        level: 'beginner',
      },
      {
        speaker: 'You',
        italian: 'Sì. Sto quasi finendo. Tutto bene?',
        english: 'Yes. I\'m almost done. Everything okay?',
        level: 'intermediate',
      },
      {
        speaker: 'Luisa',
        italian: 'Sì... solo stanca. E tu come stai?',
        english: 'Yes... just tired. And how are you?',
        level: 'beginner',
      },
      {
        speaker: 'You',
        italian: 'Stanco anche io. Ma contento di vederti.',
        english: 'Tired too. But happy to see you.',
        level: 'intermediate',
      },
      {
        speaker: 'Luisa',
        italian: 'Anch\'io. Buonanotte.',
        english: 'Me too. Goodnight.',
        level: 'beginner',
      },
    ],
    culturalNotes: [
      {
        concept: 'Give Space',
        explanation: 'Sometimes "What\'s wrong?" creates pressure. Being present without demanding creates safety.',
        commonMistake: '"Dobbiamo parlare" (creates anxiety)',
        betterApproach: 'Be available, let them come when ready',
      },
      {
        concept: 'Repair Attempts',
        explanation: 'Small connection moments ("contento di vederti") rebuild bridges without big talks.',
        commonMistake: 'Ignoring tension completely',
        betterApproach: 'Small gestures of connection',
      },
    ],
    alternatives: [
      {
        situation: 'If you sense something is really wrong',
        options: ['"Se vuoi parlarne, sono qui."', '"Noto che sembri pensierosa. Tutto ok?"', 'Offer, don\'t demand'],
      },
      {
        situation: 'If they want to talk',
        options: ['Listen more than speak', 'Validate: "Capisco perché ti senti così."', 'Ask: "Cosa posso fare?"'],
      },
    ],
  },
];

export interface DialogueLine {
  speaker: string;
  italian: string;
  english: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}
