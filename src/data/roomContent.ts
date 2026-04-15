export type DifficultyLevel = 'basic' | 'intermediate' | 'advanced';

export interface ContentLevel {
  id: string;
  level: DifficultyLevel;
  year: number;
  unit: string;
  title: string;
  isLocked: boolean;
  unlockRequirement?: string;
}

export interface RoomContent {
  roomId: string;
  levels: ContentLevel[];
}

// Each room contains content from Years 7, 8, and 9
// Students can unlock higher years after mastering basics
export const roomContents: RoomContent[] = [
  {
    roomId: 'entrance-hall',
    levels: [
      {
        id: 'y7-entrance',
        level: 'basic',
        year: 7,
        unit: 'Unit 1',
        title: 'Describing Things and People',
        isLocked: false,
      },
      {
        id: 'y8-entrance',
        level: 'intermediate',
        year: 8,
        unit: 'Unit 1',
        title: 'Revisiting être & avoir',
        isLocked: true,
        unlockRequirement: 'Complete Year 7 basics',
      },
      {
        id: 'y9-entrance',
        level: 'advanced',
        year: 9,
        unit: 'Unit 1',
        title: 'Complex Descriptions',
        isLocked: true,
        unlockRequirement: 'Master Year 8 content',
      },
    ],
  },
  {
    roomId: 'kitchen',
    levels: [
      {
        id: 'y7-kitchen',
        level: 'basic',
        year: 7,
        unit: 'Unit 2',
        title: 'Faire & Daily Routines',
        isLocked: false,
      },
      {
        id: 'y8-kitchen',
        level: 'intermediate',
        year: 8,
        unit: 'Unit 2',
        title: 'Advanced Faire Expressions',
        isLocked: true,
        unlockRequirement: 'Complete Year 7 basics',
      },
      {
        id: 'y9-kitchen',
        level: 'advanced',
        year: 9,
        unit: 'Unit 5',
        title: 'Faire in Past Tense',
        isLocked: true,
        unlockRequirement: 'Master Year 8 content',
      },
    ],
  },
  {
    roomId: 'library',
    levels: [
      {
        id: 'y7-library',
        level: 'basic',
        year: 7,
        unit: 'Unit 2-3',
        title: 'Regular -ER Verbs',
        isLocked: false,
      },
      {
        id: 'y8-library',
        level: 'intermediate',
        year: 8,
        unit: 'Unit 4',
        title: '-ER Verbs in Perfect Tense',
        isLocked: true,
        unlockRequirement: 'Complete Year 7 basics',
      },
      {
        id: 'y9-library',
        level: 'advanced',
        year: 9,
        unit: 'Unit 5',
        title: 'Complex -ER Patterns',
        isLocked: true,
        unlockRequirement: 'Master Year 8 content',
      },
    ],
  },
  {
    roomId: 'bedroom',
    levels: [
      {
        id: 'y7-bedroom',
        level: 'basic',
        year: 7,
        unit: 'Unit 3',
        title: 'Family & Descriptions',
        isLocked: false,
      },
      {
        id: 'y8-bedroom',
        level: 'intermediate',
        year: 8,
        unit: 'Unit 1',
        title: 'Advanced Possessives',
        isLocked: true,
        unlockRequirement: 'Complete Year 7 basics',
      },
      {
        id: 'y9-bedroom',
        level: 'advanced',
        year: 9,
        unit: 'Unit 4',
        title: 'Complex Family Relations',
        isLocked: true,
        unlockRequirement: 'Master Year 8 content',
      },
    ],
  },
  {
    roomId: 'garden',
    levels: [
      {
        id: 'y7-garden',
        level: 'basic',
        year: 7,
        unit: 'Unit 4',
        title: 'Aller & Places',
        isLocked: false,
      },
      {
        id: 'y8-garden',
        level: 'intermediate',
        year: 8,
        unit: 'Unit 3',
        title: 'Advanced Prepositions',
        isLocked: true,
        unlockRequirement: 'Complete Year 7 basics',
      },
      {
        id: 'y9-garden',
        level: 'advanced',
        year: 9,
        unit: 'Unit 3-4',
        title: 'Futur Proche & Movement',
        isLocked: true,
        unlockRequirement: 'Master Year 8 content',
      },
    ],
  },
  {
    roomId: 'study',
    levels: [
      {
        id: 'y7-study',
        level: 'basic',
        year: 7,
        unit: 'Unit 5',
        title: 'Questions & Negation',
        isLocked: false,
      },
      {
        id: 'y8-study',
        level: 'intermediate',
        year: 8,
        unit: 'Unit 5',
        title: 'Advanced Negation',
        isLocked: true,
        unlockRequirement: 'Complete Year 7 basics',
      },
      {
        id: 'y9-study',
        level: 'advanced',
        year: 9,
        unit: 'Unit 6',
        title: 'Complex Questions',
        isLocked: true,
        unlockRequirement: 'Master Year 8 content',
      },
    ],
  },
  {
    roomId: 'living-room',
    levels: [
      {
        id: 'y7-living',
        level: 'basic',
        year: 7,
        unit: 'Unit 6',
        title: 'Modal Verbs',
        isLocked: false,
      },
      {
        id: 'y8-living',
        level: 'intermediate',
        year: 8,
        unit: 'Unit 5',
        title: 'Savoir vs Connaître',
        isLocked: true,
        unlockRequirement: 'Complete Year 7 basics',
      },
      {
        id: 'y9-living',
        level: 'advanced',
        year: 9,
        unit: 'Unit 4-6',
        title: 'Modal Verbs in All Tenses',
        isLocked: true,
        unlockRequirement: 'Master Year 8 content',
      },
    ],
  },
  {
    roomId: 'gallery',
    levels: [
      {
        id: 'y8-gallery',
        level: 'intermediate',
        year: 8,
        unit: 'Unit 1-2',
        title: 'Perfect Tense with Avoir',
        isLocked: false,
      },
      {
        id: 'y8-gallery-2',
        level: 'intermediate',
        year: 8,
        unit: 'Unit 6',
        title: 'Perfect Tense with Être',
        isLocked: true,
        unlockRequirement: 'Master avoir perfect tense',
      },
      {
        id: 'y9-gallery',
        level: 'advanced',
        year: 9,
        unit: 'Unit 5-6',
        title: 'Past Tense Mastery',
        isLocked: true,
        unlockRequirement: 'Master both perfect tenses',
      },
    ],
  },
];

export const getRoomContent = (roomId: string): RoomContent | undefined => {
  return roomContents.find(rc => rc.roomId === roomId);
};

// Progress tracking (in-memory for now, can be localStorage later)
export class ProgressTracker {
  private static instance: ProgressTracker;
  private completedLevels: Set<string> = new Set();

  static getInstance(): ProgressTracker {
    if (!ProgressTracker.instance) {
      ProgressTracker.instance = new ProgressTracker();
    }
    return ProgressTracker.instance;
  }

  completeLevel(levelId: string): void {
    this.completedLevels.add(levelId);
    // Persist to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('memoryPalaceProgress', JSON.stringify([...this.completedLevels]));
    }
  }

  isLevelCompleted(levelId: string): boolean {
    return this.completedLevels.has(levelId);
  }

  canUnlockLevel(level: ContentLevel): boolean {
    if (!level.isLocked) return true;
    // Simple logic: if basic year 7, always unlock
    if (level.year === 7 && level.level === 'basic') return true;
    // For higher levels, check if previous level is completed
    return false;
  }

  loadProgress(): void {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('memoryPalaceProgress');
      if (saved) {
        this.completedLevels = new Set(JSON.parse(saved));
      }
    }
  }
}
