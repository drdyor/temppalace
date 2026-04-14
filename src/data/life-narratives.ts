// Life-Stage Narratives: Marco's Journey Through the Palace
// Each room shows Marco at 3 life stages: Child (past), Adult (present), Elder (future)
// This naturally teaches tenses through relatable life progression

import type { NarrativeParagraph } from '../types';

export interface LifeStage {
  age: string;
  ageNative: string;
  tense: 'past' | 'present' | 'future';
  pronoun: string;
  timeMarkers: string[];
}

export const lifeStages: Record<string, LifeStage> = {
  child: {
    age: 'Child (7 years old)',
    ageNative: 'Bambino (7 anni)',
    tense: 'past',
    pronoun: 'io (young)',
    timeMarkers: ['quando avevo 7 anni', 'da piccolo', 'una volta', 'ieri', 'la settimana scorsa'],
  },
  adult: {
    age: 'Adult (35 years old)',
    ageNative: 'Adulto (35 anni)',
    tense: 'present',
    pronoun: 'io (now)',
    timeMarkers: ['oggi', 'adesso', 'ogni giorno', 'normalmente', 'di solito'],
  },
  elder: {
    age: 'Elder (70 years old)',
    ageNative: 'Anziano (70 anni)',
    tense: 'future',
    pronoun: 'io (wise)',
    timeMarkers: ['domani', 'l\'anno prossimo', 'tra poco', 'presto', 'un giorno'],
  },
};

// Marco's character profile for narrative consistency
export const marcoProfile = {
  name: 'Marco',
  nameNative: 'Marco',
  childhood: {
    personality: 'Curious, shy, loves exploring',
    family: 'Lives with parents and nonna',
    dreams: 'Wants to be a chef/pilot/artist',
  },
  adulthood: {
    personality: 'Busy, practical, slightly stressed',
    family: 'Married, two children, aging parents',
    job: 'Office worker/teacher/doctor',
    struggles: 'Finding balance, too much work',
  },
  elderhood: {
    personality: 'Wise, relaxed, nostalgic',
    family: 'Grandchildren, retired, travels',
    wisdom: 'Life lessons, patience, appreciation',
    joys: 'Simple pleasures, family time',
  },
};

