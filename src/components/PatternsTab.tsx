import { useState, useEffect, useMemo } from 'react';
import { PracticeCard } from './PracticeCard';
import { getScenariosForUser } from '@/data/practice-scenarios';
import { Brain } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const DIRECTIONS = [
  { value: 'en-it', label: 'EN → IT', source: 'it', target: 'en' },
  { value: 'en-fr', label: 'EN → FR', source: 'fr', target: 'en' },
  { value: 'en-es', label: 'EN → ES', source: 'es', target: 'en' },
  { value: 'it-en', label: 'IT → EN', source: 'en', target: 'it' },
  { value: 'fr-en', label: 'FR → EN', source: 'en', target: 'fr' },
  { value: 'es-en', label: 'ES → EN', source: 'en', target: 'es' },
];

function deriveDirectionValue(currentLanguage: string, learningDirection: string): string {
  const langCode = currentLanguage === 'italian' ? 'it'
    : currentLanguage === 'french' ? 'fr'
    : currentLanguage === 'spanish' ? 'es'
    : 'it';

  if (learningDirection === 'inverse') {
    return `${langCode}-en`;
  }
  return `en-${langCode}`;
}

export function PatternsTab() {
  const { currentLanguage, learningDirection, setLearningDirection, setLanguage } = useLanguage();
  const [localDirection, setLocalDirection] = useState(deriveDirectionValue(currentLanguage, learningDirection));
  const [key, setKey] = useState(0);

  // Sync with global direction whenever it changes
  useEffect(() => {
    const globalDir = deriveDirectionValue(currentLanguage, learningDirection);
    if (globalDir !== localDirection) {
      setLocalDirection(globalDir);
      setKey(k => k + 1);
    }
  }, [currentLanguage, learningDirection, localDirection]);

  const dir = DIRECTIONS.find(d => d.value === localDirection) ?? DIRECTIONS[0];
  const scenarios = getScenariosForUser(dir.source, dir.target);

  const handleDirectionChange = (value: string) => {
    setLocalDirection(value);
    setKey(k => k + 1);

    // Also update global context so the rest of the app stays in sync
    const d = DIRECTIONS.find(x => x.value === value);
    if (!d) return;

    const langCode = d.value.startsWith('en-') ? d.value.slice(3) : d.value.slice(0, 2);
    const newLang: typeof currentLanguage =
      langCode === 'it' ? 'italian'
      : langCode === 'fr' ? 'french'
      : langCode === 'es' ? 'spanish'
      : 'italian';

    const newDirection = d.value.startsWith('en-') ? 'target' : 'inverse';

    if (newLang !== currentLanguage) {
      setLanguage(newLang);
    }
    if (newDirection !== learningDirection) {
      setLearningDirection(newDirection);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <Brain className="w-5 h-5 text-palace-accent" />
          <h2 className="font-cinzel text-xl text-palace-text">Think Like You&apos;re...</h2>
        </div>
        <p className="text-sm text-palace-text/60 max-w-md mx-auto">
          Practice common translation traps. Pick your native language and learn how the target language really works.
        </p>
      </div>

      {/* Direction selector */}
      <div className="flex flex-wrap justify-center gap-2">
        {DIRECTIONS.map(d => (
          <button
            key={d.value}
            onClick={() => handleDirectionChange(d.value)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              localDirection === d.value
                ? 'bg-palace-accent text-white'
                : 'bg-palace-text/10 text-palace-text/70 hover:bg-palace-text/20'
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      {scenarios.length > 0 ? (
        <PracticeCard
          key={key}
          scenarios={scenarios}
          sourceLang={dir.source}
          targetLang={dir.target}
        />
      ) : (
        <div className="text-center py-12 bg-palace-bg/50 rounded-2xl border border-palace-text/10">
          <p className="text-palace-text/50">Scenarios coming soon for this direction.</p>
        </div>
      )}
    </div>
  );
}

export default PatternsTab;
