// School Palace — Playground
// English source layer (truth layer)
// A1 level, concrete objects only for image pins

import type { Room } from '../../types';

export const playgroundRoom: Room = {
  id: 'playground',
  name: 'Playground',
  subtitle: 'Play & Friends',
  nameNative: 'Parco Giochi',
  image: 'rooms/school/playground.jpg',
  description: 'Where you run, jump, play, and make friends.',
  grammarFocus: 'action verbs & emotions',
  vocabularyIds: [
    // Play equipment
    'play-slide', 'play-swing', 'play-climbing-frame', 'play-seesaw', 'play-roundabout',
    'play-bench', 'play-fence', 'play-gate', 'play-ball', 'play-rope',
    'play-sandbox', 'play-tyre', 'play-tunnel', 'play-ladder', 'play-net',
    // Playing games
    'game-run', 'game-jump', 'game-climb', 'game-slide', 'game-swing',
    'game-kick', 'game-throw', 'game-catch', 'game-bounce', 'game-chase',
    'game-hide', 'game-seek', 'game-skip', 'game-hop', 'game-tag',
    // Your body
    'body-head', 'body-arm', 'body-hand', 'body-finger', 'body-leg',
    'body-foot', 'body-knee', 'body-elbow', 'body-shoulder', 'body-stomach',
    'body-back', 'body-eye', 'body-ear', 'body-mouth', 'body-nose',
    // Feelings
    'feel-happy', 'feel-sad', 'feel-angry', 'feel-scared', 'feel-tired',
    'feel-excited', 'feel-worried', 'feel-sorry', 'feel-friend', 'feel-share',
    'feel-turn', 'feel-wait', 'feel-stop', 'feel-help', 'feel-hug',
  ],
  zones: [
    {
      id: 'play-equipment',
      name: 'Play Equipment',
      nameNative: 'Giochi',
      description: 'Slides, swings, and climbing frames',
      icon: '🛝',
      x: 30,
      y: 30,
      width: 30,
      height: 25,
      interiorImage: 'rooms/school/playground-equipment.jpg',
      interiorVocab: [
        { wordId: 'play-slide', x: 20, y: 30 },
        { wordId: 'play-swing', x: 50, y: 20 },
        { wordId: 'play-climbing-frame', x: 80, y: 35 },
        { wordId: 'play-seesaw', x: 35, y: 65 },
        { wordId: 'play-roundabout', x: 65, y: 60 },
        { wordId: 'play-bench', x: 15, y: 70 },
        { wordId: 'play-fence', x: 5, y: 50 },
        { wordId: 'play-gate', x: 5, y: 80 },
        { wordId: 'play-ball', x: 45, y: 80 },
        { wordId: 'play-rope', x: 75, y: 25 },
        { wordId: 'play-sandbox', x: 85, y: 70 },
        { wordId: 'play-tyre', x: 90, y: 60 },
        { wordId: 'play-tunnel', x: 60, y: 80 },
        { wordId: 'play-ladder', x: 78, y: 40 },
        { wordId: 'play-net', x: 82, y: 30 },
      ],
    },
    {
      id: 'playing-games',
      name: 'Playing Games',
      nameNative: 'Giocare',
      description: 'Actions and movements',
      icon: '🏃',
      x: 65,
      y: 55,
      width: 25,
      height: 20,
      interiorImage: 'rooms/school/playground-games.jpg',
      interiorVocab: [
        { wordId: 'game-run', x: 20, y: 30 },
        { wordId: 'game-jump', x: 40, y: 25 },
        { wordId: 'game-climb', x: 60, y: 20 },
        { wordId: 'game-slide', x: 80, y: 35 },
        { wordId: 'game-swing', x: 85, y: 50 },
        { wordId: 'game-kick', x: 30, y: 55 },
        { wordId: 'game-throw', x: 50, y: 50 },
        { wordId: 'game-catch', x: 70, y: 55 },
        { wordId: 'game-bounce', x: 45, y: 70 },
        { wordId: 'game-chase', x: 25, y: 75 },
        { wordId: 'game-hide', x: 15, y: 60 },
        { wordId: 'game-seek', x: 35, y: 40 },
        { wordId: 'game-skip', x: 55, y: 65 },
        { wordId: 'game-hop', x: 65, y: 75 },
        { wordId: 'game-tag', x: 75, y: 70 },
      ],
    },
    {
      id: 'your-body',
      name: 'Your Body',
      nameNative: 'Il Tuo Corpo',
      description: 'Body parts for bumps and bruises',
      icon: '🧍',
      x: 20,
      y: 60,
      width: 20,
      height: 25,
      interiorImage: 'rooms/school/playground-body.jpg',
      interiorVocab: [
        { wordId: 'body-head', x: 50, y: 10 },
        { wordId: 'body-arm', x: 25, y: 40 },
        { wordId: 'body-hand', x: 20, y: 55 },
        { wordId: 'body-finger', x: 15, y: 60 },
        { wordId: 'body-leg', x: 40, y: 65 },
        { wordId: 'body-foot', x: 45, y: 90 },
        { wordId: 'body-knee', x: 38, y: 72 },
        { wordId: 'body-elbow', x: 28, y: 45 },
        { wordId: 'body-shoulder', x: 35, y: 30 },
        { wordId: 'body-stomach', x: 50, y: 50 },
        { wordId: 'body-back', x: 65, y: 45 },
        { wordId: 'body-eye', x: 45, y: 12 },
        { wordId: 'body-ear', x: 58, y: 15 },
        { wordId: 'body-mouth', x: 50, y: 18 },
        { wordId: 'body-nose', x: 50, y: 14 },
      ],
    },
    {
      id: 'feelings',
      name: 'Feelings',
      nameNative: 'Sentimenti',
      description: 'How you feel and what you do',
      icon: '💛',
      x: 50,
      y: 60,
      width: 20,
      height: 20,
      interiorImage: 'rooms/school/playground-feelings.jpg',
      interiorVocab: [
        { wordId: 'feel-happy', x: 20, y: 20 },
        { wordId: 'feel-sad', x: 40, y: 20 },
        { wordId: 'feel-angry', x: 60, y: 20 },
        { wordId: 'feel-scared', x: 80, y: 20 },
        { wordId: 'feel-tired', x: 20, y: 45 },
        { wordId: 'feel-excited', x: 40, y: 45 },
        { wordId: 'feel-worried', x: 60, y: 45 },
        { wordId: 'feel-sorry', x: 80, y: 45 },
        { wordId: 'feel-friend', x: 25, y: 70 },
        { wordId: 'feel-share', x: 45, y: 70 },
        { wordId: 'feel-turn', x: 65, y: 70 },
        { wordId: 'feel-wait', x: 85, y: 70 },
        { wordId: 'feel-stop', x: 35, y: 85 },
        { wordId: 'feel-help', x: 55, y: 85 },
        { wordId: 'feel-hug', x: 75, y: 85 },
      ],
    },
  ],
  grammarPoints: [
    {
      id: 'playground-verbs',
      title: 'Action Verbs',
      explanation: 'What you do in the playground',
      example: 'I run. I jump. I climb.',
      color: '#F59E0B',
    },
    {
      id: 'playground-feelings',
      title: 'Feelings',
      explanation: 'How to say how you feel',
      example: 'I am happy. I am sad.',
      color: '#EC4899',
    },
  ],
};

