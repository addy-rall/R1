// src/components/Header.jsx
import React from 'react';
import '../components/Header.css';
import ProfileIcon from '../assets/temple.png'; 

// Import Lucide Icons for the right side
import { 
  User,          
  LogIn,         
  UserPlus       
} from 'lucide-react'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={ProfileIcon} alt="Profile Icon" className="logo-icon-asset" /> 
        
        {/* NEW: Wrapper for the stacked text */}
        <div className="logo-text-stack">
          <span className="logo-text">Mannka</span>
          {/* NEW: The Hindi tagline */}
          <span className="logo-tagline">मन से मंदिर</span>
        </div>
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#temples">Temples</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="auth-section-right">
        <User size={30} color="white" className="user-profile-icon" />
        <a href="#login" className="login-btn">
          <LogIn size={20} color="white" />
          Login
        </a>
        <button className="signup-btn">
          <UserPlus size={20} color="white" />
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Header;