import React from "react";
import { useDarkMode } from "../Dark/DarkModeContext";

const services = [
  {
    title: "10 Hair Care Tips for Healthy Hair",
    description:
      "Discover essential tips for keeping your hair shiny, strong, and healthy. From diet to styling, these hair care secrets will transform your routine.",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=688&auto=format&fit=crop",
    link: "/blog/hair-care-tips",
  },
  {
    title: "Top Hair Coloring Trends in 2026",
    description:
      "Explore the latest hair coloring trends for men and women. Learn which shades are in vogue and how to maintain vibrant color.",
    image:
      "https://images.unsplash.com/photo-1617391654484-2894196c2cc9?q=80&w=1170&auto=format&fit=crop",
    link: "/blog/hair-color-trends",
  },
  {
    title: "Luxury Facial Treatments Explained",
    description:
      "Everything you need to know about luxury facials and skin treatments that rejuvenate and glow. Tips for choosing the right facial for your skin type.",
    image:
      "https://plus.unsplash.com/premium_photo-1661255395799-a300794397fb?q=80&w=1169&auto=format&fit=crop",
    link: "/blog/luxury-facials",
  },
  {
    title: "Benefits of Regular Body Massages",
    description:
      "Understand the physical and mental benefits of different massage techniques. Improve circulation, relieve stress, and enhance overall wellness.",
    image:
      "https://images.unsplash.com/photo-1639162906614-0603b0ae95fd?q=80&w=687&auto=format&fit=crop",
    link: "/blog/body-massages",
  },
  {
    title: "Guide to Waxing & Threading",
    description:
      "Learn about waxing and threading techniques for smooth, glowing skin. Tips on pre and post-care for a pain-free experience.",
    image:
      "https://plus.unsplash.com/premium_photo-1661431392914-e3fc8ff0e51a?q=80&w=1308&auto=format&fit=crop",
    link: "/blog/waxing-threading",
  },
  {
    title: "Bridal Make-Up Ideas for Every Bride",
    description:
      "Get inspired by the latest bridal makeup trends. From natural to glamorous looks, find the perfect style for your special day.",
    image:
      "https://images.unsplash.com/photo-1550005869-5fca7db35ddb?q=80&w=1170&auto=format&fit=crop",
    link: "/blog/bridal-makeup",
  },
  {
    title: "Feet Care: Pedicure Tips & Tricks",
    description:
      "Learn different types of pedicure techniques and how to keep your feet soft, healthy, and beautiful all year round.",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1170&auto=format&fit=crop",
    link: "/blog/feet-care",
  },
  {
    title: "Nail Art Trends for 2026",
    description:
      "Explore the hottest nail art trends this year. From glittery designs to 3D nails, elevate your nail game to the next level.",
    image:
      "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?q=80&w=1170&auto=format&fit=crop",
    link: "/blog/nail-art-trends",
  },
];


const Sabout = () => {
  const { darkMode } = useDarkMode();

  return (
    <section className={`h-full w-full overflow-hidden select-none transition-colors duration-500 py-16 bg-gray-50 
    ${darkMode ? "dark:bg-gray-900" : "bg-neutral-900"}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl font-semibold mb-12 hover:underline decoration-yellow-400 text-yellow-900 dark:text-yellow-300">
          Top Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ title, description, image, link }, i) => (
            <a
              key={i}
              href={link}
              className="group relative overflow-hidden rounded-3xl shadow-lg transition-transform transform hover:scale-105 duration-300 bg-white dark:bg-white/10 border border-gray-200 dark:border-gray-700"
            >
              {/* Image */}
              <div className="relative h-64 sm:h-72 md:h-80">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-100"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              {/* Text Content */}
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-yellow-400 transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  {description.length > 100
                    ? description.slice(0, 100) + "..."
                    : description}
                </p>
                <span className="inline-block mt-4 text-yellow-500 font-semibold group-hover:underline">
                  Read More →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sabout;
