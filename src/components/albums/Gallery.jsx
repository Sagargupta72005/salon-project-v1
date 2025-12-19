import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../Dark/DarkModeContext";

const images = [
  "https://plus.unsplash.com/premium_photo-1673758905765-9e2d1096b8f4?w=500&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1669675936787-017c402baa4f?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1573651235591-221193be5229?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1578390432942-d323db577792?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1456327102063-fb5054efe647?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1654097803253-d481b6751f29?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1541260894924-7ff059b93d54?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1654097803253-d481b6751f29?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1541260894924-7ff059b93d54?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1654097800183-574ba7368f74?w=500&auto=format&fit=crop&q=60",
];

const Gallery = () => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`w-full min-h-screen py-10 transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-neutral-900"
      }`}
    >
      {/* CENTERED CONTAINER WITH px-60 */}
      <div className="container mx-auto px-4 md:px-20 lg:px-60">

      

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: -50 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              exit={{opacity: 0, y: 80}}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-xl shadow-md cursor-pointer"
            >
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="w-full rounded-xl hover:opacity-90 duration-300"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Gallery;
