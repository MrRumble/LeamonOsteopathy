import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/biography" onClick={toggleMenu}>Biography</Link></li>
                    <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
                    <li><Link to="/what-is-osteopathy" onClick={toggleMenu}>What is Osteopathy?</Link></li>
                    <li><Link to="/request-appointment" onClick={toggleMenu}>Request an Appointment</Link></li>
                </ul>
                <div className="phone-number">
                    <a href="tel:+447123456789">077976 829979</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;