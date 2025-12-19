import React from 'react';

const HeadBooking = () => {
  return (
    <div
      className="w-full h-64 sm:h-96 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1689710215336-d43ff1b25ba1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFNBTE9PTiUyMGJvb2tpbmd8ZW58MHx8MHx8fDA%3D')",
      }}
    >
      <div className="bg-black/90 w-full h-full flex items-center justify-center">
        <h1 className="text-yellow-100 text-3xl sm:text-5xl font-bold tracking-wider">
          BOOKING
        </h1>
      </div>
    </div>
  );
};

export default HeadBooking;
