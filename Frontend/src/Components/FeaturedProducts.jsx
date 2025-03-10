import React, { useState, useEffect } from "react";

const API_BASE_URL = "https://thetechshop-frontend-backend.onrender.com/api";


const FeaturedProducts = ({ addToCart, searchQuery }) => {
  const [products, setProducts] = useState([]);

  // ✅ Fetch products from backend
  useEffect(() => {
    fetch(`${API_BASE_URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched products:", data);
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  
  

  // ✅ Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product._id} // ✅ Use MongoDB ID instead of `id`
            className="bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-lg font-bold text-indigo-600 mt-4">₹{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;