import React from 'react';

const HeadContact = () => {
  return (
    <div
      className="w-full h-64 sm:h-96 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-black/50 w-full h-full flex items-center justify-center">
        <h1 className="text-white text-3xl sm:text-5xl font-bold tracking-wider">
          CONTACT
        </h1>
      </div>
    </div>
  );
};

export default HeadContact;
