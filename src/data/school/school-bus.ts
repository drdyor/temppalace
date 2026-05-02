// School Palace — School Bus
// English source layer (truth layer)
// A1 level, concrete objects only for image pins

import type { Room } from '../../types';

export const schoolBusRoom: Room = {
  id: 'school-bus',
  name: 'School Bus',
  subtitle: 'Ride & Safety',
  nameNative: 'Scuolabus',
  image: 'rooms/school/school-bus.jpg',
  description: 'The big yellow bus that takes you to school and back home.',
  grammarFocus: 'transport verbs & safety imperatives',
  vocabularyIds: [
    'bus-bus', 'bus-driver', 'bus-wheel', 'bus-door', 'bus-window',
    'bus-seat', 'bus-seatbelt', 'bus-handle', 'bus-mirror', 'bus-light',
    'bus-step', 'bus-floor', 'bus-roof', 'bus-number', 'bus-sign',
    'bus-get-on', 'bus-get-off', 'bus-sit-down', 'bus-stand-up', 'bus-wait',
    'bus-stop', 'bus-next', 'bus-ticket', 'bus-pass', 'bus-card',
    'bus-money', 'bus-pay', 'bus-change', 'bus-route', 'bus-station',
    'bus-safe', 'bus-danger', 'bus-careful', 'bus-hold-on', 'bus-no-shouting',
    'bus-no-eating', 'bus-stay-seated', 'bus-look-both-ways', 'bus-cross', 'bus-road',
    'bus-pavement', 'bus-stranger', 'bus-driver-help', 'bus-emergency', 'bus-bell',
  ],
  zones: [
    {
      id: 'the-bus',
      name: 'The Bus',
      nameNative: "L'Autobus",
      description: 'Parts of the bus',
      icon: '🚌',
      x: 25, y: 30, width: 30, height: 25,
      interiorImage: 'rooms/school/bus-parts.jpg',
      interiorVocab: [
        { wordId: 'bus-bus', x: 20, y: 25 }, { wordId: 'bus-driver', x: 50, y: 20 },
        { wordId: 'bus-wheel', x: 80, y: 25 }, { wordId: 'bus-door', x: 25, y: 45 },
        { wordId: 'bus-window', x: 55, y: 40 }, { wordId: 'bus-seat', x: 80, y: 45 },
        { wordId: 'bus-seatbelt', x: 15, y: 60 }, { wordId: 'bus-handle', x: 40, y: 60 },
        { wordId: 'bus-mirror', x: 65, y: 60 }, { wordId: 'bus-light', x: 85, y: 60 },
        { wordId: 'bus-step', x: 20, y: 80 }, { wordId: 'bus-floor', x: 45, y: 80 },
        { wordId: 'bus-roof', x: 70, y: 80 }, { wordId: 'bus-number', x: 30, y: 90 },
        { wordId: 'bus-sign', x: 60, y: 90 },
      ],
    },
    {
      id: 'getting-on-off',
      name: 'Getting On & Off',
      nameNative: 'Salire e Scendere',
      description: 'Using the bus',
      icon: '🚶',
      x: 60, y: 30, width: 30, height: 25,
      interiorImage: 'rooms/school/bus-getting.jpg',
      interiorVocab: [
        { wordId: 'bus-get-on', x: 20, y: 20 }, { wordId: 'bus-get-off', x: 50, y: 20 },
        { wordId: 'bus-sit-down', x: 80, y: 20 }, { wordId: 'bus-stand-up', x: 20, y: 45 },
        { wordId: 'bus-wait', x: 50, y: 45 }, { wordId: 'bus-stop', x: 80, y: 45 },
        { wordId: 'bus-next', x: 20, y: 65 }, { wordId: 'bus-ticket', x: 45, y: 65 },
        { wordId: 'bus-pass', x: 70, y: 65 }, { wordId: 'bus-card', x: 85, y: 65 },
        { wordId: 'bus-money', x: 20, y: 85 }, { wordId: 'bus-pay', x: 45, y: 85 },
        { wordId: 'bus-change', x: 65, y: 85 }, { wordId: 'bus-route', x: 30, y: 95 },
        { wordId: 'bus-station', x: 55, y: 95 },
      ],
    },
    {
      id: 'bus-rules-safety',
      name: 'Bus Rules & Safety',
      nameNative: 'Regole e Sicurezza',
      description: 'Staying safe on the bus',
      icon: '🛑',
      x: 40, y: 60, width: 35, height: 25,
      interiorImage: 'rooms/school/bus-safety.jpg',
      interiorVocab: [
        { wordId: 'bus-safe', x: 20, y: 20 }, { wordId: 'bus-danger', x: 50, y: 20 },
        { wordId: 'bus-careful', x: 80, y: 20 }, { wordId: 'bus-hold-on', x: 20, y: 45 },
        { wordId: 'bus-no-shouting', x: 50, y: 45 }, { wordId: 'bus-no-eating', x: 80, y: 45 },
        { wordId: 'bus-stay-seated', x: 20, y: 65 }, { wordId: 'bus-look-both-ways', x: 50, y: 65 },
        { wordId: 'bus-cross', x: 80, y: 65 }, { wordId: 'bus-road', x: 20, y: 85 },
        { wordId: 'bus-pavement', x: 45, y: 85 }, { wordId: 'bus-stranger', x: 65, y: 85 },
        { wordId: 'bus-driver-help', x: 80, y: 85 }, { wordId: 'bus-emergency', x: 35, y: 95 },
        { wordId: 'bus-bell', x: 60, y: 95 },
      ],
    },
  ],
  grammarPoints: [
    { id: 'bus-imperatives', title: 'Bus Commands', explanation: 'What the driver says', example: 'Sit down. Hold on. Stay seated.', color: '#EF4444' },
    { id: 'bus-safety-rules', title: 'Safety Rules', explanation: 'What you must and must not do', example: 'Look both ways. Do not shout.', color: '#10B981' },
  ],
};

