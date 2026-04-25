// School Palace — Classroom
// English source layer (truth layer)
// A1 level, concrete objects only for image pins

import type { Room } from '../../types';

// ============================================================================
// ROOM DEFINITION
// ============================================================================

export const classroomRoom: Room = {
  id: 'classroom',
  name: 'Classroom',
  subtitle: 'School Day',
  nameNative: 'Aula',
  image: 'rooms/school/classroom.jpg',
  description: 'The heart of the school — where you learn, listen, and grow.',
  grammarFocus: 'classroom objects & instructions',
  vocabularyIds: [
    // On your desk
    'desk-pencil', 'desk-pen', 'desk-eraser', 'desk-ruler', 'desk-notebook',
    'desk-textbook', 'desk-pencil-case', 'desk-sharpener', 'desk-scissors',
    'desk-glue', 'desk-paper', 'desk-worksheet', 'desk-folder', 'desk-highlighter',
    'desk-coloured-pencil',
    // Teacher's area
    'teacher-board', 'teacher-chalk', 'teacher-marker', 'teacher-board-eraser',
    'teacher-pointer', 'teacher-clock', 'teacher-calendar', 'teacher-poster',
    'teacher-computer', 'teacher-projector', 'teacher-screen', 'teacher-bookshelf',
    'teacher-desk', 'teacher-chair', 'teacher-bin',
    // Walls & entrance
    'wall-door', 'wall-window', 'wall-floor', 'wall-ceiling', 'wall-light',
    'wall-switch', 'wall-hook', 'wall-coat', 'wall-bag', 'wall-rubbish-bin',
    'wall-radiator', 'wall-clock', 'wall-exit-sign', 'wall-fire-alarm', 'wall-map',
    // Reading corner
    'read-bookshelf', 'read-book', 'read-cushion', 'read-rug', 'read-lamp',
    'read-plant', 'read-dictionary', 'read-magazine', 'read-bookmark', 'read-headphones',
    'read-tablet', 'read-puzzle', 'read-game', 'read-reading-log', 'read-bean-bag',
    // Group table
    'group-table', 'group-chair', 'group-whiteboard', 'group-marker', 'group-sticky-note',
    'group-poster-paper', 'group-tape', 'group-stapler', 'group-hole-punch', 'group-binder',
    'group-label', 'group-tray', 'group-paper-clip', 'group-ruler', 'group-scissors',
  ],
  zones: [
    {
      id: 'on-your-desk',
      name: 'On Your Desk',
      nameNative: 'Sulla Scrivania',
      description: 'Everything on your school desk',
      icon: '✏️',
      x: 30,
      y: 60,
      width: 25,
      height: 20,
      interiorImage: 'rooms/school/classroom-desk.jpg',
      interiorVocab: [
        { wordId: 'desk-pencil', x: 35, y: 25 },
        { wordId: 'desk-pen', x: 55, y: 30 },
        { wordId: 'desk-eraser', x: 30, y: 40 },
        { wordId: 'desk-ruler', x: 45, y: 35 },
        { wordId: 'desk-notebook', x: 55, y: 45 },
        { wordId: 'desk-textbook', x: 60, y: 25 },
        { wordId: 'desk-pencil-case', x: 20, y: 60 },
        { wordId: 'desk-sharpener', x: 25, y: 50 },
        { wordId: 'desk-scissors', x: 15, y: 70 },
        { wordId: 'desk-glue', x: 30, y: 65 },
        { wordId: 'desk-paper', x: 50, y: 60 },
        { wordId: 'desk-worksheet', x: 55, y: 55 },
        { wordId: 'desk-folder', x: 70, y: 50 },
        { wordId: 'desk-highlighter', x: 42, y: 42 },
        { wordId: 'desk-coloured-pencil', x: 75, y: 70 },
      ],
    },
    {
      id: 'teacher-area',
      name: "Teacher's Area",
      nameNative: "L'Area dell'Insegnante",
      description: 'The board and teacher desk',
      icon: '📚',
      x: 50,
      y: 25,
      width: 30,
      height: 25,
      interiorImage: 'rooms/school/classroom-teacher.jpg',
      interiorVocab: [
        { wordId: 'teacher-board', x: 50, y: 20 },
        { wordId: 'teacher-chalk', x: 40, y: 35 },
        { wordId: 'teacher-marker', x: 60, y: 35 },
        { wordId: 'teacher-board-eraser', x: 70, y: 30 },
        { wordId: 'teacher-pointer', x: 45, y: 40 },
        { wordId: 'teacher-clock', x: 85, y: 15 },
        { wordId: 'teacher-calendar', x: 15, y: 15 },
        { wordId: 'teacher-poster', x: 20, y: 30 },
        { wordId: 'teacher-computer', x: 75, y: 50 },
        { wordId: 'teacher-projector', x: 50, y: 10 },
        { wordId: 'teacher-screen', x: 50, y: 5 },
        { wordId: 'teacher-bookshelf', x: 10, y: 50 },
        { wordId: 'teacher-desk', x: 80, y: 60 },
        { wordId: 'teacher-chair', x: 80, y: 70 },
        { wordId: 'teacher-bin', x: 90, y: 75 },
      ],
    },
    {
      id: 'walls-entrance',
      name: 'Walls & Entrance',
      nameNative: 'Pareti & Ingresso',
      description: 'Door, windows, and wall items',
      icon: '🚪',
      x: 15,
      y: 30,
      width: 20,
      height: 30,
      interiorImage: 'rooms/school/classroom-walls.jpg',
      interiorVocab: [
        { wordId: 'wall-door', x: 50, y: 50 },
        { wordId: 'wall-window', x: 20, y: 30 },
        { wordId: 'wall-floor', x: 50, y: 90 },
        { wordId: 'wall-ceiling', x: 50, y: 5 },
        { wordId: 'wall-light', x: 50, y: 15 },
        { wordId: 'wall-switch', x: 55, y: 45 },
        { wordId: 'wall-hook', x: 80, y: 40 },
        { wordId: 'wall-coat', x: 80, y: 45 },
        { wordId: 'wall-bag', x: 85, y: 50 },
        { wordId: 'wall-rubbish-bin', x: 90, y: 80 },
        { wordId: 'wall-radiator', x: 10, y: 60 },
        { wordId: 'wall-clock', x: 85, y: 15 },
        { wordId: 'wall-exit-sign', x: 45, y: 45 },
        { wordId: 'wall-fire-alarm', x: 15, y: 15 },
        { wordId: 'wall-map', x: 30, y: 20 },
      ],
    },
    {
      id: 'reading-corner',
      name: 'Reading Corner',
      nameNative: 'Angolo Lettura',
      description: 'Books, cushions, and quiet time',
      icon: '📖',
      x: 75,
      y: 60,
      width: 20,
      height: 20,
      interiorImage: 'rooms/school/classroom-reading.jpg',
      interiorVocab: [
        { wordId: 'read-bookshelf', x: 20, y: 40 },
        { wordId: 'read-book', x: 25, y: 50 },
        { wordId: 'read-cushion', x: 50, y: 70 },
        { wordId: 'read-rug', x: 50, y: 85 },
        { wordId: 'read-lamp', x: 60, y: 30 },
        { wordId: 'read-plant', x: 15, y: 20 },
        { wordId: 'read-dictionary', x: 30, y: 55 },
        { wordId: 'read-magazine', x: 35, y: 50 },
        { wordId: 'read-bookmark', x: 28, y: 52 },
        { wordId: 'read-headphones', x: 70, y: 60 },
        { wordId: 'read-tablet', x: 75, y: 55 },
        { wordId: 'read-puzzle', x: 80, y: 70 },
        { wordId: 'read-game', x: 85, y: 75 },
        { wordId: 'read-backpack', x: 40, y: 60 },
        { wordId: 'read-name', x: 55, y: 75 },
      ],
    },
    {
      id: 'group-table',
      name: 'Group Table',
      nameNative: 'Tavolo di Gruppo',
      description: 'Supplies for working together',
      icon: '🤝',
      x: 50,
      y: 55,
      width: 20,
      height: 15,
      interiorImage: 'rooms/school/classroom-group.jpg',
      interiorVocab: [
        { wordId: 'group-table', x: 50, y: 50 },
        { wordId: 'group-chair', x: 30, y: 60 },
        { wordId: 'group-whiteboard', x: 80, y: 30 },
        { wordId: 'group-marker', x: 75, y: 35 },
        { wordId: 'group-sticky-note', x: 60, y: 45 },
        { wordId: 'group-poster-paper', x: 70, y: 55 },
        { wordId: 'group-tape', x: 55, y: 55 },
        { wordId: 'group-stapler', x: 45, y: 60 },
        { wordId: 'group-hole-punch', x: 40, y: 65 },
        { wordId: 'group-binder', x: 65, y: 60 },
        { wordId: 'group-label', x: 50, y: 65 },
        { wordId: 'group-tray', x: 35, y: 70 },
        { wordId: 'group-paper-clip', x: 48, y: 55 },
        { wordId: 'group-ruler', x: 55, y: 50 },
        { wordId: 'group-scissors', x: 42, y: 55 },
      ],
    },
  ],
  grammarPoints: [
    {
      id: 'classroom-imperatives',
      title: 'Classroom Instructions',
      explanation: 'Short commands teachers use every day',
      example: 'Sit down. Open your book. Listen.',
      color: '#3B82F6',
    },
    {
      id: 'classroom-questions',
      title: 'Asking in Class',
      explanation: 'Simple questions for survival',
      example: 'Can I go? Can I use this? I need help.',
      color: '#10B981',
    },
  ],
};

