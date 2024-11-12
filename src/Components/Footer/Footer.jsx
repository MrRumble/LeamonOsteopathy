// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Import the CSS for this component

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Osteopathy Clinic. All Rights Reserved.</p>
                <p>Contact us: (123) 456-7890 | info@osteopathyclinic.com</p>
                <div className="social-links">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
