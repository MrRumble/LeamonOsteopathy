import React, { useState } from 'react';
import './NavBar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">

            <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                <li><a href="#biography">Biography</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#what-is-osteopathy">What is Osteopathy?</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
