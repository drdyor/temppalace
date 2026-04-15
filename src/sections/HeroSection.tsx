import { useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Auto-play entrance animation on load
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Background entrance
      tl.fromTo(
        bgRef.current,
        { opacity: 0, scale: 1.06 },
        { opacity: 1, scale: 1, duration: 1.2 }
      );

      // H1 words entrance
      if (h1Ref.current) {
        const words = h1Ref.current.querySelectorAll('.word');
        tl.fromTo(
          words,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.06, duration: 0.8 },
          '-=0.8'
        );
      }

      // Subheadline entrance
      tl.fromTo(
        subRef.current,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      );

      // CTA entrance
      tl.fromTo(
        ctaRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.4'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Scroll-driven exit animation
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
          onLeaveBack: () => {
            // Reset all elements when scrolling back to top
            gsap.set([h1Ref.current, subRef.current, ctaRef.current], {
              opacity: 1,
              y: 0,
            });
            gsap.set(bgRef.current, { scale: 1, y: 0 });
          },
        },
      });

      // EXIT phase (70% - 100%)
      scrollTl.fromTo(
        bgRef.current,
        { scale: 1, y: 0 },
        { scale: 1.08, y: '-6vh', ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        h1Ref.current,
        { y: 0, opacity: 1 },
        { y: '-18vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        subRef.current,
        { y: 0, opacity: 1 },
        { y: '-10vh', opacity: 0, ease: 'power2.in' },
        0.72
      );

      scrollTl.fromTo(
        ctaRef.current,
        { y: 0, opacity: 1 },
        { y: '-6vh', opacity: 0, ease: 'power2.in' },
        0.74
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToMethod = () => {
    const element = document.getElementById('method');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCurriculum = () => {
    const element = document.getElementById('curriculum');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className={`section-pinned ${className}`}
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{ opacity: 0 }}
      >
        <img
          src="/hero_palace_corridor.jpg"
          alt="Palace corridor"
          className="w-full h-full object-cover"
        />
        {/* Vignette overlay */}
        <div className="absolute inset-0 vignette-overlay" />
        {/* Grain overlay */}
        <div className="absolute inset-0 grain-overlay pointer-events-none" />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B1E1A]/40 via-transparent to-[#2B1E1A]/60" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center h-full px-6"
      >
        <h1
          ref={h1Ref}
          className="font-cinzel text-center text-[#F3E8D7] tracking-[0.08em] leading-[1.05]"
          style={{ fontSize: 'clamp(36px, 6vw, 84px)' }}
        >
          <span className="word inline-block">THE</span>{' '}
          <span className="word inline-block">FRENCH</span>{' '}
          <span className="word inline-block">MEMORY</span>{' '}
          <span className="word inline-block">PALACE</span>
        </h1>

        <p
          ref={subRef}
          className="mt-8 text-center text-[#F3E8D7]/80 font-inter leading-relaxed max-w-3xl"
          style={{ fontSize: 'clamp(16px, 1.5vw, 22px)' }}
        >
          A visual method for KS3 French—built like a palace you can walk through.
        </p>

        <div ref={ctaRef} className="mt-12 flex flex-col sm:flex-row items-center gap-6">
          <button
            onClick={scrollToMethod}
            className="btn-primary text-lg"
          >
            Enter the Palace
          </button>
          <button
            onClick={scrollToCurriculum}
            className="btn-secondary text-lg"
          >
            View the curriculum
          </button>
        </div>
      </div>

      {/* Bottom-left microcopy */}
      <div className="absolute left-[6vw] bottom-[6vh] z-10 flex items-center gap-2 text-[#F3E8D7]/60 font-inter text-sm">
        <span>Scroll to begin</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>

      {/* Bottom-right badge */}
      <div className="absolute right-[6vw] bottom-[6vh] z-10">
        <span className="px-4 py-2 bg-[#2B1E1A]/60 backdrop-blur-sm rounded-full text-[#F3E8D7]/70 font-inter text-xs border border-[#F3E8D7]/20">
          Aligned with Oak National Academy
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
