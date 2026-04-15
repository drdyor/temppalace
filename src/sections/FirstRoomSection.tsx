import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FirstRoomSectionProps {
  className?: string;
}

const FirstRoomSection = ({ className = '' }: FirstRoomSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE (0% - 30%)
      scrollTl.fromTo(
        cardRef.current,
        { x: '60vw', opacity: 0, rotate: 2 },
        { x: 0, opacity: 1, rotate: 0, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        bgRef.current,
        { scale: 1.1, opacity: 0.6 },
        { scale: 1, opacity: 1, ease: 'none' },
        0
      );

      // SETTLE (30% - 70%) - hold

      // EXIT (70% - 100%)
      scrollTl.fromTo(
        cardRef.current,
        { x: 0, opacity: 1 },
        { x: '18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        bgRef.current,
        { scale: 1, y: 0 },
        { scale: 1.06, y: '-4vh', ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="first-room"
      className={`section-pinned ${className}`}
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{ opacity: 0.6, transform: 'scale(1.1)' }}
      >
        <img
          src="/entrance_hall_scene.jpg"
          alt="Entrance hall"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 vignette-overlay" />
        <div className="absolute inset-0 grain-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-[#2B1E1A]/30" />
      </div>

      {/* Paper Card - Right side */}
      <div
        ref={cardRef}
        className="absolute right-[6vw] top-[18vh] w-[min(40vw,560px)] min-w-[320px] paper-card p-[clamp(18px,2.2vw,32px)] will-change-transform"
        style={{ opacity: 0, transform: 'translateX(60vw) rotate(2deg)' }}
      >
        <span className="label-small block mb-4">ROOM 01</span>
        
        <h2
          className="font-cinzel text-[#2B1E1A] leading-[1.1] mb-6"
          style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}
        >
          The Entrance Hall
        </h2>

        <p className="font-inter text-[#2B1E1A]/80 leading-relaxed mb-6" style={{ fontSize: 'clamp(14px, 1.1vw, 16px)' }}>
          Greetings, introductions, and the verbs <em>être</em> & <em>avoir</em>—anchored to one unforgettable space.
        </p>

        <div className="space-y-3 font-inter text-[#2B1E1A]/70 text-sm">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#E7A04D] rounded-full" />
            <span>Basic greetings and introductions</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#E7A04D] rounded-full" />
            <span>Verb: être (to be)</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#E7A04D] rounded-full" />
            <span>Verb: avoir (to have)</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#E7A04D] rounded-full" />
            <span>Adjective agreement basics</span>
          </div>
        </div>

        <button
          onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-8 flex items-center gap-2 text-[#E7A04D] font-cinzel font-semibold hover:gap-4 transition-all duration-300"
        >
          <span>Preview the room</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default FirstRoomSection;
