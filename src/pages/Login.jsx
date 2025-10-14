// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LogIn, Mail, Lock } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // In a real app, you'd authenticate with backend
    // Here we simulate login
    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/profile");
    } else {
      setError("Invalid email or password. Try again!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-pink-100 px-4">
      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-pink-700">Welcome Back 🙏</h1>
          <p className="text-gray-500 mt-1">Login to continue your spiritual journey</p>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 bg-red-100 p-2 rounded-md text-center mb-4">
            {error}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="flex items-center border-b-2 border-pink-300 focus-within:border-pink-500">
            <Mail className="text-pink-500 mr-3" />
            <input
              type="email"
              placeholder="Email"
              className="w-full py-2 outline-none bg-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex items-center border-b-2 border-pink-300 focus-within:border-pink-500">
            <Lock className="text-pink-500 mr-3" />
            <input
              type="password"
              placeholder="Password"
              className="w-full py-2 outline-none bg-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-xl font-semibold flex justify-center items-center gap-2 transition"
            whileTap={{ scale: 0.97 }}
          >
            <LogIn size={18} /> Login
          </motion.button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-pink-600 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
