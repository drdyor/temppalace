import { useMemo, useState } from 'react';
import { Volume2, RefreshCw, List, ChevronRight, ChevronLeft } from 'lucide-react';
import type { ExpandedPhrase, Register } from '../data/conversation-templates';

interface TemplateDrillProps {
  phrases: ExpandedPhrase[];
  title?: string;
}

type RegisterFilter = 'all' | Register;
const FILTERS: RegisterFilter[] = ['all', 'friendly', 'polite', 'family'];

export default function TemplateDrill({ phrases, title }: TemplateDrillProps) {
  const [filter, setFilter] = useState<RegisterFilter>('all');
  const [index, setIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(
    () => (filter === 'all' ? phrases : phrases.filter((p) => p.register === filter)),
    [phrases, filter]
  );

  const translatedCount = useMemo(
    () => filtered.filter((p) => p.italian).length,
    [filtered]
  );

  const setFilterReset = (f: RegisterFilter) => {
    setFilter(f);
    setIndex(0);
    setShowAll(false);
  };

  if (!phrases.length) {
    return (
      <div className="p-6 text-palace-text/60 font-cinzel">
        No phrases available for this template.
      </div>
    );
  }

  if (!filtered.length) {
    return (
      <div className="w-full max-w-2xl mx-auto p-6">
        <div className="bg-palace-bg/90 border-2 border-palace-gold/30 rounded-2xl p-6 backdrop-blur-md shadow-2xl">
          <FilterChips filter={filter} onChange={setFilterReset} />
          <p className="text-palace-text/60 font-cinzel text-center py-8">
            No phrases match this register.
          </p>
        </div>
      </div>
    );
  }

  const current = filtered[Math.min(index, filtered.length - 1)];
  const speak = (text: string) => {
    if (!text || !('speechSynthesis' in window)) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'it-IT';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  };
  const next = () => setIndex((i) => (i + 1) % filtered.length);
  const prev = () => setIndex((i) => (i - 1 + filtered.length) % filtered.length);

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="bg-palace-bg/90 border-2 border-palace-gold/30 rounded-2xl p-6 backdrop-blur-md shadow-2xl">
        <div className="mb-4 flex items-center justify-between flex-wrap gap-2">
          {title ? (
            <h3 className="font-cinzel text-lg text-palace-gold">{title}</h3>
          ) : <span />}
          <div className="flex items-center gap-2">
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                translatedCount === filtered.length
                  ? 'bg-palace-gold/20 text-palace-gold'
                  : 'bg-palace-text/10 text-palace-text/60'
              }`}
              title="Phrases with Italian translations"
            >
              {translatedCount} / {filtered.length} translated
            </span>
            <span className="text-xs uppercase tracking-wider text-palace-text/50 px-2 py-1 rounded-full bg-palace-text/5">
              {current.register}
            </span>
          </div>
        </div>

        <FilterChips filter={filter} onChange={setFilterReset} />

        {!showAll ? (
          <>
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm text-palace-text/50 uppercase tracking-wide mb-1">English</p>
                <p className="text-2xl text-palace-text font-cinzel leading-relaxed">
                  {current.english}
                </p>
              </div>

              <div className="border-t border-palace-gold/20 pt-4">
                <p className="text-sm text-palace-text/50 uppercase tracking-wide mb-1">Italian</p>
                <p
                  className={`text-2xl font-cinzel leading-relaxed ${
                    current.italian ? 'text-palace-gold' : 'text-palace-text/30 italic'
                  }`}
                >
                  {current.italian || '[Translate via DeepL]'}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                onClick={prev}
                disabled={filtered.length <= 1}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-palace-text/20 bg-palace-bg/50 hover:border-palace-gold hover:bg-palace-gold/10 transition-all disabled:opacity-30 text-palace-text"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Prev</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => speak(current.italian || current.english)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-palace-text/20 bg-palace-bg/50 hover:border-palace-gold hover:bg-palace-gold/10 transition-all text-palace-text"
                >
                  <Volume2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Listen</span>
                </button>

                <button
                  onClick={next}
                  disabled={filtered.length <= 1}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-palace-text/20 bg-palace-bg/50 hover:border-palace-gold hover:bg-palace-gold/10 transition-all disabled:opacity-30 text-palace-text"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span className="hidden sm:inline">Swap</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => setShowAll(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-palace-text/20 bg-palace-bg/50 hover:border-palace-gold hover:bg-palace-gold/10 transition-all text-palace-text"
              >
                <List className="w-4 h-4" />
                <span className="hidden sm:inline">All</span>
              </button>
            </div>

            <div className="mt-4 text-center text-sm text-palace-text/40">
              {index + 1} / {filtered.length}
            </div>
          </>
        ) : (
          <>
            <div className="space-y-3 mb-6 max-h-80 overflow-y-auto pr-2">
              {filtered.map((p, i) => (
                <div
                  key={p.id}
                  onClick={() => {
                    setIndex(i);
                    setShowAll(false);
                  }}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    i === index
                      ? 'border-palace-gold bg-palace-gold/10'
                      : 'border-palace-text/10 bg-palace-bg/50 hover:border-palace-gold/50'
                  }`}
                >
                  <p className="text-palace-text font-cinzel">{p.english}</p>
                  <p
                    className={`text-palace-gold font-cinzel mt-1 ${
                      p.italian ? '' : 'text-palace-text/30 italic'
                    }`}
                  >
                    {p.italian || '[Translate via DeepL]'}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowAll(false)}
              className="w-full py-3 rounded-xl border border-palace-gold/30 bg-palace-gold/10 text-palace-gold font-cinzel hover:bg-palace-gold/20 transition-all"
            >
              Back to drill
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function FilterChips({
  filter,
  onChange,
}: {
  filter: RegisterFilter;
  onChange: (f: RegisterFilter) => void;
}) {
  return (
    <div className="flex gap-2 mb-4 flex-wrap">
      {FILTERS.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={`px-3 py-1 rounded-full text-xs font-cinzel uppercase tracking-wider transition-colors ${
            filter === f
              ? 'bg-palace-gold text-palace-bg'
              : 'bg-palace-text/5 text-palace-text/60 hover:bg-palace-text/10'
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
