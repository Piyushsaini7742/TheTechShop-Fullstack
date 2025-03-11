import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Offers from "./Components/Offers";
import Blog from "./Components/Blog";
import MyOrders from "./Components/MyOrders";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

const API_BASE_URL = "https://thetechshop-frontend-backend.onrender.com/api";

const App = () => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [popupMessage, setPopupMessage] = useState("");

  useEffect(() => {
    fetch(`${API_BASE_URL}/cart`)
      .then((res) => res.json())
      .then(setCart)
      .catch((error) => console.error("Error fetching cart:", error));
  }, []);

  const addToCart = async (product) => {
    try {
      const response = await fetch(`${API_BASE_URL}/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product._id }),
      });

      if (response.ok) {
        const newCartItem = await response.json();
        setCart((prevCart) => {
          const exists = prevCart.find((item) => item.productId._id === product._id);
          return exists
            ? prevCart.map((item) => item.productId._id === product._id ? { ...item, quantity: item.quantity + 1 } : item)
            : [...prevCart, newCartItem];
        });

        setPopupMessage(`${product.name} added to cart!`);
        setTimeout(() => setPopupMessage(""), 3000);
      } else {
        console.error("Failed to add item to cart");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const updateQuantity = async (id, quantity) => {
    try {
      const response = await fetch(`${API_BASE_URL}/cart/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity }),
      });

      if (response.ok) {
        const updatedItem = await response.json();
        setCart((prevCart) => prevCart.map((item) => (item._id === id ? updatedItem : item)));
      }
    } catch (error) {
      console.error("Error updating item quantity:", error);
    }
  };

  const removeItem = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/cart/${id}`, { method: "DELETE" });

      if (response.ok) {
        setCart((prevCart) => prevCart.filter((item) => item._id !== id));
      }
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const clearCart = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/cart`, { method: "DELETE" });

      if (response.ok) {
        setCart([]);
      }
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar cartCount={cart.length} onSearch={setSearchQuery} />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} searchQuery={searchQuery} />} />
            <Route path="/cart" element={<Cart cart={cart} removeItem={removeItem} clearCart={clearCart} updateQuantity={updateQuantity} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/myorders" element={<MyOrders />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>

        {popupMessage && (
          <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg text-center animate-fadeIn">
            {popupMessage}
          </div>
        )}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
