import { useNavigate } from 'react-router-dom';
import { ArrowRight, Map, BookOpen, GraduationCap, Volume2 } from 'lucide-react';
import { getAllRooms } from '../data/rooms';
import { useLanguage } from '../context/LanguageContext';

const LandingPage = () => {
  const navigate = useNavigate();
  const rooms = getAllRooms();
  const totalWords = rooms.reduce((acc, room) => acc + room.vocabularyIds.length, 0);
  const { targetLabel } = useLanguage();

  const features = [
    {
      icon: Map,
      title: 'Explore the Palace',
      description: `Navigate through ${rooms.length} themed rooms, each representing key vocabulary and grammar concepts.`,
    },
    {
      icon: BookOpen,
      title: 'Visual Dictionary',
      description: `Every object is labeled with its ${targetLabel} name, gender color (blue for masculine, pink for feminine), and English translation.`,
    },
    {
      icon: GraduationCap,
      title: 'Grammar Focus',
      description: `Learn essential ${targetLabel} grammar with clear explanations and examples.`,
    },
    {
      icon: Volume2,
      title: 'Listen & Learn',
      description: `Hear proper ${targetLabel} pronunciation for every word.`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#2B1E1A]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2B1E1A]/90 backdrop-blur-md py-4 px-6 lg:px-12 border-b border-[#F3E8D7]/10">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <span className="font-cinzel text-xl text-[#F3E8D7]">Memory Palace</span>
          <button
            onClick={() => navigate('/rooms/entrance-hall')}
            className="px-6 py-2 bg-[#E7A04D] text-[#2B1E1A] font-cinzel text-sm rounded-full hover:bg-[#F3E8D7] transition-colors"
          >
            Start Learning
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Text */}
            <div>
              <h1 className="font-cinzel text-[#F3E8D7] text-3xl lg:text-5xl leading-tight mb-4">
                Learn {targetLabel} by Walking Through a Palace
              </h1>
              <p className="font-inter text-[#F3E8D7]/70 text-lg mb-6">
                The {targetLabel} Memory Palace transforms A1-A2 vocabulary into {rooms.length} immersive rooms. 
                Each object you see becomes a word you remember.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <button
                  onClick={() => navigate('/rooms/entrance-hall')}
                  className="px-6 py-3 bg-[#E7A04D] text-[#2B1E1A] font-cinzel font-semibold rounded-full hover:bg-[#F3E8D7] transition-colors flex items-center gap-2"
                >
                  Enter the Palace
                  <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => navigate('/rooms')}
                  className="px-6 py-3 border border-[#F3E8D7]/30 text-[#F3E8D7] font-cinzel rounded-full hover:border-[#E7A04D] hover:text-[#E7A04D] transition-colors"
                >
                  View All Rooms
                </button>
              </div>
              
              {/* Stats */}
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-cinzel text-[#E7A04D]">{rooms.length}</div>
                  <div className="text-sm text-[#F3E8D7]/50">Rooms</div>
                </div>
                <div>
                  <div className="text-3xl font-cinzel text-[#E7A04D]">{totalWords}</div>
                  <div className="text-sm text-[#F3E8D7]/50">Words</div>
                </div>
              </div>
            </div>

            {/* Right: Blueprint Preview */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-[#F3E8D7]/20">
                <img
                  src="/palace_blueprint.jpg"
                  alt="Palace Blueprint"
                  className="w-full"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-[#2B1E1A]/90 backdrop-blur-sm rounded-xl p-4 border border-[#F3E8D7]/10">
                <p className="font-inter text-[#F3E8D7]/70 text-sm">
                  <span className="text-[#E7A04D]">Villa Memoria</span> — Your {targetLabel} memory palace for A1-A2 learners
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 lg:px-8 bg-[#1f1612]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-[#2B1E1A]/50 border border-[#F3E8D7]/10 rounded-xl">
                <feature.icon className="w-8 h-8 text-[#E7A04D] mb-4" />
                <h3 className="font-cinzel text-[#F3E8D7] text-lg mb-2">{feature.title}</h3>
                <p className="font-inter text-[#F3E8D7]/60 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 lg:px-8 text-center">
        <h2 className="font-cinzel text-[#F3E8D7] text-2xl mb-4">Ready to Begin Your Journey?</h2>
        <p className="font-inter text-[#F3E8D7]/60 mb-8 max-w-lg mx-auto">
          Step into the palace and start learning {targetLabel} the natural way — one room at a time.
        </p>
        <button
          onClick={() => navigate('/rooms/entrance-hall')}
          className="px-8 py-4 bg-[#E7A04D] text-[#2B1E1A] font-cinzel font-semibold rounded-full hover:bg-[#F3E8D7] transition-colors flex items-center gap-2 mx-auto"
        >
          Enter the Palace
          <ArrowRight size={20} />
        </button>
      </section>
    </div>
  );
};

export default LandingPage;