export interface SchoolConcept {
  id: string;
  emoji?: string;
  en: { word: string; phrase?: string; context?: string };
  it?: { word: string; phrase?: string; gender?: 'masculine' | 'feminine' | 'none'; pronunciation?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
  fr?: { word: string; phrase?: string; gender?: 'masculine' | 'feminine' | 'none'; pronunciation?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
  mt?: { word: string; phrase?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
}

export const playgroundVocabulary: SchoolConcept[] = [
  // === PLAY EQUIPMENT ===
  { id: 'play-slide', emoji: '🛝', en: { word: 'slide', phrase: 'I go down the slide.', context: 'Playing' } },
  { id: 'play-swing', emoji: '🎠', en: { word: 'swing', phrase: 'I go on the swing.', context: 'Playing' } },
  { id: 'play-climbing-frame', emoji: '🧗', en: { word: 'climbing frame', phrase: 'I climb the frame.', context: 'Playing' } },
  { id: 'play-seesaw', emoji: '⚖️', en: { word: 'seesaw', phrase: 'We go on the seesaw.', context: 'Playing together' } },
  { id: 'play-roundabout', emoji: '🎡', en: { word: 'roundabout', phrase: 'Spin the roundabout.', context: 'Playing' } },
  { id: 'play-bench', emoji: '🪑', en: { word: 'bench', phrase: 'Sit on the bench.', context: 'Resting' } },
  { id: 'play-fence', emoji: '🚧', en: { word: 'fence', phrase: 'Do not climb the fence.', context: 'Safety' } },
  { id: 'play-gate', emoji: '🚪', en: { word: 'gate', phrase: 'Open the gate.', context: 'Entering' } },
  { id: 'play-ball', emoji: '⚽', en: { word: 'ball', phrase: 'Throw the ball.', context: 'Playing' } },
  { id: 'play-rope', emoji: '🪢', en: { word: 'rope', phrase: 'Climb the rope.', context: 'Playing' } },
  { id: 'play-sandbox', emoji: '🏖️', en: { word: 'sandbox', phrase: 'Play in the sandbox.', context: 'Playing' } },
  { id: 'play-tyre', emoji: '🛞', en: { word: 'tyre', phrase: 'Jump on the tyre.', context: 'Playing' } },
  { id: 'play-tunnel', emoji: '🚇', en: { word: 'tunnel', phrase: 'Crawl through the tunnel.', context: 'Playing' } },
  { id: 'play-ladder', emoji: '🪜', en: { word: 'ladder', phrase: 'Climb the ladder.', context: 'Playing' } },
  { id: 'play-net', emoji: '🕸️', en: { word: 'net', phrase: 'Climb the net.', context: 'Playing' } },

  // === PLAYING GAMES ===
  { id: 'game-run', emoji: '🏃', en: { word: 'run', phrase: 'I run fast.', context: 'Moving' } },
  { id: 'game-jump', emoji: '⬆️', en: { word: 'jump', phrase: 'I jump high.', context: 'Moving' } },
  { id: 'game-climb', emoji: '🧗', en: { word: 'climb', phrase: 'I climb up.', context: 'Moving' } },
  { id: 'game-slide', emoji: '⬇️', en: { word: 'slide', phrase: 'I slide down.', context: 'Moving' } },
  { id: 'game-swing', emoji: '🔄', en: { word: 'swing', phrase: 'I swing high.', context: 'Moving' } },
  { id: 'game-kick', emoji: '🦶', en: { word: 'kick', phrase: 'Kick the ball.', context: 'Playing football' } },
  { id: 'game-throw', emoji: '🤾', en: { word: 'throw', phrase: 'Throw the ball.', context: 'Playing catch' } },
  { id: 'game-catch', emoji: '🙌', en: { word: 'catch', phrase: 'Catch the ball.', context: 'Playing catch' } },
  { id: 'game-bounce', emoji: '⚽', en: { word: 'bounce', phrase: 'Bounce the ball.', context: 'Playing' } },
  { id: 'game-chase', emoji: '🏃', en: { word: 'chase', phrase: 'I chase you.', context: 'Playing tag' } },
  { id: 'game-hide', emoji: '🙈', en: { word: 'hide', phrase: 'Hide behind the tree.', context: 'Playing hide and seek' } },
  { id: 'game-seek', emoji: '🔍', en: { word: 'seek', phrase: 'I seek you.', context: 'Playing hide and seek' } },
  { id: 'game-skip', emoji: '💃', en: { word: 'skip', phrase: 'I skip to school.', context: 'Moving happily' } },
  { id: 'game-hop', emoji: '🐇', en: { word: 'hop', phrase: 'Hop on one foot.', context: 'Playing' } },
  { id: 'game-tag', emoji: '🏷️', en: { word: 'tag', phrase: 'Tag, you are it.', context: 'Playing tag' } },

  // === YOUR BODY ===
  { id: 'body-head', emoji: '🙂', en: { word: 'head', phrase: 'My head hurts.', context: 'Pain' } },
  { id: 'body-arm', emoji: '💪', en: { word: 'arm', phrase: 'I hurt my arm.', context: 'Pain' } },
  { id: 'body-hand', emoji: '✋', en: { word: 'hand', phrase: 'Raise your hand.', context: 'Classroom' } },
  { id: 'body-finger', emoji: '👆', en: { word: 'finger', phrase: 'I cut my finger.', context: 'Pain' } },
  { id: 'body-leg', emoji: '🦵', en: { word: 'leg', phrase: 'I hurt my leg.', context: 'Pain' } },
  { id: 'body-foot', emoji: '🦶', en: { word: 'foot', phrase: 'My foot hurts.', context: 'Pain' } },
  { id: 'body-knee', emoji: '🦵', en: { word: 'knee', phrase: 'I scraped my knee.', context: 'Pain' } },
  { id: 'body-elbow', emoji: '💪', en: { word: 'elbow', phrase: 'I hurt my elbow.', context: 'Pain' } },
  { id: 'body-shoulder', emoji: '💪', en: { word: 'shoulder', phrase: 'I hurt my shoulder.', context: 'Pain' } },
  { id: 'body-stomach', emoji: '😣', en: { word: 'stomach', phrase: 'My stomach hurts.', context: 'Pain' } },
  { id: 'body-back', emoji: '😫', en: { word: 'back', phrase: 'My back hurts.', context: 'Pain' } },
  { id: 'body-eye', emoji: '👁️', en: { word: 'eye', phrase: 'I have something in my eye.', context: 'Problem' } },
  { id: 'body-ear', emoji: '👂', en: { word: 'ear', phrase: 'My ear hurts.', context: 'Pain' } },
  { id: 'body-mouth', emoji: '👄', en: { word: 'mouth', phrase: 'Open your mouth.', context: 'Nurse' } },
  { id: 'body-nose', emoji: '👃', en: { word: 'nose', phrase: 'My nose is bleeding.', context: 'Problem' } },

  // === FEELINGS ===
  { id: 'feel-happy', emoji: '😊', en: { word: 'happy', phrase: 'I am happy.', context: 'Feeling good' } },
  { id: 'feel-sad', emoji: '😢', en: { word: 'sad', phrase: 'I am sad.', context: 'Feeling bad' } },
  { id: 'feel-angry', emoji: '😠', en: { word: 'angry', phrase: 'I am angry.', context: 'Feeling bad' } },
  { id: 'feel-scared', emoji: '😨', en: { word: 'scared', phrase: 'I am scared.', context: 'Feeling bad' } },
  { id: 'feel-tired', emoji: '😴', en: { word: 'tired', phrase: 'I am tired.', context: 'Feeling bad' } },
  { id: 'feel-excited', emoji: '🤩', en: { word: 'excited', phrase: 'I am excited.', context: 'Feeling good' } },
  { id: 'feel-worried', emoji: '😟', en: { word: 'worried', phrase: 'I am worried.', context: 'Feeling bad' } },
  { id: 'feel-sorry', emoji: '😔', en: { word: 'sorry', phrase: 'I am sorry.', context: 'Apologising' } },
  { id: 'feel-friend', emoji: '👫', en: { word: 'friend', phrase: 'You are my friend.', context: 'Social' } },
  { id: 'feel-share', emoji: '🤝', en: { word: 'share', phrase: 'Can we share?', context: 'Social' } },
  { id: 'feel-turn', emoji: '🔄', en: { word: 'turn', phrase: 'It is my turn.', context: 'Social' } },
  { id: 'feel-wait', emoji: '⏳', en: { word: 'wait', phrase: 'Wait for me.', context: 'Social' } },
  { id: 'feel-stop', emoji: '🛑', en: { word: 'stop', phrase: 'Stop, please.', context: 'Social' } },
  { id: 'feel-help', emoji: '🆘', en: { word: 'help', phrase: 'I need help.', context: 'Asking for help' } },
  { id: 'feel-hug', emoji: '🤗', en: { word: 'hug', phrase: 'Can I have a hug?', context: 'Comfort' } },
];

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

export const playgroundDialogues: SchoolDialogue[] = [
  {
    id: 'play-want-swing',
    scenario: 'Wanting a turn on the swing',
    turns: [
      { speaker: 'peer', en: 'Can I have a turn?' },
      { speaker: 'peer', en: 'Yes, in one minute.' },
      { speaker: 'peer', en: 'Thank you.' },
    ],
  },
  {
    id: 'play-fell-down',
    scenario: 'Fell down in the playground',
    turns: [
      { speaker: 'student', en: 'I fell down.' },
      { speaker: 'peer', en: 'Are you okay?' },
      { speaker: 'student', en: 'My knee hurts.' },
      { speaker: 'peer', en: 'I will get the teacher.' },
    ],
  },
  {
    id: 'play-want-to-play',
    scenario: 'Asking to join a game',
    turns: [
      { speaker: 'student', en: 'Can I play?' },
      { speaker: 'peer', en: 'Yes, come on.' },
      { speaker: 'student', en: 'What are we playing?' },
      { speaker: 'peer', en: 'We are playing tag.' },
    ],
  },
  {
    id: 'play-sharing',
    scenario: 'Sharing a toy',
    turns: [
      { speaker: 'peer', en: 'Can I play with the ball?' },
      { speaker: 'peer', en: 'Yes, we can share.' },
      { speaker: 'peer', en: 'Your turn.' },
    ],
  },
  {
    id: 'play-hurt',
    scenario: 'Telling the teacher about an injury',
    turns: [
      { speaker: 'student', en: 'Teacher, I hurt my arm.' },
      { speaker: 'teacher', en: 'Let me see.' },
      { speaker: 'teacher', en: 'You need a plaster.' },
    ],
  },
  {
    id: 'play-time-to-go',
    scenario: 'Time to go inside',
    turns: [
      { speaker: 'teacher', en: 'Time to go inside.' },
      { speaker: 'student', en: 'Do we have to?' },
      { speaker: 'teacher', en: 'Yes, it is time for lunch.' },
    ],
  },
  {
    id: 'play-lonely',
    scenario: 'Feeling left out',
    turns: [
      { speaker: 'student', en: 'Nobody wants to play with me.' },
      { speaker: 'peer', en: 'I will play with you.' },
      { speaker: 'student', en: 'Thank you. You are my friend.' },
    ],
  },
  {
    id: 'play-bathroom',
    scenario: 'Needing the bathroom during play',
    turns: [
      { speaker: 'student', en: 'I need the bathroom.' },
      { speaker: 'teacher', en: 'Go quickly. Come back after.' },
    ],
  },
];

export const playgroundImagePrompts: Record<string, string> = {
  'play-equipment': `A colourful primary school playground with various equipment.
Visible items: green slide, red swing set, wooden climbing frame with rope ladder, blue seesaw, yellow roundabout, wooden bench, green fence, wooden gate, red and blue ball, thick climbing rope, wooden sandbox with toys, tyre swing, plastic tunnel, metal ladder, cargo net.
Style: warm children's book illustration, soft colours, friendly, clear outlines, European primary school, sunny day, no text, no labels.`,

  'playing-games': `Children playing games in a primary school playground.
Visible items: children running, jumping, climbing, sliding, swinging, kicking a ball, throwing a ball, catching a ball, bouncing a ball, chasing each other, hiding behind a tree, seeking, skipping with a rope, hopping on one foot, playing tag.
Style: warm children's book illustration, soft colours, friendly, dynamic poses, diverse children, European primary school, no text, no labels.`,

  'your-body': `A friendly cartoon child showing body parts, standing in a playground.
Visible items: head, arms, hands with fingers, legs, feet, knees, elbows, shoulders, stomach, back, eyes, ears, mouth, nose — all clearly visible and labelled by position.
Style: warm children's book illustration, soft colours, friendly, anatomical but child-friendly, simple background, no text, no labels.`,

  'feelings': `A grid of cartoon children faces showing different emotions in a playground setting.
Visible items: happy smiling child, sad child with tears, angry child with crossed arms, scared child, tired child yawning, excited child jumping, worried child, sorry child apologising, two children as friends, children sharing a toy, children taking turns, child waiting patiently, child saying stop with hand up, child helping another, children hugging.
Style: warm children's book illustration, soft colours, friendly, expressive faces, diverse children, no text, no labels.`,
};
