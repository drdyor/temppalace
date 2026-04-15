import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
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
          end: '+=120%',
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE (0% - 30%)
      scrollTl.fromTo(
        cardRef.current,
        { scale: 0.86, opacity: 0, y: '10vh' },
        { scale: 1, opacity: 1, y: 0, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        bgRef.current,
        { scale: 1.1 },
        { scale: 1, ease: 'none' },
        0
      );

      // SETTLE (30% - 70%) - hold

      // EXIT (70% - 100%)
      scrollTl.fromTo(
        cardRef.current,
        { scale: 1, opacity: 1 },
        { scale: 0.98, opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        bgRef.current,
        { scale: 1 },
        { scale: 1.06, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta"
      className={`section-pinned ${className}`}
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: 'scale(1.1)' }}
      >
        <img
          src="/cta_palace_room.jpg"
          alt="Palace sitting room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 vignette-overlay" />
        <div className="absolute inset-0 grain-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-[#2B1E1A]/50" />
      </div>

      {/* Glass Card */}
      <div
        ref={cardRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(520px,78vw)] glass-card p-[clamp(28px,3vw,44px)] text-center will-change-transform"
        style={{ opacity: 0, transform: 'translate(-50%, -50%) scale(0.86)' }}
      >
        <h2
          className="font-cinzel text-[#F3E8D7] leading-[1.1] mb-4"
          style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}
        >
          Start building your palace.
        </h2>

        <p
          className="font-inter text-[#F3E8D7]/70 mb-8"
          style={{ fontSize: 'clamp(14px, 1.1vw, 16px)' }}
        >
          Free for students. Premium features for schools.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="btn-primary w-full sm:w-auto">
            Get started free
          </button>
          <button className="btn-secondary w-full sm:w-auto">
            Request a school quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
