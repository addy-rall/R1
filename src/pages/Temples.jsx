// src/pages/Temples.jsx

import React, { useState } from 'react';
import A from "../assets/annapurnaTemple.jpg";
import B from "../assets/BankeBihari.webp";
import C from "../assets/Durga Mata mandir.jpg";
import D from "../assets/KaalBhairav.jpg";
import E from "../assets/KashiVishanath.jpg";
import F from "../assets/RamMandir.jpg";
import '../temp.css';
import { Link } from 'react-router-dom';

// Temple data with SLUG and COORDINATES for the map
export const temples = [
  {
    id: 1,
    name: "Annapurna Temple",
    shortDescription: "Maa Annapurna's presence in Varanasi is a symbol of divine sustenance. It is believed that she fulfills the basic needs of her devotees by providing abundance and spiritual strength....",
    longDescription: "Dedicated to the Goddess of Food, the Annapurna Temple stands near the Kashi Vishwanath Temple. Legend holds that Lord Shiva himself once begged for alms from Maa Annapurna. Worshippers believe that those who pray here will never go hungry.",
    location: "Varanasi, Uttar Pradesh",
    rating: 4,
    ratingCount: 6,
    imageUrl: A,
    details: { timing: "5:00 AM - 12:00 PM, 4:00 PM - 11:00 PM", dressCode: "Traditional Indian attire is preferred." },
    tags: ["Ancient Temple", "Divine Sustenance", "Varanasi Heritage"],
    bookingLink: "/book-annapurna",
    detailsUrl: "annapurna-temple", 
    coordinates: { lat: 25.3117, lng: 83.0076 } // Varanasi
  },
  {
    id: 2,
    name: "Banke Bihari Temple",
    shortDescription: "Worshippers who seek the divine grace of Lord Krishna in his childhood form, known as Banke Bihari, often for inner peace, harmony, and spiritual fulfillment....",
    longDescription: "The Banke Bihari Temple in Vrindavan is one of the most revered sites for followers of Lord Krishna. The deity here is considered to be a self-manifested form of Lord Krishna and Radha.",
    location: "Vrindavan, Uttar Pradesh",
    rating: 4.7,
    ratingCount: 22175,
    imageUrl: B,
    details: { timing: "7:45 AM - 12:00 PM, 5:30 PM - 9:30 PM (Varies seasonally)", dressCode: "Modest clothing is recommended." },
    tags: ["Lord Krishna", "Vrindavan Pilgrimage", "Spiritual Bliss", "Bihari Ji"],
    bookingLink: "/book-bankebihari",
    detailsUrl: "banke-bihari-temple", 
    coordinates: { lat: 27.5752, lng: 77.6601 } // Vrindavan
  },
  {
    id: 3,
    name: "Durga Mata Mandir",
    shortDescription: "The Durga Mandir is one of the oldest temples in Varanasi, mentioned in the sacred text Kashi Khand...",
    longDescription: "Also known as the Monkey Temple, the Durga Mandir is dedicated to the warrior Goddess Durga. It was constructed in the 18th century by a Bengali Maharani in the Nagara style of architecture.",
    location: "Varanasi, Uttar Pradesh",
    rating: 4.6,
    ratingCount: 56,
    imageUrl: C,
    details: { timing: "5:00 AM - 10:00 PM", dressCode: "No specific restrictions, but modest wear is appreciated." },
    tags: ["Goddess Durga", "Ancient Site", "Varanasi Landmark"],
    bookingLink: "/book-durga",
    detailsUrl: "durga-mata-mandir", 
    coordinates: { lat: 25.2801, lng: 82.9902 } // Varanasi
  },
  {
    id: 4,
    name: "Kaal Bhairav Temple",
    shortDescription: "Revered as the Kotwal (police chief) of Kashi, this temple is dedicated to the fierce manifestation of Lord Shiva. Visiting him is mandatory for a complete Kashi Yatra...",
    longDescription: "Kaal Bhairav is believed to be the guardian of the city of Varanasi. It is said that no one can stay in Kashi without his permission. The deity is worshipped as a terrifying but benevolent figure.",
    location: "Varanasi, Uttar Pradesh",
    rating: 4.7,
    ratingCount: 515,
    imageUrl: D,
    details: { timing: "5:00 AM - 1:30 PM, 4:30 PM - 9:30 PM (Varies seasonally)", dressCode: "Leather items are often restricted; modest dress is required." },
    tags: ["Lord Shiva", "Kotwal of Kashi", "Ancient", "Tantric", "Fierce Form"],
    bookingLink: "/book-kaalbhairav",
    detailsUrl: "kaal-bhairav-temple", 
    coordinates: { lat: 25.3195, lng: 83.0044 } // Varanasi
  },
  {
    id: 5,
    name: "Kashi Vishwanath Temple",
    shortDescription: "The Kashi Vishwanath Temple, situated on the banks of the sacred river Ganges, is one of the twelve Jyotirlingas, making it the holiest abode of Lord Shiva...",
    longDescription: "Recently renovated with the spectacular Kashi Vishwanath Corridor, this temple is the spiritual heart of Varanasi. It houses the sacred Jyotirlinga, the pillar of light, signifying Lord Shiva's presence.",
    location: "Varanasi, Uttar Pradesh",
    rating: 4.7,
    ratingCount: 515,
    imageUrl: E,
    details: { timing: "2:30 AM to 11:00 PM (subject to Aarti timings)", dressCode: "Strictly modest; western clothing (jeans/trousers) may be restricted inside the Garbhagriha." },
    tags: ["Jyotirlinga", "Lord Shiva", "Golden Temple", "Ganga Corridor", "Moksha"],
    bookingLink: "/book-kashivishwanath",
    detailsUrl: "kashi-vishwanath-temple", 
    coordinates: { lat: 25.3111, lng: 83.0101 } // Varanasi
  },
  {
    id: 6,
    name: "Ram Mandir",
    shortDescription: "The magnificent temple built at the sacred Ram Janmabhoomi, the birthplace of Lord Ram. Constructed in the traditional Nagara style without using iron or steel...",
    longDescription: "The Ram Mandir represents the fulfillment of a centuries-old dream for millions of Hindus. Built on the spot believed to be the birthplace of Lord Ram in Ayodhya.",
    location: "Ayodhya, Uttar Pradesh",
    rating: 4.9,
    ratingCount: 1500000,
    imageUrl: F,
    details: { timing: "7:00 AM - 11:30 AM, 2:00 PM - 7:00 PM (Aarti slots require passes)", dressCode: "Modest and respectful attire is strongly recommended." },
    tags: ["Ram Janmabhoomi", "Nagara Style", "Lord Rama", "Modern Architecture", "Pilgrimage"],
    bookingLink: "/book-rammandir",
    detailsUrl: "ram-mandir", 
    coordinates: { lat: 26.7953, lng: 82.1953 } // Ayodhya
  },
];

