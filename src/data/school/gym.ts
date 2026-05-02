// School Palace — Gym / Sports Hall
// English source layer (truth layer)
// A1 level, concrete objects only for image pins

import type { Room } from '../../types';

export const gymRoom: Room = {
  id: 'gym',
  name: 'Sports Hall',
  subtitle: 'Sport & Exercise',
  nameNative: 'Palestra',
  image: 'rooms/school/gym.jpg',
  description: 'Where you run, jump, play sports, and get strong.',
  grammarFocus: 'sports verbs & body movement',
  vocabularyIds: [
    'gym-ball', 'gym-basketball', 'gym-football', 'gym-net', 'gym-racket',
    'gym-bat', 'gym-hoop', 'gym-mat', 'gym-rope', 'gym-bench',
    'gym-cone', 'gym-whistle', 'gym-scoreboard', 'gym-goal', 'gym-post',
    'gym-play', 'gym-score', 'gym-win', 'gym-lose', 'gym-team',
    'gym-pass', 'gym-shoot', 'gym-catch', 'gym-throw', 'gym-dribble',
    'gym-jump', 'gym-race', 'gym-relay', 'gym-match', 'gym-competition',
    'gym-exercise', 'gym-stretch', 'gym-warm-up', 'gym-cool-down', 'gym-breathe',
    'gym-sweat', 'gym-strong', 'gym-fast', 'gym-flexible', 'gym-balance',
    'gym-push', 'gym-pull', 'gym-lift', 'gym-bend', 'gym-twist',
  ],
  zones: [
    {
      id: 'gym-equipment',
      name: 'Equipment',
      nameNative: 'Attrezzatura',
      description: 'Balls, nets, and sports kit',
      icon: '🏀',
      x: 25, y: 30, width: 30, height: 25,
      interiorImage: 'rooms/school/gym-equipment.jpg',
      interiorVocab: [
        { wordId: 'gym-ball', x: 20, y: 25 }, { wordId: 'gym-basketball', x: 50, y: 20 },
        { wordId: 'gym-football', x: 80, y: 25 }, { wordId: 'gym-net', x: 25, y: 45 },
        { wordId: 'gym-racket', x: 55, y: 40 }, { wordId: 'gym-bat', x: 80, y: 45 },
        { wordId: 'gym-hoop', x: 15, y: 60 }, { wordId: 'gym-mat', x: 40, y: 60 },
        { wordId: 'gym-rope', x: 65, y: 60 }, { wordId: 'gym-bench', x: 85, y: 60 },
        { wordId: 'gym-cone', x: 20, y: 80 }, { wordId: 'gym-whistle', x: 45, y: 80 },
        { wordId: 'gym-scoreboard', x: 70, y: 80 }, { wordId: 'gym-goal', x: 30, y: 90 },
        { wordId: 'gym-post', x: 60, y: 90 },
      ],
    },
    {
      id: 'sports-games',
      name: 'Sports & Games',
      nameNative: 'Sport e Giochi',
      description: 'Playing and competing',
      icon: '⚽',
      x: 60, y: 30, width: 30, height: 25,
      interiorImage: 'rooms/school/gym-games.jpg',
      interiorVocab: [
        { wordId: 'gym-play', x: 20, y: 20 }, { wordId: 'gym-score', x: 50, y: 20 },
        { wordId: 'gym-win', x: 80, y: 20 }, { wordId: 'gym-lose', x: 20, y: 45 },
        { wordId: 'gym-team', x: 50, y: 45 }, { wordId: 'gym-pass', x: 80, y: 45 },
        { wordId: 'gym-shoot', x: 20, y: 65 }, { wordId: 'gym-catch', x: 45, y: 65 },
        { wordId: 'gym-throw', x: 70, y: 65 }, { wordId: 'gym-dribble', x: 85, y: 65 },
        { wordId: 'gym-jump', x: 20, y: 85 }, { wordId: 'gym-race', x: 45, y: 85 },
        { wordId: 'gym-relay', x: 65, y: 85 }, { wordId: 'gym-match', x: 30, y: 95 },
        { wordId: 'gym-competition', x: 60, y: 95 },
      ],
    },
    {
      id: 'exercise-body',
      name: 'Exercise & Body',
      nameNative: 'Esercizio e Corpo',
      description: 'Getting fit and strong',
      icon: '💪',
      x: 40, y: 60, width: 35, height: 25,
      interiorImage: 'rooms/school/gym-exercise.jpg',
      interiorVocab: [
        { wordId: 'gym-exercise', x: 20, y: 20 }, { wordId: 'gym-stretch', x: 50, y: 20 },
        { wordId: 'gym-warm-up', x: 80, y: 20 }, { wordId: 'gym-cool-down', x: 20, y: 45 },
        { wordId: 'gym-breathe', x: 50, y: 45 }, { wordId: 'gym-sweat', x: 80, y: 45 },
        { wordId: 'gym-strong', x: 20, y: 65 }, { wordId: 'gym-fast', x: 45, y: 65 },
        { wordId: 'gym-flexible', x: 70, y: 65 }, { wordId: 'gym-balance', x: 85, y: 65 },
        { wordId: 'gym-push', x: 20, y: 85 }, { wordId: 'gym-pull', x: 40, y: 85 },
        { wordId: 'gym-lift', x: 60, y: 85 }, { wordId: 'gym-bend', x: 75, y: 85 },
        { wordId: 'gym-twist', x: 50, y: 95 },
      ],
    },
  ],
  grammarPoints: [
    { id: 'gym-verbs', title: 'Sports Verbs', explanation: 'Actions in sport', example: 'I throw the ball. I catch it.', color: '#F59E0B' },
    { id: 'gym-imperatives', title: 'PE Commands', explanation: 'What the teacher says', example: 'Line up. Warm up. Be careful.', color: '#10B981' },
  ],
};

