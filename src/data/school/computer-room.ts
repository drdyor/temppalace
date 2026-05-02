// School Palace — Computer Room
// English source layer (truth layer)
// A1 level, concrete objects only for image pins

import type { Room } from '../../types';

export const computerRoomRoom: Room = {
  id: 'computer-room',
  name: 'Computer Room',
  subtitle: 'Click & Type',
  nameNative: 'Aula di Informatica',
  image: 'rooms/school/computer-room.jpg',
  description: 'Where you learn to use computers safely and have fun.',
  grammarFocus: 'technology words & safety rules',
  vocabularyIds: [
    'comp-computer', 'comp-screen', 'comp-monitor', 'comp-keyboard', 'comp-mouse',
    'comp-mousepad', 'comp-cable', 'comp-charger', 'comp-headphone', 'comp-webcam',
    'comp-printer', 'comp-speaker', 'comp-button', 'comp-port', 'comp-disk',
    'comp-click', 'comp-double-click', 'comp-type', 'comp-scroll', 'comp-drag',
    'comp-drop', 'comp-save', 'comp-open', 'comp-close', 'comp-delete',
    'comp-copy', 'comp-paste', 'comp-print', 'comp-turn-on', 'comp-turn-off',
    'comp-internet', 'comp-website', 'comp-email', 'comp-password', 'comp-username',
    'comp-login', 'comp-logout', 'comp-safe', 'comp-danger', 'comp-stranger',
    'comp-private', 'comp-share', 'comp-friend', 'comp-game', 'comp-video',
  ],
  zones: [
    {
      id: 'computer-parts',
      name: 'Computer Parts',
      nameNative: 'Parti del Computer',
      description: 'What a computer is made of',
      icon: '💻',
      x: 25, y: 30, width: 30, height: 25,
      interiorImage: 'rooms/school/computer-parts.jpg',
      interiorVocab: [
        { wordId: 'comp-computer', x: 20, y: 25 }, { wordId: 'comp-screen', x: 50, y: 20 },
        { wordId: 'comp-monitor', x: 80, y: 25 }, { wordId: 'comp-keyboard', x: 25, y: 45 },
        { wordId: 'comp-mouse', x: 55, y: 40 }, { wordId: 'comp-mousepad', x: 80, y: 45 },
        { wordId: 'comp-cable', x: 15, y: 60 }, { wordId: 'comp-charger', x: 40, y: 60 },
        { wordId: 'comp-headphone', x: 65, y: 60 }, { wordId: 'comp-webcam', x: 85, y: 60 },
        { wordId: 'comp-printer', x: 20, y: 80 }, { wordId: 'comp-speaker', x: 45, y: 80 },
        { wordId: 'comp-button', x: 70, y: 80 }, { wordId: 'comp-port', x: 30, y: 90 },
        { wordId: 'comp-disk', x: 60, y: 90 },
      ],
    },
    {
      id: 'using-computer',
      name: 'Using a Computer',
      nameNative: 'Usare il Computer',
      description: 'What you do with it',
      icon: '⌨️',
      x: 60, y: 30, width: 30, height: 25,
      interiorImage: 'rooms/school/computer-using.jpg',
      interiorVocab: [
        { wordId: 'comp-click', x: 20, y: 20 }, { wordId: 'comp-double-click', x: 50, y: 20 },
        { wordId: 'comp-type', x: 80, y: 20 }, { wordId: 'comp-scroll', x: 20, y: 45 },
        { wordId: 'comp-drag', x: 50, y: 45 }, { wordId: 'comp-drop', x: 80, y: 45 },
        { wordId: 'comp-save', x: 20, y: 65 }, { wordId: 'comp-open', x: 45, y: 65 },
        { wordId: 'comp-close', x: 70, y: 65 }, { wordId: 'comp-delete', x: 85, y: 65 },
        { wordId: 'comp-copy', x: 20, y: 85 }, { wordId: 'comp-paste', x: 45, y: 85 },
        { wordId: 'comp-print', x: 65, y: 85 }, { wordId: 'comp-turn-on', x: 30, y: 95 },
        { wordId: 'comp-turn-off', x: 55, y: 95 },
      ],
    },
    {
      id: 'internet-safety',
      name: 'Internet & Safety',
      nameNative: 'Internet e Sicurezza',
      description: 'Staying safe online',
      icon: '🛡️',
      x: 40, y: 60, width: 35, height: 25,
      interiorImage: 'rooms/school/computer-safety.jpg',
      interiorVocab: [
        { wordId: 'comp-internet', x: 20, y: 20 }, { wordId: 'comp-website', x: 50, y: 20 },
        { wordId: 'comp-email', x: 80, y: 20 }, { wordId: 'comp-password', x: 20, y: 45 },
        { wordId: 'comp-username', x: 50, y: 45 }, { wordId: 'comp-login', x: 80, y: 45 },
        { wordId: 'comp-logout', x: 20, y: 65 }, { wordId: 'comp-safe', x: 45, y: 65 },
        { wordId: 'comp-danger', x: 70, y: 65 }, { wordId: 'comp-stranger', x: 85, y: 65 },
        { wordId: 'comp-private', x: 20, y: 85 }, { wordId: 'comp-share', x: 45, y: 85 },
        { wordId: 'comp-friend', x: 65, y: 85 }, { wordId: 'comp-game', x: 35, y: 95 },
        { wordId: 'comp-video', x: 60, y: 95 },
      ],
    },
  ],
  grammarPoints: [
    { id: 'comp-imperatives', title: 'Computer Commands', explanation: 'What to click and type', example: 'Click here. Type your name. Press enter.', color: '#3B82F6' },
    { id: 'comp-safety', title: 'Online Safety', explanation: 'Rules for the internet', example: 'Do not talk to strangers. Keep your password private.', color: '#EF4444' },
  ],
};

