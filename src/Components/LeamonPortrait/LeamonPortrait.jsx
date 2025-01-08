// src/components/LeamonPortrait/LeamonPortrait.jsx
import React from 'react';
import './LeamonPortrait.css';
import LeamonPortraitImage from '../../assets/leamonmug1.png';

const LeamonPortrait = ({ alt, className }) => {
    return (
        <div className={className}>
            <img src={LeamonPortraitImage} alt={alt} className="leamon-portrait-image" />
        </div>
    );
};

export default LeamonPortrait;