// Room-specific life narratives
export const lifeNarratives: Record<string, NarrativeParagraph[]> = {
  'entrance-hall': [
    // CHILDHOOD - Coming home from school
    {
      id: 'entrance-child-1',
      order: 1,
      tense: 'past',
      native: "**Quando avevo 7 anni**, tornavo a casa dalla **scuola** e mia **mamma** mi aspettava all'**ingresso**. Avevo fame! 'Ciao tesoro,' diceva lei. 'Com'era la scuola?'",
      english: "When I was 7, I would come home from school and my mom would wait for me at the entrance. I was hungry! 'Hi honey,' she said. 'How was school?'",
      highlightedWords: ['scuola', 'mamma', 'ingresso'],
      grammarFocus: 'Imperfetto ( habitual past )',
      zonePath: ['door', 'coat-rack'],
    },
    {
      id: 'entrance-child-2',
      order: 2,
      tense: 'past',
      native: "Mi toglievo il **cappotto** e la **sciarpa**, poi guardavo nello **specchio**. Ero piccolo e timido. 'Sei bello,' mi diceva mamma. Ma io non ci credevo.",
      english: "I took off my coat and scarf, then looked in the mirror. I was small and shy. 'You're handsome,' mom told me. But I didn't believe it.",
      highlightedWords: ['cappotto', 'sciarpa', 'specchio'],
      grammarFocus: 'Reflexive verbs (togliersi) + imperfetto',
      zonePath: ['coat-rack', 'mirror'],
    },
    {
      id: 'entrance-child-3',
      tense: 'past',
      order: 3,
      native: "La **nonna** arrivava alle cinque. Suonava il **campanello** e io correvo ad aprire. 'Ciao nonnina!' urlavo felice. Lei mi dava sempre una **caramella**.",
      english: "Grandma arrived at five. She rang the doorbell and I ran to open. 'Hi grandma!' I shouted happily. She always gave me a candy.",
      highlightedWords: ['nonna', 'campanello', 'caramella'],
      grammarFocus: 'Passato prossimo vs imperfetto contrast',
      zonePath: ['door', 'family-portrait'],
    },
    // ADULTHOOD - Coming home from work
    {
      id: 'entrance-adult-1',
      order: 1,
      tense: 'present',
      native: "**Oggi** torno a casa dal **lavoro** alle sette. Sono stanco. Apro la **porta** con la **chiave** e... silenzio. Per cinque minuti, finalmente.",
      english: "Today I come home from work at seven. I'm tired. I open the door with the key and... silence. For five minutes, finally.",
      highlightedWords: ['lavoro', 'porta', 'chiave'],
      grammarFocus: 'Presente indicativo (routine)',
      zonePath: ['door'],
    },
    {
      id: 'entrance-adult-2',
      order: 2,
      tense: 'present',
      native: "Poi i **bambini** urlano: 'Papà!' Mia **moglie** viene dall'**ingresso'** sorridendo. 'Ciao amore,' dice. 'Come è andata la giornata?'",
      english: "Then the children shout: 'Dad!' My wife comes from the entrance smiling. 'Hi love,' she says. 'How was your day?'",
      highlightedWords: ['bambini', 'moglie', 'ingresso'],
      grammarFocus: 'Come + essere/andare (asking about days)',
      zonePath: ['family-portrait'],
    },
    {
      id: 'entrance-adult-3',
      order: 3,
      tense: 'present',
      native: "Mi guardo nello **specchio**. Sono un **uomo** ora, non più un **ragazzo**. Capelli grigi, occhi stanchi. Ma sorrido. La **famiglia** è tutto.",
      english: "I look in the mirror. I'm a man now, no longer a boy. Gray hair, tired eyes. But I smile. Family is everything.",
      highlightedWords: ['specchio', 'uomo', 'ragazzo', 'famiglia'],
      grammarFocus: 'Comparisons (non più) + essere',
      zonePath: ['mirror', 'family-portrait'],
    },
    // ELDERHOOD - Grandpa's visits
    {
      id: 'entrance-elder-1',
      order: 1,
      tense: 'future',
      native: "**Domani** i miei **nipoti** verranno a trovarmi. Suoneranno il **campanello** e io aprirò piano, con il **bastone**. 'Ciao nonno!' diranno.",
      english: "Tomorrow my grandchildren will come to visit me. They'll ring the doorbell and I'll open slowly, with my cane. 'Hi grandpa!' they'll say.",
      highlightedWords: ['nipoti', 'campanello', 'bastone'],
      grammarFocus: 'Futuro semplice (near future plans)',
      zonePath: ['door'],
    },
    {
      id: 'entrance-elder-2',
      order: 2,
      tense: 'future',
      native: "Guarderò la mia **foto** di famiglia nell'**ingresso**. Io, i miei figli, i miei nipoti. Tante **generazioni**. Sarò felice e anche un po' triste.",
      english: "I'll look at my family photo in the entrance. Me, my children, my grandchildren. Many generations. I'll be happy and also a bit sad.",
      highlightedWords: ['foto', 'ingresso', 'generazioni'],
      grammarFocus: 'Futuro with essere (stato emotivo)',
      zonePath: ['family-portrait'],
    },
    {
      id: 'entrance-elder-3',
      order: 3,
      tense: 'future',
      native: "'Nonno, raccontaci una **storia**!' diranno. E io racconterò di quando ero **bambino**, come loro. Di questa stessa **casa**, di questo stesso **amore**.",
      english: "'Grandpa, tell us a story!' they'll say. And I'll tell them about when I was a child, like them. About this same house, this same love.",
      highlightedWords: ['storia', 'bambino', 'casa', 'amore'],
      grammarFocus: 'Futuro + relative clauses (di quando)',
      zonePath: ['mirror', 'family-portrait'],
    },
  ],

  'kitchen': [
    // CHILDHOOD - Cooking with nonna
    {
      id: 'kitchen-child-1',
      order: 1,
      tense: 'past',
      native: "**Da piccolo**, la **domenica** cucinavo con la **nonna** in **cucina**. Lei faceva la **pasta** e io guardavo. 'Vuoi provare?' chiedeva.",
      english: "As a child, on Sundays I cooked with grandma in the kitchen. She made pasta and I watched. 'Do you want to try?' she asked.",
      highlightedWords: ['domenica', 'nonna', 'cucina', 'pasta'],
      grammarFocus: 'Imperfetto (habitual actions)',
      zonePath: ['table'],
    },
    {
      id: 'kitchen-child-2',
      order: 2,
      tense: 'past',
      native: "Prendevo il **cucchiaio** di legno e mescolavo la **salsa**. La **pentola** era grande, io piccolo. La nonna rideva: 'Bravo, Marco!'",
      english: "I took the wooden spoon and stirred the sauce. The pot was big, I was small. Grandma laughed: 'Good job, Marco!'",
      highlightedWords: ['cucchiaio', 'pentola'],
      grammarFocus: 'Imperfetto description vs action',
      zonePath: ['stove'],
    },
    {
      id: 'kitchen-child-3',
      order: 3,
      tense: 'past',
      native: "A **pranzo** mangiavo tre **piatti** di pasta. Avevo sempre fame! Poi la nonna mi dava un **bacio**: 'Sei il mio tesoro.'",
      english: "At lunch I ate three plates of pasta. I was always hungry! Then grandma gave me a kiss: 'You're my treasure.'",
      highlightedWords: ['pranzo', 'piatti', 'bacio'],
      grammarFocus: 'Avere fame + direct objects',
      zonePath: ['table'],
    },
    // ADULTHOOD - Morning chaos
    {
      id: 'kitchen-adult-1',
      order: 1,
      tense: 'present',
      native: "**Ogni mattina** è un caos in **cucina**. I **bambini** devono andare a **scuola**, io al **lavoro**. Non c'è mai abbastanza **tempo**!",
      english: "Every morning is chaos in the kitchen. The kids have to go to school, I to work. There's never enough time!",
      highlightedWords: ['cucina', 'bambini', 'scuola', 'lavoro', 'tempo'],
      grammarFocus: 'Dovere (obligation) + c\'è/ci sono',
      zonePath: ['table'],
    },
    {
      id: 'kitchen-adult-2',
      order: 2,
      tense: 'present',
      native: "Apro il **frigo**: **latte**, **uova**, **pane**. Faccio la **colazione** in fretta. 'Papà, il mio **succo**!' urla Giulia.",
      english: "I open the fridge: milk, eggs, bread. I make breakfast quickly. 'Dad, my juice!' Giulia shouts.",
      highlightedWords: ['frigo', 'latte', 'uova', 'pane', 'colazione', 'succo'],
      grammarFocus: 'Fare colazione + direct objects',
      zonePath: ['fridge'],
    },
    {
      id: 'kitchen-adult-3',
      order: 3,
      tense: 'present',
      native: "Mia **moglie** beve il suo **caffè**. Ci guardiamo stanchi ma felici. 'Ce la facciamo?' chiedo. Lei sorride: 'Sempre.'",
      english: "My wife drinks her coffee. We look at each other tired but happy. 'Can we do it?' I ask. She smiles: 'Always.'",
      highlightedWords: ['moglie', 'caffe'],
      grammarFocus: 'Ce la facciamo (making it through)',
      zonePath: ['table'],
    },
    // ELDERHOOD - Sunday tradition
    {
      id: 'kitchen-elder-1',
      order: 1,
      tense: 'future',
      native: "**Domenica** i **nipoti** verranno a pranzo. Preparerò la **pasta** come faceva la **nonna**. Userò la stessa **pentola**, lo stesso **amore**.",
      english: "On Sunday the grandchildren will come for lunch. I'll make pasta like grandma did. I'll use the same pot, the same love.",
      highlightedWords: ['domenica', 'nipoti', 'pasta', 'nonna', 'pentola', 'amore'],
      grammarFocus: 'Futuro (plans) + come (comparison)',
      zonePath: ['stove', 'table'],
    },
    {
      id: 'kitchen-elder-2',
      order: 2,
      tense: 'future',
      native: "Little Marco Jr. prenderà il **cucchiaio**: 'Nonno, posso mescolare?' E io dirò sì, come disse la nonna. Poi mangeremo tutti insieme.",
      english: "Little Marco Jr. will take the spoon: 'Grandpa, can I stir?' And I'll say yes, like grandma did. Then we'll all eat together.",
      highlightedWords: ['cucchiaio', 'nonno'],
      grammarFocus: 'Futuro + potere (permission)',
      zonePath: ['stove'],
    },
    {
      id: 'kitchen-elder-3',
      order: 3,
      tense: 'future',
      native: "Dirò ai **bambini**: 'Questa **cucina** ha visto quattro **generazioni**. E voi, un giorno, insegnerete ai vostri **figli**.'",
      english: "I'll tell the children: 'This kitchen has seen four generations. And you, one day, will teach your own children.'",
      highlightedWords: ['cucina', 'generazioni', 'figli'],
      grammarFocus: 'Futuro + relative clauses',
      zonePath: ['table'],
    },
  ],

  'bedroom': [
    // CHILDHOOD - Safe space
    {
      id: 'bedroom-child-1',
      order: 1,
      tense: 'past',
      native: "**Di notte**, nella mia **camera**, avevo paura del **buio**. Chiamavo: 'Mamma!' Lei veniva e accendeva la **lampada**.",
      english: "At night, in my room, I was afraid of the dark. I called: 'Mom!' She came and turned on the lamp.",
      highlightedWords: ['notte', 'camera', 'buio', 'lampada'],
      grammarFocus: 'Avere paura (to be afraid)',
      zonePath: ['bed'],
    },
    {
      id: 'bedroom-child-2',
      order: 2,
      tense: 'past',
      native: "Sotto le **coperte** ero al sicuro. Avevo un **orsacchiotto** e tanti **sogni**. Volevo essere grande, ma anche rimanere piccolo.",
      english: "Under the covers I was safe. I had a teddy bear and many dreams. I wanted to be big, but also stay small.",
      highlightedWords: ['coperte', 'sogni'],
      grammarFocus: 'Voler + infinitive',
      zonePath: ['bed'],
    },
    {
      id: 'bedroom-child-3',
      order: 3,
      tense: 'past',
      native: "La **mamma** mi leggeva una **storia** ogni sera. Poi un **bacio** e 'Sogni d'oro.' Chiudevo gli occhi felice.",
      english: "Mom read me a story every evening. Then a kiss and 'Sweet dreams.' I closed my eyes happy.",
      highlightedWords: ['mamma', 'storia', 'bacio'],
      grammarFocus: 'Chiudere (reflexive) + emotions',
      zonePath: ['bed'],
    },
    // ADULTHOOD - Exhaustion and intimacy
    {
      id: 'bedroom-adult-1',
      order: 1,
      tense: 'present',
      native: "**La sera** crollo sul **letto**. Sono **stanco**, morto. Mia **moglie** è già lì, legge un **libro**. 'Tough day?' chiede.",
      english: "In the evening I collapse on the bed. I'm tired, dead. My wife is already there, reading a book. 'Tough day?' she asks.",
      highlightedWords: ['sera', 'letto', 'stanco', 'moglie', 'libro'],
      grammarFocus: 'Stanco morto (colloquial)',
      zonePath: ['bed'],
    },
    {
      id: 'bedroom-adult-2',
      order: 2,
      tense: 'present',
      native: "Parliamo poco, ma ci capiamo. Lei mette via il **libro**, spegne la **lampada**. Nel **buio**, ci teniamo per **mano**.",
      english: "We talk little, but we understand each other. She puts away the book, turns off the lamp. In the dark, we hold hands.",
      highlightedWords: ['libro', 'lampada', 'buio', 'mano'],
      grammarFocus: 'Capirsi (reciprocal)',
      zonePath: ['bed'],
    },
    {
      id: 'bedroom-adult-3',
      order: 3,
      tense: 'present',
      native: "Prima di dormire, penso ai **bambini**, al **lavoro**, alla **vita**. Troppi pensieri. Ma poi respiro. Domani è un altro giorno.",
      english: "Before sleeping, I think about the children, work, life. Too many thoughts. But then I breathe. Tomorrow is another day.",
      highlightedWords: ['bambini', 'lavoro', 'vita'],
      grammarFocus: 'Pensare a (thinking about)',
      zonePath: ['bed'],
    },
    // ELDERHOOD - Reflection and peace
    {
      id: 'bedroom-elder-1',
      order: 1,
      tense: 'future',
      native: "**Stanotte** dormirò nel mio **letto** vecchio. Morbido, conosciuto. Guarderò le **foto** dei **nipoti** sul comodino.",
      english: "Tonight I'll sleep in my old bed. Soft, familiar. I'll look at photos of my grandchildren on the nightstand.",
      highlightedWords: ['notte', 'letto', 'foto', 'nipoti'],
      grammarFocus: 'Futuro (evening plans)',
      zonePath: ['bed'],
    },
    {
      id: 'bedroom-elder-2',
      order: 2,
      tense: 'future',
      native: "Mia **moglie** sarà accanto a me. Dopo tanti **anni**, ancora insieme. Diremo: 'È stata una bella **vita**.'",
      english: "My wife will be beside me. After so many years, still together. We'll say: 'It was a good life.'",
      highlightedWords: ['moglie', 'anni', 'vita'],
      grammarFocus: 'Futuro + passato prossimo (è stata)',
      zonePath: ['bed'],
    },
    {
      id: 'bedroom-elder-3',
      order: 3,
      tense: 'future',
      native: "Chiuderò gli **occhi** e sorriderò. Penserò: 'Ho fatto del mio meglio.' E poi, **sogni** d'oro, come da **bambino**.",
      english: "I'll close my eyes and smile. I'll think: 'I did my best.' And then, golden dreams, like as a child.",
      highlightedWords: ['occhi', 'sogni', 'bambino'],
      grammarFocus: 'Futuro + reflection',
      zonePath: ['bed'],
    },
  ],
};

// Additional room narratives would follow the same pattern...
// This creates a cohesive life story that teaches:
// - Past (imperfetto): Childhood habits, descriptions, emotions
// - Present: Adult routines, obligations, relationships
// - Future: Elder wisdom, reflection, legacy
