// src/Pages/BiographyPage/Biography.jsx
import React from 'react';
import './Biography.css';
import Navbar from '../../Components/NavBar/NavBarComponent';
import Logo from '../../Components/LogoComponent/Logo';
import LeamonPortrait from '../../Components/LeamonPortrait/LeamonPortrait';

const BiographyPage = () => {
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
                    <div className="bio-text">
                        <h1>About Ben Leamon</h1>
                        <p>
                            As a dedicated osteopath, I bring a wealth of experience and a passion for helping people achieve optimal health and wellness. My journey in osteopathy began with a deep fascination for how the human body functions as an interconnected system.
                        </p>
                        <p>
                            With years of specialised training and practical experience, I've developed expertise in treating a wide range of conditions, from chronic pain to sports injuries. My approach combines traditional osteopathic techniques with modern evidence-based practices.
                        </p>
                        <p>
                            Based in East Sussex, I serve the communities of Herstmonceux and Mayfield, providing personalized treatment plans that address not just the symptoms but the root causes of physical discomfort and pain.
                        </p>
                        <div className="qualifications">
                            <h2>Qualifications & Expertise</h2>
                            <ul>
                                <li>Master's Degree in Osteopathy</li>
                                <li>Certified Sports Massage Therapist</li>
                                <li>Specialist in Sports Injury Treatment</li>
                                <li>Member of the General Osteopathic Council</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BiographyPage;
