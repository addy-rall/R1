// src/pages/Cart.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, Trash2, ShoppingBag } from "lucide-react";

const Cart = () => {
  // Example cart data — replace with real data or localStorage later
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Brass Diya Lamp",
      description: "Traditional diya lamp made from pure brass for your pooja room.",
      price: 499,
      quantity: 1,
      image:
        "https://cdn.pixabay.com/photo/2020/01/25/20/29/lamp-4792712_1280.jpg",
    },
    {
      id: 2,
      name: "Rudraksha Mala",
      description: "Sacred rudraksha mala for meditation and divine connection.",
      price: 899,
      quantity: 2,
      image:
        "https://cdn.pixabay.com/photo/2016/10/26/15/36/beads-1772010_1280.jpg",
    },
  ]);

  // Handle quantity changes
  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate total
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50 px-6 py-16">
      {/* Header */}
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold text-orange-700 mb-2 flex items-center justify-center gap-2">
          <ShoppingBag className="text-orange-600" />
          Your Cart
        </h1>
        <p className="text-gray-600 mb-10">
          Review your sacred finds before checkout 🙏
        </p>
      </motion.div>

      {/* Cart Items */}
      <div className="max-w-5xl mx-auto space-y-6">
        {cartItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white shadow-xl rounded-2xl flex flex-col sm:flex-row items-center overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-48 w-full sm:w-52 object-cover"
            />

            <div className="p-6 flex flex-col justify-between w-full">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-500 mb-3">
                  {item.description}
                </p>
                <p className="font-bold text-orange-600 text-lg mb-2">
                  ₹{item.price}
                </p>
              </div>

              <div className="flex justify-between items-center">
                {/* Quantity controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="text-gray-700 font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, +1)}
                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* Remove button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 bg-pink-100 rounded-full hover:bg-pink-200"
                >
                  <Trash2 className="text-pink-600" size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty Cart State */}
      {cartItems.length === 0 && (
        <motion.div
          className="text-center mt-20 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <ShoppingBag className="mx-auto mb-4 text-orange-400" size={50} />
          <p className="text-lg">
            Your cart is empty. Start exploring divine treasures 🕉️
          </p>
        </motion.div>
      )}

      {/* Cart Summary */}
      {cartItems.length > 0 && (
        <motion.div
          className="max-w-5xl mx-auto mt-12 p-6 bg-white rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">
              Total Amount
            </h2>
            <span className="text-2xl font-bold text-orange-700">
              ₹{total.toLocaleString()}
            </span>
          </div>
          <motion.button
            className="mt-6 w-full bg-orange-600 text-white font-semibold py-3 rounded-xl hover:bg-orange-700 transition"
            whileTap={{ scale: 0.97 }}
          >
            Proceed to Checkout
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
