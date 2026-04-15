// Extended French Memory Palace - Additional Rooms
// Based on Kelly Word List and GCSE French vocabulary

import type { SpatialLevel } from "./SimpleViewer";
import { frenchKitchenLevels } from "./data-fr";

// Extended type that includes French names
interface FrenchSpatialLevel extends SpatialLevel {
  nameFr?: string;
}

// ===== LAUNDRY ROOM (Buanderie) =====
// Kelly words: clothes, wash, clean, dry
export const frenchLaundryLevels: FrenchSpatialLevel[] = [
  {
    id: "fr-laundry-main",
    name: "The Laundry Room",
    nameFr: "La Buanderie",
    description: "Une buanderie avec machine à laver et linge",
    image: "/palace/laundry/main.jpg",
    zones: [],
    words: [
      { id: "buanderie", word: "la buanderie", en: "laundry room", g: "f", emoji: "🧺", x: 50, y: 50, mnemonic: "On lave le linge dans la BUANDERIE" },
      { id: "machine-laver", word: "la machine à laver", en: "washing machine", g: "f", emoji: "🧺", x: 45, y: 60, mnemonic: "La MACHINE À LAVER fait tourner le linge" },
      { id: "linge", word: "le linge", en: "laundry/linen", g: "m", emoji: "👕", x: 25, y: 35, mnemonic: "Le LINGE sale à laver" },
      { id: "lessive", word: "la lessive", en: "detergent/washing", g: "f", emoji: "🧴", x: 15, y: 55, mnemonic: "De la LESSIVE pour laver" },
      { id: "panier", word: "le panier", en: "basket", g: "m", emoji: "🧺", x: 30, y: 75, mnemonic: "Le linge dans le PANIER" },
      { id: "serviette", word: "la serviette", en: "towel", g: "f", emoji: "🧖", x: 70, y: 30, mnemonic: "Une SERVIETTE pour sécher" },
      { id: "repasser", word: "repasser", en: "to iron", emoji: "🔥", x: 80, y: 55, mnemonic: "REPASSER les vêtements" },
      { id: "propre", word: "propre", en: "clean", emoji: "✨", x: 60, y: 80, mnemonic: "Le linge est PROPRE" },
    ]
  },
];

// ===== CINEMA ROOM (Salle de Cinéma) =====
// Kelly words: watch, film, entertainment, relax
export const frenchCinemaLevels: FrenchSpatialLevel[] = [
  {
    id: "fr-cinema-main",
    name: "The Cinema Room",
    nameFr: "La Salle de Cinéma",
    description: "Un cinéma maison confortable",
    image: "/palace/cinema/main.jpg",
    zones: [],
    words: [
      { id: "cinema", word: "le cinéma", en: "cinema/movies", g: "m", emoji: "🎬", x: 50, y: 50, mnemonic: "Aller au CINÉMA" },
      { id: "film", word: "le film", en: "film/movie", g: "m", emoji: "🎥", x: 50, y: 25, mnemonic: "Un FILM au cinéma" },
      { id: "regarder", word: "regarder", en: "to watch", emoji: "👀", x: 25, y: 40, mnemonic: "REGARDER un film" },
      { id: "popcorn", word: "le popcorn", en: "popcorn", g: "m", emoji: "🍿", x: 15, y: 65, mnemonic: "Du POPcorn au cinéma" },
      { id: "ecran", word: "l'écran", en: "screen", g: "m", emoji: "📺", x: 50, y: 35, mnemonic: "L'ÉCRAN du cinéma" },
      { id: "siege", word: "le siège", en: "seat", g: "m", emoji: "💺", x: 75, y: 60, mnemonic: "Un SIÈGE confortable" },
      { id: "divertir", word: "se divertir", en: "to entertain oneself", emoji: "🎉", x: 80, y: 80, mnemonic: "Se DIVERTIR au cinéma" },
      { id: "detendre", word: "se détendre", en: "to relax", emoji: "😌", x: 30, y: 80, mnemonic: "Se DÉTENDRE devant un film" },
    ]
  },
];

