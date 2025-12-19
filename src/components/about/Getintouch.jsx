import { useDarkMode } from "../Dark/DarkModeContext";
import SectionHeader from "../Header/Header";

const Getintouch = () => {
  const { darkMode } = useDarkMode();

  return (
    <section
      className={`py-24 overflow-hidden select-none border-t-2
      ${
        darkMode
          ? "bg-gray-900 border-yellow-300 text-white"
          : "bg-neutral-900 border-amber-800 text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Header */}
        {/* <h1
          className={`text-3xl font-bold tracking-widest uppercase mb-3 underline  
          ${darkMode ? "text-yellow-400" : "text-yellow-100"}`}
        >
          Our Recent News
        </h1> */}
        <SectionHeader
  title="Our Recent News"
  as="h1"
  className="py-2"
/>
        <h2 className="text-xl mb-16">
          Tips and Tricks From <br className="hidden md:block" /> Recent Blog
        </h2>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              img: "https://images.unsplash.com/photo-1759142016096-a9d1a5ebcc09?q=80&w=978&auto=format&fit=crop",
              link: "/blog",
            },
            {
              img: "https://images.unsplash.com/photo-1648548331182-a1a0c413e37d?w=500&auto=format&fit=crop&q=60",
              link: "/blog",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`group text-left border rounded-4xl overflow-hidden transition
              hover:-translate-y-1 hover:shadow-xl
              ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-neutral-800 border-neutral-700"
              }`}
            >
              <div className="relative">
                <img
                  src={item.img}
                  alt="Blog"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-2 text-center">
                  <p className="text-lg font-bold leading-none">24</p>
                  <p className="text-xs uppercase">Nov</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-gray-400 mb-2">| Physics</p>
                <h3 className="text-xl font-semibold mb-4 leading-snug">
                  Footprints in Time is Perfect House in Kurashiki
                </h3>

                {/* Styled text, not a link */}
                <span className="inline-block text-sm font-semibold uppercase tracking-wide text-amber-400 group-hover:text-amber-300">
                  Become a Member →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Getintouch;
