import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useDarkMode } from "../Dark/DarkModeContext";

const InfoSection = () => {
  const { darkMode } = useDarkMode();
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".info-card", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(".info-divider", {
        scaleY: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.3,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const textMuted = darkMode ? "text-gray-100" : "text-gray-500";
  const dividerColor = darkMode ? "bg-gray-100" : "bg-neutral-100";

  return (
    <section
      ref={containerRef}
      className={`py-20 overflow-hidden border-b-2 border-red-700 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-neutral-900 text-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">

          {/* LOCATION */}
          <div className="info-card text-center">
            <svg className="w-8 h-8 mx-auto mb-4 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z" />
              <circle cx="12" cy="11" r="2.5" />
            </svg>
            <h3 className="text-lg font-semibold mb-2 tracking-wide">LOCATION</h3>
            <p className={`text-sm mb-3 ${textMuted}`}>
              123 Main Street, Cityville, Stateburg, 98765
            </p>
            <a href="/contact" className="text-yellow-500 text-sm font-medium hover:underline">
              SEE ON MAP →
            </a>
          </div>

          {/* DIVIDER */}
          <div className="hidden md:flex justify-center">
            <span className={`info-divider w-px h-28 origin-top ${dividerColor}`} />
          </div>

          {/* CONTACT */}
          <div className="info-card text-center">
            <svg className="w-8 h-8 mx-auto mb-4 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75a3 3 0 013-3h1.5a1.5 1.5 0 011.5 1.5v2.25a1.5 1.5 0 01-1.5 1.5H6.75a.75.75 0 00-.75.75v.75a12 12 0 005.25 5.25h.75a.75.75 0 00.75-.75v-1.5a1.5 1.5 0 011.5-1.5h2.25a1.5 1.5 0 011.5 1.5v1.5a3 3 0 01-3 3h-.75C8.28 21 3 15.72 3 9.75v-.75z" />
            </svg>
            <h3 className="text-lg font-semibold mb-2 tracking-wide">CONTACT</h3>
            <p className={`text-sm ${textMuted}`}>(555) 123-4567</p>
            <p className={`text-sm ${textMuted}`}>info@barbershop.com</p>
          </div>

          {/* DIVIDER */}
          <div className="hidden md:flex justify-center">
            <span className={`info-divider w-px h-28 origin-top ${dividerColor}`} />
          </div>

          {/* OPENING HOURS */}
          <div className="info-card text-center">
            <svg className="w-8 h-8 mx-auto mb-4 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              <circle cx="12" cy="12" r="9" />
            </svg>
            <h3 className="text-lg font-semibold mb-2 tracking-wide">OPENING HOURS</h3>
            <p className={`text-sm ${textMuted}`}>Mon to Fri: 9.00am – 8.30pm</p>
            <p className={`text-sm ${textMuted}`}>Sat: 10.00am – 6.30pm</p>
            <p className={`text-sm ${textMuted}`}>Sun: Closed</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;
