// src/components/HeroSection.jsx
import React from 'react';
import '../components/HeroSection.css';
import TempleBackground from '../assets/Temple.jpeg'; 

const HeroSection = () => {
  const [temple, setTemple] = React.useState('');

  const handleChange = (e) => {
    setTemple(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for temple:', temple);
  };

  return (
    <section 
      className="hero-section"
      style={{ backgroundImage: `url(${TempleBackground})` }}
    >
      <div className="hero-content">
        <h1>Discover Sacred Spaces</h1>
        <p>Book your spiritual journey at India's most revered temples. Experience divine blessings with seamless darshan bookings.</p>

        {/* NEW: Horizontal Search Card Container */}
        <form className="horizontal-search-card" onSubmit={handleSubmit}>
          {/* Left Half: Typing Space (Input) */}
          <input
            type="text"
            name="temple"
            placeholder="Select Temple"
            value={temple}
            onChange={handleChange}
            className="input-typing-area"
          />
          {/* Right Half: Search Button */}
          <button type="submit" className="search-btn-horizontal">
             Search Temples
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;