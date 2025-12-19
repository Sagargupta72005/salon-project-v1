import React from 'react';

const HeadBlog = () => {
  return (
    <div
      className="w-full h-64 sm:h-96 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-black/50 w-full h-full flex items-center justify-center">
        <h1 className="text-white text-3xl sm:text-5xl font-bold tracking-wider">
          BLOG
        </h1>
      </div>
    </div>
  );
};

export default HeadBlog;
