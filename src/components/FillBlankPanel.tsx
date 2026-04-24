import { useState, useMemo } from 'react';
import { X, ChevronRight, RotateCcw } from 'lucide-react';
import fillData from '../data/fill-stories.json';

interface FillSentence {
  it: string;
  en: string;
  handWord: string;
  distractors: string[];
}

interface FillStory {
  zoneId: string;
  zoneName: string;
  title: string;
  sentences: FillSentence[];
}

const stories = fillData as Record<string, FillStory>;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function blankSentence(it: string, word: string): string {
  const re = new RegExp(`\\b${word}\\b`, 'i');
  return it.replace(re, '___');
}

interface FillBlankPanelProps {
  zoneId: string;
  onClose: () => void;
}

export function FillBlankPanel({ zoneId, onClose }: FillBlankPanelProps) {
  const story = stories[zoneId];
  const [idx, setIdx] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const sentence = story?.sentences[idx];

  const options = useMemo(() => {
    if (!sentence) return [];
    return shuffle([sentence.handWord, ...sentence.distractors]);
  }, [sentence]);

  if (!story) {
    return (
      <div className="fixed inset-0 z-[60] bg-palace-bg backdrop-blur-md flex items-center justify-center p-4">
        <div className="text-palace-text/50 font-cinzel text-center">
          <p>No practice available for this zone yet.</p>
          <button onClick={onClose} className="mt-4 px-4 py-2 border border-palace-text/20 rounded-lg hover:text-palace-gold">Close</button>
        </div>
      </div>
    );
  }

  const pick = (word: string) => {
    if (chosen) return;
    setChosen(word);
    if (word === sentence.handWord) setScore(s => s + 1);
  };

  const next = () => {
    if (idx + 1 >= story.sentences.length) {
      setDone(true);
    } else {
      setIdx(i => i + 1);
      setChosen(null);
    }
  };

  const restart = () => {
    setIdx(0);
    setChosen(null);
    setScore(0);
    setDone(false);
  };

  return (
    <div className="fixed inset-0 z-[60] bg-palace-bg backdrop-blur-md overflow-y-auto p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-cinzel text-xl text-palace-gold">{story.zoneName}</h3>
            <p className="text-palace-text/50 text-xs mt-0.5">{story.title} · Fill in the blank</p>
          </div>
          <button onClick={onClose} className="p-2 text-palace-text/70 hover:text-palace-gold">
            <X className="w-6 h-6" />
          </button>
        </div>

        {done ? (
          <div className="text-center py-12">
            <p className="font-cinzel text-3xl text-palace-gold mb-2">{score}/{story.sentences.length}</p>
            <p className="text-palace-text/60 mb-8">
              {score === story.sentences.length ? 'Perfect!' : score >= story.sentences.length / 2 ? 'Good work' : 'Keep practising'}
            </p>
            <div className="flex justify-center gap-3">
              <button onClick={restart} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-palace-gold/40 text-palace-gold hover:bg-palace-gold/10 font-cinzel text-sm">
                <RotateCcw className="w-4 h-4" />
                Again
              </button>
              <button onClick={onClose} className="px-4 py-2 rounded-lg border border-palace-text/20 text-palace-text/60 hover:text-palace-gold font-cinzel text-sm">
                Close
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Progress */}
            <div className="flex items-center gap-2 mb-6">
              {story.sentences.map((_, i) => (
                <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${
                  i < idx ? 'bg-palace-gold' : i === idx ? 'bg-palace-gold/50' : 'bg-palace-text/10'
                }`} />
              ))}
            </div>

            {/* English context */}
            <p className="text-palace-text/50 text-sm italic mb-3">{sentence.en}</p>

            {/* Italian with blank */}
            <div className="bg-palace-text/5 border border-palace-text/10 rounded-2xl p-5 mb-6">
              <p className="text-palace-text text-lg font-medium leading-relaxed">
                {blankSentence(sentence.it, sentence.handWord)}
              </p>
            </div>

            {/* Answer buttons */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {options.map(opt => {
                const isCorrect = opt === sentence.handWord;
                const isChosen = opt === chosen;
                let cls = 'border border-palace-text/20 text-palace-text hover:border-palace-gold/40 hover:text-palace-gold';
                if (chosen) {
                  if (isCorrect) cls = 'border-green-500 bg-green-500/10 text-green-400';
                  else if (isChosen) cls = 'border-red-500 bg-red-500/10 text-red-400';
                  else cls = 'border-palace-text/10 text-palace-text/30';
                }
                return (
                  <button
                    key={opt}
                    onClick={() => pick(opt)}
                    className={`px-4 py-3 rounded-xl font-cinzel text-sm transition-all ${cls}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {chosen && (
              <div className="flex justify-end">
                <button
                  onClick={next}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-palace-gold/20 border border-palace-gold/40 text-palace-gold hover:bg-palace-gold/30 font-cinzel text-sm"
                >
                  {idx + 1 < story.sentences.length ? 'Next' : 'Finish'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
