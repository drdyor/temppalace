import { useEffect, useMemo, useRef, useState } from 'react';
import { useFSRS } from '../hooks/useFSRS';
import { useLanguage } from '../context/LanguageContext';
import { getTtsCode } from '../lib/language-config';

interface Props {
  text: string;
  lang?: string;
  rate?: number;
  onUnknownWord?: (word: string) => void;
}

interface Token {
  id: number;
  text: string;
  isWord: boolean;
  start: number;
}

function tokenize(text: string): Token[] {
  const tokens: Token[] = [];
  const regex = /(\s+|[^\s\p{L}\p{N}']+)/u;
  let pos = 0;
  let id = 0;
  const parts = text.split(regex).filter((p) => p !== undefined && p !== '');
  for (const part of parts) {
    tokens.push({
      id: id++,
      text: part,
      isWord: /[\p{L}\p{N}]/u.test(part),
      start: pos,
    });
    pos += part.length;
  }
  return tokens;
}

function stripPunct(w: string): string {
  return w.toLowerCase().replace(/[^\p{L}\p{N}']/gu, '');
}

export function StoryReader({ text, lang, rate = 0.9, onUnknownWord }: Props) {
  const { currentLanguage } = useLanguage();
  const effectiveLang = lang ?? getTtsCode(currentLanguage);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [savedIds, setSavedIds] = useState<Set<number>>(new Set());
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { addWord } = useFSRS();

  const tokens = useMemo(() => tokenize(text), [text]);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const findTokenAtChar = (charIndex: number): Token | null => {
    for (const t of tokens) {
      if (!t.isWord) continue;
      if (charIndex >= t.start && charIndex < t.start + t.text.length) return t;
    }
    for (let i = tokens.length - 1; i >= 0; i--) {
      const t = tokens[i];
      if (t.isWord && charIndex >= t.start) return t;
    }
    return null;
  };

  const play = () => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = effectiveLang;
    utterance.rate = rate;

    utterance.onboundary = (event) => {
      if (event.name !== 'word') return;
      const t = findTokenAtChar(event.charIndex);
      if (t) {
        setActiveId(t.id);
        const el = containerRef.current?.querySelector(`[data-tok="${t.id}"]`) as HTMLElement | null;
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
    utterance.onend = () => {
      setIsPlaying(false);
      setActiveId(null);
    };
    utterance.onerror = () => {
      setIsPlaying(false);
      setActiveId(null);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setActiveId(null);
  };

  const handleWordClick = async (t: Token) => {
    if (!t.isWord) return;
    const normalized = stripPunct(t.text);
    if (!normalized) return;
    await addWord(normalized);
    setSavedIds((prev) => new Set(prev).add(t.id));
    onUnknownWord?.(normalized);
  };

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button
          onClick={play}
          disabled={isPlaying}
          className="px-4 py-2 rounded-md bg-emerald-600 text-white disabled:opacity-50"
        >
          ▶ Play
        </button>
        <button
          onClick={stop}
          disabled={!isPlaying}
          className="px-4 py-2 rounded-md bg-rose-600 text-white disabled:opacity-50"
        >
          ■ Stop
        </button>
        <span className="ml-auto self-center text-sm text-neutral-500">
          Click any word to add it to your review deck
        </span>
      </div>

      <div
        ref={containerRef}
        className="story-text text-lg leading-relaxed whitespace-pre-wrap"
      >
        {tokens.map((t) => {
          if (!t.isWord) return <span key={t.id}>{t.text}</span>;
          const isActive = activeId === t.id;
          const isSaved = savedIds.has(t.id);
          return (
            <span
              key={t.id}
              data-tok={t.id}
              onClick={() => handleWordClick(t)}
              className={[
                'cursor-pointer rounded px-0.5 transition-colors',
                isActive ? 'bg-yellow-300' : 'hover:bg-yellow-100',
                isSaved ? 'underline decoration-sky-500 decoration-2 underline-offset-2' : '',
              ].join(' ')}
              title="Click to add to review"
            >
              {t.text}
            </span>
          );
        })}
      </div>
    </div>
  );
}
