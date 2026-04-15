import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'wouter';
import { ArrowLeft, Map, BookOpen, GraduationCap, ClipboardCheck, Scroll, Volume2, X, Check, Sparkles, MessageCircle, Loader2, Mic } from 'lucide-react';
import { getRoomById, rooms } from '../data/rooms';
import { roomCultures, universalRules, branchingScenarios } from '../data/cultural-fluency';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { useOllama } from '../hooks/useOllama';
import { useSpeechRecognition, compareItalianSpoken } from '../hooks/useSpeechRecognition';
// useComfyUI hook removed - using services/comfyService instead
import type { TabType, VocabularyItem, Gender, Zone, Room } from '../types';
import type { BranchingScenario } from '../data/cultural-fluency';
import DialogueScene from '../components/DialogueScene';
import DynamicScenario from '../components/DynamicScenario';
import ComfyUIGallery from '../components/ComfyUIGallery';
import RoomImage from '../components/RoomImage';

export default function RoomPage() {
  const { roomId } = useParams<{ roomId: string }>();
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState<TabType>('dialogue');
  const [selectedWord, setSelectedWord] = useState<VocabularyItem | null>(null);
  const [genderFilter, setGenderFilter] = useState<Gender | 'all'>('all');
  
  // Dialogue state
  const [activeScenario, setActiveScenario] = useState<BranchingScenario | null>(null);
  const [showDynamicScenario, setShowDynamicScenario] = useState(false);
  const [showComfyGallery, setShowComfyGallery] = useState(false);
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  
  const room = roomId ? getRoomById(roomId) : undefined;
  const { getWord, getNarratives } = useLanguage();
  const { getWordProgress, markWordLearned, getRoomMastery } = useProgress();
  
  if (!room) {
    return (
      <div className="min-h-screen bg-palace-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-cinzel text-3xl text-palace-text mb-4">Room Not Found</h1>
          <button onClick={() => setLocation('/rooms')} className="text-palace-gold">
            View All Rooms
          </button>
        </div>
      </div>
    );
  }

  const roomVocab = room.vocabularyIds.map(getWord).filter((w): w is VocabularyItem => w !== undefined);
  const filteredVocab = genderFilter === 'all' 
    ? roomVocab 
    : roomVocab.filter(w => w.gender === genderFilter);
  const narratives = getNarratives(room.id);
  const currentIndex = rooms.findIndex(r => r.id === roomId);
  const prevRoom = currentIndex > 0 ? rooms[currentIndex - 1] : null;
  const nextRoom = currentIndex < rooms.length - 1 ? rooms[currentIndex + 1] : null;
  const mastery = getRoomMastery(room.id);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'it-IT';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const getGenderColor = (gender: Gender) => {
    switch (gender) {
      case 'masculine': return '#3B82F6';
      case 'feminine': return '#EC4899';
      default: return '#E7A04D';
    }
  };

  // Find scenarios for this room
  const roomScenarios = branchingScenarios.filter(s => s.roomId === roomId);

  return (
    <div className="min-h-screen bg-palace-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-palace-bg/95 backdrop-blur-md border-b border-palace-text/10 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button onClick={() => setLocation('/rooms')} className="flex items-center gap-2 text-palace-text/70 hover:text-palace-gold">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-cinzel hidden sm:inline">All Rooms</span>
          </button>
          
          <div className="text-center">
            <span className="text-palace-text/40 text-xs block">ROOM {currentIndex + 1}</span>
            <span className="font-cinzel text-palace-text">{room.name}</span>
          </div>
          
          <div className="w-20 text-right">
            {mastery > 0 && (
              <span className="text-palace-gold font-cinzel">{Math.round(mastery)}%</span>
            )}
          </div>
        </div>
      </nav>

      {/* Tabs */}
      <div className="fixed top-14 left-0 right-0 z-40 bg-palace-bg/95 backdrop-blur-md border-b border-palace-text/10">
        <div className="flex justify-center gap-1 p-2 max-w-xl mx-auto flex-wrap">
          {[
            { id: 'dialogue', label: 'Dialogue', icon: MessageCircle },
            { id: 'narratives', label: 'Stories', icon: Scroll },
            { id: 'practice', label: 'Practice', icon: GraduationCap },
            { id: 'explore', label: 'Explore', icon: Map },
            { id: 'learn', label: 'Learn', icon: BookOpen },
            { id: 'culture', label: 'Culture', icon: Sparkles },
            { id: 'test', label: 'Test', icon: ClipboardCheck },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as TabType)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-cinzel text-sm transition-all ${
                activeTab === id 
                  ? 'bg-palace-gold text-palace-bg' 
                  : 'text-palace-text/70 hover:text-palace-text hover:bg-palace-text/10'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Room Header */}
          <div className="mb-6">
            <h1 className="font-cinzel text-3xl text-palace-text mb-2">{room.name}</h1>
            <p className="text-palace-gold font-cinzel mb-2">{room.subtitle}</p>
            <p className="text-palace-text/60">{room.description}</p>
          </div>

          {/* EXPLORE TAB */}
          {activeTab === 'explore' && (
            <ExploreTab 
              room={room} 
              filteredVocab={filteredVocab}
              genderFilter={genderFilter}
              setGenderFilter={setGenderFilter}
              setSelectedWord={setSelectedWord}
              setSelectedZone={setSelectedZone}
              getGenderColor={getGenderColor}
            />
          )}

          {/* LEARN TAB */}
          {activeTab === 'learn' && (
            <LearnTab 
              room={room}
              roomVocab={roomVocab}
              getWordProgress={getWordProgress}
              speak={speak}
              setSelectedWord={setSelectedWord}
              getGenderColor={getGenderColor}
            />
          )}

          {/* NARRATIVES TAB */}
          {activeTab === 'narratives' && narratives.length > 0 && (
            <NarrativesTab narratives={narratives} speak={speak} />
          )}

          {/* PRACTICE TAB */}
          {activeTab === 'practice' && (
            <PracticeTab 
              vocabulary={roomVocab} 
              roomId={room.id}
              onMarkLearned={markWordLearned}
            />
          )}

          {/* CULTURE TAB */}
          {activeTab === 'culture' && (
            <CultureTab roomId={room.id} speak={speak} />
          )}

          {/* TEST TAB */}
          {activeTab === 'test' && (
            <TestTab vocabulary={roomVocab} />
          )}

          {/* DIALOGUE TAB */}
          {activeTab === 'dialogue' && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="font-cinzel text-xl text-palace-text mb-2">Interactive Scenarios</h3>
                <p className="text-palace-text/60 text-sm">Practice conversations with AI-powered characters</p>
              </div>

              {roomScenarios.length > 0 && (
                <div className="space-y-3">
                  {roomScenarios.map(scenario => (
                    <button
                      key={scenario.id}
                      onClick={() => setActiveScenario(scenario)}
                      className="w-full p-4 rounded-xl border border-palace-text/20 bg-palace-bg/50 hover:border-palace-gold hover:bg-palace-gold/10 transition-all text-left"
                    >
                      <h4 className="font-cinzel text-palace-text">{scenario.title}</h4>
                      <p className="text-palace-gold text-sm">{scenario.titleNative}</p>
                    </button>
                  ))}
                </div>
              )}

              <button
                onClick={() => setShowDynamicScenario(true)}
                className="w-full p-4 rounded-xl border border-dashed border-palace-text/30 bg-palace-text/5 hover:border-palace-gold/50"
              >
                <h4 className="font-cinzel text-palace-text">✨ AI-Generated Scenario</h4>
              </button>

              <button
                onClick={() => setShowComfyGallery(true)}
                className="w-full p-4 rounded-xl border border-dashed border-palace-text/30 bg-palace-text/5 hover:border-palace-blue/50"
              >
                <h4 className="font-cinzel text-palace-text">🎨 ComfyUI Gallery</h4>
                <p className="text-palace-text/60 text-sm">Generate room images with your models</p>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Room Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-palace-bg/95 backdrop-blur-md border-t border-palace-text/10 py-3 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          {prevRoom ? (
            <button 
              onClick={() => setLocation(`/rooms/${prevRoom.id}`)}
              className="text-palace-text/70 hover:text-palace-gold"
            >
              <span className="text-xs text-palace-text/40 block">Previous</span>
              <span className="font-cinzel">{prevRoom.name}</span>
            </button>
          ) : <div />}
          
          <div className="flex gap-1">
            {rooms.map((r) => (
              <button
                key={r.id}
                onClick={() => setLocation(`/rooms/${r.id}`)}
                className={`w-2 h-2 rounded-full transition-all ${
                  r.id === roomId ? 'bg-palace-gold w-6' : 'bg-palace-text/30'
                }`}
              />
            ))}
          </div>
          
          {nextRoom ? (
            <button 
              onClick={() => setLocation(`/rooms/${nextRoom.id}`)}
              className="text-palace-text/70 hover:text-palace-gold text-right"
            >
              <span className="text-xs text-palace-text/40 block">Next</span>
              <span className="font-cinzel">{nextRoom.name}</span>
            </button>
          ) : <div />}
        </div>
      </div>

      {/* Subroom Overlay */}
      {selectedZone && (
        <SubroomOverlay
          zone={selectedZone}
          room={room}
          roomVocab={roomVocab}
          onClose={() => setSelectedZone(null)}
          onSelectWord={setSelectedWord}
          getGenderColor={getGenderColor}
        />
      )}

      {/* Word Detail Modal */}
      {selectedWord && (
        <WordModal 
          word={selectedWord} 
          room={room}
          onClose={() => setSelectedWord(null)}
          onSpeak={() => speak(selectedWord.native)}
          progress={getWordProgress(room.id, selectedWord.id)}
          onMarkLearned={() => markWordLearned(room.id, selectedWord.id)}
          getGenderColor={getGenderColor}
        />
      )}

      {/* Dialogue Scene Overlay */}
      {activeScenario && (
        <DialogueScene
          scenario={activeScenario}
          onClose={() => setActiveScenario(null)}
          onComplete={(result) => {
            console.log('Scenario completed:', result);
            setActiveScenario(null);
          }}
        />
      )}

      {/* Dynamic Scenario Generator */}
      {showDynamicScenario && (
        <DynamicScenario
          roomId={room.id}
          roomName={room.name}
          onClose={() => setShowDynamicScenario(false)}
        />
      )}

      {/* ComfyUI Gallery */}
      {showComfyGallery && (
        <ComfyUIGallery
          roomId={room.id}
          roomName={room.name}
          onClose={() => setShowComfyGallery(false)}
        />
      )}

      {/* Dialogue Scene Overlay */}
      {activeScenario && (
        <DialogueScene
          scenario={activeScenario}
          onClose={() => setActiveScenario(null)}
          onComplete={(result) => {
            console.log('Scenario completed:', result);
            // Could save to progress here
            setActiveScenario(null);
          }}
        />
      )}

      {/* Dynamic Scenario Generator */}
      {showDynamicScenario && (
        <DynamicScenario
          roomId={room.id}
          roomName={room.name}
          onClose={() => setShowDynamicScenario(false)}
        />
      )}
    </div>
  );
}

// Tab Components
function ExploreTab({ room, filteredVocab, genderFilter, setGenderFilter, setSelectedWord, setSelectedZone, getGenderColor }: {
  room: ReturnType<typeof getRoomById>;
  filteredVocab: VocabularyItem[];
  genderFilter: Gender | 'all';
  setGenderFilter: (g: Gender | 'all') => void;
  setSelectedWord: (w: VocabularyItem) => void;
  setSelectedZone: (z: Zone) => void;
  getGenderColor: (g: Gender) => string;
}) {
  if (!room) return null;
  
  return (
    <div className="space-y-6">
      {/* Gender Filter */}
      <div className="flex justify-center gap-2">
        {(['all', 'masculine', 'feminine'] as const).map(g => (
          <button
            key={g}
            onClick={() => setGenderFilter(g)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              genderFilter === g
                ? g === 'masculine' ? 'bg-palace-blue text-white' 
                  : g === 'feminine' ? 'bg-palace-pink text-white'
                  : 'bg-palace-gold text-palace-bg'
                : 'text-palace-text/70 hover:bg-palace-text/10'
            }`}
          >
            {g === 'all' ? 'All' : g === 'masculine' ? '♂ Masculine' : '♀ Feminine'}
          </button>
        ))}
      </div>

      {/* Room Image with Vocabulary */}
      <div className="relative aspect-[4/3] bg-palace-bg/50 rounded-2xl overflow-hidden border border-palace-text/10">
        <RoomImage 
          src={room.image} 
          alt={room.name}
          roomId={room.id}
          className="w-full h-full opacity-90"
        />
        
        {/* Zone overlays */}
        {room.zones.map(zone => (
          <button
            key={zone.id}
            onClick={() => setSelectedZone(zone)}
            className="absolute border-2 border-palace-gold/50 hover:border-palace-gold hover:bg-palace-gold/10 rounded-lg transition-all group cursor-pointer"
            style={{
              left: `${zone.x}%`,
              top: `${zone.y}%`,
              width: `${zone.width}%`,
              height: `${zone.height}%`,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="bg-palace-bg/90 text-palace-gold px-2 py-1 rounded text-xs font-cinzel border border-palace-gold/50">
                {zone.icon} {zone.name}
              </span>
            </div>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              <span className="bg-palace-bg/90 text-palace-text px-2 py-1 rounded text-sm font-cinzel border border-palace-gold/50">
                {zone.icon} {zone.name}
              </span>
            </div>
          </button>
        ))}

        {/* Vocabulary dots */}
        {filteredVocab.map(word => (
          <button
            key={word.id}
            onClick={() => setSelectedWord(word)}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: `${word.x}%`, top: `${word.y}%` }}
          >
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg border-2 border-white/30 hover:scale-125 transition-transform"
              style={{ backgroundColor: getGenderColor(word.gender) }}
            >
              {word.emoji || word.native.charAt(0).toUpperCase()}
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              <span className="bg-palace-bg/90 text-palace-text px-2 py-1 rounded text-xs font-cinzel border border-palace-gold/50">
                {word.native}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Gender Guide */}
      <div className="flex justify-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-palace-blue flex items-center justify-center text-white text-xs">♂</div>
          <span className="text-palace-text/70 text-sm">il (masculine)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-palace-pink flex items-center justify-center text-white text-xs">♀</div>
          <span className="text-palace-text/70 text-sm">la (feminine)</span>
        </div>
      </div>
    </div>
  );
}

function LearnTab({ room, roomVocab, getWordProgress, speak, setSelectedWord, getGenderColor }: {
  room: ReturnType<typeof getRoomById>;
  roomVocab: VocabularyItem[];
  getWordProgress: (roomId: string, wordId: string) => { learned: boolean; attempts: number; correct: number } | undefined;
  speak: (text: string) => void;
  setSelectedWord: (w: VocabularyItem) => void;
  getGenderColor: (g: Gender) => string;
}) {
  if (!room) return null;
  
  return (
    <div className="space-y-6">
      {/* Vocabulary List */}
      <div className="bg-palace-bg/50 border border-palace-text/10 rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-palace-text/10">
          <h3 className="font-cinzel text-xl text-palace-text">Room Vocabulary ({roomVocab.length} words)</h3>
        </div>
        <div className="divide-y divide-palace-text/10">
          {roomVocab.map(word => {
            const progress = getWordProgress(room.id, word.id);
            return (
              <div 
                key={word.id}
                className="p-4 flex items-center justify-between hover:bg-palace-text/5 cursor-pointer"
                onClick={() => setSelectedWord(word)}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: getGenderColor(word.gender) }}
                  >
                    {word.emoji || word.native.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-cinzel text-palace-text text-lg">{word.native}</p>
                    <p className="text-palace-text/50 text-sm">{word.english}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {progress?.learned && (
                    <Check className="w-5 h-5 text-green-500" />
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      speak(word.native);
                    }}
                    className="p-2 text-palace-text/50 hover:text-palace-gold"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Grammar Points */}
      <div className="space-y-3">
        <h3 className="font-cinzel text-xl text-palace-text">Grammar Focus</h3>
        {room.grammarPoints.map(gp => (
          <div key={gp.id} className="bg-palace-bg/50 border border-palace-text/10 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: gp.color }} />
              <h4 className="font-cinzel text-palace-text">{gp.title}</h4>
            </div>
            <p className="text-palace-text/70 text-sm mb-2">{gp.explanation}</p>
            <p className="text-palace-gold text-sm font-cinzel">{gp.example}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function NarrativesTab({ narratives, speak }: { narratives: import('../types').NarrativeParagraph[]; speak: (text: string) => void }) {
  const [activeTense, setActiveTense] = useState<'past' | 'present' | 'future'>('present');
  const filtered = narratives.filter(n => n.tense === activeTense);

  return (
    <div className="space-y-4">
      <div className="flex justify-center gap-2">
        {(['past', 'present', 'future'] as const).map(t => (
          <button
            key={t}
            onClick={() => setActiveTense(t)}
            className={`px-4 py-2 rounded-full font-cinzel text-sm transition-colors ${
              activeTense === t 
                ? t === 'past' ? 'bg-red-500 text-white'
                  : t === 'present' ? 'bg-green-500 text-white'
                  : 'bg-blue-500 text-white'
                : 'text-palace-text/70 hover:bg-palace-text/10'
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map(para => (
          <div key={para.id} className="bg-palace-bg/50 border border-palace-text/10 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-palace-gold/20 text-palace-gold flex items-center justify-center font-cinzel">
                {para.order}
              </span>
              <span className="text-palace-text/50 text-sm">{para.grammarFocus}</span>
            </div>
            <p 
              className="font-cinzel text-lg text-palace-text mb-3"
              dangerouslySetInnerHTML={{ 
                __html: para.native.replace(/\*\*(.*?)\*\*/g, '<span class="text-palace-gold font-bold">$1</span>') 
              }}
            />
            <p className="text-palace-text/60 text-sm mb-3">{para.english}</p>
            <button
              onClick={() => speak(para.native)}
              className="flex items-center gap-2 text-palace-gold text-sm"
            >
              <Volume2 className="w-4 h-4" />
              Listen
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function PracticeTab({ vocabulary, roomId, onMarkLearned }: { 
  vocabulary: VocabularyItem[]; 
  roomId: string;
  onMarkLearned: (_roomId: string, wordId: string) => void;
}) {
  const [mode, setMode] = useState<'flashcard' | 'gender' | 'speak'>('flashcard');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [showGenderResult, setShowGenderResult] = useState<'correct' | 'incorrect' | null>(null);
  const [speakResult, setSpeakResult] = useState<{ similarity: number; isMatch: boolean; missingWords: string[] } | null>(null);
  
  const { isListening, transcript, hasSupport, startListening, stopListening } = useSpeechRecognition({
    language: 'it-IT',
    onResult: (spoken) => {
      const result = compareItalianSpoken(spoken, currentWord.native);
      setSpeakResult(result);
      if (result.isMatch) {
        onMarkLearned(roomId, currentWord.id);
      }
    },
  });

  const currentWord = vocabulary[currentIndex];
  if (!currentWord) return null;

  const nextWord = () => {
    setFlipped(false);
    setShowGenderResult(null);
    setSpeakResult(null);
    setCurrentIndex((currentIndex + 1) % vocabulary.length);
  };

  const checkGender = (guess: 'masculine' | 'feminine') => {
    if (currentWord.gender === guess) {
      setShowGenderResult('correct');
      onMarkLearned(roomId, currentWord.id);
    } else {
      setShowGenderResult('incorrect');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-center gap-2 flex-wrap">
        <button
          onClick={() => setMode('flashcard')}
          className={`px-4 py-2 rounded-full font-cinzel text-sm ${
            mode === 'flashcard' ? 'bg-palace-gold text-palace-bg' : 'text-palace-text/70'
          }`}
        >
          Flashcards
        </button>
        <button
          onClick={() => setMode('gender')}
          className={`px-4 py-2 rounded-full font-cinzel text-sm ${
            mode === 'gender' ? 'bg-palace-gold text-palace-bg' : 'text-palace-text/70'
          }`}
        >
          Gender Practice
        </button>
        <button
          onClick={() => setMode('speak')}
          className={`px-4 py-2 rounded-full font-cinzel text-sm ${
            mode === 'speak' ? 'bg-palace-gold text-palace-bg' : 'text-palace-text/70'
          }`}
        >
          Speak It
        </button>
      </div>

      <div className="text-center text-palace-text/50 text-sm">
        Card {currentIndex + 1} of {vocabulary.length}
      </div>

      {mode === 'flashcard' && (
        <div 
          onClick={() => setFlipped(!flipped)}
          className="aspect-[3/2] max-w-md mx-auto cursor-pointer bg-palace-bg/50 border border-palace-text/20 rounded-2xl flex flex-col items-center justify-center"
        >
          {!flipped ? (
            <>
              <span className="text-palace-text/50 text-sm mb-4">English</span>
              <h3 className="font-cinzel text-3xl text-palace-text">{currentWord.english}</h3>
              <span className="text-palace-text/40 text-sm mt-4">Click to flip</span>
            </>
          ) : (
            <>
              <span className="text-palace-gold text-sm mb-4">Italian</span>
              <h3 className="font-cinzel text-3xl text-palace-text">{currentWord.native}</h3>
              <p className="text-palace-text/60 mt-2">/{currentWord.pronunciation}/</p>
            </>
          )}
        </div>
      )}

      {mode === 'gender' && (
        <div className="max-w-md mx-auto text-center">
          <h3 className="font-cinzel text-3xl text-palace-text mb-8">{currentWord.native}</h3>
          <p className="text-palace-text/50 mb-8">What is the gender?</p>
          
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => checkGender('masculine')}
              className="px-8 py-4 bg-palace-blue text-white rounded-full font-cinzel text-lg hover:opacity-90"
            >
              ♂ il (masculine)
            </button>
            <button
              onClick={() => checkGender('feminine')}
              className="px-8 py-4 bg-palace-pink text-white rounded-full font-cinzel text-lg hover:opacity-90"
            >
              ♀ la (feminine)
            </button>
          </div>

          {showGenderResult && (
            <div className={`mt-6 p-4 rounded-xl ${showGenderResult === 'correct' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
              {showGenderResult === 'correct' ? '✓ Correct!' : `✗ Incorrect. It's ${currentWord.gender === 'masculine' ? 'il (masculine)' : 'la (feminine)'}`}
            </div>
          )}
        </div>
      )}

      {mode === 'speak' && (
        <div className="max-w-md mx-auto text-center space-y-6">
          <div>
            <span className="text-palace-text/50 text-sm block mb-2">Say this in Italian:</span>
            <h3 className="font-cinzel text-2xl text-palace-text">{currentWord.english}</h3>
          </div>

          {!hasSupport ? (
            <p className="text-palace-text/50 text-sm">Speech recognition is not supported in this browser.</p>
          ) : (
            <>
              <button
                onClick={isListening ? stopListening : startListening}
                className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center transition-all ${
                  isListening 
                    ? 'bg-red-500/20 text-red-500 animate-pulse scale-110' 
                    : 'bg-palace-gold/20 text-palace-gold hover:bg-palace-gold/30 hover:scale-105'
                }`}
              >
                <Mic className="w-10 h-10" />
              </button>

              {isListening && (
                <p className="text-palace-text/60 text-sm italic">{transcript || 'Listening...'}</p>
              )}

              {speakResult && !isListening && (
                <div className={`p-4 rounded-xl ${speakResult.isMatch ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    {speakResult.isMatch ? (
                      <>
                        <Check className="w-5 h-5" />
                        <span className="font-cinzel">Excellent!</span>
                      </>
                    ) : (
                      <span className="font-cinzel">Not quite</span>
                    )}
                  </div>
                  <p className="text-palace-text/70 text-sm">You said: "{transcript}"</p>
                  <p className="text-palace-text/70 text-sm">Expected: "{currentWord.native}"</p>
                </div>
              )}
            </>
          )}
        </div>
      )}

      <div className="flex justify-center">
        <button
          onClick={nextWord}
          className="px-6 py-3 bg-palace-text/10 text-palace-text rounded-full font-cinzel hover:bg-palace-text/20"
        >
          Next Word →
        </button>
      </div>
    </div>
  );
}

function TestTab({ vocabulary }: { vocabulary: VocabularyItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState<VocabularyItem | null>(null);

  const currentWord = vocabulary[currentIndex];
  const options = [currentWord, ...vocabulary.filter(w => w.id !== currentWord.id).slice(0, 3)].sort(() => Math.random() - 0.5);

  const handleAnswer = (selected: VocabularyItem) => {
    if (answered) return;
    setSelectedOption(selected);
    const correct = selected.id === currentWord.id;
    if (correct) setScore(score + 1);
    setAnswered(true);
  };

  const nextQuestion = () => {
    setCurrentIndex(currentIndex + 1);
    setAnswered(false);
    setSelectedOption(null);
  };

  if (currentIndex >= vocabulary.length) {
    return (
      <div className="text-center py-12">
        <h3 className="font-cinzel text-3xl text-palace-text mb-4">Test Complete!</h3>
        <p className="text-palace-gold text-2xl font-cinzel mb-4">{score} / {vocabulary.length}</p>
        <p className="text-palace-text/60 mb-8">
          {score === vocabulary.length ? 'Perfect score!' : score > vocabulary.length / 2 ? 'Good job!' : 'Keep studying!'}
        </p>
        <button
          onClick={() => setCurrentIndex(0)}
          className="px-6 py-3 bg-palace-gold text-palace-bg rounded-full font-cinzel"
        >
          Restart Test
        </button>
      </div>
    );
  }

  if (!currentWord) return null;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center text-sm text-palace-text/50">
        <span>Question {currentIndex + 1} of {vocabulary.length}</span>
        <span>Score: {score}</span>
      </div>

      <div className="text-center">
        <p className="text-palace-text/50 mb-4">What does this mean?</p>
        <h3 className="font-cinzel text-4xl text-palace-text">{currentWord.native}</h3>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        {options.map(option => (
          <button
            key={option.id}
            onClick={() => handleAnswer(option)}
            disabled={answered}
            className={`p-4 rounded-xl border text-left transition-colors ${
              answered
                ? option.id === currentWord.id
                  ? 'bg-green-500/20 border-green-500 text-green-500'
                  : selectedOption?.id === option.id
                    ? 'bg-red-500/20 border-red-500 text-red-500'
                    : 'bg-palace-text/5 border-palace-text/10 text-palace-text/50'
                : 'bg-palace-bg/50 border-palace-text/20 text-palace-text hover:border-palace-gold'
            }`}
          >
            {option.english}
          </button>
        ))}
      </div>

      {answered && (
        <div className="text-center">
          <button
            onClick={nextQuestion}
            className="px-6 py-3 bg-palace-gold text-palace-bg rounded-full font-cinzel"
          >
            {currentIndex < vocabulary.length - 1 ? 'Next Question →' : 'See Results'}
          </button>
        </div>
      )}
    </div>
  );
}

// Cultural Fluency Tab
function CultureTab({ roomId, speak }: { roomId: string; speak: (text: string) => void }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const roomCulture = roomCultures.find(rc => rc.roomId === roomId);
  const categories = ['all', 'food', 'coffee', 'greetings', 'timing', 'shopping', 'transport', 'social'];
  
  const filteredRules = selectedCategory === 'all' 
    ? universalRules 
    : universalRules.filter(r => r.category === selectedCategory);

  const categoryColors: Record<string, string> = {
    food: '#22c55e',
    coffee: '#a16207',
    greetings: '#3b82f6',
    timing: '#f59e0b',
    shopping: '#8b5cf6',
    transport: '#6366f1',
    social: '#ec4899',
  };

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-cinzel transition-all ${
              selectedCategory === cat
                ? 'bg-palace-gold text-palace-bg'
                : 'bg-palace-text/10 text-palace-text/70 hover:bg-palace-text/20'
            }`}
          >
            {cat === 'all' ? 'All Rules' : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Room-specific dialogue if available */}
      {roomCulture && (
        <div className="bg-palace-gold/10 border border-palace-gold/30 rounded-2xl p-4">
          <h3 className="font-cinzel text-lg text-palace-gold mb-2">{roomCulture.exampleDialogue.context}</h3>
          <div className="space-y-3">
            {roomCulture.exampleDialogue.lines.map((line, i) => (
              <div key={i} className={`flex ${line.speaker === 'You' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-3 ${
                  line.speaker === 'You' 
                    ? 'bg-palace-gold/20 text-palace-text' 
                    : 'bg-palace-text/10 text-palace-text'
                }`}>
                  <p className="text-xs text-palace-text/50 mb-1">{line.speaker}</p>
                  <p className="font-cinzel text-palace-text">{line.italian}</p>
                  <p className="text-sm text-palace-text/60 italic">{line.english}</p>
                  {line.note && <p className="text-xs text-palace-gold mt-1">💡 {line.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Universal Rules */}
      <div className="space-y-4">
        {filteredRules.map(rule => (
          <div key={rule.id} className="bg-palace-bg/50 border border-palace-text/10 rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-palace-text/10">
              <div className="flex items-center gap-2 mb-2">
                <span 
                  className="px-2 py-0.5 rounded-full text-xs text-white"
                  style={{ backgroundColor: categoryColors[rule.category] || '#666' }}
                >
                  {rule.category}
                </span>
              </div>
              <h3 className="font-cinzel text-lg text-palace-text">{rule.title}</h3>
              <p className="text-palace-gold text-sm italic">{rule.titleNative}</p>
            </div>

            {/* Rule Content */}
            <div className="p-4 space-y-4">
              {/* The Rule */}
              <div className="bg-red-500/10 border-l-4 border-red-500 p-3 rounded-r-lg">
                <p className="text-red-400 text-xs font-cinzel uppercase mb-1">The Rule</p>
                <p className="text-palace-text">{rule.rule}</p>
              </div>

              {/* Why */}
              <div>
                <p className="text-palace-text/50 text-xs uppercase mb-1">Why it matters</p>
                <p className="text-palace-text/80 text-sm">{rule.why}</p>
              </div>

              {/* Consequence */}
              <div>
                <p className="text-red-400/70 text-xs uppercase mb-1">If you break it</p>
                <p className="text-palace-text/70 text-sm italic">{rule.consequence}</p>
              </div>

              {/* Solution */}
              <div className="bg-green-500/10 border-l-4 border-green-500 p-3 rounded-r-lg">
                <p className="text-green-400 text-xs font-cinzel uppercase mb-1">The Fix</p>
                <p className="text-palace-text text-sm">{rule.solution}</p>
              </div>

              {/* Regional Note */}
              {rule.regionalNote && (
                <div className="bg-blue-500/10 border-l-4 border-blue-500 p-3 rounded-r-lg">
                  <p className="text-blue-400 text-xs font-cinzel uppercase mb-1">Regional Variation</p>
                  <p className="text-palace-text text-sm">{rule.regionalNote}</p>
                </div>
              )}

              {/* Useful Phrases */}
              <div>
                <p className="text-palace-gold text-xs font-cinzel uppercase mb-2">Phrases to Use</p>
                <div className="space-y-2">
                  {rule.phrases.map((phrase, i) => (
                    <button
                      key={i}
                      onClick={() => speak(phrase.italian)}
                      className="w-full text-left p-3 bg-palace-text/5 rounded-xl hover:bg-palace-text/10 transition-colors group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-cinzel text-palace-text">{phrase.italian}</p>
                          <p className="text-palace-text/50 text-sm">{phrase.english}</p>
                          <p className="text-palace-text/40 text-xs italic">{phrase.situation}</p>
                        </div>
                        <Volume2 className="w-4 h-4 text-palace-text/30 group-hover:text-palace-gold" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Subroom Overlay Component
function SubroomOverlay({ zone, room, roomVocab, onClose, onSelectWord, getGenderColor }: {
  zone: Zone;
  room: ReturnType<typeof getRoomById>;
  roomVocab: VocabularyItem[];
  onClose: () => void;
  onSelectWord: (w: VocabularyItem) => void;
  getGenderColor: (g: Gender) => string;
}) {
  if (!room) return null;

  // Get vocabulary for this zone
  const getZoneVocab = (): VocabularyItem[] => {
    if (zone.interiorVocab) {
      return zone.interiorVocab
        .map(iv => roomVocab.find(w => w.id === iv.wordId))
        .filter((w): w is VocabularyItem => w !== undefined);
    }
    
    // Auto-match words based on zone description/name
    const zoneText = `${zone.name} ${zone.nameNative} ${zone.description} ${zone.icon}`.toLowerCase();
    return roomVocab.filter(w => {
      const en = (w.english || '').toLowerCase();
      const nat = (w.native || '').toLowerCase();
      // Simple keyword matching
      const keywords = zoneText.split(/\s+/);
      return keywords.some(kw => 
        kw.length > 2 && (en.includes(kw) || nat.includes(kw))
      );
    }).slice(0, 12);
  };

  const zoneVocab = getZoneVocab();

  // Generate positions for zone vocabulary
  const getVocabPosition = (index: number, total: number) => {
    if (zone.interiorVocab && zone.interiorVocab[index]) {
      return {
        left: `${zone.interiorVocab[index].x}%`,
        top: `${zone.interiorVocab[index].y}%`,
      };
    }
    // Auto-layout in a grid
    const cols = Math.ceil(Math.sqrt(total));
    const col = index % cols;
    const row = Math.floor(index / cols);
    const marginX = 15;
    const marginY = 15;
    const usableWidth = 100 - marginX * 2;
    const usableHeight = 100 - marginY * 2;
    return {
      left: `${marginX + (col / Math.max(cols - 1, 1)) * usableWidth}%`,
      top: `${marginY + (row / Math.max(Math.ceil(total / cols) - 1, 1)) * usableHeight}%`,
    };
  };

  return (
    <div className="fixed inset-0 z-[60] bg-palace-bg/98 backdrop-blur-md flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-palace-text/10 bg-palace-bg/95">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-palace-text/70 hover:text-palace-gold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-cinzel hidden sm:inline">Back to {room.name}</span>
          </button>
        </div>
        <div className="text-center">
          <h2 className="font-cinzel text-lg text-palace-text">{zone.icon} {zone.name}</h2>
          <p className="text-palace-gold text-sm font-cinzel">{zone.nameNative}</p>
        </div>
        <div className="w-24" />
      </div>

      {/* Subroom Content */}
      <div className="flex-1 overflow-auto p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Interior Image */}
          <div className="relative aspect-[4/3] bg-palace-bg/50 rounded-2xl overflow-hidden border border-palace-text/10">
            <RoomImage
              src={zone.interiorImage || room.image}
              alt={zone.name}
              roomId={room.id}
              className="w-full h-full"
            />
            
            {/* Zone vocabulary dots */}
            {zoneVocab.map((word, index) => {
              const pos = getVocabPosition(index, zoneVocab.length);
              return (
                <button
                  key={word.id}
                  onClick={() => onSelectWord(word)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: pos.left, top: pos.top }}
                >
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg border-2 border-white/30 hover:scale-125 transition-transform"
                    style={{ backgroundColor: getGenderColor(word.gender) }}
                  >
                    {word.emoji || word.native.charAt(0).toUpperCase()}
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                    <span className="bg-palace-bg/90 text-palace-text px-2 py-1 rounded text-xs font-cinzel border border-palace-gold/50">
                      {word.native}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Zone Info */}
          <div className="text-center">
            <p className="text-palace-text/70">{zone.description}</p>
            <p className="text-palace-text/50 text-sm mt-2">
              {zoneVocab.length} words in this area
            </p>
          </div>

          {/* Word List */}
          {zoneVocab.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {zoneVocab.map(word => (
                <button
                  key={word.id}
                  onClick={() => onSelectWord(word)}
                  className="p-3 rounded-xl border border-palace-text/10 bg-palace-bg/50 hover:border-palace-gold/50 hover:bg-palace-gold/5 transition-all text-left"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{word.emoji}</span>
                    <span 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: getGenderColor(word.gender) }}
                    />
                  </div>
                  <p className="font-cinzel text-palace-text text-sm">{word.native}</p>
                  <p className="text-palace-text/50 text-xs">{word.english}</p>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Speak It Challenge Component
function SpeakItChallenge({ word }: { word: string }) {
  const [result, setResult] = useState<{ similarity: number; isMatch: boolean; missingWords: string[] } | null>(null);
  const { isListening, transcript, hasSupport, startListening, stopListening } = useSpeechRecognition({
    language: 'it-IT',
    onResult: (spoken) => {
      setResult(compareItalianSpoken(spoken, word));
    },
  });

  if (!hasSupport) {
    return (
      <div className="bg-palace-text/5 rounded-xl p-4 text-center">
        <p className="text-palace-text/50 text-sm">Speech practice is not supported in this browser.</p>
      </div>
    );
  }

  return (
    <div className="bg-palace-text/5 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-palace-text/70 text-sm font-cinzel">Speak It</span>
        <button
          onClick={isListening ? stopListening : startListening}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
            isListening 
              ? 'bg-red-500/20 text-red-500 animate-pulse' 
              : 'bg-palace-gold/20 text-palace-gold hover:bg-palace-gold/30'
          }`}
        >
          <Mic className="w-4 h-4" />
          {isListening ? 'Listening...' : 'Say it'}
        </button>
      </div>

      {isListening && (
        <p className="text-palace-text/60 text-sm italic min-h-[1.5rem]">{transcript || 'Listening...'}</p>
      )}

      {result && !isListening && (
        <div className={`mt-2 p-3 rounded-lg ${result.isMatch ? 'bg-green-500/10' : 'bg-yellow-500/10'}`}>
          <div className="flex items-center gap-2">
            {result.isMatch ? (
              <>
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-green-500 font-cinzel">Great pronunciation!</span>
              </>
            ) : (
              <>
                <span className="text-yellow-500 font-cinzel">Keep practicing</span>
              </>
            )}
          </div>
          {result.missingWords.length > 0 && (
            <p className="text-palace-text/60 text-xs mt-1">
              We heard: "{transcript}" — try to include: {result.missingWords.join(', ')}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// Word Modal Component
function WordModal({ word, room, onClose, onSpeak, progress, onMarkLearned, getGenderColor }: {
  word: VocabularyItem;
  room: Room;
  onClose: () => void;
  onSpeak: () => void;
  progress?: { learned: boolean; attempts: number; correct: number };
  onMarkLearned: () => void;
  getGenderColor: (g: Gender) => string;
}) {
  const { generateWordContext, isLoading } = useOllama({ model: 'llama3.2', temperature: 0.3 });
  const [aiContext, setAiContext] = useState<{
    examples: Array<{ native: string; english: string; context: string }>;
    conjugation?: { present: string[]; past: string[]; future: string[] };
    notes: string;
    isVerb: boolean;
  } | null>(null);

  useEffect(() => {
    let cancelled = false;
    const cacheKey = `word-context-${word.id}`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      try {
        setAiContext(JSON.parse(cached));
        return;
      } catch {}
    }
    generateWordContext(word.native, word.english, room.name).then((result) => {
      if (!cancelled && result) {
        setAiContext(result);
        localStorage.setItem(cacheKey, JSON.stringify(result));
      }
    });
    return () => { cancelled = true; };
  }, [word.id, word.native, word.english, room.name, generateWordContext]);

  return (
    <div className="fixed inset-0 z-[100] bg-palace-bg/95 backdrop-blur-md flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-palace-bg border border-palace-text/20 rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
              style={{ backgroundColor: getGenderColor(word.gender) }}
            >
              {word.emoji || word.native.charAt(0).toUpperCase()}
            </div>
            <div>
              <span className="text-palace-text/50 text-xs">{word.gender === 'masculine' ? 'il' : word.gender === 'feminine' ? 'la' : ''}</span>
              <h2 className="font-cinzel text-2xl text-palace-text">{word.native}</h2>
            </div>
          </div>
          <button onClick={onClose} className="text-palace-text/50 hover:text-palace-text">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <span className="text-palace-text/50 text-sm">English:</span>
            <p className="text-palace-text text-lg">{word.english}</p>
          </div>

          <div>
            <span className="text-palace-text/50 text-sm">Pronunciation:</span>
            <p className="text-palace-gold font-cinzel">/{word.pronunciation}/</p>
          </div>

          <SpeakItChallenge word={word.native} />

          {word.plural && (
            <div>
              <span className="text-palace-text/50 text-sm">Plural:</span>
              <p className="text-palace-text">{word.plural}</p>
            </div>
          )}

          {word.mnemonic && (
            <div className="bg-palace-gold/10 rounded-xl p-4">
              <span className="text-palace-gold text-sm font-cinzel">Memory Trick</span>
              <p className="text-palace-text/80 mt-1">{word.mnemonic}</p>
            </div>
          )}

          {/* AI-generated examples */}
          <div>
            <span className="text-palace-text/50 text-sm flex items-center gap-2">
              Examples in context
              {isLoading && !aiContext && <Loader2 className="w-3 h-3 animate-spin" />}
            </span>
            {aiContext ? (
              <div className="space-y-2 mt-2">
                {aiContext.examples.map((ex, idx) => (
                  <div key={idx} className="bg-palace-text/5 rounded-lg p-3">
                    <p className="text-palace-text font-cinzel">{ex.native}</p>
                    <p className="text-palace-text/50 text-sm">{ex.english}</p>
                    {ex.context && <span className="text-palace-gold/70 text-xs">{ex.context}</span>}
                  </div>
                ))}
              </div>
            ) : isLoading ? (
              <p className="text-palace-text/40 text-sm mt-1 italic">Generating examples...</p>
            ) : (
              <p className="text-palace-text/40 text-sm mt-1">No examples available.</p>
            )}
          </div>

          {/* Conjugation table for verbs */}
          {aiContext?.isVerb && aiContext.conjugation && (
            <div className="bg-palace-text/5 rounded-xl p-4">
              <span className="text-palace-gold text-sm font-cinzel">Conjugation</span>
              <div className="mt-2 space-y-3">
                {[
                  { label: 'Present', rows: aiContext.conjugation.present },
                  { label: 'Past', rows: aiContext.conjugation.past },
                  { label: 'Future', rows: aiContext.conjugation.future },
                ].map(({ label, rows }) => (
                  <div key={label}>
                    <span className="text-palace-text/60 text-xs uppercase tracking-wide">{label}</span>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 mt-1">
                      {rows.map((row, idx) => (
                        <p key={idx} className="text-palace-text text-sm font-cinzel">{row}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {aiContext?.notes && (
            <div className="bg-yellow-500/10 rounded-lg p-3">
              <span className="text-yellow-500 text-sm">Grammar Note:</span>
              <p className="text-palace-text/80 text-sm">{aiContext.notes}</p>
            </div>
          )}

          {word.examples && word.examples.length > 0 && (
            <div>
              <span className="text-palace-text/50 text-sm">More Examples:</span>
              <div className="space-y-2 mt-2">
                {word.examples.map((ex) => (
                  <div key={ex.native} className="bg-palace-text/5 rounded-lg p-3">
                    <p className="text-palace-text font-cinzel">{ex.native}</p>
                    <p className="text-palace-text/50 text-sm">{ex.english}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {word.notes && (
            <div className="bg-yellow-500/10 rounded-lg p-3">
              <span className="text-yellow-500 text-sm">Note:</span>
              <p className="text-palace-text/80 text-sm">{word.notes}</p>
            </div>
          )}
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onSpeak}
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-palace-text/10 rounded-full text-palace-text hover:bg-palace-text/20"
          >
            <Volume2 className="w-5 h-5" />
            Listen
          </button>
          <button
            onClick={onMarkLearned}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full ${
              progress?.learned 
                ? 'bg-green-500/20 text-green-500' 
                : 'bg-palace-gold text-palace-bg'
            }`}
          >
            <Check className="w-5 h-5" />
            {progress?.learned ? 'Learned' : 'Mark Learned'}
          </button>
        </div>
      </div>
    </div>
  );
}
