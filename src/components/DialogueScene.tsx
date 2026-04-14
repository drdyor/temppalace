import { useState, useEffect, useRef } from 'react';
import { X, Volume2, Sparkles, AlertCircle, CheckCircle, Info, Trophy, TrendingUp } from 'lucide-react';
import type { BranchingScenario, DialogueNode } from '../data/cultural-fluency';
import { useDialogueProgress } from '../context/DialogueProgressContext';

interface DialogueSceneProps {
  scenario: BranchingScenario;
  onClose: () => void;
  onComplete?: (result: { success: boolean; culturalNotes: string[] }) => void;
}

interface HistoryEntry {
  node: DialogueNode;
  choiceText?: string;
}

// Sound effects (placeholder - would integrate with actual audio)
const playSound = (type: 'click' | 'success' | 'fail' | 'complete') => {
  // In real implementation, play actual audio files
  console.log(`Playing ${type} sound`);
};

export default function DialogueScene({ scenario, onClose, onComplete }: DialogueSceneProps) {
  const [currentNodeId, setCurrentNodeId] = useState<string>(scenario.startNodeId);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [culturalNotes, setCulturalNotes] = useState<string[]>([]);
  const [showLesson, setShowLesson] = useState(false);
  const [isEnding, setIsEnding] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showNewAchievement, setShowNewAchievement] = useState<string | null>(null);
  
  const { completeScenario, hasAchievement, progress } = useDialogueProgress();
  const dialogueRef = useRef<HTMLDivElement>(null);

  const currentNode = scenario.nodes[currentNodeId];

  // Get cat expression with animation state
  const getCatExpression = (effect?: string) => {
    switch (effect) {
      case 'happy': return { emoji: '😺', label: 'happy', tail: 'wag', animation: 'bounce' };
      case 'angry': return { emoji: '😾', label: 'stern', tail: 'stiff', animation: 'shake' };
      case 'surprised': return { emoji: '🙀', label: 'surprised', tail: 'up', animation: 'pulse' };
      default: return { emoji: '🐱', label: 'neutral', tail: 'still', animation: 'none' };
    }
  };

  // Get speaker display info
  const getSpeakerInfo = (speaker: string) => {
    switch (speaker) {
      case 'user': return { name: 'You', color: 'bg-palace-gold/20 text-palace-gold', icon: '👤' };
      case 'npc': return { name: 'Barista Cat', color: 'bg-palace-blue/20 text-palace-blue', icon: '🐱' };
      case 'narrator': return { name: 'Narrator', color: 'bg-palace-text/10 text-palace-text/60', icon: '📖' };
      default: return { name: speaker, color: 'bg-palace-text/10', icon: '💬' };
    }
  };

  const handleChoice = (choiceIndex: number) => {
    const choice = currentNode?.choices?.[choiceIndex];
    if (!choice) return;
    
    playSound('click');
    setIsTransitioning(true);
    
    // Add current node to history with animation
    setHistory(prev => [...prev, { node: currentNode, choiceText: choice.text }]);

    // Track cultural notes
    if (choice.effect?.culturalNote) {
      setCulturalNotes(prev => [...prev, choice.effect!.culturalNote!]);
    }

    // Delay for transition
    setTimeout(() => {
      if (scenario.nodes[choice.nextNodeId]) {
        setCurrentNodeId(choice.nextNodeId);
        setIsTransitioning(false);
        
        // Scroll to bottom
        dialogueRef.current?.scrollTo({ top: dialogueRef.current.scrollHeight, behavior: 'smooth' });
      }
    }, 400);
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'it-IT';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Check if current node is an ending
  const isEndNode = !currentNode?.choices || currentNode.choices.length === 0;

  // Auto-detect ending
  useEffect(() => {
    if (isEndNode && !isEnding) {
      setIsEnding(true);
      playSound('complete');
      
      // Calculate mood
      const mistakes = culturalNotes.length;
      const mood: 'perfect' | 'good' | 'mixed' | 'poor' = mistakes === 0 ? 'perfect' : mistakes === 1 ? 'good' : mistakes <= 2 ? 'mixed' : 'poor';
      
      // Save progress
      const attempt = {
        scenarioId: scenario.id,
        completedAt: new Date().toISOString(),
        success: mistakes <= 1,
        culturalNotes,
        choicesMade: history.map(h => h.choiceText || '').filter(Boolean),
        mood,
      };
      
      completeScenario(attempt);
      
      // Check for new achievements
      const checkNewAchievements = () => {
        const newAchievements = [];
        if (!hasAchievement('first_conversation') && progress.completedScenarios.length === 0) {
          newAchievements.push('first_conversation');
        }
        if (mood === 'perfect' && !hasAchievement('perfect_manners')) {
          newAchievements.push('perfect_manners');
        }
        
        if (newAchievements.length > 0) {
          setShowNewAchievement(newAchievements[0]);
          setTimeout(() => setShowNewAchievement(null), 4000);
        }
      };
      
      checkNewAchievements();
      
      setTimeout(() => {
        setShowLesson(true);
      }, 1500);
    }
  }, [isEndNode, isEnding, culturalNotes, history, scenario.id, completeScenario, hasAchievement, progress.completedScenarios.length]);

  const handleComplete = () => {
    const success = culturalNotes.length <= 1;
    
    onComplete?.({
      success,
      culturalNotes: scenario.culturalLesson ? [scenario.culturalLesson, ...culturalNotes] : culturalNotes
    });
    onClose();
  };

  const catMood = getCatExpression(currentNode?.backgroundEffect);
  const speaker = getSpeakerInfo(currentNode?.speaker || 'narrator');

  // Achievement display names
  const achievementNames: Record<string, { name: string; emoji: string; desc: string }> = {
    first_conversation: { name: 'First Conversation', emoji: '🗣️', desc: 'Completed your first dialogue' },
    social_butterfly: { name: 'Social Butterfly', emoji: '🦋', desc: 'Completed 5 dialogues' },
    perfect_manners: { name: 'Perfect Manners', emoji: '✨', desc: 'Completed a scenario without mistakes' },
    beloved_foreign: { name: 'Beloved Foreigner', emoji: '❤️', desc: 'Reached 80% reputation' },
  };

  return (
    <div className="fixed inset-0 z-[100] bg-palace-bg flex flex-col">
      {/* Achievement Toast */}
      {showNewAchievement && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="bg-gradient-to-r from-yellow-500/20 via-palace-gold/20 to-yellow-500/20 border-2 border-palace-gold rounded-2xl px-6 py-4 shadow-2xl flex items-center gap-4">
            <Trophy className="w-8 h-8 text-palace-gold animate-bounce" />
            <div>
              <p className="text-palace-gold font-cinzel font-bold text-lg">Achievement Unlocked!</p>
              <p className="text-palace-text">
                {achievementNames[showNewAchievement]?.emoji} {achievementNames[showNewAchievement]?.name}
              </p>
              <p className="text-palace-text/60 text-sm">{achievementNames[showNewAchievement]?.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-palace-bg/95 border-b border-palace-text/10 backdrop-blur-md">
        <div>
          <h2 className="font-cinzel text-xl text-palace-text">{scenario.title}</h2>
          <p className="text-palace-gold text-sm font-cinzel">{scenario.titleNative}</p>
        </div>
        <div className="flex items-center gap-4">
          {/* Reputation Score */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-palace-text/5">
            <TrendingUp className="w-4 h-4 text-palace-gold" />
            <span className="text-palace-text font-cinzel">Reputation: {progress.reputationScore}%</span>
          </div>
          <span className="text-palace-text/50 text-sm">{scenario.timeContext}</span>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-palace-text/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-palace-text/70" />
          </button>
        </div>
      </header>

      {/* Main Scene Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden" ref={dialogueRef}>
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-palace-gold/10 via-transparent to-palace-bg" />
          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-palace-gold/30 rounded-full animate-float"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${20 + (i % 3) * 25}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + i * 0.5}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Character Area - Simplified reliable version */}
        <div className="relative mb-8">
          <div className="relative">
            {/* Glow effect */}
            <div 
              className="absolute inset-0 blur-3xl opacity-30 transition-colors duration-500"
              style={{ 
                backgroundColor: currentNode?.backgroundEffect === 'happy' ? '#22c55e' :
                  currentNode?.backgroundEffect === 'angry' ? '#ef4444' :
                  currentNode?.backgroundEffect === 'surprised' ? '#eab308' : '#e7a04d'
              }}
            />
            
            {/* Cat Avatar - Simple emoji with CSS transition */}
            <div 
              className="relative w-40 h-40 rounded-full bg-palace-bg border-4 flex items-center justify-center shadow-2xl transition-all duration-300"
              style={{
                borderColor: currentNode?.backgroundEffect === 'happy' ? '#22c55e' :
                  currentNode?.backgroundEffect === 'angry' ? '#ef4444' :
                  currentNode?.backgroundEffect === 'surprised' ? '#eab308' : 'rgba(231, 160, 77, 0.3)',
                transform: isTransitioning ? 'scale(0.95)' : 'scale(1)'
              }}
            >
              <span className="text-7xl">{catMood.emoji}</span>
            </div>

            {/* Simple mood label */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
              <span 
                className="px-3 py-1 rounded-full text-xs uppercase tracking-wider"
                style={{
                  backgroundColor: currentNode?.backgroundEffect === 'happy' ? 'rgba(34, 197, 94, 0.2)' :
                    currentNode?.backgroundEffect === 'angry' ? 'rgba(239, 68, 68, 0.2)' :
                    currentNode?.backgroundEffect === 'surprised' ? 'rgba(234, 179, 8, 0.2)' : 'rgba(231, 160, 77, 0.2)',
                  color: currentNode?.backgroundEffect === 'happy' ? '#22c55e' :
                    currentNode?.backgroundEffect === 'angry' ? '#ef4444' :
                    currentNode?.backgroundEffect === 'surprised' ? '#eab308' : '#e7a04d'
                }}
              >
                {catMood.label}
              </span>
            </div>
          </div>
        </div>

        {/* Dialogue Box */}
        <div className={`w-full max-w-2xl space-y-4 transition-all duration-300 ${isTransitioning ? 'opacity-50 translate-y-2' : 'opacity-100'}`}>
          {/* Speaker Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${speaker.color} backdrop-blur-sm`}>
            <span className="text-lg">{speaker.icon}</span>
            <span className="font-cinzel text-sm">{speaker.name}</span>
          </div>

          {/* Text Box with typewriter effect potential */}
          <div className="bg-palace-bg/90 border-2 border-palace-gold/30 rounded-2xl p-6 backdrop-blur-md shadow-2xl relative overflow-hidden">
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shine" />
            
            <p className="text-palace-text text-xl leading-relaxed font-cinzel relative z-10">
              {currentNode?.text}
            </p>
            
            {/* Speak button */}
            <button
              onClick={() => speak(currentNode?.text || '')}
              className="mt-4 flex items-center gap-2 text-palace-text/50 hover:text-palace-gold transition-colors text-sm group"
            >
              <Volume2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Listen
            </button>
          </div>

          {/* Choice Buttons with hover effects */}
          {!isEndNode && (
            <div className="grid gap-3">
              {currentNode?.choices?.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => handleChoice(index)}
                  disabled={isTransitioning}
                  className="group text-left p-4 rounded-xl border border-palace-text/20 bg-palace-bg/50 hover:border-palace-gold hover:bg-palace-gold/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-palace-gold/0 via-palace-gold/5 to-palace-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  
                  <div className="flex items-start gap-3 relative z-10">
                    <span className="w-8 h-8 rounded-full bg-palace-text/10 flex items-center justify-center text-palace-text/60 group-hover:bg-palace-gold group-hover:text-palace-bg transition-all duration-300 font-cinzel font-bold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1 text-palace-text group-hover:text-palace-gold transition-colors duration-300">
                      {choice.text}
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-palace-gold transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Ending State */}
          {isEndNode && !showLesson && (
            <div className="text-center animate-in fade-in zoom-in duration-500">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-palace-gold/20 text-palace-gold animate-pulse">
                <Sparkles className="w-5 h-5" />
                <span className="font-cinzel">Scene Complete</span>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Cultural Lesson Modal */}
      {showLesson && (
        <div className="absolute inset-0 z-10 bg-palace-bg/95 backdrop-blur-lg flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="max-w-lg w-full bg-palace-bg border-2 border-palace-gold/30 rounded-2xl p-8 shadow-2xl animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-palace-gold/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-palace-gold" />
              </div>
              <h3 className="font-cinzel text-2xl text-palace-text">Cultural Lesson</h3>
            </div>

            {/* Main Lesson */}
            {scenario.culturalLesson && (
              <div className="mb-6 p-4 rounded-xl bg-palace-gold/10 border border-palace-gold/30">
                <p className="text-palace-text">{scenario.culturalLesson}</p>
              </div>
            )}

            {/* Collected Notes */}
            {culturalNotes.length > 0 && (
              <div className="space-y-3 mb-6">
                <h4 className="text-palace-text/60 text-sm uppercase tracking-wide">What You Learned</h4>
                {culturalNotes.map((note, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-palace-text/5 animate-in slide-in-from-left-2" style={{ animationDelay: `${i * 100}ms` }}>
                    <Info className="w-5 h-5 text-palace-gold flex-shrink-0 mt-0.5" />
                    <p className="text-palace-text/80 text-sm">{note}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Success/Warning Status */}
            <div className={`p-4 rounded-xl mb-6 ${
              culturalNotes.length === 0 
                ? 'bg-green-500/10 border border-green-500/30' 
                : 'bg-yellow-500/10 border border-yellow-500/30'
            }`}>
              <div className="flex items-center gap-3">
                {culturalNotes.length === 0 ? (
                  <>
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <div>
                      <p className="text-green-500 font-cinzel">Perfect!</p>
                      <p className="text-green-500/70 text-sm">You navigated this situation flawlessly.</p>
                    </div>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-6 h-6 text-yellow-500" />
                    <div>
                      <p className="text-yellow-500 font-cinzel">Good Effort!</p>
                      <p className="text-yellow-500/70 text-sm">There were some cultural nuances to learn.</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-3 rounded-lg bg-palace-text/5 text-center">
                <p className="text-palace-text/50 text-xs">Reputation</p>
                <p className="text-palace-gold font-cinzel text-xl">{progress.reputationScore}%</p>
              </div>
              <div className="p-3 rounded-lg bg-palace-text/5 text-center">
                <p className="text-palace-text/50 text-xs">Completed</p>
                <p className="text-palace-gold font-cinzel text-xl">{progress.completedScenarios.length}</p>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={handleComplete}
              className="w-full py-4 bg-palace-gold text-palace-bg font-cinzel font-semibold rounded-xl hover:bg-palace-text transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
