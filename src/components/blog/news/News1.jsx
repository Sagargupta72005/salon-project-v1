import React from 'react'

const News1 = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Latest News & Articles</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Stay updated with our newest articles, insights, and news from the industry.
        </p>
      </header>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        <div className="lg:col-span-2 space-y-8">
          <img
            src="/news-image.jpg"
            alt="News Header"
            className="w-full h-96 object-cover rounded-2xl shadow-md"
          />

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>29 Jan</span>
            <span>Beauty, Mustache</span>
            <span>admin</span>
            <span>Post a Comment</span>
          </div>

          <p className="text-gray-600 leading-relaxed">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
          </p>

          <h2 className="text-2xl font-semibold">
            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
          </h2>

          <p className="text-gray-600 leading-relaxed">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium..."
          </p>

          <div className="border p-6 rounded-2xl text-center relative">
            <div className="text-4xl text-red-500 mb-2">"</div>
            <p className="text-gray-700">
              Cididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="p-6 shadow rounded-xl">
            <input
              type="text"
              placeholder="Search"
              className="w-full border p-2 rounded-lg"
            />
          </div>

          <div className="p-6 shadow rounded-xl">
            <h3 className="font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Lectus velit etiam primis...</li>
              <li>Erat metus blandit aliquam...</li>
              <li>Cupiditate turpis ipsum...</li>
              <li>Nulla odio neque consequat...</li>
              <li>De Finibus Bonorum et Malorum</li>
            </ul>
          </div>

          <div className="p-6 shadow rounded-xl">
            <h3 className="font-semibold mb-4">Recent Comments</h3>
          </div>

          <div className="p-6 shadow rounded-xl">
            <h3 className="font-semibold mb-4">Archives</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>June 2018</li>
              <li>January 2018</li>
              <li>December 2017</li>
              <li>June 2017</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News1
