import React, { useState, useEffect } from "react";
import "../components/TempleCard.css";
import ramMandirImg from "../assets/RamMandir.jpg";
import kashiVishwanathImg from "../assets/KashiVishanath.jpg";
import durgaMataImg from "../assets/Durga Mata mandir.jpg";
import kaalBhairavImg from "../assets/KaalBhairav.jpg";
import bankeBihariImg from "../assets/BankeBihari.webp";
import annapurnaImg from "../assets/annapurnaTemple.jpg";
import { MapPin, Users, Clock, Heart } from "lucide-react";

const temples = [
  {
    name: "Kashi Vishwanath Temple",
    location: "Varanasi, Uttar Pradesh, India",
    image: kashiVishwanathImg,
    label: "Temple",
    description: "Where Lord Shiva resides eternally, blessing devotees with liberation.",
    tags: ["Shiva", "Jyotirlinga", "Moksha"],
    visitors: "1.5M visitors/year",
    established: "Est.1780",
  },
  {
    name: "Annapurna Temple",
    location: "Varanasi, Uttar Pradesh, India",
    image: annapurnaImg,
    label: "Temple",
    description: "The divine mother who nourishes every soul with abundance.",
    tags: ["Grace", "Nourishment", "Prosperity"],
    visitors: "900K visitors/year",
    established: "Est.18th century",
  },
  {
    name: "Durga Mata Mandir",
    location: "Varanasi, Uttar Pradesh, India",
    image: durgaMataImg,
    label: "Temple",
    description: "A sanctuary of Maa Durga’s fierce energy and motherly grace.",
    tags: ["Strength", "Power", "Protection"],
    visitors: "700K visitors/year",
    established: "Est.18th century",
  },
  {
    name: "Kaal Bhairav Temple",
    location: "Varanasi, Uttar Pradesh, India",
    image: kaalBhairavImg,
    label: "Temple",
    description: "The timeless guardian of Kashi, protecting devotees from evil.",
    tags: ["Guardian", "Fearless", "Justice"],
    visitors: "2.2M visitors/year",
    established: "Est.17th century",
  },
  {
    name: "Ram Mandir",
    location: "Ayodhya, Uttar Pradesh, India",
    image: ramMandirImg,
    label: "Temple",
    description: "A holy abode of Lord Rama, inspiring truth, devotion, and righteousness.",
    tags: ["Faith", "Dharma", "Devotion"],
    visitors: "100K visitors/day",
    established: "Est. January 2024",
  },
  {
    name: "Banke Bihari Temple",
    location: "Vrindavan, Uttar Pradesh, India",
    image: bankeBihariImg,
    label: "Temple",
    description: "Vrindavan's heart, where Krishna's playful spirit enchants all.",
    tags: ["Love", "Joy", "Playfulness"],
    visitors: "5M visitors/year",
    established: "Est. 1864",
  },
];

export default function Temples() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [favorites, setFavorites] = useState([]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % temples.length);
  const previousSlide = () => setCurrentSlide((prev) => (prev - 1 + temples.length) % temples.length);

  const toggleFavorite = (name) => {
    setFavorites((prev) =>
      prev.includes(name)
        ? prev.filter((fav) => fav !== name)
        : [...prev, name]
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="temple-section">
      <h2 className="section-heading">Most Recommended Temples</h2>
      <div className="container">
        <button className="nav-arrow left" onClick={previousSlide}>‹</button>
        <button className="nav-arrow right" onClick={nextSlide}>›</button>

        <div className="temples-grid">
          {Array.from({ length: 3 }).map((_, i) => {
            const templeIndex = (currentSlide + i) % temples.length;
            const temple = temples[templeIndex];
            const isFav = favorites.includes(temple.name);

            return (
              <div className="temple-card" key={temple.name}>
                <div className="image-wrapper">
                  <img src={temple.image} alt={temple.name} className="temple-image" />
                  <div className="temple-label">{temple.label}</div>

                  <button
                    className="favorite-btn"
                    onClick={() => toggleFavorite(temple.name)}
                    style={{
                      backgroundColor: isFav ? "#fee2e2" : "white",
                      borderColor: isFav ? "#fca5a5" : "#e5e7eb",
                    }}
                  >
                    <Heart
                      className={`w-5 h-5 transition-colors duration-300 ${
                        isFav ? "text-red-500 fill-red-500" : "text-gray-400"
                      }`}
                      fill={isFav ? "currentColor" : "none"}
                      strokeWidth={1.8}
                    />
                  </button>
                </div>

                <div className="temple-content">
                  <h3 className="temple-title">{temple.name}</h3>
                  <div className="temple-location">
                    <MapPin className="w-5 h-5 text-red-400 mr-2" />
                    <span>{temple.location}</span>
                  </div>
                  <p className="temple-description">{temple.description}</p>
                  <div className="temple-tags">
                    {temple.tags.map((tag, index) => (
                      <span className="tag" key={index}>{tag}</span>
                    ))}
                  </div>
                  <div className="temple-stats">
                    <div className="stat">
                      <Users className="w-5 h-5 text-blue-500 mr-2" />
                      <span>{temple.visitors}</span>
                    </div>
                    <div className="stat">
                      <Clock className="w-5 h-5 text-green-500 mr-2" />
                      <span>{temple.established}</span>
                    </div>
                  </div>
                  <button className="explore-btn">Explore Temple</button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="view-all-section">
          <button className="view-all-btn">View All Temples</button>
        </div>
      </div>
    </div>
  );
}
