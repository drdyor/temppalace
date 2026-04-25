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
  { id: 'gym-ball', emoji: '⚽', en: { word: 'ball', phrase: 'Pass the ball.', context: 'Sport' } },
  { id: 'gym-basketball', emoji: '🏀', en: { word: 'basketball', phrase: 'Shoot the basketball.', context: 'Sport' } },
  { id: 'gym-football', emoji: '⚽', en: { word: 'football', phrase: 'Kick the football.', context: 'Sport' } },
  { id: 'gym-net', emoji: '🥅', en: { word: 'net', phrase: 'The ball hit the net.', context: 'Equipment' } },
  { id: 'gym-racket', emoji: '🏸', en: { word: 'racket', phrase: 'Hold the racket.', context: 'Equipment' } },
  { id: 'gym-bat', emoji: '🏏', en: { word: 'bat', phrase: 'Hit with the bat.', context: 'Equipment' } },
  { id: 'gym-hoop', emoji: '🏀', en: { word: 'hoop', phrase: 'Throw through the hoop.', context: 'Equipment' } },
  { id: 'gym-mat', emoji: '🧘', en: { word: 'mat', phrase: 'Sit on the mat.', context: 'Equipment' } },
  { id: 'gym-rope', emoji: '➰', en: { word: 'rope', phrase: 'Climb the rope.', context: 'Equipment' } },
  { id: 'gym-bench', emoji: '🪑', en: { word: 'bench', phrase: 'Sit on the bench.', context: 'Rest' } },
  { id: 'gym-cone', emoji: '🔺', en: { word: 'cone', phrase: 'Run around the cone.', context: 'Marker' } },
  { id: 'gym-whistle', emoji: '📢', en: { word: 'whistle', phrase: 'The teacher blows the whistle.', context: 'Signal' } },
  { id: 'gym-scoreboard', emoji: '🔢', en: { word: 'scoreboard', phrase: 'Look at the scoreboard.', context: 'Score' } },
  { id: 'gym-goal', emoji: '🥅', en: { word: 'goal', phrase: 'Score a goal.', context: 'Score' } },
  { id: 'gym-post', emoji: '🏒', en: { word: 'post', phrase: 'Hit the post.', context: 'Equipment' } },

  { id: 'gym-play', emoji: '🎮', en: { word: 'play', phrase: 'Let us play.', context: 'Activity' } },
  { id: 'gym-score', emoji: '🔢', en: { word: 'score', phrase: 'We scored.', context: 'Win' } },
  { id: 'gym-win', emoji: '🏆', en: { word: 'win', phrase: 'We won.', context: 'Victory' } },
  { id: 'gym-lose', emoji: '😢', en: { word: 'lose', phrase: 'We lost.', context: 'Defeat' } },
  { id: 'gym-team', emoji: '👥', en: { word: 'team', phrase: 'My team is red.', context: 'Group' } },
  { id: 'gym-pass', emoji: '🤲', en: { word: 'pass', phrase: 'Pass to me.', context: 'Action' } },
  { id: 'gym-shoot', emoji: '🏹', en: { word: 'shoot', phrase: 'Shoot the ball.', context: 'Action' } },
  { id: 'gym-catch', emoji: '🙌', en: { word: 'catch', phrase: 'Catch the ball.', context: 'Action' } },
  { id: 'gym-throw', emoji: '🤾', en: { word: 'throw', phrase: 'Throw it here.', context: 'Action' } },
  { id: 'gym-dribble', emoji: '🏀', en: { word: 'dribble', phrase: 'Dribble the ball.', context: 'Action' } },
  { id: 'gym-jump', emoji: '⬆️', en: { word: 'jump', phrase: 'Jump high.', context: 'Action' } },
  { id: 'gym-race', emoji: '🏃', en: { word: 'race', phrase: 'Win the race.', context: 'Competition' } },
  { id: 'gym-relay', emoji: '🏃', en: { word: 'relay', phrase: 'Pass the baton.', context: 'Team race' } },
  { id: 'gym-match', emoji: '⚽', en: { word: 'match', phrase: 'A football match.', context: 'Game' } },
  { id: 'gym-competition', emoji: '🏅', en: { word: 'competition', phrase: 'A big competition.', context: 'Event' } },

  { id: 'gym-exercise', emoji: '💪', en: { word: 'exercise', phrase: 'Do some exercise.', context: 'Fitness' } },
  { id: 'gym-stretch', emoji: '🧘', en: { word: 'stretch', phrase: 'Stretch your arms.', context: 'Warm up' } },
  { id: 'gym-warm-up', emoji: '🔥', en: { word: 'warm up', phrase: 'Warm up first.', context: 'Preparation' } },
  { id: 'gym-cool-down', emoji: '❄️', en: { word: 'cool down', phrase: 'Cool down after.', context: 'Recovery' } },
  { id: 'gym-breathe', emoji: '💨', en: { word: 'breathe', phrase: 'Breathe deeply.', context: 'Relax' } },
  { id: 'gym-sweat', emoji: '💦', en: { word: 'sweat', phrase: 'I am sweating.', context: 'Effort' } },
  { id: 'gym-strong', emoji: '💪', en: { word: 'strong', phrase: 'I am strong.', context: 'Fitness' } },
  { id: 'gym-fast', emoji: '⚡', en: { word: 'fast', phrase: 'Run fast.', context: 'Speed' } },
  { id: 'gym-flexible', emoji: '🤸', en: { word: 'flexible', phrase: 'I am flexible.', context: 'Fitness' } },
  { id: 'gym-balance', emoji: '⚖️', en: { word: 'balance', phrase: 'Keep your balance.', context: 'Skill' } },
  { id: 'gym-push', emoji: '👐', en: { word: 'push', phrase: 'Push the wall.', context: 'Exercise' } },
  { id: 'gym-pull', emoji: '👐', en: { word: 'pull', phrase: 'Pull the rope.', context: 'Exercise' } },
  { id: 'gym-lift', emoji: '🏋️', en: { word: 'lift', phrase: 'Lift your knees.', context: 'Exercise' } },
  { id: 'gym-bend', emoji: '🧘', en: { word: 'bend', phrase: 'Bend down.', context: 'Exercise' } },
  { id: 'gym-twist', emoji: '🔄', en: { word: 'twist', phrase: 'Twist your body.', context: 'Exercise' } },
];

