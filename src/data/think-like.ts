// THINK LIKE YOU'RE [LANGUAGE] — False friends & translation traps
// For EN, IT, FR, ES learners crossing in both directions
// Commercially safe: all content is original

export interface ThinkLikeLesson {
  id: string;
  direction: 'en-it' | 'en-fr' | 'en-es' | 'it-en' | 'fr-en' | 'es-en';
  level: 'a1' | 'a2' | 'b1';
  category: string;
  title: string;
  youThink: string;      // What the learner literally thinks in source language
  youSay: string;        // The wrong output they produce
  nativeSay: string;     // The correct natural form
  why: string;           // Why the trap exists
  tip: string;           // Memory shortcut
  parallels: Array<{ lang: string; text: string }>;
  examples: Array<{ correct: string; wrong: string; note?: string }>;
}

// ═════════════════════════════════════════════════════════════════════════════
// SECTION 1: ENGLISH ← ITALIAN  (Italian speakers learning English)
// ═════════════════════════════════════════════════════════════════════════════

export const thinkLikeEnIt: ThinkLikeLesson[] = [
  {
    id: 'en-it-age',
    direction: 'en-it',
    level: 'a1',
    category: 'Identity',
    title: 'How old are you?',
    youThink: 'Ho venti anni → I have twenty years',
    youSay: 'I have twenty years.',
    nativeSay: 'I am twenty. / I am twenty years old.',
    why: 'Italian (and all Romance languages) use HAVE for age: "Ho 20 anni." English uses BE. You do not "possess" years in English — you ARE that age.',
    tip: 'In English, age is identity (I AM), not possession (I HAVE).',
    parallels: [
      { lang: 'it', text: 'Ho venti anni.' },
      { lang: 'fr', text: "J'ai vingt ans." },
      { lang: 'es', text: 'Tengo veinte años.' },
    ],
    examples: [
      { correct: 'I am twenty-five.', wrong: 'I have twenty-five years.', note: 'Never "have years" in English.' },
      { correct: 'How old are you?', wrong: 'How many years do you have?', note: 'Italian: Quanti anni hai?' },
      { correct: 'She is six.', wrong: 'She has six years.', note: 'Even for children: She IS six.' },
    ],
  },
  {
    id: 'en-it-states',
    direction: 'en-it',
    level: 'a1',
    category: 'Physical State',
    title: 'I am cold / hungry / tired',
    youThink: 'Ho freddo → I have cold',
    youSay: 'I have cold. / I have hunger.',
    nativeSay: 'I am cold. / I am hungry.',
    why: 'Italian uses AVERE (to have) for physical states: "Ho freddo, ho fame, ho sonno." English uses TO BE for these states. You ARE the state, you do not possess it.',
    tip: 'Body states = BE in English. Hunger, cold, heat, tiredness — all use I AM.',
    parallels: [
      { lang: 'it', text: 'Ho freddo / Ho fame / Ho sonno.' },
      { lang: 'fr', text: "J'ai froid / J'ai faim / J'ai sommeil." },
      { lang: 'es', text: 'Tengo frío / Tengo hambre / Tengo sueño.' },
    ],
    examples: [
      { correct: 'I am hungry. Shall we eat?', wrong: 'I have hunger. Shall we eat?', note: 'Italian: Ho fame.' },
      { correct: 'Are you cold? I can close the window.', wrong: 'Do you have cold? I can close the window.', note: 'Italian: Hai freddo?' },
      { correct: 'He is always tired after work.', wrong: 'He has always tired after work.', note: 'Italian: Ha sempre sonno.' },
    ],
  },
  {
    id: 'en-it-agree',
    direction: 'en-it',
    level: 'a1',
    category: 'Opinion',
    title: 'I agree',
    youThink: 'Sono d\'accordo → I am agree',
    youSay: 'I am agree.',
    nativeSay: 'I agree.',
    why: 'Italian uses ESSERE (to be) + agreement: "Sono d\'accordo." English uses the verb AGREE directly. There is no "to be agree" — agree is already a verb.',
    tip: 'AGREE is a verb in English. You do not need "to be."',
    parallels: [
      { lang: 'it', text: "Sono d'accordo." },
      { lang: 'fr', text: "Je suis d'accord." },
      { lang: 'es', text: 'Estoy de acuerdo.' },
    ],
    examples: [
      { correct: 'I agree with you.', wrong: 'I am agree with you.', note: 'Italian: Sono d\'accordo con te.' },
      { correct: 'Do you agree?', wrong: 'Are you agree?', note: 'Italian: Sei d\'accordo?' },
      { correct: 'She does not agree.', wrong: 'She is not agree.', note: 'Italian: Lei non è d\'accordo.' },
    ],
  },
  {
    id: 'en-it-lets',
    direction: 'en-it',
    level: 'a2',
    category: 'Suggestions',
    title: "Let's go!",
    youThink: 'Andiamo! → Let us go!',
    youSay: 'Let us go to the cinema.',
    nativeSay: "Let's go to the cinema!",
    why: 'Italian uses the first-person plural imperative directly: "Andiamo!" English uses "Let us..." but in real speech, we ALWAYS contract it to "Let\'s." "Let us" sounds extremely formal — like a king giving permission.',
    tip: 'In conversation, Let us → Let\'s. Always.',
    parallels: [
      { lang: 'it', text: 'Andiamo! / Mangiamo! / Aspettiamo!' },
      { lang: 'fr', text: 'Allons-y! / Mangeons! / Attendons!' },
      { lang: 'es', text: '¡Vamos! / ¡Comamos! / ¡Esperemos!' },
    ],
    examples: [
      { correct: "Let's eat!", wrong: 'Let us eat!', note: 'Only use "Let us" in very formal writing.' },
      { correct: "Let's wait five minutes.", wrong: 'Let us wait five minutes.', note: 'Italian: Aspettiamo cinque minuti.' },
      { correct: "Let's not worry.", wrong: 'Let us not worry.', note: 'Even negative: Let\'s not...' },
    ],
  },
  {
    id: 'en-it-photo',
    direction: 'en-it',
    level: 'a1',
    category: 'Actions',
    title: 'I take a photo',
    youThink: 'Faccio una foto → I make a photo',
    youSay: 'I make a photo.',
    nativeSay: 'I take a photo.',
    why: 'Italian uses FARE (to make/do) for photos: "Faccio una foto." English uses TAKE. Photos are "taken," not "made."',
    tip: 'In English, you TAKE photos, you MAKE coffee.',
    parallels: [
      { lang: 'it', text: 'Faccio una foto. / Faccio una passeggiata.' },
      { lang: 'fr', text: 'Je prends une photo. / Je fais une promenade.' },
      { lang: 'es', text: 'Hago una foto / Tomo una foto. (Spain/Latin America differ!)' },
    ],
    examples: [
      { correct: 'Can I take a photo?', wrong: 'Can I make a photo?', note: 'Italian: Posso fare una foto?' },
      { correct: 'She takes good photos.', wrong: 'She makes good photos.', note: 'Italian: Fa belle foto.' },
    ],
  },
  {
    id: 'en-it-duration',
    direction: 'en-it',
    level: 'a2',
    category: 'Time',
    title: 'I have been here for 2 hours',
    youThink: 'Sono qui da due ore → I am here since two hours',
    youSay: 'I am here since two hours.',
    nativeSay: 'I have been here for two hours.',
    why: 'Italian uses present + DA for duration: "Sono qui da due ore." English uses the present perfect (have been) + FOR. Also, English uses FOR duration, not SINCE.',
    tip: 'Duration = FOR (how long). Starting point = SINCE (when it began).',
    parallels: [
      { lang: 'it', text: 'Sono qui da due ore.' },
      { lang: 'fr', text: 'Je suis ici depuis deux heures.' },
      { lang: 'es', text: 'Estoy aquí desde hace dos horas.' },
    ],
    examples: [
      { correct: 'I have lived here for five years.', wrong: 'I live here since five years.', note: 'Italian: Vivo qui da cinque anni.' },
      { correct: 'I have known him for a long time.', wrong: 'I know him since a long time.', note: 'Italian: Lo conosco da molto tempo.' },
      { correct: 'I have been waiting for ten minutes.', wrong: 'I am waiting since ten minutes.', note: 'Italian: Aspetto da dieci minuti.' },
    ],
  },
  {
    id: 'en-it-want',
    direction: 'en-it',
    level: 'a2',
    category: 'Desire',
    title: 'I want you to come',
    youThink: 'Voglio che tu venga → I want that you come',
    youSay: 'I want that you come.',
    nativeSay: 'I want you to come.',
    why: 'Italian uses the subjunctive after volere che: "Voglio che tu venga." English does NOT use "that" + subjunctive. Instead: WANT + OBJECT + TO + VERB.',
    tip: 'Want + person + to + verb. Never "want that."',
    parallels: [
      { lang: 'it', text: 'Voglio che tu venga. / Voglio che lui capisca.' },
      { lang: 'fr', text: 'Je veux que tu viennes. / Je veux qu\'il comprenne.' },
      { lang: 'es', text: 'Quiero que vengas. / Quiero que él entienda.' },
    ],
    examples: [
      { correct: 'I want you to understand.', wrong: 'I want that you understand.', note: 'Italian: Voglio che tu capisca.' },
      { correct: 'She wants him to call.', wrong: 'She wants that he calls.', note: 'Italian: Vuole che lui chiami.' },
    ],
  },
  {
    id: 'en-it-possession',
    direction: 'en-it',
    level: 'a1',
    category: 'Possession',
    title: "It's Marco's book",
    youThink: 'Il libro è di Marco → The book is of Marco',
    youSay: 'The book is of Marco.',
    nativeSay: "It's Marco's book. / It's the book of Marco.",
    why: 'Italian uses DI for possession: "Il libro DI Marco." English uses the apostrophe-S (\'s) for people and animals. "Of" is used for things, not people.',
    tip: "People = 's. Things = of. 'Marco\'s book' not 'book of Marco.'",
    parallels: [
      { lang: 'it', text: 'Il libro di Marco. / La macchina di Anna.' },
      { lang: 'fr', text: 'Le livre de Marco. / La voiture d\'Anna.' },
      { lang: 'es', text: 'El libro de Marco. / El coche de Ana.' },
    ],
    examples: [
      { correct: "This is Maria's house.", wrong: 'This is the house of Maria.', note: 'Italian: Questa è la casa di Maria.' },
      { correct: "My brother's car is red.", wrong: 'The car of my brother is red.', note: 'Italian: La macchina di mio fratello è rossa.' },
      { correct: 'The door of the house.', wrong: "The house's door.", note: 'Things use OF: the door OF the house.' },
    ],
  },
  {
    id: 'en-it-exist',
    direction: 'en-it',
    level: 'a1',
    category: 'Existence',
    title: 'There is / There are',
    youThink: 'C\'è un problema → It is a problem',
    youSay: 'It is a problem.',
    nativeSay: 'There is a problem.',
    why: 'Italian uses C\'È (literally "it is here") for existence. English uses THERE IS / THERE ARE. We do not say "It is a problem" when we mean "a problem exists."',
    tip: 'For existence, always start with THERE. There is / There are.',
    parallels: [
      { lang: 'it', text: "C'è un problema. / Ci sono molte persone." },
      { lang: 'fr', text: 'Il y a un problème. / Il y a beaucoup de gens.' },
      { lang: 'es', text: 'Hay un problema. / Hay mucha gente.' },
    ],
    examples: [
      { correct: 'There is a cat in the garden.', wrong: 'It is a cat in the garden.', note: 'Italian: C\'è un gatto in giardino.' },
      { correct: 'There are three chairs.', wrong: 'They are three chairs.', note: 'Italian: Ci sono tre sedie.' },
      { correct: 'Is there a pharmacy near here?', wrong: 'Is it a pharmacy near here?', note: 'Italian: C\'è una farmacia qui vicino?' },
    ],
  },
  {
    id: 'en-it-time',
    direction: 'en-it',
    level: 'a1',
    category: 'Time',
    title: 'What time is it?',
    youThink: 'Che ore sono? → What hours are they?',
    youSay: 'What hours are they?',
    nativeSay: 'What time is it?',
    why: 'Italian asks about HOURS (ore): "Che ore sono?" English asks about TIME. Also, English uses singular IT for time, not plural THEY.',
    tip: 'Time is singular in English: What time IS it? (Not: What time are they?)',
    parallels: [
      { lang: 'it', text: 'Che ore sono?' },
      { lang: 'fr', text: 'Quelle heure est-il?' },
      { lang: 'es', text: '¿Qué hora es?' },
    ],
    examples: [
      { correct: 'What time is it?', wrong: 'What hours are they?', note: 'Italian: Che ore sono?' },
      { correct: 'It is half past three.', wrong: 'They are half past three.', note: 'Italian: Sono le tre e mezza.' },
    ],
  },
];

