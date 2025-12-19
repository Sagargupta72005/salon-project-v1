import React from "react";
import { useDarkMode } from "../Dark/DarkModeContext";

const topImages = [
  "https://images.unsplash.com/photo-1647140655214-e4a2d914971f?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1590540179852-2110a54f813a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFpciUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1730126355748-76300015ae07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFpciUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhaXIlMjBtZW58ZW58MHx8MHx8fDA%3D",
];

const menPrices = [
  { name: "Men's Hair Cut", price: "₹200" },
  { name: "Fade / Taper Cut", price: "₹250" },
  { name: "Beard Trim", price: "₹99" },
  { name: "Beard Styling + Razor Finish", price: "₹149" },
  { name: "Hair Wash + Styling", price: "₹199" },
  { name: "Men's Hair Color (Ammonia Free)", price: "₹799" },
  { name: "Root Touch Up", price: "₹499" },
  { name: "Beard Color", price: "₹149" },
  { name: "Men’s Facial Cleanup", price: "₹399" },
  { name: "Anti-Acne Facial", price: "₹799" },
  { name: "Detan Pack", price: "₹249" },
  { name: "Head Massage (Oil)", price: "₹199" },
  { name: "Head + Shoulder Massage", price: "₹299" },
  { name: "Full Body Massage", price: "₹999" },
  { name: "Back Massage", price: "₹299" },
  { name: "Hair Spa (Basic)", price: "₹399" },
  { name: "Hair Spa (Premium)", price: "₹699" },
  { name: "Dandruff Treatment", price: "₹399" },
  { name: "Protein Treatment", price: "₹599" },
  { name: "Shave (Foam)", price: "₹99" },
  { name: "Luxury Shave", price: "₹149" },
  { name: "Face Threading", price: "₹99" },
  { name: "Chest Waxing", price: "₹399" },
  { name: "Back Waxing", price: "₹399" },
  { name: "Full Body Waxing", price: "₹999" },
];

const Boylist = () => {
  const { darkMode } = useDarkMode();

  return (
    <section
      className={`w-full py-32 px-5 ${
        darkMode ? "bg-gray-900 text-white" : "bg-neutral-900  text-white-900"
      }`}
    >
      <h2
        className={`text-3xl underline  font-bold text-center mb-20  ${
          darkMode ? "text-yellow-300" : "text-yellow-100"
        }`}
      >
        Men’s Salon Price Card 
      </h2> 

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {menPrices.map((item, index) => {
          const img = topImages[index % topImages.length];

          return (
            <div
              key={index}
              className={`rounded-2xl shadow-lg transition transform duration-300 overflow-hidden hover:scale-[1.03] ${
                darkMode
                  ? "bg-white/10 border border-blue-900/40 shadow-3xl shadow-amber-500"
                  : "bg-white/10 border shadow-3xl shadow-amber-50  "
              }`}
            >
              {/* Image */}
              <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-100 shrink overflow-hidden">
                <img
                  src={img}
                  alt={item.name}
                  className="w-full h-full object-cover object-center md:hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-center">
                  <h3 className={darkMode ? "text-white" : "text-white font-semibold"}>
                    {item.name}
                  </h3>
                  <span className="text-blue-300 font-bold">{item.price}</span>
                </div>

                <div
                  className={`mt-3 h-px ${
                    darkMode ? "bg-blue-300/40" : "bg-blue-300/30"
                  }`}
                ></div>

                <p className={`mt-3 text-sm ${darkMode ? "text-gray-300" : "text-gray-100"}`}>
                  Professional grooming & premium men’s care services.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Boylist;
