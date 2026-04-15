import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Twitter, Instagram, Youtube, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FooterSectionProps {
  className?: string;
}

const footerLinks = {
  Product: ['Rooms', 'Curriculum', 'Pricing'],
  Classrooms: ['Teacher guide', 'Worksheets', 'Assessment'],
  Support: ['Help center', 'Contact'],
  Legal: ['Privacy', 'Terms'],
};

const FooterSection = ({ className = '' }: FooterSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Wordmark animation
      gsap.fromTo(
        wordmarkRef.current,
        { y: 12, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            end: 'top 60%',
            scrub: true,
          },
        }
      );

      // Columns animation
      gsap.fromTo(
        columnsRef.current,
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            end: 'top 55%',
            scrub: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={sectionRef}
      className={`section-flowing py-[8vh] px-6 lg:px-12 bg-[#2B1E1A] border-t border-[#F3E8D7]/10 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Wordmark */}
        <div ref={wordmarkRef} className="text-center mb-12">
          <h3 className="font-cinzel text-[#F3E8D7] text-3xl mb-3">
            Memory Palace
          </h3>
          <p className="font-inter text-[#F3E8D7]/60 text-sm">
            Build a palace in your mind. Speak French for life.
          </p>
        </div>

        {/* Link Columns */}
        <div
          ref={columnsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
        >
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-cinzel text-[#E7A04D] text-sm mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-inter text-[#F3E8D7]/60 text-sm hover:text-[#F3E8D7] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#F3E8D7]/10">
          <p className="font-inter text-[#F3E8D7]/40 text-xs mb-4 md:mb-0">
            © 2026 Memory Palace. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {[Twitter, Instagram, Youtube, Mail].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-[#F3E8D7]/40 hover:text-[#E7A04D] transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
