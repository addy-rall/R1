// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../components/Header.css';
import ProfileIcon from '../assets/temple.png'; 

import { 
  User,          
  LogIn,         
  UserPlus,
  Heart,
  ShoppingCart  
} from 'lucide-react'; 

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
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
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/temples">Temples</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      
      <div className="auth-section-right">
        <button className="icon-btn" aria-label="Wishlist">
          <Heart size={22} />
        </button>
        <button className="icon-btn" aria-label="Shopping Cart">
          <ShoppingCart size={22} />
        </button>
        <button className="icon-btn" aria-label="User Profile">
          <User size={22} />
        </button>

        {!isLoggedIn ? (
          <>
            <Link to="/login" className="login-btn">
              <LogIn size={20} />
              Login
            </Link>
            <Link to="/register" className="signup-btn">
              <UserPlus size={20} />
              Sign up
            </Link>
          </>
        ) : (
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
