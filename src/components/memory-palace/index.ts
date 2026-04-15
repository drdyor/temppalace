// Memory Palace Components
export { SimpleViewer } from "./SimpleViewer";
export type { 
  SpatialLevel, 
  SpatialZone, 
  SpatialWord
} from "./SimpleViewer";

// Data
export { 
  kitchenLevels, 
  allPalaces, 
  getLevelById, 
  getPalaceRoot 
} from "./data";

// French Data
export {
  frenchKitchenLevels,
  allFrenchPalaces,
  getFrenchLevelById,
  getFrenchPalaceRoot,
} from "./data-fr";

// Extended French Data (with more rooms)
export {
  allFrenchPalacesExtended,
  frenchLaundryLevels,
  frenchCinemaLevels,
  frenchBathroomLevels,
  frenchGardenLevels,
  frenchEntranceLevels,
  frenchBedroomLevels,
  frenchLivingLevels,
  getFrenchExtendedLevelById,
  getFrenchExtendedPalaceRoot,
  totalFrenchWords,
} from "./data-fr-extended";

// Language Context
export { LanguageProvider, useLanguage } from "./LanguageContext";
export type { Language } from "./LanguageContext";