// ═════════════════════════════════════════════════════════════════════════════
// SECTION 2: ENGLISH ← FRENCH  (French speakers learning English)
// ═════════════════════════════════════════════════════════════════════════════

export const thinkLikeEnFr: ThinkLikeLesson[] = [
  {
    id: 'en-fr-age',
    direction: 'en-fr',
    level: 'a1',
    category: 'Identity',
    title: 'How old are you?',
    youThink: "J'ai vingt ans → I have twenty years",
    youSay: 'I have twenty years.',
    nativeSay: 'I am twenty.',
    why: 'French uses AVOIR (to have) for age, just like Italian and Spanish. English uses ETRE (to be).',
    tip: 'In English, you ARE your age.',
    parallels: [
      { lang: 'fr', text: "J'ai vingt ans." },
      { lang: 'it', text: 'Ho venti anni.' },
      { lang: 'es', text: 'Tengo veinte años.' },
    ],
    examples: [
      { correct: 'I am twenty.', wrong: 'I have twenty years.' },
      { correct: 'How old is she?', wrong: 'How many years does she have?' },
    ],
  },
  {
    id: 'en-fr-weather',
    direction: 'en-fr',
    level: 'a1',
    category: 'Weather',
    title: 'It is cold',
    youThink: 'Il fait froid → It makes cold',
    youSay: 'It makes cold.',
    nativeSay: 'It is cold.',
    why: 'French uses FAIRE (to make/do) for weather: "Il fait froid / Il fait chaud." English uses TO BE for weather states.',
    tip: 'Weather = BE in English. It IS cold, not it MAKES cold.',
    parallels: [
      { lang: 'fr', text: 'Il fait froid. / Il fait chaud. / Il fait beau.' },
      { lang: 'it', text: 'Fa freddo. / Fa caldo. / Fa bel tempo.' },
      { lang: 'es', text: 'Hace frío. / Hace calor. / Hace buen tiempo.' },
    ],
    examples: [
      { correct: 'It is cold today.', wrong: 'It makes cold today.', note: 'French: Il fait froid aujourd\'hui.' },
      { correct: 'It was hot yesterday.', wrong: 'It made hot yesterday.', note: 'French: Il faisait chaud hier.' },
    ],
  },
  {
    id: 'en-fr-agree',
    direction: 'en-fr',
    level: 'a1',
    category: 'Opinion',
    title: 'I agree',
    youThink: "Je suis d'accord → I am agree",
    youSay: 'I am agree.',
    nativeSay: 'I agree.',
    why: "French uses ETRE + d'accord: 'Je suis d'accord.' English uses the verb AGREE directly.",
    tip: 'AGREE is a verb. No "to be."',
    parallels: [
      { lang: 'fr', text: "Je suis d'accord." },
      { lang: 'it', text: "Sono d'accordo." },
      { lang: 'es', text: 'Estoy de acuerdo.' },
    ],
    examples: [
      { correct: 'I agree.', wrong: 'I am agree.' },
      { correct: 'Do you agree?', wrong: 'Are you agree?' },
    ],
  },
  {
    id: 'en-fr-depuis',
    direction: 'en-fr',
    level: 'a2',
    category: 'Time',
    title: 'For vs Since',
    youThink: 'Depuis deux ans → Since two years',
    youSay: 'I live here since two years.',
    nativeSay: 'I have lived here FOR two years.',
    why: 'French uses DEPUIS for both duration and starting point. English splits them: FOR = duration (how long), SINCE = starting point (when it began).',
    tip: 'How long? = FOR. When did it start? = SINCE.',
    parallels: [
      { lang: 'fr', text: 'Je suis ici depuis deux ans.' },
      { lang: 'it', text: 'Sono qui da due anni.' },
      { lang: 'es', text: 'Estoy aquí desde hace dos años.' },
    ],
    examples: [
      { correct: 'I have known her for ten years.', wrong: 'I know her since ten years.', note: 'French: Je la connais depuis dix ans.' },
      { correct: 'I have lived here since 2015.', wrong: 'I have lived here for 2015.', note: 'French: J\'habite ici depuis 2015.' },
    ],
  },
  {
    id: 'en-fr-know',
    direction: 'en-fr',
    level: 'a2',
    category: 'Knowledge',
    title: 'I know him',
    youThink: 'Je le connais / Je sais → I know',
    youSay: '(Correct, but missing nuance)',
    nativeSay: 'I know him. / I know that.',
    why: 'French distinguishes CONNAÎTRE (people, places) from SAVOIR (facts, skills). English uses KNOW for both. French speakers sometimes over-explain which "know" they mean.',
    tip: 'English KNOW covers both. No need to specify.',
    parallels: [
      { lang: 'fr', text: 'Je connais Paris. / Je sais nager.' },
      { lang: 'it', text: 'Conosco Roma. / So nuotare.' },
      { lang: 'es', text: 'Conozco Madrid. / Sé nadar.' },
    ],
    examples: [
      { correct: 'I know London well.', wrong: 'I am acquainted with London well.', note: 'French: Je connais bien Londres.' },
      { correct: 'I know how to swim.', wrong: 'I can swim.', note: 'Both are correct, but "know how to" maps to savoir.' },
    ],
  },
  {
    id: 'en-fr-people',
    direction: 'en-fr',
    level: 'a1',
    category: 'Grammar',
    title: 'People are',
    youThink: 'Les gens sont → The people is',
    youSay: 'The people is very nice.',
    nativeSay: 'People are very nice.',
    why: 'French treats GENS as plural but uses the plural article LES. In English, PEOPLE is already plural (like GENS). It always takes a plural verb.',
    tip: 'People = always plural. People ARE, never People IS.',
    parallels: [
      { lang: 'fr', text: 'Les gens sont gentils.' },
      { lang: 'it', text: 'La gente è gentile.' },
      { lang: 'es', text: 'La gente es amable.' },
    ],
    examples: [
      { correct: 'People are waiting.', wrong: 'People is waiting.', note: 'French: Les gens attendent.' },
      { correct: 'Many people live here.', wrong: 'Much people live here.', note: 'French: Beaucoup de gens vivent ici.' },
    ],
  },
];

