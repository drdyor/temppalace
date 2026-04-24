import { createEmptyCard, fsrs, Rating, type Card, type Grade } from 'ts-fsrs';
import { openDB, type IDBPDatabase } from 'idb';
import { useCallback } from 'react';

export interface StoredCard extends Card {
  id: string;       // composite key: `${wordId}:${direction}`
  wordId: string;
  direction: string; // e.g. 'en-it', 'it-en'
  addedAt: number;
}

const DB_NAME = 'vocab-srs-v2';
const STORE = 'cards';

let dbPromise: Promise<IDBPDatabase> | null = null;

/** Read current learning direction from localStorage (same keys as LanguageContext) */
function getCurrentDirection(): string {
  const dir = localStorage.getItem('memory-palace-learning-direction') as 'target' | 'inverse' | null;
  const lang = localStorage.getItem('memory-palace-language') as 'italian' | 'french' | 'spanish' | null;
  const code = lang === 'french' ? 'fr' : lang === 'spanish' ? 'es' : 'it';
  return dir === 'inverse' ? `${code}-en` : `en-${code}`;
}

function getDB() {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(STORE)) {
          const store = db.createObjectStore(STORE, { keyPath: 'id' });
          store.createIndex('due', 'due');
          store.createIndex('direction', 'direction');
        }
      },
    });
  }
  return dbPromise;
}

const scheduler = fsrs();

export function useFSRS() {
  const getCard = useCallback(async (wordId: string, direction?: string): Promise<StoredCard | null> => {
    const db = await getDB();
    const dir = direction ?? getCurrentDirection();
    return (await db.get(STORE, `${wordId}:${dir}`)) ?? null;
  }, []);

  const addWord = useCallback(async (wordId: string, direction?: string): Promise<StoredCard> => {
    const db = await getDB();
    const dir = direction ?? getCurrentDirection();
    const id = `${wordId}:${dir}`;
    const existing = await db.get(STORE, id);
    if (existing) return existing as StoredCard;
    const card = createEmptyCard();
    const stored: StoredCard = { ...card, id, wordId, direction: dir, addedAt: Date.now() };
    await db.put(STORE, stored);
    return stored;
  }, []);

  const reviewCard = useCallback(async (wordId: string, rating: Grade, direction?: string): Promise<StoredCard> => {
    const db = await getDB();
    const dir = direction ?? getCurrentDirection();
    const id = `${wordId}:${dir}`;
    const existing = (await db.get(STORE, id)) as StoredCard | undefined;
    const base: Card = existing ?? createEmptyCard();
    const { card } = scheduler.next(base, new Date(), rating);
    const stored: StoredCard = {
      ...card,
      id,
      wordId,
      direction: dir,
      addedAt: existing?.addedAt ?? Date.now(),
    };
    await db.put(STORE, stored);
    return stored;
  }, []);

  const getDueCards = useCallback(
    async (wordIds?: string[], now: Date = new Date(), direction?: string): Promise<StoredCard[]> => {
      const db = await getDB();
      const dir = direction ?? getCurrentDirection();
      const all = (await db.getAll(STORE)) as StoredCard[];
      return all
        .filter((c) => c.direction === dir)
        .filter((c) => (wordIds ? wordIds.includes(c.wordId) : true))
        .filter((c) => new Date(c.due) <= now);
    },
    []
  );

  const getAllCards = useCallback(async (direction?: string): Promise<StoredCard[]> => {
    const db = await getDB();
    const dir = direction ?? getCurrentDirection();
    const all = (await db.getAll(STORE)) as StoredCard[];
    return all.filter((c) => c.direction === dir);
  }, []);

  const removeCard = useCallback(async (wordId: string, direction?: string) => {
    const db = await getDB();
    const dir = direction ?? getCurrentDirection();
    await db.delete(STORE, `${wordId}:${dir}`);
  }, []);

  return { getCard, addWord, reviewCard, getDueCards, getAllCards, removeCard };
}

export { Rating };
