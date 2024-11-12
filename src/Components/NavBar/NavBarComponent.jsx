// src/Navbar.js
import React from 'react';
import './NavBar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href="#biography">Biography</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#what-is-osteopathy">What is Osteopathy?</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#blog">Blog / Resources</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