export interface SchoolDialogueTurn { speaker: 'teacher' | 'student' | 'peer'; en: string; it?: string; fr?: string; mt?: string; }
export interface SchoolDialogue { id: string; scenario: string; turns: SchoolDialogueTurn[]; }

export const gymDialogues: SchoolDialogue[] = [
  { id: 'gym-line-up', scenario: 'PE class starts', turns: [
    { speaker: 'teacher', en: 'Line up, everyone.' },
    { speaker: 'teacher', en: 'Warm up time.' },
    { speaker: 'student', en: 'What are we playing?' },
    { speaker: 'teacher', en: 'Football.' },
  ]},
  { id: 'gym-teams', scenario: 'Picking teams', turns: [
    { speaker: 'peer', en: 'Can I be on your team?' },
    { speaker: 'peer', en: 'Yes. We need one more.' },
    { speaker: 'student', en: 'I want to play too.' },
  ]},
  { id: 'gym-hurt', scenario: 'Getting hurt in PE', turns: [
    { speaker: 'student', en: 'I hurt my leg.' },
    { speaker: 'teacher', en: 'Sit down. Rest.' },
    { speaker: 'student', en: 'Can I still play?' },
    { speaker: 'teacher', en: 'Not today.' },
  ]},
  { id: 'gym-win', scenario: 'Winning a game', turns: [
    { speaker: 'peer', en: 'We won!' },
    { speaker: 'student', en: 'Good game!' },
    { speaker: 'peer', en: 'You played well.' },
  ]},
  { id: 'gym-fair', scenario: 'Not fair play', turns: [
    { speaker: 'student', en: 'That is not fair.' },
    { speaker: 'teacher', en: 'What happened?' },
    { speaker: 'student', en: 'He pushed me.' },
    { speaker: 'teacher', en: 'No pushing in PE.' },
  ]},
  { id: 'gym-shower', scenario: 'After PE', turns: [
    { speaker: 'teacher', en: 'PE is finished.' },
    { speaker: 'student', en: 'I am hot.' },
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
