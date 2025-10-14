import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { UserPlus, Mail, Lock, Phone, MapPin, Calendar } from "lucide-react";

// Sample States & Cities
const stateCityData = {
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
  "Delhi": ["New Delhi", "Dwarka", "Rohini"],
  "Karnataka": ["Bengaluru", "Mysore", "Mangalore"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"],
};

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    state: "",
    city: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Reset city if state changes
    if (name === "state") {
      setFormData({ ...formData, state: value, city: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.length < 3) newErrors.name = "Name must be at least 3 characters";

    if (!formData.age) newErrors.age = "Age is required";
    else if (isNaN(formData.age) || formData.age < 1 || formData.age > 120)
      newErrors.age = "Enter a valid age";

    if (!formData.phone) newErrors.phone = "Phone is required";
    else if (!/^[6-9]\d{9}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email address";

    if (!formData.state) newErrors.state = "State is required";
    if (!formData.city) newErrors.city = "City is required";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    else if (!/[A-Z]/.test(formData.password) || !/[0-9]/.test(formData.password))
      newErrors.password = "Password must include at least one number and one uppercase letter";

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");

    if (validateForm()) {
      localStorage.setItem("registeredUser", JSON.stringify(formData));
      setSuccess("✅ Registration successful! Redirecting to Login...");
      setErrors({});
      setTimeout(() => navigate("/login"), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 px-4">
      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-8">
         
          <h1 className="text-3xl font-bold text-orange-700">Create Account 🙏</h1>
          <p className="text-gray-500 mt-1">Fill in your details to register</p>
        </div>

        {success && (
          <p className="text-green-600 bg-green-100 p-2 rounded-md text-center mb-4">{success}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <div className="flex items-center border-b-2 border-orange-300 focus-within:border-orange-500">
              <UserPlus className="text-orange-500 mr-3" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full py-2 outline-none bg-transparent"
              />
            </div>
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Age */}
          <div>
            <div className="flex items-center border-b-2 border-orange-300 focus-within:border-orange-500">
              <Calendar className="text-orange-500 mr-3" />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                className="w-full py-2 outline-none bg-transparent"
              />
            </div>
            {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
          </div>

          {/* Phone */}
          <div>
            <div className="flex items-center border-b-2 border-orange-300 focus-within:border-orange-500">
              <Phone className="text-orange-500 mr-3" />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full py-2 outline-none bg-transparent"
              />
            </div>
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center border-b-2 border-orange-300 focus-within:border-orange-500">
              <Mail className="text-orange-500 mr-3" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full py-2 outline-none bg-transparent"
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* State */}
          <div>
            <div className="flex items-center border-b-2 border-orange-300 focus-within:border-orange-500">
              <MapPin className="text-orange-500 mr-3" />
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full py-2 outline-none bg-transparent"
              >
                <option value="">Select State</option>
                {Object.keys(stateCityData).map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
            {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
          </div>

          {/* City */}
          <div>
            <div className="flex items-center border-b-2 border-orange-300 focus-within:border-orange-500">
              <MapPin className="text-orange-500 mr-3" />
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                disabled={!formData.state}
                className="w-full py-2 outline-none bg-transparent"
              >
                <option value="">Select City</option>
                {formData.state &&
                  stateCityData[formData.state].map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
              </select>
            </div>
            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center border-b-2 border-orange-300 focus-within:border-orange-500">
              <Lock className="text-orange-500 mr-3" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full py-2 outline-none bg-transparent"
              />
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <div className="flex items-center border-b-2 border-orange-300 focus-within:border-orange-500">
              <Lock className="text-orange-500 mr-3" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full py-2 outline-none bg-transparent"
              />
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-xl font-semibold flex justify-center items-center gap-2 transition"
            whileTap={{ scale: 0.97 }}
          >
            <UserPlus size={18} /> Register
          </motion.button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