// ═════════════════════════════════════════════════════════════════════════════
// SECTION 3: ENGLISH ← SPANISH  (Spanish speakers learning English)
// ═════════════════════════════════════════════════════════════════════════════

export const thinkLikeEnEs: ThinkLikeLesson[] = [
  {
    id: 'en-es-age',
    direction: 'en-es',
    level: 'a1',
    category: 'Identity',
    title: 'How old are you?',
    youThink: 'Tengo veinte años → I have twenty years',
    youSay: 'I have twenty years.',
    nativeSay: 'I am twenty.',
    why: 'Spanish uses TENER (to have) for age. English uses TO BE.',
    tip: 'You ARE your age in English.',
    parallels: [
      { lang: 'es', text: 'Tengo veinte años.' },
      { lang: 'it', text: 'Ho venti anni.' },
      { lang: 'fr', text: "J'ai vingt ans." },
    ],
    examples: [
      { correct: 'I am thirty.', wrong: 'I have thirty years.' },
      { correct: 'How old is your brother?', wrong: 'How many years has your brother?' },
    ],
  },
  {
    id: 'en-es-adjective',
    direction: 'en-es',
    level: 'a1',
    category: 'Description',
    title: 'The red car',
    youThink: 'El coche rojo → The car red',
    youSay: 'The car red.',
    nativeSay: 'The red car.',
    why: 'Spanish puts adjectives AFTER nouns: "coche ROJO." English puts most adjectives BEFORE the noun.',
    tip: 'English: Adjective + Noun. Red car, not car red.',
    parallels: [
      { lang: 'es', text: 'El coche rojo. / La casa grande.' },
      { lang: 'it', text: 'La macchina rossa. / La casa grande.' },
      { lang: 'fr', text: 'La voiture rouge. / La maison grande.' },
    ],
    examples: [
      { correct: 'I have a big house.', wrong: 'I have a house big.', note: 'Spanish: Tengo una casa grande.' },
      { correct: 'She wore a beautiful dress.', wrong: 'She wore a dress beautiful.', note: 'Spanish: Llevaba un vestido hermoso.' },
    ],
  },
  {
    id: 'en-es-agree',
    direction: 'en-es',
    level: 'a1',
    category: 'Opinion',
    title: 'I agree',
    youThink: 'Estoy de acuerdo → I am agree',
    youSay: 'I am agree.',
    nativeSay: 'I agree.',
    why: 'Spanish uses ESTAR + de acuerdo. English uses the verb AGREE directly.',
    tip: 'AGREE is a verb. No "to be."',
    parallels: [
      { lang: 'es', text: 'Estoy de acuerdo.' },
      { lang: 'it', text: "Sono d'accordo." },
      { lang: 'fr', text: "Je suis d'accord." },
    ],
    examples: [
      { correct: 'I agree with you.', wrong: 'I am agree with you.' },
      { correct: 'We all agree.', wrong: 'We are all agree.' },
    ],
  },
  {
    id: 'en-es-continuous',
    direction: 'en-es',
    level: 'a2',
    category: 'Actions',
    title: 'I am eating',
    youThink: 'Estoy comiendo → I am eating',
    youSay: '(Often over-used or under-used)',
    nativeSay: 'I am eating. / I eat.',
    why: 'Spanish uses ESTAR + gerundio for ongoing actions, similar to English. But Spanish speakers sometimes use present simple where English needs continuous: "What do you do?" instead of "What are you doing?"',
    tip: 'If someone is doing it RIGHT NOW, use -ING in English.',
    parallels: [
      { lang: 'es', text: '¿Qué estás haciendo? / ¿Qué haces?' },
      { lang: 'it', text: 'Cosa stai facendo? / Cosa fai?' },
      { lang: 'fr', text: 'Qu\'est-ce que tu fais? / Que fais-tu?' },
    ],
    examples: [
      { correct: 'What are you doing?', wrong: 'What do you do?', note: 'Spanish: ¿Qué haces? can mean both.' },
      { correct: 'I am reading a book.', wrong: 'I read a book.', note: 'Right now: I am reading.' },
    ],
  },
  {
    id: 'en-es-subjunctive',
    direction: 'en-es',
    level: 'b1',
    category: 'Desire',
    title: 'I want you to come',
    youThink: 'Quiero que vengas → I want that you come',
    youSay: 'I want that you come.',
    nativeSay: 'I want you to come.',
    why: 'Spanish uses the subjunctive after querer que: "Quiero que vengas." English uses WANT + OBJECT + TO + VERB. No "that."',
    tip: 'Want + person + to + verb.',
    parallels: [
      { lang: 'es', text: 'Quiero que vengas.' },
      { lang: 'it', text: 'Voglio che tu venga.' },
      { lang: 'fr', text: 'Je veux que tu viennes.' },
    ],
    examples: [
      { correct: 'I want you to stay.', wrong: 'I want that you stay.', note: 'Spanish: Quiero que te quedes.' },
      { correct: 'She wants me to help.', wrong: 'She wants that I help.', note: 'Spanish: Ella quiere que ayude.' },
    ],
  },
];

