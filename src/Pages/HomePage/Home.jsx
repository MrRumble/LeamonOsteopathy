import React from 'react';
import './Home.css'; // Import the CSS for styling
import ImageLoader from '../../Components/ImageLoaderComponent/ImageLoader';
import Navbar from '../../Components/NavBar/NavBarComponent';

const HomePage = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="image-loader-container">
                <ImageLoader /> 
            </div>
        </div>
    );
};

export default HomePage;
