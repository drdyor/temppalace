// School Palace — Music Room
// English source layer (truth layer)
// A1 level, concrete objects only for image pins

import type { Room } from '../../types';

export const musicRoomRoom: Room = {
  id: 'music-room',
  name: 'Music Room',
  subtitle: 'Sing & Play',
  nameNative: 'Aula di Musica',
  image: 'rooms/school/music-room.jpg',
  description: 'Where you sing songs, play instruments, and learn about sounds.',
  grammarFocus: 'instruments & musical actions',
  vocabularyIds: [
    'mus-piano', 'mus-guitar', 'mus-drum', 'mus-violin', 'mus-flute',
    'mus-trumpet', 'mus-xylophone', 'mus-tambourine', 'mus-bell', 'mus-recorder',
    'mus-keyboard', 'mus-microphone', 'mus-speaker', 'mus-stick', 'mus-bow',
    'mus-sing', 'mus-song', 'mus-lyrics', 'mus-chorus', 'mus-verse',
    'mus-melody', 'mus-tune', 'mus-play', 'mus-practise', 'mus-perform',
    'mus-concert', 'mus-band', 'mus-orchestra', 'mus-choir', 'mus-solo',
    'mus-sound', 'mus-loud', 'mus-quiet', 'mus-high', 'mus-low',
    'mus-fast', 'mus-slow', 'mus-rhythm', 'mus-beat', 'mus-note',
    'mus-scale', 'mus-tempo', 'mus-harmony', 'mus-listen', 'mus-clap',
  ],
  zones: [
    {
      id: 'instruments',
      name: 'Instruments',
      nameNative: 'Strumenti',
      description: 'What you play music with',
      icon: '🎸',
      x: 25, y: 30, width: 30, height: 25,
      interiorImage: 'rooms/school/music-instruments.jpg',
      interiorVocab: [
        { wordId: 'mus-piano', x: 20, y: 25 }, { wordId: 'mus-guitar', x: 50, y: 20 },
        { wordId: 'mus-drum', x: 80, y: 25 }, { wordId: 'mus-violin', x: 25, y: 45 },
        { wordId: 'mus-flute', x: 55, y: 40 }, { wordId: 'mus-trumpet', x: 80, y: 45 },
        { wordId: 'mus-xylophone', x: 15, y: 60 }, { wordId: 'mus-tambourine', x: 40, y: 60 },
        { wordId: 'mus-bell', x: 65, y: 60 }, { wordId: 'mus-recorder', x: 85, y: 60 },
        { wordId: 'mus-keyboard', x: 20, y: 80 }, { wordId: 'mus-microphone', x: 45, y: 80 },
        { wordId: 'mus-speaker', x: 70, y: 80 }, { wordId: 'mus-stick', x: 30, y: 90 },
        { wordId: 'mus-bow', x: 60, y: 90 },
      ],
    },
    {
      id: 'singing-playing',
      name: 'Singing & Playing',
      nameNative: 'Cantare e Suonare',
      description: 'Making music together',
      icon: '🎤',
      x: 60, y: 30, width: 30, height: 25,
      interiorImage: 'rooms/school/music-singing.jpg',
      interiorVocab: [
        { wordId: 'mus-sing', x: 20, y: 20 }, { wordId: 'mus-song', x: 50, y: 20 },
        { wordId: 'mus-lyrics', x: 80, y: 20 }, { wordId: 'mus-chorus', x: 20, y: 45 },
        { wordId: 'mus-verse', x: 50, y: 45 }, { wordId: 'mus-melody', x: 80, y: 45 },
        { wordId: 'mus-tune', x: 20, y: 65 }, { wordId: 'mus-play', x: 45, y: 65 },
        { wordId: 'mus-practise', x: 70, y: 65 }, { wordId: 'mus-perform', x: 85, y: 65 },
        { wordId: 'mus-concert', x: 20, y: 85 }, { wordId: 'mus-band', x: 45, y: 85 },
        { wordId: 'mus-orchestra', x: 65, y: 85 }, { wordId: 'mus-choir', x: 30, y: 95 },
        { wordId: 'mus-solo', x: 55, y: 95 },
      ],
    },
    {
      id: 'sounds-rhythm',
      name: 'Sounds & Rhythm',
      nameNative: 'Suoni e Ritmo',
      description: 'Loud, quiet, fast, slow',
      icon: '🎵',
      x: 40, y: 60, width: 35, height: 25,
      interiorImage: 'rooms/school/music-rhythm.jpg',
      interiorVocab: [
        { wordId: 'mus-sound', x: 20, y: 20 }, { wordId: 'mus-loud', x: 50, y: 20 },
        { wordId: 'mus-quiet', x: 80, y: 20 }, { wordId: 'mus-high', x: 20, y: 45 },
        { wordId: 'mus-low', x: 50, y: 45 }, { wordId: 'mus-fast', x: 80, y: 45 },
        { wordId: 'mus-slow', x: 20, y: 65 }, { wordId: 'mus-rhythm', x: 45, y: 65 },
        { wordId: 'mus-beat', x: 70, y: 65 }, { wordId: 'mus-note', x: 85, y: 65 },
        { wordId: 'mus-scale', x: 20, y: 85 }, { wordId: 'mus-tempo', x: 45, y: 85 },
        { wordId: 'mus-harmony', x: 65, y: 85 }, { wordId: 'mus-listen', x: 35, y: 95 },
        { wordId: 'mus-clap', x: 60, y: 95 },
      ],
    },
  ],
  grammarPoints: [
    { id: 'music-can-i-play', title: 'Can I play...?', explanation: 'Asking to use instruments', example: 'Can I play the drum? Can I try the piano?', color: '#3B82F6' },
    { id: 'music-description', title: 'Describing Music', explanation: 'How music sounds', example: 'It is loud. It is fast. The tune is nice.', color: '#EC4899' },
  ],
};

