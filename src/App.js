// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/Home';
import BiographyPage from './Pages/BiographyPage/Biography';
import WhatIsOsteopathy from './Pages/WhatIsOsteopathyPage/WhatIsOsteopathy';
import Services from './Pages/Services/Services';
import RequestBooking from './Pages/RequestBookingPage/RequestBooking';
import OpeningTimesPrices from './Pages/OpeningTimesPage/OpeningTimes';
import './App.css';

function App() {
  return (
    <Router> 
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/biography" element={<BiographyPage />} />
            <Route path="/what-is-osteopathy" element={<WhatIsOsteopathy />} />
            <Route path="/services" element={<Services/>} />
            <Route path="/request-appointment" element={<RequestBooking/>} />
            <Route path="/opening-times" element={<OpeningTimesPrices/>} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
