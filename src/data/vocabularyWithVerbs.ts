// Vocabulary with verbs, tenses, and CEFR levels
// A1 = Beginner, A2 = Elementary

export interface TenseDialogue {
  past: string;
  pastEn: string;
  present: string;
  presentEn: string;
  future: string;
  futureEn: string;
}

export interface ObjectData {
  id: string;
  french: string;
  english: string;
  gender: 'masculine' | 'feminine';
  article: string;
  cefrLevel: 'A1' | 'A2';
  position: [number, number, number];
  scale: [number, number, number];
  color: string;
  type: string;
  verbs: string[]; // Common verbs used with this object
  dialogue: TenseDialogue;
  relatedWords: string[]; // Related vocabulary
}

export const entranceHallVocabulary: ObjectData[] = [
  {
    id: 'porte',
    french: 'porte',
    english: 'door',
    gender: 'feminine',
    article: 'la',
    cefrLevel: 'A1',
    position: [0, 2.5, -8],
    scale: [3, 5, 0.3],
    color: '#8B4513',
    type: 'door',
    verbs: ['ouvrir', 'fermer', 'frapper', 'passer', 'verrouiller'],
    dialogue: {
      past: "J'ai ouvert la porte hier soir.",
      pastEn: "I opened the door last night.",
      present: "Je ferme la porte maintenant.",
      presentEn: "I am closing the door now.",
      future: "Je vais verrouiller la porte demain.",
      futureEn: "I am going to lock the door tomorrow."
    },
    relatedWords: ['poignée', 'serrure', 'clé', 'entrée', 'seuil']
  },
  {
    id: 'lustre',
    french: 'lustre',
    english: 'chandelier',
    gender: 'masculine',
    article: 'le',
    cefrLevel: 'A1',
    position: [0, 5.5, 0],
    scale: [1.2, 1.2, 1.2],
    color: '#FFD700',
    type: 'chandelier',
    verbs: ['allumer', 'éteindre', 'briller', 'éclairer', 'regarder'],
    dialogue: {
      past: "Le lustre a brillé toute la soirée.",
      pastEn: "The chandelier shone all evening.",
      present: "Le lustre éclaire la pièce.",
      presentEn: "The chandelier lights up the room.",
      future: "Je vais allumer le lustre ce soir.",
      futureEn: "I am going to turn on the chandelier tonight."
    },
    relatedWords: ['lumière', 'ampoule', 'crystal', 'plafond', 'électricité']
  },
  {
    id: 'miroir',
    french: 'miroir',
    english: 'mirror',
    gender: 'masculine',
    article: 'le',
    cefrLevel: 'A1',
    position: [5, 2.5, -7],
    scale: [2, 3, 0.2],
    color: '#C0C0C0',
    type: 'mirror',
    verbs: ['regarder', 'se regarder', 'nettoyer', 'admirer', 'refléter'],
    dialogue: {
      past: "Je me suis regardé dans le miroir ce matin.",
      pastEn: "I looked at myself in the mirror this morning.",
      present: "Je regarde mon reflet dans le miroir.",
      presentEn: "I am looking at my reflection in the mirror.",
      future: "Je vais nettoyer le miroir demain.",
      futureEn: "I am going to clean the mirror tomorrow."
    },
    relatedWords: ['reflet', 'image', 'glace', 'cadre', 'reflet']
  },
  {
    id: 'escalier',
    french: 'escalier',
    english: 'staircase',
    gender: 'masculine',
    article: "l'",
    cefrLevel: 'A1',
    position: [-5, 1, -5],
    scale: [3, 2, 4],
    color: '#8B7355',
    type: 'stairs',
    verbs: ['monter', 'descendre', 'grimper', 'tomber', 'mesurer'],
    dialogue: {
      past: "J'ai monté l'escalier rapidement.",
      pastEn: "I went up the stairs quickly.",
      present: "Je descends l'escalier maintenant.",
      presentEn: "I am going down the stairs now.",
      future: "Je vais grimper les marches demain.",
      futureEn: "I am going to climb the steps tomorrow."
    },
    relatedWords: ['marche', 'rampe', 'étage', 'montée', 'descente']
  },
  {
    id: 'palmier',
    french: 'palmier',
    english: 'palm tree',
    gender: 'masculine',
    article: 'le',
    cefrLevel: 'A2',
    position: [6, 2, 3],
    scale: [1, 4, 1],
    color: '#228B22',
    type: 'plant',
    verbs: ['arroser', 'planter', 'admirer', 'grandir', 'décorer'],
    dialogue: {
      past: "J'ai arrosé le palmier hier.",
      pastEn: "I watered the palm tree yesterday.",
      present: "Le palmier grandit dans le salon.",
      presentEn: "The palm tree is growing in the living room.",
      future: "Je vais planter un autre palmier.",
      futureEn: "I am going to plant another palm tree."
    },
    relatedWords: ['plante', 'feuille', 'pot', 'terre', 'jardin']
  },
  {
    id: 'fenetre',
    french: 'fenêtre',
    english: 'window',
    gender: 'feminine',
    article: 'la',
    cefrLevel: 'A1',
    position: [-6, 3, -7],
    scale: [2, 3, 0.2],
    color: '#87CEEB',
    type: 'window',
    verbs: ['ouvrir', 'fermer', 'regarder', 'nettoyer', 'casser'],
    dialogue: {
      past: "J'ai ouvert la fenêtre ce matin.",
      pastEn: "I opened the window this morning.",
      present: "Je regarde par la fenêtre.",
      presentEn: "I am looking through the window.",
      future: "Je vais fermer la fenêtre ce soir.",
      futureEn: "I am going to close the window tonight."
    },
    relatedWords: ['vitre', 'rideau', 'vue', 'soleil', 'chambre']
  },
  {
    id: 'lumiere',
    french: 'lumière',
    english: 'light',
    gender: 'feminine',
    article: 'la',
    cefrLevel: 'A1',
    position: [4, 4, 2],
    scale: [0.4, 0.4, 0.4],
    color: '#FFFFE0',
    type: 'light',
    verbs: ['allumer', 'éteindre', 'briller', 'éclairer', 'clignoter'],
    dialogue: {
      past: "La lumière a brillé toute la nuit.",
      pastEn: "The light shone all night.",
      present: "La lumière éclaire la pièce.",
      presentEn: "The light illuminates the room.",
      future: "Je vais éteindre la lumière.",
      futureEn: "I am going to turn off the light."
    },
    relatedWords: ['ampoule', 'interrupteur', 'lampe', 'électricité', 'obscurité']
  }
];

