import React from 'react';

const HeadShop = () => {
  return (
    <div
      className="w-full h-64 sm:h-96 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D')",
      }}
    >
      <div className="bg-black/50 w-full h-full flex items-center justify-center">
        <h1 className="text-white text-3xl sm:text-5xl font-bold tracking-wider">
          SHOP
        </h1>
      </div>
    </div>
  );
};

export default HeadShop;
