import React from "react";

const posts = [
  {
    id: 1,
    date: "15 Jan",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Google inks pact for new 35-storey office",
    excerpt: "That dominion stars lights dominion divide years for fourth have don’t stars is that he earth it first without heaven in place seed it second morning saying.",
    categories: ["Travel", "Lifestyle"],
    comments: 3,
  },
  {
    id: 2,
    date: "15 Jan",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    title: "Google inks pact for new 35-storey office",
    excerpt: "That dominion stars lights dominion divide years for fourth have don’t stars is that he earth it first without heaven in place seed it second morning saying.",
    categories: ["Travel", "Lifestyle"],
    comments: 3,
  },
  {
    id: 3,
    date: "10 Jan",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    title: "Exploring the new tech innovations",
    excerpt: "New tech trends are changing the landscape of modern life, integrating AI and IoT into everyday usage.",
    categories: ["Technology"],
    comments: 5,
  },
];

const categories = [
  { name: "Restaurant food", count: 37 },
  { name: "Travel news", count: 10 },
  { name: "Modern technology", count: 3 },
  { name: "Product", count: 11 },
  { name: "Inspiration", count: 21 },
  { name: "Health Care", count: 9 },
];

const recentPosts = [
  {
    id: 1,
    title: "From life was you fish...",
    date: "January 12, 2019",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=60&q=80",
  },
  {
    id: 2,
    title: "The Amazing Hubble",
    date: "02 Hours ago",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=60&q=80",
  },
  {
    id: 3,
    title: "Astronomy Or Astrology",
    date: "03 Hours ago",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=60&q=80",
  },
  {
    id: 4,
    title: "Asteroids telescope",
    date: "01 Hours ago",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=60&q=80",
  },
];

const tags = [
  "project", "love", "technology", "travel", "restaurant", "life style", "design", "illustration",
];

const BlogSection = () => {
  return (
    <div className="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-10">

      {/* Main Posts */}
      <div className="lg:col-span-8 space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow p-6">
            <div className="relative">
                <a href="/news1">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover rounded-lg"
              />
              </a>
              <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-md font-semibold text-sm">
                {post.date}
              </div>
            </div>
            <h3 className="mt-4 font-bold text-lg">{post.title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{post.excerpt}</p>
            <div className="mt-4 flex items-center space-x-4 text-gray-400 text-xs">
              <span>
                <i className="fas fa-user mr-1"></i>{" "}
                {post.categories.join(", ")}
              </span>
              <span>|</span>
              <span>
                <i className="far fa-comments mr-1"></i> {post.comments} Comments
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Sidebar */}
      <aside className="lg:col-span-4 space-y-8">

        {/* Search */}
        <div className="bg-white p-6 rounded-lg shadow">
          <form className="flex border border-yellow-600 rounded overflow-hidden">
            <input
              type="text"
              placeholder="Search Keyword"
              className="flex-grow px-3 py-2 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-600 px-4 flex items-center justify-center text-white"
              aria-label="Search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </form>
          <button className="mt-3 w-full border border-yellow-600 text-yellow-600 font-semibold py-2 rounded hover:bg-yellow-50 transition">
            SEARCH
          </button>
        </div>

        {/* Categories */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="font-bold mb-4">Category</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            {categories.map((cat, idx) => (
              <li key={idx} className="border-b border-gray-100 pb-2">
                {cat.name} <span className="text-gray-400">({cat.count})</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Posts */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="font-bold mb-4">Recent Post</h4>
          <ul className="space-y-4 text-sm">
            {recentPosts.map((post) => (
              <li key={post.id} className="flex items-center space-x-3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-14 h-14 object-cover rounded"
                />
                <div>
                  <p className="font-semibold">{post.title}</p>
                  <p className="text-gray-500 text-xs">{post.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Tag Clouds */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="font-bold mb-4">Tag Clouds</h4>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs hover:bg-yellow-600 hover:text-white transition"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default BlogSection;
