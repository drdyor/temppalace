import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface StepInsideSectionProps {
  className?: string;
}

const StepInsideSection = ({ className = '' }: StepInsideSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

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
        textRef.current,
        { y: '18vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        bgRef.current,
        { scale: 1.12, opacity: 0.7 },
        { scale: 1, opacity: 1, ease: 'none' },
        0
      );

      // SETTLE (30% - 70%) - hold

      // EXIT (70% - 100%)
      scrollTl.fromTo(
        textRef.current,
        { y: 0, opacity: 1 },
        { y: '-10vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        bgRef.current,
        { scale: 1, y: 0 },
        { scale: 1.08, y: '-6vh', ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="step-inside"
      className={`section-pinned ${className}`}
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{ opacity: 0.7, transform: 'scale(1.12)' }}
      >
        <img
          src="/step_inside_corridor.jpg"
          alt="Palace corridor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 vignette-overlay" />
        <div className="absolute inset-0 grain-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-[#2B1E1A]/40" />
      </div>

      {/* Centered Text Block */}
      <div
        ref={textRef}
        className="absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2 text-center w-[min(52vw,720px)] px-6 will-change-transform"
        style={{ opacity: 0, transform: 'translate(-50%, calc(-50% + 18vh))' }}
      >
        <h2
          className="font-cinzel text-[#F3E8D7] leading-[1.1] mb-6"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
        >
          Step inside.
        </h2>

        <p
          className="font-inter text-[#F3E8D7]/80 leading-relaxed mb-10"
          style={{ fontSize: 'clamp(16px, 1.4vw, 22px)' }}
        >
          Every object is a word. Every corner is a rule.
        </p>

        <button
          onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn-primary inline-flex items-center gap-3"
        >
          <span>Try a mini walkthrough</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default StepInsideSection;
