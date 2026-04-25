// School Palace — barrel exports
// All school rooms, vocabulary, dialogues, and image prompts

import type { VocabularyItem } from '../../types';

import { classroomRoom, classroomVocabulary, classroomDialogues, classroomImagePrompts } from './classroom';
import { playgroundRoom, playgroundVocabulary, playgroundDialogues, playgroundImagePrompts } from './playground';
import { lunchHallRoom, lunchHallVocabulary, lunchHallDialogues, lunchHallImagePrompts } from './lunch-hall';
import { schoolNurseRoom, schoolNurseVocabulary, schoolNurseDialogues, schoolNurseImagePrompts } from './school-nurse';
import { schoolBathroomRoom, schoolBathroomVocabulary, schoolBathroomDialogues, schoolBathroomImagePrompts } from './school-bathroom';
import { hallwayLockerRoom, hallwayLockerVocabulary, hallwayLockerDialogues, hallwayLockerImagePrompts } from './hallway-locker';
import { schoolLibraryRoom, schoolLibraryVocabulary, schoolLibraryDialogues, schoolLibraryImagePrompts } from './school-library';
import { gymRoom, gymVocabulary, gymDialogues, gymImagePrompts } from './gym';
import { musicRoomRoom, musicRoomVocabulary, musicRoomDialogues, musicRoomImagePrompts } from './music-room';
import { scienceLabRoom, scienceLabVocabulary, scienceLabDialogues, scienceLabImagePrompts } from './science-lab';
import { computerRoomRoom, computerRoomVocabulary, computerRoomDialogues, computerRoomImagePrompts } from './computer-room';
import { principalOfficeRoom, principalOfficeVocabulary, principalOfficeDialogues, principalOfficeImagePrompts } from './principal-office';
import { lostPropertyRoom, lostPropertyVocabulary, lostPropertyDialogues, lostPropertyImagePrompts } from './lost-property';
import { schoolBusRoom, schoolBusVocabulary, schoolBusDialogues, schoolBusImagePrompts } from './school-bus';

export { classroomRoom, classroomVocabulary, classroomDialogues, classroomImagePrompts };
export { playgroundRoom, playgroundVocabulary, playgroundDialogues, playgroundImagePrompts };
export { lunchHallRoom, lunchHallVocabulary, lunchHallDialogues, lunchHallImagePrompts };
export { schoolNurseRoom, schoolNurseVocabulary, schoolNurseDialogues, schoolNurseImagePrompts };
export { schoolBathroomRoom, schoolBathroomVocabulary, schoolBathroomDialogues, schoolBathroomImagePrompts };
export { hallwayLockerRoom, hallwayLockerVocabulary, hallwayLockerDialogues, hallwayLockerImagePrompts };
export { schoolLibraryRoom, schoolLibraryVocabulary, schoolLibraryDialogues, schoolLibraryImagePrompts };
export { gymRoom, gymVocabulary, gymDialogues, gymImagePrompts };
export { musicRoomRoom, musicRoomVocabulary, musicRoomDialogues, musicRoomImagePrompts };
export { scienceLabRoom, scienceLabVocabulary, scienceLabDialogues, scienceLabImagePrompts };
export { computerRoomRoom, computerRoomVocabulary, computerRoomDialogues, computerRoomImagePrompts };
export { principalOfficeRoom, principalOfficeVocabulary, principalOfficeDialogues, principalOfficeImagePrompts };
export { lostPropertyRoom, lostPropertyVocabulary, lostPropertyDialogues, lostPropertyImagePrompts };
export { schoolBusRoom, schoolBusVocabulary, schoolBusDialogues, schoolBusImagePrompts };

// ============================================================================
// SCHOOL ROOMS ARRAY (for registration)
// ============================================================================

