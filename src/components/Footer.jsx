import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import "./Footer.css";
import logo from "../assets/temple1.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Section */}
        <div className="footer-section about">
          <img src={logo} alt="Temple Explorer Logo" className="footer-logo-img" />

          <p>
            Discover sacred temples and spiritual experiences from around the world. 
            Connect with ancient wisdom and find inner peace through authentic temple visits.
          </p>
          <div className="social-icons">
            <a href="#"><Facebook size={28}/></a>
            <a href="#"><Twitter size={28}/></a>
            <a href="https://www.instagram.com/mannka.com_/"><Instagram size={28} /></a>
            <a href="#"><Youtube size={28} /></a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-section links">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/">Temples</Link></li>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="">Spiritual Experiences</Link></li>
            <li><Link to="/">Contact Us</Link></li>
            <li><Link to="/">Temple Festivals</Link></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="footer-section links">
          <h3>Resources</h3>
          <ul>
            <li><Link to="/">Spiritual Blog</Link></li>
            <li><Link to="/">Travel Tips</Link></li>
            <li><Link to="/">Cultural Guide</Link></li>
            <li><Link to="/">Temple Photography</Link></li>
            <li><Link to="/">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p><Mail className="icon" /> mannkaco@gmail.com</p>
          <p><Phone className="icon" />+91 8858855308</p>
          <p><MapPin className="icon" /> Varansi , India</p>
          <div className="newsletter">
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Mannka. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/cookies">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
