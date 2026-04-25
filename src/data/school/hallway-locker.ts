// School Palace — Hallway & Locker
// English source layer (truth layer)
// A1 level, concrete objects only for image pins

import type { Room } from '../../types';

// ============================================================================
// ROOM DEFINITION
// ============================================================================

export const hallwayLockerRoom: Room = {
  id: 'hallway-locker',
  name: 'Hallway & Locker',
  subtitle: 'Move & Store',
  nameNative: 'Corridoio e Armadietto',
  image: 'rooms/school/hallway-locker.jpg',
  description: 'Where you keep your things and move around the school.',
  grammarFocus: 'directions & movement verbs',
  vocabularyIds: [
    // Your locker
    'locker-locker', 'locker-shelf', 'locker-hook', 'locker-coat', 'locker-bag',
    'locker-shoes', 'locker-gym-bag', 'locker-lunchbox', 'locker-water-bottle', 'locker-umbrella',
    'locker-hat', 'locker-scarf', 'locker-gloves', 'locker-key', 'locker-name-tag',
    // The hallway
    'hall-hallway', 'hall-door', 'hall-floor', 'hall-wall', 'hall-light',
    'hall-window', 'hall-stairs', 'hall-up', 'hall-down', 'hall-left',
    'hall-right', 'hall-corner', 'hall-classroom', 'hall-office', 'hall-exit',
    // Moving around
    'move-walk', 'move-run', 'move-stop', 'move-wait', 'move-line',
    'move-queue', 'move-quiet', 'move-hurry', 'move-slow', 'move-fast',
    'move-push', 'move-pull', 'move-open', 'move-close', 'move-follow',
  ],
  zones: [
    {
      id: 'your-locker',
      name: 'Your Locker',
      nameNative: 'Il Tuo Armadietto',
      description: 'Where you keep your things',
      icon: '🎒',
      x: 25,
      y: 35,
      width: 25,
      height: 25,
      interiorImage: 'rooms/school/locker.jpg',
      interiorVocab: [
        { wordId: 'locker-locker', x: 20, y: 20 },
        { wordId: 'locker-shelf', x: 50, y: 20 },
        { wordId: 'locker-hook', x: 80, y: 20 },
        { wordId: 'locker-coat', x: 20, y: 40 },
        { wordId: 'locker-bag', x: 50, y: 40 },
        { wordId: 'locker-shoes', x: 80, y: 40 },
        { wordId: 'locker-gym-bag', x: 20, y: 60 },
        { wordId: 'locker-lunchbox', x: 45, y: 60 },
        { wordId: 'locker-water-bottle', x: 70, y: 60 },
        { wordId: 'locker-umbrella', x: 85, y: 60 },
        { wordId: 'locker-hat', x: 20, y: 80 },
        { wordId: 'locker-scarf', x: 40, y: 80 },
        { wordId: 'locker-gloves', x: 60, y: 80 },
        { wordId: 'locker-key', x: 75, y: 80 },
        { wordId: 'locker-name-tag', x: 50, y: 90 },
      ],
    },
    {
      id: 'the-hallway',
      name: 'The Hallway',
      nameNative: 'Il Corridoio',
      description: 'Doors, stairs, and directions',
      icon: '🚪',
      x: 55,
      y: 30,
      width: 30,
      height: 25,
      interiorImage: 'rooms/school/hallway.jpg',
      interiorVocab: [
        { wordId: 'hall-hallway', x: 50, y: 15 },
        { wordId: 'hall-door', x: 20, y: 25 },
        { wordId: 'hall-floor', x: 50, y: 30 },
        { wordId: 'hall-wall', x: 80, y: 25 },
        { wordId: 'hall-light', x: 50, y: 5 },
        { wordId: 'hall-window', x: 30, y: 40 },
        { wordId: 'hall-stairs', x: 70, y: 40 },
        { wordId: 'hall-up', x: 65, y: 25 },
        { wordId: 'hall-down', x: 75, y: 55 },
        { wordId: 'hall-left', x: 15, y: 55 },
        { wordId: 'hall-right', x: 85, y: 55 },
        { wordId: 'hall-corner', x: 50, y: 55 },
        { wordId: 'hall-classroom', x: 25, y: 70 },
        { wordId: 'hall-office', x: 60, y: 70 },
        { wordId: 'hall-exit', x: 80, y: 70 },
      ],
    },
    {
      id: 'moving-around',
      name: 'Moving Around',
      nameNative: 'Muoversi',
      description: 'How you move in school',
      icon: '🚶',
      x: 55,
      y: 60,
      width: 30,
      height: 25,
      interiorImage: 'rooms/school/moving.jpg',
      interiorVocab: [
        { wordId: 'move-walk', x: 20, y: 20 },
        { wordId: 'move-run', x: 50, y: 20 },
        { wordId: 'move-stop', x: 80, y: 20 },
        { wordId: 'move-wait', x: 20, y: 45 },
        { wordId: 'move-line', x: 50, y: 45 },
        { wordId: 'move-queue', x: 80, y: 45 },
        { wordId: 'move-quiet', x: 20, y: 65 },
        { wordId: 'move-hurry', x: 45, y: 65 },
        { wordId: 'move-slow', x: 70, y: 65 },
        { wordId: 'move-fast', x: 85, y: 65 },
        { wordId: 'move-push', x: 20, y: 85 },
        { wordId: 'move-pull', x: 40, y: 85 },
        { wordId: 'move-open', x: 60, y: 85 },
        { wordId: 'move-close', x: 75, y: 85 },
        { wordId: 'move-follow', x: 50, y: 95 },
      ],
    },
  ],
  grammarPoints: [
    {
      id: 'hallway-directions',
      title: 'Directions',
      explanation: 'Giving simple directions',
      example: 'Go left. Go right. Go up the stairs.',
      color: '#8B5CF6',
    },
    {
      id: 'hallway-imperatives',
      title: 'Movement Commands',
      explanation: 'Commands for moving around school',
      example: 'Line up. Wait here. Be quiet.',
      color: '#10B981',
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
  it?: { word: string; phrase?: string; gender?: 'masculine' | 'feminine' | 'none'; pronunciation?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } } };
  fr?: { word: string; phrase?: string; gender?: 'masculine' | 'feminine' | 'none'; pronunciation?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
  mt?: { word: string; phrase?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
}

export const hallwayLockerVocabulary: SchoolConcept[] = [
  // === YOUR LOCKER ===
  { id: 'locker-locker', emoji: '🗄️', en: { word: 'locker', phrase: 'Open your locker.', context: 'Storage' } },
  { id: 'locker-shelf', emoji: '📦', en: { word: 'shelf', phrase: 'Put it on the shelf.', context: 'Storage' } },
  { id: 'locker-hook', emoji: '🪝', en: { word: 'hook', phrase: 'Hang it on the hook.', context: 'Storage' } },
  { id: 'locker-coat', emoji: '🧥', en: { word: 'coat', phrase: 'Hang up your coat.', context: 'Clothes' } },
  { id: 'locker-bag', emoji: '🎒', en: { word: 'bag', phrase: 'Put your bag away.', context: 'Storage' } },
  { id: 'locker-shoes', emoji: '👟', en: { word: 'shoes', phrase: 'Take off your shoes.', context: 'Clothes' } },
  { id: 'locker-gym-bag', emoji: '🎽', en: { word: 'gym bag', phrase: 'Get your gym bag.', context: 'PE' } },
  { id: 'locker-lunchbox', emoji: '🍱', en: { word: 'lunchbox', phrase: 'Put your lunchbox here.', context: 'Lunch' } },
  { id: 'locker-water-bottle', emoji: '💧', en: { word: 'water bottle', phrase: 'Fill your water bottle.', context: 'Drink' } },
  { id: 'locker-umbrella', emoji: '☂️', en: { word: 'umbrella', phrase: 'Take an umbrella.', context: 'Rain' } },
  { id: 'locker-hat', emoji: '🧢', en: { word: 'hat', phrase: 'Wear a hat.', context: 'Clothes' } },
  { id: 'locker-scarf', emoji: '🧣', en: { word: 'scarf', phrase: 'Wear a scarf.', context: 'Clothes' } },
  { id: 'locker-gloves', emoji: '🧤', en: { word: 'gloves', phrase: 'Wear gloves.', context: 'Clothes' } },
  { id: 'locker-key', emoji: '🔑', en: { word: 'key', phrase: 'Do not lose your key.', context: 'Locker' } },
  { id: 'locker-name-tag', emoji: '🏷️', en: { word: 'name tag', phrase: 'Write your name.', context: 'Label' } },

  // === THE HALLWAY ===
  { id: 'hall-hallway', emoji: '🏫', en: { word: 'hallway', phrase: 'Wait in the hallway.', context: 'Corridor' } },
  { id: 'hall-door', emoji: '🚪', en: { word: 'door', phrase: 'Close the door.', context: 'Entrance' } },
  { id: 'hall-floor', emoji: '🟫', en: { word: 'floor', phrase: 'Sit on the floor.', context: 'Surface' } },
  { id: 'hall-wall', emoji: '⬜', en: { word: 'wall', phrase: 'Look at the wall.', context: 'Surface' } },
  { id: 'hall-light', emoji: '💡', en: { word: 'light', phrase: 'Turn on the light.', context: 'Electricity' } },
  { id: 'hall-window', emoji: '🪟', en: { word: 'window', phrase: 'Open the window.', context: 'Air' } },
  { id: 'hall-stairs', emoji: '🪜', en: { word: 'stairs', phrase: 'Go up the stairs.', context: 'Up' } },
  { id: 'hall-up', emoji: '⬆️', en: { word: 'up', phrase: 'Go up.', context: 'Direction' } },
  { id: 'hall-down', emoji: '⬇️', en: { word: 'down', phrase: 'Go down.', context: 'Direction' } },
  { id: 'hall-left', emoji: '⬅️', en: { word: 'left', phrase: 'Turn left.', context: 'Direction' } },
  { id: 'hall-right', emoji: '➡️', en: { word: 'right', phrase: 'Turn right.', context: 'Direction' } },
  { id: 'hall-corner', emoji: '📐', en: { word: 'corner', phrase: 'Wait in the corner.', context: 'Place' } },
  { id: 'hall-classroom', emoji: '🏫', en: { word: 'classroom', phrase: 'Go to the classroom.', context: 'Room' } },
  { id: 'hall-office', emoji: '🏢', en: { word: 'office', phrase: 'Go to the office.', context: 'Room' } },
  { id: 'hall-exit', emoji: '🚪', en: { word: 'exit', phrase: 'Go to the exit.', context: 'Leaving' } },

  // === MOVING AROUND ===
  { id: 'move-walk', emoji: '🚶', en: { word: 'walk', phrase: 'Walk, do not run.', context: 'Rule' } },
  { id: 'move-run', emoji: '🏃', en: { word: 'run', phrase: 'Do not run.', context: 'Rule' } },
  { id: 'move-stop', emoji: '🛑', en: { word: 'stop', phrase: 'Stop, please.', context: 'Command' } },
  { id: 'move-wait', emoji: '⏳', en: { word: 'wait', phrase: 'Wait here.', context: 'Command' } },
  { id: 'move-line', emoji: '🚶', en: { word: 'line', phrase: 'Make a line.', context: 'Queue' } },
  { id: 'move-queue', emoji: '🚶', en: { word: 'queue', phrase: 'Wait in the queue.', context: 'Queue' } },
  { id: 'move-quiet', emoji: '🤫', en: { word: 'quiet', phrase: 'Be quiet.', context: 'Command' } },
  { id: 'move-hurry', emoji: '🏃', en: { word: 'hurry', phrase: 'Hurry up.', context: 'Command' } },
  { id: 'move-slow', emoji: '🐢', en: { word: 'slow', phrase: 'Go slowly.', context: 'Speed' } },
  { id: 'move-fast', emoji: '⚡', en: { word: 'fast', phrase: 'Too fast.', context: 'Speed' } },
  { id: 'move-push', emoji: '👐', en: { word: 'push', phrase: 'Do not push.', context: 'Rule' } },
  { id: 'move-pull', emoji: '👐', en: { word: 'pull', phrase: 'Pull the door.', context: 'Door' } },
  { id: 'move-open', emoji: '📖', en: { word: 'open', phrase: 'Open the door.', context: 'Door' } },
  { id: 'move-close', emoji: '🔒', en: { word: 'close', phrase: 'Close the door.', context: 'Door' } },
  { id: 'move-follow', emoji: '👥', en: { word: 'follow', phrase: 'Follow me.', context: 'Lead' } },
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

export const hallwayLockerDialogues: SchoolDialogue[] = [
  {
    id: 'hl-line-up',
    scenario: 'Lining up',
    turns: [
      { speaker: 'teacher', en: 'Line up, please.' },
      { speaker: 'student', en: 'Where do we go?' },
      { speaker: 'teacher', en: 'To the classroom.' },
    ],
  },
  {
    id: 'hl-lost',
    scenario: 'Lost in the hallway',
    turns: [
      { speaker: 'student', en: 'Where is my classroom?' },
      { speaker: 'teacher', en: 'Turn left. Then right.' },
      { speaker: 'student', en: 'Thank you.' },
    ],
  },
  {
    id: 'hl-locker',
    scenario: 'At the locker',
    turns: [
      { speaker: 'peer', en: 'Is this your locker?' },
      { speaker: 'student', en: 'Yes. Here is my name tag.' },
      { speaker: 'peer', en: 'Sorry. I made a mistake.' },
    ],
  },
  {
    id: 'hl-no-running',
    scenario: 'No running in the hallway',
    turns: [
      { speaker: 'teacher', en: 'Do not run.' },
      { speaker: 'student', en: 'Sorry.' },
      { speaker: 'teacher', en: 'Walk, please.' },
    ],
  },
  {
    id: 'hl-be-quiet',
    scenario: 'Being quiet',
    turns: [
      { speaker: 'teacher', en: 'Be quiet in the hallway.' },
      { speaker: 'student', en: 'Okay. Sorry.' },
    ],
  },
  {
    id: 'hl-follow',
    scenario: 'Following the teacher',
    turns: [
      { speaker: 'teacher', en: 'Follow me.' },
      { speaker: 'student', en: 'Where are we going?' },
      { speaker: 'teacher', en: 'To the playground.' },
    ],
  },
  {
    id: 'hl-stairs',
    scenario: 'On the stairs',
    turns: [
      { speaker: 'teacher', en: 'Go up the stairs.' },
      { speaker: 'student', en: 'Which floor?' },
      { speaker: 'teacher', en: 'The first floor.' },
    ],
  },
  {
    id: 'hl-exit',
    scenario: 'Finding the exit',
    turns: [
      { speaker: 'student', en: 'Where is the exit?' },
      { speaker: 'teacher', en: 'Go straight. Then left.' },
      { speaker: 'student', en: 'Thank you.' },
    ],
  },
];

// ============================================================================
// IMAGE PROMPTS
// ============================================================================

export const hallwayLockerImagePrompts: Record<string, string> = {
  'your-locker': `An open primary school locker with children's belongings inside.
Visible items: metal locker with a small shelf and hook, red coat on hook, blue school bag on shelf, gym bag with sports clothes, colourful lunchbox, water bottle, small umbrella, winter hat, striped scarf, gloves, key on a string, name tag on the door.
Style: warm children's book illustration, soft colours, friendly, clear outlines, European primary school, no text, no labels, no watermarks.`,

  'the-hallway': `A long primary school hallway with doors and stairs.
Visible items: wooden doors with glass windows, polished floor, white walls, ceiling lights, windows along one side, staircase going up and down, exit sign, classroom doors, office door, corner turning left, children walking in a line.
Style: warm children's book illustration, soft colours, friendly, clear outlines, European primary school, no text, no labels.`,

  'moving-around': `Children moving around a primary school hallway in different ways.
Visible items: child walking calmly, child running (with teacher saying stop), child waiting in line, children queuing at a door, child being quiet with finger on lips, child hurrying, child walking slowly, child walking fast, child pushing (teacher showing stop hand), child pulling a door open, child closing a door gently, child following teacher at the front.
Style: warm children's book illustration, soft colours, friendly, diverse children, European primary school, no text, no labels.`,
};
