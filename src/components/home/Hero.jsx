import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlArrowLeft ,SlArrowRight } from "react-icons/sl";

const slides = [
  {
    id: 1,
    title: "MEN & WOMEN's hair salons and hairstyles.",
    subtitle:
      "The barber shop used to be more than just a place to get a new hairstyle or a fresh cut - it was a community center",
    image:
      "https://images.unsplash.com/photo-1693755807658-17ce5331aacb?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 2,
    title: "Men's and Women hair salons and hairstyles.",
    subtitle:
      "The barber shop used to be more than just a place to get a new hairstyle or a fresh cut - it was a community center",
    image:
      "https://plus.unsplash.com/premium_photo-1664048713250-f003472ee34b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 3,
    title: "Men's and Women hair salons and hairstyles.",
    subtitle:
      "The barber shop used to be more than just a place to get a new hairstyle or a fresh cut - it was a community center",
    image:
      "https://plus.unsplash.com/premium_photo-1661380558859-40df8dd91dfd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
];



const Hero = () => {
  
   
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextIndex = (index + 1) % slides.length;
  const prevIndex = (index - 1 + slides.length) % slides.length;

  const nextSlide = () => setIndex(nextIndex);
  const prevSlide = () => setIndex(prevIndex);

  const current = slides[index];
  return (
    <section className="relative select-none w-full h-screen overflow-hidden" >
      <AnimatePresence>
        <motion.div
          key={current.id}
          initial={{ opacity:1  }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1  }}
          
          className="absolute inset-0"
        >
          {/* Background Image */}
          <img
            src={current.image}
            alt="Salon slide"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 " />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 sm:px-12 ">
            {/* TITLE - visible on all screens */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="
                font-bold max-w-4xl mx-auto
                text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl
              "
            >
              {current.title}
            </motion.h1>

            {/* SUBTITLE - hidden on mobile */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="
                hidden sm:block
                mt-6 max-w-xl mx-auto
                text-sm md:text-sm lg:text-sm xl:text-xl
                text-white/90
              "
            >
              {current.subtitle}
            </motion.p>

            {/* CTA BUTTON */}
            <a
              href="https://www.whatsapp.com/?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                initial={{ y: 0, opacity: 0 }}
              animate={{ y: 50, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  mt-8 px-5 py-2 
                  bg-yellow-500 text-black font-semibold
                  rounded-lg shadow-lg
                  hover:bg-yellow-400 
                  transition-all duration-300
                "
              >
                Call us for Appointment
              </motion.button>
            </a>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="hidden sm:block">
      {/* PREVIOUS BUTTON */}
      <div
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 group cursor-pointer"
        >
        <button
          aria-label="Previous slide"
          className="w-16 h-16 flex items-center justify-center  text-white rounded-full relative overflow-hidden"
          style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
        >
          <SlArrowLeft className="z-10 font-extrabold" />
          <div
            className="
            absolute inset-0 opacity-0 -translate-x-10
            group-hover:opacity-100 group-hover:translate-x-0
            transition-all duration-300 bg-cover bg-center rounded-full
            "
            style={{ backgroundImage: `url(${slides[prevIndex].image})` }}
            />
        </button>
      </div>

      {/* NEXT BUTTON */}
      <div
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 group cursor-pointer"
        >
        <button
          aria-label="Next slide"
          className="w-16 h-16 flex items-center justify-center text-white rounded-full relative overflow-hidden"
          style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
          >
            <SlArrowRight className="z-10" />
          <div
            className="
            absolute inset-0 opacity-0 translate-x-10
            group-hover:opacity-100 group-hover:translate-x-0
            transition-all duration-300 bg-cover bg-center rounded-full
            "
            style={{ backgroundImage: `url(${slides[nextIndex].image})` }}
            />
        </button>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-6 flex gap-3 w-full justify-center">
        {slides.map((_, i) => (
          <div
          key={i}
          onClick={() => setIndex(i)}
          className={`
            w-5 h-2 cursor-pointer transition-all duration-500 rounded-full
            ${i === index ? "bg-yellow-500 scale-150" : "bg-white/50"}
            `}
            />
          ))}
      </div>

      </div>
    </section>
  );
};

export default Hero;
