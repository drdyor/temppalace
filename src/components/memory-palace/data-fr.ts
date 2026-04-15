import type { SpatialLevel, SpatialZone } from "./SimpleViewer";

// Extended types for French data
interface FrenchSpatialZone extends SpatialZone {
  nameFr?: string;
}

interface FrenchSpatialLevel extends SpatialLevel {
  nameFr?: string;
  zones: FrenchSpatialZone[];
}

// ===== FRENCH KITCHEN MEMORY PALACE - 7 Explorable Levels =====
// Based on the original French Memory Palace we built together

export const frenchKitchenLevels: FrenchSpatialLevel[] = [
  {
    id: "kitchen-main",
    name: "La Cuisine",
    nameFr: "La Cuisine",
    description: "Une cuisine française chaleureuse avec des carreaux de terre cuite",
    image: "/palace/kitchen/main.jpg",
    zones: [
      { 
        id: "fridge-zone", 
        name: "Le Réfrigérateur", 
        nameFr: "Le Réfrigérateur", 
        x: 75, y: 45, width: 15, height: 25, 
        icon: "❄️", 
        targetLevelId: "kitchen-fridge",
        description: "Conservation des aliments frais"
      },
      { 
        id: "cabinet-zone", 
        name: "Les Placards", 
        nameFr: "Les Placards", 
        x: 40, y: 25, width: 40, height: 20, 
        icon: "🗄️", 
        targetLevelId: "kitchen-cabinets",
        description: "Assiettes, tasses et ustensiles"
      },
      { 
        id: "drawer-zone", 
        name: "Les Tiroirs", 
        nameFr: "Les Tiroirs", 
        x: 40, y: 65, width: 25, height: 12, 
        icon: "🗂️", 
        targetLevelId: "kitchen-drawers",
        description: "Ustensiles et outils de cuisine"
      },
      { 
        id: "stove-zone", 
        name: "La Cuisinière", 
        nameFr: "La Cuisinière", 
        x: 60, y: 55, width: 15, height: 15, 
        icon: "🔥", 
        targetLevelId: "kitchen-cooking",
        description: "Où Maman cuisine"
      },
      { 
        id: "sink-zone", 
        name: "L'Évier", 
        nameFr: "L'Évier", 
        x: 30, y: 50, width: 12, height: 12, 
        icon: "🚰", 
        targetLevelId: "kitchen-sink",
        description: "Pour laver et nettoyer"
      },
      { 
        id: "pantry-zone", 
        name: "Le Garde-Manger", 
        nameFr: "Le Garde-Manger", 
        x: 88, y: 35, width: 10, height: 35, 
        icon: "🥫", 
        targetLevelId: "kitchen-pantry",
        description: "Provisions et stockage"
      },
    ],
    words: [
      { id: "cuisine", word: "la cuisine", en: "kitchen", g: "f", emoji: "🍳", x: 50, y: 50, mnemonic: "On cuisine dans la CUISINE" },
      { id: "table", word: "la table", en: "table", g: "f", emoji: "🪑", x: 25, y: 75, mnemonic: "On mange à la TABLE" },
      { id: "chaise", word: "la chaise", en: "chair", g: "f", emoji: "🪑", x: 20, y: 80, mnemonic: "On s'assoit sur la CHAISE" },
      { id: "fenetre", word: "la fenêtre", en: "window", g: "f", emoji: "🪟", x: 70, y: 30, mnemonic: "La lumière passe par la FENÊTRE" },
      { id: "porte", word: "la porte", en: "door", g: "f", emoji: "🚪", x: 10, y: 50, mnemonic: "On entre par la PORTE" },
      { id: "sol", word: "le sol", en: "floor", g: "m", emoji: "⬜", x: 50, y: 90, mnemonic: "On marche sur le SOL" },
    ]
  },
  {
    id: "kitchen-fridge",
    name: "Dans le Réfrigérateur",
    nameFr: "Dans le Réfrigérateur",
    description: "Des étagères fraîches avec des ingrédients français",
    image: "/palace/kitchen/fridge.jpg",
    parentId: "kitchen-main",
    zones: [
      { id: "back", name: "Retour à la Cuisine", nameFr: "Retour", x: 8, y: 8, width: 12, height: 8, icon: "⬅️", targetLevelId: "kitchen-main" },
    ],
    words: [
      { id: "frigo", word: "le réfrigérateur", en: "refrigerator", g: "m", emoji: "❄️", x: 50, y: 50, mnemonic: "Les produits frais dans le FRIGO" },
      { id: "lait", word: "le lait", en: "milk", g: "m", emoji: "🥛", x: 30, y: 35, mnemonic: "Du LAIT le matin" },
      { id: "fromage", word: "le fromage", en: "cheese", g: "m", emoji: "🧀", x: 60, y: 35, mnemonic: "Du FROMAGE sur le pain" },
      { id: "oeufs", word: "les œufs", en: "eggs", g: "m", emoji: "🥚", x: 40, y: 55, mnemonic: "Des ŒUFS pour le petit-déjeuner" },
      { id: "beurre", word: "le beurre", en: "butter", g: "m", emoji: "🧈", x: 70, y: 55, mnemonic: "Du BEURRE sur la tartine" },
      { id: "tomate", word: "la tomate", en: "tomato", g: "f", emoji: "🍅", x: 25, y: 70, mnemonic: "La TOMATE pour la salade" },
      { id: "salade", word: "la salade", en: "lettuce/salad", g: "f", emoji: "🥬", x: 50, y: 75, mnemonic: "De la SALADE fraîche" },
      { id: "viande", word: "la viande", en: "meat", g: "f", emoji: "🥩", x: 75, y: 70, mnemonic: "De la VIANDE pour le dîner" },
    ]
  },
  {
    id: "kitchen-cabinets",
    name: "Dans les Placards",
    nameFr: "Dans les Placards",
    description: "Étagères avec assiettes, tasses et ustensiles essentiels",
    image: "/palace/kitchen/cabinets.jpg",
    parentId: "kitchen-main",
    zones: [
      { id: "back", name: "Retour à la Cuisine", nameFr: "Retour", x: 8, y: 8, width: 12, height: 8, icon: "⬅️", targetLevelId: "kitchen-main" },
    ],
    words: [
      { id: "assiette", word: "l'assiette", en: "plate", g: "f", emoji: "🍽️", x: 25, y: 40, mnemonic: "On mange dans une ASSIETTE" },
      { id: "verre", word: "le verre", en: "glass", g: "m", emoji: "🥛", x: 50, y: 35, mnemonic: "On boit dans un VERRE" },
      { id: "tasse", word: "la tasse", en: "cup/mug", g: "f", emoji: "☕", x: 75, y: 40, mnemonic: "Du café dans une TASSE" },
      { id: "couteau", word: "le couteau", en: "knife", g: "m", emoji: "🔪", x: 20, y: 65, mnemonic: "On coupe avec un COUTEAU" },
      { id: "fourchette", word: "la fourchette", en: "fork", g: "f", emoji: "🍴", x: 45, y: 60, mnemonic: "On mange avec une FOURCHETTE" },
      { id: "cuillere", word: "la cuillère", en: "spoon", g: "f", emoji: "🥄", x: 70, y: 65, mnemonic: "La soupe avec une CUILLÈRE" },
      { id: "casserole", word: "la casserole", en: "pot", g: "f", emoji: "🍲", x: 35, y: 80, mnemonic: "On cuisine dans une CASSEROLE" },
      { id: "poele", word: "la poêle", en: "pan", g: "f", emoji: "🍳", x: 60, y: 80, mnemonic: "On fait frire dans une POÊLE" },
    ]
  },
  {
    id: "kitchen-drawers",
    name: "Dans les Tiroirs",
    nameFr: "Dans les Tiroirs",
    description: "Ustensiles, outils et gadgets de cuisine",
    image: "/palace/kitchen/drawers.jpg",
    parentId: "kitchen-main",
    zones: [
      { id: "back", name: "Retour à la Cuisine", nameFr: "Retour", x: 8, y: 8, width: 12, height: 8, icon: "⬅️", targetLevelId: "kitchen-main" },
    ],
    words: [
      { id: "tiroir", word: "le tiroir", en: "drawer", g: "m", emoji: "🗂️", x: 50, y: 50, mnemonic: "On ouvre le TIROIR" },
      { id: "cuisiner-v", word: "cuisiner", en: "to cook", emoji: "👨‍🍳", x: 30, y: 35, mnemonic: "CUISINER comme Maman" },
      { id: "four", word: "le four", en: "oven", g: "m", emoji: "🔥", x: 70, y: 35, mnemonic: "On cuit au FOUR" },
      { id: "ouvrir", word: "ouvrir", en: "to open", emoji: "📂", x: 25, y: 70, mnemonic: "OUVRIR le tiroir" },
      { id: "fermer", word: "fermer", en: "to close", emoji: "📁", x: 50, y: 75, mnemonic: "FERMER le tiroir" },
      { id: "eteindre", word: "éteindre", en: "to turn off", emoji: "⭕", x: 75, y: 70, mnemonic: "ÉTEINDRE la lumière" },
    ]
  },
  {
    id: "kitchen-cooking",
    name: "En Train de Cuisiner",
    nameFr: "En Train de Cuisiner",
    description: "Maman prépare un délicieux repas !",
    image: "/palace/kitchen/cooking.jpg",
    parentId: "kitchen-main",
    zones: [
      { id: "back", name: "Retour à la Cuisine", nameFr: "Retour", x: 8, y: 8, width: 12, height: 8, icon: "⬅️", targetLevelId: "kitchen-main" },
    ],
    words: [
      { id: "cuisiner", word: "cuisiner", en: "to cook", emoji: "👨‍🍳", x: 50, y: 50, mnemonic: "CUISINER avec amour" },
      { id: "eau", word: "l'eau", en: "water", g: "f", emoji: "💧", x: 30, y: 60, mnemonic: "Faire bouillir de l'EAU" },
      { id: "huile", word: "l'huile", en: "oil", g: "f", emoji: "🫒", x: 70, y: 55, mnemonic: "De l'HUILE d'olive" },
      { id: "sel", word: "le sel", en: "salt", g: "m", emoji: "🧂", x: 40, y: 75, mnemonic: "Du SEL pour le goût" },
      { id: "poivre", word: "le poivre", en: "pepper", g: "m", emoji: "🌶️", x: 60, y: 75, mnemonic: "Du POIVRE pour l'épice" },
      { id: "pain", word: "le pain", en: "bread", g: "m", emoji: "🥖", x: 20, y: 40, mnemonic: "Du PAIN frais" },
      { id: "pates", word: "les pâtes", en: "pasta", g: "f", emoji: "🍝", x: 80, y: 45, mnemonic: "Des PÂTES le dimanche" },
      { id: "manger", word: "manger", en: "to eat", emoji: "😋", x: 50, y: 85, mnemonic: "MANGER ensemble" },
    ]
  },
  {
    id: "kitchen-sink",
    name: "À l'Évier",
    nameFr: "À l'Évier",
    description: "Laver la vaisselle et nettoyer",
    image: "/palace/kitchen/sink.jpg",
    parentId: "kitchen-main",
    zones: [
      { id: "back", name: "Retour à la Cuisine", nameFr: "Retour", x: 8, y: 8, width: 12, height: 8, icon: "⬅️", targetLevelId: "kitchen-main" },
    ],
    words: [
      { id: "evier", word: "l'évier", en: "sink", g: "m", emoji: "🚰", x: 50, y: 50, mnemonic: "On lave à l'ÉVIER" },
      { id: "eau-sink", word: "l'eau", en: "water", g: "f", emoji: "💧", x: 50, y: 35, mnemonic: "L'EAU coule ici" },
      { id: "savon", word: "le savon", en: "soap", g: "m", emoji: "🧼", x: 30, y: 60, mnemonic: "Laver avec du SAVON" },
      { id: "secher", word: "sécher", en: "to dry", emoji: "🧽", x: 70, y: 60, mnemonic: "SÉCHER la vaisselle" },
      { id: "nettoyer", word: "nettoyer", en: "to clean", emoji: "✨", x: 50, y: 75, mnemonic: "NETTOYER la cuisine" },
    ]
  },
  {
    id: "kitchen-pantry",
    name: "Le Garde-Manger",
    nameFr: "Le Garde-Manger",
    description: "Stockage des provisions et ingrédients secs",
    image: "/palace/kitchen/pantry.jpg",
    parentId: "kitchen-main",
    zones: [
      { id: "back", name: "Retour à la Cuisine", nameFr: "Retour", x: 8, y: 8, width: 12, height: 8, icon: "⬅️", targetLevelId: "kitchen-main" },
    ],
    words: [
      { id: "garde-manger", word: "le garde-manger", en: "pantry", g: "m", emoji: "🥫", x: 50, y: 50, mnemonic: "Stocker le GARDE-MANGER" },
      { id: "riz", word: "le riz", en: "rice", g: "m", emoji: "🍚", x: 25, y: 40, mnemonic: "Du RIZ pour le rizoto" },
      { id: "sucre", word: "le sucre", en: "sugar", g: "m", emoji: "🍬", x: 50, y: 35, mnemonic: "Du SUCRE sucré" },
      { id: "farine", word: "la farine", en: "flour", g: "f", emoji: "🌾", x: 75, y: 40, mnemonic: "De la FARINE pour le pain" },
      { id: "huile-pantry", word: "l'huile", en: "oil", g: "f", emoji: "🫒", x: 30, y: 70, mnemonic: "De l'HUILE de cuisson" },
      { id: "sel-pantry", word: "le sel", en: "salt", g: "m", emoji: "🧂", x: 70, y: 70, mnemonic: "Du SEL pour assaisonner" },
    ]
  },
];

// ===== ALL FRENCH PALACES =====
export const allFrenchPalaces: Record<string, FrenchSpatialLevel[]> = {
  kitchen: frenchKitchenLevels,
};

// Helper to get French level by ID
export function getFrenchLevelById(id: string): FrenchSpatialLevel | undefined {
  for (const palace of Object.values(allFrenchPalaces)) {
    const level = palace.find(l => l.id === id);
    if (level) return level;
  }
  return undefined;
}

// Helper to get French root level
export function getFrenchPalaceRoot(palaceId: string): FrenchSpatialLevel | undefined {
  return allFrenchPalaces[palaceId]?.[0];
}
