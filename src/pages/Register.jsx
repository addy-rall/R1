// src/pages/Register.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import { UserPlus, Mail, Lock, ArrowRight, LogIn } from "lucide-react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(res.user, { displayName: name });
      navigate("/"); // Redirect after signup
    } catch (err) {
      setError("Failed to register. Try again.");
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err) {
      setError("Google sign-up failed. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-red-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-[380px]">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          <UserPlus className="inline mr-2" /> Sign Up
        </h2>

        {error && <p className="text-red-500 text-center mb-2">{error}</p>}

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <div className="flex items-center border p-2 rounded-md">
            <Mail className="text-gray-400 mr-2" size={18} />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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
            <ArrowRight size={18} /> Register
          </button>
        </form>

        <button
          onClick={handleGoogleSignup}
          className="mt-3 w-full border flex items-center justify-center gap-2 py-2 rounded-md hover:bg-gray-100 transition-all"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign up with Google
        </button>

        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-red-500 font-semibold hover:underline inline-flex items-center"
          >
            Login <LogIn size={14} className="ml-1" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
