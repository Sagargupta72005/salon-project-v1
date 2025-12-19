import React from "react";
import { useDarkMode } from "../Dark/DarkModeContext";

const Gahead = () => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`w-full py-30 flex justify-center items-center transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-neutral-900"
      }`}
    >
      <h2
        className={`text-center text-3xl sm:text-4xl md:text-5xl underline font-bold transition-colors duration-300 ${
          darkMode ? "text-white" : "text-yellow-100"
        }`}
      >
        Our Gallery
      </h2>
    </div>
  );
};

export default Gahead;
