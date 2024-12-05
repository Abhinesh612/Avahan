import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCarousel.css';

function ImageCarousel({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const [rotatingIndex, setRotatingIndex] = useState(null);

  const handleImageClick = (index) => {
    if (index !== selectedIndex) {
      setRotatingIndex(selectedIndex); 
      setSelectedIndex(index);          
    }
  };

  return (
    <div className="carousel-container">
      <Carousel
        selectedItem={selectedIndex}
        onChange={() => setRotatingIndex(null)}  
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        centerMode={true}
        centerSlidePercentage={50}
        interval={3000}
        stopOnHover={false}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`image-container ${rotatingIndex === index ? 'rotate-out' : ''}`} 
            onClick={() => handleImageClick(index)}
          >
            <img 
              src={image} 
              alt={`Slide ${index + 1}`} 
              className="carousel-image"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
