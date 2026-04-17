import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useParams, useLocation } from 'wouter';
import { ArrowLeft, Map, BookOpen, GraduationCap, ClipboardCheck, Volume2, X, Check, Sparkles, MessageCircle, Mic, ChevronRight, Brain, MessagesSquare, Pencil, Trash2, Download, Upload, Loader2, Plus } from 'lucide-react';
import { getRoomById, rooms } from '../data/rooms';
import expandedPhrases from '../data/expanded-phrases.json';
import type { ExpandedPhrase } from '../data/conversation-templates';
import TemplateDrill from '../components/TemplateDrill';
import { translate, isoFor } from '../lib/translate';
import {
  listForZone,
  addUserVocab,
  removeUserVocab,
  updateUserVocab,
  exportJson,
  importJson,
  type UserVocabEntry,
} from '../lib/user-vocab';
import { universalRules } from '../data/cultural-fluency';
import { stories } from '../data/stories';
import { branchingScenarios, type BranchingScenario, type ScenarioNode } from '../data/branching-scenarios';
import { getWordSentences, practicalPhrases } from '../data/word-sentences';
import { useProgress } from '../context/ProgressContext';
import { useSpeechRecognition, compareItalianSpoken } from '../hooks/useSpeechRecognition';
import { useFSRS } from '../hooks/useFSRS';
import { useLanguage } from '../context/LanguageContext';
import type { TabType, VocabularyItem, Gender, Zone } from '../types';
import RoomImage from '../components/RoomImage';

// Hook for Italian speech synthesis
function useItalianSpeech() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const loadVoices = () => {
      setVoices(window.speechSynthesis.getVoices());
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => { window.speechSynthesis.onvoiceschanged = null; };
  }, []);

  const cleanTextForSpeech = (text: string): string => {
    return text
      .replace(/\*+/g, '')
      .replace(/[🐱👨‍🍳☕🍳💬🔍🙅👍💡😤😱😅💳🧾🥐🍯🍦✅⚽🎬🎮🤐👏🍻📱📻😌🏖️⛰️🌳☁️🥪🏃😴🌧️💧☂️🍃🍎🛒💶📝🍊🍞🥛🥚🍳🚪🕰️🔢🧥🪞📷🛏️🚿💊🎫🚂🟡🏥💊🤒]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  };

  const speak = useCallback((text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const cleanedText = cleanTextForSpeech(text);
    if (!cleanedText) return;
    const utterance = new SpeechSynthesisUtterance(cleanedText);
    utterance.lang = 'it-IT';
    utterance.rate = 0.85;
    utterance.pitch = 1;
    const italianVoice = voices.find(v => v.lang.startsWith('it') || v.name.toLowerCase().includes('italian'));
    if (italianVoice) utterance.voice = italianVoice;
    window.speechSynthesis.speak(utterance);
  }, [voices]);

  return { speak, cleanTextForSpeech };
}