export interface SchoolConcept {
  id: string; emoji?: string;
  en: { word: string; phrase?: string; context?: string };
  it?: { word: string; phrase?: string; gender?: 'masculine' | 'feminine' | 'none'; pronunciation?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
  fr?: { word: string; phrase?: string; gender?: 'masculine' | 'feminine' | 'none'; pronunciation?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
  mt?: { word: string; phrase?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
}

export const schoolBusVocabulary: SchoolConcept[] = [
  { id: 'bus-bus', emoji: '🚌', en: { word: 'bus', phrase: 'The bus is here.', context: 'Vehicle' }, it: { word: 'autobus', phrase: 'L'autobus è qui.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-driver', emoji: '👨‍✈️', en: { word: 'driver', phrase: 'The driver says hello.', context: 'Person' }, it: { word: 'autista', phrase: 'L'autista saluta.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-wheel', emoji: '⚙️', en: { word: 'wheel', phrase: 'The wheels go round.', context: 'Part' }, it: { word: 'ruota', phrase: 'Le ruote girano.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-door', emoji: '🚪', en: { word: 'door', phrase: 'Open the door.', context: 'Entrance' }, it: { word: 'porta', phrase: 'Apri la porta.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-window', emoji: '🪟', en: { word: 'window', phrase: 'Look out the window.', context: 'Glass' }, it: { word: 'finestra', phrase: 'Guarda fuori dalla finestra.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-seat', emoji: '💺', en: { word: 'seat', phrase: 'Sit in your seat.', context: 'Chair' }, it: { word: 'sedile', phrase: 'Siediti sul sedile.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-seatbelt', emoji: '🔒', en: { word: 'seatbelt', phrase: 'Fasten your seatbelt.', context: 'Safety' }, it: { word: 'cintura', phrase: 'Allaccia la cintura.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-handle', emoji: '(handles)', en: { word: 'handle', phrase: 'Hold the handle.', context: 'Grip' }, it: { word: 'maniglia', phrase: 'Tieni la maniglia.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-mirror', emoji: '🪞', en: { word: 'mirror', phrase: 'The driver looks in the mirror.', context: 'Reflection' }, it: { word: 'specchio', phrase: 'L'autista guarda nello specchio.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-light', emoji: '💡', en: { word: 'light', phrase: 'The light is on.', context: 'Illumination' }, it: { word: 'luce', phrase: 'La luce è accesa.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-step', emoji: '🪜', en: { word: 'step', phrase: 'Mind the step.', context: 'Stairs' }, it: { word: 'gradino', phrase: 'Attento al gradino.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-floor', emoji: '🟫', en: { word: 'floor', phrase: 'Stand on the floor.', context: 'Surface' }, it: { word: 'pavimento', phrase: 'Stai in piedi sul pavimento.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-roof', emoji: '⬆️', en: { word: 'roof', phrase: 'The roof is yellow.', context: 'Top' }, it: { word: 'tetto', phrase: 'Il tetto è giallo.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-number', emoji: '🔢', en: { word: 'number', phrase: 'Bus number ten.', context: 'Identifier' }, it: { word: 'numero', phrase: 'Autobus numero dieci.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-sign', emoji: '🛑', en: { word: 'sign', phrase: 'Read the sign.', context: 'Notice' }, it: { word: 'cartello', phrase: 'Leggi il cartello.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },

  { id: 'bus-get-on', emoji: '⬆️', en: { word: 'get on', phrase: 'Get on the bus.', context: 'Board' }, it: { word: 'salire', phrase: 'Sali sull'autobus.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-get-off', emoji: '⬇️', en: { word: 'get off', phrase: 'Get off at the stop.', context: 'Exit' }, it: { word: 'scendere', phrase: 'Scendi alla fermata.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-sit-down', emoji: '💺', en: { word: 'sit down', phrase: 'Sit down, please.', context: 'Command' }, it: { word: 'sedersi', phrase: 'Siediti, per favore.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-stand-up', emoji: '🧍', en: { word: 'stand up', phrase: 'Stand up slowly.', context: 'Command' }, it: { word: 'alzarsi', phrase: 'Alzati piano.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-wait', emoji: '⏳', en: { word: 'wait', phrase: 'Wait at the stop.', context: 'Patience' }, it: { word: 'aspettare', phrase: 'Aspetta alla fermata.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-stop', emoji: '🚏', en: { word: 'stop', phrase: 'The bus stops here.', context: 'Place' }, it: { word: 'fermata', phrase: 'L'autobus si ferma qui.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-next', emoji: '➡️', en: { word: 'next', phrase: 'Next stop, school.', context: 'Following' }, it: { word: 'prossimo', phrase: 'Prossima fermata, scuola.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-ticket', emoji: '🎫', en: { word: 'ticket', phrase: 'Show your ticket.', context: 'Pass' }, it: { word: 'biglietto', phrase: 'Mostra il biglietto.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-pass', emoji: '🎫', en: { word: 'pass', phrase: 'A bus pass.', context: 'Permit' }, it: { word: 'abbonamento', phrase: 'Un abbonamento.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-card', emoji: '💳', en: { word: 'card', phrase: 'Tap your card.', context: 'Payment' }, it: { word: 'carta', phrase: 'Passa la carta.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-money', emoji: '💰', en: { word: 'money', phrase: 'Do you have money?', context: 'Cash' }, it: { word: 'soldi', phrase: 'Hai i soldi?', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-pay', emoji: '💳', en: { word: 'pay', phrase: 'Pay the driver.', context: 'Transaction' }, it: { word: 'pagare', phrase: 'Paga l'autista.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-change', emoji: '💰', en: { word: 'change', phrase: 'Here is your change.', context: 'Money' }, it: { word: 'resto', phrase: 'Ecco il resto.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-route', emoji: '🗺️', en: { word: 'route', phrase: 'What is the route?', context: 'Path' }, it: { word: 'linea', phrase: 'Qual è la linea?', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-station', emoji: '🚉', en: { word: 'station', phrase: 'At the bus station.', context: 'Place' }, it: { word: 'stazione', phrase: 'Alla stazione degli autobus.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },

  { id: 'bus-safe', emoji: '✅', en: { word: 'safe', phrase: 'Stay safe.', context: 'Security' }, it: { word: 'sicuro', phrase: 'Stai al sicuro.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-danger', emoji: '⚠️', en: { word: 'danger', phrase: 'Danger. Be careful.', context: 'Warning' }, it: { word: 'pericolo', phrase: 'Pericolo. Fai attenzione.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-careful', emoji: '⚠️', en: { word: 'careful', phrase: 'Be careful.', context: 'Caution' }, it: { word: 'attento', phrase: 'Fai attenzione.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-hold-on', emoji: '✊', en: { word: 'hold on', phrase: 'Hold on tight.', context: 'Grip' }, it: { word: 'tenersi forte', phrase: 'Tieniti forte.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-no-shouting', emoji: '🤫', en: { word: 'no shouting', phrase: 'No shouting on the bus.', context: 'Rule' }, it: { word: 'non gridare', phrase: 'Non gridare sull'autobus.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-no-eating', emoji: '🚫', en: { word: 'no eating', phrase: 'No eating on the bus.', context: 'Rule' }, it: { word: 'non mangiare', phrase: 'Non mangiare sull'autobus.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-stay-seated', emoji: '💺', en: { word: 'stay seated', phrase: 'Stay seated while moving.', context: 'Rule' }, it: { word: 'rimanere seduti', phrase: 'Resta seduto quando l'autobus si muove.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-look-both-ways', emoji: '👀', en: { word: 'look both ways', phrase: 'Look both ways before crossing.', context: 'Safety' }, it: { word: 'guardare da entrambi i lati', phrase: 'Guarda da entrambi i lati prima di attraversare.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-cross', emoji: '🚶', en: { word: 'cross', phrase: 'Cross the road.', context: 'Action' }, it: { word: 'attraversare', phrase: 'Attraversa la strada.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-road', emoji: '🛣️', en: { word: 'road', phrase: 'Wait by the road.', context: 'Street' }, it: { word: 'strada', phrase: 'Aspetta vicino alla strada.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-pavement', emoji: '🚶', en: { word: 'pavement', phrase: 'Stand on the pavement.', context: 'Sidewalk' }, it: { word: 'marciapiede', phrase: 'Stai sul marciapiede.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-stranger', emoji: '🚷', en: { word: 'stranger', phrase: 'Do not talk to strangers.', context: 'Safety' }, it: { word: 'sconosciuto', phrase: 'Non parlare con gli sconosciuti.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-driver-help', emoji: '👨‍✈️', en: { word: 'ask the driver', phrase: 'Ask the driver for help.', context: 'Help' }, it: { word: 'chiedere aiuto', phrase: 'Chiedi aiuto all'autista.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-emergency', emoji: '🚨', en: { word: 'emergency', phrase: 'In an emergency, ring the bell.', context: 'Danger' }, it: { word: 'emergenza', phrase: 'In caso di emergenza, suona il campanello.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'bus-bell', emoji: '🔔', en: { word: 'bell', phrase: 'Ring the bell to stop.', context: 'Signal' }, it: { word: 'campanello', phrase: 'Suona il campanello per scendere.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
];

export interface SchoolDialogueTurn { speaker: 'teacher' | 'student' | 'peer'; en: string; it?: string; fr?: string; mt?: string; }
export interface SchoolDialogue { id: string; scenario: string; turns: SchoolDialogueTurn[]; }

export const schoolBusDialogues: SchoolDialogue[] = [
  { id: 'bus-get-on', scenario: 'Getting on the bus', turns: [
    { speaker: 'driver', en: 'Good morning.' },
    { speaker: 'student', en: 'Good morning. Here is my pass.' },
    { speaker: 'driver', en: 'Sit down, please.' },
  ],
    natural: [
      { speaker: 'driver', en: 'Good morning.' },
      { speaker: 'student', en: "Good morning. Here's my pass." },
      { speaker: 'driver', en: 'Sit down.' },
    ]},
  
  { id: 'bus-missed-stop', scenario: 'Missing your stop', turns: [
    { speaker: 'student', en: 'Did we pass my stop?' },
    { speaker: 'peer', en: 'Yes. The next stop is after school.' },
    { speaker: 'student', en: 'What do I do?' },
    { speaker: 'peer', en: 'Ask the driver.' },
  ],
    natural: [
      { speaker: 'student', en: 'Did we pass my stop?' },
      { speaker: 'peer', en: 'Yeah. The next stop is after school.' },
      { speaker: 'student', en: 'What do I do?' },
      { speaker: 'peer', en: 'Ask the driver.' },
    ]},
  
  { id: 'bus-no-seat', scenario: 'No seats left', turns: [
    { speaker: 'student', en: 'There are no seats.' },
    { speaker: 'driver', en: 'Hold on tight.' },
    { speaker: 'student', en: 'I will stand by the door.' },
  ],
    natural: [
      { speaker: 'student', en: 'No seats left.' },
      { speaker: 'driver', en: 'Hold on tight.' },
      { speaker: 'student', en: "I'll stand by the door." },
    ]},
  
  { id: 'bus-loud', scenario: 'Being too loud', turns: [
    { speaker: 'driver', en: 'No shouting on the bus.' },
    { speaker: 'student', en: 'Sorry.' },
    { speaker: 'driver', en: 'Stay seated and be quiet.' },
  ],
    natural: [
      { speaker: 'driver', en: 'No shouting on the bus.' },
      { speaker: 'student', en: 'Sorry.' },
      { speaker: 'driver', en: 'Stay seated and be quiet.' },
    ]},
  
  { id: 'bus-crossing', scenario: 'Crossing the road', turns: [
    { speaker: 'teacher', en: 'Look both ways before you cross.' },
    { speaker: 'student', en: 'The road is clear.' },
    { speaker: 'teacher', en: 'Walk. Do not run.' },
  ],
    natural: [
      { speaker: 'teacher', en: 'Look both ways before you cross.' },
      { speaker: 'student', en: 'The road is clear.' },
      { speaker: 'teacher', en: "Walk. Don't run." },
    ]},
  
  { id: 'bus-stranger', scenario: 'Stranger at the stop', turns: [
    { speaker: 'student', en: 'A stranger is talking to me.' },
    { speaker: 'driver', en: 'Get on the bus quickly.' },
    { speaker: 'student', en: 'Should I tell my teacher?' },
    { speaker: 'driver', en: 'Yes. Always tell an adult.' },
  ],
    natural: [
      { speaker: 'student', en: 'A stranger is talking to me.' },
      { speaker: 'driver', en: 'Get on the bus quickly.' },
      { speaker: 'student', en: 'Should I tell my teacher?' },
      { speaker: 'driver', en: 'Yeah. Always tell an adult.' },
    ]},
  
];

export const schoolBusImagePrompts: Record<string, string> = {
  'the-bus': `A yellow school bus from the outside and inside showing all its parts.
Visible items: big yellow bus body, friendly driver in the front, black wheels, folding door, windows along the side, seats with seatbelts, overhead handle bars, rear-view mirror, ceiling lights, steps at the entrance, floor aisle, roof with number, school bus sign.
Style: warm children's book illustration, soft colours, friendly, clear outlines, European primary school, no text, no labels, no watermarks.`,

  'getting-on-off': `Children getting on and off a school bus at a bus stop.
Visible items: child getting on the bus, child getting off, child sitting down in a seat, child standing up to leave, child waiting at the stop, bus stopping at the kerb, next stop sign, ticket in hand, bus pass on a lanyard, card being tapped, money for payment, change from driver, route map on the wall, bus station in background.
Style: warm children's book illustration, soft colours, friendly, diverse children, European primary school, no text, no labels.`,

  'bus-rules-safety': `Children learning and following safety rules on and around a school bus.
Visible items: child holding on to handle, no shouting symbol, no eating sign, child staying seated while bus moves, child looking both ways before crossing road, child crossing carefully, road with zebra crossing, pavement to wait on, stranger standing away from bus, child asking driver for help, emergency exit, stop bell being pressed, safe and happy children.
Style: warm children's book illustration, soft colours, friendly, diverse children, European primary school, no text, no labels.`,
};