export interface SchoolConcept {
  id: string; emoji?: string;
  en: { word: string; phrase?: string; context?: string };
  it?: { word: string; phrase?: string; gender?: 'masculine' | 'feminine' | 'none'; pronunciation?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
  fr?: { word: string; phrase?: string; gender?: 'masculine' | 'feminine' | 'none'; pronunciation?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
  mt?: { word: string; phrase?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
}

export const musicRoomVocabulary: SchoolConcept[] = [
  { id: 'mus-piano', emoji: '🎹', en: { word: 'piano', phrase: 'Play the piano.', context: 'Instrument' }, it: { word: 'pianoforte', phrase: 'Suona il pianoforte.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-guitar', emoji: '🎸', en: { word: 'guitar', phrase: 'Strum the guitar.', context: 'Instrument' }, it: { word: 'chitarra', phrase: 'Suona la chitarra.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-drum', emoji: '🥁', en: { word: 'drum', phrase: 'Hit the drum.', context: 'Instrument' }, it: { word: 'tamburo', phrase: 'Colpisci il tamburo.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-violin', emoji: '🎻', en: { word: 'violin', phrase: 'Play the violin.', context: 'Instrument' }, it: { word: 'violino', phrase: 'Suona il violino.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-flute', emoji: '🪈', en: { word: 'flute', phrase: 'Blow the flute.', context: 'Instrument' }, it: { word: 'flauto', phrase: 'Soffia nel flauto.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-trumpet', emoji: '🎺', en: { word: 'trumpet', phrase: 'Blow the trumpet.', context: 'Instrument' }, it: { word: 'tromba', phrase: 'Suona la tromba.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-xylophone', emoji: '🎹', en: { word: 'xylophone', phrase: 'Hit the xylophone.', context: 'Instrument' }, it: { word: 'xilofono', phrase: 'Suona lo xilofono.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-tambourine', emoji: '🪇', en: { word: 'tambourine', phrase: 'Shake the tambourine.', context: 'Instrument' }, it: { word: 'tamburello', phrase: 'Scuoti il tamburello.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-bell', emoji: '🔔', en: { word: 'bell', phrase: 'Ring the bell.', context: 'Instrument' }, it: { word: 'campanella', phrase: 'Suona la campanella.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-recorder', emoji: '🪈', en: { word: 'recorder', phrase: 'Play the recorder.', context: 'Instrument' }, it: { word: 'flauto dolce', phrase: 'Suona il flauto dolce.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-keyboard', emoji: '🎹', en: { word: 'keyboard', phrase: 'Press the keyboard.', context: 'Instrument' }, it: { word: 'tastiera', phrase: 'Premi i tasti.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-microphone', emoji: '🎤', en: { word: 'microphone', phrase: 'Sing into the microphone.', context: 'Equipment' }, it: { word: 'microfono', phrase: 'Canta nel microfono.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-speaker', emoji: '🔊', en: { word: 'speaker', phrase: 'The speaker is loud.', context: 'Equipment' }, it: { word: 'altoparlante', phrase: 'L'altoparlante è forte.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-stick', emoji: '🥢', en: { word: 'stick', phrase: 'Drum stick.', context: 'Accessory' }, it: { word: 'bacchetta', phrase: 'La bacchetta del tamburo.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-bow', emoji: '🎻', en: { word: 'bow', phrase: 'Use the bow.', context: 'Accessory' }, it: { word: 'archetto', phrase: 'Usa l'archetto.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },

  { id: 'mus-sing', emoji: '🎤', en: { word: 'sing', phrase: 'Sing a song.', context: 'Action' }, it: { word: 'cantare', phrase: 'Canta una canzone.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-song', emoji: '🎵', en: { word: 'song', phrase: 'I like this song.', context: 'Music' }, it: { word: 'canzone', phrase: 'Mi piace questa canzone.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-lyrics', emoji: '📝', en: { word: 'lyrics', phrase: 'Read the lyrics.', context: 'Words' }, it: { word: 'testo', phrase: 'Leggi il testo.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-chorus', emoji: '👥', en: { word: 'chorus', phrase: 'Sing the chorus.', context: 'Part' }, it: { word: 'ritornello', phrase: 'Canta il ritornello.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-verse', emoji: '📄', en: { word: 'verse', phrase: 'The first verse.', context: 'Part' }, it: { word: 'strofa', phrase: 'La prima strofa.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-melody', emoji: '🎶', en: { word: 'melody', phrase: 'A nice melody.', context: 'Tune' }, it: { word: 'melodia', phrase: 'Una bella melodia.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-tune', emoji: '🎶', en: { word: 'tune', phrase: 'Hum the tune.', context: 'Melody' }, it: { word: 'motivo', phrase: 'Canticchia il motivo.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-play', emoji: '🎵', en: { word: 'play', phrase: 'Play the guitar.', context: 'Action' }, it: { word: 'suonare', phrase: 'Suona la chitarra.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-practise', emoji: '🔁', en: { word: 'practise', phrase: 'Practise every day.', context: 'Repetition' }, it: { word: 'esercitarsi', phrase: 'Esercitati ogni giorno.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-perform', emoji: '🎭', en: { word: 'perform', phrase: 'Perform on stage.', context: 'Show' }, it: { word: 'esibirsi', phrase: 'Esibisciti sul palco.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-concert', emoji: '🎫', en: { word: 'concert', phrase: 'A school concert.', context: 'Event' }, it: { word: 'concerto', phrase: 'Un concerto della scuola.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-band', emoji: '🎸', en: { word: 'band', phrase: 'I am in the band.', context: 'Group' }, it: { word: 'banda', phrase: 'Sono nella banda.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-orchestra', emoji: '🎻', en: { word: 'orchestra', phrase: 'The school orchestra.', context: 'Group' }, it: { word: 'orchestra', phrase: 'L'orchestra della scuola.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-choir', emoji: '👥', en: { word: 'choir', phrase: 'Sing in the choir.', context: 'Group' }, it: { word: 'coro', phrase: 'Canta nel coro.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-solo', emoji: '🎤', en: { word: 'solo', phrase: 'A guitar solo.', context: 'Alone' }, it: { word: 'assolo', phrase: 'Un assolo di chitarra.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },

  { id: 'mus-sound', emoji: '🔊', en: { word: 'sound', phrase: 'What is that sound?', context: 'Noise' }, it: { word: 'suono', phrase: 'Che cos'è quel suono?', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-loud', emoji: '🔊', en: { word: 'loud', phrase: 'Too loud.', context: 'Volume' }, it: { word: 'forte', phrase: 'Troppo forte.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-quiet', emoji: '🔇', en: { word: 'quiet', phrase: 'Play quietly.', context: 'Volume' }, it: { word: 'piano', phrase: 'Suona piano.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-high', emoji: '⬆️', en: { word: 'high', phrase: 'A high note.', context: 'Pitch' }, it: { word: 'alto', phrase: 'Una nota alta.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-low', emoji: '⬇️', en: { word: 'low', phrase: 'A low note.', context: 'Pitch' }, it: { word: 'basso', phrase: 'Una nota bassa.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-fast', emoji: '⚡', en: { word: 'fast', phrase: 'Play fast.', context: 'Speed' }, it: { word: 'veloce', phrase: 'Suona veloce.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-slow', emoji: '🐢', en: { word: 'slow', phrase: 'Play slowly.', context: 'Speed' }, it: { word: 'lento', phrase: 'Suona lento.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-rhythm', emoji: '🥁', en: { word: 'rhythm', phrase: 'Keep the rhythm.', context: 'Beat' }, it: { word: 'ritmo', phrase: 'Tieni il ritmo.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-beat', emoji: '💓', en: { word: 'beat', phrase: 'Clap the beat.', context: 'Pulse' }, it: { word: 'battito', phrase: 'Batti le mani a tempo.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-note', emoji: '🎵', en: { word: 'note', phrase: 'A musical note.', context: 'Symbol' }, it: { word: 'nota', phrase: 'Una nota musicale.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-scale', emoji: '📈', en: { word: 'scale', phrase: 'Play the scale.', context: 'Exercise' }, it: { word: 'scala', phrase: 'Suona la scala.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-tempo', emoji: '⏱️', en: { word: 'tempo', phrase: 'The tempo is fast.', context: 'Speed' }, it: { word: 'tempo', phrase: 'Il tempo è veloce.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-harmony', emoji: '🎶', en: { word: 'harmony', phrase: 'Sing in harmony.', context: 'Together' }, it: { word: 'armonia', phrase: 'Canta in armonia.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-listen', emoji: '👂', en: { word: 'listen', phrase: 'Listen to the music.', context: 'Attention' }, it: { word: 'ascoltare', phrase: 'Ascolta la musica.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'mus-clap', emoji: '👏', en: { word: 'clap', phrase: 'Clap your hands.', context: 'Action' }, it: { word: 'battere le mani', phrase: 'Batti le mani.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
];

export interface SchoolDialogueTurn { speaker: 'teacher' | 'student' | 'peer'; en: string; it?: string; fr?: string; mt?: string; }
export interface SchoolDialogue { id: string; scenario: string; turns: SchoolDialogueTurn[]; }

export const musicRoomDialogues: SchoolDialogue[] = [
  { id: 'mus-try-piano', scenario: 'Trying an instrument', turns: [
    { speaker: 'student', en: 'Can I play the piano?' },
    { speaker: 'teacher', en: 'Yes. Be careful.' },
    { speaker: 'student', en: 'It sounds nice.' },
  ],
    natural: [
      { speaker: 'student', en: 'Can I play the piano?' },
      { speaker: 'teacher', en: 'Yeah. Be careful.' },
      { speaker: 'student', en: 'Sounds lovely.' },
    ]},
  
  { id: 'mus-loud-drum', scenario: 'Drum is too loud', turns: [
    { speaker: 'teacher', en: 'The drum is too loud.' },
    { speaker: 'student', en: 'Sorry. I will play quietly.' },
    { speaker: 'teacher', en: 'Thank you.' },
  ],
    natural: [
      { speaker: 'teacher', en: "That drum's too loud." },
      { speaker: 'student', en: "Sorry. I'll play quietly." },
      { speaker: 'teacher', en: 'Thanks.' },
    ]},
  
  { id: 'mus-concert-ready', scenario: 'Concert practice', turns: [
    { speaker: 'teacher', en: 'The concert is on Friday.' },
    { speaker: 'student', en: 'I need to practise more.' },
    { speaker: 'teacher', en: 'Practise the chorus.' },
  ],
    natural: [
      { speaker: 'teacher', en: "Concert's on Friday." },
      { speaker: 'student', en: 'I need more practice.' },
      { speaker: 'teacher', en: 'Work on the chorus then.' },
    ]},
  
  { id: 'mus-choir-sing', scenario: 'Singing in choir', turns: [
    { speaker: 'peer', en: 'Do you sing in the choir?' },
    { speaker: 'student', en: 'Yes. I like the melody.' },
    { speaker: 'peer', en: 'The harmony is beautiful.' },
  ],
    natural: [
      { speaker: 'peer', en: 'Do you sing in the choir?' },
      { speaker: 'student', en: 'Yeah. I like the melody.' },
      { speaker: 'peer', en: "The harmony's beautiful." },
    ]},
  
  { id: 'mus-clap-rhythm', scenario: 'Clapping rhythm', turns: [
    { speaker: 'teacher', en: 'Clap the beat.' },
    { speaker: 'student', en: 'Like this?' },
    { speaker: 'teacher', en: 'Yes. Keep the rhythm.' },
  ],
    natural: [
      { speaker: 'teacher', en: 'Clap the beat.' },
      { speaker: 'student', en: 'Like this?' },
      { speaker: 'teacher', en: 'Yeah. Keep the rhythm.' },
    ]},
  
  { id: 'mus-recorder', scenario: 'Playing recorder', turns: [
    { speaker: 'student', en: 'Can I try the recorder?' },
    { speaker: 'teacher', en: 'Blow gently.' },
    { speaker: 'student', en: 'It makes a high sound.' },
  ],
    natural: [
      { speaker: 'student', en: 'Can I try the recorder?' },
      { speaker: 'teacher', en: 'Blow gently.' },
      { speaker: 'student', en: "It's really high." },
    ]},
  
];

export const musicRoomImagePrompts: Record<string, string> = {
  'instruments': `A primary school music room corner with instruments on shelves and stands.
Visible items: wooden piano, acoustic guitar, drum set with cymbals, violin in a case, silver flute, brass trumpet, colourful xylophone, tambourine with bells, small hand bell, recorder, electronic keyboard, microphone on a stand, speaker on a shelf, drum sticks, violin bow.
Style: warm children's book illustration, soft colours, friendly, clear outlines, European primary school, no text, no labels, no watermarks.`,

  'singing-playing': `Children making music together in a primary school music room.
Visible items: child singing into microphone, child playing guitar, child hitting drum, child playing violin with bow, child reading lyrics on paper, children singing chorus together, child playing xylophone, child shaking tambourine, children in choir formation, child doing a solo performance, teacher conducting, concert posters on wall.
Style: warm children's book illustration, soft colours, friendly, diverse children, European primary school, no text, no labels.`,

  'sounds-rhythm': `Children learning about sound and rhythm in a primary school music room.
Visible items: child clapping hands to beat, child listening with hand to ear, loud drum with sound waves, quiet recorder, high notes floating up, low notes going down, fast music notes racing, slow music notes drifting, rhythm pattern on board, musical notes on staff, child tapping beat on desk, harmony circles, scale going up and down.
Style: warm children's book illustration, soft colours, friendly, European primary school, no text, no labels.`,
};
