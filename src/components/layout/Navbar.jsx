import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiX, FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { useDarkMode } from "../Dark/DarkModeContext";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
const location = useLocation();

const isActive = (item) => {
  const path = getPath(item);
  return location.pathname === path;
};

useEffect(() => {
  if (mobileOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [mobileOpen]);
  
  const getPath = (item) => {
    switch (item) {
      case "Home": return "/";
      case "About Us": return "/about";
      case "Services": return "/service";
      case "Gallery": return "/gallery";
      case "Blog": return "/blog";
      case "Shop": return "/shop";
      case "Booking": return "/booking";
      case "Contacts": return "/contact";
      default: return "/";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY <= 170);

      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (window.scrollY < lastScrollY) {
        setScrollDirection("up");
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen]);

  const menuItems = [
    "Home",
    "About Us",
    "Services",
    "Gallery",
    "Blog",
    "Booking",
  ];

  const middleIndex = Math.floor(menuItems.length / 2);
  const closeMobileMenu = () => setMobileOpen(false);

  const toggleSearch = () => setSearchOpen((prev) => !prev);
  const handleSearchChange = (e) => setSearchQuery(e.target.value);
const handleSearchSubmit = () => {
  if (!searchQuery.trim()) return;

  navigate(`/service?q=${encodeURIComponent(searchQuery)}`);
  setSearchOpen(false);
};



  

  return (
    <motion.header
      className={`fixed top-0 select-none flex items-center justify-center min-w-full z-999   ${
        scrolled
          ? darkMode
            ? " text-white"
            : "bg-transparent text-white"
          : darkMode
          ? "bg-gray-900 text-white"
          : "bg-neutral-900 text-white"
      }`}
      initial={{ opacity: 1, y: -100 }}
animate={{
  y: scrollDirection === "down" ? -50 : 0,
}}
transition={{
  duration: 1,
  ease: "easeOut",
  type: "tween",
      }}
    >
      {/* MOBILE */}
      <div className="flex md:hidden justify-between items-center w-full px-6 py-4">
        <Link to="/">
          <img
            src="https://cutstyle.true-emotions.studio/wp-content/themes/cutstyle/images/logo.svg"
            alt="Logo"
            className="h-10 w-auto"
          />
        </Link>

        <div className="flex items-center gap-4">
          

          {darkMode ? (
            <FiSun
              className="text-xl cursor-pointer text-white"
              onClick={toggleDarkMode}
            />
          ) : (
            <FiMoon
              className="text-xl cursor-pointer text-white"
              onClick={toggleDarkMode}
            />
          )}
          <FiMenu
            className="text-white text-3xl cursor-pointer"
            onClick={() => setMobileOpen(true)}
          />
        </div>
      </div>

      {/* TABLET */}
      <div className="hidden md:flex lg:hidden justify-between items-center w-full px-8 py-2">
        <Link to="/">
          <img
            src="https://cutstyle.true-emotions.studio/wp-content/themes/cutstyle/images/logo.svg"
            alt="Logo"
            className="h-16 w-auto"
          />
        </Link>

        <div className="flex items-center gap-6">
          {!searchOpen && (
            <FiSearch
              className="text-white text-2xl cursor-pointer hover:text-gray-300"
              onClick={toggleSearch}
              title="Open Search"
            />
          )}
          {searchOpen && (
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center bg-gray-700 rounded overflow-hidden"
            >
              <input
                type="text"
                className="px-2 py-1 w-48 text-black focus:outline-none"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                autoFocus
              />
              <FiX
                className="text-white cursor-pointer px-2"
                onClick={toggleSearch}
                title="Close Search"
              />
            </form>
          )}

          {darkMode ? (
            <FiSun
              className="text-xl cursor-pointer text-white"
              onClick={toggleDarkMode}
            />
          ) : (
            <FiMoon
              className="text-xl cursor-pointer text-white"
              onClick={toggleDarkMode}
            />
          )}
          <FiMenu
            className="text-white text-3xl cursor-pointer"
            onClick={() => setMobileOpen(true)}
          />
        </div>
      </div>

      {/* LARGE TABLET */}
      <div className="hidden lg:flex xl:hidden justify-between items-center px-10 py-5">
        <nav className="flex items-center justify-between gap-10 w-full text-lg font-serif">
          <div className="flex gap-6">
            {menuItems.slice(0, middleIndex).map((item) => (
              <Link
                to={getPath(item)}
                key={item}
                className={`cursor-pointer transition ${
                  isActive(item)

                    ? "text-yellow-400 font-semibold"
                    : darkMode
                    ? "text-white hover:text-gray-300"
                    : "text-white hover:text-yellow-100"
                }`}
                onClick={() => setActiveLink(item)}
              >
                {item}
              </Link>
            ))}
          </div>

          <Link to="/">
            <img
              src="https://cutstyle.true-emotions.studio/wp-content/themes/cutstyle/images/logo.svg"
              alt="Logo"
              className="h-20 w-auto"
            />
          </Link>

          <div className="flex gap-6 items-center">
            {menuItems.slice(middleIndex).map((item) => (
              <Link
                to={getPath(item)}
                key={item}
                className={`cursor-pointer transition ${
                  isActive(item)
                    ? "text-yellow-400 font-semibold"
                    : darkMode
                    ? "text-white hover:text-gray-100"
                    : "text-white hover:text-yellow-100"
                }`}
                onClick={() => setActiveLink(item)}
              >
                {item}
              </Link>
            ))}

            {!searchOpen && (
              <FiSearch
                className="text-2xl cursor-pointer hover:text-gray-300"
                onClick={toggleSearch}
                title="Open Search"
              />
            )}
            {searchOpen && (
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center bg-gray-700 rounded overflow-hidden"
              >
                <input
                  type="text"
                  className="px-2 py-1 w-48 text-black focus:outline-none"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  autoFocus
                />
                <FiX
                  className="text-white cursor-pointer px-2"
                  onClick={toggleSearch}
                  title="Close Search"
                />
              </form>
            )}

            {darkMode ? (
              <FiSun
                className="text-xl cursor-pointer text-white"
                onClick={toggleDarkMode}
              />
            ) : (
              <FiMoon
                className="text-xl cursor-pointer text-white"
                onClick={toggleDarkMode}
              />
            )}
          </div>
        </nav>
      </div>

      {/* DESKTOP */}
      <div className="hidden xl:flex justify-between py-4">
        <nav className="flex justify-between items-center text-xl font-light pl-20 gap-10">
          {menuItems.slice(0, middleIndex).map((item) => (
            <Link
  to={getPath(item)}
  key={item}
  className={`cursor-pointer transition ${
    isActive(item)
      ? "text-yellow-400 font-semibold"
      : darkMode
      ? "text-white hover:text-gray-300"
      : "text-white hover:text-yellow-100"
  }`}
>
  {item}
</Link>

          ))}

          <Link to="/">
            <img
              src="https://cutstyle.true-emotions.studio/wp-content/themes/cutstyle/images/logo.svg"
              alt="Logo"
              className="h-24 w-auto mx-10"
            />
          </Link>

          {menuItems.slice(middleIndex).map((item) => (
            <Link
              to={getPath(item)}
              key={item}
              className={`cursor-pointer transition ${
                isActive(item)
                  ? "text-yellow-400 font-semibold"
                  : darkMode
                  ? "text-white hover:text-gray-300"
                  : "text-white hover:text-yellow-100"
              }`}
              onClick={() => setActiveLink(item)}
            >
              {item}
            </Link>
          ))}

         <div className="flex items-center gap-6 pl-6">
  {!searchOpen && (
    <button
      type="button"
      onClick={toggleSearch}
      className="text-2xl cursor-pointer hover:text-gray-300"
    >
      <FiSearch />
    </button>
  )}

  {searchOpen && (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearchSubmit();
      }}
      className="flex items-center bg-white rounded overflow-hidden"
    >
      
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search..."
        className="px-2 py-1 w-48 text-black focus:outline-none"
        autoFocus
      />

      {/* SEARCH BUTTON */}
      <button
        type="submit"
        className="px-2 text-black hover:text-gray-600"
        title="Search"
      >
        <FiSearch />
      </button>

      {/* CLOSE BUTTON */}
      <button
        type="button"
        onClick={toggleSearch}
        className="px-2 text-black cursor-pointer hover:text-gray-600"
        title="Close"
      >
        <FiX />
      </button>
    </form>
  )}

  <button
    type="button"
    onClick={toggleDarkMode}
    className="text-xl cursor-pointer text-white"
  >
    {darkMode ? <FiSun /> : <FiMoon />}
  </button>
</div>



        </nav>
      </div>

      {/* MOBILE / TABLET DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 left-0 h-full w-80 sm:w-3/4 overflow-y-auto ${
              darkMode ? "bg-gray-900 text-white" : "bg-black text-white"
            } p-6 z-999 flex flex-col`}
          >
            
            <div className="flex justify-end mb-8">
               <img
            src="https://cutstyle.true-emotions.studio/wp-content/themes/cutstyle/images/logo.svg"
            alt="Logo"
            className="h-10 pr-50 w-auto"
          />
              <FiX
                className="text-3xl cursor-pointer"
                onClick={closeMobileMenu}

              />
              <Link to="/">
         
        </Link>
              
            </div>

            <div className="flex flex-col gap-6 text-lg font-serif tracking-wide grow overflow-y-auto">
              {menuItems.map((item) => (
                <Link
                  to={getPath(item)}
                  key={item}
                  className={`cursor-pointer transition ${
                    isActive(item)
                      ? "text-yellow-400 font-semibold"
                      : darkMode
                      ? "text-white hover:text-gray-300"
                      : "text-white hover:text-gray-200"
                  }`}
                  onClick={() => {
                    setActiveLink(item);
                    closeMobileMenu();
                  }}
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-6 mt-auto pb-10">
              {!searchOpen && (
                <FiSearch
                  className="text-3xl cursor-pointer hover:text-gray-300"
                  onClick={toggleSearch}
                  title="Open Search"
                />
              )}
              {searchOpen && (
                   <form
  onSubmit={(e) => {
    e.preventDefault();
    handleSearchSubmit();
  }}
  className="flex items-center bg-white rounded overflow-hidden"
>
  
  <input
    type="text"
    value={searchQuery}
    onChange={handleSearchChange}
    placeholder="Search..."
    className="px-2 py-1 w-48 text-black focus:outline-none"
    autoFocus
  />
  

  {/* SEARCH BUTTON */}
  <button
    type="submit"
    className="px-2 cursor-pointer text-black hover:text-gray-600"
    title="Search"
  >
    <FiSearch />
  </button>

  {/* CLOSE BUTTON */}
  <button
  
    type="button"
    onClick={toggleSearch}
    className="px-2 text-black cursor-pointer hover:text-gray-600"
    title="Close"
  >
    <FiX />
  </button>
  
</form>

  )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
