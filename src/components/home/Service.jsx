import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../Dark/DarkModeContext";

const services = [
  {
    title: "Hair Cutting & Styling",
    description:
      "Hair styling and hair cutting for both men and women. Get hair cut done from our hair director, creative consultant or regular haircut.",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hair Coloring & Treatment",
    description:
      "Different types of hair coloring for men and women. Keratin treatment, hair rebonding, oil treatment, hair refilling, hair fall treatment and more.",
    image:
      "https://images.unsplash.com/photo-1617391654484-2894196c2cc9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Face Treatment",
    description:
      "Different types of facials and bleaching for both men and women. Luxury facials and cleansups to enhance your face’s natural glow.",
    image:
      "https://plus.unsplash.com/premium_photo-1661255395799-a300794397fb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Body Massages & Treatment",
    description:
      "Head, face, neck, shoulder, leg, foot and full body massages for both men and women. Swedish massage, Thai massage and more.",
    image:
      "https://images.unsplash.com/photo-1639162906614-0603b0ae95fd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Service = () => {
  const { darkMode } = useDarkMode();

  return (
    <section
      className={`w-full h-full select-none overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-gray-900  border-b-2 border-yellow-400"
          : "bg-neutral-900  border-b-2 border-t-2 border-yellow-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2
          className={`text-center text-4xl font-extrabold mb-29 underline decoration-yellow-100 transition-colors duration-500 ${
            darkMode ? "text-yellow-400" : "text-yellow-100"
          }`}
        >
          Premium Salon Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {services.map(({ title, description, image }, i) => (
            <WaterCard
              key={i}
              title={title}
              description={description}
              image={image}
              darkMode={darkMode}
            />
          ))}
        </div>

        <div className=" m-25">
          <div className="flex  justify-center gap-5  flex-wrap">
            <WaterButton text="Women services" href="/women" />
            <WaterButton text="Men services" href="/boy" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Card component with floating circle only inside
const WaterCard = ({ title, description, image, darkMode }) => {
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      className="relative group grid  grid-cols-2 items-center gap-4 p-4 rounded-3xl border-2 border-yellow-200 shadow-lg overflow-hidden cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.05 }}
    >
      {hovered && (
        <motion.div
          className="absolute w-40 h-40 bg-yellow-400 rounded-full pointer-events-none z-0 mix-blend-screen"
          style={{
            top: cursor.y - 80,
            left: cursor.x - 80,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}

      <img
        src={image}
        alt={title}
       className={`w-60 h-60 shrink-0 rounded-3xl object-cover border-2 relative z-10
  ${darkMode ? "border-yellow-400" : "border-yellow-800"}`}
/>
      <div
        className={`text-center relative z-10 ${
          darkMode ? "text-gray-300" : "text-white"
        }`}
      >
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

// Button with floating circle only on hover
const WaterButton = ({ text, href }) => {
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <a href={href} className="relative inline-block">
      <button
        className="relative hover:scale-105 duration-150 overflow-hidden border-2 cursor-pointer border-yellow-200 text-yellow-100 font-bold  p-5 rounded-lg shadow-md group"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered && (
          <motion.div
            className="absolute w-20 h-20 bg-yellow-400 rounded-full pointer-events-none z-0 mix-blend-screen"
            style={{
              top: cursor.y - 40,
              left: cursor.x - 40,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10">{text}</span>
      </button>
    </a>
  );
};

export default Service;
