// src/Pages/BiographyPage/Biography.jsx
import React from 'react';
import './OpeningTimes.css';
import Navbar from '../../Components/NavBar/NavBarComponent';
import Logo from '../../Components/LogoComponent/Logo';
import LeamonPortrait from '../../Components/LeamonPortrait/LeamonPortrait';

const OpeningTimesPrices = () => {
    return (
        <div className="biography">
            <div className="biography-content">
                <Logo size="150px" />
                <Navbar />
                <div className="bio-container">
                    <div className="bio-image">
                        <LeamonPortrait 
                            alt="Ben Leamon - Osteopath" 
                            className="portrait-container"
                        />
                    </div>
                        <div className="qualifications">
                        <h2>Herstmonceux</h2>
                            <ul className="list">
                                <li className="listItem">Monday: 8.30am - 7.00pm</li>
                                <li className="listItem">Thursday: 8.00am - 12.00pm</li>
                                <li className="listItem">Friday: 8.30am - 7.00pm</li>
                            </ul>
                        <p>
                        New Patient: £42 , Follow Up: £40
                        </p>
                        <div className="qualifications">
                            <h2>Mayfield</h2>
                            <ul className="list">
                                <li className="listItem">Tuesday: 9.00am - 7.00pm</li>
                                <li className="listItem">Wednesday: 9.00am - 7.00pm</li>
                                <li className="listItem">Thursday: 1.00pm - 7.00pm</li>
                            </ul>
                            <p>
                                New Patient: £65 , Follow Up: £60
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OpeningTimesPrices;
