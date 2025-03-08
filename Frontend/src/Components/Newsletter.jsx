import React, { useState } from 'react';

const Newsletter = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-400 mb-8">Get the latest updates on new products and exclusive offers.</p>

        <form
          action="https://formsubmit.co/piyushsainiyt868@gmail.com"
          method="POST"
          className="flex justify-center"
        >

          <input type="hidden" name="_captcha" value="false" />

          <input type="hidden" name="_next" value="https://thank-you-page-the-tech-shop-newsletter.vercel.app/" />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-64 rounded-l focus:outline-none"
            required
          />

          <button
            type="submit"
            className="bg-white text-black px-6 py-2 rounded-r hover:bg-gray-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
