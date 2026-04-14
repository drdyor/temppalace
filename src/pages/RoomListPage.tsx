import { useLocation } from 'wouter';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { rooms } from '../data/rooms';
import RoomImage from '../components/RoomImage';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';

export default function RoomListPage() {
  const [, setLocation] = useLocation();
  const { availableLanguages, setLanguage, currentLanguage } = useLanguage();
  const { getRoomMastery } = useProgress();

  return (
    <div className="min-h-screen bg-palace-bg">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-palace-bg/95 backdrop-blur-md border-b border-palace-text/10 px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => setLocation('/')}
            className="flex items-center gap-2 text-palace-text/70 hover:text-palace-gold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-cinzel">Back</span>
          </button>
          
          <h1 className="font-cinzel text-xl text-palace-text">The Palace</h1>
          
          {/* Language Switcher */}
          <div className="flex items-center gap-2">
            {availableLanguages.map(lang => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  currentLanguage === lang.code
                    ? 'bg-palace-gold text-palace-bg'
                    : 'text-palace-text/70 hover:text-palace-text'
                }`}
              >
                {lang.flag}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Room Grid */}
      <div className="px-4 py-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room, index) => {
            const mastery = getRoomMastery(room.id);
            return (
              <button
                key={room.id}
                onClick={() => setLocation(`/rooms/${room.id}`)}
                className="group text-left relative overflow-hidden rounded-2xl border border-palace-text/10 hover:border-palace-gold/50 transition-all"
              >
                {/* Room Image */}
                <div className="aspect-[4/3] relative">
                  <RoomImage
                    src={room.image}
                    alt={room.name}
                    roomId={room.id}
                    className="w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-palace-bg via-palace-bg/50 to-transparent" />
                  
                  {/* Room Number */}
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-palace-gold/20 border border-palace-gold/50 flex items-center justify-center">
                    <span className="font-cinzel text-palace-gold text-sm">{index + 1}</span>
                  </div>
                  
                  {/* Mastery Badge */}
                  {mastery > 0 && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-palace-gold/20 border border-palace-gold/50">
                      <span className="text-palace-gold text-sm font-cinzel">{Math.round(mastery)}%</span>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h2 className="font-cinzel text-xl text-palace-text mb-1">{room.name}</h2>
                  <p className="text-palace-gold text-sm font-cinzel mb-2">{room.subtitle}</p>
                  <p className="text-palace-text/60 text-sm mb-4 line-clamp-2">{room.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-palace-text/40 text-xs">
                      {room.vocabularyIds.length} words
                    </span>
                    <ChevronRight className="w-5 h-5 text-palace-gold group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
