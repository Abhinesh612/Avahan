import React, { useState, useEffect } from 'react';
import Banner from "./utils/Banner";
import Impression from "./Impression.jsx";
import Below from './utils/Below.jsx';

// import BelowBanner from "./utils/BelowBanner";
import "./home.css";
import Footer from './components/Footer'
const Home = () => {
  
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div className="parallex example">
      <Banner />
      <div className="wrapper">
        <Below />
        {/* <div className="below-banner-2">
        
        </div> */}

        <Impression />
     
      </div>
    </div>
  );
};

export default React.memo(Home);
