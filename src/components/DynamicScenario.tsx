import { useState } from 'react';
import { useOllama } from '../hooks/useOllama';
import { useLanguage } from '../context/LanguageContext';
import { getTtsCode } from '../lib/language-config';
import { Sparkles, Loader2, RefreshCw } from 'lucide-react';
import DialogueScene from './DialogueScene';
import type { BranchingScenario } from '../data/cultural-fluency';
import { getRoomById } from '../data/rooms';

interface DynamicScenarioProps {
  roomId: string;
  roomName: string;
  onClose: () => void;
}

export default function DynamicScenario({ roomId, roomName, onClose }: DynamicScenarioProps) {
  const [scenario, setScenario] = useState<BranchingScenario | null>(null);
  const [showDialogue, setShowDialogue] = useState(false);
  const { currentLanguage } = useLanguage();
  const { generateScenario, isLoading, error } = useOllama({
    model: 'llama3.2',
    temperature: 0.8,
    language: currentLanguage,
  });

  const situationTemplates: Record<string, string[]> = {
    'cafe': [
      'Ordering coffee at a busy bar',
      'Asking for the bill',
      'Complaining about cold coffee',
      'Making small talk with the barista'
    ],
    'supermarket': [
      'Asking where a product is',
      'Weighing produce at the scale',
      'Asking about fresh products',
      'Dealing with a long checkout line'
    ],
    'transport': [
      'Buying a train ticket',
      'Asking for platform information',
      'Dealing with a delayed train',
      'Validating your ticket'
    ],
    'kitchen': [
      'Asking for a recipe',
      'Complimenting the cook',
      'Offering to help with dishes',
      'Discussing meal preferences'
    ],
    'default': [
      'Making a polite request',
      'Greeting someone formally',
      'Asking for clarification',
      'Expressing gratitude'
    ]
  };

  const generateNewScenario = async () => {
    const situations = situationTemplates[roomId] || situationTemplates['default'];
    const randomSituation = situations[Math.floor(Math.random() * situations.length)];
    
    const room = getRoomById(roomId);
    const vocabulary = room?.vocabularyIds.slice(0, 20) || [];
    
    const result = await generateScenario({
      room: roomName,
      situation: randomSituation,
      characters: ['You', 'Local'],
      vocabulary
    });

    if (result) {
      // Convert the generated format to BranchingScenario format
      const branchingScenario: BranchingScenario = {
        id: `dynamic-${Date.now()}`,
        roomId,
        title: result.title,
        titleNative: 'Scenario Generato',
        timeContext: new Date().toLocaleTimeString(getTtsCode(currentLanguage), { hour: '2-digit', minute: '2-digit' }),
        startNodeId: 'start',
        culturalLesson: 'Cultural nuances learned from this interaction',
        nodes: {}
      };

      // Convert nodes array to record
      result.nodes.forEach((node, index) => {
        const nodeId = node.id || `node-${index}`;
        branchingScenario.nodes[nodeId] = {
          id: nodeId,
          speaker: node.speaker as 'user' | 'npc' | 'narrator',
          text: node.text,
          choices: node.choices.map((choice) => ({
            text: choice.text,
            nextNodeId: result.nodes[index + 1]?.id || 'end',
            effect: {
              reputationChange: choice.isCorrect ? 1 : -1,
              culturalNote: choice.feedback
            }
          })),
          backgroundEffect: node.choices.some(c => !c.isCorrect) ? 'neutral' : 'happy'
        };
      });

      // Add end node
      branchingScenario.nodes['end'] = {
        id: 'end',
        speaker: 'narrator',
        text: 'Scenario complete! Review the cultural lessons learned.',
        choices: []
      };

      setScenario(branchingScenario);
      setShowDialogue(true);
    }
  };

  if (showDialogue && scenario) {
    return (
      <DialogueScene
        scenario={scenario}
        onClose={() => {
          setShowDialogue(false);
          setScenario(null);
        }}
        onComplete={(result) => {
          console.log('Scenario completed:', result);
        }}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-palace-bg/95 backdrop-blur-md flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-palace-bg border-2 border-palace-gold/30 rounded-2xl p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-palace-gold/20 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-palace-gold" />
          </div>
          <h2 className="font-cinzel text-2xl text-palace-text mb-2">AI Scenario</h2>
          <p className="text-palace-text/60">
            Generate a dynamic cultural scenario using Ollama
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
            Error: {error}. Make sure Ollama is running locally.
          </div>
        )}

        <div className="space-y-4 mb-8">
          <div className="p-4 rounded-xl bg-palace-text/5">
            <p className="text-palace-text/60 text-sm mb-2">Location</p>
            <p className="text-palace-text font-cinzel">{roomName}</p>
          </div>
          
          <div className="p-4 rounded-xl bg-palace-text/5">
            <p className="text-palace-text/60 text-sm mb-2">Possible Situations</p>
            <ul className="space-y-1">
              {(situationTemplates[roomId] || situationTemplates['default']).slice(0, 3).map((sit, i) => (
                <li key={i} className="text-palace-text/80 text-sm">• {sit}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 border border-palace-text/20 text-palace-text rounded-xl font-cinzel hover:bg-palace-text/10 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={generateNewScenario}
            disabled={isLoading}
            className="flex-1 py-3 bg-palace-gold text-palace-bg rounded-xl font-cinzel hover:bg-palace-text transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <RefreshCw className="w-5 h-5" />
                Generate
              </>
            )}
          </button>
        </div>

        <p className="text-center text-palace-text/40 text-xs mt-6">
          Requires Ollama running locally with llama3.2 model
        </p>
      </div>
    </div>
  );
}
