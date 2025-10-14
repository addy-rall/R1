// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../components/Header.css";
import ProfileIcon from "../assets/temple.png";

import {
  User,
  LogIn,
  UserPlus,
  Heart,
  ShoppingCart,
  LogOut,
} from "lucide-react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status from localStorage
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleLoginMock = () => {
    // Temporary login simulation — replace with real logic later
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <header className="header fixed-header">
      <div className="logo">
        <img src={ProfileIcon} alt="Profile Icon" className="logo-icon-asset" />
        <div className="logo-text-stack">
          <span className="logo-text">Mannka</span>
          <span className="logo-tagline">मन से मंदिर</span>
        </div>
      </div>

      <nav className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/temples">Temples</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div className="auth-section-right">
        {isLoggedIn ? (
          <>
            {/* Wishlist and Cart */}
            <Link to="/wishlist" className="icon-btn" aria-label="Wishlist">
              <Heart size={22} />
            </Link>
            <Link to="/cart" className="icon-btn" aria-label="Cart">
              <ShoppingCart size={22} />
            </Link>

            {/* Profile */}
            <Link to="/profile" className="icon-btn" aria-label="Profile">
              <User size={22} />
            </Link>

            {/* Logout */}
            <button onClick={handleLogout} className="logout-btn">
              <LogOut size={20} />
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="login-btn" onClick={handleLoginMock}>
              <LogIn size={20} />
              Login
            </Link>
            <Link to="/register" className="signup-btn" onClick={handleLoginMock}>
              <UserPlus size={20} />
              Sign up
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
