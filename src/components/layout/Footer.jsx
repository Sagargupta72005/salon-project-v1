import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaSkype, FaTumblr } from "react-icons/fa";
import { useDarkMode } from "../Dark/DarkModeContext";
import WaterButton from "../home/btn/WaterButton";

const Footer = () => {
  const { darkMode } = useDarkMode();

  const activeClass =
    "text-[#d5b97b] font-semibold underline underline-offset-4";
  const normalClass = "hover:text-[#d5b97b] transition";

  return (
    <footer
      className={`w-full py-12 select-none overflow-hidden border-t-2 ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-900 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
        {/* ABOUT */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#d5b97b]">
            About Our Salon
          </h3>
          <p className="text-sm leading-6 opacity-80">
            We bring out the natural beauty in every client with premium
            products and professional stylists.
          </p>
        </div>

        {/* SERVICES (ACTIVE LINKS) */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#d5b97b]">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                ✦ Hair Styling & Cutting
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                ✦ Spa & Skin Treatments
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                ✦ Nail Art & Manicure
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                ✦ Bridal Makeup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                ✦ Hair Coloring
              </NavLink>
            </li>
          </ul>
        </div>

        {/* OPENING HOURS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#d5b97b]">
            Opening Hours
          </h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Mon – Fri: 9:00 AM – 8:00 PM</li>
            <li>Saturday: 9:00 AM – 6:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        {/* BOOKING */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#d5b97b]">
            Book Your Visit
          </h3>
          <p className="text-sm opacity-80 mb-4">
            Experience luxury and care. Book an appointment now.
          </p>

          {/* <NavLink
            to="/booking"
            className="inline-block mb-4"
          > */}
              {/* </NavLink> */}
            <WaterButton
              href="/booking"
              text="Book Appointment"
              className="bg-transparent m-2 rounded-full"
            />

          <div className="text-sm opacity-90">
            <p>Email: beauty@salon.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
        <p className="text-sm opacity-70">
          © 2025 <span className="font-semibold text-[#d5b97b]">Salon</span>
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-4 md:gap-5">
          {[FaInstagram, FaTumblr, FaFacebookF, FaSkype].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full text-xl bg-[#d5b97b] text-white hover:bg-[#c7a96a] transition"
            >
              <Icon />
            </a>
          ))}
        </div>

        <p className="text-sm opacity-70 text-center md:text-left">
          Crafted by <span className="font-bold text-[#d5b97b]">Tfp</span> Beauty Tech
        </p>
      </div>
    </footer>
  );
};

export default Footer;
