// src/pages/Wishlist.jsx
import React from "react";
import { motion } from "framer-motion";
import { Heart, Trash2, ShoppingCart } from "lucide-react";

const Wishlist = () => {
  // Example wishlist items — replace these with your actual data later
  const wishlistItems = [
    {
      id: 1,
      name: "Brass Ganesha Idol",
      description: "Handcrafted Ganesha murti with fine details and divine energy.",
      price: "₹899",
      image:
        "https://cdn.pixabay.com/photo/2016/10/17/17/46/ganesha-1748613_1280.jpg",
    },
    {
      id: 2,
      name: "Tulsi Mala Beads",
      description: "Sacred Tulsi beads mala for peace, devotion, and spiritual growth.",
      price: "₹299",
      image:
        "https://cdn.pixabay.com/photo/2016/10/26/15/36/beads-1772010_1280.jpg",
    },
    {
      id: 3,
      name: "Incense Stick Holder",
      description: "Beautiful brass agarbatti stand for daily pooja use.",
      price: "₹499",
      image:
        "https://cdn.pixabay.com/photo/2018/03/02/06/59/incense-3195691_1280.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-orange-50 px-6 py-16">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold text-pink-700 mb-2 flex items-center justify-center gap-2">
          <Heart className="text-pink-600 fill-pink-500" />
          Your Wishlist
        </h1>
        <p className="text-gray-600 mb-10">
          Treasured picks that speak to your soul 💫
        </p>
      </motion.div>

      {/* Wishlist Cards */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {wishlistItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-56 w-full object-cover"
            />
            <div className="p-5 text-left">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                {item.name}
              </h2>
              <p className="text-sm text-gray-500 mb-3">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-pink-600 text-lg">
                  {item.price}
                </span>
                <div className="flex gap-3">
                  <button className="p-2 bg-pink-100 rounded-full hover:bg-pink-200 transition">
                    <Trash2 className="text-pink-600" size={18} />
                  </button>
                  <button className="p-2 bg-green-100 rounded-full hover:bg-green-200 transition">
                    <ShoppingCart className="text-green-700" size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State (if no items) */}
      {wishlistItems.length === 0 && (
        <motion.div
          className="text-center mt-20 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Heart className="mx-auto mb-4 text-pink-400" size={50} />
          <p className="text-lg">Your wishlist is empty. Start adding your favorites!</p>
        </motion.div>
      )}
    </div>
  );
};

export default Wishlist;
