import React from 'react';
// Imports the CSS file from the root directory as per your folder structure
import '../TempleDetail.css'; 
import './Temples.jsx'; // Ensure this path is correct based on your project structure
import { FaMapMarkerAlt, FaClock, FaTshirt, FaTag, FaStar } from 'react-icons/fa'; 
// This component receives the selected 'temple' object as a prop
const TempleDetailPage = ({ temple }) => {
    // Fallback if the temple object is not successfully passed by the wrapper/router
    if (!temple) {
        return (
            <div className="detail-error-container">
                <h1 className="detail-main-title">Temple details not found.</h1>
                <p>The details for this specific temple could not be loaded. Please ensure the URL is correct.</p>
            </div>
        );
    }
    return (
        <div className="temple-detail-container">
            {/* Image Section */}
            <div className="detail-image-section">
                <img src={temple.imageUrl} alt={temple.name} className="detail-main-image" />
            </div>

            {/* Title Section */}
            <div className="detail-title-section">
                <h1 className="detail-main-title">{temple.name}</h1>
                <p className="detail-location">{temple.location}</p>
                <div className="detail-rating">
                    <FaStar className="rating-star-icon" /> 
                    **{temple.rating}** / 5.0 ({temple.ratingCount.toLocaleString()} ratings)
                </div>
            </div>

            {/* Main Content Grid (Overview + Sidebar) */}
            <div className="detail-content-grid">
                
                {/* Left Column: Descriptions */}
                <div className="detail-card description-overview">
                    <h2>Overview and Significance</h2>
                    
                    {/* Highlighted Short Description */}
                    <p className="short-desc-highlight">
                        **{temple.shortDescription.replace(/\.\.\.$/, '')}**
                    </p>
                    
                    {/* Full Detailed Description */}
                    <p className="long-desc-text">
                        {temple.longDescription} 
                    </p> 
                    
                    {/* Booking Link (Opens in a new tab) */}
                    <a href={temple.bookingLink || "#"} className="detail-book-link" target="_blank" rel="noopener noreferrer">
                        Book Darshan Slot Now
                    </a>
                </div>

                {/* Right Column: Key Details Sidebar */}
                <div className="detail-sidebar">

                    {/* Timings Card */}
                    <div className="detail-card">
                        <h3 className="detail-section-title">
                            <FaClock className="detail-icon" /> Darshan Timings
                        </h3>
                        <p className="detail-info">{temple.details.timing}</p>
                        <p className="detail-note">Times are approximate and subject to change based on daily rituals (Aartis) or special festivals.</p>
                    </div>

                    {/* Dress Code Card */}
                    <div className="detail-card">
                        <h3 className="detail-section-title">
                            <FaTshirt className="detail-icon" /> Dress Code
                        </h3>
                        <p className="detail-info">{temple.details.dressCode}</p>
                        <p className="detail-note">Please dress modestly, ensuring shoulders and knees are covered, out of respect for the sacredness of the shrine.</p>
                    </div>

                    {/* Tags Card */}
                    <div className="detail-card tag-card">
                        <h3 className="detail-section-title">
                            <FaTag className="detail-icon" /> Key Tags
                        </h3>
                        <div className="detail-tags-list">
                            {temple.tags.map(tag => (
                                <span key={tag} className="detail-tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Map Placeholder (Full Width) */}
            <div className="detail-card detail-map-section">
                <h3 className="detail-section-title">
                    <FaMapMarkerAlt className="detail-icon" /> Location on Map
                </h3>
                <div className="detail-map-placeholder">
                    [Map of {temple.location} - Exact Pin Location]
                </div>
            </div>
        </div>
    );
};

export default TempleDetailPage;