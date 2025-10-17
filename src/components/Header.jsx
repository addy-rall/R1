import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../components/Header.css";
import ProfileIcon from "../assets/temple1.png";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Heart, ShoppingCart, LogOut, LogIn, UserPlus, Menu, X } from "lucide-react";

const Header = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef();
  const profileRef = useRef();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Logout
  const handleLogout = async () => {
    await signOut(auth);
    setShowLogout(false);
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 10) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !e.target.closest(".menu-toggle")
      ) {
        setMenuOpen(false);
      }
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setShowLogout(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Get user initials
  const getInitials = (nameOrEmail) => {
    if (!nameOrEmail) return "";
    const parts = nameOrEmail.split(" ");
    if (parts.length > 1) return (parts[0][0] + parts[1][0]).toUpperCase();
    return nameOrEmail.substring(0, 2).toUpperCase();
  };

  return (
    <header className="header fixed-header">
      {/* ===== Logo ===== */}
      <div className="logo">
        <img src={ProfileIcon} alt="Logo" className="logo-icon-asset" />
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>
      <nav ref={menuRef} className={`side-menu ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/temples" onClick={() => setMenuOpen(false)}>Temples</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </nav>

      <div className="auth-section-right">
        {user ? (
          <>
            <Link to="/wishlist" className="icon-btn">
              <Heart size={22} />
            </Link>
            <Link to="/cart" className="icon-btn">
              <ShoppingCart size={22} />
            </Link>

            <div
              className="profile-container"
              ref={profileRef}
              onClick={() => setShowLogout(!showLogout)}
            >
              {user.photoURL ? (
                <img src={user.photoURL} alt="User" className="user-avatar" />
              ) : (
                <div className="user-initials">
                  {getInitials(user.displayName || user.email)}
                </div>
              )}

              {showLogout && (
                <div className="logout-dropdown">
                  <button onClick={handleLogout} className="logout-btn">
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="login-btn">
              <LogIn size={20} />
              <span>Login</span>
            </Link>
            <Link to="/register" className="signup-btn">
              <UserPlus size={20} />
              <span>Sign up</span>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
