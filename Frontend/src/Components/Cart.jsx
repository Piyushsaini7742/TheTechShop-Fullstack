import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart, removeItem, clearCart, updateQuantity }) => {
  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.productId.price * item.quantity, 0);

  // Apply a random 15% discount
  const discount = totalPrice * 0.15;
  const platformFee = 3; // Fixed platform fee
  const deliveryCharges = 0; // Free delivery
  const finalPrice = totalPrice - discount + platformFee + deliveryCharges;

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
            <CartItem key={item._id} item={item} removeItem={removeItem} updateQuantity={updateQuantity} />
          ))}

          {/* Price Details */}
          <div className="bg-white shadow-md rounded-lg p-4 mt-4">
            <p className="text-gray-800 font-bold text-lg mb-4">Price Details</p>

            <div className="space-y-2">
              <p className="text-gray-700 flex justify-between">
                Price ({cart.length} items): <span>₹{totalPrice.toFixed(2)}</span>
              </p>
              <p className="text-gray-700 flex justify-between">
                Discount (15% off): <span className="text-green-600">-₹{discount.toFixed(2)}</span>
              </p>
              <p className="text-gray-700 flex justify-between">
                Platform Fee: <span>₹{platformFee.toFixed(2)}</span>
              </p>
              <p className="text-gray-700 flex justify-between">
                Delivery Charges: <span className="text-green-600">Free</span>
              </p>
            </div>

            <hr className="my-4 border-gray-300" />

            <p className="text-gray-800 font-bold text-lg flex justify-between">
              Total Amount: <span>₹{finalPrice.toFixed(2)}</span>
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-4 space-y-2">
            <button
              onClick={clearCart}
              className="w-full bg-red-500 text-white text-lg py-2 rounded-md shadow-md hover:bg-red-600 transition"
            >
              Clear Cart
            </button>
            <button
              onClick={() => alert("Order placed!")}
              className="w-full bg-green-500 text-white text-lg py-2 rounded-md shadow-md hover:bg-green-600 transition"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;