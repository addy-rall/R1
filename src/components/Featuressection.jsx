import React, { useState, useEffect } from "react";
import "./WhyChooseUs.css";
import mandirHistory from "../assets/ma.jpeg";
import guideIcon from "../assets/new_icon_pandit.jpg";
import pujaIcon from "../assets/PUJA RITUALS_1.jpg";
import supportIcon from "../assets/icon digital.jpg";
import peaceIcon from "../assets/new_icon_peace2.jpg";

const items = [
  {
    title: "Rich History",
    text: "Detailed historical insights, architectural significance, and cultural context for every temple.",
    image: mandirHistory,
  },
  {
    title: "Expert Guides",
    text: "Connect with knowledgeable local guides who share deep understanding of spiritual traditions.",
    image: guideIcon,
  },
  {
    title: "Verified Reviews",
    text: "Authentic visitor experiences and testimonials to help you plan your spiritual journey.",
    image: pujaIcon,
  },
  {
    title: "24/7 Support",
    text: " Round-the-clock assistance for bookings, travel tips, and spiritual guidance.",
    image: supportIcon,
  },
  {
    title: "Peaceful Experience",
    text: "Carefully planned visits that respect temple traditions and enhance your spiritual connection.",
    image: peaceIcon,
  },
];

const Featuressection = () => {
  const [current, setCurrent] = useState(0);

  // Auto change every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % items.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + items.length) % items.length);

  return (
    <section className="py-16 bg-gradient-to-bl from-[#fbcfe8] to-[#fed7aa] text-center">
      <h2 className="text-5xl font-bold text-gray-900 mb-3">Why Choose Us ?</h2>
      <p className="text-gray-600 mb-12 text-xl">
        We're dedicated to connecting you with the world's most sacred
            spaces through authentic, respectful, and transformative experiences.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-5">
        {/* Circle layout for desktop */}
        <div className="hidden md:block relative w-[320px] h-[320px]">
          {items.map((item, i) => (
            <div
              key={i}
              className={`absolute w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-white shadow-md transition-transform duration-300 ${
                i === current ? "scale-110 shadow-lg" : "opacity-80"
              }`}
              style={{
                top: `${150 + 100 * Math.sin((i * 2 * Math.PI) / items.length) - 50}px`,
                left: `${150 + 100 * Math.cos((i * 2 * Math.PI) / items.length) - 50}px`,
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full relative transition-all duration-700 ease-in-out">
          <div className="flex flex-col items-center space-y-4 animate-fadeIn">
            <img
              src={items[current].image}
              alt={items[current].title}
              className="w-20 h-20 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold text-gray-900">
              {items[current].title}
            </h3>
            <p className="text-gray-600">{items[current].text}</p>
          </div>

          {/* Arrows */}
          <div className="flex justify-center gap-6 mt-6">
            <button
              onClick={prevSlide}
              className="text-2xl text-gray-500 hover:text-gray-800"
            >
              &#10094;
            </button>
            <button
              onClick={nextSlide}
              className="text-2xl text-gray-500 hover:text-gray-800"
            >
              &#10095;
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {items.map((_, i) => (
              <span
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  i === current ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featuressection;
