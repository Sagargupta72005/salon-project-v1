import React from "react";
import {
  MdLocationOn,
  MdPhone,
  MdEmail,
  MdAccessTime,
  MdLocalParking,
} from "react-icons/md";
import { useDarkMode } from "../Dark/DarkModeContext";

const Timinginfo = () => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`overflow-hidden ${
        darkMode ? "bg-gray-900 text-white" : "bg-neutral-900 text-white"
      } transition-colors`}
    >
      <div className="container border-b border-amber-50  mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Address */}
        <div>
          <div className="flex items-center gap-2 text-2xl">
            <MdLocationOn
              className={`${darkMode ? "text-yellow-400" : "text-yellow-300"}`}
            />
            <h3 className="text-xl font-semibold text-white">Address</h3>
          </div>

          <p className="mt-3 leading-relaxed text-white/80">
            2rd floor, Paul Plaza,<br />
            #5/1, 34/1 K Narayanapura Cross,<br />
            Hennur Main Road,<br />
            Bengaluru – 560077
          </p>

          <div className="flex items-center gap-2 mt-6 text-2xl">
            <MdLocalParking
              className={`${darkMode ? "text-yellow-400" : "text-yellow-300"}`}
            />
            <h3 className="text-xl font-semibold text-white">Parking</h3>
          </div>
          <p className="mt-3 text-white/80">Free Parking Available</p>
        </div>

        {/* Call + Email */}
        <div>
          <div className="flex items-center gap-2 text-2xl">
            <MdPhone
              className={`${darkMode ? "text-yellow-400" : "text-yellow-300"}`}
            />
            <h3 className="text-xl font-semibold text-white">Call us</h3>
          </div>

          <p className="mt-3 text-white/80">+91-7760279992</p>
          <p className="text-white/80">+91-7760179992</p>

          <div className="flex items-center gap-2 mt-6 text-2xl">
            <MdEmail
              className={`${darkMode ? "text-yellow-400" : "text-yellow-300"}`}
            />
            <h3 className="text-xl font-semibold text-white">Email</h3>
          </div>

          <p className="mt-3 text-white/80">info@euphoriasalon.in</p>
          <p className="text-white/80">feedback@euphoriasalon.in</p>
        </div>

        {/* Hours */}
        <div>
          <div className="flex items-center gap-2 text-2xl">
            <MdAccessTime
              className={`${darkMode ? "text-yellow-400" : "text-yellow-300"}`}
            />
            <h3 className="text-xl font-semibold text-white">Opening Hours</h3>
          </div>

          <div className="mt-3 leading-relaxed space-y-1 text-white/80">
            <p>Monday ........... 9 am – 9 pm</p>
            <p>Tuesday .......... 9 am – 9 pm</p>
            <p>Wednesday ...... 9 am – 9 pm</p>
            <p>Thursday ......... 9 am – 9 pm</p>
            <p>Friday ............... 9 am – 9 pm</p>
            <p>Saturday .......... 9 am – 9 pm</p>
            <p>Sunday ............. 9 am – 9 pm</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Timinginfo;