export interface SchoolConcept {
  id: string; emoji?: string;
  en: { word: string; phrase?: string; context?: string };
  it?: { word: string; phrase?: string; gender?: 'masculine' | 'feminine' | 'none'; pronunciation?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
  fr?: { word: string; phrase?: string; gender?: 'masculine' | 'feminine' | 'none'; pronunciation?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
  mt?: { word: string; phrase?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
}

export const computerRoomVocabulary: SchoolConcept[] = [
  { id: 'comp-computer', emoji: '💻', en: { word: 'computer', phrase: 'Turn on the computer.', context: 'Device' }, it: { word: 'computer', phrase: 'Accendi il computer.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-screen', emoji: '🖥️', en: { word: 'screen', phrase: 'Look at the screen.', context: 'Display' }, it: { word: 'schermo', phrase: 'Guarda lo schermo.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-monitor', emoji: '🖥️', en: { word: 'monitor', phrase: 'The monitor is big.', context: 'Display' }, it: { word: 'monitor', phrase: 'Il monitor è grande.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-keyboard', emoji: '⌨️', en: { word: 'keyboard', phrase: 'Type on the keyboard.', context: 'Input' }, it: { word: 'tastiera', phrase: 'Scrivi sulla tastiera.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-mouse', emoji: '🖱️', en: { word: 'mouse', phrase: 'Move the mouse.', context: 'Input' }, it: { word: 'mouse', phrase: 'Muovi il mouse.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-mousepad', emoji: '🖱️', en: { word: 'mousepad', phrase: 'The mouse is on the pad.', context: 'Surface' }, it: { word: 'tappetino', phrase: 'Il mouse è sul tappetino.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-cable', emoji: '🔌', en: { word: 'cable', phrase: 'Plug in the cable.', context: 'Connection' }, it: { word: 'cavo', phrase: 'Inserisci il cavo.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-charger', emoji: '🔋', en: { word: 'charger', phrase: 'The charger is broken.', context: 'Power' }, it: { word: 'caricabatterie', phrase: 'Il caricabatterie è rotto.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-headphone', emoji: '🎧', en: { word: 'headphone', phrase: 'Put on your headphones.', context: 'Audio' }, it: { word: 'cuffie', phrase: 'Metti le cuffie.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-webcam', emoji: '📷', en: { word: 'webcam', phrase: 'Smile at the webcam.', context: 'Camera' }, it: { word: 'webcam', phrase: 'Sorridi alla webcam.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-printer', emoji: '🖨️', en: { word: 'printer', phrase: 'Print the page.', context: 'Output' }, it: { word: 'stampante', phrase: 'Stampa la pagina.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-speaker', emoji: '🔊', en: { word: 'speaker', phrase: 'The speaker is loud.', context: 'Audio' }, it: { word: 'altoparlante', phrase: 'L'altoparlante è forte.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-button', emoji: '🔘', en: { word: 'button', phrase: 'Press the button.', context: 'Control' }, it: { word: 'pulsante', phrase: 'Premi il pulsante.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-port', emoji: '🔌', en: { word: 'port', phrase: 'Plug into the port.', context: 'Connection' }, it: { word: 'porta', phrase: 'Inserisci nella porta.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-disk', emoji: '💿', en: { word: 'disk', phrase: 'Save to the disk.', context: 'Storage' }, it: { word: 'disco', phrase: 'Salva sul disco.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },

  { id: 'comp-click', emoji: '👆', en: { word: 'click', phrase: 'Click the mouse.', context: 'Action' }, it: { word: 'clicca', phrase: 'Clicca con il mouse.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-double-click', emoji: '👆', en: { word: 'double-click', phrase: 'Double-click the icon.', context: 'Action' }, it: { word: 'doppio clic', phrase: 'Fai doppio clic sull'icona.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-type', emoji: '⌨️', en: { word: 'type', phrase: 'Type your name.', context: 'Action' }, it: { word: 'scrivi', phrase: 'Scrivi il tuo nome.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-scroll', emoji: '📜', en: { word: 'scroll', phrase: 'Scroll down.', context: 'Action' }, it: { word: 'scorri', phrase: 'Scorri in basso.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-drag', emoji: '👆', en: { word: 'drag', phrase: 'Drag the file.', context: 'Action' }, it: { word: 'trascina', phrase: 'Trascina il file.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-drop', emoji: '👇', en: { word: 'drop', phrase: 'Drop it here.', context: 'Action' }, it: { word: 'rilascia', phrase: 'Rilascia qui.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-save', emoji: '💾', en: { word: 'save', phrase: 'Save your work.', context: 'Action' }, it: { word: 'salva', phrase: 'Salva il tuo lavoro.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-open', emoji: '📂', en: { word: 'open', phrase: 'Open the file.', context: 'Action' }, it: { word: 'apri', phrase: 'Apri il file.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-close', emoji: '❌', en: { word: 'close', phrase: 'Close the window.', context: 'Action' }, it: { word: 'chiudi', phrase: 'Chiudi la finestra.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-delete', emoji: '🗑️', en: { word: 'delete', phrase: 'Delete this.', context: 'Action' }, it: { word: 'cancella', phrase: 'Cancella questo.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-copy', emoji: '📋', en: { word: 'copy', phrase: 'Copy and paste.', context: 'Action' }, it: { word: 'copia', phrase: 'Copia e incolla.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-paste', emoji: '📋', en: { word: 'paste', phrase: 'Paste it here.', context: 'Action' }, it: { word: 'incolla', phrase: 'Incolla qui.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-print', emoji: '🖨️', en: { word: 'print', phrase: 'Print the picture.', context: 'Action' }, it: { word: 'stampa', phrase: 'Stampa l'immagine.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-turn-on', emoji: '🔌', en: { word: 'turn on', phrase: 'Turn on the computer.', context: 'Power' }, it: { word: 'accendi', phrase: 'Accendi il computer.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-turn-off', emoji: '⏻️', en: { word: 'turn off', phrase: 'Turn off the monitor.', context: 'Power' }, it: { word: 'spegni', phrase: 'Spegni il monitor.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },

  { id: 'comp-internet', emoji: '🌐', en: { word: 'internet', phrase: 'The internet is slow.', context: 'Web' }, it: { word: 'internet', phrase: 'Internet è lento.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-website', emoji: '🌐', en: { word: 'website', phrase: 'Open the website.', context: 'Page' }, it: { word: 'sito', phrase: 'Apri il sito.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-email', emoji: '📧', en: { word: 'email', phrase: 'Send an email.', context: 'Message' }, it: { word: 'email', phrase: 'Invia un'email.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-password', emoji: '🔑', en: { word: 'password', phrase: 'Do not tell your password.', context: 'Secret' }, it: { word: 'password', phrase: 'Non dire la tua password.', gender: 'feminine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-username', emoji: '👤', en: { word: 'username', phrase: 'Type your username.', context: 'Identity' }, it: { word: 'nome utente', phrase: 'Scrivi il tuo nome utente.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-login', emoji: '🔓', en: { word: 'login', phrase: 'Login to the site.', context: 'Access' }, it: { word: 'accedi', phrase: 'Accedi al sito.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-logout', emoji: '🔒', en: { word: 'logout', phrase: 'Logout when you finish.', context: 'Exit' }, it: { word: 'esci', phrase: 'Esci quando hai finito.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-safe', emoji: '✅', en: { word: 'safe', phrase: 'This site is safe.', context: 'Security' }, it: { word: 'sicuro', phrase: 'Questo sito è sicuro.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-danger', emoji: '⚠️', en: { word: 'danger', phrase: 'Danger. Do not click.', context: 'Warning' }, it: { word: 'pericolo', phrase: 'Pericolo. Non cliccare.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-stranger', emoji: '🚷', en: { word: 'stranger', phrase: 'Do not talk to strangers.', context: 'Safety' }, it: { word: 'sconosciuto', phrase: 'Non parlare con gli sconosciuti.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-private', emoji: '🔐', en: { word: 'private', phrase: 'Keep it private.', context: 'Secret' }, it: { word: 'privato', phrase: 'Tienilo privato.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-share', emoji: '📤', en: { word: 'share', phrase: 'Do not share photos.', context: 'Caution' }, it: { word: 'condividi', phrase: 'Non condividere le foto.', gender: 'none', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-friend', emoji: '👫', en: { word: 'friend', phrase: 'Only add friends you know.', context: 'Social' }, it: { word: 'amico', phrase: 'Aggiungi solo amici che conosci.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-game', emoji: '🎮', en: { word: 'game', phrase: 'Play a learning game.', context: 'Fun' }, it: { word: 'gioco', phrase: 'Gioca a un gioco educativo.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
  { id: 'comp-video', emoji: '🎬', en: { word: 'video', phrase: 'Watch the video.', context: 'Media' }, it: { word: 'video', phrase: 'Guarda il video.', gender: 'masculine', pronunciation: '', audit: { status: 'pending', auditor: 'kimi' } } },
];

export interface SchoolDialogueTurn { speaker: 'teacher' | 'student' | 'peer'; en: string; it?: string; fr?: string; mt?: string; }
export interface SchoolDialogue { id: string; scenario: string; turns: SchoolDialogueTurn[]; }

export const computerRoomDialogues: SchoolDialogue[] = [
  { id: 'comp-turn-on', scenario: 'Starting the computer', turns: [
    { speaker: 'teacher', en: 'Turn on the computer.' },
    { speaker: 'student', en: 'The screen is black.' },
    { speaker: 'teacher', en: 'Check the cable.' },
  ],
    natural: [
      { speaker: 'teacher', en: 'Turn on your computer.' },
      { speaker: 'student', en: "The screen's black." },
      { speaker: 'teacher', en: 'Check the cable.' },
    ]},
  
  { id: 'comp-type-name', scenario: 'Typing practice', turns: [
    { speaker: 'teacher', en: 'Type your name on the keyboard.' },
    { speaker: 'student', en: 'How do I save it?' },
    { speaker: 'teacher', en: 'Click save.' },
  ],
    natural: [
      { speaker: 'teacher', en: 'Type your name on the keyboard.' },
      { speaker: 'student', en: 'How do I save it?' },
      { speaker: 'teacher', en: 'Click save.' },
    ]},
  
  { id: 'comp-internet-safe', scenario: 'Internet safety', turns: [
    { speaker: 'teacher', en: 'Do not talk to strangers online.' },
    { speaker: 'student', en: 'What about my password?' },
    { speaker: 'teacher', en: 'Keep it private. Never share.' },
  ],
    natural: [
      { speaker: 'teacher', en: "Don't talk to strangers online." },
      { speaker: 'student', en: 'What about my password?' },
      { speaker: 'teacher', en: 'Keep it private. Never share.' },
    ]},
  
  { id: 'comp-print-work', scenario: 'Printing work', turns: [
    { speaker: 'student', en: 'Can I print my picture?' },
    { speaker: 'teacher', en: 'Yes. Click print.' },
    { speaker: 'student', en: 'The printer is not working.' },
  ],
    natural: [
      { speaker: 'student', en: 'Can I print my picture?' },
      { speaker: 'teacher', en: 'Yeah. Click print.' },
      { speaker: 'student', en: "The printer isn't working." },
    ]},
  
  { id: 'comp-headphones', scenario: 'Using headphones', turns: [
    { speaker: 'teacher', en: 'Put on your headphones.' },
    { speaker: 'student', en: 'The sound is too loud.' },
    { speaker: 'teacher', en: 'Turn down the speaker.' },
  ],
    natural: [
      { speaker: 'teacher', en: 'Put your headphones on.' },
      { speaker: 'student', en: "It's too loud." },
      { speaker: 'teacher', en: 'Turn the volume down.' },
    ]},
  
  { id: 'comp-logout', scenario: 'Finishing the lesson', turns: [
    { speaker: 'teacher', en: 'Time to finish.' },
    { speaker: 'student', en: 'Do I logout?' },
    { speaker: 'teacher', en: 'Yes. Then turn off the monitor.' },
  ],
    natural: [
      { speaker: 'teacher', en: 'Time to finish up.' },
      { speaker: 'student', en: 'Do I logout?' },
      { speaker: 'teacher', en: 'Yeah. Then turn the monitor off.' },
    ]},
  
];

export const computerRoomImagePrompts: Record<string, string> = {
  'computer-parts': `A primary school computer room showing one desktop computer station.
Visible items: desktop computer tower, flat screen monitor, black keyboard, computer mouse on a mousepad, power cable, charger plug, headphones on the desk, small webcam on top of monitor, printer on a side table, speaker, power button glowing, USB port, disk drive.
Style: warm children's book illustration, soft colours, friendly, clear outlines, European primary school, no text, no labels, no watermarks.`,

  'using-computer': `A child using a computer in a primary school computer room.
Visible items: child clicking the mouse, child typing on keyboard, child scrolling down a page, child dragging a file icon, child dropping it into a folder, child pressing save button, child opening a file, child closing a window, child deleting an item, child copying text, child pasting it, child printing a picture, child turning on the computer, child turning off the monitor.
Style: warm children's book illustration, soft colours, friendly, diverse child, European primary school, no text, no labels.`,

  'internet-safety': `Children learning about internet safety in a primary school computer room.
Visible items: safe website with a green check, danger warning sign, stranger icon with a red cross, private lock symbol, child keeping password secret, child sharing with a real friend, child playing an educational game, child watching a learning video, login screen with username box, logout button, email envelope, internet globe symbol.
Style: warm children's book illustration, soft colours, friendly, diverse children, European primary school, no text, no labels.`,
};
