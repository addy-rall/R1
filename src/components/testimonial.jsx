
import author1 from "../assets/profile1.jpg";
import author2 from "../assets/profile2.jpg";
import author3 from "../assets/profile3.webp";    
import author4 from "../assets/profile4.jpg";
import author5 from "../assets/profile5.webp";
import author6 from "../assets/profile6.jpg";
import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Patel",
    location: "Gujarat, India",
    image: author1,
    text: "Being a local guide myself, I appreciate how Mannka maintains the sanctity and respect for our sacred traditions while making them accessible to global visitors.",
    rating: 4.5,
  },
  {
    name: "Rita Singh",
    location: "Madhya Pradesh, India",
    image: author2,
    text: "My meditation retreat in kashi Vishwanath was perfectly organized through Mannka. The spiritual atmosphere and knowledgeable guides created an unforgettable experience.",
    rating: 5,
  },
  {
    name: "Dimple Sharma",
    location: "Karnataka, India",
    image: author3,
    text: "The cross-cultural temple experiences offered by Mannka helped me understand the beautiful connections between traditions across the countries.",
    rating: 3.5,
  },
  {
    name: "Rahul Dubey",
    location: "Odisha, India",
    image: author4,
    text: "The journey was truly spiritual and enriching. Everything was well planned and guided by experts who genuinely care about the sacred experiences.",
    rating: 4,
  },
  {
    name: "Arjun Mehta",
    location: "Delhi, India",
    image: author5,
    text: "Mannka helped me reconnect with my roots. The respect and devotion shown by the team made it a truly divine journey.",
    rating: 5,
  },
  {
    name: "Shivani Yadav",
    location: "UP, India",
    image: author6,
    text: "A serene and unforgettable trip. I felt a deep spiritual connection during every visit. Thank you, Mannka, for making this possible!",
    rating: 4.5,
  },
];

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 3) % testimonials.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev - 3 < 0 ? testimonials.length - 3 : prev - 3
    );
  };

  // Auto-slide every 8 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 3);

  return (
    <section className="bg-gradient-to-bl from-[#fed7aa] to-[#fbcfe8] py-16 px-4 flex flex-col items-center">
      <h2 className="text-5xl font-bold text-gray-800 mb-12 text-center">
        What Our Visitors Say !
      </h2>

      <div className="relative max-w-7xl w-full flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-3 bg-white rounded-full shadow-lg hover:scale-105 transition"
        >
          <ChevronLeft className="text-gray-700 text-lg" />
        </button>

        {/* Testimonials Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-12">
          {visibleTestimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center transition-transform duration-500 hover:scale-105"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-pink-200"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                {t.name}
              </h3>
              <p className="text-sm text-gray-500">{t.location}</p>
              <div className="flex justify-center my-2">
  {[...Array(5)].map((_, i) => {
    const fullStars = Math.floor(t.rating);
    const halfStar = t.rating % 1 !== 0 && i === fullStars;

    return (
      <Star
        key={i}
        size={18}
        className={`${
          i < fullStars
            ? "text-yellow-400 fill-yellow-400"
            : halfStar
            ? "text-yellow-300 fill-yellow-200 opacity-70"
            : "text-gray-300"
        }`}
        fill={
          i < fullStars
            ? "currentColor"
            : halfStar
            ? "currentColor"
            : "none"
        }
        stroke={i < fullStars || halfStar ? "none" : "currentColor"}
      />
    );
  })}
</div>


              <p className="text-gray-600 text-sm italic leading-relaxed">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 p-3 bg-white rounded-full shadow-lg hover:scale-105 transition"
        >
          <ChevronRight className="text-gray-700 text-lg" />
        </button>
      </div>

      {/* Button */}
      <div className="mt-10">
        <button className="bg-[#ee6f2f] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#fe5907] transition">
          Share Your Experience
        </button>
      </div>
    </section>
  );
}
