import { useState, useCallback, useMemo } from 'react';
import type { PracticeScenario } from '@/data/practice-scenarios';
import { Button } from '@/components/ui/button';
import { Lightbulb, CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';

interface PracticeCardProps {
  scenarios: PracticeScenario[];
  sourceLang: string;   // e.g. 'it'
  targetLang: string;   // e.g. 'en'
  onComplete?: () => void;
}

type AnswerState = 'idle' | 'correct' | 'wrong';

export function PracticeCard({ scenarios, sourceLang, targetLang, onComplete }: PracticeCardProps) {
  const [index, setIndex] = useState(0);
  const [answerState, setAnswerState] = useState<AnswerState>('idle');
  const [selectedWrong, setSelectedWrong] = useState(false);
  const [shuffled, setShuffled] = useState(true);

  const scenario = scenarios[index];
  const isLast = index === scenarios.length - 1;

  const options = useMemo(() => {
    if (!scenario) return [];
    const opts = [
      { text: scenario.wrongOption.text, correct: false },
      { text: scenario.correctOption.text, correct: true },
    ];
    // Shuffle on first render of each scenario
    return shuffled ? opts.sort(() => Math.random() - 0.5) : opts;
  }, [scenario, shuffled]);

  const handleSelect = useCallback((isCorrect: boolean) => {
    if (answerState !== 'idle') return;
    setAnswerState(isCorrect ? 'correct' : 'wrong');
    setSelectedWrong(!isCorrect);
  }, [answerState]);

  const handleNext = useCallback(() => {
    if (isLast) {
      onComplete?.();
      return;
    }
    setIndex(prev => prev + 1);
    setAnswerState('idle');
    setSelectedWrong(false);
    setShuffled(true);
  }, [isLast, onComplete]);

  const handleRestart = useCallback(() => {
    setIndex(0);
    setAnswerState('idle');
    setSelectedWrong(false);
    setShuffled(true);
  }, []);

  if (!scenario) {
    return (
      <div className="bg-palace-bg/80 rounded-2xl p-6 border border-palace-text/10 text-center">
        <p className="text-palace-text/60">No practice scenarios available for this direction.</p>
      </div>
    );
  }

  const langName: Record<string, string> = {
    en: 'English',
    it: 'Italian',
    fr: 'French',
    es: 'Spanish',
  };

  return (
    <div className="bg-palace-bg/90 rounded-2xl border border-palace-text/10 overflow-hidden max-w-xl mx-auto">
      {/* Header */}
      <div className="bg-palace-text/5 px-5 py-3 border-b border-palace-text/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-palace-accent" />
          <span className="text-sm font-medium text-palace-text/80">
            Practice — {langName[targetLang]} via {langName[sourceLang]}
          </span>
        </div>
        <span className="text-xs text-palace-text/50">
          {index + 1} / {scenarios.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-palace-text/5">
        <div
          className="h-full bg-palace-accent transition-all duration-300"
          style={{ width: `${((index + 1) / scenarios.length) * 100}%` }}
        />
      </div>

      <div className="p-5 space-y-5">
        {/* Context */}
        <div>
          <p className="text-xs uppercase tracking-wide text-palace-text/40 mb-1">
            {scenario.category} — {scenario.level.toUpperCase()}
          </p>
          <h3 className="text-lg font-semibold text-palace-text leading-snug">
            {scenario.context}
          </h3>
          <p className="text-sm text-palace-text/70 mt-2">{scenario.question}</p>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {options.map((opt, i) => {
            const isRevealed = answerState !== 'idle';
            const isSelected =
              (answerState === 'correct' && opt.correct) ||
              (answerState === 'wrong' && !opt.correct && selectedWrong);

            let btnClass =
              'w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 text-sm leading-relaxed ';

            if (!isRevealed) {
              btnClass +=
                'bg-palace-bg border-palace-text/10 hover:border-palace-accent/40 hover:bg-palace-accent/5 text-palace-text cursor-pointer';
            } else if (opt.correct) {
              btnClass +=
                'bg-emerald-500/10 border-emerald-500/30 text-emerald-700';
            } else {
              btnClass +=
                'bg-red-500/5 border-red-500/20 text-red-700/80';
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(opt.correct)}
                disabled={isRevealed}
                className={btnClass}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0">
                    {isRevealed ? (
                      opt.correct ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-400" />
                      )
                    ) : (
                      <span className="flex items-center justify-center w-5 h-5 rounded-full border border-palace-text/20 text-xs text-palace-text/60">
                        {String.fromCharCode(65 + i)}
                      </span>
                    )}
                  </span>
                  <span>{opt.text}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback panel */}
        {answerState !== 'idle' && (
          <div className="rounded-xl bg-palace-text/5 border border-palace-text/10 p-4 space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="flex items-center gap-2">
              {answerState === 'correct' ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span className="font-semibold text-emerald-700">Correct!</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-red-400" />
                  <span className="font-semibold text-red-600">Not quite</span>
                </>
              )}
            </div>

            <div className="space-y-2">
              <p className="text-sm text-palace-text/80">
                <span className="font-medium text-palace-text">
                  Think like you&apos;re {langName[sourceLang]}:
                </span>{' '}
                {scenario.wrongOption.explanation}
              </p>
              <p className="text-sm text-palace-text/80">
                <span className="font-medium text-palace-text">Why:</span>{' '}
                {scenario.correctOption.explanation}
              </p>
              <div className="flex items-start gap-2 pt-1">
                <Lightbulb className="w-4 h-4 text-palace-accent shrink-0 mt-0.5" />
                <p className="text-sm text-palace-accent font-medium">{scenario.tip}</p>
              </div>
            </div>

            <Button
              onClick={handleNext}
              className="w-full bg-palace-accent hover:bg-palace-accent/90 text-white"
            >
              {isLast ? (
                <>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Restart
                </>
              ) : (
                <>
                  Next scenario
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PracticeCard;
