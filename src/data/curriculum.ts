export interface DialogueLine {
  speaker: string;
  french: string;
  english: string;
  pronunciation?: string;
}

export interface Dialogue {
  id: string;
  title: string;
  context: string;
  lines: DialogueLine[];
}

export interface GrammarRule {
  id: string;
  title: string;
  rule: string;
  explanation: string;
  examples: { french: string; english: string }[];
  exceptions?: string[];
  color: string;
}

export interface Lesson {
  id: string;
  lessonNumber: number;
  title: string;
  learningObjectives: string[];
  keyVocabulary: string[];
  grammarFocus: string[];
}

export interface Unit {
  id: string;
  unitNumber: number;
  year: number;
  title: string;
  description: string;
  lessons: Lesson[];
  dialogues: Dialogue[];
  grammarRules: GrammarRule[];
}

export const curriculum: Unit[] = [
  {
    id: 'y7u1',
    unitNumber: 1,
    year: 7,
    title: 'Describing Things and People',
    description: 'Learn to describe people and things using être and avoir, with adjectives and basic greetings.',
    lessons: [
      {
        id: 'y7u1l1',
        lessonNumber: 1,
        title: 'Describing a thing or a person (Part 1)',
        learningObjectives: ['Use être with adjectives', 'Describe masculine nouns'],
        keyVocabulary: ['grand', 'petit', 'beau', 'je suis', 'tu es', 'il est'],
        grammarFocus: ['être present tense (singular)', 'Adjective position'],
      },
      {
        id: 'y7u1l2',
        lessonNumber: 2,
        title: 'Describing a thing or a person (Part 2)',
        learningObjectives: ['Use feminine forms of adjectives', 'Describe feminine nouns'],
        keyVocabulary: ['grande', 'petite', 'belle', 'elle est'],
        grammarFocus: ['Feminine adjective formation (-e)', 'Gender agreement'],
      },
      {
        id: 'y7u1l3',
        lessonNumber: 3,
        title: 'Describing a thing or a person (Part 3)',
        learningObjectives: ['Practice pronunciation rules', 'Use être in descriptions'],
        keyVocabulary: ['intelligent', 'sympa', 'fort', 'faible'],
        grammarFocus: ['Silent consonants', 'Adjective placement after noun'],
      },
      {
        id: 'y7u1l4',
        lessonNumber: 4,
        title: 'Describing a thing or a person (Part 4)',
        learningObjectives: ['Ask questions using intonation', 'Change adjectives for gender'],
        keyVocabulary: ['Comment?', 'Quel?', 'C\'est', 'Ce sont'],
        grammarFocus: ['Question intonation', 'Demonstrative pronouns'],
      },
      {
        id: 'y7u1l5',
        lessonNumber: 5,
        title: 'Saying what people have (Part 1)',
        learningObjectives: ['Use avoir to express possession', 'Conjugate avoir (singular)'],
        keyVocabulary: ['j\'ai', 'tu as', 'il a', 'elle a', 'un livre', 'un stylo'],
        grammarFocus: ['avoir present tense (singular)', 'Indefinite articles (un/une)'],
      },
      {
        id: 'y7u1l6',
        lessonNumber: 6,
        title: 'Saying what people have (Part 2)',
        learningObjectives: ['Understand gender of nouns', 'Use definite articles'],
        keyVocabulary: ['le', 'la', 'l\'', 'les', 'un', 'une', 'des'],
        grammarFocus: ['Definite vs indefinite articles', 'Gender identification'],
      },
      {
        id: 'y7u1l7',
        lessonNumber: 7,
        title: 'Describing what people have (Part 1)',
        learningObjectives: ['Use adjectives with avoir', 'Learn the French alphabet'],
        keyVocabulary: ['un grand livre', 'une belle maison', 'A, B, C...'],
        grammarFocus: ['Adjectives with nouns', 'Spelling in French'],
      },
      {
        id: 'y7u1l8',
        lessonNumber: 8,
        title: 'Describing what people have (Part 2)',
        learningObjectives: ['Post-nominal adjectives', 'Form questions with intonation'],
        keyVocabulary: ['un livre intéressant', 'une fille sympa'],
        grammarFocus: ['Adjectives after nouns', 'Question formation'],
      },
      {
        id: 'y7u1l9',
        lessonNumber: 9,
        title: 'Distinguishing between having and being (Part 1)',
        learningObjectives: ['Choose between être and avoir', 'Use feminine noun forms'],
        keyVocabulary: ['je suis vs j\'ai', 'il est vs il a'],
        grammarFocus: ['être vs avoir distinction', 'Context clues'],
      },
      {
        id: 'y7u1l10',
        lessonNumber: 10,
        title: 'Distinguishing between having and being (Part 2)',
        learningObjectives: ['Use subject pronoun "it"', 'Practice être/avoir in context'],
        keyVocabulary: ['c\'est', 'il est', 'elle est', 'ce'],
        grammarFocus: ['Impersonal c\'est', 'Referring to things'],
      },
      {
        id: 'y7u1l11',
        lessonNumber: 11,
        title: 'Talking about a thing or a person (Part 1)',
        learningObjectives: ['Use definite articles le and la', 'Talk about specific items'],
        keyVocabulary: ['le garçon', 'la fille', 'le livre', 'la table'],
        grammarFocus: ['Definite articles le/la', 'Gender patterns'],
      },
      {
        id: 'y7u1l12',
        lessonNumber: 12,
        title: 'Talking about a thing or a person (Part 2)',
        learningObjectives: ['Use l\' before vowels', 'Make nouns plural with -s'],
        keyVocabulary: ['l\'ami', 'l\'amie', 'les garçons', 'les filles'],
        grammarFocus: ['Elision with l\'', 'Plural formation (-s)', 'les for all genders'],
      },
      {
        id: 'y7u1l13',
        lessonNumber: 13,
        title: 'Talking about making and doing things (Part 1)',
        learningObjectives: ['Use faire with je/il/elle', 'Use faire with le/la/les'],
        keyVocabulary: ['je fais', 'il fait', 'faire du sport', 'faire la cuisine'],
        grammarFocus: ['faire present tense (je/il/elle)', 'faire + article + activity'],
      },
      {
        id: 'y7u1l14',
        lessonNumber: 14,
        title: 'Talking about making and doing things (Part 2)',
        learningObjectives: ['Use faire with je/tu', 'Form questions with question words'],
        keyVocabulary: ['tu fais', 'Qu\'est-ce que tu fais?', 'Qu\'est-ce qu\'il fait?'],
        grammarFocus: ['faire (tu form)', 'Questions with que/qui'],
      },
    ],
    dialogues: [
      {
        id: 'd1',
        title: 'First Meeting',
        context: 'Two students meet for the first time at school.',
        lines: [
          { speaker: 'Marie', french: 'Bonjour! Je suis Marie. Et toi?', english: 'Hello! I am Marie. And you?', pronunciation: 'bon-ZHOOR zhuh swee ma-REE ay twa' },
          { speaker: 'Luc', french: 'Salut! Je suis Luc. Je suis content de te rencontrer.', english: 'Hi! I am Luc. I am happy to meet you.', pronunciation: 'sa-LUE zhuh swee luke zhuh swee kon-TAHN duh tuh rahn-kon-TRAY' },
          { speaker: 'Marie', french: 'Tu es français?', english: 'Are you French?', pronunciation: 'tew ay frahn-SAY' },
          { speaker: 'Luc', french: 'Oui, je suis français. Et toi?', english: 'Yes, I am French. And you?', pronunciation: 'wee zhuh swee frahn-SAY ay twa' },
          { speaker: 'Marie', french: 'Je suis anglaise. J\'ai quinze ans.', english: 'I am English. I am fifteen years old.', pronunciation: 'zhuh swee ahn-GLAYZ zhay kan-zahn' },
        ],
      },
      {
        id: 'd2',
        title: 'Describing Family',
        context: 'Marie describes her family to Luc.',
        lines: [
          { speaker: 'Luc', french: 'Tu as des frères et sœurs?', english: 'Do you have brothers and sisters?', pronunciation: 'tew ah day frair ay sur' },
          { speaker: 'Marie', french: 'Oui, j\'ai un frère et une sœur.', english: 'Yes, I have a brother and a sister.', pronunciation: 'wee zhay uhn frair ay oon sur' },
          { speaker: 'Luc', french: 'Ils sont grands?', english: 'Are they tall?', pronunciation: 'eel son grahn' },
          { speaker: 'Marie', french: 'Mon frère est grand, mais ma sœur est petite.', english: 'My brother is tall, but my sister is small.', pronunciation: 'mohn frair ay grahn may ma sur ay puh-TEET' },
          { speaker: 'Luc', french: 'Tes parents sont sympas?', english: 'Are your parents nice?', pronunciation: 'tay pa-RAHN son sahm-PAH' },
          { speaker: 'Marie', french: 'Oui, ils sont très sympas!', english: 'Yes, they are very nice!', pronunciation: 'wee eel son tray sahm-PAH' },
        ],
      },
    ],
    grammarRules: [
      {
        id: 'etre-present',
        title: 'Être (to be) - Present Tense',
        rule: 'je suis, tu es, il/elle/on est, nous sommes, vous êtes, ils/elles sont',
        explanation: 'Être is irregular. Use it for descriptions, identity, and states of being.',
        examples: [
          { french: 'Je suis étudiant.', english: 'I am a student.' },
          { french: 'Elle est grande.', english: 'She is tall.' },
          { french: 'Nous sommes français.', english: 'We are French.' },
        ],
        color: '#3B82F6',
      },
      {
        id: 'avoir-present',
        title: 'Avoir (to have) - Present Tense',
        rule: 'j\'ai, tu as, il/elle/on a, nous avons, vous avez, ils/elles ont',
        explanation: 'Avoir is irregular. Use it for possession, age, and many expressions.',
        examples: [
          { french: 'J\'ai un livre.', english: 'I have a book.' },
          { french: 'Il a quinze ans.', english: 'He is fifteen years old.' },
          { french: 'Nous avons une maison.', english: 'We have a house.' },
        ],
        color: '#E7A04D',
      },
      {
        id: 'adjective-agreement',
        title: 'Adjective Agreement',
        rule: 'Most adjectives add -e for feminine. Some double the final consonant.',
        explanation: 'Adjectives must agree in gender and number with the noun they describe.',
        examples: [
          { french: 'un garçon grand / une fille grande', english: 'a tall boy / a tall girl' },
          { french: 'un homme bon / une femme bonne', english: 'a good man / a good woman' },
          { french: 'des garçons grands / des filles grandes', english: 'tall boys / tall girls' },
        ],
        exceptions: ['Some adjectives come BEFORE the noun: beau, grand, petit, bon, mauvais, jeune, vieux, joli, gros'],
        color: '#EC4899',
      },
      {
        id: 'articles',
        title: 'Definite and Indefinite Articles',
        rule: 'le/la/l\'/les = the (definite) | un/une/des = a/some (indefinite)',
        explanation: 'Use definite articles for specific things, indefinite for general or new things.',
        examples: [
          { french: 'le garçon, la fille, l\'ami, les enfants', english: 'the boy, the girl, the friend, the children' },
          { french: 'un garçon, une fille, des enfants', english: 'a boy, a girl, (some) children' },
        ],
        color: '#10B981',
      },
      {
        id: 'faire-present',
        title: 'Faire (to do/make) - Present Tense',
        rule: 'je fais, tu fais, il/elle/on fait, nous faisons, vous faites, ils/elles font',
        explanation: 'Faire is used for activities, sports, weather, and many expressions.',
        examples: [
          { french: 'Je fais du sport.', english: 'I do sports.' },
          { french: 'Il fait beau.', english: 'The weather is nice.' },
          { french: 'Nous faisons la cuisine.', english: 'We are cooking.' },
        ],
        color: '#8B5CF6',
      },
    ],
  },
  {
    id: 'y7u2',
    unitNumber: 2,
    year: 7,
    title: 'Saying What People Do',
    description: 'Learn regular -ER verbs and expand your ability to describe activities and hobbies.',
    lessons: [
      {
        id: 'y7u2l1',
        lessonNumber: 1,
        title: 'Extended reading: Sept Couleurs Magiques (Part 1)',
        learningObjectives: ['Analyze the text', 'Practice colors and emotions'],
        keyVocabulary: ['rouge', 'bleu', 'vert', 'jaune', 'triste', 'content'],
        grammarFocus: ['Colors as adjectives', 'Emotional states'],
      },
      {
        id: 'y7u2l2',
        lessonNumber: 2,
        title: 'Extended reading: Sept Couleurs Magiques (Part 2)',
        learningObjectives: ['Continue text analysis', 'Practice colors'],
        keyVocabulary: ['orange', 'violet', 'noir', 'blanc'],
        grammarFocus: ['Color agreement', 'Descriptive language'],
      },
      {
        id: 'y7u2l3',
        lessonNumber: 3,
        title: 'Other uses of Faire (Part 1)',
        learningObjectives: ['Use faire with non-literal meanings', 'Learn faire expressions'],
        keyVocabulary: ['faire attention', 'faire peur', 'faire plaisir'],
        grammarFocus: ['Idiomatic expressions with faire'],
      },
      {
        id: 'y7u2l4',
        lessonNumber: 4,
        title: 'Other uses of Faire (Part 2)',
        learningObjectives: ['Practice faire expressions', 'Describe leisure activities'],
        keyVocabulary: ['faire du vélo', 'faire du shopping', 'faire du ski'],
        grammarFocus: ['faire + du/de la + activity'],
      },
      {
        id: 'y7u2l5',
        lessonNumber: 5,
        title: 'Saying what people do (Part 1)',
        learningObjectives: ['Use -ER verbs in present tense', 'Understand continuous meaning'],
        keyVocabulary: ['parler', 'manger', 'regarder', 'écouter'],
        grammarFocus: ['-ER verb pattern', 'Present tense with continuous meaning'],
      },
      {
        id: 'y7u2l6',
        lessonNumber: 6,
        title: 'Saying what people do (Part 2)',
        learningObjectives: ['Conjugate -ER verbs (je, tu, il, elle)', 'Use aimer + infinitive'],
        keyVocabulary: ['aimer', 'adorer', 'détester'],
        grammarFocus: ['-ER verb endings', 'Two-verb structure (aimer + infinitive)'],
      },
      {
        id: 'y7u2l7',
        lessonNumber: 7,
        title: 'Saying what people do (Part 3)',
        learningObjectives: ['Use preposition à with verbs', 'Distinguish à vs de'],
        keyVocabulary: ['jouer à', 'penser à', 'parler à'],
        grammarFocus: ['Verbs + à', 'Preposition choice'],
      },
      {
        id: 'y7u2l8',
        lessonNumber: 8,
        title: 'Saying what people do (Part 4)',
        learningObjectives: ['Master -ER verb conjugation', 'Use all singular forms'],
        keyVocabulary: ['travailler', 'étudier', 'jouer'],
        grammarFocus: ['Complete -ER pattern (je, tu, il, elle)'],
      },
    ],
    dialogues: [
      {
        id: 'd3',
        title: 'Talking About Hobbies',
        context: 'Luc and Marie discuss what they like to do.',
        lines: [
          { speaker: 'Marie', french: 'Qu\'est-ce que tu aimes faire?', english: 'What do you like to do?', pronunciation: 'kes-kuh tew em fair' },
          { speaker: 'Luc', french: 'J\'aime jouer au football et écouter de la musique.', english: 'I like to play football and listen to music.', pronunciation: 'zhem zhoo-ay oh foot-bol ay ay-koo-tay duh la mew-zeek' },
          { speaker: 'Marie', french: 'Tu regardes la télé?', english: 'Do you watch TV?', pronunciation: 'tew ruh-gar-d la tay-lay' },
          { speaker: 'Luc', french: 'Oui, je regarde des films le weekend.', english: 'Yes, I watch films on the weekend.', pronunciation: 'wee zhuh ruh-gar-day day feelm luh week-END' },
          { speaker: 'Marie', french: 'Moi, je préfère lire des livres.', english: 'Me, I prefer to read books.', pronunciation: 'mwa zhuh pray-fair leer day leevr' },
        ],
      },
    ],
    grammarRules: [
      {
        id: 'er-verbs',
        title: 'Regular -ER Verbs',
        rule: 'Remove -ER, then add: -e, -es, -e, -ons, -ez, -ent',
        explanation: 'This pattern applies to about 90% of French verbs.',
        examples: [
          { french: 'parler → je parle, tu parles, il parle', english: 'to speak → I speak, you speak, he speaks' },
          { french: 'manger → nous mangeons, vous mangez, ils mangent', english: 'to eat → we eat, you eat, they eat' },
          { french: 'regarder → je regarde la télé', english: 'to watch → I watch TV' },
        ],
        exceptions: ['Some -ER verbs have spelling changes: manger (nous mangeons), commencer (je commence)'],
        color: '#10B981',
      },
      {
        id: 'aimer-infinitive',
        title: 'Aimer + Infinitive',
        rule: 'Use aimer/adorer/détester + verb in infinitive form',
        explanation: 'To express likes and dislikes followed by an action.',
        examples: [
          { french: 'J\'aime manger.', english: 'I like to eat.' },
          { french: 'Il adore jouer au tennis.', english: 'He loves to play tennis.' },
          { french: 'Nous détestons travailler.', english: 'We hate to work.' },
        ],
        color: '#EC4899',
      },
      {
        id: 'jouer-a',
        title: 'Jouer à vs Jouer de',
        rule: 'jouer à + sport/game | jouer de + instrument',
        explanation: 'Use à for sports and games, de for musical instruments.',
        examples: [
          { french: 'Je joue au football.', english: 'I play football.' },
          { french: 'Elle joue du piano.', english: 'She plays the piano.' },
          { french: 'Nous jouons aux cartes.', english: 'We play cards.' },
        ],
        color: '#8B5CF6',
      },
    ],
  },
];

export const getUnitById = (id: string): Unit | undefined => {
  return curriculum.find(unit => unit.id === id);
};

export const getAllUnits = (): Unit[] => {
  return curriculum;
};

export const getUnitsByRoom = (roomId: string): Unit[] => {
  const roomUnitMap: Record<string, string[]> = {
    'entrance-hall': ['y7u1'],
    'kitchen': ['y7u2'],
    'library': ['y7u2'],
    'bedroom': ['y7u3'],
    'garden': ['y7u4'],
    'study': ['y7u5'],
    'living-room': ['y7u6'],
    'gallery': ['y8u1'],
  };
  const unitIds = roomUnitMap[roomId] || [];
  return curriculum.filter(unit => unitIds.includes(unit.id));
};
