import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { motion } from "framer-motion";
import { useDarkMode } from "../Dark/DarkModeContext";
import WaterButton from "./btn/WaterButton";
import SectionHeader from "../Header/Header";

gsap.registerPlugin(Flip, ScrollTrigger);

const HomeGallery = () => {
  const { darkMode } = useDarkMode();
  const galleryRef = useRef(null);
  const shuffleLock = useRef(false);

  const initialImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&auto=format&fit=crop&q=80",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://plus.unsplash.com/premium_photo-1661771761352-bd446050d5fe?w=800&auto=format&fit=crop&q=80",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1599387737838-660b75526801?w=800&auto=format&fit=crop&q=80",
      alt: "Image 3",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1682343712218-150d9a074e5e?w=800&auto=format&fit=crop&q=80",
      alt: "Image 4",
    },
  ];

  const [items, setItems] = useState(initialImages);

  /* ============================
     GSAP Animations
  ============================ */
  useEffect(() => {
    if (!galleryRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".gallery-card");

      gsap.set(cards, {
        willChange: "transform",
        transformPerspective: 400,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
      });

      gsap.from(cards, {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      cards.forEach((card) => {
        const scaleTo = gsap.quickTo(card, "scale", {
          duration: 0.35,
          ease: "power2.inOut",
        });
        const rotateXTo = gsap.quickTo(card, "rotationX", {
          duration: 0.3,
          ease: "power2.out",
        });
        const rotateYTo = gsap.quickTo(card, "rotationY", {
          duration: 0.3,
          ease: "power2.out",
        });

        card.addEventListener("mouseenter", () => {
          if (shuffleLock.current) return;
          scaleTo(1.05);
          rotateXTo(-3);
          rotateYTo(3);
        });

        card.addEventListener("mouseleave", () => {
          scaleTo(1);
          rotateXTo(0);
          rotateYTo(0);
        });
      });

      cards.forEach((card) => {
        gsap.to(card, {
          y: gsap.utils.random(-8, 8),
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.3,
          },
        });
      });
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  /* ============================
     CENTER ROTATION SHUFFLE
     1→2 →3 →4 →1
  ============================ */
  const rotateCards = () => {
    if (shuffleLock.current) return;
    shuffleLock.current = true;

    const cards = gsap.utils.toArray(".gallery-card");
    const state = Flip.getState(cards);

    setItems((prev) => {
      const copy = [...prev];
      const first = copy.shift();
      copy.push(first);
      return copy;
    });

    requestAnimationFrame(() => {
      Flip.from(state, {
        duration: 0.9,
        ease: "power3.inOut",
        stagger: 0.05,
        onComplete: () => (shuffleLock.current = false),
      });
    });
  };

  /* ============================
     Auto Rotate
  ============================ */
  useEffect(() => {
    const interval = setInterval(rotateCards, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`relative h-full overflow-hidden transition-colors ${
        darkMode ? "bg-gray-900" : "bg-neutral-900"
      }`}
    >
      {/* Header */}
      <div className="text-center py-10 sm:py-16">
        <SectionHeader title="Gallery" as="h1" />
        <p className="mt-2 text-gray-300 text-sm sm:text-base">
          Check out our salon work
        </p>
      </div>

      {/* Gallery Grid */}
      <div
        ref={galleryRef}
        className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 max-w-6xl mx-auto min-h-[420px]"
      >
        {items.map((image) => (
          <motion.div
            key={image.id}
            className="gallery-card h-80 border-2 border-yellow-400 rounded-es-3xl overflow-hidden shadow-md"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-tr-4xl border-2 border-red-600"
            />
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center py-16 gap-4 mt-5">
        <WaterButton text="SEE MORE" href="/Gallery" />
      </div>
    </section>
  );
};

export default HomeGallery;
