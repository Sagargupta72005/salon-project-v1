import React from "react";
import { useDarkMode } from "../Dark/DarkModeContext";

const Hservice = () => {
  const { darkMode } = useDarkMode();

  return (
    <section
      className={`w-full py-50 flex items-center justify-center relative overflow-hidden ${
        darkMode ? "bg-gray-900" : "bg-neutral-200"
      }`}
    >
      {/* Background Overlay */}
      <div
        className={`absolute inset-0 ${
          darkMode ? "bg-black/60" : "bg-white/90"
        }`}
      />

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1590540180006-36971c22e35c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhhaXIlMjBleHBlcnQlMjB0aGVtc3xlbnwwfHwwfHx8MA%3D%3D"
        alt="Services"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 ${
          darkMode ? "text-yellow-400" : "text-yellow-100"
        }`}
      >
        <h1
          className={`text-4xl md:text-6xl font-bold tracking-widest uppercase mb-4 ${
            darkMode ? "text-yellow-400" : "text-yellow-100"
          }`}
        >
          Our Services
        </h1>

      </div>
    </section>
  );
};

export default Hservice;
