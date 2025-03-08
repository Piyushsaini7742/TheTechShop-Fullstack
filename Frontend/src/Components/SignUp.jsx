import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
      console.log("User Signed Up:", userCredential.user);
      showSuccessPopup();
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("Signup Error:", error);
      setError(error.message);
    }
  };

  const showSuccessPopup = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-r from-green-100 to-teal-100 min-h-screen flex items-center justify-center">
      {showPopup && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-md animate-slide-in">
          Signup Successful!
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-teal-600">Sign Up</h2>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
                placeholder="Enter your email"
                required
                autoComplete="on"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
                placeholder="Enter your password"
                required
                autoComplete="on"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?
              <Link to={"/login"} className="text-teal-500 hover:underline cursor-pointer transition duration-300">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