// ═════════════════════════════════════════════════════════════════════════════
// SECTION 4: ITALIAN ← ENGLISH  (English speakers learning Italian)
// ═════════════════════════════════════════════════════════════════════════════

export const thinkLikeItEn: ThinkLikeLesson[] = [
  {
    id: 'it-en-age',
    direction: 'it-en',
    level: 'a1',
    category: 'Identity',
    title: 'Ho venti anni',
    youThink: 'I am twenty → I am twenty',
    youSay: 'Sono venti.',
    nativeSay: 'Ho venti anni.',
    why: 'English uses BE for age. Italian uses AVERE (to have). You POSSESS years in Italian.',
    tip: 'Italian: Ho X anni. Never "Sono X" for age.',
    parallels: [
      { lang: 'en', text: 'I am twenty.' },
      { lang: 'fr', text: "J'ai vingt ans." },
      { lang: 'es', text: 'Tengo veinte años.' },
    ],
    examples: [
      { correct: 'Ho venticinque anni.', wrong: 'Sono venticinque.', note: 'English: I am twenty-five.' },
      { correct: 'Quanti anni hai?', wrong: 'Quanto vecchio sei?', note: 'English: How old are you?' },
    ],
  },
  {
    id: 'it-en-states',
    direction: 'it-en',
    level: 'a1',
    category: 'Physical State',
    title: 'Ho fame / Ho freddo',
    youThink: 'I am hungry → I am hungry',
    youSay: 'Sono fame. / Sono freddo.',
    nativeSay: 'Ho fame. / Ho freddo.',
    why: 'English uses BE for hunger, cold, tiredness. Italian uses AVERE. You HAVE these states.',
    tip: 'Italian: Ho fame, Ho freddo, Ho sonno, Ho paura.',
    parallels: [
      { lang: 'en', text: 'I am hungry / cold / tired.' },
      { lang: 'fr', text: "J'ai faim / froid / sommeil." },
      { lang: 'es', text: 'Tengo hambre / frío / sueño.' },
    ],
    examples: [
      { correct: 'Ho molta fame.', wrong: 'Sono molta fame.', note: 'English: I am very hungry.' },
      { correct: 'Hai freddo?', wrong: 'Sei freddo?', note: 'English: Are you cold?' },
    ],
  },
  {
    id: 'it-en-agree',
    direction: 'it-en',
    level: 'a1',
    category: 'Opinion',
    title: "Sono d'accordo",
    youThink: 'I agree → I agree',
    youSay: 'Agree.',
    nativeSay: "Sono d'accordo.",
    why: 'English uses the verb AGREE directly. Italian needs ESSERE + d\'accordo. You cannot just say "Agree" in Italian.',
    tip: 'Italian: Sono d\'accordo. / Sei d\'accordo?',
    parallels: [
      { lang: 'en', text: 'I agree.' },
      { lang: 'fr', text: "Je suis d'accord." },
      { lang: 'es', text: 'Estoy de acuerdo.' },
    ],
    examples: [
      { correct: "Sono d'accordo con te.", wrong: 'Agree con te.', note: 'English: I agree with you.' },
      { correct: "Non sono d'accordo.", wrong: 'Non agree.', note: 'English: I do not agree.' },
    ],
  },
  {
    id: 'it-en-suggestions',
    direction: 'it-en',
    level: 'a1',
    category: 'Suggestions',
    title: 'Andiamo!',
    youThink: "Let's go! → Let's go!",
    youSay: 'Lascia che andiamo.',
    nativeSay: 'Andiamo!',
    why: 'English uses "Let\'s" for suggestions. Italian uses the first-person plural imperative directly: ANDIAMO! No helper verb needed.',
    tip: 'Italian suggestions: Andiamo! Mangiamo! Aspettiamo!',
    parallels: [
      { lang: 'en', text: "Let's go! / Let's eat!" },
      { lang: 'fr', text: 'Allons-y! / Mangeons!' },
      { lang: 'es', text: '¡Vamos! / ¡Comamos!' },
    ],
    examples: [
      { correct: 'Andiamo al cinema!', wrong: 'Lascia che andiamo al cinema!', note: 'English: Let\'s go to the cinema!' },
      { correct: 'Mangiamo fuori stasera.', wrong: 'Lascia che mangiamo fuori.', note: 'English: Let\'s eat out tonight.' },
    ],
  },
  {
    id: 'it-en-photo',
    direction: 'it-en',
    level: 'a1',
    category: 'Actions',
    title: 'Faccio una foto',
    youThink: 'I take a photo → I take a photo',
    youSay: 'Prendo una foto.',
    nativeSay: 'Faccio una foto.',
    why: 'English uses TAKE for photos. Italian uses FARE.',
    tip: 'Italian: Faccio una foto. / Faccio una passeggiata.',
    parallels: [
      { lang: 'en', text: 'I take a photo.' },
      { lang: 'fr', text: 'Je prends une photo.' },
      { lang: 'es', text: 'Hago una foto / Tomo una foto.' },
    ],
    examples: [
      { correct: 'Faccio una foto del tramonto.', wrong: 'Prendo una foto del tramonto.', note: 'English: I take a photo of the sunset.' },
      { correct: 'Facciamo una passeggiata.', wrong: 'Prendiamo una passeggiata.', note: 'English: Let\'s take a walk.' },
    ],
  },
  {
    id: 'it-en-duration',
    direction: 'it-en',
    level: 'a2',
    category: 'Time',
    title: 'Sono qui da due anni',
    youThink: 'I have been here for two years → I have been here for two years',
    youSay: 'Ho stato qui per due anni.',
    nativeSay: 'Sono qui da due anni.',
    why: 'English uses present perfect + FOR. Italian uses present + DA. You say you ARE here SINCE two years ago.',
    tip: 'Italian present + DA = English present perfect + FOR.',
    parallels: [
      { lang: 'en', text: 'I have been here for two years.' },
      { lang: 'fr', text: 'Je suis ici depuis deux ans.' },
      { lang: 'es', text: 'Estoy aquí desde hace dos años.' },
    ],
    examples: [
      { correct: 'Lo conosco da molto tempo.', wrong: 'Ho conosciuto lui per molto tempo.', note: 'English: I have known him for a long time.' },
      { correct: 'Aspetto da dieci minuti.', wrong: 'Ho aspettato per dieci minuti.', note: 'English: I have been waiting for ten minutes.' },
    ],
  },
];

