// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import { LogIn, Mail, Lock, ArrowRight, UserPlus } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirect to home
    } catch (err) {
      setError("Invalid email or password.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err) {
      setError("Google sign-in failed. Try again.");
    }
  };

  const handleForgotPassword = async () => {
    if (!email) return setError("Enter your email to reset password.");
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
    } catch {
      setError("Failed to send reset email.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-red-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-[380px]">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          <LogIn className="inline mr-2" /> Login
        </h2>

        {error && <p className="text-red-500 text-center mb-2">{error}</p>}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="flex items-center border p-2 rounded-md">
            <Mail className="text-gray-400 mr-2" size={18} />
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex items-center border p-2 rounded-md">
            <Lock className="text-gray-400 mr-2" size={18} />
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-red-500 text-white py-2 rounded-md hover:bg-red-600 flex items-center justify-center gap-1 transition-all"
          >
            <ArrowRight size={18} /> Login
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="mt-3 w-full border flex items-center justify-center gap-2 py-2 rounded-md hover:bg-gray-100 transition-all"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>

        <button
          onClick={handleForgotPassword}
          className="mt-3 text-sm text-red-500 hover:underline"
        >
          Forgot Password?
        </button>

        <p className="text-sm text-gray-600 text-center mt-4">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-red-500 font-semibold hover:underline inline-flex items-center"
          >
            Sign up <UserPlus size={14} className="ml-1" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
