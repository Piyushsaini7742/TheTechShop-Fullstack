import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="text-gray-400 space-y-2">
            <li><a href="/" className="hover:text-white transition duration-300">Home</a></li>
            <li><a href="/cart" className="hover:text-white transition duration-300">Cart</a></li>
            <li><a href="/about" className="hover:text-white transition duration-300">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition duration-300">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110">
              <Facebook size={24} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110">
              <Twitter size={24} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110">
              <Instagram size={24} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-400">📧 <a href="mailto:piyushsainiyt868@gmail.com" className="hover:text-white transition duration-300">PiyushSainiYt868@gmail.com</a></p>
          <p className="text-gray-400">📞 <a href="tel:+917742853977" className="hover:text-white transition duration-300">+917742853977</a></p>
        </div>
      </div>

      <div className="text-center mt-8 text-gray-400 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} TheTechShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
