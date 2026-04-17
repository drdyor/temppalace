// User-authored vocabulary, stored in localStorage.
// Keyed per target-language ISO code so italian/french stay separate.

const STORAGE_KEY_PREFIX = 'memory-palace-user-vocab-';

export interface UserVocabEntry {
  id: string;
  roomId: string;
  zoneId: string;
  x: number;              // percent within zone image
  y: number;              // percent within zone image
  english: string;
  native: string;         // translation in target language (may be empty)
  targetLang: string;     // iso code, e.g. 'it'
  needsReview: boolean;   // true until verified (e.g. via DeepL pass)
  createdAt: number;
}

function storageKey(targetLang: string) {
  return `${STORAGE_KEY_PREFIX}${targetLang}`;
}

export function listUserVocab(targetLang: string): UserVocabEntry[] {
  try {
    const raw = localStorage.getItem(storageKey(targetLang));
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveUserVocab(targetLang: string, entries: UserVocabEntry[]) {
  localStorage.setItem(storageKey(targetLang), JSON.stringify(entries));
}

export function addUserVocab(
  targetLang: string,
  entry: Omit<UserVocabEntry, 'id' | 'createdAt' | 'targetLang'>,
): UserVocabEntry {
  const full: UserVocabEntry = {
    ...entry,
    id: `uv-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    createdAt: Date.now(),
    targetLang,
  };
  const all = listUserVocab(targetLang);
  all.push(full);
  saveUserVocab(targetLang, all);
  return full;
}

export function removeUserVocab(targetLang: string, id: string) {
  const all = listUserVocab(targetLang).filter((e) => e.id !== id);
  saveUserVocab(targetLang, all);
}

export function updateUserVocab(targetLang: string, id: string, patch: Partial<UserVocabEntry>) {
  const all = listUserVocab(targetLang).map((e) => (e.id === id ? { ...e, ...patch } : e));
  saveUserVocab(targetLang, all);
}

export function listForZone(targetLang: string, roomId: string, zoneId: string): UserVocabEntry[] {
  return listUserVocab(targetLang).filter(
    (e) => e.roomId === roomId && e.zoneId === zoneId,
  );
}

export function exportJson(targetLang: string): string {
  return JSON.stringify(
    { version: 1, targetLang, entries: listUserVocab(targetLang) },
    null,
    2,
  );
}

export function importJson(
  json: string,
  mode: 'merge' | 'replace' = 'merge',
): { imported: number; targetLang: string } {
  const parsed = JSON.parse(json);
  if (!parsed || !Array.isArray(parsed.entries) || typeof parsed.targetLang !== 'string') {
    throw new Error('Invalid import file');
  }
  const targetLang: string = parsed.targetLang;
  const incoming: UserVocabEntry[] = parsed.entries;
  if (mode === 'replace') {
    saveUserVocab(targetLang, incoming);
    return { imported: incoming.length, targetLang };
  }
  const byId = new Map(listUserVocab(targetLang).map((e) => [e.id, e]));
  for (const e of incoming) byId.set(e.id, e);
  saveUserVocab(targetLang, Array.from(byId.values()));
  return { imported: incoming.length, targetLang };
}