// ============================================================================
// VOCABULARY — CONCEPT-BASED WITH LANGUAGE LAYERS
// ============================================================================

export interface SchoolConcept {
  id: string;
  emoji?: string;
  en: {
    word: string;
    phrase?: string;
    context?: string;
  };
  it?: {
    word: string;
    phrase?: string;
    gender?: 'masculine' | 'feminine' | 'none';
    pronunciation?: string;
    audit?: {
      status: 'pending' | 'pass' | 'fix' | 'reject';
      auditor: string;
      notes?: string;
    };
  };
  fr?: {
    word: string;
    phrase?: string;
    gender?: 'masculine' | 'feminine' | 'none';
    pronunciation?: string;
    audit?: {
      status: 'pending' | 'pass' | 'fix' | 'reject';
      auditor: string;
      notes?: string;
    };
  };
  mt?: {
    word: string;
    phrase?: string;
    audit?: {
      status: 'pending' | 'pass' | 'fix' | 'reject';
      auditor: string;
      notes?: string;
    };
  };
}

export const classroomVocabulary: SchoolConcept[] = [
  // === ON YOUR DESK ===
  {
    id: 'desk-pencil',
    emoji: '✏️',
    en: { word: 'pencil', phrase: 'I need a pencil.', context: 'Asking for a writing tool' },
  },
  {
    id: 'desk-pen',
    emoji: '🖊️',
    en: { word: 'pen', phrase: 'Can I use a pen?', context: 'Asking permission' },
  },
  {
    id: 'desk-eraser',
    emoji: '🧼',
    en: { word: 'eraser', phrase: 'I need an eraser.', context: 'Fixing a mistake' },
  },
  {
    id: 'desk-ruler',
    emoji: '📏',
    en: { word: 'ruler', phrase: 'Draw a line.', context: 'Teacher instruction' },
  },
  {
    id: 'desk-notebook',
    emoji: '📓',
    en: { word: 'notebook', phrase: 'Open your notebook.', context: 'Teacher instruction' },
  },
  {
    id: 'desk-textbook',
    emoji: '📗',
    en: { word: 'textbook', phrase: 'Take out your textbook.', context: 'Teacher instruction' },
  },
  {
    id: 'desk-pencil-case',
    emoji: '🧰',
    en: { word: 'pencil case', phrase: 'Put it in your pencil case.', context: 'Tidying up' },
  },
  {
    id: 'desk-sharpener',
    emoji: '🔪',
    en: { word: 'sharpener', phrase: 'My pencil is broken.', context: 'Fixing a pencil' },
  },
  {
    id: 'desk-scissors',
    emoji: '✂️',
    en: { word: 'scissors', phrase: 'Pass me the scissors.', context: 'Asking a classmate' },
  },
  {
    id: 'desk-glue',
    emoji: '🧴',
    en: { word: 'glue', phrase: 'I need some glue.', context: 'Art activity' },
  },
  {
    id: 'desk-paper',
    emoji: '📄',
    en: { word: 'paper', phrase: 'Take a piece of paper.', context: 'Teacher instruction' },
  },
  {
    id: 'desk-worksheet',
    emoji: '📝',
    en: { word: 'worksheet', phrase: 'Finish the worksheet.', context: 'Teacher instruction' },
  },
  {
    id: 'desk-folder',
    emoji: '📁',
    en: { word: 'folder', phrase: 'Put it in your folder.', context: 'Organising work' },
  },
  {
    id: 'desk-highlighter',
    emoji: '🖍️',
    en: { word: 'highlighter', phrase: 'Use the highlighter.', context: 'Teacher instruction' },
  },
  {
    id: 'desk-coloured-pencil',
    emoji: '🎨',
    en: { word: 'coloured pencil', phrase: 'Use coloured pencils.', context: 'Art activity' },
  },

  // === TEACHER'S AREA ===
  {
    id: 'teacher-board',
    emoji: '⬛',
    en: { word: 'board', phrase: 'Look at the board.', context: 'Teacher instruction' },
  },
  {
    id: 'teacher-chalk',
    emoji: '🖍️',
    en: { word: 'chalk', phrase: 'The teacher uses chalk.', context: 'Writing on board' },
  },
  {
    id: 'teacher-marker',
    emoji: '🖊️',
    en: { word: 'marker', phrase: 'Use a marker.', context: 'Writing on whiteboard' },
  },
  {
    id: 'teacher-board-eraser',
    emoji: '🧽',
    en: { word: 'board eraser', phrase: 'Clean the board.', context: 'Erasing the board' },
  },
  {
    id: 'teacher-pointer',
    emoji: '👉',
    en: { word: 'pointer', phrase: 'The teacher uses a pointer.', context: 'Pointing at board' },
  },
  {
    id: 'teacher-clock',
    emoji: '🕐',
    en: { word: 'clock', phrase: 'Look at the clock.', context: 'Telling time' },
  },
  {
    id: 'teacher-calendar',
    emoji: '📅',
    en: { word: 'calendar', phrase: 'What day is it?', context: 'Checking date' },
  },
  {
    id: 'teacher-poster',
    emoji: '🖼️',
    en: { word: 'poster', phrase: 'Look at the poster.', context: 'Wall decoration' },
  },
  {
    id: 'teacher-computer',
    emoji: '💻',
    en: { word: 'computer', phrase: 'Turn on the computer.', context: 'Using technology' },
  },
  {
    id: 'teacher-projector',
    emoji: '📽️',
    en: { word: 'projector', phrase: 'The projector is on.', context: 'Showing images' },
  },
  {
    id: 'teacher-screen',
    emoji: '📺',
    en: { word: 'screen', phrase: 'Look at the screen.', context: 'Watching video' },
  },
  {
    id: 'teacher-bookshelf',
    emoji: '📚',
    en: { word: 'bookshelf', phrase: 'Get a book from the shelf.', context: 'Getting books' },
  },
  {
    id: 'teacher-desk',
    emoji: '🛋️',
    en: { word: 'teacher desk', phrase: 'Put it here, please.', context: 'Teacher speaking' },
  },
  {
    id: 'teacher-chair',
    emoji: '🪑',
    en: { word: 'chair', phrase: 'Sit on your chair.', context: 'Teacher instruction' },
  },
  {
    id: 'teacher-bin',
    emoji: '🗑️',
    en: { word: 'bin', phrase: 'Put it in the bin.', context: 'Throwing away' },
  },

  // === WALLS & ENTRANCE ===
  {
    id: 'wall-door',
    emoji: '🚪',
    en: { word: 'door', phrase: 'Close the door.', context: 'Entering/leaving' },
  },
  {
    id: 'wall-window',
    emoji: '🪟',
    en: { word: 'window', phrase: 'Open the window.', context: 'Fresh air' },
  },
  {
    id: 'wall-floor',
    emoji: '🟫',
    en: { word: 'floor', phrase: 'Sit on the floor.', context: 'Group activity' },
  },
  {
    id: 'wall-ceiling',
    emoji: '⬜',
    en: { word: 'ceiling', phrase: 'Look at the ceiling.', context: 'Pointing up' },
  },
  {
    id: 'wall-light',
    emoji: '💡',
    en: { word: 'light', phrase: 'Turn on the light.', context: 'Dark room' },
  },
  {
    id: 'wall-switch',
    emoji: '🔲',
    en: { word: 'switch', phrase: 'Press the switch.', context: 'Turning on/off' },
  },
  {
    id: 'wall-hook',
    emoji: '🪝',
    en: { word: 'hook', phrase: 'Hang it on the hook.', context: 'Hanging things' },
  },
  {
    id: 'wall-coat',
    emoji: '🧥',
    en: { word: 'coat', phrase: 'Take off your coat.', context: 'Arriving at school' },
  },
  {
    id: 'wall-bag',
    emoji: '🎒',
    en: { word: 'bag', phrase: 'Put your bag down.', context: 'Arriving at school' },
  },
  {
    id: 'wall-rubbish-bin',
    emoji: '🗑️',
    en: { word: 'rubbish bin', phrase: 'Throw it in the bin.', context: 'Cleaning up' },
  },
  {
    id: 'wall-radiator',
    emoji: '🔥',
    en: { word: 'radiator', phrase: 'The radiator is hot.', context: 'Winter' },
  },
  {
    id: 'wall-clock',
    emoji: '🕐',
    en: { word: 'wall clock', phrase: 'What time is it?', context: 'Checking time' },
  },
  {
    id: 'wall-exit-sign',
    emoji: '🚪',
    en: { word: 'exit sign', phrase: 'Follow the exit sign.', context: 'Fire drill' },
  },
  {
    id: 'wall-fire-alarm',
    emoji: '🚨',
    en: { word: 'fire alarm', phrase: 'The fire alarm is ringing.', context: 'Emergency' },
  },
  {
    id: 'wall-map',
    emoji: '🗺️',
    en: { word: 'map', phrase: 'Look at the map.', context: 'Geography lesson' },
  },

  // === READING CORNER ===
  {
    id: 'read-bookshelf',
    emoji: '📚',
    en: { word: 'bookshelf', phrase: 'Choose a book.', context: 'Reading time' },
  },
  {
    id: 'read-book',
    emoji: '📖',
    en: { word: 'book', phrase: 'Read this book.', context: 'Reading time' },
  },
  {
    id: 'read-cushion',
    emoji: '🟦',
    en: { word: 'cushion', phrase: 'Sit on the cushion.', context: 'Comfortable reading' },
  },
  {
    id: 'read-rug',
    emoji: '🟫',
    en: { word: 'rug', phrase: 'Sit on the rug.', context: 'Group reading' },
  },
  {
    id: 'read-lamp',
    emoji: '🛋️',
    en: { word: 'lamp', phrase: 'Turn on the lamp.', context: 'Reading light' },
  },
  {
    id: 'read-plant',
    emoji: '🪴',
    en: { word: 'plant', phrase: 'Water the plant.', context: 'Classroom job' },
  },
  {
    id: 'read-dictionary',
    emoji: '📕',
    en: { word: 'dictionary', phrase: 'Look it up in the dictionary.', context: 'Finding meaning' },
  },
  {
    id: 'read-magazine',
    emoji: '📰',
    en: { word: 'magazine', phrase: 'Read a magazine.', context: 'Free reading' },
  },
  {
    id: 'read-bookmark',
    emoji: '🔖',
    en: { word: 'bookmark', phrase: 'Use a bookmark.', context: 'Saving page' },
  },
  {
    id: 'read-headphones',
    emoji: '🎧',
    en: { word: 'headphones', phrase: 'Put on your headphones.', context: 'Listening activity' },
  },
  {
    id: 'read-tablet',
    emoji: '📱',
    en: { word: 'tablet', phrase: 'Use the tablet.', context: 'Digital learning' },
  },
  {
    id: 'read-puzzle',
    emoji: '🧩',
    en: { word: 'puzzle', phrase: 'Do a puzzle.', context: 'Free time' },
  },
  {
    id: 'read-game',
    emoji: '🎲',
    en: { word: 'game', phrase: 'Play a game.', context: 'Free time' },
  },
  {
    id: 'read-backpack',
    emoji: '🎒',
    en: { word: 'backpack', phrase: 'Put your backpack here.', context: 'Arriving at school' },
  },
  {
    id: 'read-name',
    emoji: '🏷️',
    en: { word: 'name', phrase: 'Write your name.', context: 'Labelling work' },
  },

  // === GROUP TABLE ===
  {
    id: 'group-table',
    emoji: '🟫',
    en: { word: 'table', phrase: 'Sit at the table.', context: 'Group work' },
  },
  {
    id: 'group-chair',
    emoji: '🪑',
    en: { word: 'chair', phrase: 'Pull up a chair.', context: 'Joining group' },
  },
  {
    id: 'group-whiteboard',
    emoji: '⬜',
    en: { word: 'whiteboard', phrase: 'Write on the whiteboard.', context: 'Group presentation' },
  },
  {
    id: 'group-marker',
    emoji: '🖊️',
    en: { word: 'whiteboard marker', phrase: 'Pass me a marker.', context: 'Group work' },
  },
  {
    id: 'group-sticky-note',
    emoji: '🟨',
    en: { word: 'sticky note', phrase: 'Write it on a sticky note.', context: 'Brainstorming' },
  },
  {
    id: 'group-poster-paper',
    emoji: '📄',
    en: { word: 'poster paper', phrase: 'Use poster paper.', context: 'Making poster' },
  },
  {
    id: 'group-tape',
    emoji: '🧻',
    en: { word: 'tape', phrase: 'Stick it with tape.', context: 'Art activity' },
  },
  {
    id: 'group-stapler',
    emoji: '📎',
    en: { word: 'stapler', phrase: 'Staple the pages.', context: 'Organising papers' },
  },
  {
    id: 'group-hole-punch',
    emoji: '🕳️',
    en: { word: 'hole punch', phrase: 'Punch the holes.', context: 'Preparing folder' },
  },
  {
    id: 'group-binder',
    emoji: '📒',
    en: { word: 'binder', phrase: 'Put it in the binder.', context: 'Organising work' },
  },
  {
    id: 'group-label',
    emoji: '🏷️',
    en: { word: 'label', phrase: 'Write your name on the label.', context: 'Naming things' },
  },
  {
    id: 'group-tray',
    emoji: '🥣',
    en: { word: 'tray', phrase: 'Put the papers on the tray.', context: 'Organising work' },
  },
  {
    id: 'group-paper-clip',
    emoji: '📎',
    en: { word: 'paper clip', phrase: 'Clip the papers.', context: 'Keeping papers together' },
  },
  {
    id: 'group-ruler',
    emoji: '📏',
    en: { word: 'ruler', phrase: 'Measure with the ruler.', context: 'Maths activity' },
  },
  {
    id: 'group-scissors',
    emoji: '✂️',
    en: { word: 'scissors', phrase: 'Cut with scissors.', context: 'Art activity' },
  },
];

