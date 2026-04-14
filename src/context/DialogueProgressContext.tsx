import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface ScenarioAttempt {
  scenarioId: string;
  completedAt: string;
  success: boolean;
  culturalNotes: string[];
  choicesMade: string[];
  mood: 'perfect' | 'good' | 'mixed' | 'poor';
}

interface DialogueProgress {
  completedScenarios: string[];
  attempts: ScenarioAttempt[];
  reputationScore: number; // 0-100, affects how NPCs treat you
  culturalMastery: Record<string, number>; // ruleId -> mastery 0-100
  achievements: string[];
}

interface DialogueProgressContextType {
  progress: DialogueProgress;
  completeScenario: (attempt: ScenarioAttempt) => void;
  getScenarioMastery: (scenarioId: string) => number;
  getRuleMastery: (ruleId: string) => number;
  hasAchievement: (achievementId: string) => boolean;
  resetProgress: () => void;
}

const defaultProgress: DialogueProgress = {
  completedScenarios: [],
  attempts: [],
  reputationScore: 50, // Start neutral
  culturalMastery: {},
  achievements: [],
};

const DialogueProgressContext = createContext<DialogueProgressContextType | null>(null);

export function DialogueProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<DialogueProgress>(() => {
    // Load from localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dialogueProgress');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return defaultProgress;
        }
      }
    }
    return defaultProgress;
  });

  // Save to localStorage whenever progress changes
  const saveProgress = useCallback((newProgress: DialogueProgress) => {
    setProgress(newProgress);
    if (typeof window !== 'undefined') {
      localStorage.setItem('dialogueProgress', JSON.stringify(newProgress));
    }
  }, []);

  const completeScenario = useCallback((attempt: ScenarioAttempt) => {
    setProgress(prev => {
      const newProgress = { ...prev };
      
      // Track completion
      if (!newProgress.completedScenarios.includes(attempt.scenarioId)) {
        newProgress.completedScenarios.push(attempt.scenarioId);
      }
      
      // Add attempt
      newProgress.attempts.push(attempt);
      
      // Update reputation
      const reputationChange = attempt.success ? 5 : -2;
      newProgress.reputationScore = Math.max(0, Math.min(100, prev.reputationScore + reputationChange));
      
      // Update cultural mastery for each note learned
      attempt.culturalNotes.forEach(note => {
        const key = note.slice(0, 50); // Use first 50 chars as key
        newProgress.culturalMastery[key] = (newProgress.culturalMastery[key] || 0) + 10;
      });
      
      // Check achievements
      const newAchievements = [...newProgress.achievements];
      
      if (newProgress.completedScenarios.length >= 1 && !newAchievements.includes('first_conversation')) {
        newAchievements.push('first_conversation');
      }
      if (newProgress.completedScenarios.length >= 5 && !newAchievements.includes('social_butterfly')) {
        newAchievements.push('social_butterfly');
      }
      if (attempt.mood === 'perfect' && !newAchievements.includes('perfect_manners')) {
        newAchievements.push('perfect_manners');
      }
      if (newProgress.reputationScore >= 80 && !newAchievements.includes('beloved_foreign')) {
        newAchievements.push('beloved_foreign');
      }
      
      newProgress.achievements = newAchievements;
      
      saveProgress(newProgress);
      return newProgress;
    });
  }, [saveProgress]);

  const getScenarioMastery = useCallback((scenarioId: string) => {
    const attempts = progress.attempts.filter(a => a.scenarioId === scenarioId);
    if (attempts.length === 0) return 0;
    
    // Weight recent attempts more heavily
    const weighted = attempts.map((a, i) => ({
      success: a.success ? 1 : 0,
      weight: i + 1
    }));
    
    const totalWeight = weighted.reduce((sum, w) => sum + w.weight, 0);
    const weightedSum = weighted.reduce((sum, w) => sum + w.success * w.weight, 0);
    
    return Math.round((weightedSum / totalWeight) * 100);
  }, [progress.attempts]);

  const getRuleMastery = useCallback((ruleId: string) => {
    return progress.culturalMastery[ruleId] || 0;
  }, [progress.culturalMastery]);

  const hasAchievement = useCallback((achievementId: string) => {
    return progress.achievements.includes(achievementId);
  }, [progress.achievements]);

  const resetProgress = useCallback(() => {
    saveProgress(defaultProgress);
  }, [saveProgress]);

  return (
    <DialogueProgressContext.Provider value={{
      progress,
      completeScenario,
      getScenarioMastery,
      getRuleMastery,
      hasAchievement,
      resetProgress,
    }}>
      {children}
    </DialogueProgressContext.Provider>
  );
}

export function useDialogueProgress() {
  const context = useContext(DialogueProgressContext);
  if (!context) {
    throw new Error('useDialogueProgress must be used within DialogueProgressProvider');
  }
  return context;
}
