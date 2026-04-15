import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { ArrowRight, Brain, BookOpen, Map, ListChecks } from 'lucide-react';
import { useFSRS } from '../hooks/useFSRS';

export default function HomePage() {
  const [, setLocation] = useLocation();
  const { getAllCards, getDueCards } = useFSRS();
  const [stats, setStats] = useState<{ total: number; due: number }>({ total: 0, due: 0 });

  useEffect(() => {
    (async () => {
      const [all, due] = await Promise.all([getAllCards(), getDueCards()]);
      setStats({ total: all.length, due: due.length });
    })().catch(() => {});
  }, [getAllCards, getDueCards]);

  return (
    <div className="min-h-screen bg-palace-bg">
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E7A04D' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative text-center max-w-2xl mx-auto py-16">
          <h1 className="font-cinzel text-5xl md:text-7xl text-palace-text mb-6">Memory Palace</h1>
          <p className="text-palace-gold text-xl md:text-2xl font-cinzel mb-4">Learn Languages Through Space</p>
          <p className="text-palace-text/70 text-lg mb-8 max-w-lg mx-auto">
            Master Italian vocabulary by exploring a virtual palace. Each room teaches new words through spatial memory and stories.
          </p>

          <button
            onClick={() => setLocation('/rooms')}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-palace-gold text-palace-bg font-cinzel font-semibold text-lg rounded-full hover:bg-palace-text transition-colors"
          >
            Enter the Palace
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="mt-10 grid sm:grid-cols-3 gap-3 max-w-xl mx-auto">
            <NavTile
              icon={<Map className="w-5 h-5" />}
              title="Rooms"
              sub="Explore all 18"
              onClick={() => setLocation('/rooms')}
            />
            <NavTile
              icon={<Brain className="w-5 h-5" />}
              title="Review"
              sub={stats.total === 0 ? 'No cards yet' : `${stats.due} due · ${stats.total} total`}
              badge={stats.due > 0 ? stats.due : undefined}
              onClick={() => setLocation('/review')}
            />
            <NavTile
              icon={<ListChecks className="w-5 h-5" />}
              title="Audit"
              sub="Curate vocab"
              onClick={() => setLocation('/audit')}
            />
          </div>
        </div>
      </div>

      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <FeatureCard icon={<Map className="w-8 h-8" />} title="Spatial Learning" description="Words are tied to locations. Your brain remembers where things are." />
          <FeatureCard icon={<BookOpen className="w-8 h-8" />} title="9 Stories Per Room" description="Past, present, and future narratives embed vocabulary in context." />
          <FeatureCard icon={<Brain className="w-8 h-8" />} title="Spaced Repetition" description="FSRS-based review: add words as you explore, we schedule the rest." />
        </div>
      </div>
    </div>
  );
}

function NavTile({ icon, title, sub, onClick, badge }: {
  icon: React.ReactNode;
  title: string;
  sub: string;
  onClick: () => void;
  badge?: number;
}) {
  return (
    <button
      onClick={onClick}
      className="relative text-left p-4 rounded-xl border border-palace-text/15 bg-palace-text/5 hover:bg-palace-text/10 hover:border-palace-gold/40 transition-colors"
    >
      <div className="flex items-center gap-2 text-palace-gold mb-1">
        {icon}
        <span className="font-cinzel text-palace-text">{title}</span>
      </div>
      <p className="text-palace-text/60 text-sm">{sub}</p>
      {badge !== undefined && (
        <span className="absolute -top-2 -right-2 min-w-[1.5rem] h-6 px-1.5 rounded-full bg-palace-gold text-palace-bg text-xs font-bold flex items-center justify-center">
          {badge}
        </span>
      )}
    </button>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center p-6">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-palace-gold/20 flex items-center justify-center text-palace-gold">
        {icon}
      </div>
      <h3 className="font-cinzel text-xl text-palace-text mb-2">{title}</h3>
      <p className="text-palace-text/60">{description}</p>
    </div>
  );
}
