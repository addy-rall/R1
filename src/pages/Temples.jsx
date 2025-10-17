import React, { useState, useMemo } from 'react';
import A from "../assets/annapurnaTemple.jpg";
import B from "../assets/BankeBihari.webp";
import C from "../assets/Durga Mata mandir.jpg";
import D from "../assets/KaalBhairav.jpg";
import E from "../assets/KashiVishanath.jpg";
import F from "../assets/RamMandir.jpg";
import '../temp.css';
import { Link } from 'react-router-dom';
// NOTE: Assuming TempleDetailPage is handled by a router or another parent component.
// For simplicity here, we'll keep the list view only, as the primary goal is the modal.

// Temple data with SLUG and COORDINATES for the map
export const temples = [
    {
        id: 1,
        name: "Annapurna Temple",
        shortDescription: "Maa Annapurna's presence in Varanasi is a symbol of divine sustenance. It is believed that she fulfills the basic needs of her devotees...",
        longDescription: "Dedicated to the Goddess of Food, the Annapurna Temple stands near the Kashi Vishwanath Temple...",
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
        shortDescription: "Worshippers who seek the divine grace of Lord Krishna in his childhood form, known as Banke Bihari...",
        longDescription: "The Banke Bihari Temple in Vrindavan is one of the most revered sites for followers of Lord Krishna...",
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
        longDescription: "Also known as the Monkey Temple, the Durga Mandir is dedicated to the warrior Goddess Durga...",
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
        shortDescription: "Revered as the Kotwal (police chief) of Kashi, this temple is dedicated to the fierce manifestation of Lord Shiva...",
        longDescription: "Kaal Bhairav is believed to be the guardian of the city of Varanasi. It is said that no one can stay in Kashi without his permission...",
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
        shortDescription: "The Kashi Vishwanath Temple, situated on the banks of the sacred river Ganges, is one of the twelve Jyotirlingas...",
        longDescription: "Recently renovated with the spectacular Kashi Vishwanath Corridor, this temple is the spiritual heart of Varanasi...",
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
        shortDescription: "The magnificent temple built at the sacred Ram Janmabhoomi, the birthplace of Lord Ram...",
        longDescription: "The Ram Mandir represents the fulfillment of a centuries-old dream for millions of Hindus...",
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

export const TemplesPage = () => {
    // --- State Variables ---
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedTemple, setSelectedTemple] = useState(null);
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", phone: "",
        date: "", time: "", people: "", requirements: "", terms: false
    });
    const [successMessage, setSuccessMessage] = useState("");

    // --- Memoized Filtering Logic ---
    const filteredTemples = useMemo(() => {
        const term = searchTerm.toLowerCase();
        return temples.filter(temple =>
            temple.name.toLowerCase().includes(term) ||
            temple.location.toLowerCase().includes(term)
        );
    }, [searchTerm]);


    // --- Handlers ---

    // Opens the booking modal and selects the temple
    const handleBookDarshan = (temple) => {
        setSelectedTemple(temple);
        setShowModal(true);
        // Reset form data for a new booking
        setFormData({
            firstName: "", lastName: "", email: "", phone: "",
            date: "", time: "", people: "", requirements: "", terms: false
        });
        setSuccessMessage("");
    };
    
    // Closes the modal and resets booking state
    const closeModal = () => {
        setShowModal(false);
        setSelectedTemple(null);
        setSuccessMessage("");
    };
    
    // Handles form input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({ 
            ...prevData, 
            [name]: type === "checkbox" ? checked : value 
        }));
    };
    
    // Handles form submission (MOCK API CALL)
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic Client-side validation check
        if (!formData.firstName || !formData.date || !formData.time || !formData.terms) {
            setSuccessMessage("❌ Please fill in all required fields and accept the terms.");
            return;
        }

        const bookingData = { temple: selectedTemple.name, ...formData };
        console.log("Attempting booking with data:", bookingData);
        
        try {
            // Mock API call: 70% chance of success after 1 second
            await new Promise(resolve => setTimeout(resolve, 1000));
            const response = { ok: Math.random() > 0.3 };
            
            if (response.ok) {
                setSuccessMessage("✅ Your darshan booking has been submitted successfully!");
                // Clear form inputs but keep the modal open to show success
                setFormData({
                    firstName: "", lastName: "", email: "", phone: "",
                    date: "", time: "", people: "", requirements: "", terms: false
                });
            } else {
                setSuccessMessage("❌ Failed to submit booking. The temple server is busy. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setSuccessMessage("⚠️ Server error. Please try later.");
        }
    };
    
    // --- Render Component ---
    return (
        <div className="temple-listing-container">
            <h1 className="main-heading">Sacred Temples of Uttar Pradesh</h1>
            <h2 className="sub">Discover the divine heritage of Uttar Pradesh through its magnificent temples. Book your darshan online and experience spiritual bliss.</h2>
            
            {/* Search Bar Section */}
            <div className="search-bar-section">
                <div className="search-input-wrapper">
                    <svg
                        className="search-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        {/* Search Icon Path */}
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

            {/* Temple Grid / Listing Section */}
            <div className="temple-grid">
                {filteredTemples.length > 0 ? (
                    filteredTemples.map(temple => (
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
                                    {/* Button to OPEN MODAL via handleBookDarshan */}
                                    <button
                                        className="book-btn"
                                        onClick={() => handleBookDarshan(temple)}
                                    >
                                        Book Darshan
                                    </button>
                                    {/* Link to TempleDetailPage via Router */}
                                    <Link 
                                        to={`/temple/${temple.detailsUrl}`} 
                                        className="read-more-btn"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-results-message">No temples found matching your search term.</p>
                )}
            </div>
            
            {/* Darshan Booking Modal (Conditional Rendering) */}
            {showModal && selectedTemple && (
                <div className="fixed inset-0 bg-white/30 backdrop-blur-md bg-opacity-40 flex justify-center items-center z-50 width-full">
                    <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative">
                        <button onClick={closeModal} className="absolute top-3 right-3 text-gray-500 hover:text-black transition duration-200">✖</button>
                        <h2 className="text-2xl font-bold text-orange-600 mb-2">Book Darshan</h2>
                        <p className="text-gray-600 mb-4 font-medium">{selectedTemple.name}, {selectedTemple.location}</p>

                        {successMessage ? (
                            // Success/Failure Message Display
                            <div className={`p-4 rounded text-center font-semibold ${successMessage.startsWith('✅') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {successMessage}
                                {successMessage.startsWith('✅') && (
                                    <button onClick={closeModal} className="mt-4 block w-full px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition duration-200">Close</button>
                                )}
                                {!successMessage.startsWith('✅') && (
                                    <button onClick={() => setSuccessMessage("")} className="mt-4 block w-full px-4 py-2 border border-red-700 text-red-700 rounded hover:bg-red-50 transition duration-200">Try Again</button>
                                )}
                            </div>
                        ) : (
                            // Booking Form
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="flex gap-4">
                                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-1/2 border p-2 rounded focus:ring-orange-500" required />
                                    <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-1/2 border p-2 rounded focus:ring-orange-500" required />
                                </div>
                                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full border p-2 rounded focus:ring-orange-500" required />
                                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full border p-2 rounded focus:ring-orange-500" required />

                                <div className="flex gap-4">
                                    <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-1/2 border p-2 rounded focus:ring-orange-500" required />
                                    <select name="time" value={formData.time} onChange={handleChange} className="w-1/2 border p-2 rounded focus:ring-orange-500" required>
                                        <option value="" disabled>Select Time Slot</option>
                                        <option>Morning</option>
                                        <option>Afternoon</option>
                                        <option>Evening</option>
                                    </select>
                                </div>

                                <select name="people" value={formData.people} onChange={handleChange} className="w-full border p-2 rounded focus:ring-orange-500" required>
                                    <option value="" disabled>Number of People</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4+</option>
                                </select>

                                <textarea name="requirements" placeholder="Special Requirements (optional)" value={formData.requirements} onChange={handleChange} className="w-full border p-2 rounded focus:ring-orange-500" rows="3"></textarea>
                                
                                <div className="flex items-center">
                                    <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" required />
                                    <p className="text-sm text-gray-600">I agree to the terms and conditions.</p>
                                </div>

                                <div className="flex justify-end gap-4 pt-2">
                                    <button type="button" onClick={closeModal} className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition duration-200">Cancel</button>
                                    <button type="submit" className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition duration-200">Book Darshan</button>
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