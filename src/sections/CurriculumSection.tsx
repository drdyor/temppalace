import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, BookOpen, Utensils, Users, Trees, HelpCircle, Sofa, Frame } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface CurriculumSectionProps {
  className?: string;
}

const rooms = [
  {
    id: 1,
    name: 'Entrance Hall',
    subtitle: 'Greetings \u0026 être/avoir',
    image: '/entrance_hall_scene.jpg',
    icon: BookOpen,
    description: 'Master the two most essential French verbs',
  },
  {
    id: 2,
    name: 'Kitchen',
    subtitle: 'Faire \u0026 daily routines',
    image: '/room_kitchen.jpg',
    icon: Utensils,
    description: 'Activities, sports, and making things',
  },
  {
    id: 3,
    name: 'Library',
    subtitle: 'Regular -ER verbs',
    image: '/room_library.jpg',
    icon: BookOpen,
    description: 'Unlock hundreds of verbs with one pattern',
  },
  {
    id: 4,
    name: 'Bedroom',
    subtitle: 'Family \u0026 descriptions',
    image: '/room_bedroom.jpg',
    icon: Users,
    description: 'Family members and adjective agreement',
  },
  {
    id: 5,
    name: 'Garden',
    subtitle: 'Aller \u0026 places',
    image: '/room_garden.jpg',
    icon: Trees,
    description: 'Movement, destinations, and prepositions',
  },
  {
    id: 6,
    name: 'Study',
    subtitle: 'Questions \u0026 negation',
    image: '/room_study.jpg',
    icon: HelpCircle,
    description: 'Form questions and express negatives',
  },
  {
    id: 7,
    name: 'Living Room',
    subtitle: 'Modal verbs',
    image: '/room_living.jpg',
    icon: Sofa,
    description: 'Ability, desire, and obligation',
  },
  {
    id: 8,
    name: 'Gallery',
    subtitle: 'Past tense',
    image: '/room_gallery.jpg',
    icon: Frame,
    description: 'Perfect tense with avoir',
  },
];

const CurriculumSection = ({ className = '' }: CurriculumSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            end: 'top 55%',
            scrub: true,
          },
        }
      );

      // Cards animation
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 40, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 55%',
              scrub: true,
            },
            delay: index * 0.05,
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="curriculum"
      className={`section-flowing py-[10vh] px-6 lg:px-12 ${className}`}
    >
      {/* Header */}
      <div ref={headerRef} className="text-center mb-16">
        <h2
          className="font-cinzel text-[#F3E8D7] leading-[1.1] mb-4"
          style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
        >
          Eight rooms. One clear path.
        </h2>
        <p
          className="font-inter text-[#F3E8D7]/70 max-w-2xl mx-auto"
          style={{ fontSize: 'clamp(15px, 1.2vw, 18px)' }}
        >
          Each room matches a KS3 unit—verbs, questions, past tense, and more.
        </p>
      </div>

      {/* Room Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {rooms.map((room, index) => {
          const Icon = room.icon;
          return (
            <div
              key={room.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
              style={{ aspectRatio: '4/5' }}
            >
              {/* Image */}
              <img
                src={room.image}
                alt={room.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B1E1A] via-[#2B1E1A]/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={18} className="text-[#E7A04D]" />
                  <span className="label-small">ROOM 0{room.id}</span>
                </div>
                <h3 className="font-cinzel text-[#F3E8D7] text-xl mb-1">
                  {room.name}
                </h3>
                <p className="font-inter text-[#E7A04D] text-sm mb-2">
                  {room.subtitle}
                </p>
                <p className="font-inter text-[#F3E8D7]/60 text-sm">
                  {room.description}
                </p>
              </div>

              {/* Border on hover */}
              <div className="absolute inset-0 border-2 border-[#E7A04D]/0 rounded-2xl transition-colors duration-300 group-hover:border-[#E7A04D]/50" />
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <button className="btn-secondary inline-flex items-center gap-3">
          <Download size={18} />
          <span>Download the curriculum (PDF)</span>
        </button>
      </div>
    </section>
  );
};

export default CurriculumSection;
