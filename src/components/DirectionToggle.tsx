import { ArrowRightLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getLangConfig } from '../lib/language-config';

export default function DirectionToggle({ compact = false }: { compact?: boolean }) {
  const { currentLanguage, learningDirection, setLearningDirection } = useLanguage();
  const cfg = getLangConfig(currentLanguage);

  const isTarget = learningDirection === 'target';

  const label = isTarget
    ? `EN → ${cfg.nativeName}`
    : `${cfg.nativeName} → EN`;

  if (compact) {
    return (
      <button
        onClick={() => setLearningDirection(isTarget ? 'inverse' : 'target')}
        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-cinzel
          bg-palace-text/10 text-palace-text/70 hover:bg-palace-gold/20 hover:text-palace-gold
          transition-colors"
        title="Swap learning direction"
      >
        <ArrowRightLeft className="w-3 h-3" />
        {label}
      </button>
    );
  }

  return (
    <button
      onClick={() => setLearningDirection(isTarget ? 'inverse' : 'target')}
      className="flex items-center gap-2 px-4 py-2 rounded-full font-cinzel text-sm
        bg-palace-text/10 text-palace-text/70 hover:bg-palace-gold/20 hover:text-palace-gold
        transition-colors border border-palace-text/10"
      title="Swap learning direction"
    >
      <ArrowRightLeft className="w-4 h-4" />
      <span>{label}</span>
    </button>
  );
}
