import { useState } from 'react';
import { useLocation } from 'wouter';
import { rooms } from '../data/rooms';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

export default function VocabPreviewPage() {
  const [, setLocation] = useLocation();
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const activeRoom = selectedRoom ? rooms.find(r => r.id === selectedRoom) : null;

  return (
    <div className="min-h-screen bg-palace-bg text-palace-text p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => selectedRoom ? setSelectedRoom(null) : setLocation('/')}
            className="p-2 text-palace-text/60 hover:text-palace-gold">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="font-cinzel text-2xl text-palace-gold">Vocab Preview</h1>
            <p className="text-palace-text/50 text-xs">Check which words are visible in each zone image</p>
          </div>
        </div>

        {!activeRoom ? (
          /* Room grid */
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {rooms.map(room => {
              const totalZones = room.zones.length;
              const zonesWithImage = room.zones.filter(z => z.interiorImage).length;
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
                      {/* Vocab labels overlaid */}
                      {zone.interiorVocab?.map((item, i) => (
                        <div
                          key={i}
                          className="absolute transform -translate-x-1/2 -translate-y-1/2"
                          style={{ left: `${item.x}%`, top: `${item.y}%` }}
                        >
                          <span className="bg-black/70 text-white text-xs px-1.5 py-0.5 rounded font-cinzel whitespace-nowrap border border-palace-gold/30">
                            {item.wordId}
                          </span>
                        </div>
                      ))}
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
                        {zone.interiorVocab.map((item, i) => (
                          <span key={i} className="text-xs px-2 py-0.5 bg-palace-text/10 rounded-full text-palace-text/70 font-cinzel">
                            {item.wordId} <span className="text-palace-text/30">({item.x},{item.y})</span>
                          </span>
                        ))}
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
