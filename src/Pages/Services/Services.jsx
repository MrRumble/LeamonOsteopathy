
// src/Pages/BiographyPage/Biography.jsx
import React from 'react';
import '../BiographyPage/Biography.css';
import Navbar from '../../Components/NavBar/NavBarComponent';
import Logo from '../../Components/LogoComponent/Logo';
import LeamonPortrait from '../../Components/LeamonPortrait/LeamonPortrait';

const Services = () => {
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
                        <h1>Why You Might Need Me?</h1>
                        <p>
                        As an independent specialist, I am dedicated to providing personalised treatment for a variety of pain conditions. Whether you're experiencing back, neck, or joint pain, or dealing with nerve or muscle discomfort, my goal is to help you find effective relief. I focus on tailoring solutions to meet your specific needs, so you can get back to feeling your best. Below are the conditions I treat:
                        </p>
                    
                        <div className="qualifications">
                        <h2>Conditions Treated</h2>
                        <ul>
                            <li><strong>Back Pain:</strong> Pain in the upper, middle, or lower back.</li>
                            <li><strong>Neck Pain:</strong> Discomfort caused by strain, posture issues, or injury.</li>
                            <li><strong>Joint Pain:</strong> Including pain in shoulders, knees, wrists, elbows, hips, and ankles.</li>
                            <li><strong>Osteoarthritis Symptoms:</strong> Relief from stiffness and discomfort associated with joint degeneration.</li>
                        </ul>
                            <h2>Specialised Pain Management</h2>
                        <ul>
                            <li><strong>Headaches:</strong> Especially those triggered by tension or neck strain.</li>
                            <li><strong>Nerve Pain:</strong> Conditions such as sciatica or radiating pain from compressed nerves.</li>
                            <li><strong>Muscle Pain:</strong> Localised discomfort due to strain, overuse, or injury.</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