export interface SchoolConcept {
  id: string; emoji?: string;
  en: { word: string; phrase?: string; context?: string };
  it?: { word: string; phrase?: string; gender?: 'masculine' | 'feminine' | 'none'; pronunciation?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
  fr?: { word: string; phrase?: string; gender?: 'masculine' | 'feminine' | 'none'; pronunciation?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
  mt?: { word: string; phrase?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
}

export const gymVocabulary: SchoolConcept[] = [
  { id: 'gym-ball', emoji: '⚽', en: { word: 'ball', phrase: 'Pass the ball.', context: 'Sport' }, it: { word: 'palla', phrase: 'Passa la palla.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-basketball', emoji: '🏀', en: { word: 'basketball', phrase: 'Shoot the basketball.', context: 'Sport' }, it: { word: 'pallacanestro', phrase: 'Tira a canestro.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-football', emoji: '⚽', en: { word: 'football', phrase: 'Kick the football.', context: 'Sport' }, it: { word: 'pallone', phrase: 'Calcia il pallone.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-net', emoji: '🥅', en: { word: 'net', phrase: 'The ball hit the net.', context: 'Equipment' }, it: { word: 'rete', phrase: 'La palla ha colpito la rete.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-racket', emoji: '🏸', en: { word: 'racket', phrase: 'Hold the racket.', context: 'Equipment' }, it: { word: 'racchetta', phrase: 'Tieni la racchetta.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-bat', emoji: '🏏', en: { word: 'bat', phrase: 'Hit with the bat.', context: 'Equipment' }, it: { word: 'mazza', phrase: 'Colpisci con la mazza.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-hoop', emoji: '🏀', en: { word: 'hoop', phrase: 'Throw through the hoop.', context: 'Equipment' }, it: { word: 'canestro', phrase: 'Lancia nel canestro.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-mat', emoji: '🧘', en: { word: 'mat', phrase: 'Sit on the mat.', context: 'Equipment' }, it: { word: 'tappetino', phrase: 'Siediti sul tappetino.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-rope', emoji: '➰', en: { word: 'rope', phrase: 'Climb the rope.', context: 'Equipment' }, it: { word: 'corda', phrase: 'Scala la corda.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-bench', emoji: '🪑', en: { word: 'bench', phrase: 'Sit on the bench.', context: 'Rest' }, it: { word: 'panchina', phrase: 'Siediti sulla panchina.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-cone', emoji: '🔺', en: { word: 'cone', phrase: 'Run around the cone.', context: 'Marker' }, it: { word: 'cono', phrase: 'Corri intorno al cono.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-whistle', emoji: '📢', en: { word: 'whistle', phrase: 'The teacher blows the whistle.', context: 'Signal' }, it: { word: 'fischietto', phrase: 'L'insegnante fischia.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-scoreboard', emoji: '🔢', en: { word: 'scoreboard', phrase: 'Look at the scoreboard.', context: 'Score' }, it: { word: 'tabellone', phrase: 'Guarda il tabellone.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-goal', emoji: '🥅', en: { word: 'goal', phrase: 'Score a goal.', context: 'Score' }, it: { word: 'gol', phrase: 'Segna un gol.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-post', emoji: '🏒', en: { word: 'post', phrase: 'Hit the post.', context: 'Equipment' }, it: { word: 'palo', phrase: 'Colpisci il palo.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },

  { id: 'gym-play', emoji: '🎮', en: { word: 'play', phrase: 'Let us play.', context: 'Activity' }, it: { word: 'giocare', phrase: 'Giochiamo.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-score', emoji: '🔢', en: { word: 'score', phrase: 'We scored.', context: 'Win' }, it: { word: 'segnare', phrase: 'Abbiamo segnato.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-win', emoji: '🏆', en: { word: 'win', phrase: 'We won.', context: 'Victory' }, it: { word: 'vincere', phrase: 'Abbiamo vinto.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-lose', emoji: '😢', en: { word: 'lose', phrase: 'We lost.', context: 'Defeat' }, it: { word: 'perdere', phrase: 'Abbiamo perso.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-team', emoji: '👥', en: { word: 'team', phrase: 'My team is red.', context: 'Group' }, it: { word: 'squadra', phrase: 'La mia squadra è rossa.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-pass', emoji: '🤲', en: { word: 'pass', phrase: 'Pass to me.', context: 'Action' }, it: { word: 'passare', phrase: 'Passa a me.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-shoot', emoji: '🏹', en: { word: 'shoot', phrase: 'Shoot the ball.', context: 'Action' }, it: { word: 'tirare', phrase: 'Tira la palla.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-catch', emoji: '🙌', en: { word: 'catch', phrase: 'Catch the ball.', context: 'Action' }, it: { word: 'prendere', phrase: 'Prendi la palla.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-throw', emoji: '🤾', en: { word: 'throw', phrase: 'Throw it here.', context: 'Action' }, it: { word: 'lanciare', phrase: 'Lanciala qui.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-dribble', emoji: '🏀', en: { word: 'dribble', phrase: 'Dribble the ball.', context: 'Action' }, it: { word: 'palleggiare', phrase: 'Palleggia la palla.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-jump', emoji: '⬆️', en: { word: 'jump', phrase: 'Jump high.', context: 'Action' }, it: { word: 'saltare', phrase: 'Salta in alto.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-race', emoji: '🏃', en: { word: 'race', phrase: 'Win the race.', context: 'Competition' }, it: { word: 'corsa', phrase: 'Vinci la corsa.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-relay', emoji: '🏃', en: { word: 'relay', phrase: 'Pass the baton.', context: 'Team race' }, it: { word: 'staffetta', phrase: 'Passa il testimone.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-match', emoji: '⚽', en: { word: 'match', phrase: 'A football match.', context: 'Game' }, it: { word: 'partita', phrase: 'Una partita di calcio.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-competition', emoji: '🏅', en: { word: 'competition', phrase: 'A big competition.', context: 'Event' }, it: { word: 'gara', phrase: 'Una grande gara.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },

  { id: 'gym-exercise', emoji: '💪', en: { word: 'exercise', phrase: 'Do some exercise.', context: 'Fitness' }, it: { word: 'esercizio', phrase: 'Fai un po' di esercizio.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-stretch', emoji: '🧘', en: { word: 'stretch', phrase: 'Stretch your arms.', context: 'Warm up' }, it: { word: 'stirarsi', phrase: 'Stira le braccia.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-warm-up', emoji: '🔥', en: { word: 'warm up', phrase: 'Warm up first.', context: 'Preparation' }, it: { word: 'scaldarsi', phrase: 'Scaldati prima.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-cool-down', emoji: '❄️', en: { word: 'cool down', phrase: 'Cool down after.', context: 'Recovery' }, it: { word: 'riposarsi', phrase: 'Riposati dopo.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-breathe', emoji: '💨', en: { word: 'breathe', phrase: 'Breathe deeply.', context: 'Relax' }, it: { word: 'respirare', phrase: 'Respira profondamente.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-sweat', emoji: '💦', en: { word: 'sweat', phrase: 'I am sweating.', context: 'Effort' }, it: { word: 'sudare', phrase: 'Sto sudando.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-strong', emoji: '💪', en: { word: 'strong', phrase: 'I am strong.', context: 'Fitness' }, it: { word: 'forte', phrase: 'Sono forte.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-fast', emoji: '⚡', en: { word: 'fast', phrase: 'Run fast.', context: 'Speed' }, it: { word: 'veloce', phrase: 'Corri veloce.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-flexible', emoji: '🤸', en: { word: 'flexible', phrase: 'I am flexible.', context: 'Fitness' }, it: { word: 'flessibile', phrase: 'Sono flessibile.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-balance', emoji: '⚖️', en: { word: 'balance', phrase: 'Keep your balance.', context: 'Skill' }, it: { word: 'equilibrio', phrase: 'Tieni l'equilibrio.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-push', emoji: '👐', en: { word: 'push', phrase: 'Push the wall.', context: 'Exercise' }, it: { word: 'spingere', phrase: 'Spingi il muro.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-pull', emoji: '👐', en: { word: 'pull', phrase: 'Pull the rope.', context: 'Exercise' }, it: { word: 'tirare', phrase: 'Tira la corda.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-lift', emoji: '🏋️', en: { word: 'lift', phrase: 'Lift your knees.', context: 'Exercise' }, it: { word: 'sollevare', phrase: 'Solleva le ginocchia.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-bend', emoji: '🧘', en: { word: 'bend', phrase: 'Bend down.', context: 'Exercise' }, it: { word: 'piegarsi', phrase: 'Piegati in giù.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'gym-twist', emoji: '🔄', en: { word: 'twist', phrase: 'Twist your body.', context: 'Exercise' }, it: { word: 'girarsi', phrase: 'Girati.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
];

export interface SchoolDialogueTurn { speaker: 'teacher' | 'student' | 'peer'; en: string; it?: string; fr?: string; mt?: string; }
export interface SchoolDialogue { id: string; scenario: string; turns: SchoolDialogueTurn[]; }

export const gymDialogues: SchoolDialogue[] = [
  { id: 'gym-line-up', scenario: 'PE class starts', turns: [
    { speaker: 'teacher', en: 'Line up, everyone.' },
    { speaker: 'teacher', en: 'Warm up time.' },
    { speaker: 'student', en: 'What are we playing?' },
    { speaker: 'teacher', en: 'Football.' },
  ],
    natural: [
      { speaker: 'teacher', en: 'Line up everyone.' },
      { speaker: 'teacher', en: 'Warm up time.' },
      { speaker: 'student', en: 'What we playing?' },
      { speaker: 'teacher', en: 'Football.' },
    ]},
  
  { id: 'gym-teams', scenario: 'Picking teams', turns: [
    { speaker: 'peer', en: 'Can I be on your team?' },
    { speaker: 'peer', en: 'Yes. We need one more.' },
    { speaker: 'student', en: 'I want to play too.' },
  ],
    natural: [
      { speaker: 'peer', en: 'Can I be on your team?' },
      { speaker: 'peer', en: 'Yeah. We need one more.' },
      { speaker: 'student', en: 'I wanna play too.' },
    ]},
  
  { id: 'gym-hurt', scenario: 'Getting hurt in PE', turns: [
    { speaker: 'student', en: 'I hurt my leg.' },
    { speaker: 'teacher', en: 'Sit down. Rest.' },
    { speaker: 'student', en: 'Can I still play?' },
    { speaker: 'teacher', en: 'Not today.' },
  ],
    natural: [
      { speaker: 'student', en: "I've hurt my leg." },
      { speaker: 'teacher', en: 'Sit down. Rest.' },
      { speaker: 'student', en: 'Can I still play?' },
      { speaker: 'teacher', en: 'Not today.' },
    ]},
  
  { id: 'gym-win', scenario: 'Winning a game', turns: [
    { speaker: 'peer', en: 'We won!' },
    { speaker: 'student', en: 'Good game!' },
    { speaker: 'peer', en: 'You played well.' },
  ],
    natural: [
      { speaker: 'peer', en: 'We won!' },
      { speaker: 'student', en: 'Great game!' },
      { speaker: 'peer', en: 'Nice one.' },
    ]},
  
  { id: 'gym-fair', scenario: 'Not fair play', turns: [
    { speaker: 'student', en: 'That is not fair.' },
    { speaker: 'teacher', en: 'What happened?' },
    { speaker: 'student', en: 'He pushed me.' },
    { speaker: 'teacher', en: 'No pushing in PE.' },
  ],
    natural: [
      { speaker: 'student', en: "That's not fair." },
      { speaker: 'teacher', en: 'What happened?' },
      { speaker: 'student', en: 'He pushed me.' },
      { speaker: 'teacher', en: 'No pushing.' },
    ]},
  
  { id: 'gym-shower', scenario: 'After PE', turns: [
    { speaker: 'teacher', en: 'PE is finished.' },
    { speaker: 'student', en: 'I am hot.' },
    { speaker: 'teacher', en: 'Drink some water.' },
  ],
    natural: [
      { speaker: 'teacher', en: "PE's finished." },
      { speaker: 'student', en: "I'm hot." },
      { speaker: 'teacher', en: 'Drink some water.' },
    ]},
  
];

export const gymImagePrompts: Record<string, string> = {
  'gym-equipment': `A primary school sports hall with various equipment laid out.
Visible items: basketball, football, badminton net, tennis racket, rounders bat, basketball hoop, blue exercise mat, climbing rope, wooden bench, orange cone, whistle on a lanyard, scoreboard on the wall, football goal, goal post.
Style: warm children's book illustration, soft colours, friendly, clear outlines, European primary school, no text, no labels, no watermarks.`,

  'sports-games': `Children playing team sports in a primary school sports hall.
Visible items: children passing a ball, child shooting at a goal, child catching a ball, child throwing a ball, child dribbling a basketball, child jumping for a net, children racing, relay baton passing, children in team colours, scoreboard showing numbers, teacher with whistle, happy and tired children.
Style: warm children's book illustration, soft colours, friendly, diverse children, European primary school, no text, no labels.`,

  'exercise-body': `Children doing warm-up exercises in a primary school sports hall.
Visible items: child stretching arms, child touching toes, child running on the spot, child breathing deeply, child wiping sweat, child looking strong, child running fast, child doing a balance pose, child pushing against a wall, child pulling a rope, child lifting knees, child bending down, child twisting body, teacher demonstrating.
Style: warm children's book illustration, soft colours, friendly, diverse children, European primary school, no text, no labels.`,
};