// ============================================================================
// DIALOGUES — SOCIAL / FUNCTIONAL / EMOTIONAL LANGUAGE
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

export const classroomDialogues: SchoolDialogue[] = [
  {
    id: 'desk-no-pencil',
    scenario: 'Forgot my pencil',
    turns: [
      { speaker: 'student', en: "I don't have a pencil." },
      { speaker: 'teacher', en: 'Here, take one.' },
      { speaker: 'student', en: 'Thank you.' },
    ],
  },
  {
    id: 'desk-can-i-use',
    scenario: 'Asking to use something',
    turns: [
      { speaker: 'student', en: 'Can I use the scissors?' },
      { speaker: 'teacher', en: 'Yes, but be careful.' },
    ],
  },
  {
    id: 'desk-sharing-glue',
    scenario: 'Sharing supplies',
    turns: [
      { speaker: 'peer', en: 'Can I use your glue?' },
      { speaker: 'peer', en: 'Yes, here.' },
      { speaker: 'peer', en: 'Thanks!' },
    ],
  },
  {
    id: 'teacher-sit-down',
    scenario: 'Teacher starts class',
    turns: [
      { speaker: 'teacher', en: 'Sit down, everyone.' },
      { speaker: 'teacher', en: 'Open your book.' },
      { speaker: 'student', en: 'Which page?' },
      { speaker: 'teacher', en: 'Page ten.' },
    ],
  },
  {
    id: 'teacher-raise-hand',
    scenario: 'Asking a question',
    turns: [
      { speaker: 'teacher', en: 'Raise your hand.' },
      { speaker: 'student', en: 'Can I go to the bathroom?' },
      { speaker: 'teacher', en: 'Yes, but hurry back.' },
    ],
  },
  {
    id: 'teacher-look-at-board',
    scenario: 'Teacher gives instruction',
    turns: [
      { speaker: 'teacher', en: 'Look at the board.' },
      { speaker: 'student', en: 'I cannot see.' },
      { speaker: 'teacher', en: 'Move your chair forward.' },
    ],
  },
  {
    id: 'walls-late-arrival',
    scenario: 'Arriving late',
    turns: [
      { speaker: 'student', en: 'Sorry, I am late.' },
      { speaker: 'teacher', en: 'Sit down. Quietly.' },
    ],
  },
  {
    id: 'walls-leaving',
    scenario: 'Leaving the classroom',
    turns: [
      { speaker: 'teacher', en: 'Line up, please.' },
      { speaker: 'student', en: 'Where are we going?' },
      { speaker: 'teacher', en: 'To the playground.' },
    ],
  },
  {
    id: 'read-choose-book',
    scenario: 'Choosing a book',
    turns: [
      { speaker: 'student', en: 'Can I read this book?' },
      { speaker: 'teacher', en: 'Yes. Put it back after.' },
    ],
  },
  {
    id: 'group-work-together',
    scenario: 'Starting group work',
    turns: [
      { speaker: 'teacher', en: 'Work in groups.' },
      { speaker: 'peer', en: 'What do we do?' },
      { speaker: 'peer', en: 'We draw a poster.' },
    ],
  },
];

