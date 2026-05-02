// School Palace — Library
// English source layer (truth layer)
// A1 level, concrete objects only for image pins

import type { Room } from '../../types';

export const schoolLibraryRoom: Room = {
  id: 'school-library',
  name: 'Library',
  subtitle: 'Books & Stories',
  nameNative: 'Biblioteca',
  image: 'rooms/school/school-library.jpg',
  description: 'A quiet place full of books to read and borrow.',
  grammarFocus: 'borrowing language & quiet rules',
  vocabularyIds: [
    'lib-book', 'lib-shelf', 'lib-story', 'lib-picture-book', 'lib-comic',
    'lib-dictionary', 'lib-atlas', 'lib-encyclopaedia', 'lib-magazine', 'lib-newspaper',
    'lib-poem', 'lib-fairy-tale', 'lib-cover', 'lib-page', 'lib-spine',
    'lib-read', 'lib-quiet', 'lib-silence', 'lib-look', 'lib-turn-page',
    'lib-bookmark', 'lib-glasses', 'lib-cushion', 'lib-lamp', 'lib-table',
    'lib-chair', 'lib-listen', 'lib-imagine', 'lib-learn', 'lib-enjoy',
    'lib-borrow', 'lib-return', 'lib-due-date', 'lib-late', 'lib-library-card',
    'lib-librarian', 'lib-ticket', 'lib-renew', 'lib-fine', 'lib-rule',
    'lib-whisper', 'lib-no-food', 'lib-no-drinks', 'lib-be-careful', 'lib-thank-you',
  ],
  zones: [
    {
      id: 'books-shelves',
      name: 'Books & Shelves',
      nameNative: 'Libri e Scaffali',
      description: 'Every kind of book you can read',
      icon: '📚',
      x: 25, y: 30, width: 30, height: 25,
      interiorImage: 'rooms/school/library-books.jpg',
      interiorVocab: [
        { wordId: 'lib-book', x: 20, y: 25 }, { wordId: 'lib-shelf', x: 50, y: 20 },
        { wordId: 'lib-story', x: 80, y: 25 }, { wordId: 'lib-picture-book', x: 25, y: 45 },
        { wordId: 'lib-comic', x: 55, y: 40 }, { wordId: 'lib-dictionary', x: 80, y: 45 },
        { wordId: 'lib-atlas', x: 15, y: 60 }, { wordId: 'lib-encyclopaedia', x: 40, y: 60 },
        { wordId: 'lib-magazine', x: 65, y: 60 }, { wordId: 'lib-newspaper', x: 85, y: 60 },
        { wordId: 'lib-poem', x: 20, y: 80 }, { wordId: 'lib-fairy-tale', x: 45, y: 80 },
        { wordId: 'lib-cover', x: 70, y: 80 }, { wordId: 'lib-page', x: 30, y: 90 },
        { wordId: 'lib-spine', x: 60, y: 90 },
      ],
    },
    {
      id: 'reading-quiet',
      name: 'Reading & Quiet',
      nameNative: 'Leggere in Silenzio',
      description: 'Sit down and enjoy a story',
      icon: '🤫',
      x: 60, y: 30, width: 30, height: 25,
      interiorImage: 'rooms/school/library-reading.jpg',
      interiorVocab: [
        { wordId: 'lib-read', x: 20, y: 20 }, { wordId: 'lib-quiet', x: 50, y: 20 },
        { wordId: 'lib-silence', x: 80, y: 20 }, { wordId: 'lib-look', x: 20, y: 45 },
        { wordId: 'lib-turn-page', x: 50, y: 45 }, { wordId: 'lib-bookmark', x: 80, y: 45 },
        { wordId: 'lib-glasses', x: 20, y: 65 }, { wordId: 'lib-cushion', x: 45, y: 65 },
        { wordId: 'lib-lamp', x: 70, y: 65 }, { wordId: 'lib-table', x: 85, y: 65 },
        { wordId: 'lib-chair', x: 20, y: 85 }, { wordId: 'lib-listen', x: 45, y: 85 },
        { wordId: 'lib-imagine', x: 65, y: 85 }, { wordId: 'lib-learn', x: 30, y: 95 },
        { wordId: 'lib-enjoy', x: 55, y: 95 },
      ],
    },
    {
      id: 'borrowing-rules',
      name: 'Borrowing & Rules',
      nameNative: 'Prendere in Prestito',
      description: 'How to borrow a book',
      icon: '📋',
      x: 40, y: 60, width: 35, height: 25,
      interiorImage: 'rooms/school/library-borrow.jpg',
      interiorVocab: [
        { wordId: 'lib-borrow', x: 20, y: 20 }, { wordId: 'lib-return', x: 50, y: 20 },
        { wordId: 'lib-due-date', x: 80, y: 20 }, { wordId: 'lib-late', x: 20, y: 45 },
        { wordId: 'lib-library-card', x: 50, y: 45 }, { wordId: 'lib-librarian', x: 80, y: 45 },
        { wordId: 'lib-ticket', x: 20, y: 65 }, { wordId: 'lib-renew', x: 45, y: 65 },
        { wordId: 'lib-fine', x: 70, y: 65 }, { wordId: 'lib-rule', x: 85, y: 65 },
        { wordId: 'lib-whisper', x: 20, y: 85 }, { wordId: 'lib-no-food', x: 45, y: 85 },
        { wordId: 'lib-no-drinks', x: 65, y: 85 }, { wordId: 'lib-be-careful', x: 80, y: 85 },
        { wordId: 'lib-thank-you', x: 50, y: 95 },
      ],
    },
  ],
  grammarPoints: [
    { id: 'library-can-i', title: 'Can I borrow...?', explanation: 'Polite requests in the library', example: 'Can I borrow this book? Can I renew it?', color: '#3B82F6' },
    { id: 'library-rules', title: 'Library Rules', explanation: 'Must and must not', example: 'Be quiet. No food. No running.', color: '#10B981' },
  ],
};

