import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { Menu, X } from 'lucide-react';

const Navbar = ({ cartCount, onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-gray-400 transition duration-300">
          TheTechShop
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className={`md:flex md:items-center md:space-x-6 ${isOpen ? 'block' : 'hidden'} absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0`}>
          <SearchBar onSearch={onSearch} className="md:block hidden" />
          <Link to="/" className="block md:inline hover:text-gray-400 transition duration-300">Home</Link>
          <Link to="/offers" className="block md:inline hover:text-gray-400 transition duration-300">Offers</Link>
          <Link to="/myorders" className="block md:inline hover:text-gray-400 transition duration-300">My Orders</Link>
          <Link to="/about" className="block md:inline hover:text-gray-400 transition duration-300">About</Link>
          <Link to="/contact" className="block md:inline hover:text-gray-400 transition duration-300">Contact</Link>
          <Link to="/blog" className="block md:inline hover:text-gray-400 transition duration-300">Blog</Link>
          <Link to="/login" className="block md:inline hover:text-gray-400 transition duration-300">Login</Link>
          <Link to="/cart" className="block md:inline hover:text-gray-400 transition duration-300">
            <i className="fa-solid fa-cart-shopping mr-1"></i>
            Cart ({cartCount})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
