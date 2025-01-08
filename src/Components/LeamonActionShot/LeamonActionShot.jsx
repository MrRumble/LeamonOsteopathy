// src/components/LeamonActionShot/LeamonActionShot.jsx
import React from 'react';
import './LeamonActionShot.css';

// Import the image from the assets folder
import LeamonActionImage from '../../assets/heroleamon1.png';

const LeamonActionShot = ({ alt, className }) => {
    return (
        <div className={className}>
            <img src={LeamonActionImage} alt={alt} className="leamon-action-image" />
        </div>
    );
};

export default LeamonActionShot;
