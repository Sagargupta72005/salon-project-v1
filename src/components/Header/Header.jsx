import React from "react";
import { useDarkMode } from "../Dark/DarkModeContext";

const SectionHeader = ({
  title,
  as: Tag = "h2",
  className = "",
}) => {
  const { darkMode } = useDarkMode();

  return (
    <Tag
      className={`text-center font-extrabold underline decoration-yellow-100 transition-colors duration-500
        ${darkMode ? "text-yellow-400" : "text-yellow-100"}
        ${Tag === "h1" ? "text-5xl" : "text-4xl"}
        ${className}`}
    >
      {title}
    </Tag>
  );
};

export default SectionHeader;
