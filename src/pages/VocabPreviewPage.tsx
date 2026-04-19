import { useState } from 'react';
import { useLocation } from 'wouter';
import { rooms } from '../data/rooms';
import { ArrowLeft, AlertTriangle, Download } from 'lucide-react';

const POS_OVERRIDES_KEY = 'mp-vocab-pos';
const ZONE_POS_KEY = 'mp-zone-pos';

function loadPosOverrides(): Record<string, { x: number; y: number }> {
  try { return JSON.parse(localStorage.getItem(POS_OVERRIDES_KEY) || '{}'); }
  catch { return {}; }
}

function exportPositions() {
  const vocabOverrides = JSON.parse(localStorage.getItem(POS_OVERRIDES_KEY) || '{}');
  const zoneOverrides = JSON.parse(localStorage.getItem(ZONE_POS_KEY) || '{}');
  const combined = { vocabPositions: vocabOverrides, zonePositions: zoneOverrides };
  const total = Object.keys(vocabOverrides).length + Object.keys(zoneOverrides).length;
  if (total === 0) {
    alert('No position overrides saved yet. Drag labels in Edit mode first.');
    return;
  }
  const blob = new Blob([JSON.stringify(combined, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'vocab-position-overrides.json';
  a.click();
}

export default function VocabPreviewPage() {
  const [, setLocation] = useLocation();
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [posOverrides] = useState<Record<string, { x: number; y: number }>>(loadPosOverrides);

  const activeRoom = selectedRoom ? rooms.find(r => r.id === selectedRoom) : null;
  const overrideCount = Object.keys(posOverrides).length;

  return (
    <div className="min-h-screen bg-palace-bg text-palace-text p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => selectedRoom ? setSelectedRoom(null) : setLocation('/')}
            className="p-2 text-palace-text/60 hover:text-palace-gold">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="font-cinzel text-2xl text-palace-gold">Vocab Preview</h1>
            <p className="text-palace-text/50 text-xs">Check which words are visible in each zone image</p>
          </div>
          <button
            onClick={exportPositions}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-cinzel transition-colors ${
              overrideCount > 0
                ? 'bg-palace-gold/20 text-palace-gold border border-palace-gold/40 hover:bg-palace-gold/30'
                : 'bg-palace-text/10 text-palace-text/40 border border-palace-text/10 cursor-not-allowed'
            }`}
            title={overrideCount > 0 ? `Export ${overrideCount} repositioned words` : 'No repositioned words yet'}
          >
            <Download className="w-3.5 h-3.5" />
            Export Positions {overrideCount > 0 && `(${overrideCount})`}
          </button>
        </div>

        {!activeRoom ? (
          /* Room grid */
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {rooms.map(room => {
              const totalZones = room.zones.length;
              const zonesWithImage = room.zones.filter(z => z.interiorImage).length;
              const roomOverrides = room.zones.reduce((n, z) =>
                n + (z.interiorVocab?.filter(iv => posOverrides[`${room.id}:${z.id}:${iv.wordId}`]).length ?? 0), 0);
              return (
                <button
                  key={room.id}
                  onClick={() => setSelectedRoom(room.id)}
                  className="text-left bg-palace-text/5 border border-palace-text/10 rounded-xl p-3 hover:border-palace-gold/40 transition-colors"
                >
                  <p className="font-cinzel text-palace-gold text-sm mb-1">{room.name}</p>
                  <p className="text-palace-text/50 text-xs">{zonesWithImage}/{totalZones} zones have images</p>
                  {zonesWithImage < totalZones && (
                    <div className="flex items-center gap-1 mt-1 text-amber-400 text-xs">
                      <AlertTriangle className="w-3 h-3" />
                      {totalZones - zonesWithImage} missing
                    </div>
                  )}
                  {roomOverrides > 0 && (
                    <div className="mt-1 text-palace-gold/70 text-xs">{roomOverrides} repositioned</div>
                  )}
                </button>
              );
            })}
          </div>
        ) : (
          /* Zone vocab preview for selected room */
          <div>
            <h2 className="font-cinzel text-xl text-palace-gold mb-4">{activeRoom.name}</h2>
            <div className="space-y-8">
              {activeRoom.zones.map(zone => (
                <div key={zone.id} className="bg-palace-text/5 border border-palace-text/10 rounded-2xl overflow-hidden">
                  <div className="p-3 border-b border-palace-text/10 flex items-center justify-between">
                    <div>
                      <span className="font-cinzel text-palace-gold text-sm">{zone.name}</span>
                      <span className="text-palace-text/40 text-xs ml-2">({zone.id})</span>
                    </div>
                    <span className="text-palace-text/40 text-xs">{zone.interiorVocab?.length ?? 0} words</span>
                  </div>

                  {zone.interiorImage ? (
                    <div className="relative" style={{ paddingBottom: '66%' }}>
                      <img
                        src={zone.interiorImage}
                        alt={zone.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                      {zone.interiorVocab?.map((item, i) => {
                        const overrideKey = `${activeRoom.id}:${zone.id}:${item.wordId}`;
                        const override = posOverrides[overrideKey];
                        const pos = override ?? item;
                        const isOverridden = !!override;
                        return (
                          <div
                            key={i}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2"
                            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                          >
                            <span className={`text-xs px-1.5 py-0.5 rounded font-cinzel whitespace-nowrap border ${
                              isOverridden
                                ? 'bg-palace-gold/80 text-black border-palace-gold'
                                : 'bg-black/70 text-white border-palace-gold/30'
                            }`}>
                              {item.wordId}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="p-4 flex items-center gap-2 text-amber-400">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span className="text-sm">No interior image — needs generating</span>
                    </div>
                  )}

                  {/* Word list below image */}
                  {zone.interiorVocab && zone.interiorVocab.length > 0 && (
                    <div className="p-3 border-t border-palace-text/10">
                      <p className="text-palace-text/40 text-xs font-cinzel mb-2">Words at positions:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {zone.interiorVocab.map((item, i) => {
                          const override = posOverrides[`${activeRoom.id}:${zone.id}:${item.wordId}`];
                          const pos = override ?? item;
                          return (
                            <span key={i} className={`text-xs px-2 py-0.5 rounded-full font-cinzel ${
                              override ? 'bg-palace-gold/20 text-palace-gold' : 'bg-palace-text/10 text-palace-text/70'
                            }`}>
                              {item.wordId} <span className="opacity-50">({Math.round(pos.x)},{Math.round(pos.y)})</span>
                              {override && <span className="ml-1 opacity-60">✓</span>}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
