import React from "react";
import { useDarkMode } from "../Dark/DarkModeContext";
import WaterButton from "../home/btn/WaterButton";
import SectionHeader from "../Header/Header";

const ContactMapForm = () => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`h-full w-full overflow-hidden transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-neutral-900 "
      }`}
    >
      <div
        className={`container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-1 gap-12`}
      >
        {/* Directions + Map */}
        <div>
          <h3
            className={`text-2xl font-semibold mb-4 ${
              darkMode ? "text-yellow-400" : "text-yellow-100"
            }`}
          >
            Directions
          </h3>

          <div className="w-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="salon-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4304.050717467729!2d80.83327129999999!3d24.573926800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847f0679c5229b%3A0x18b717285ec5affb!2sTFP%20Coding%20Classes!5e1!3m2!1sen!2sin!4v1765398808742!5m2!1sen!2sin"
              width="100%"
              height="350"
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          {/* <h3
            className={` p-10 flex justify-center underline text-3xl font-semibold mb-4 ${
              darkMode ? "text-yellow-400" : "text-yellow-100"
            }`}
          >
            Get in touch!
          </h3> */}
           <SectionHeader
  title="Get in touch!"
  as="h1"
  className="py-20"
/>

          <form className="flex flex-col gap-4  justify-center items-center  ">
            {/* Inputs */}
            <input
              className={`border p-3 w-80 rounded outline-none transition-all ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white"
                  : "bg-white border-yellow-500"
              } focus:border-yellow-400`}
              placeholder="Your Full Name*"
            />

            <input
              className={`border p-3 w-100 rounded outline-none transition-all ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white"
                  : "bg-white border-gray-300"
              } focus:border-yellow-400`}
              placeholder="Your Email"
            />

            <input
              className={`border p-3 rounded w-80 outline-none transition-all ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white"
                  : "bg-white border-gray-300"
              } focus:border-yellow-400`}
              placeholder="Your Mobile Number*"
            />

            <textarea
              className={`border p-3 rounded h-32 w-90 outline-none  resize-none ${
                darkMode
                  ? "bg-gray-800 border-gray-700 "
                  : "bg-white border-gray-300 text-black "
              }`}
              placeholder="Your Requirement*"
            ></textarea>

            {/* CAPTCHA Placeholder */}


            {/* Submit Button */}
            {/* <button
              className={`px-6 py-2 rounded font-semibold w-fit transition-all ${
                darkMode
                  ? "bg-yellow-400 text-black hover:bg-yellow-50 hover:text-black"
                  : "bg-yellow-500 text-black-500 hover:bg-yellow-50  hover:text-white"
              }`}
            >
              Submit
            </button> */}
             <WaterButton
        text="Submit"
        className="bg-transparent "
      />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMapForm;
