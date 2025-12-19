import React, { useState } from "react";

const SearchBox = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${query}`);
    // Here you can add your actual search logic or navigation
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex border border-gray-300 rounded-lg overflow-hidden shadow-md"
      >
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
          className="grow p-3 focus:outline-none"
          autoFocus
        />
        <button
          type="submit"
          className="bg-yellow-400 text-black px-5 font-semibold hover:bg-yellow-500 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
