import React, { useState, useEffect } from 'react';
import './ImageLoader.css'; // Import the CSS for transitions
import largeLogo from '../../assets/large-logo.png'; // Adjusted import path
import circle1 from '../../assets/circle1.png';
import circle2 from '../../assets/circle2.png';
import circle3 from '../../assets/circle3.png';
import circle4 from '../../assets/circle4.png';
import circle6 from '../../assets/circle6.png';
import circle7 from '../../assets/circle7.png';
import circle8 from '../../assets/circle8.png';

const ImageLoader = () => {
  // State to control the visibility of each image
  const [visible, setVisible] = useState({
    background: false,
    circles: Array(8).fill(false), // We have 8 circles in total
  });

  useEffect(() => {
    // Fade in the background logo first
    setTimeout(() => {
      setVisible((prevState) => ({ ...prevState, background: true }));
    }, 500); // Delay before showing the background logo

    // Fade in the circles one by one
    visible.circles.forEach((_, index) => {
      setTimeout(() => {
        setVisible((prevState) => {
          const newCircles = [...prevState.circles];
          newCircles[index] = true;
          return { ...prevState, circles: newCircles };
        });
      }, 1000 + index * 500); // Delay for each circle
    });
  }, []);

  return (
    <div className="image-container">
      {/* Background Large Logo */}
      <img
        src={largeLogo}
        alt="Large Logo"
        className={`image large-logo ${visible.background ? 'visible' : ''}`}
      />
      
      {/* Circles */}
      {[circle1, circle2, circle3, circle4, circle6, circle7, circle8].map((circle, index) => (
        <div 
          key={index} 
          className={`circle-container circle-${index + 1} ${visible.circles[index] ? 'visible' : ''}`}>
          <img
            src={circle}
            alt={`Circle ${index + 1}`}
            className={`image circle ${visible.circles[index] ? 'visible' : ''}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageLoader;
