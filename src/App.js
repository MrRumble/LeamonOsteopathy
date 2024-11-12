// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/Home';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/NavBar/NavBarComponent';
import ImageLoader from './Components/ImageLoaderComponent/ImageLoader';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </header>
                <Footer /> {/* Include Footer */}
            </div>
        </Router>
    );
}

export default App;
