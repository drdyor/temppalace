import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface TestimonialsSectionProps {
  className?: string;
}

const testimonials = [
  {
    quote: "I can literally see the words in the room.",
    author: "Year 8 student",
    location: "Manchester",
  },
  {
    quote: "Revision feels like a tour, not a test.",
    author: "Year 9 student",
    location: "Birmingham",
  },
  {
    quote: "I remembered the past tense without trying.",
    author: "Year 7 student",
    location: "Leeds",
  },
];

const TestimonialsSection = ({ className = '' }: TestimonialsSectionProps) => {
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
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
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
          { y: 28, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 60%',
              scrub: true,
            },
            delay: index * 0.1,
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className={`section-flowing py-[10vh] px-6 lg:px-12 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <h2
            className="font-cinzel text-[#F3E8D7] leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
          >
            What students say
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="bg-[#2B1E1A]/50 border border-[#F3E8D7]/10 rounded-2xl p-8 backdrop-blur-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#E7A04D] fill-[#E7A04D]" />
                ))}
              </div>

              <blockquote>
                <p className="font-cinzel text-[#F3E8D7] text-lg mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <footer>
                  <cite className="font-inter text-[#F3E8D7]/60 not-italic text-sm">
                    {testimonial.author}, {testimonial.location}
                  </cite>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-center">
          <div className="glass-card px-8 py-4 flex items-center gap-4">
            <span
              className="font-cinzel text-[#E7A04D]"
              style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}
            >
              2×
            </span>
            <span className="font-inter text-[#F3E8D7]/70 text-sm">
              Improved recall rate<br />in classroom trials
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
