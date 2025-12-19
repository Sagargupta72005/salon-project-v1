import React from "react";
import { useDarkMode } from "../Dark/DarkModeContext";
import { motion } from "framer-motion";
import SectionHeader from "../Header/Header";

const Trust = () => {
  const { darkMode } = useDarkMode();

  const items = [
    {
      number: "01.",
      title: "Best Quality",
      body: "We don't compromise on quality and use only the finest, premium products from top brands to ensure the best possible results for your hair, skin, and nails.",
    },
    {
      number: "02.",
      title: "Premium Service",
      body: "We don’t just call ourselves premium. We also live up to the name and provide premium services through our well trained and expert staff.",
    },
    {
      number: "03.",
      title: "Expert Staff",
      body: "We have expert hair stylists, skin specialists, makeup artists, massage therapists, etc. in our staff who have many years of service experience.",
    },
    {
      number: "04.",
      title: "One Stop Destination",
      body: "We provide full range of Salon, Spa and Skin Clinic services for both men & women. With Euphoria you are assured of full service for you and your family.",
    },
  ];

  return (
    <motion.div
      className={`
        relative w-full flex-2 select-none justify-between items-center h-full py-60  px-6 md:px-16 lg:px-28 xl:px-90
        text-white transition-colors duration-300 overflow-hidden bg-fixed bg-cover bg-center
        ${darkMode ? "bg-gray-900" : "bg-neutral-900"}
      `}
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1136&auto=format&fit=crop')",
      }}
    >
      {/* Dark/Light overlay for readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      {/* Heading */}
      <div className="relative z-10 mb-30 text-center">
        {/* <h2
          className={`text-xl sm:text-2xl md:text-3xl font-semibold underline ${
            darkMode ? "text-yellow-400" : "text-yellow-100"
          }`}
        >
          
        </h2> */}
        <SectionHeader
  title="Our Services"
  as="h1"
/>


      </div>

      {/* Items */}
      <div className="relative  z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-left">
        {items.map((item, index) => (
          <div
            key={index}
            className={`space-y-4 p-10  rounded-4xl
          ${
            darkMode
              ? "bg-linear-to-r from-gray-900/50 to-gray-500/50"
              : "bg-linear-to-r from-neutral-900/50 to-neutral-500/50"
          }`}
          >
            <h3
              className={`text-5xl font-bold ${
                darkMode ? " text-white" : "text-gray-100"
              }`}
            >
              {item.number}
            </h3>
            <h4
              className={`text-xl font-semibold ${
                darkMode ? "text-white" : "text-gray-100"
              }`}
            >
              {item.title}
            </h4>
            <p
              className={`leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-100"
              }`}
            >
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Trust;