// Complete A1-A2 vocabulary index
export const frenchVocabularyIndex = {
  A1: {
    total: 500,
    categories: {
      'La maison': ['porte', 'fenêtre', 'mur', 'plafond', 'sol', 'toit', 'chambre', 'cuisine', 'salon', 'salle de bain'],
      'Les meubles': ['table', 'chaise', 'lit', 'armoire', 'canapé', 'étagère', 'miroir', 'tapis'],
      'La famille': ['mère', 'père', 'sœur', 'frère', 'fille', 'garçon', 'bébé', 'grand-mère', 'grand-père'],
      'La nourriture': ['pain', 'eau', 'vin', 'café', 'thé', 'pomme', 'fromage', 'viande', 'poisson', 'légume'],
      'Les couleurs': ['rouge', 'bleu', 'vert', 'jaune', 'noir', 'blanc', 'gris', 'rose', 'orange', 'violet'],
      'Les nombres': ['un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix'],
      'Les jours': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'],
      'Les mois': ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
    }
  },
  A2: {
    total: 1000,
    categories: {
      'Les activités': ['cuisiner', 'nettoyer', 'travailler', 'étudier', 'dormir', 'manger', 'boire', 'lire', 'écrire'],
      'Les sentiments': ['heureux', 'triste', 'fatigué', 'excité', 'nerveux', 'calme', 'énervé', 'surpris'],
      'Le temps': ['soleil', 'pluie', 'neige', 'vent', 'nuage', 'orage', 'brouillard', 'arc-en-ciel'],
      'Les transports': ['voiture', 'bus', 'train', 'métro', 'vélo', 'avion', 'bateau', 'taxi']
    }
  }
};

// Progress tracking
export interface UserProgress {
  masteredWords: string[];
  currentLevel: 'A1' | 'A2' | 'B1';
  roomProgress: Record<string, number>; // percentage per room
  totalWordsLearned: number;
  streakDays: number;
  lastStudyDate: string;
}

export const getDefaultProgress = (): UserProgress => ({
  masteredWords: [],
  currentLevel: 'A1',
  roomProgress: {},
  totalWordsLearned: 0,
  streakDays: 0,
  lastStudyDate: new Date().toISOString()
});

export const saveProgress = (progress: UserProgress) => {
  localStorage.setItem('frenchMemoryPalace_progress', JSON.stringify(progress));
};

export const loadProgress = (): UserProgress => {
  const saved = localStorage.getItem('frenchMemoryPalace_progress');
  return saved ? JSON.parse(saved) : getDefaultProgress();
};

export const markWordAsMastered = (wordId: string) => {
  const progress = loadProgress();
  if (!progress.masteredWords.includes(wordId)) {
    progress.masteredWords.push(wordId);
    progress.totalWordsLearned = progress.masteredWords.length;
    saveProgress(progress);
  }
};

export const getMasteryPercentage = (roomVocab: ObjectData[]): number => {
  const progress = loadProgress();
  const masteredInRoom = roomVocab.filter(v => progress.masteredWords.includes(v.id)).length;
  return Math.round((masteredInRoom / roomVocab.length) * 100);
};
