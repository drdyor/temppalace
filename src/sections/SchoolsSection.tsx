import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface SchoolsSectionProps {
  className?: string;
}

const features = [
  'KS3-aligned units',
  'Differentiated practice',
  'Printable worksheets',
];

const SchoolsSection = ({ className = '' }: SchoolsSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Left column animation
      gsap.fromTo(
        leftRef.current,
        { x: '-6vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
          },
        }
      );

      // Right column animation
      gsap.fromTo(
        rightRef.current,
        { x: '6vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
          },
        }
      );

      // Quote card animation
      gsap.fromTo(
        quoteRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: quoteRef.current,
            start: 'top 85%',
            end: 'top 60%',
            scrub: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="schools"
      className={`section-flowing py-[10vh] px-6 lg:px-12 bg-[#F3E8D7] ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          {/* Left: Content */}
          <div ref={leftRef}>
            <h2
              className="font-cinzel text-[#2B1E1A] leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              Built for schools.
            </h2>

            <p
              className="font-inter text-[#2B1E1A]/80 leading-relaxed mb-8"
              style={{ fontSize: 'clamp(15px, 1.2vw, 18px)' }}
            >
              Mapped to the Oak National Academy French curriculum. Ready for classroom use, homework, and revision.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-[#E7A04D] rounded-full flex items-center justify-center">
                    <Check size={14} className="text-[#2B1E1A]" />
                  </span>
                  <span className="font-inter text-[#2B1E1A]/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Logos grid */}
          <div ref={rightRef} className="flex items-center">
            <div className="grid grid-cols-2 gap-6 w-full">
              {['Oak National Academy', 'Department for Education', 'AQA', 'Edexcel'].map((org, index) => (
                <div
                  key={index}
                  className="bg-[#2B1E1A]/5 rounded-xl p-6 flex items-center justify-center h-24 border border-[#2B1E1A]/10"
                >
                  <span className="font-cinzel text-[#2B1E1A]/60 text-sm text-center">{org}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote card */}
        <div
          ref={quoteRef}
          className="bg-[#2B1E1A] rounded-2xl p-8 lg:p-12 relative"
        >
          <Quote size={48} className="text-[#E7A04D]/30 absolute top-6 left-6" />
          <blockquote className="relative z-10">
            <p
              className="font-cinzel text-[#F3E8D7] text-center mb-6"
              style={{ fontSize: 'clamp(20px, 2.5vw, 32px)' }}
            >
              "My students finally stopped mixing up <em>avoir</em> and <em>être</em>."
            </p>
            <footer className="text-center">
              <cite className="font-inter text-[#F3E8D7]/60 not-italic">
                — Secondary French Teacher, London
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default SchoolsSection;
