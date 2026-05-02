// School Palace — School Nurse
// English source layer (truth layer)
// A1 level, concrete objects only for image pins

import type { Room } from '../../types';

// ============================================================================
// ROOM DEFINITION
// ============================================================================

export const schoolNurseRoom: Room = {
  id: 'school-nurse',
  name: 'School Nurse',
  subtitle: 'Health & Help',
  nameNative: 'Infermeria',
  image: 'rooms/school/school-nurse.jpg',
  description: 'When you feel sick or get hurt, the nurse is here to help.',
  grammarFocus: 'body symptoms & asking for help',
  vocabularyIds: [
    // The nurse's room
    'nurse-bed', 'nurse-chair', 'nurse-desk', 'nurse-thermometer', 'nurse-bandage',
    'nurse-plaster', 'nurse-medicine', 'nurse-pill', 'nurse-water', 'nurse-blanket',
    'nurse-pillow', 'nurse-sink', 'nurse-soap', 'nurse-towel', 'nurse-bin',
    // How you feel
    'symptom-sick', 'symptom-hurt', 'symptom-pain', 'symptom-headache', 'symptom-stomach-ache',
    'symptom-cough', 'symptom-cold', 'symptom-fever', 'symptom-cut', 'symptom-bruise',
    'symptom-burn', 'symptom-itchy', 'symptom-dizzy', 'symptom-tired', 'symptom-sad',
    // Asking for help
    'help-help', 'help-nurse', 'help-doctor', 'help-medicine', 'help-better',
    'help-rest', 'help-lie-down', 'help-drink', 'help-eat', 'help-call',
    'help-home', 'help-mummy', 'help-daddy', 'help-scared', 'help-okay',
  ],
  zones: [
    {
      id: 'nurse-room',
      name: "The Nurse's Room",
      nameNative: "L'Infermeria",
      description: 'Bed, desk, and first-aid kit',
      icon: '🏥',
      x: 30,
      y: 35,
      width: 30,
      height: 25,
      interiorImage: 'rooms/school/nurse-room.jpg',
      interiorVocab: [
        { wordId: 'nurse-bed', x: 20, y: 30 },
        { wordId: 'nurse-chair', x: 50, y: 25 },
        { wordId: 'nurse-desk', x: 75, y: 30 },
        { wordId: 'nurse-thermometer', x: 70, y: 45 },
        { wordId: 'nurse-bandage', x: 55, y: 50 },
        { wordId: 'nurse-plaster', x: 40, y: 55 },
        { wordId: 'nurse-medicine', x: 25, y: 50 },
        { wordId: 'nurse-pill', x: 15, y: 65 },
        { wordId: 'nurse-water', x: 30, y: 70 },
        { wordId: 'nurse-blanket', x: 20, y: 80 },
        { wordId: 'nurse-pillow', x: 35, y: 85 },
        { wordId: 'nurse-sink', x: 60, y: 70 },
        { wordId: 'nurse-soap', x: 70, y: 75 },
        { wordId: 'nurse-towel', x: 80, y: 65 },
        { wordId: 'nurse-bin', x: 85, y: 80 },
      ],
    },
    {
      id: 'how-you-feel',
      name: 'How You Feel',
      nameNative: 'Come Ti Senti',
      description: 'Symptoms and feelings',
      icon: '😷',
      x: 65,
      y: 55,
      width: 25,
      height: 25,
      interiorImage: 'rooms/school/nurse-symptoms.jpg',
      interiorVocab: [
        { wordId: 'symptom-sick', x: 20, y: 20 },
        { wordId: 'symptom-hurt', x: 50, y: 20 },
        { wordId: 'symptom-pain', x: 80, y: 20 },
        { wordId: 'symptom-headache', x: 20, y: 40 },
        { wordId: 'symptom-stomach-ache', x: 50, y: 40 },
        { wordId: 'symptom-cough', x: 80, y: 40 },
        { wordId: 'symptom-cold', x: 20, y: 60 },
        { wordId: 'symptom-fever', x: 50, y: 60 },
        { wordId: 'symptom-cut', x: 80, y: 60 },
        { wordId: 'symptom-bruise', x: 20, y: 80 },
        { wordId: 'symptom-burn', x: 40, y: 80 },
        { wordId: 'symptom-itchy', x: 60, y: 80 },
        { wordId: 'symptom-dizzy', x: 80, y: 80 },
        { wordId: 'symptom-tired', x: 35, y: 95 },
        { wordId: 'symptom-sad', x: 65, y: 95 },
      ],
    },
    {
      id: 'asking-help',
      name: 'Asking for Help',
      nameNative: 'Chiedere Aiuto',
      description: 'What you say to the nurse',
      icon: '🆘',
      x: 20,
      y: 65,
      width: 35,
      height: 25,
      interiorImage: 'rooms/school/nurse-help.jpg',
      interiorVocab: [
        { wordId: 'help-help', x: 20, y: 20 },
        { wordId: 'help-nurse', x: 50, y: 20 },
        { wordId: 'help-doctor', x: 80, y: 20 },
        { wordId: 'help-medicine', x: 20, y: 45 },
        { wordId: 'help-better', x: 50, y: 45 },
        { wordId: 'help-rest', x: 80, y: 45 },
        { wordId: 'help-lie-down', x: 20, y: 65 },
        { wordId: 'help-drink', x: 45, y: 65 },
        { wordId: 'help-eat', x: 70, y: 65 },
        { wordId: 'help-call', x: 85, y: 65 },
        { wordId: 'help-home', x: 20, y: 85 },
        { wordId: 'help-mummy', x: 40, y: 85 },
        { wordId: 'help-daddy', x: 60, y: 85 },
        { wordId: 'help-scared', x: 75, y: 85 },
        { wordId: 'help-okay', x: 50, y: 95 },
      ],
    },
  ],
  grammarPoints: [
    {
      id: 'nurse-body-parts',
      title: 'Body Parts & Pain',
      explanation: 'Saying where it hurts',
      example: 'My head hurts. My stomach hurts.',
      color: '#EF4444',
    },
    {
      id: 'nurse-requests',
      title: 'Asking for Help',
      explanation: 'Simple requests when you need care',
      example: 'Can I have...? I need...',
      color: '#3B82F6',
    },
  ],
};