// ===== BATHROOM (Salle de Bain) =====
// Kelly words: wash, clean, water, hygiene
export const frenchBathroomLevels: FrenchSpatialLevel[] = [
  {
    id: "fr-bathroom-main",
    name: "The Bathroom",
    nameFr: "La Salle de Bain",
    description: "Une salle de bain élégante",
    image: "/palace/bathroom/main.jpg",
    zones: [],
    words: [
      { id: "sdb", word: "la salle de bain", en: "bathroom", g: "f", emoji: "🛁", x: 50, y: 50, mnemonic: "La SALLE DE BAIN pour se laver" },
      { id: "baignoire", word: "la baignoire", en: "bathtub", g: "f", emoji: "🛁", x: 55, y: 70, mnemonic: "Prendre un bain dans la BAIGNOIRE" },
      { id: "douche", word: "la douche", en: "shower", g: "f", emoji: "🚿", x: 80, y: 40, mnemonic: "Une DOUCHE rapide" },
      { id: "lavabo", word: "le lavabo", en: "sink", g: "m", emoji: "🚰", x: 20, y: 50, mnemonic: "Se laver les mains au LAVABO" },
      { id: "miroir", word: "le miroir", en: "mirror", g: "m", emoji: "🪞", x: 25, y: 25, mnemonic: "Se regarder dans le MIROIR" },
      { id: "savon", word: "le savon", en: "soap", g: "m", emoji: "🧼", x: 15, y: 70, mnemonic: "Du SAVON pour se laver" },
      { id: "brosse-dents", word: "la brosse à dents", en: "toothbrush", g: "f", emoji: "🪥", x: 35, y: 80, mnemonic: "La BROSSE À DENTS le matin" },
      { id: "se-laver", word: "se laver", en: "to wash oneself", emoji: "🧼", x: 70, y: 75, mnemonic: "Se LAVER tous les jours" },
    ]
  },
];

// ===== GARDEN (Jardin) =====
// Kelly words: nature, plants, outside, grow
export const frenchGardenLevels: FrenchSpatialLevel[] = [
  {
    id: "fr-garden-main",
    name: "The Garden",
    nameFr: "Le Jardin",
    description: "Un beau jardin avec des fleurs",
    image: "/palace/garden/main.jpg",
    zones: [],
    words: [
      { id: "jardin", word: "le jardin", en: "garden", g: "m", emoji: "🌳", x: 50, y: 50, mnemonic: "Les fleurs dans le JARDIN" },
      { id: "fleur", word: "la fleur", en: "flower", g: "f", emoji: "🌸", x: 20, y: 70, mnemonic: "Une belle FLEUR" },
      { id: "plante", word: "la plante", en: "plant", g: "f", emoji: "🪴", x: 75, y: 65, mnemonic: "Une PLANTE en pot" },
      { id: "arbre", word: "l'arbre", en: "tree", g: "m", emoji: "🌳", x: 15, y: 30, mnemonic: "Un grand ARBRE" },
      { id: "herbe", word: "l'herbe", en: "grass", g: "f", emoji: "🌿", x: 50, y: 85, mnemonic: "De l'HERBE verte" },
      { id: "arroser", word: "arroser", en: "to water", emoji: "💧", x: 70, y: 40, mnemonic: "ARROSER les plantes" },
      { id: "soleil", word: "le soleil", en: "sun", g: "m", emoji: "☀️", x: 85, y: 20, mnemonic: "Le SOLEIL brille" },
      { id: "dehors", word: "dehors", en: "outside", emoji: "🏞️", x: 35, y: 25, mnemonic: "Jouer DEHORS" },
    ]
  },
];

// ===== ENTRANCE HALL (Vestibule) =====
// GCSE topic: House & Home
export const frenchEntranceLevels: FrenchSpatialLevel[] = [
  {
    id: "fr-entrance-main",
    name: "The Entrance Hall",
    nameFr: "Le Vestibule",
    description: "L'entrée de la maison",
    image: "/palace/entrance/main.jpg",
    zones: [],
    words: [
      { id: "entree", word: "l'entrée", en: "entrance", g: "f", emoji: "🚪", x: 50, y: 50, mnemonic: "L'ENTRÉE de la maison" },
      { id: "porte-entree", word: "la porte", en: "door", g: "f", emoji: "🚪", x: 50, y: 30, mnemonic: "Frapper à la PORTE" },
      { id: "cle", word: "la clé", en: "key", g: "f", emoji: "🗝️", x: 30, y: 60, mnemonic: "La CLÉ pour ouvrir" },
      { id: "serrure", word: "la serrure", en: "lock", g: "f", emoji: "🔒", x: 55, y: 40, mnemonic: "La SERRURE de la porte" },
      { id: "paillasson", word: "le paillasson", en: "doormat", g: "m", emoji: "🚪", x: 50, y: 75, mnemonic: "Essuyer ses pieds sur le PAILLASSON" },
      { id: "manteau", word: "le manteau", en: "coat", g: "m", emoji: "🧥", x: 20, y: 45, mnemonic: "Accrocher son MANTEAU" },
      { id: "chaussure", word: "la chaussure", en: "shoe", g: "f", emoji: "👟", x: 75, y: 70, mnemonic: "Enlever ses CHAUSSURES" },
      { id: "rentrer", word: "rentrer", en: "to come in/return", emoji: "🏠", x: 80, y: 40, mnemonic: "RENTRER à la maison" },
    ]
  },
];

