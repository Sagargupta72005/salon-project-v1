import React from 'react';
import { useDarkMode } from '../Dark/DarkModeContext';

const First = () => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className="
         h-full overflow-hidden bg-cover bg-center bg-no-repeat sm:w-full 
        transition-colors duration-500 
      "
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1678356164573-9a534fe43958?w=1200&auto=format&fit=crop&q=60)',
      }}
    >
      {/* Overlay */}
      <div
        className={`
          w-full h-full
          px-6 py-20 md:py-28 
          flex items-center
          transition
          ${darkMode ? 'bg-gray-950/50' : 'bg-black/60'}
        `}
      >
        {/* Outer Glass Card */}
        <div
          className={`
            relative max-w-6xl mx-auto rounded-xl 
            p-6 md:p-10 
            border backdrop-blur-md
            transition-colors duration-500
            ${darkMode
              ? 'border-gray-600 bg-black/40'
              : 'border-gray-300 bg-white/10'
            }
          `}
        >
          <div className="flex p-5 flex-col md:flex-row items-center gap-10">
            
            {/* LEFT TEXT */}
            <div className="md:w-1/2 w-full">
              <h2
                className={`
                  text-3xl md:text-2xl font-bold leading-snug mb-2
                  transition-colors duration-500
                  ${darkMode ? 'text-white' : 'text-yellow-50'}
                `}
              >
                Making Women And Men Look Beautiful and Comfortable In Their Own Skin
              </h2>

              <div className="w-20 border-b-2 border-pink-500 mb-6"></div>

              <p
                className={`
                  text-sm md:text-base leading-relaxed font-light
                  transition-colors duration-500
                  ${darkMode ? 'text-gray-300' : 'text-gray-200'}
                `}
              >
                Inaugurating a transformative journey in 2019, Euphoria Premium Salon has been one of the
                <strong> best salon & Spa for both women and men </strong> and has reimagined standards
                of beauty and wellness by seamlessly integrating innovation with luxury in the heart of
                North Bangalore, India. Our burgeoning brand is renowned for its distinctive concepts of
                combining salon, clinic, and spa as an all-in-one solution encompassing these three services
                under a single roof.
              </p>
            </div>

            {/* RIGHT VIDEO */}
            <div className="md:w-1/2 w-full aspect-video rounded-lg overflow-hidden shadow-xl shadow-black/70 ">
              <iframe
                src="https://www.youtube.com/embed/TKz5G8qVI-c?si=CbNXfnedKHG2hOGw"
                title="Welcome to Euphoria Premium Salon"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
