import React from 'react';
import './Home.css';
import Navbar from '../../Components/NavBar/NavBarComponent';
import Logo from '../../Components/LogoComponent/Logo';
import LeamonActionShot from '../../Components/LeamonActionShot/LeamonActionShot';
import { Link } from 'react-router-dom'; // Import Link

const HomePage = () => {
    return (
        <div className="home">
            <div className="home-content">
                <div className="logo-container">
                    <Logo size="200px" />
                </div>
                
                <div className="nav-container">
                    <Navbar />
                </div>

                <div className="hero-content">
                    <div className="hero-title">
                        <h1>Feel Better, Move Better, Live Better</h1>
                    </div>
                    
                    <div className="hero-text">
                        <p>
                            I'm <strong>Ben Leamon</strong>, the owner of <strong>Leamon Osteopathy</strong>, offering expert Osteopathic treatment and Sports Massage in <strong>Herstmonceux</strong> and <strong>Mayfield</strong>, East Sussex.
                        </p>
                    </div>

                    <div className="button-container">
                        <Link to="/request-appointment">
                            <button className="appointment-button">
                                Request an Appointment
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="image-container">
                <LeamonActionShot 
                    alt="Leamon Osteopathy Action" 
                    className="hero-image" 
                />
            </div>
        </div>
    );
};

export default HomePage;