// ═════════════════════════════════════════════════════════════════════════════
// SECTION 5: FRENCH ← ENGLISH  (English speakers learning French)
// ═════════════════════════════════════════════════════════════════════════════

export const thinkLikeFrEn: ThinkLikeLesson[] = [
  {
    id: 'fr-en-age',
    direction: 'fr-en',
    level: 'a1',
    category: 'Identity',
    title: "J'ai vingt ans",
    youThink: 'I am twenty → I am twenty',
    youSay: 'Je suis vingt.',
    nativeSay: "J'ai vingt ans.",
    why: 'English uses BE. French uses AVOIR.',
    tip: 'French: J\'ai X ans.',
    parallels: [
      { lang: 'en', text: 'I am twenty.' },
      { lang: 'it', text: 'Ho venti anni.' },
      { lang: 'es', text: 'Tengo veinte años.' },
    ],
    examples: [
      { correct: "J'ai trente ans.", wrong: 'Je suis trente.', note: 'English: I am thirty.' },
    ],
  },
  {
    id: 'fr-en-agree',
    direction: 'fr-en',
    level: 'a1',
    category: 'Opinion',
    title: "Je suis d'accord",
    youThink: 'I agree → I agree',
    youSay: "J'agrée.",
    nativeSay: "Je suis d'accord.",
    why: 'English uses the verb agree. French uses ETRE + d\'accord.',
    tip: "French: Je suis d'accord.",
    parallels: [
      { lang: 'en', text: 'I agree.' },
      { lang: 'it', text: "Sono d'accordo." },
      { lang: 'es', text: 'Estoy de acuerdo.' },
    ],
    examples: [
      { correct: "Je suis d'accord avec toi.", wrong: "J'agrée avec toi.", note: 'English: I agree with you.' },
    ],
  },
  {
    id: 'fr-en-weather',
    direction: 'fr-en',
    level: 'a1',
    category: 'Weather',
    title: 'Il fait froid',
    youThink: 'It is cold → It is cold',
    youSay: 'Il est froid.',
    nativeSay: 'Il fait froid.',
    why: 'English uses BE for weather. French uses FAIRE.',
    tip: 'French: Il fait + adjective for weather.',
    parallels: [
      { lang: 'en', text: 'It is cold.' },
      { lang: 'it', text: 'Fa freddo.' },
      { lang: 'es', text: 'Hace frío.' },
    ],
    examples: [
      { correct: 'Il fait beau aujourd\'hui.', wrong: 'Il est beau aujourd\'hui.', note: 'English: It is nice today.' },
    ],
  },
  {
    id: 'fr-en-depuis',
    direction: 'fr-en',
    level: 'a2',
    category: 'Time',
    title: 'Je suis ici depuis deux ans',
    youThink: 'I have lived here for two years → I have lived here for two years',
    youSay: "J'ai habité ici pour deux ans.",
    nativeSay: 'Je suis ici depuis deux ans.',
    why: 'English splits FOR/SINCE. French uses DEPUIS for both.',
    tip: 'French: DEPUIS covers both duration and starting point.',
    parallels: [
      { lang: 'en', text: 'I have lived here for two years.' },
      { lang: 'it', text: 'Sono qui da due anni.' },
      { lang: 'es', text: 'Estoy aquí desde hace dos años.' },
    ],
    examples: [
      { correct: 'Je la connais depuis dix ans.', wrong: 'Je la connais pour dix ans.', note: 'English: I have known her for ten years.' },
    ],
  },
];

