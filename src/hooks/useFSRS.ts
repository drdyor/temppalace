import { createEmptyCard, fsrs, Rating, type Card, type Grade } from 'ts-fsrs';
import { openDB, type IDBPDatabase } from 'idb';
import { useCallback } from 'react';

interface StoredCard extends Card {
  wordId: string;
  addedAt: number;
}

const DB_NAME = 'vocab-srs';
const STORE = 'cards';

let dbPromise: Promise<IDBPDatabase> | null = null;

function getDB() {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(STORE)) {
          const store = db.createObjectStore(STORE, { keyPath: 'wordId' });
          store.createIndex('due', 'due');
        }
      },
    });
  }
  return dbPromise;
}

const scheduler = fsrs();

export function useFSRS() {
  const getCard = useCallback(async (wordId: string): Promise<StoredCard | null> => {
    const db = await getDB();
    return (await db.get(STORE, wordId)) ?? null;
  }, []);

  const addWord = useCallback(async (wordId: string): Promise<StoredCard> => {
    const db = await getDB();
    const existing = await db.get(STORE, wordId);
    if (existing) return existing;
    const card = createEmptyCard();
    const stored: StoredCard = { ...card, wordId, addedAt: Date.now() };
    await db.put(STORE, stored);
    return stored;
  }, []);

  const reviewCard = useCallback(async (wordId: string, rating: Grade): Promise<StoredCard> => {
    const db = await getDB();
    const existing = (await db.get(STORE, wordId)) as StoredCard | undefined;
    const base: Card = existing ?? createEmptyCard();
    const { card } = scheduler.next(base, new Date(), rating);
    const stored: StoredCard = {
      ...card,
      wordId,
      addedAt: existing?.addedAt ?? Date.now(),
    };
    await db.put(STORE, stored);
    return stored;
  }, []);

  const getDueCards = useCallback(
    async (wordIds?: string[], now: Date = new Date()): Promise<StoredCard[]> => {
      const db = await getDB();
      const all = (await db.getAll(STORE)) as StoredCard[];
      const filtered = wordIds ? all.filter((c) => wordIds.includes(c.wordId)) : all;
      return filtered.filter((c) => new Date(c.due) <= now);
    },
    []
  );

  const getAllCards = useCallback(async (): Promise<StoredCard[]> => {
    const db = await getDB();
    return (await db.getAll(STORE)) as StoredCard[];
  }, []);

  const removeCard = useCallback(async (wordId: string) => {
    const db = await getDB();
    await db.delete(STORE, wordId);
  }, []);

  return { getCard, addWord, reviewCard, getDueCards, getAllCards, removeCard };
}

export { Rating };
export type { StoredCard };
