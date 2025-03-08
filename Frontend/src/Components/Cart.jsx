import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart, removeItem, clearCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.productId.price * item.quantity, 0);
  const discount = totalPrice > 500 ? totalPrice * 0.1 : 0;
  const finalPrice = totalPrice - discount;

  return (
    <div className="container mx-auto p-4 w-full max-w-3xl bg-gray-100 min-h-screen">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-left bg-white p-4 shadow-md rounded-md">
        Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-center bg-white p-4 rounded-md shadow-md">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem key={item._id} item={item} removeItem={removeItem} />
          ))}

          <div className="bg-white shadow-md rounded-lg p-4 mt-4">
            <p className="text-gray-800 font-bold text-lg">Price Details</p>
            <p className="text-gray-700 flex justify-between">
              Total Amount: <span>₹{finalPrice.toFixed(2)}</span>
            </p>
          </div>

          <button onClick={clearCart} className="mt-4 w-full bg-red-500 text-white text-lg py-2 rounded-md shadow-md hover:bg-red-600 transition">
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
