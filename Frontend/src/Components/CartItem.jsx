import React from "react";

const CartItem = ({ item, updateQuantity, removeItem }) => {
  if (!item.productId) return null; // Prevent rendering invalid items

  const product = item.productId;
  const productName = product.name || "Unknown Product";
  const productPrice = product.price || 0;
  const productImage = product.image || "https://via.placeholder.com/100";

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex flex-col sm:flex-row items-center sm:items-start">
      <img src={productImage} alt={productName} className="w-20 h-20 object-cover rounded-lg sm:w-24 sm:h-24" />
      <div className="flex-1 ml-0 sm:ml-4 text-center sm:text-left">
        <h2 className="text-lg font-semibold text-gray-800 sm:text-base">{productName}</h2>
        <p className="text-gray-600 text-sm">₹{productPrice} x {item.quantity}</p>
        <p className="text-black font-bold text-sm sm:text-base">Total: ₹{(productPrice * item.quantity).toFixed(2)}</p>
      </div>
      <div className="flex items-center mt-2 sm:mt-0">
        <button
          onClick={() => updateQuantity(item._id, item.quantity - 1)}
          className="bg-gray-200 text-black px-3 py-1 rounded-md hover:bg-gray-300"
        >
          -
        </button>
        <span className="mx-2 text-lg">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item._id, item.quantity + 1)}
          className="bg-gray-200 text-black px-3 py-1 rounded-md hover:bg-gray-300"
        >
          +
        </button>
        <button
          onClick={() => removeItem(item._id)}
          className="ml-4 bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;