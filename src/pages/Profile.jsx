// src/pages/Profile.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, Edit3, Save, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  // Sample user data — normally this would come from backend or localStorage
  const [user, setUser] = useState({
    name: "Arjun Sharma",
    email: "arjun.sharma@example.com",
    phone: "+91 9876543210",
    location: "Varanasi, India",
    avatar:
      "https://cdn.pixabay.com/photo/2017/01/31/13/14/avatar-2027366_1280.png",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userProfile"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setUser(formData);
    localStorage.setItem("userProfile", JSON.stringify(formData));
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50 px-6 py-16">
      <motion.div
        className="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <motion.img
            src={user.avatar}
            alt="User Avatar"
            className="w-32 h-32 rounded-full shadow-md border-4 border-pink-200 object-cover"
            whileHover={{ scale: 1.05 }}
          />
          <h1 className="text-3xl font-bold mt-4 text-pink-700">
            {user.name}
          </h1>
          <p className="text-gray-500">🕉️ मन से मंदिर 🛕</p>
        </div>

        {/* Info Section */}
        <div className="space-y-6">
          {/* Name */}
          <div className="flex items-center gap-3">
            <User className="text-pink-500" />
            <input
              type="text"
              name="name"
              value={formData.name}
              disabled={!isEditing}
              onChange={handleChange}
              className={`w-full border-b-2 outline-none ${
                isEditing
                  ? "border-pink-400 bg-pink-50"
                  : "border-transparent bg-transparent"
              } text-gray-700 text-lg font-medium`}
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail className="text-pink-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              disabled={!isEditing}
              onChange={handleChange}
              className={`w-full border-b-2 outline-none ${
                isEditing
                  ? "border-pink-400 bg-pink-50"
                  : "border-transparent bg-transparent"
              } text-gray-700 text-lg font-medium`}
            />
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <Phone className="text-pink-500" />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              disabled={!isEditing}
              onChange={handleChange}
              className={`w-full border-b-2 outline-none ${
                isEditing
                  ? "border-pink-400 bg-pink-50"
                  : "border-transparent bg-transparent"
              } text-gray-700 text-lg font-medium`}
            />
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <MapPin className="text-pink-500" />
            <input
              type="text"
              name="location"
              value={formData.location}
              disabled={!isEditing}
              onChange={handleChange}
              className={`w-full border-b-2 outline-none ${
                isEditing
                  ? "border-pink-400 bg-pink-50"
                  : "border-transparent bg-transparent"
              } text-gray-700 text-lg font-medium`}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-10">
          {isEditing ? (
            <motion.button
              onClick={handleSave}
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition"
              whileTap={{ scale: 0.95 }}
            >
              <Save size={18} /> Save
            </motion.button>
          ) : (
            <motion.button
              onClick={handleEdit}
              className="flex items-center gap-2 bg-pink-600 text-white px-6 py-2 rounded-xl hover:bg-pink-700 transition"
              whileTap={{ scale: 0.95 }}
            >
              <Edit3 size={18} /> Edit Profile
            </motion.button>
          )}

          <motion.button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-gray-200 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-300 transition"
            whileTap={{ scale: 0.95 }}
          >
            <LogOut size={18} /> Logout
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