// ═════════════════════════════════════════════════════════════════════════════
// SECTION 6: SPANISH ← ENGLISH  (English speakers learning Spanish)
// ═════════════════════════════════════════════════════════════════════════════

export const thinkLikeEsEn: ThinkLikeLesson[] = [
  {
    id: 'es-en-age',
    direction: 'es-en',
    level: 'a1',
    category: 'Identity',
    title: 'Tengo veinte años',
    youThink: 'I am twenty → I am twenty',
    youSay: 'Soy veinte.',
    nativeSay: 'Tengo veinte años.',
    why: 'English uses BE. Spanish uses TENER.',
    tip: 'Spanish: Tengo X años.',
    parallels: [
      { lang: 'en', text: 'I am twenty.' },
      { lang: 'it', text: 'Ho venti anni.' },
      { lang: 'fr', text: "J'ai vingt ans." },
    ],
    examples: [
      { correct: 'Tengo treinta años.', wrong: 'Soy treinta.', note: 'English: I am thirty.' },
    ],
  },
  {
    id: 'es-en-adjective',
    direction: 'es-en',
    level: 'a1',
    category: 'Description',
    title: 'El coche rojo',
    youThink: 'The red car → The red car',
    youSay: 'El rojo coche.',
    nativeSay: 'El coche rojo.',
    why: 'English puts adjectives BEFORE nouns. Spanish puts most adjectives AFTER.',
    tip: 'Spanish: Noun + Adjective. Coche rojo, not rojo coche.',
    parallels: [
      { lang: 'en', text: 'The red car.' },
      { lang: 'it', text: 'La macchina rossa.' },
      { lang: 'fr', text: 'La voiture rouge.' },
    ],
    examples: [
      { correct: 'Una casa grande.', wrong: 'Una grande casa.', note: 'English: A big house.' },
    ],
  },
  {
    id: 'es-en-agree',
    direction: 'es-en',
    level: 'a1',
    category: 'Opinion',
    title: 'Estoy de acuerdo',
    youThink: 'I agree → I agree',
    youSay: 'Estoy agree.',
    nativeSay: 'Estoy de acuerdo.',
    why: 'English uses the verb agree. Spanish uses ESTAR + de acuerdo.',
    tip: 'Spanish: Estoy de acuerdo.',
    parallels: [
      { lang: 'en', text: 'I agree.' },
      { lang: 'it', text: "Sono d'accordo." },
      { lang: 'fr', text: "Je suis d'accord." },
    ],
    examples: [
      { correct: 'Estoy de acuerdo contigo.', wrong: 'Agree contigo.', note: 'English: I agree with you.' },
    ],
  },
  {
    id: 'es-en-subjunctive',
    direction: 'es-en',
    level: 'b1',
    category: 'Desire',
    title: 'Quiero que vengas',
    youThink: 'I want you to come → I want you to come',
    youSay: 'Quiero tú a venir.',
    nativeSay: 'Quiero que vengas.',
    why: 'English uses WANT + object + TO + verb. Spanish uses QUERER QUE + subjunctive.',
    tip: 'Spanish: Quiero que + subjunctive. Never "Quiero tú a venir."',
    parallels: [
      { lang: 'en', text: 'I want you to come.' },
      { lang: 'it', text: 'Voglio che tu venga.' },
      { lang: 'fr', text: 'Je veux que tu viennes.' },
    ],
    examples: [
      { correct: 'Quiero que te quedes.', wrong: 'Quiero tú a quedar.', note: 'English: I want you to stay.' },
    ],
  },
];

// ═════════════════════════════════════════════════════════════════════════════
// MASTER EXPORT
// ═════════════════════════════════════════════════════════════════════════════

export const allThinkLikeLessons: ThinkLikeLesson[] = [
  ...thinkLikeEnIt,
  ...thinkLikeEnFr,
  ...thinkLikeEnEs,
  ...thinkLikeItEn,
  ...thinkLikeFrEn,
  ...thinkLikeEsEn,
];

export const thinkLikeByDirection: Record<string, ThinkLikeLesson[]> = {
  'en-it': thinkLikeEnIt,
  'en-fr': thinkLikeEnFr,
  'en-es': thinkLikeEnEs,
  'it-en': thinkLikeItEn,
  'fr-en': thinkLikeFrEn,
  'es-en': thinkLikeEsEn,
};
