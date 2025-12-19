import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {  useDarkMode } from "../Dark/DarkModeContext";

const HeadingAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  
    const { darkMode } = useDarkMode();
  return (
    <motion.div
      ref={ref}
      className=" overflow-hidden "
    >
      <div
        className="relative flex justify-center items-center py-42 px-5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://framerusercontent.com/images/tlSGcVswBE0Wf43Vnby9RsVMBGg.png?width=1536&height=1024')",
        }}
      >
        {/* Transparent Overlay */}
        <div className="absolute inset-0 bg-black/92"></div>

        <h1 className={`relative text-4xl md:text-5xl font-extrabold drop-shadow-lg
          ${darkMode ?"text-yellow-400" : " text-yellow-100 " }`}>
          ABOUT US
        </h1>
      </div>
    </motion.div>
  );
};

export default HeadingAbout;
