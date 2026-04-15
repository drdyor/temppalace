import { useCallback, useEffect, useState } from 'react';
import { Rating, useFSRS, type StoredCard } from '../hooks/useFSRS';
import type { Grade } from 'ts-fsrs';

export default function ReviewPage() {
  const { getDueCards, reviewCard, getAllCards, removeCard } = useFSRS();
  const [queue, setQueue] = useState<StoredCard[]>([]);
  const [total, setTotal] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadDue = useCallback(async () => {
    setLoading(true);
    const [due, all] = await Promise.all([getDueCards(), getAllCards()]);
    setQueue(due);
    setTotal(all.length);
    setRevealed(false);
    setLoading(false);
  }, [getDueCards, getAllCards]);

  useEffect(() => {
    loadDue();
  }, [loadDue]);

  const current = queue[0] ?? null;

  const rate = async (rating: Grade) => {
    if (!current) return;
    await reviewCard(current.wordId, rating);
    setQueue((q) => q.slice(1));
    setRevealed(false);
  };

  const drop = async () => {
    if (!current) return;
    await removeCard(current.wordId);
    setQueue((q) => q.slice(1));
    setRevealed(false);
    setTotal((t) => Math.max(0, t - 1));
  };

  if (loading) {
    return <div className="p-8 text-center text-neutral-500">Loading review deck…</div>;
  }

  if (total === 0) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-semibold mb-2">Your review deck is empty</h1>
        <p className="text-neutral-500">
          Open a story and click unfamiliar words to add them here.
        </p>
      </div>
    );
  }

  if (!current) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-semibold mb-2">All caught up 🎉</h1>
        <p className="text-neutral-500">{total} card{total === 1 ? '' : 's'} in your deck, none due.</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-xl mx-auto">
      <div className="flex justify-between mb-4 text-sm text-neutral-500">
        <span>{queue.length} due</span>
        <span>{total} total</span>
      </div>

      <div className="rounded-xl border border-neutral-200 bg-white p-10 text-center shadow-sm">
        <div className="text-3xl font-semibold tracking-tight">{current.wordId}</div>
        {revealed ? (
          <div className="mt-6 text-neutral-600">
            Rate how well you recalled it.
          </div>
        ) : (
          <button
            onClick={() => setRevealed(true)}
            className="mt-8 px-5 py-2 rounded-md bg-neutral-900 text-white"
          >
            Show answer
          </button>
        )}
      </div>

      {revealed && (
        <div className="grid grid-cols-4 gap-2 mt-4">
          <button onClick={() => rate(Rating.Again)} className="py-3 rounded-md bg-rose-600 text-white">
            Again
          </button>
          <button onClick={() => rate(Rating.Hard)} className="py-3 rounded-md bg-amber-500 text-white">
            Hard
          </button>
          <button onClick={() => rate(Rating.Good)} className="py-3 rounded-md bg-emerald-600 text-white">
            Good
          </button>
          <button onClick={() => rate(Rating.Easy)} className="py-3 rounded-md bg-sky-600 text-white">
            Easy
          </button>
        </div>
      )}

      <div className="mt-6 text-center">
        <button onClick={drop} className="text-xs text-neutral-400 hover:text-neutral-600">
          Remove this word from deck
        </button>
      </div>
    </div>
  );
}