// ============================================================================
// IMAGE PROMPTS (for ComfyUI / Kimi generation)
// ============================================================================

export const classroomImagePrompts: Record<string, string> = {
  'on-your-desk': `A top-down view of a primary school child's wooden desk.
Visible items: yellow pencil, blue pen, pink eraser, wooden ruler, red notebook, green textbook, zip pencil case, pencil sharpener, child-safe scissors, glue stick, white paper, printed worksheet, yellow folder, pink highlighter, box of coloured pencils.
Style: warm children's book illustration, soft colours, friendly, clear outlines, European primary school setting, clean wooden desk surface, no text, no labels, no watermarks.`,

  'teacher-area': `A primary school classroom showing the teacher's area at the front.
Visible items: large green chalkboard with some chalk marks, whiteboard section, teacher's wooden desk with papers, desktop computer, projector mounted on ceiling, pull-down screen, wall clock, calendar, educational posters, bookshelf with colourful books, teacher's chair, small bin.
Style: warm children's book illustration, soft colours, friendly, clear outlines, European primary school, no text, no labels.`,

  'walls-entrance': `A primary school classroom showing the entrance door area and walls.
Visible items: wooden classroom door with glass window, coat hooks with a red coat and blue bag, wall clock, light switch, radiator, fire alarm, exit sign, world map on wall, ceiling lights, wooden floor, rubbish bin near door.
Style: warm children's book illustration, soft colours, friendly, clear outlines, European primary school, no text, no labels.`,

  'reading-corner': `A cozy reading corner in a primary school classroom.
Visible items: low wooden bookshelf with colourful books, large soft cushion, patterned rug, small reading lamp, potted plant, dictionary, magazine rack, bookmarks, child headphones, tablet on small table, puzzle box, board game, reading log clipboard, bean bag chair.
Style: warm children's book illustration, soft colours, friendly, cozy atmosphere, European primary school, no text, no labels.`,

  'group-table': `A group work table in a primary school classroom.
Visible items: round wooden table with four chairs, small whiteboard on easel, whiteboard markers, sticky notes in different colours, large poster paper, tape dispenser, stapler, hole punch, ring binder, name labels, paper tray, paper clips, rulers, scissors, coloured pencils scattered.
Style: warm children's book illustration, soft colours, friendly, creative atmosphere, European primary school, no text, no labels.`,
};