export default function RoomPage() {
  const { roomId } = useParams<{ roomId: string }>();
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState<TabType>('explore');
  const [selectedWord, setSelectedWord] = useState<VocabularyItem | null>(null);
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  const [activeScenario, setActiveScenario] = useState<BranchingScenario | null>(null);
  const [currentNodeId, setCurrentNodeId] = useState<string>('');
  
  const room = roomId ? getRoomById(roomId) : undefined;
  const { getWordProgress, markWordLearned, getRoomMastery } = useProgress();
  const { getWord } = useLanguage();
  const { speak } = useItalianSpeech();
  const { addWord: addToSRS, getCard } = useFSRS();
  const [inDeck, setInDeck] = useState<Record<string, boolean>>({});

  const checkDeck = useCallback(async (wordId: string) => {
    const card = await getCard(wordId);
    setInDeck((prev) => ({ ...prev, [wordId]: !!card }));
  }, [getCard]);

  const handleAddToSRS = useCallback(async (wordId: string) => {
    await addToSRS(wordId);
    setInDeck((prev) => ({ ...prev, [wordId]: true }));
  }, [addToSRS]);
  
  if (!room) {
    return (
      <div className="min-h-screen bg-palace-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-cinzel text-3xl text-palace-text mb-4">Room Not Found</h1>
          <button onClick={() => setLocation('/rooms')} className="text-palace-gold">View All Rooms</button>
        </div>
      </div>
    );
  }

  const roomVocab = room.vocabularyIds.map(id => getWord(id)).filter((w): w is VocabularyItem => w !== undefined);
  const currentIndex = rooms.findIndex(r => r.id === roomId);
  const prevRoom = currentIndex > 0 ? rooms[currentIndex - 1] : null;
  const nextRoom = currentIndex < rooms.length - 1 ? rooms[currentIndex + 1] : null;
  const mastery = getRoomMastery(room.id);
  const roomScenarios = branchingScenarios.filter(s => s.roomId === roomId);

  const getGenderColor = (gender: Gender) => {
    switch (gender) {
      case 'masculine': return '#3B82F6';
      case 'feminine': return '#EC4899';
      default: return '#E7A04D';
    }
  };

  const startScenario = (scenario: BranchingScenario) => {
    setActiveScenario(scenario);
    setCurrentNodeId(scenario.startNodeId);
  };

  const currentNode = activeScenario ? activeScenario.nodes[currentNodeId] : null;

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
            {mastery > 0 && <span className="text-palace-gold font-cinzel">{Math.round(mastery)}%</span>}
          </div>
        </div>
      </nav>

      {/* Tabs */}
      <div className="fixed top-14 left-0 right-0 z-40 bg-palace-bg/95 backdrop-blur-md border-b border-palace-text/10">
        <div className="flex justify-center gap-1 p-2 max-w-xl mx-auto flex-wrap">
          {[
            { id: 'explore', label: 'Explore', icon: Map },
            { id: 'learn', label: 'Learn', icon: BookOpen },
            { id: 'practice', label: 'Practice', icon: GraduationCap },
            { id: 'dialogue', label: 'Dialogue', icon: MessageCircle },
            { id: 'culture', label: 'Culture', icon: Sparkles },
            { id: 'test', label: 'Test', icon: ClipboardCheck },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as TabType)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-cinzel text-sm transition-all ${
                activeTab === id ? 'bg-palace-gold text-palace-bg' : 'text-palace-text/70 hover:text-palace-text hover:bg-palace-text/10'
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

          {activeTab === 'explore' && (
            <ExploreTab room={room} roomVocab={roomVocab} setSelectedWord={setSelectedWord} setSelectedZone={setSelectedZone} getGenderColor={getGenderColor} />
          )}

          {activeTab === 'learn' && (
            <LearnTab room={room} roomVocab={roomVocab} getWordProgress={getWordProgress} speak={speak} setSelectedWord={setSelectedWord} getGenderColor={getGenderColor} />
          )}

          {activeTab === 'stories' && <StoriesTab stories={stories} speak={speak} />}

          {activeTab === 'practice' && (
            <PracticeTab vocabulary={roomVocab} roomId={room.id} onMarkLearned={markWordLearned} />
          )}

          {activeTab === 'culture' && <CultureTab speak={speak} />}

          {activeTab === 'test' && <TestTab vocabulary={roomVocab} />}

          {activeTab === 'dialogue' && (
            <DialogueTab roomScenarios={roomScenarios} activeScenario={activeScenario} currentNode={currentNode} onStartScenario={startScenario} onChoice={(nextNodeId) => setCurrentNodeId(nextNodeId)} onClose={() => { setActiveScenario(null); setCurrentNodeId(''); }} speak={speak} />
          )}
        </div>
      </div>

      {/* Room Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-palace-bg/95 backdrop-blur-md border-t border-palace-text/10 py-3 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          {prevRoom ? (
            <button onClick={() => setLocation(`/rooms/${prevRoom.id}`)} className="text-palace-text/70 hover:text-palace-gold">
              <span className="text-xs text-palace-text/40 block">Previous</span>
              <span className="font-cinzel">{prevRoom.name}</span>
            </button>
          ) : <div />}
          <div className="flex gap-1">
            {rooms.map((r) => (
              <button key={r.id} onClick={() => setLocation(`/rooms/${r.id}`)} className={`w-2 h-2 rounded-full transition-all ${r.id === roomId ? 'bg-palace-gold w-6' : 'bg-palace-text/30'}`} />
            ))}
          </div>
          {nextRoom ? (
            <button onClick={() => setLocation(`/rooms/${nextRoom.id}`)} className="text-palace-text/70 hover:text-palace-gold text-right">
              <span className="text-xs text-palace-text/40 block">Next</span>
              <span className="font-cinzel">{nextRoom.name}</span>
            </button>
          ) : <div />}
        </div>
      </div>

      {/* Subroom Overlay */}
      {selectedZone && (
        <SubroomOverlay zone={selectedZone} room={room} roomVocab={roomVocab} onClose={() => setSelectedZone(null)} onSelectWord={setSelectedWord} getGenderColor={getGenderColor} />
      )}

      {/* Word Detail Modal */}
      {selectedWord && (
        <WordModal
          word={selectedWord}
          onClose={() => setSelectedWord(null)}
          onSpeak={() => speak(selectedWord.native)}
          progress={getWordProgress(room.id, selectedWord.id)}
          onMarkLearned={() => markWordLearned(room.id, selectedWord.id)}
          getGenderColor={getGenderColor}
          onAddToSRS={() => handleAddToSRS(selectedWord.id)}
          onCheckDeck={() => checkDeck(selectedWord.id)}
          inDeck={!!inDeck[selectedWord.id]}
        />
      )}
    </div>
  );
}

// NEW Explore Tab - Room image with subrooms listed BELOW
function ExploreTab({ room, roomVocab, setSelectedWord, setSelectedZone, getGenderColor }: {
  room: ReturnType<typeof getRoomById>;
  roomVocab: VocabularyItem[];
  setSelectedWord: (w: VocabularyItem) => void;
  setSelectedZone: (z: Zone) => void;
  getGenderColor: (g: Gender) => string;
}) {
  if (!room) return null;
  
  return (
    <div className="space-y-8">
      {/* Room Image - No clickable zones inside */}
      <div className="relative aspect-[4/3] bg-palace-bg/50 rounded-2xl overflow-hidden border border-palace-text/10">
        <RoomImage src={room.image} alt={room.name} roomId={room.id} className="w-full h-full" />
      </div>

      {/* Subrooms Grid - Listed BELOW the image */}
      <div className="space-y-4">
        <h3 className="font-cinzel text-xl text-palace-text">Explore Areas</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {room.zones.map(zone => {
            const zoneWordCount = zone.interiorVocab?.length || 0;
            return (
              <button
                key={zone.id}
                onClick={() => setSelectedZone(zone)}
                className="p-4 rounded-xl border border-palace-text/20 bg-palace-bg/50 hover:border-palace-gold hover:bg-palace-gold/10 transition-all text-left group"
              >
                <div className="flex items-start justify-between">
                  <span className="text-2xl">{zone.icon}</span>
                  <ChevronRight className="w-5 h-5 text-palace-text/30 group-hover:text-palace-gold transition-colors" />
                </div>
                <h4 className="font-cinzel text-palace-text mt-2">{zone.name}</h4>
                <p className="text-palace-gold text-sm">{zone.nameNative}</p>
                <p className="text-palace-text/50 text-xs mt-1">{zoneWordCount} words</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Word List */}
      <div className="space-y-4">
        <h3 className="font-cinzel text-xl text-palace-text">Quick Reference</h3>
        <div className="flex flex-wrap gap-2">
          {roomVocab.slice(0, 20).map(word => (
            <button
              key={word.id}
              onClick={() => setSelectedWord(word)}
              className="px-3 py-1.5 rounded-full text-sm flex items-center gap-2 transition-colors"
              style={{ 
                backgroundColor: `${getGenderColor(word.gender)}20`,
                color: getGenderColor(word.gender)
              }}
            >
              <span>{word.emoji}</span>
              <span>{word.native}</span>
            </button>
          ))}
          {roomVocab.length > 20 && (
            <span className="px-3 py-1.5 text-palace-text/50 text-sm">+{roomVocab.length - 20} more</span>
          )}
        </div>
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

// Subroom Overlay - Shows interior image with vocabulary positioned on it
function SubroomOverlay({ zone, room, roomVocab, onClose, onSelectWord, getGenderColor }: {
  zone: Zone;
  room: ReturnType<typeof getRoomById>;
  roomVocab: VocabularyItem[];
  onClose: () => void;
  onSelectWord: (w: VocabularyItem) => void;
  getGenderColor: (g: Gender) => string;
}) {
  if (!room) return null;

  const zoneWords = zone.interiorVocab?.map(iv => roomVocab.find(w => w.id === iv.wordId)).filter(Boolean) || [];
  const [showPractice, setShowPractice] = useState(false);
  const roomPhrases = (expandedPhrases as ExpandedPhrase[]).filter((p) => p.roomId === room.id);

  const { currentLanguage } = useLanguage();
  const targetLang = isoFor(currentLanguage);
  const speechLang = useMemo(() => {
    switch (targetLang) {
      case 'it': return 'it-IT';
      case 'fr': return 'fr-FR';
      case 'es': return 'es-ES';
      default: return 'en-US';
    }
  }, [targetLang]);
  const speakIt = useCallback((text: string) => {
    if (!text || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = speechLang;
    u.rate = 0.85;
    window.speechSynthesis.speak(u);
  }, [speechLang]);

  const [editMode, setEditMode] = useState(false);
  const [userEntries, setUserEntries] = useState<UserVocabEntry[]>(() =>
    listForZone(targetLang, room.id, zone.id),
  );
  const [draft, setDraft] = useState<{ x: number; y: number; english: string; loading: boolean; error: string | null } | null>(null);
  const [editingEntry, setEditingEntry] = useState<{ id: string; native: string } | null>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setUserEntries(listForZone(targetLang, room.id, zone.id));
  }, [targetLang, room.id, zone.id]);

  const refreshUser = useCallback(() => {
    setUserEntries(listForZone(targetLang, room.id, zone.id));
  }, [targetLang, room.id, zone.id]);

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!editMode) return;
    if (e.target !== e.currentTarget && !(e.target as HTMLElement).dataset.imageSurface) return;
    const rect = imageWrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setDraft({ x, y, english: '', loading: false, error: null });
  };

  const submitDraft = async () => {
    if (!draft || !draft.english.trim() || draft.loading) return;
    setDraft({ ...draft, loading: true, error: null });
    let native = '';
    let failed = false;
    try {
      native = await translate(draft.english, targetLang, 'en');
    } catch (err) {
      failed = true;
    }
    addUserVocab(targetLang, {
      roomId: room.id,
      zoneId: zone.id,
      x: draft.x,
      y: draft.y,
      english: draft.english.trim(),
      native,
      needsReview: true,
    });
    refreshUser();
    if (failed) {
      setDraft({ ...draft, loading: false, error: 'Auto-translate failed — saved with empty translation, edit it manually.' });
      setTimeout(() => setDraft(null), 1800);
    } else {
      setDraft(null);
    }
  };

  const handleDeleteUser = (id: string) => {
    removeUserVocab(targetLang, id);
    refreshUser();
  };

  const handleSaveEdit = () => {
    if (!editingEntry) return;
    updateUserVocab(targetLang, editingEntry.id, {
      native: editingEntry.native.trim(),
      needsReview: false,
    });
    setEditingEntry(null);
    refreshUser();
  };

  const handleRetranslate = async (entry: UserVocabEntry) => {
    updateUserVocab(targetLang, entry.id, { needsReview: true });
    try {
      const native = await translate(entry.english, targetLang, 'en');
      updateUserVocab(targetLang, entry.id, { native, needsReview: true });
    } catch {
      // ignore — entry still exists with prior native
    }
    refreshUser();
  };

  const handleExport = () => {
    const json = exportJson(targetLang);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `memory-palace-${targetLang}-vocab.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportPick = () => fileInputRef.current?.click();

  const handleImportFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      importJson(text, 'merge');
      refreshUser();
    } catch (err) {
      alert('Import failed — file must be JSON exported by this app.');
    } finally {
      e.target.value = '';
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-palace-bg/98 backdrop-blur-md p-4">
      <div className="max-w-4xl mx-auto h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <span className="text-3xl">{zone.icon}</span>
            <div>
              <h2 className="font-cinzel text-2xl text-palace-text">{zone.name}</h2>
              <p className="text-palace-gold">{zone.nameNative}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {roomPhrases.length > 0 && (
              <button
                onClick={() => setShowPractice(true)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-palace-gold/40 text-palace-gold hover:bg-palace-gold/10 font-cinzel text-sm"
              >
                <MessagesSquare className="w-4 h-4" />
                Practice
              </button>
            )}
            <button
              onClick={() => { setEditMode((v) => !v); setDraft(null); }}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg border font-cinzel text-sm transition-colors ${
                editMode
                  ? 'border-palace-gold bg-palace-gold text-palace-bg'
                  : 'border-palace-gold/40 text-palace-gold hover:bg-palace-gold/10'
              }`}
              title="Add your own words to this zone"
            >
              <Pencil className="w-4 h-4" />
              {editMode ? 'Done' : 'Edit'}
            </button>
            {editMode && (
              <>
                <button
                  onClick={handleExport}
                  className="p-2 text-palace-text/70 hover:text-palace-gold"
                  title="Export your words as JSON"
                >
                  <Download className="w-5 h-5" />
                </button>
                <button
                  onClick={handleImportPick}
                  className="p-2 text-palace-text/70 hover:text-palace-gold"
                  title="Import a JSON backup"
                >
                  <Upload className="w-5 h-5" />
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="application/json"
                  className="hidden"
                  onChange={handleImportFile}
                />
              </>
            )}
            <button onClick={onClose} className="p-2 text-palace-text/70 hover:text-palace-gold">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        {editMode && (
          <div className="mb-2 text-xs text-palace-gold/80 font-cinzel flex items-center gap-2">
            <Plus className="w-3 h-3" />
            Click anywhere on the image to add a word. Auto-translates to {targetLang.toUpperCase()}.
          </div>
        )}
        {showPractice && (
          <div className="fixed inset-0 z-60 bg-palace-bg/98 backdrop-blur-md overflow-y-auto p-4">
            <div className="max-w-2xl mx-auto flex justify-end mb-2">
              <button
                onClick={() => setShowPractice(false)}
                className="p-2 text-palace-text/70 hover:text-palace-gold"
                aria-label="Close practice"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <TemplateDrill phrases={roomPhrases} title={`${room.name} — Practice`} />
          </div>
        )}
        
        {/* Interior Image with Vocabulary Labels */}
        <div
          ref={imageWrapRef}
          onClick={handleImageClick}
          className={`flex-1 relative bg-palace-bg/50 rounded-2xl overflow-hidden border border-palace-text/10 ${
            editMode ? 'cursor-crosshair ring-2 ring-palace-gold/40' : ''
          }`}
          data-image-surface="true"
        >
          {zone.interiorImage ? (
            <div data-image-surface="true" className="w-full h-full pointer-events-none">
              <RoomImage src={zone.interiorImage} alt={zone.name} roomId={room.id} className="w-full h-full" />
            </div>
          ) : (
            <div data-image-surface="true" className="w-full h-full flex items-center justify-center">
              <span className="text-palace-text/40">Interior image coming soon</span>
            </div>
          )}

          {/* Preset vocabulary labels */}
          {zone.interiorVocab?.map((iv) => {
            const word = roomVocab.find(w => w.id === iv.wordId);
            if (!word) return null;
            return (
              <button
                key={word.id}
                onClick={(e) => { e.stopPropagation(); onSelectWord(word); }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${iv.x}%`, top: `${iv.y}%` }}
              >
                <div
                  className="w-4 h-4 rounded-full border-2 border-white shadow-lg group-hover:scale-150 transition-transform"
                  style={{ backgroundColor: getGenderColor(word.gender) }}
                />
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap z-10">
                  <span
                    className="px-2 py-0.5 rounded text-xs font-cinzel font-bold shadow-md"
                    style={{
                      backgroundColor: getGenderColor(word.gender),
                      color: 'white'
                    }}
                  >
                    {word.native}
                  </span>
                </div>
                <div className="absolute top-[calc(100%+18px)] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  <span className="bg-palace-bg/90 text-palace-text/70 px-2 py-0.5 rounded text-xs border border-palace-text/20">
                    {word.english}
                  </span>
                </div>
              </button>
            );
          })}

          {/* User-added vocabulary markers */}
          {userEntries.map((entry) => (
            <div
              key={entry.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
              style={{ left: `${entry.x}%`, top: `${entry.y}%` }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-4 h-4 rounded-full border-2 border-palace-gold bg-palace-bg shadow-lg group-hover:scale-150 transition-transform" />
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap z-10 flex items-center gap-1">
                {editMode && editingEntry?.id === entry.id ? (
                  <div className="flex items-center gap-1">
                    <input
                      autoFocus
                      type="text"
                      value={editingEntry.native}
                      onChange={(e) => setEditingEntry({ ...editingEntry, native: e.target.value })}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSaveEdit();
                        if (e.key === 'Escape') setEditingEntry(null);
                      }}
                      className="w-28 px-2 py-0.5 rounded text-xs bg-palace-bg border border-palace-gold text-palace-text focus:outline-none"
                    />
                    <button
                      onClick={handleSaveEdit}
                      className="p-1 rounded bg-palace-gold text-palace-bg"
                      title="Save"
                    >
                      <Check className="w-3 h-3" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      if (editMode) {
                        setEditingEntry({ id: entry.id, native: entry.native });
                      } else {
                        speakIt(entry.native || entry.english);
                      }
                    }}
                    className="px-2 py-0.5 rounded text-xs font-cinzel font-bold shadow-md bg-palace-gold text-palace-bg border border-palace-bg/20"
                    title={editMode ? 'Click to edit translation' : entry.needsReview ? 'Auto-translated — verify with DeepL later' : undefined}
                  >
                    {entry.native || entry.english}
                    {entry.needsReview && <span className="ml-1 opacity-60">·</span>}
                  </button>
                )}
                {editMode && editingEntry?.id !== entry.id && (
                  <button
                    onClick={() => handleDeleteUser(entry.id)}
                    className="p-1 rounded bg-red-500/80 text-white hover:bg-red-500"
                    title="Remove"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                )}
              </div>
              <div className="absolute top-[calc(100%+22px)] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 flex items-center gap-1">
                <span className="bg-palace-bg/90 text-palace-text/70 px-2 py-0.5 rounded text-xs border border-palace-text/20">
                  {entry.english}
                </span>
                {editMode && (
                  <button
                    onClick={() => handleRetranslate(entry)}
                    className="text-xs text-palace-gold/80 hover:text-palace-gold underline"
                  >
                    re-translate
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* Draft popover — in-place form for a new word */}
          {draft && (
            <div
              className="absolute z-20 -translate-x-1/2"
              style={{ left: `${draft.x}%`, top: `${draft.y}%` }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mt-2 w-56 bg-palace-bg border border-palace-gold rounded-xl shadow-2xl p-3">
                <p className="text-xs text-palace-text/60 font-cinzel mb-1">
                  New word → {targetLang.toUpperCase()}
                </p>
                <input
                  autoFocus
                  type="text"
                  value={draft.english}
                  placeholder="english word"
                  onChange={(e) => setDraft({ ...draft, english: e.target.value, error: null })}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') submitDraft();
                    if (e.key === 'Escape') setDraft(null);
                  }}
                  className="w-full px-2 py-1 rounded bg-palace-bg/50 border border-palace-text/20 text-palace-text text-sm focus:outline-none focus:border-palace-gold"
                />
                {draft.error && (
                  <p className="text-xs text-red-400 mt-1">{draft.error}</p>
                )}
                <div className="flex items-center justify-between mt-2">
                  <button
                    onClick={() => setDraft(null)}
                    className="text-xs text-palace-text/50 hover:text-palace-text"
                  >
                    cancel
                  </button>
                  <button
                    onClick={submitDraft}
                    disabled={!draft.english.trim() || draft.loading}
                    className="flex items-center gap-1 px-3 py-1 rounded bg-palace-gold text-palace-bg text-xs font-cinzel disabled:opacity-50"
                  >
                    {draft.loading ? <Loader2 className="w-3 h-3 animate-spin" /> : <Plus className="w-3 h-3" />}
                    save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Word list for this zone */}
        <div className="mt-4 flex flex-wrap gap-2">
          {zoneWords.map(word => word && (
            <button
              key={word.id}
              onClick={() => onSelectWord(word)}
              className="px-3 py-1.5 bg-palace-text/10 rounded-full text-sm text-palace-text hover:bg-palace-gold/20 hover:text-palace-gold transition-colors flex items-center gap-2"
            >
              <span>{word.emoji}</span>
              <span>{word.native}</span>
              <span className="text-palace-text/50">- {word.english}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Learn Tab with contextual sentences
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
            const sentences = getWordSentences(word.id, word);
            return (
              <div key={word.id} className="p-4 hover:bg-palace-text/5">
                <div className="flex items-center justify-between cursor-pointer" onClick={() => setSelectedWord(word)}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: getGenderColor(word.gender) }}>
                      {word.emoji || word.native.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-cinzel text-palace-text text-lg">{word.native}</p>
                      <p className="text-palace-text/50 text-sm">{word.english}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {progress?.learned && <Check className="w-5 h-5 text-green-500" />}
                    <button onClick={(e) => { e.stopPropagation(); speak(word.native); }} className="p-2 text-palace-text/50 hover:text-palace-gold">
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                {/* Example sentences */}
                {sentences.length > 0 && (
                  <div className="mt-3 ml-13 pl-4 border-l-2 border-palace-gold/30">
                    <p className="text-palace-text/40 text-xs uppercase mb-1">Examples:</p>
                    {sentences.slice(0, 2).map((sent, i) => (
                      <div key={i} className="py-1">
                        <p className="text-palace-text/70 text-sm italic">"{sent.italian}"</p>
                        <p className="text-palace-text/50 text-xs">{sent.english}</p>
                      </div>
                    ))}
                  </div>
                )}
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

// Stories Tab - Full text view
function StoriesTab({ stories, speak }: { stories: typeof import('../data/stories').stories; speak: (text: string) => void }) {
  const [selectedStory, setSelectedStory] = useState<typeof stories[0] | null>(null);
  const [highlightedLine, setHighlightedLine] = useState<number | null>(null);

  if (selectedStory) {
    const handleLineClick = (index: number) => {
      setHighlightedLine(index);
      speak(selectedStory.lines[index].italian);
    };

    return (
      <div className="space-y-6">
        <button 
          onClick={() => { setSelectedStory(null); setHighlightedLine(null); }}
          className="text-palace-text/70 hover:text-palace-gold flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Stories
        </button>

        <div className="bg-palace-bg/50 border border-palace-text/10 rounded-2xl p-6">
          <h3 className="font-cinzel text-2xl text-palace-text mb-1">{selectedStory.title}</h3>
          <p className="text-palace-gold text-sm mb-4">{selectedStory.englishTitle}</p>
          
          {/* Full Story Text */}
          <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
            {selectedStory.lines.map((line, i) => (
              <div 
                key={i}
                onClick={() => handleLineClick(i)}
                className={`p-3 rounded-xl cursor-pointer transition-all ${
                  highlightedLine === i 
                    ? 'bg-palace-gold/20 border border-palace-gold/50' 
                    : 'hover:bg-palace-text/5 border border-transparent'
                }`}
              >
                <p className="font-cinzel text-lg text-palace-text">{line.italian}</p>
                <p className="text-palace-text/60 text-sm mt-1">{line.english}</p>
              </div>
            ))}
          </div>

          {/* Listen to Full Story */}
          <button
            onClick={() => {
              const fullText = selectedStory.lines.map(l => l.italian).join('. ');
              speak(fullText);
            }}
            className="w-full mt-6 p-4 bg-palace-gold/20 rounded-xl flex items-center justify-center gap-2 text-palace-gold hover:bg-palace-gold/30 transition-colors"
          >
            <Volume2 className="w-5 h-5" />
            <span className="font-cinzel">Listen to Full Story</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="font-cinzel text-xl text-palace-text mb-2">Classic Italian Stories</h3>
        <p className="text-palace-text/60 text-sm">Read and listen to famous Italian fables and classics</p>
      </div>

      <div className="grid gap-4">
        {stories.map(story => (
          <button
            key={story.id}
            onClick={() => setSelectedStory(story)}
            className="p-4 rounded-xl border border-palace-text/20 bg-palace-bg/50 hover:border-palace-gold hover:bg-palace-gold/10 transition-all text-left"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-cinzel text-palace-text">{story.title}</h4>
                <p className="text-palace-gold text-sm">{story.englishTitle}</p>
              </div>
              <div className="text-right">
                <span className="text-xs bg-palace-gold/20 text-palace-gold px-2 py-1 rounded-full">{story.level}</span>
                <p className="text-palace-text/40 text-xs mt-1">{story.lines.length} lines</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// Practice, Test, Culture, Dialogue, WordModal components...
// (keeping the same implementation as before)

function PracticeTab({ vocabulary, roomId, onMarkLearned }: { vocabulary: VocabularyItem[]; roomId: string; onMarkLearned: (_roomId: string, wordId: string) => void }) {
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
      if (result.isMatch) onMarkLearned(roomId, currentWord.id);
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
        {['flashcard', 'gender', 'speak'].map(m => (
          <button key={m} onClick={() => setMode(m as typeof mode)} className={`px-4 py-2 rounded-full font-cinzel text-sm ${mode === m ? 'bg-palace-gold text-palace-bg' : 'text-palace-text/70'}`}>
            {m === 'flashcard' ? 'Flashcards' : m === 'gender' ? 'Gender Practice' : 'Speak It'}
          </button>
        ))}
      </div>

      <div className="text-center text-palace-text/50 text-sm">Card {currentIndex + 1} of {vocabulary.length}</div>

      {mode === 'flashcard' && (
        <div onClick={() => setFlipped(!flipped)} className="aspect-[3/2] max-w-md mx-auto cursor-pointer bg-palace-bg/50 border border-palace-text/20 rounded-2xl flex flex-col items-center justify-center">
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
            <button onClick={() => checkGender('masculine')} className="px-8 py-4 bg-palace-blue text-white rounded-full font-cinzel text-lg hover:opacity-90">♂ il (masculine)</button>
            <button onClick={() => checkGender('feminine')} className="px-8 py-4 bg-palace-pink text-white rounded-full font-cinzel text-lg hover:opacity-90">♀ la (feminine)</button>
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
              <button onClick={isListening ? stopListening : startListening} className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center transition-all ${isListening ? 'bg-red-500/20 text-red-500 animate-pulse scale-110' : 'bg-palace-gold/20 text-palace-gold hover:bg-palace-gold/30 hover:scale-105'}`}>
                <Mic className="w-10 h-10" />
              </button>
              {isListening && <p className="text-palace-text/60 text-sm italic">{transcript || 'Listening...'}</p>}
              {speakResult && !isListening && (
                <div className={`p-4 rounded-xl ${speakResult.isMatch ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
                  <p className="text-palace-text/70 text-sm">You said: "{transcript}"</p>
                  <p className="text-palace-text/70 text-sm">Expected: "{currentWord.native}"</p>
                </div>
              )}
            </>
          )}
        </div>
      )}

      <div className="flex justify-center">
        <button onClick={nextWord} className="px-6 py-3 bg-palace-text/10 text-palace-text rounded-full font-cinzel hover:bg-palace-text/20">Next Word →</button>
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
    if (selected.id === currentWord.id) setScore(score + 1);
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
        <button onClick={() => setCurrentIndex(0)} className="px-6 py-3 bg-palace-gold text-palace-bg rounded-full font-cinzel">Restart Test</button>
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
                ? option.id === currentWord.id ? 'bg-green-500/20 border-green-500 text-green-500' : selectedOption?.id === option.id ? 'bg-red-500/20 border-red-500 text-red-500' : 'bg-palace-text/5 border-palace-text/10 text-palace-text/50'
                : 'bg-palace-bg/50 border-palace-text/20 text-palace-text hover:border-palace-gold'
            }`}
          >
            {option.english}
          </button>
        ))}
      </div>
      {answered && (
        <div className="text-center">
          <button onClick={nextQuestion} className="px-6 py-3 bg-palace-gold text-palace-bg rounded-full font-cinzel">
            {currentIndex < vocabulary.length - 1 ? 'Next Question →' : 'See Results'}
          </button>
        </div>
      )}
    </div>
  );
}

function CultureTab({ speak }: { speak: (text: string) => void }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = ['all', 'food', 'coffee', 'greetings', 'timing', 'shopping', 'transport', 'social'];
  const filteredRules = selectedCategory === 'all' ? universalRules : universalRules.filter(r => r.category === selectedCategory);
  const categoryColors: Record<string, string> = { food: '#22c55e', coffee: '#a16207', greetings: '#3b82f6', timing: '#f59e0b', shopping: '#8b5cf6', transport: '#6366f1', social: '#ec4899' };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map(cat => (
          <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-3 py-1.5 rounded-full text-xs font-cinzel transition-all ${selectedCategory === cat ? 'bg-palace-gold text-palace-bg' : 'bg-palace-text/10 text-palace-text/70 hover:bg-palace-text/20'}`}>
            {cat === 'all' ? 'All Rules' : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredRules.map(rule => (
          <div key={rule.id} className="bg-palace-bg/50 border border-palace-text/10 rounded-2xl overflow-hidden">
            <div className="p-4 border-b border-palace-text/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded-full text-xs text-white" style={{ backgroundColor: categoryColors[rule.category] || '#666' }}>{rule.category}</span>
              </div>
              <h3 className="font-cinzel text-lg text-palace-text">{rule.title}</h3>
              <p className="text-palace-gold text-sm italic">{rule.titleNative}</p>
            </div>
            <div className="p-4 space-y-4">
              <div className="bg-red-500/10 border-l-4 border-red-500 p-3 rounded-r-lg">
                <p className="text-red-400 text-xs font-cinzel uppercase mb-1">The Rule</p>
                <p className="text-palace-text">{rule.rule}</p>
              </div>
              <div>
                <p className="text-palace-text/50 text-xs uppercase mb-1">Why it matters</p>
                <p className="text-palace-text/80 text-sm">{rule.why}</p>
              </div>
              <div className="bg-green-500/10 border-l-4 border-green-500 p-3 rounded-r-lg">
                <p className="text-green-400 text-xs font-cinzel uppercase mb-1">The Fix</p>
                <p className="text-palace-text text-sm">{rule.solution}</p>
              </div>
              <div>
                <p className="text-palace-gold text-xs font-cinzel uppercase mb-2">Phrases to Use</p>
                <div className="space-y-2">
                  {rule.phrases.map((phrase, i) => (
                    <button key={i} onClick={() => speak(phrase.italian)} className="w-full text-left p-3 bg-palace-text/5 rounded-xl hover:bg-palace-text/10 transition-colors group">
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

function DialogueTab({ roomScenarios, activeScenario, currentNode, onStartScenario, onChoice, onClose, speak }: {
  roomScenarios: BranchingScenario[];
  activeScenario: BranchingScenario | null;
  currentNode: ScenarioNode | null;
  onStartScenario: (s: BranchingScenario) => void;
  onChoice: (nextNodeId: string) => void;
  onClose: () => void;
  speak: (text: string) => void;
}) {
  if (activeScenario && currentNode) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <button onClick={onClose} className="text-palace-text/70 hover:text-palace-gold flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Scenarios
          </button>
          <div className="text-center">
            <span className="text-palace-gold font-cinzel">{activeScenario.title}</span>
            <span className="text-palace-text/50 text-sm block">{activeScenario.timeContext}</span>
          </div>
          <div className="w-20" />
        </div>

        <div className="bg-palace-gold/10 border border-palace-gold/30 rounded-xl p-4">
          <p className="text-palace-text/70 text-sm italic">💡 {activeScenario.culturalLesson}</p>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style={{ backgroundColor: activeScenario.catCharacter.color }}>
            {activeScenario.catCharacter.emoji}
          </div>
          <div>
            <p className="font-cinzel text-palace-text">{activeScenario.catCharacter.name}</p>
          </div>
        </div>

        <div className={`bg-palace-bg/50 border rounded-2xl p-6 ${
          currentNode.backgroundEffect === 'happy' ? 'border-green-500/50 bg-green-500/5' :
          currentNode.backgroundEffect === 'angry' ? 'border-red-500/50 bg-red-500/5' :
          currentNode.backgroundEffect === 'surprised' ? 'border-yellow-500/50 bg-yellow-500/5' :
          'border-palace-text/20'
        }`}>
          <p className="text-palace-text text-lg mb-2">{currentNode.text}</p>
          {currentNode.textItalian && <p className="text-palace-gold text-sm italic">{currentNode.textItalian}</p>}
          {currentNode.textItalian && (
            <button onClick={() => speak(currentNode.textItalian || currentNode.text)} className="mt-4 flex items-center gap-2 text-palace-text/50 hover:text-palace-gold transition-colors">
              <Volume2 className="w-4 h-4" />
              <span className="text-sm">Listen in Italian</span>
            </button>
          )}
        </div>

        {currentNode.choices.length > 0 && (
          <div className="space-y-3">
            <p className="text-palace-text/50 text-sm">What do you do?</p>
            {currentNode.choices.map((choice, i) => (
              <button key={i} onClick={() => onChoice(choice.nextNodeId)} className="w-full p-4 rounded-xl border border-palace-text/20 bg-palace-bg/50 hover:border-palace-gold hover:bg-palace-gold/10 transition-all text-left">
                <p className="text-palace-text">{choice.text}</p>
                {choice.textItalian && <p className="text-palace-gold text-sm italic mt-1">{choice.textItalian}</p>}
              </button>
            ))}
          </div>
        )}

        {currentNode.choices.length === 0 && (
          <div className="text-center">
            <button onClick={onClose} className="px-6 py-3 bg-palace-gold text-palace-bg rounded-full font-cinzel">Scenario Complete</button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="font-cinzel text-xl text-palace-text mb-2">Interactive Scenarios</h3>
        <p className="text-palace-text/60 text-sm">Practice conversations with cat characters in real Italian situations</p>
      </div>

      {roomScenarios.length > 0 ? (
        <div className="space-y-3">
          {roomScenarios.map(scenario => (
            <button key={scenario.id} onClick={() => onStartScenario(scenario)} className="w-full p-4 rounded-xl border border-palace-text/20 bg-palace-bg/50 hover:border-palace-gold hover:bg-palace-gold/10 transition-all text-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style={{ backgroundColor: scenario.catCharacter.color }}>
                  {scenario.catCharacter.emoji}
                </div>
                <div className="flex-1">
                  <h4 className="font-cinzel text-palace-text">{scenario.title}</h4>
                  <p className="text-palace-gold text-sm">{scenario.titleNative}</p>
                  <p className="text-palace-text/50 text-xs mt-1">{scenario.timeContext}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-palace-text/30" />
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-palace-text/50">No scenarios available for this room yet.</p>
        </div>
      )}
    </div>
  );
}

function WordModal({ word, onClose, onSpeak, progress, onMarkLearned, getGenderColor, onAddToSRS, onCheckDeck, inDeck }: {
  word: VocabularyItem;
  onClose: () => void;
  onSpeak: () => void;
  progress: { learned: boolean; attempts: number; correct: number } | undefined;
  onMarkLearned: () => void;
  getGenderColor: (g: Gender) => string;
  onAddToSRS: () => void;
  onCheckDeck: () => void;
  inDeck: boolean;
}) {
  const sentences = getWordSentences(word.id, word);
  const [showPhrases, setShowPhrases] = useState(false);

  useEffect(() => { onCheckDeck(); }, [word.id, onCheckDeck]);
  
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-palace-bg border border-palace-text/20 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl" style={{ backgroundColor: getGenderColor(word.gender) }}>
                {word.emoji || word.native.charAt(0).toUpperCase()}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-palace-text/50 text-sm">{word.gender === 'masculine' ? 'il' : word.gender === 'feminine' ? 'la' : ''}</span>
                </div>
                <h3 className="font-cinzel text-3xl text-palace-text">{word.native}</h3>
              </div>
            </div>
            <button onClick={onClose} className="text-palace-text/50 hover:text-palace-text">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Translation */}
          <div className="mb-6 p-4 bg-palace-gold/10 rounded-xl">
            <p className="text-palace-text/50 text-sm mb-1">English:</p>
            <p className="text-palace-text text-xl font-cinzel">{word.english}</p>
          </div>

          {/* Pronunciation */}
          <div className="mb-6">
            <p className="text-palace-text/50 text-sm mb-1">Pronunciation:</p>
            <p className="text-palace-gold font-cinzel text-lg">/{word.pronunciation}/</p>
          </div>

          {/* Contextual Sentences */}
          {sentences.length > 0 && (
            <div className="mb-6">
              <p className="text-palace-text/70 text-sm font-cinzel mb-3">📚 Examples in Context:</p>
              <div className="space-y-3">
                {sentences.map((sent, i) => (
                  <div key={i} className="p-3 bg-palace-text/5 rounded-xl">
                    <p className="text-palace-text font-cinzel">{sent.italian}</p>
                    <p className="text-palace-text/60 text-sm mt-1">{sent.english}</p>
                    <span className="text-xs text-palace-gold/70 mt-1 inline-block">💡 {sent.context}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Practical Phrases Toggle */}
          <button onClick={() => setShowPhrases(!showPhrases)} className="w-full p-3 bg-palace-text/10 rounded-xl text-palace-text hover:bg-palace-text/20 transition-colors mb-4 flex items-center justify-between">
            <span className="font-cinzel">💬 Useful Phrases</span>
            <span>{showPhrases ? '▲' : '▼'}</span>
          </button>

          {showPhrases && (
            <div className="mb-6 space-y-2">
              {practicalPhrases.map((phrase, i) => (
                <div key={i} className="p-3 bg-palace-gold/5 rounded-xl border border-palace-gold/20">
                  <p className="text-palace-text font-cinzel text-sm">{phrase.italian}</p>
                  <p className="text-palace-text/60 text-xs mt-1">{phrase.english}</p>
                  <p className="text-palace-text/40 text-xs italic mt-1">{phrase.situation}</p>
                </div>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3">
            <button onClick={onSpeak} className="flex-1 flex items-center justify-center gap-2 p-3 bg-palace-gold/20 text-palace-gold rounded-xl hover:bg-palace-gold/30 transition-colors">
              <Volume2 className="w-5 h-5" />
              <span className="font-cinzel">Listen</span>
            </button>
            <button onClick={onMarkLearned} className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl transition-colors ${progress?.learned ? 'bg-green-500/20 text-green-500' : 'bg-palace-text/10 text-palace-text hover:bg-palace-text/20'}`}>
              <Check className="w-5 h-5" />
              <span className="font-cinzel">{progress?.learned ? 'Learned' : 'Mark Learned'}</span>
            </button>
          </div>
          <button
            onClick={onAddToSRS}
            disabled={inDeck}
            className={`mt-3 w-full flex items-center justify-center gap-2 p-3 rounded-xl transition-colors font-cinzel ${
              inDeck
                ? 'bg-green-500/20 text-green-500 cursor-default'
                : 'bg-palace-gold text-palace-bg hover:bg-palace-gold/90'
            }`}
          >
            <Brain className="w-5 h-5" />
            <span>{inDeck ? 'In Review Deck' : 'Add to Review Deck'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
