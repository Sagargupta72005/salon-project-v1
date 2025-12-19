import React, { useState } from "react";
import { motion } from "framer-motion";

const WaterButton = ({
  text,
  href,
  className = "",
  circleSize = 80,
}) => {
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <a href={href} className="relative inline-block">
      <button
        className={`relative overflow-hidden border-2 border-yellow-200 
          text-yellow-100 font-bold p-5 rounded-lg shadow-md 
          hover:scale-105 duration-150 ${className}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered && (
          <motion.div
            className="absolute bg-yellow-400 rounded-full pointer-events-none mix-blend-screen"
            style={{
              width: circleSize,
              height: circleSize,
              top: cursor.y - circleSize / 2,
              left: cursor.x - circleSize / 2,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}

        <span className="relative z-10">{text}</span>
      </button>
    </a>
  );
};

export default WaterButton;
