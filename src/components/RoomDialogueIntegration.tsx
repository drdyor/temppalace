// Example: How to integrate DialogueScene into RoomPage.tsx
// This shows you where to add the dialogue functionality

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import DialogueScene from './DialogueScene';
import DynamicScenario from './DynamicScenario';
import { branchingScenarios } from '../data/cultural-fluency';
import type { BranchingScenario } from '../data/cultural-fluency';

interface DialogueButtonProps {
  roomId: string;
  roomName: string;
}

export function DialogueButton({ roomId, roomName }: DialogueButtonProps) {
  const [activeScenario, setActiveScenario] = useState<BranchingScenario | null>(null);
  const [showDynamic, setShowDynamic] = useState(false);

  // Find scenarios for this room
  const roomScenarios = branchingScenarios.filter(s => s.roomId === roomId);

  const startScenario = (scenario: BranchingScenario) => {
    setActiveScenario(scenario);
  };

  if (activeScenario) {
    return (
      <DialogueScene
        scenario={activeScenario}
        onClose={() => setActiveScenario(null)}
        onComplete={(result) => {
          console.log('Completed scenario:', result);
          // Could save to progress here
          setActiveScenario(null);
        }}
      />
    );
  }

  if (showDynamic) {
    return (
      <DynamicScenario
        roomId={roomId}
        roomName={roomName}
        onClose={() => setShowDynamic(false)}
      />
    );
  }

  return (
    <div className="space-y-4">
      {/* Static Scenarios */}
      {roomScenarios.map(scenario => (
        <button
          key={scenario.id}
          onClick={() => startScenario(scenario)}
          className="w-full p-4 rounded-xl border border-palace-text/20 bg-palace-bg/50 hover:border-palace-gold hover:bg-palace-gold/10 transition-all text-left group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-palace-gold/20 flex items-center justify-center group-hover:bg-palace-gold group-hover:text-palace-bg transition-colors">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-cinzel text-palace-text">{scenario.title}</h4>
              <p className="text-palace-gold text-sm">{scenario.titleNative}</p>
            </div>
          </div>
          <p className="text-palace-text/60 text-sm mt-2 ml-13">
            {scenario.timeContext} • Interactive dialogue
          </p>
        </button>
      ))}

      {/* AI-Generated Scenario Option */}
      <button
        onClick={() => setShowDynamic(true)}
        className="w-full p-4 rounded-xl border border-dashed border-palace-text/30 bg-palace-text/5 hover:border-palace-gold/50 hover:bg-palace-gold/5 transition-all text-left"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-palace-text/10 flex items-center justify-center">
            <span className="text-xl">✨</span>
          </div>
          <div>
            <h4 className="font-cinzel text-palace-text">AI Scenario</h4>
            <p className="text-palace-text/60 text-sm">Generate a new situation with Ollama</p>
          </div>
        </div>
      </button>
    </div>
  );
}

// INTEGRATION INSTRUCTIONS:
// 
// In your RoomPage.tsx, add this to the tab content area:
//
// {/* DIALOGUE TAB - Add this new tab */}
// {activeTab === 'dialogue' && (
//   <DialogueButton roomId={room.id} roomName={room.name} />
// )}
//
// And add to the tabs array:
// { id: 'dialogue', label: 'Dialogue', icon: MessageCircle },
//
// Make sure to import:
// import { DialogueButton } from '../components/RoomDialogueIntegration';
// import { MessageCircle } from 'lucide-react';
