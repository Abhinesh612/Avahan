import React from 'react';
import { useParams } from 'react-router-dom';
import './GalleryDetail.css';

const eventDetail = {
    nukkad: {
      title: 'नुक्कड़ नाटक',
      images: ['https://i.postimg.cc/Twpxpx0r/IMG-20240314-WA0006.jpg', 'https://i.postimg.cc/YCzMPbjm/IMG-20240314-WA0003.jpg', 'https://i.postimg.cc/QC2yNGYx/IMG-6869.avif', 'https://i.postimg.cc/0QWgs4qb/IMG-20240223-161500.jpg', 'https://i.postimg.cc/mrjJYnk8/IMG-0644.jpg', 'https://i.postimg.cc/J7FwYSqF/IMG20230907142105.jpg', 'https://i.postimg.cc/c1PxtvV6/IMG-6895.avif', 'https://i.postimg.cc/yN6sCcSp/IMG-6898.avif', 'https://i.postimg.cc/JhTmr0Nr/IMG-6881.avif'],
    },
    andha: {
        title: 'अंधा मोड़',
      images: ['https://i.postimg.cc/LXCsbvCV/DSC01889.jpg', 'https://i.postimg.cc/Pr8qSWmm/DSC01903.jpg', 'https://i.postimg.cc/7Z8Zd5Vj/IMG-7230.avif', 'https://i.postimg.cc/Nj6jcQCF/IMG-7218.avif', 'https://i.postimg.cc/RFVFd2RF/IMG-20230913-195638.jpg'],
    },
    treasure: {
        title: 'खजाने की खोज',
      images: ['https://i.postimg.cc/YCKNnQCJ/DSC-0596.jpg', 'https://i.postimg.cc/YCKNnQCJ/DSC-0596.jpg', 'https://i.postimg.cc/YCKNnQCJ/DSC-0596.jpg'],
    },
    vaachan: {
        title: 'कविता वाचन',
      images: ['https://i.postimg.cc/Y0xBPSCB/DSC01779.jpg', 'https://i.postimg.cc/kggqkWS1/IMG20230911172459.jpg', 'https://i.postimg.cc/v87yT0L2/DSC01771.jpg','https://i.postimg.cc/rpvT0bP3/IMG20230911172007.jpg','https://i.postimg.cc/G2ycXrDb/IMG20230911181202.jpg']
    },
    faculty: {
        title: 'प्राध्यापकगण',
      images: ['https://i.postimg.cc/kXRnfbV3/DSC-0306.png', 'https://i.postimg.cc/qB5JsLvx/DSC-0317.png', 'https://i.postimg.cc/4xCXMxtK/DSC-0313.png','https://i.postimg.cc/P5mdknzS/DSC-0311.png']
    },
    tatkalik: {
        title: 'तात्कालिक भाषण',
      images: ['https://i.postimg.cc/Y0xBPSCB/DSC01779.jpg', 'https://i.postimg.cc/kggqkWS1/IMG20230911172459.jpg', 'https://i.postimg.cc/v87yT0L2/DSC01771.jpg']
    },
  };




const GalleryDetail = () => {

  const { id } = useParams();
  const event = eventDetail[id];

  return (
    // <div>{event.title}</div>
    <div className="gallery-container">
      <h1 className="gallery-title">{event.title}</h1>
      <div className='layer'>
        <div>
            <div className="gallery-grid">
                {event.images.map((image, index) => (
                <div className="gallery-item" key={index}>
                    <img src={image} className="gallery-image"/>
                </div>
                ))}
            </div>
        </div>

      </div>

    </div>
  );
};

export default GalleryDetail;
