import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-300">
      <img className="w-full h-52 object-cover" src={product.image} alt={product.name} />
      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>
        <p className="text-gray-600 text-sm mt-2">{product.description}</p>
        <p className="text-indigo-600 font-bold text-lg mt-3">₹{product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 w-full transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
