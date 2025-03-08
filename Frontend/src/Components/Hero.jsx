import React from 'react';

const Hero = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to TheTechShop</h1>
        <p className="text-xl mb-8">Your one-stop shop for the latest electronics.</p>
        <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;