import { useMemo, useState } from 'react';
import { rooms } from '../data/rooms';
import { italianVocabulary } from '../data/italian-generated';

interface EditState {
  removed: Record<string, string[]>;
  added: Record<string, string[]>;
}

const LS_KEY = 'vocab-audit-edits-v1';

function loadEdits(): EditState {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return { removed: {}, added: {} };
    return JSON.parse(raw);
  } catch {
    return { removed: {}, added: {} };
  }
}

function saveEdits(e: EditState) {
  localStorage.setItem(LS_KEY, JSON.stringify(e));
}

export default function AuditPage() {
  const [edits, setEdits] = useState<EditState>(() => loadEdits());
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [filter, setFilter] = useState<string>('all');

  const update = (next: EditState) => {
    setEdits(next);
    saveEdits(next);
  };

  const keyOf = (roomId: string, zoneId: string) => `${roomId}::${zoneId}`;

  const toggleRemoved = (roomId: string, zoneId: string, word: string) => {
    const k = keyOf(roomId, zoneId);
    const cur = new Set(edits.removed[k] ?? []);
    if (cur.has(word)) cur.delete(word);
    else cur.add(word);
    update({ ...edits, removed: { ...edits.removed, [k]: [...cur] } });
  };

  const addWords = (roomId: string, zoneId: string) => {
    const k = keyOf(roomId, zoneId);
    const draft = (drafts[k] ?? '').trim();
    if (!draft) return;
    const parts = draft
      .split(/[,\n]/)
      .map((s) => s.trim())
      .filter(Boolean);
    const next = [...(edits.added[k] ?? []), ...parts];
    update({ ...edits, added: { ...edits.added, [k]: next } });
    setDrafts({ ...drafts, [k]: '' });
  };

  const removeAddition = (roomId: string, zoneId: string, idx: number) => {
    const k = keyOf(roomId, zoneId);
    const cur = [...(edits.added[k] ?? [])];
    cur.splice(idx, 1);
    update({ ...edits, added: { ...edits.added, [k]: cur } });
  };

  const clearAll = () => {
    if (!confirm('Clear all audit edits from this browser?')) return;
    update({ removed: {}, added: {} });
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(edits, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vocab-audit-edits-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const gloss = (wordId: string): string => {
    const v = (italianVocabulary as Record<string, { english?: string }>)[wordId];
    return v?.english ?? '';
  };

  const totals = useMemo(() => {
    let removed = 0;
    let added = 0;
    Object.values(edits.removed).forEach((a) => (removed += a.length));
    Object.values(edits.added).forEach((a) => (added += a.length));
    return { removed, added };
  }, [edits]);

  const visibleRooms = filter === 'all' ? rooms : rooms.filter((r) => r.id === filter);

  return (
    <div className="min-h-screen bg-neutral-50 p-6">
      <div className="max-w-5xl mx-auto">
        <header className="sticky top-0 z-10 bg-neutral-50/95 backdrop-blur border-b border-neutral-200 py-3 mb-6 flex flex-wrap gap-3 items-center">
          <h1 className="text-2xl font-semibold">Room Vocab Audit</h1>
          <span className="text-sm text-neutral-500">
            {totals.removed} marked remove · {totals.added} added
          </span>
          <div className="ml-auto flex gap-2">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="text-sm border rounded px-2 py-1 bg-white"
            >
              <option value="all">All rooms ({rooms.length})</option>
              {rooms.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              ))}
            </select>
            <button onClick={exportJson} className="text-sm px-3 py-1 rounded bg-emerald-600 text-white">
              Download edits JSON
            </button>
            <button onClick={clearAll} className="text-sm px-3 py-1 rounded bg-neutral-200">
              Clear
            </button>
          </div>
          <p className="w-full text-xs text-neutral-500">
            Tap a word to mark it for removal (click again to undo). Type English words in the box below
            each subroom and press Enter to add — I'll translate + place them.
          </p>
        </header>

        {visibleRooms.map((room) => (
          <section key={room.id} className="mb-10 bg-white rounded-xl border border-neutral-200 shadow-sm">
            <header className="p-4 border-b border-neutral-100">
              <h2 className="text-xl font-semibold">
                {room.name} <span className="text-neutral-400">({room.nameNative})</span>
              </h2>
              <p className="text-sm text-neutral-500">{room.description}</p>
            </header>

            <div className="divide-y divide-neutral-100">
              {room.zones.map((zone) => {
                const k = keyOf(room.id, zone.id);
                const removed = new Set(edits.removed[k] ?? []);
                const added = edits.added[k] ?? [];
                const words = zone.interiorVocab?.map((v) => v.wordId) ?? [];
                return (
                  <div key={zone.id} className="p-4">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-base">{zone.icon}</span>
                      <h3 className="font-medium">
                        {zone.name} <span className="text-neutral-400 font-normal">{zone.nameNative}</span>
                      </h3>
                      <span className="text-xs text-neutral-400 ml-auto">{words.length} words</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {words.map((w) => {
                        const isRemoved = removed.has(w);
                        return (
                          <button
                            key={w}
                            onClick={() => toggleRemoved(room.id, zone.id, w)}
                            className={[
                              'text-sm px-2.5 py-1 rounded-full border transition-colors',
                              isRemoved
                                ? 'bg-rose-100 border-rose-300 line-through text-rose-700'
                                : 'bg-white border-neutral-300 hover:bg-neutral-50',
                            ].join(' ')}
                            title={gloss(w)}
                          >
                            <span className="font-medium">{w}</span>
                            {gloss(w) && (
                              <span className="text-neutral-400 ml-1.5">· {gloss(w)}</span>
                            )}
                          </button>
                        );
                      })}
                      {words.length === 0 && (
                        <span className="text-xs text-neutral-400">(no words in this zone)</span>
                      )}
                    </div>

                    {added.length > 0 && (
                      <div className="mb-3">
                        <div className="text-xs text-neutral-500 mb-1">To add (English):</div>
                        <div className="flex flex-wrap gap-2">
                          {added.map((w, i) => (
                            <span
                              key={i}
                              className="text-sm px-2.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center gap-1"
                            >
                              + {w}
                              <button
                                onClick={() => removeAddition(room.id, zone.id, i)}
                                className="text-emerald-600 hover:text-emerald-900"
                                title="Remove"
                              >
                                ×
                              </button>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Add English words, comma-separated (e.g. spoon, fork, ladle)"
                        value={drafts[k] ?? ''}
                        onChange={(e) => setDrafts({ ...drafts, [k]: e.target.value })}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') addWords(room.id, zone.id);
                        }}
                        className="flex-1 text-sm border border-neutral-300 rounded px-3 py-1.5 bg-white"
                      />
                      <button
                        onClick={() => addWords(room.id, zone.id)}
                        className="text-sm px-3 py-1.5 rounded bg-neutral-900 text-white"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