export interface SchoolConcept {
  id: string; emoji?: string;
  en: { word: string; phrase?: string; context?: string };
  it?: { word: string; phrase?: string; gender?: 'masculine' | 'feminine' | 'none'; pronunciation?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
  fr?: { word: string; phrase?: string; gender?: 'masculine' | 'feminine' | 'none'; pronunciation?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
  mt?: { word: string; phrase?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
}

export const schoolLibraryVocabulary: SchoolConcept[] = [
  { id: 'lib-book', emoji: '📖', en: { word: 'book', phrase: 'I like this book.', context: 'Reading' } },
  { id: 'lib-shelf', emoji: '📚', en: { word: 'shelf', phrase: 'Put it on the shelf.', context: 'Storage' } },
  { id: 'lib-story', emoji: '📕', en: { word: 'story', phrase: 'Read me a story.', context: 'Narrative' } },
  { id: 'lib-picture-book', emoji: '🖼️', en: { word: 'picture book', phrase: 'A book with pictures.', context: 'Young readers' } },
  { id: 'lib-comic', emoji: '🗯️', en: { word: 'comic', phrase: 'I read comics.', context: 'Fun reading' } },
  { id: 'lib-dictionary', emoji: '📘', en: { word: 'dictionary', phrase: 'Look it up in the dictionary.', context: 'Finding words' } },
  { id: 'lib-atlas', emoji: '🗺️', en: { word: 'atlas', phrase: 'Find it on the atlas.', context: 'Maps' } },
  { id: 'lib-encyclopaedia', emoji: '📚', en: { word: 'encyclopaedia', phrase: 'The encyclopaedia has facts.', context: 'Facts' } },
  { id: 'lib-magazine', emoji: '📰', en: { word: 'magazine', phrase: 'A colourful magazine.', context: 'Periodical' } },
  { id: 'lib-newspaper', emoji: '📰', en: { word: 'newspaper', phrase: 'Read the newspaper.', context: 'News' } },
  { id: 'lib-poem', emoji: '✍️', en: { word: 'poem', phrase: 'A short poem.', context: 'Poetry' } },
  { id: 'lib-fairy-tale', emoji: '🧚', en: { word: 'fairy tale', phrase: 'A fairy tale about a princess.', context: 'Stories' } },
  { id: 'lib-cover', emoji: '📔', en: { word: 'cover', phrase: 'Look at the cover.', context: 'Front of book' } },
  { id: 'lib-page', emoji: '📄', en: { word: 'page', phrase: 'Turn the page.', context: 'Inside book' } },
  { id: 'lib-spine', emoji: '📚', en: { word: 'spine', phrase: 'Read the spine.', context: 'Side of book' } },

  { id: 'lib-read', emoji: '📖', en: { word: 'read', phrase: 'Read quietly.', context: 'Activity' } },
  { id: 'lib-quiet', emoji: '🤫', en: { word: 'quiet', phrase: 'Be quiet.', context: 'Rule' } },
  { id: 'lib-silence', emoji: '🔇', en: { word: 'silence', phrase: 'Silence, please.', context: 'Rule' } },
  { id: 'lib-look', emoji: '👀', en: { word: 'look', phrase: 'Look at the pictures.', context: 'Activity' } },
  { id: 'lib-turn-page', emoji: '👆', en: { word: 'turn the page', phrase: 'Turn the page.', context: 'Reading' } },
  { id: 'lib-bookmark', emoji: '🔖', en: { word: 'bookmark', phrase: 'Use a bookmark.', context: 'Saving place' } },
  { id: 'lib-glasses', emoji: '👓', en: { word: 'glasses', phrase: 'I need my glasses.', context: 'Reading aid' } },
  { id: 'lib-cushion', emoji: '🟦', en: { word: 'cushion', phrase: 'Sit on the cushion.', context: 'Comfort' } },
  { id: 'lib-lamp', emoji: '💡', en: { word: 'lamp', phrase: 'Turn on the lamp.', context: 'Light' } },
  { id: 'lib-table', emoji: '🟫', en: { word: 'table', phrase: 'Put it on the table.', context: 'Furniture' } },
  { id: 'lib-chair', emoji: '🪑', en: { word: 'chair', phrase: 'Sit on the chair.', context: 'Furniture' } },
  { id: 'lib-listen', emoji: '👂', en: { word: 'listen', phrase: 'Listen to the story.', context: 'Audio' } },
  { id: 'lib-imagine', emoji: '💭', en: { word: 'imagine', phrase: 'Imagine the world.', context: 'Creativity' } },
  { id: 'lib-learn', emoji: '🧠', en: { word: 'learn', phrase: 'I learn new words.', context: 'Education' } },
  { id: 'lib-enjoy', emoji: '😊', en: { word: 'enjoy', phrase: 'Enjoy your book.', context: 'Pleasure' } },

  { id: 'lib-borrow', emoji: '🤲', en: { word: 'borrow', phrase: 'Can I borrow this?', context: 'Request' } },
  { id: 'lib-return', emoji: '↩️', en: { word: 'return', phrase: 'Return the book.', context: 'Give back' } },
  { id: 'lib-due-date', emoji: '📅', en: { word: 'due date', phrase: 'When is the due date?', context: 'Deadline' } },
  { id: 'lib-late', emoji: '⏰', en: { word: 'late', phrase: 'The book is late.', context: 'Overdue' } },
  { id: 'lib-library-card', emoji: '🪪', en: { word: 'library card', phrase: 'Show your library card.', context: 'ID' } },
  { id: 'lib-librarian', emoji: '👩‍🏫', en: { word: 'librarian', phrase: 'Ask the librarian.', context: 'Staff' } },
  { id: 'lib-ticket', emoji: '🎫', en: { word: 'ticket', phrase: 'Here is your ticket.', context: 'Borrow slip' } },
  { id: 'lib-renew', emoji: '🔄', en: { word: 'renew', phrase: 'Can I renew it?', context: 'Extend' } },
  { id: 'lib-fine', emoji: '💰', en: { word: 'fine', phrase: 'Pay the fine.', context: 'Penalty' } },
  { id: 'lib-rule', emoji: '📏', en: { word: 'rule', phrase: 'Follow the rules.', context: 'Regulation' } },
  { id: 'lib-whisper', emoji: '🤫', en: { word: 'whisper', phrase: 'Whisper, please.', context: 'Quiet voice' } },
  { id: 'lib-no-food', emoji: '🚫', en: { word: 'no food', phrase: 'No food in the library.', context: 'Rule' } },
  { id: 'lib-no-drinks', emoji: '🚫', en: { word: 'no drinks', phrase: 'No drinks here.', context: 'Rule' } },
  { id: 'lib-be-careful', emoji: '⚠️', en: { word: 'be careful', phrase: 'Be careful with the book.', context: 'Warning' } },
  { id: 'lib-thank-you', emoji: '🙏', en: { word: 'thank you', phrase: 'Thank you.', context: 'Politeness' } },
];

export interface SchoolDialogueTurn { speaker: 'teacher' | 'student' | 'peer'; en: string; it?: string; fr?: string; mt?: string; }
export interface SchoolDialogue { id: string; scenario: string; turns: SchoolDialogueTurn[]; }

export const schoolLibraryDialogues: SchoolDialogue[] = [
  { id: 'lib-borrow-book', scenario: 'Borrowing a book', turns: [
    { speaker: 'student', en: 'Can I borrow this book?' },
    { speaker: 'peer', en: 'Yes. Show your card.' },
    { speaker: 'student', en: 'Here.' },
    { speaker: 'peer', en: 'Bring it back next week.' },
  ],
    natural: [
      { speaker: 'student', en: 'Can I borrow this book?' },
      { speaker: 'peer', en: 'Yeah. Show your card.' },
      { speaker: 'student', en: 'Here.' },
      { speaker: 'peer', en: 'Bring it back next week.' },
    ]},
  
  { id: 'lib-be-quiet', scenario: 'Being too loud', turns: [
    { speaker: 'peer', en: 'Shh. Be quiet.' },
    { speaker: 'student', en: 'Sorry.' },
    { speaker: 'peer', en: 'Whisper, please.' },
  ],
    natural: [
      { speaker: 'peer', en: 'Shh. Be quiet.' },
      { speaker: 'student', en: 'Sorry.' },
      { speaker: 'peer', en: 'Whisper.' },
    ]},
  
  { id: 'lib-find-book', scenario: 'Finding a book', turns: [
    { speaker: 'student', en: 'Where are the animal books?' },
    { speaker: 'peer', en: 'On that shelf.' },
    { speaker: 'student', en: 'Thank you.' },
  ],
    natural: [
      { speaker: 'student', en: 'Where are the animal books?' },
      { speaker: 'peer', en: 'On that shelf.' },
      { speaker: 'student', en: 'Thanks.' },
    ]},
  
  { id: 'lib-return-late', scenario: 'Returning late', turns: [
    { speaker: 'student', en: 'Sorry, the book is late.' },
    { speaker: 'peer', en: 'That is okay. Next time, be on time.' },
  ],
    natural: [
      { speaker: 'student', en: 'Sorry, the book is late.' },
      { speaker: 'peer', en: "That's okay. Next time, be on time." },
    ]},
  
  { id: 'lib-damaged', scenario: 'Damaged book', turns: [
    { speaker: 'student', en: 'The page is torn.' },
    { speaker: 'peer', en: 'Be more careful next time.' },
    { speaker: 'student', en: 'I am sorry.' },
  ],
    natural: [
      { speaker: 'student', en: 'The page is torn.' },
      { speaker: 'peer', en: 'Be more careful next time.' },
      { speaker: 'student', en: "I'm sorry." },
    ]},
  
  { id: 'lib-read-together', scenario: 'Reading together', turns: [
    { speaker: 'peer', en: 'Do you want to read together?' },
    { speaker: 'student', en: 'Yes! Which book?' },
    { speaker: 'peer', en: 'This story about a cat.' },
  ],
    natural: [
      { speaker: 'peer', en: 'Wanna read together?' },
      { speaker: 'student', en: 'Yeah! Which book?' },
      { speaker: 'peer', en: 'This story about a cat.' },
    ]},
  
  { id: 'lib-no-food', scenario: 'Food in the library', turns: [
    { speaker: 'peer', en: 'No food in the library.' },
    { speaker: 'student', en: 'Sorry. I will put it away.' },
  ],
    natural: [
      { speaker: 'peer', en: 'No food in the library.' },
      { speaker: 'student', en: "Sorry. I'll put it away." },
    ]},
  
  { id: 'lib-help-find', scenario: 'Librarian helps', turns: [
    { speaker: 'student', en: 'I cannot find this book.' },
    { speaker: 'peer', en: 'Let me help you.' },
    { speaker: 'peer', en: 'Here it is.' },
    { speaker: 'student', en: 'Thank you very much.' },
  ],
    natural: [
      { speaker: 'student', en: "I can't find this book." },
      { speaker: 'peer', en: 'Let me help you.' },
      { speaker: 'peer', en: "Here it is." },
      { speaker: 'student', en: 'Thanks very much.' },
    ]},
  
];

export const schoolLibraryImagePrompts: Record<string, string> = {
  'books-shelves': `A primary school library corner with wooden bookshelves full of colourful books.
Visible items: hardcover storybooks, picture books with bright covers, comic books, thick dictionary, atlas with maps, encyclopaedia set, magazines on a rack, newspaper, poetry book, fairy tale book, book covers facing out, open pages, book spines with colours, library shelf labels.
Style: warm children's book illustration, soft colours, friendly, clear outlines, European primary school, no text, no labels, no watermarks.`,

  'reading-quiet': `Children reading quietly in a cozy primary school library corner.
Visible items: child sitting on a cushion reading a book, child wearing glasses looking at pictures, child turning a page, bookmark sticking out of a book, small reading lamp, wooden table with books, comfortable chair, child listening to a story, child imagining with thought bubble, child smiling and enjoying a book.
Style: warm children's book illustration, soft colours, friendly, quiet atmosphere, diverse children, European primary school, no text, no labels.`,

  'borrowing-rules': `A primary school library borrowing desk with a librarian helping a child.
Visible items: wooden borrowing desk, library card, librarian stamp, date slip in book, book return box, sign showing rules, child whispering, no food symbol, no drinks symbol, careful hands holding a book, child saying thank you, bookshelf in background.
Style: warm children's book illustration, soft colours, friendly, clear outlines, European primary school, no text, no labels.`,
};
