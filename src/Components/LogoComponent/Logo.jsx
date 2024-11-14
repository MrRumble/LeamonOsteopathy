// src/components/Logo.js
import React from 'react';
import logo from '../../assets/logo.png';
import './Logo.css'; // Import the CSS file for styling

const Logo = () => {
  return <img src={logo} alt="Logo" className="logo" />;
};

export default Logo;