// ===== BEDROOM (Chambre) =====
// GCSE topic: Daily Routine, House & Home
export const frenchBedroomLevels: FrenchSpatialLevel[] = [
  {
    id: "fr-bedroom-main",
    name: "The Bedroom",
    nameFr: "La Chambre",
    description: "Une chambre confortable",
    image: "/palace/bedroom/main.jpg",
    zones: [],
    words: [
      { id: "chambre", word: "la chambre", en: "bedroom", g: "f", emoji: "🛏️", x: 50, y: 50, mnemonic: "Dormir dans la CHAMBRE" },
      { id: "lit", word: "le lit", en: "bed", g: "m", emoji: "🛏️", x: 50, y: 70, mnemonic: "Se coucher dans le LIT" },
      { id: "oreiller", word: "l'oreiller", en: "pillow", g: "m", emoji: "🛏️", x: 45, y: 55, mnemonic: "La tête sur l'OREILLER" },
      { id: "couverture", word: "la couverture", en: "blanket", g: "f", emoji: "🛌", x: 55, y: 55, mnemonic: "Se couvrir avec la COUVERTURE" },
      { id: "reveil", word: "le réveil", en: "alarm clock", g: "m", emoji: "⏰", x: 25, y: 65, mnemonic: "Le RÉVEIL sonne le matin" },
      { id: "dormir", word: "dormir", en: "to sleep", emoji: "😴", x: 75, y: 75, mnemonic: "DORMIR toute la nuit" },
      { id: "reveiller", word: "se réveiller", en: "to wake up", emoji: "🌅", x: 20, y: 40, mnemonic: "Se RÉVEILLER le matin" },
      { id: "lever", word: "se lever", en: "to get up", emoji: "🌞", x: 80, y: 40, mnemonic: "Se LEVER tôt" },
    ]
  },
];

// ===== LIVING ROOM (Salon) =====
// GCSE topic: House & Home, Leisure
export const frenchLivingLevels: FrenchSpatialLevel[] = [
  {
    id: "fr-living-main",
    name: "The Living Room",
    nameFr: "Le Salon",
    description: "Un salon confortable pour la famille",
    image: "/palace/living/main.jpg",
    zones: [],
    words: [
      { id: "salon", word: "le salon", en: "living room", g: "m", emoji: "🛋️", x: 50, y: 50, mnemonic: "Se détendre dans le SALON" },
      { id: "canape", word: "le canapé", en: "sofa", g: "m", emoji: "🛋️", x: 50, y: 70, mnemonic: "S'asseoir sur le CANAPÉ" },
      { id: "tele", word: "la télé", en: "TV", g: "f", emoji: "📺", x: 50, y: 25, mnemonic: "Regarder la TÉLÉ" },
      { id: "lampe", word: "la lampe", en: "lamp", g: "f", emoji: "💡", x: 25, y: 55, mnemonic: "Allumer la LAMPE" },
      { id: "table-basse", word: "la table basse", en: "coffee table", g: "f", emoji: "🪑", x: 50, y: 85, mnemonic: "Le livre sur la TABLE BASSE" },
      { id: "tapis", word: "le tapis", en: "rug/carpet", g: "m", emoji: "🧶", x: 75, y: 75, mnemonic: "Un TAPIS sur le sol" },
      { id: "rideau", word: "le rideau", en: "curtain", g: "m", emoji: "🪟", x: 20, y: 30, mnemonic: "Ouvrir le RIDEAU" },
      { id: "detendre-salon", word: "se détendre", en: "to relax", emoji: "😌", x: 80, y: 45, mnemonic: "Se DÉTENDRE au salon" },
    ]
  },
];

// ===== ALL FRENCH PALACES EXTENDED =====
export const allFrenchPalacesExtended: Record<string, FrenchSpatialLevel[]> = {
  kitchen: frenchKitchenLevels,
  laundry: frenchLaundryLevels,
  cinema: frenchCinemaLevels,
  bathroom: frenchBathroomLevels,
  garden: frenchGardenLevels,
  entrance: frenchEntranceLevels,
  bedroom: frenchBedroomLevels,
  living: frenchLivingLevels,
};

// Helper functions
export function getFrenchExtendedLevelById(id: string): FrenchSpatialLevel | undefined {
  for (const palace of Object.values(allFrenchPalacesExtended)) {
    const level = palace.find(l => l.id === id);
    if (level) return level;
  }
  return undefined;
}

export function getFrenchExtendedPalaceRoot(palaceId: string): FrenchSpatialLevel | undefined {
  return allFrenchPalacesExtended[palaceId]?.[0];
}

// Total word count
export const totalFrenchWords = Object.values(allFrenchPalacesExtended)
  .flat()
  .reduce((sum, level) => sum + level.words.length, 0);

console.log(`French Memory Palace: ${totalFrenchWords} words across ${Object.keys(allFrenchPalacesExtended).length} rooms`);