const TemplesPage = () => {
    // ... (rest of the state and handlers remain the same) ...
    // NOTE: The map-related logic is not here, but in the detail page.

    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedTemple, setSelectedTemple] = useState(null);
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", phone: "",
        date: "", time: "", people: "", requirements: "", terms: false
    });
    const [successMessage, setSuccessMessage] = useState("");

    const filteredTemples = temples.filter(temple =>
        temple.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleBookDarshan = (temple) => {
        setSelectedTemple(temple);
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
        setSelectedTemple(null);
        setSuccessMessage("");
    };
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const bookingData = { temple: selectedTemple.name, ...formData };

        try {
            const response = { ok: Math.random() > 0.3 };
            if (response.ok) {
                setSuccessMessage("✅ Your darshan booking has been submitted successfully!");
                setFormData({
                    firstName: "", lastName: "", email: "", phone: "",
                    date: "", time: "", people: "", requirements: "", terms: false
                });
            } else {
                setSuccessMessage("❌ Failed to submit booking. Please try again.");
            }
        } catch (error) {
            setSuccessMessage("⚠️ Server error. Please try later.");
        }
    };
    
    // ... (rest of the JSX structure remains the same) ...

    return (
        <div className="temple-listing-container">
            {/* ... (Search Bar and Heading JSX) ... */}
            <h1 className="main-heading">Sacred Temples of Uttar Pradesh</h1>
            <h2 className="sub">Discover the divine heritage of Uttar Pradesh through its magnificent temples. Book your darshan online and experience spiritual bliss.</h2>
            <div className="search-bar-section">
                <div className="search-input-wrapper">
                    <svg
                        className="search-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M21.71 20.29l-4.13-4.13A8.995 8.995 0 0018 10a9 9 0 10-9 9 8.995 8.995 0 005.16-1.57l4.13 4.13a1 1 0 001.42 0 1 1 0 000-1.42zM4 10a6 6 0 1112 0 6 6 0 01-12 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search for temple"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>
            </div>

            <div className="temple-grid">
                {filteredTemples.map(temple => (
                    <div key={temple.id} className="temple-card">
                        <img src={temple.imageUrl} alt={temple.name} className="temple-image" />
                        <div className="temple-info">
                            <h3 className="temple-title">{temple.name}</h3>
                            <p className="temple-location">{temple.location}</p>
                            <p className="temple-short">{temple.shortDescription}</p>
                            <div className="temple-tags">
                                {temple.tags.map(tag => (
                                    <span key={tag} className="temple-tag">{tag}</span>
                                ))}
                            </div>
                            <div className="temple-actions">
                                <button
                                    className="book-btn"
                                    onClick={() => handleBookDarshan(temple)}
                                >
                                    Book Darshan
                                </button>
                                <Link 
                                    to={`/temple/${temple.detailsUrl}`} 
                                    className="read-more-btn"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* ... (Modal JSX) ... */}
            {showModal && selectedTemple && (
                <div className="fixed inset-0 bg-white/30 backdrop-blur-md bg-opacity-40 flex justify-center items-center z-50 width-full">
                    <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative">
                        <button onClick={closeModal} className="absolute top-3 right-3 text-gray-500 hover:text-black">✖</button>
                        <h2 className="text-2xl font-bold text-orange-600 mb-2">Book Darshan</h2>
                        <p className="text-gray-600 mb-4">{selectedTemple.name}, {selectedTemple.location}</p>

                        {successMessage ? (
                            <div className="p-4 bg-green-60 text-green-700 rounded">{successMessage}</div>
                        ) : (
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="flex gap-4">
                                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-1/2 border p-2 rounded" required />
                                    <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-1/2 border p-2 rounded" required />
                                </div>
                                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full border p-2 rounded" required />
                                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full border p-2 rounded" required />

                                <div className="flex gap-4">
                                    <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-1/2 border p-2 rounded" required />
                                    <select name="time" value={formData.time} onChange={handleChange} className="w-1/2 border p-2 rounded" required>
                                        <option value="">Select Time</option>
                                        <option>Morning</option>
                                        <option>Afternoon</option>
                                        <option>Evening</option>
                                    </select>
                                </div>

                                <select name="people" value={formData.people} onChange={handleChange} className="w-full border p-2 rounded" required>
                                    <option value="">Number of People</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4+</option>
                                </select>

                                <textarea name="requirements" placeholder="Special Requirements" value={formData.requirements} onChange={handleChange} className="w-full border p-2 rounded" rows="3"></textarea>
                                
                                <div className="flex items-center">
                                    <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} className="mr-2" required />
                                    <p className="text-sm text-gray-600">I agree to the terms and conditions.</p>
                                </div>

                                <div className="flex justify-end gap-4">
                                    <button type="button" onClick={closeModal} className="px-4 py-2 border rounded">Cancel</button>
                                    <button type="submit" className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">Book Darshan</button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TemplesPage;