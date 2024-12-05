import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Gallery.css';

const images = [
  { id: 'nukkad', src: 'https://i.postimg.cc/YCzMPbjm/IMG-20240314-WA0003.jpg', title: 'नुक्कड़ नाटक' },
  { id: 'andha', src: 'https://i.postimg.cc/7Z8Zd5Vj/IMG-7230.avif', title: 'अंधा मोड़' },
  { id: 'treasure', src: 'https://i.postimg.cc/YCKNnQCJ/DSC-0596.jpg', title: 'खजाने की खोज' },
  { id: 'faculty', src: 'https://i.postimg.cc/qB5JsLvx/DSC-0317.png', title: 'फैकल्टी इवेंट' },
  { id: 'vaachan', src: 'https://i.postimg.cc/tC59SBsn/IMG-20230911-173032918.jpg', title: 'कविता वाचन' },
  { id: 'tatkalik', src: 'https://i.postimg.cc/Xq0LZPz7/DSC01765.jpg', title: 'तात्कालिक भाषण' },
];

const Gallery = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/gallery/${id}`);
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">गैलरी</h1>
      <h2 className="sub-title">आवाहन'23 की यादें</h2>
      <div className="layer">
        <div>
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div className="gallery-item" key={index}>
                <img
                  src={image.src}
                  alt={image.title}
                  className="gallery-image"
                  onClick={() => handleClick(image.id)} 
                />
                <div className="image-title">{image.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h3 className="second-title">आवाहन'22 की यादें</h3>
      <div className="layer">
        <div>
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div className="gallery-item" key={index}>
                <img
                  src={image.src}
                  alt={image.title}
                  className="gallery-image"
                />
                <div className="image-title">{image.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
