import { useState } from 'react';
import { PracticeCard } from './PracticeCard';
import { getScenariosForUser } from '@/data/practice-scenarios';
import { Brain } from 'lucide-react';

const DIRECTIONS = [
  { value: 'en-it', label: 'English ← Italian', source: 'it', target: 'en' },
  { value: 'en-fr', label: 'English ← French', source: 'fr', target: 'en' },
  { value: 'en-es', label: 'English ← Spanish', source: 'es', target: 'en' },
  { value: 'it-en', label: 'Italian ← English', source: 'en', target: 'it' },
  { value: 'fr-en', label: 'French ← English', source: 'en', target: 'fr' },
  { value: 'es-en', label: 'Spanish ← English', source: 'en', target: 'es' },
];

export function PatternsTab() {
  const [direction, setDirection] = useState('en-it');
  const [key, setKey] = useState(0); // force remount on direction change

  const dir = DIRECTIONS.find(d => d.value === direction)!;
  const scenarios = getScenariosForUser(dir.source, dir.target);

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <Brain className="w-5 h-5 text-palace-accent" />
          <h2 className="font-cinzel text-xl text-palace-text">Think Like You&apos;re...</h2>
        </div>
        <p className="text-sm text-palace-text/60 max-w-md mx-auto">
          Practice common translation traps. Pick your native language and learn how English really works.
        </p>
      </div>

      {/* Direction selector */}
      <div className="flex flex-wrap justify-center gap-2">
        {DIRECTIONS.map(d => (
          <button
            key={d.value}
            onClick={() => {
              setDirection(d.value);
              setKey(k => k + 1);
            }}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              direction === d.value
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