export const schoolRooms = [
  classroomRoom, playgroundRoom, lunchHallRoom,
  schoolNurseRoom, schoolBathroomRoom, hallwayLockerRoom,
  schoolLibraryRoom, gymRoom, musicRoomRoom,
  scienceLabRoom, computerRoomRoom, principalOfficeRoom,
  lostPropertyRoom, schoolBusRoom,
];

// ============================================================================
// VOCABULARY CONVERTER — SchoolConcept → VocabularyItem
// ============================================================================

export interface SchoolConcept {
  id: string;
  emoji?: string;
  en: { word: string; phrase?: string; context?: string };
  it?: { word: string; phrase?: string; gender?: 'masculine' | 'feminine' | 'none'; pronunciation?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
  fr?: { word: string; phrase?: string; gender?: 'masculine' | 'feminine' | 'none'; pronunciation?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
  mt?: { word: string; phrase?: string; audit?: { status: 'pending' | 'pass' | 'fix' | 'reject'; auditor: string; notes?: string } };
}

function convertSchoolConceptToVocabularyItem(concept: SchoolConcept): VocabularyItem {
  const enWord = concept.en.word;
  const itWord = concept.it?.word;
  const native = itWord || enWord;
  const gender = concept.it?.gender || 'none';
  const pronunciation = concept.it?.pronunciation || '';

  return {
    id: concept.id,
    native,
    english: enWord,
    gender,
    pronunciation,
    emoji: concept.emoji || '',
    mnemonic: concept.en.context || '',
    examples: concept.en.phrase ? [{ native: itWord ? `${itWord}.` : `${enWord}.`, english: concept.en.phrase }] : undefined,
    x: 0, y: 0,
  };
}

export function schoolVocabToRecord(vocab: SchoolConcept[]): Record<string, VocabularyItem> {
  const record: Record<string, VocabularyItem> = {};
  for (const concept of vocab) {
    record[concept.id] = convertSchoolConceptToVocabularyItem(concept);
  }
  return record;
}

export const schoolItalianVocabulary: Record<string, VocabularyItem> = {
  ...schoolVocabToRecord(classroomVocabulary),
  ...schoolVocabToRecord(playgroundVocabulary),
  ...schoolVocabToRecord(lunchHallVocabulary),
  ...schoolVocabToRecord(schoolNurseVocabulary),
  ...schoolVocabToRecord(schoolBathroomVocabulary),
  ...schoolVocabToRecord(hallwayLockerVocabulary),
  ...schoolVocabToRecord(schoolLibraryVocabulary),
  ...schoolVocabToRecord(gymVocabulary),
  ...schoolVocabToRecord(musicRoomVocabulary),
  ...schoolVocabToRecord(scienceLabVocabulary),
  ...schoolVocabToRecord(computerRoomVocabulary),
  ...schoolVocabToRecord(principalOfficeVocabulary),
  ...schoolVocabToRecord(lostPropertyVocabulary),
  ...schoolVocabToRecord(schoolBusVocabulary),
};

export const allSchoolDialogues = [
  ...classroomDialogues, ...playgroundDialogues, ...lunchHallDialogues,
  ...schoolNurseDialogues, ...schoolBathroomDialogues, ...hallwayLockerDialogues,
  ...schoolLibraryDialogues, ...gymDialogues, ...musicRoomDialogues,
  ...scienceLabDialogues, ...computerRoomDialogues, ...principalOfficeDialogues,
  ...lostPropertyDialogues, ...schoolBusDialogues,
];

export const allSchoolImagePrompts: Record<string, string> = {
  ...classroomImagePrompts, ...playgroundImagePrompts, ...lunchHallImagePrompts,
  ...schoolNurseImagePrompts, ...schoolBathroomImagePrompts, ...hallwayLockerImagePrompts,
  ...schoolLibraryImagePrompts, ...gymImagePrompts, ...musicRoomImagePrompts,
  ...scienceLabImagePrompts, ...computerRoomImagePrompts, ...principalOfficeImagePrompts,
  ...lostPropertyImagePrompts, ...schoolBusImagePrompts,
};
