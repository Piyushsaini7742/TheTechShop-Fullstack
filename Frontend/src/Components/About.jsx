import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">About TheTechShop</h2>
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          At **TheTechShop**, we bring you the latest and greatest in **PC cabinets, gaming keyboards, mice, and accessories**. Whether you're a professional, gamer, or tech enthusiast, we’ve got the right gear for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">🚀 Our Mission</h3>
            <p className="text-gray-700 text-sm">
              We are dedicated to providing **high-quality, innovative, and affordable tech products**.
              Our goal is to help customers build their dream setups with premium gear at unbeatable prices.
            </p>
          </div>

          <div className="bg-black text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">💡 Why Choose Us?</h3>
            <ul className="list-disc list-inside text-gray-300 text-sm">
              <li>Premium PC components & accessories.</li>
              <li>Affordable pricing & fast delivery.</li>
              <li>Trusted by thousands of customers worldwide.</li>
              <li>Dedicated support team to assist you.</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/contact" className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
