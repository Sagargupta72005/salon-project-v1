import React from "react";
import { useDarkMode } from "../Dark/DarkModeContext";

const topImages = [
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1742909963702-656d8e16146a?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1676340619040-8688de9fd331?w=800&auto=format&fit=crop&q=60",
];

const womenPrices = [
  { name: "Hair Cut (Ladies)", price: "₹350" },
  { name: "Layer Cut", price: "₹650" },
  { name: "Hair Wash + Blow Dry", price: "₹499" },
  { name: "Global Hair Color", price: "₹2500" },
  { name: "Root Touch Up", price: "₹699" },
  { name: "Keratin Treatment", price: "₹4500" },
  { name: "Hair Smoothening", price: "₹5500" },
  { name: "Eyebrow Threading", price: "₹50" },
  { name: "Upper Lip Threading", price: "₹40" },
  { name: "Full Face Threading", price: "₹199" },
  { name: "Full Hand Waxing", price: "₹350" },
  { name: "Full Legs Waxing", price: "₹450" },
  { name: "Full Body Waxing", price: "₹1499" },
  { name: "Detan Face Pack", price: "₹299" },
  { name: "Cleanup (Basic)", price: "₹499" },
  { name: "Hydra Facial", price: "₹1999" },
  { name: "Gold Facial", price: "₹999" },
  { name: "Diamond Facial", price: "₹1299" },
  { name: "Bridal Makeup (HD)", price: "₹6999" },
  { name: "Saree Drape + Hair Style", price: "₹999" },
];

const Womenlist = () => {
  const { darkMode } = useDarkMode();

  return (
    <section
      className={`w-full py-12 pt-50 px-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-neutral-900 text-white"
      }`}
    >
 

      {/* RESPONSIVE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:h-full md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {womenPrices.map((item, index) => {
          const img = topImages[index % 4];

          return (
            <div
              key={index}
              className={`${
                darkMode ? "bg-white/10 border border-gray-700 shadow-2xl shadow-yellow-100 " : "bg-neutral-800/10 shadow-3xl shadow-amber-50 border-gray-900"
              } rounded-2xl shadow-lg transition transform duration-300  overflow-hidden hover:scale-[1.03]`}
            >
              {/* RESPONSIVE IMAGE HEIGHT */}
              <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-100 shrink overflow-hidden">
                <img
                  src={img}
                  alt={item.name}
                  className="w-full h-full object-cover object-center md:hover:scale-110 transition duration-300"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <span className="text-yellow-300 font-bold">{item.price}</span>
                </div>

                <div className="mt-3 h-px bg-yellow-300/40"></div>

                <p className="mt-3 text-sm text-gray-300 text-clip ">
                  Professional salon-grade service with premium products.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Womenlist;