// ============================================================================
// VOCABULARY
// ============================================================================

export interface SchoolConcept {
  id: string;
  emoji?: string;
  en: { word: string; phrase?: string; context?: string };
  it?: { word: string; phrase?: string; gender?: 'masculine' | 'feminine' | 'none'; pronunciation?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
  fr?: { word: string; phrase?: string; gender?: 'masculine' | 'feminine' | 'none'; pronunciation?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
  mt?: { word: string; phrase?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
}

export const schoolNurseVocabulary: SchoolConcept[] = [
  // === THE NURSE'S ROOM ===
  { id: 'nurse-bed', emoji: '🛏️', en: { word: 'bed', phrase: 'Lie on the bed.', context: 'Nurse instruction' }, it: { word: 'letto', phrase: 'Sdraiati sul letto.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'nurse-chair', emoji: '🪑', en: { word: 'chair', phrase: 'Sit on the chair.', context: 'Nurse instruction' }, it: { word: 'sedia', phrase: 'Siediti sulla sedia.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'nurse-desk', emoji: '🛋️', en: { word: 'desk', phrase: 'The nurse writes at the desk.', context: 'Nurse room' }, it: { word: 'scrivania', phrase: 'L'infermiera scrive alla scrivania.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'nurse-thermometer', emoji: '🌡️', en: { word: 'thermometer', phrase: 'Check my temperature.', context: 'Checking fever' }, it: { word: 'termometro', phrase: 'Controlla la temperatura.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'nurse-bandage', emoji: '🩹', en: { word: 'bandage', phrase: 'Wrap the bandage.', context: 'First aid' }, it: { word: 'benda', phrase: 'Metti la benda.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'nurse-plaster', emoji: '🩹', en: { word: 'plaster', phrase: 'Put a plaster on it.', context: 'Small cut' }, it: { word: 'cerotto', phrase: 'Metti un cerotto.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'nurse-medicine', emoji: '💊', en: { word: 'medicine', phrase: 'Take this medicine.', context: 'Treatment' }, it: { word: 'medicina', phrase: 'Prendi questa medicina.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'nurse-pill', emoji: '💊', en: { word: 'pill', phrase: 'Swallow the pill.', context: 'Treatment' }, it: { word: 'pastiglia', phrase: 'Ingoia la pastiglia.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'nurse-water', emoji: '💧', en: { word: 'water', phrase: 'Drink some water.', context: 'Care' }, it: { word: 'acqua', phrase: 'Bevi un po' d'acqua.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'nurse-blanket', emoji: '🛏️', en: { word: 'blanket', phrase: 'Here is a blanket.', context: 'Comfort' }, it: { word: 'coperta', phrase: 'Ecco una coperta.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'nurse-pillow', emoji: '🛏️', en: { word: 'pillow', phrase: 'Rest your head.', context: 'Comfort' }, it: { word: 'cuscino', phrase: 'Appoggia la testa.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'nurse-sink', emoji: '🚰', en: { word: 'sink', phrase: 'Wash at the sink.', context: 'Hygiene' }, it: { word: 'lavandino', phrase: 'Lavati al lavandino.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'nurse-soap', emoji: '🧼', en: { word: 'soap', phrase: 'Use soap.', context: 'Hygiene' }, it: { word: 'sapone', phrase: 'Usa il sapone.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'nurse-towel', emoji: '🧻', en: { word: 'towel', phrase: 'Dry with a towel.', context: 'Hygiene' }, it: { word: 'asciugamano', phrase: 'Asciugati con l'asciugamano.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'nurse-bin', emoji: '🗑️', en: { word: 'bin', phrase: 'Put it in the bin.', context: 'Cleaning' }, it: { word: 'cestino', phrase: 'Mettilo nel cestino.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },

  // === HOW YOU FEEL ===
  { id: 'symptom-sick', emoji: '🤢', en: { word: 'sick', phrase: 'I feel sick.', context: 'Telling nurse' }, it: { word: 'malato', phrase: 'Mi sento male.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'symptom-hurt', emoji: '😣', en: { word: 'hurt', phrase: 'It hurts.', context: 'Pain' }, it: { word: 'male', phrase: 'Mi fa male.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'symptom-pain', emoji: '😫', en: { word: 'pain', phrase: 'I have pain.', context: 'Pain' }, it: { word: 'dolore', phrase: 'Ho un dolore.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'symptom-headache', emoji: '🤕', en: { word: 'headache', phrase: 'My head hurts.', context: 'Head pain' }, it: { word: 'mal di testa', phrase: 'Mi fa male la testa.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'symptom-stomach-ache', emoji: '😖', en: { word: 'stomach ache', phrase: 'My stomach hurts.', context: 'Stomach pain' }, it: { word: 'mal di pancia', phrase: 'Mi fa male la pancia.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'symptom-cough', emoji: '😤', en: { word: 'cough', phrase: 'I have a cough.', context: 'Illness' }, it: { word: 'tosse', phrase: 'Ho la tosse.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'symptom-cold', emoji: '🤧', en: { word: 'cold', phrase: 'I have a cold.', context: 'Illness' }, it: { word: 'raffreddore', phrase: 'Ho il raffreddore.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'symptom-fever', emoji: '🌡️', en: { word: 'fever', phrase: 'I have a fever.', context: 'Temperature' }, it: { word: 'febbre', phrase: 'Ho la febbre.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'symptom-cut', emoji: '✂️', en: { word: 'cut', phrase: 'I have a cut.', context: 'Injury' }, it: { word: 'taglio', phrase: 'Ho un taglio.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'symptom-bruise', emoji: '💜', en: { word: 'bruise', phrase: 'I have a bruise.', context: 'Injury' }, it: { word: 'livido', phrase: 'Ho un livido.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'symptom-burn', emoji: '🔥', en: { word: 'burn', phrase: 'I have a burn.', context: 'Injury' }, it: { word: 'bruciatura', phrase: 'Ho una bruciatura.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'symptom-itchy', emoji: '🔴', en: { word: 'itchy', phrase: 'It is itchy.', context: 'Skin' }, it: { word: 'prurito', phrase: 'Mi prude.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'symptom-dizzy', emoji: '💫', en: { word: 'dizzy', phrase: 'I feel dizzy.', context: 'Feeling unwell' }, it: { word: 'capogiro', phrase: 'Mi gira la testa.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'symptom-tired', emoji: '😴', en: { word: 'tired', phrase: 'I am tired.', context: 'Exhausted' }, it: { word: 'stanco', phrase: 'Sono stanco.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'symptom-sad', emoji: '😢', en: { word: 'sad', phrase: 'I am sad.', context: 'Emotion' }, it: { word: 'triste', phrase: 'Sono triste.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },

  // === ASKING FOR HELP ===
  { id: 'help-help', emoji: '🆘', en: { word: 'help', phrase: 'I need help.', context: 'Emergency' }, it: { word: 'aiuto', phrase: 'Ho bisogno di aiuto.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'help-nurse', emoji: '👩‍⚕️', en: { word: 'nurse', phrase: 'Can I see the nurse?', context: 'Request' }, it: { word: 'infermiera', phrase: 'Posso vedere l'infermiera?', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'help-doctor', emoji: '👨‍⚕️', en: { word: 'doctor', phrase: 'Call the doctor.', context: 'Serious' }, it: { word: 'dottore', phrase: 'Chiama il dottore.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'help-medicine', emoji: '💊', en: { word: 'medicine', phrase: 'I need medicine.', context: 'Request' }, it: { word: 'medicina', phrase: 'Ho bisogno di medicina.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'help-better', emoji: '😊', en: { word: 'better', phrase: 'I feel better.', context: 'Recovery' }, it: { word: 'meglio', phrase: 'Mi sento meglio.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'help-rest', emoji: '🛌', en: { word: 'rest', phrase: 'I need to rest.', context: 'Recovery' }, it: { word: 'riposo', phrase: 'Ho bisogno di riposo.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'help-lie-down', emoji: '🛏️', en: { word: 'lie down', phrase: 'Lie down, please.', context: 'Nurse instruction' }, it: { word: 'sdraiarsi', phrase: 'Sdraiati, per favore.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'help-drink', emoji: '💧', en: { word: 'drink', phrase: 'Drink this.', context: 'Care' }, it: { word: 'bere', phrase: 'Bevi questo.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'help-eat', emoji: '🍽️', en: { word: 'eat', phrase: 'Eat something.', context: 'Care' }, it: { word: 'mangiare', phrase: 'Mangia qualcosa.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'help-call', emoji: '📞', en: { word: 'call', phrase: 'Call my mum.', context: 'Request' }, it: { word: 'chiamare', phrase: 'Chiama mia mamma.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'help-home', emoji: '🏠', en: { word: 'home', phrase: 'I want to go home.', context: 'Request' }, it: { word: 'casa', phrase: 'Voglio andare a casa.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'help-mummy', emoji: '👩', en: { word: 'mummy', phrase: 'I want my mummy.', context: 'Child request' }, it: { word: 'mamma', phrase: 'Voglio la mamma.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'help-daddy', emoji: '👨', en: { word: 'daddy', phrase: 'I want my daddy.', context: 'Child request' }, it: { word: 'papà', phrase: 'Voglio il papà.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'help-scared', emoji: '😨', en: { word: 'scared', phrase: 'I am scared.', context: 'Emotion' }, it: { word: 'spaventato', phrase: 'Ho paura.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'help-okay', emoji: '👍', en: { word: 'okay', phrase: 'Are you okay?', context: 'Checking' }, it: { word: 'bene', phrase: 'Stai bene?', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
];

// ============================================================================
// DIALOGUES
// ============================================================================

export interface SchoolDialogueTurn {
  speaker: 'teacher' | 'student' | 'peer';
  en: string;
  it?: string;
  fr?: string;
  mt?: string;
}

export interface SchoolDialogue {
  id: string;
  scenario: string;
  turns: SchoolDialogueTurn[];
}

export const schoolNurseDialogues: SchoolDialogue[] = [
  {
    id: 'nurse-feel-sick',
    scenario: 'Feeling sick in class',
    turns: [
      { speaker: 'student', en: 'I feel sick.' },
      { speaker: 'teacher', en: 'Go to the nurse.' },
      { speaker: 'student', en: 'Okay.' },
    ],
    natural: [
      { speaker: 'student', en: 'I feel sick.' },
      { speaker: 'teacher', en: 'Go to the nurse.' },
      { speaker: 'student', en: 'Okay.' },
    ]},
  
  {
    id: 'nurse-head-hurts',
    scenario: 'Headache',
    turns: [
      { speaker: 'student', en: 'My head hurts.' },
      { speaker: 'nurse', en: 'Sit down. Rest.' },
      { speaker: 'student', en: 'Thank you.' },
    ],
    natural: [
      { speaker: 'student', en: 'My head hurts.' },
      { speaker: 'nurse', en: 'Sit down. Rest.' },
      { speaker: 'student', en: 'Thanks.' },
    ]},
  
  {
    id: 'nurse-cut-finger',
    scenario: 'Cut finger',
    turns: [
      { speaker: 'student', en: 'I cut my finger.' },
      { speaker: 'nurse', en: 'Let me see.' },
      { speaker: 'nurse', en: 'I will put a plaster on it.' },
      { speaker: 'student', en: 'Thank you.' },
    ],
    natural: [
      { speaker: 'student', en: 'I cut my finger.' },
      { speaker: 'nurse', en: 'Let me see.' },
      { speaker: 'nurse', en: "I'll put a plaster on it." },
      { speaker: 'student', en: 'Thanks.' },
    ]},
  
  {
    id: 'nurse-temperature',
    scenario: 'Checking temperature',
    turns: [
      { speaker: 'nurse', en: 'Open your mouth.' },
      { speaker: 'nurse', en: 'You have a fever.' },
      { speaker: 'student', en: 'Can I go home?' },
      { speaker: 'nurse', en: 'I will call your mum.' },
    ],
    natural: [
      { speaker: 'nurse', en: 'Open your mouth.' },
      { speaker: 'nurse', en: 'You have a fever.' },
      { speaker: 'student', en: 'Can I go home?' },
      { speaker: 'nurse', en: "I'll call your mum." },
    ]},
  
  {
    id: 'nurse-stomach-ache',
    scenario: 'Stomach ache',
    turns: [
      { speaker: 'student', en: 'My stomach hurts.' },
      { speaker: 'nurse', en: 'Did you eat lunch?' },
      { speaker: 'student', en: 'No.' },
      { speaker: 'nurse', en: 'Drink some water.' },
    ],
    natural: [
      { speaker: 'student', en: 'My stomach hurts.' },
      { speaker: 'nurse', en: 'Did you eat lunch?' },
      { speaker: 'student', en: 'No.' },
      { speaker: 'nurse', en: 'Drink some water.' },
    ]},
  
  {
    id: 'nurse-scared',
    scenario: 'Feeling scared',
    turns: [
      { speaker: 'student', en: 'I am scared.' },
      { speaker: 'nurse', en: 'Do not worry.' },
      { speaker: 'nurse', en: 'You are safe here.' },
      { speaker: 'student', en: 'Thank you.' },
    ],
    natural: [
      { speaker: 'student', en: "I'm scared." },
      { speaker: 'nurse', en: "Don't worry." },
      { speaker: 'nurse', en: "You're safe here." },
      { speaker: 'student', en: 'Thanks.' },
    ]},
  
  {
    id: 'nurse-go-home',
    scenario: 'Sent home',
    turns: [
      { speaker: 'nurse', en: 'Your mum is here.' },
      { speaker: 'student', en: 'Can I go home?' },
      { speaker: 'nurse', en: 'Yes. Rest at home.' },
      { speaker: 'student', en: 'Bye. Thank you.' },
    ],
    natural: [
      { speaker: 'nurse', en: 'Your mum is here.' },
      { speaker: 'student', en: 'Can I go home?' },
      { speaker: 'nurse', en: 'Yeah. Rest at home.' },
      { speaker: 'student', en: 'Bye. Thanks.' },
    ]},
  
  {
    id: 'nurse-better',
    scenario: 'Feeling better',
    turns: [
      { speaker: 'nurse', en: 'How do you feel?' },
      { speaker: 'student', en: 'I feel better.' },
      { speaker: 'nurse', en: 'Good. Go back to class.' },
    ],
    natural: [
      { speaker: 'nurse', en: 'How do you feel?' },
      { speaker: 'student', en: 'I feel better.' },
      { speaker: 'nurse', en: 'Good. Go back to class.' },
    ]},
  
];

// ============================================================================
// IMAGE PROMPTS
// ============================================================================

export const schoolNurseImagePrompts: Record<string, string> = {
  'nurse-room': `A primary school nurse room with medical equipment and a caring atmosphere.
Visible items: small white bed with pillow and blanket, wooden chair, nurse desk with papers, thermometer on desk, roll of bandage, box of plasters, bottle of medicine, pills in a small cup, glass of water, white sink, bar of soap, towel on a hook, small bin.
Style: warm children's book illustration, soft colours, friendly, clear outlines, European primary school, clean and calm, no text, no labels, no watermarks.`,

  'how-you-feel': `A friendly cartoon grid showing a child with different symptoms and ailments.
Visible items: child looking sick and pale, child pointing to where it hurts, child with headache holding head, child holding stomach, child coughing, child with runny nose (cold), child with red fevered face, child showing a small cut on finger, child showing a bruise on knee, child showing a burn on hand, child scratching an itchy spot, child looking dizzy with spinning eyes, child yawning and tired, child looking sad with tears.
Style: warm children's book illustration, soft colours, friendly, expressive but gentle, diverse child, no text, no labels.`,

  'asking-help': `A caring school nurse talking with a young child in a primary school nurse room.
Visible items: nurse in uniform sitting at desk, child sitting on a chair, child asking for help, nurse offering medicine, child resting on bed, child drinking water, child eating a snack, nurse making a phone call, child wanting to go home, child asking for mummy, child looking scared, nurse saying everything is okay, child looking relieved.
Style: warm children's book illustration, soft colours, friendly, diverse characters, European primary school, no text, no labels.`,
};
