import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import logo from '../../assets/logo.png';
import './Logo.css'; // Import the CSS file for styling

const Logo = () => {
  return (
    <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link> // Make the logo clickable
  );
};

export default Logo;
