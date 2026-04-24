import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { ArrowLeft, Volume2 } from 'lucide-react';
import { Rating, useFSRS, type StoredCard } from '../hooks/useFSRS';
import type { Grade } from 'ts-fsrs';
import { useLanguage } from '../context/LanguageContext';
import { getTtsCode } from '../lib/language-config';
import DirectionToggle from '../components/DirectionToggle';

export default function ReviewPage() {
  const [, setLocation] = useLocation();
  const { getDueCards, getAllCards, reviewCard, removeCard } = useFSRS();
  const { getWord, getSourceText, getTargetText, sourceLabel, targetLabel, currentLanguage } = useLanguage();
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
  const currentWord = current ? getWord(current.wordId) : null;

  const speak = (text: string) => {
    if (!('speechSynthesis' in window) || !text) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = getTtsCode(currentLanguage);
    u.rate = 0.85;
    window.speechSynthesis.speak(u);
  };

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
    return (
      <div className="min-h-screen bg-palace-bg flex items-center justify-center">
        <div className="text-palace-text/50 font-cinzel">Loading review deck…</div>
      </div>
    );
  }

  if (total === 0) {
    return (
      <div className="min-h-screen bg-palace-bg flex flex-col items-center justify-center px-4">
        <h1 className="font-cinzel text-3xl text-palace-text mb-4">Your review deck is empty</h1>
        <p className="text-palace-text/50 mb-8">Open a story and click unfamiliar words to add them here.</p>
        <DirectionToggle />
      </div>
    );
  }

  if (!current || !currentWord) {
    return (
      <div className="min-h-screen bg-palace-bg flex flex-col items-center justify-center px-4">
        <h1 className="font-cinzel text-3xl text-palace-text mb-4">All caught up 🎉</h1>
        <p className="text-palace-text/50 mb-8">{total} card{total === 1 ? '' : 's'} in your deck, none due.</p>
        <DirectionToggle />
      </div>
    );
  }

  const promptText = getSourceText(currentWord);
  const answerText = getTargetText(currentWord);

  return (
    <div className="min-h-screen bg-palace-bg">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-palace-bg/95 backdrop-blur-md border-b border-palace-text/10 px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <button
            onClick={() => setLocation('/')}
            className="flex items-center gap-2 text-palace-text/70 hover:text-palace-gold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-cinzel hidden sm:inline">Back</span>
          </button>
          <span className="font-cinzel text-palace-text">
            {queue.length} due · {total} total
          </span>
          <DirectionToggle compact />
        </div>
      </nav>

      <div className="px-4 py-8 max-w-xl mx-auto">
        {/* Direction labels */}
        <div className="flex justify-between text-xs text-palace-text/40 font-cinzel mb-2 uppercase">
          <span>{sourceLabel} → {targetLabel}</span>
          <span>Card {total - queue.length + 1} of {total}</span>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-palace-text/20 bg-palace-bg/50 p-10 text-center">
          <span className="text-palace-text/50 text-sm font-cinzel block mb-4">{sourceLabel}</span>
          <div className="text-4xl font-cinzel text-palace-text mb-2">{promptText}</div>

          {revealed && (
            <>
              <div className="my-6 border-t border-palace-text/10" />
              <span className="text-palace-gold text-sm font-cinzel block mb-2">{targetLabel}</span>
              <div className="text-3xl font-cinzel text-palace-gold">{answerText}</div>
              {'pronunciation' in currentWord && currentWord.pronunciation && (
                <p className="text-palace-text/50 mt-2">/{currentWord.pronunciation}/</p>
              )}
              <button
                onClick={() => speak(answerText)}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-palace-gold/10 text-palace-gold hover:bg-palace-gold/20 transition-colors"
              >
                <Volume2 className="w-4 h-4" />
                <span className="text-sm font-cinzel">Listen</span>
              </button>
            </>
          )}

          {!revealed && (
            <button
              onClick={() => setRevealed(true)}
              className="mt-8 px-6 py-3 rounded-full bg-palace-gold text-palace-bg font-cinzel font-semibold hover:bg-palace-text transition-colors"
            >
              Show answer
            </button>
          )}
        </div>

        {/* Rating buttons */}
        {revealed && (
          <div className="grid grid-cols-4 gap-2 mt-4">
            <button onClick={() => rate(Rating.Again)} className="py-3 rounded-xl bg-rose-600/80 text-white font-cinzel hover:bg-rose-600 transition-colors">
              Again
            </button>
            <button onClick={() => rate(Rating.Hard)} className="py-3 rounded-xl bg-amber-500/80 text-white font-cinzel hover:bg-amber-500 transition-colors">
              Hard
            </button>
            <button onClick={() => rate(Rating.Good)} className="py-3 rounded-xl bg-emerald-600/80 text-white font-cinzel hover:bg-emerald-600 transition-colors">
              Good
            </button>
            <button onClick={() => rate(Rating.Easy)} className="py-3 rounded-xl bg-sky-600/80 text-white font-cinzel hover:bg-sky-600 transition-colors">
              Easy
            </button>
          </div>
        )}

        <div className="mt-6 text-center">
          <button onClick={drop} className="text-xs text-palace-text/30 hover:text-palace-text/60 font-cinzel">
            Remove this word from deck
          </button>
        </div>
      </div>
    </div>
  );
}
