import React from 'react';
import './Home.css'; // Import the CSS for styling
import Navbar from '../../Components/NavBar/NavBarComponent';
import Logo from '../../Components/LogoComponent/Logo';

const HomePage = () => {
    return (
        <div className="home">
            <Logo size="200px" />
            <Navbar />
            </div>
    );
};

export default HomePage;
