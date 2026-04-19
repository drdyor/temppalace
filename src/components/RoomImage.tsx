import { useState } from 'react';

interface RoomImageProps {
  src: string;
  alt: string;
  roomId: string;
  className?: string;
}

// Deterministic gradients based on room ID so each room has a consistent color
const roomGradients: Record<string, string> = {
  'entrance-hall': 'from-amber-900/60 via-stone-800/50 to-stone-900/60',
  'kitchen': 'from-orange-900/60 via-red-950/50 to-amber-950/60',
  'library': 'from-emerald-900/60 via-teal-950/50 to-cyan-950/60',
  'bedroom': 'from-rose-900/60 via-pink-950/50 to-purple-950/60',
  'bathroom': 'from-cyan-900/60 via-sky-950/50 to-blue-950/60',
  'garden': 'from-green-900/60 via-emerald-950/50 to-lime-950/60',
  'transport': 'from-slate-800/60 via-zinc-900/50 to-neutral-950/60',
  'living-room': 'from-indigo-900/60 via-violet-950/50 to-fuchsia-950/60',
  'supermarket': 'from-yellow-900/60 via-amber-950/50 to-orange-950/60',
  'cafe': 'from-stone-700/60 via-amber-950/50 to-orange-950/60',
  'gallery': 'from-fuchsia-900/60 via-purple-950/50 to-indigo-950/60',
  'animals': 'from-lime-900/60 via-green-950/50 to-emerald-950/60',
  'weather': 'from-sky-900/60 via-blue-950/50 to-cyan-950/60',
  'tools': 'from-zinc-700/60 via-stone-800/50 to-neutral-900/60',
  'actions': 'from-red-900/60 via-orange-950/50 to-rose-950/60',
  'emotions': 'from-pink-900/60 via-rose-950/50 to-red-950/60',
  'farm': 'from-yellow-800/60 via-lime-950/50 to-green-950/60',
  'fantasy': 'from-violet-900/60 via-purple-950/50 to-fuchsia-950/60',
};

const roomIcons: Record<string, string> = {
  'entrance-hall': '🏛️',
  'kitchen': '🍳',
  'library': '📚',
  'bedroom': '🛏️',
  'bathroom': '🛁',
  'garden': '🌳',
  'transport': '🚂',
  'living-room': '🛋️',
  'supermarket': '🛒',
  'cafe': '☕',
  'gallery': '🖼️',
  'animals': '🦁',
  'weather': '⛅',
  'tools': '🔨',
  'actions': '🏃',
  'emotions': '💭',
  'farm': '🌾',
  'fantasy': '🐉',
};

function resolveAsset(src: string) {
  if (!src) return src;
  return src.startsWith('/') ? import.meta.env.BASE_URL + src.slice(1) : src;
}

export default function RoomImage({ src, alt, roomId, className = '' }: RoomImageProps) {
  const [hasError, setHasError] = useState(false);
  const gradient = roomGradients[roomId] || 'from-stone-800/60 via-neutral-900/50 to-stone-950/60';
  const icon = roomIcons[roomId] || '🏛️';

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!hasError ? (
        <img
          src={resolveAsset(src)}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setHasError(true)}
        />
      ) : null}
      
      {(hasError) && (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} flex flex-col items-center justify-center`}>
          <span className="text-6xl mb-4 opacity-80">{icon}</span>
          <span className="font-cinzel text-palace-gold/80 text-lg">{alt}</span>
        </div>
      )}
    </div>
  );
}
