import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="events-section footer-section">
          <h4 className="footer-eventtitle">त्वरित लिंक</h4>
          <div className='outer-layer inner-layer'>
            <div className="quick-list">
              <ul className="footer-event-column">
                <li><NavLink to="/">होम</NavLink></li>
                <li><a href='https://rajbhashanitrr.in/'>मर्चेंडाइज़</a></li>
                <li><NavLink to="/gallery">गैलरी</NavLink></li>
                <li><a href='https://rajbhasha.vercel.app/'>मुख्य वेबसाइट</a></li>
              </ul>
              <ul className="footer-event-column">
                <li><NavLink to="/results">परिणाम</NavLink></li>
                <li><NavLink to="/team">टीम</NavLink></li>
                <li><NavLink to="/events">इवेंट्स</NavLink></li>
                <li><NavLink to="/contact">संपर्क</NavLink></li>
              </ul>
            </div>
          </div>
        </div>




        {/* Club Logo and Info Section in the Center */}
        <div className="footer-section club-info">
          <div className="club-header">
            <img src="https://i.postimg.cc/ht6zRmwv/rajbhashalogo.jpg" alt="Club Logo" className="club-logo" style={{borderRadius: '50%'}} />
            <h2 className="club-name">राजभाषा समिति</h2>
          </div>
          <p className="club-quote">"किताबें वह जादू की चाबी हैं, जो दुनिया और दिल के हर दरवाज़े खोल देती हैं।"</p>
          <p className="quote-author">- मुंशी प्रेमचंद</p>
        </div>

        {/* Contact Section on the Right */}
        <div className="events-section footer-section">
          <h4 className="footer-eventtitle">इवेंट्स</h4>
          <div className='outer-layer'>
            <div className="footer-event-list">
            <ul className="footer-event-column">
                <li ><NavLink to="/events/nukkad">नुक्कड़</NavLink></li>
                <li ><NavLink to="/events/andha">प्रश्नोत्तरी</NavLink></li>
                <li ><NavLink to="/events/andha">अंधा मोड़</NavLink></li>
                <li ><NavLink to="/events/nukkad">चित्र कथा</NavLink></li>
              </ul>
              <ul className="footer-event-column">
                <li ><NavLink to="/events/nukkad">चकमा गेंद</NavLink></li>
                <li ><NavLink to="/events/nukkad">गतिस्पर्धा</NavLink></li>
                <li ><NavLink to="/events/nukkad">कविता वाचन</NavLink></li>
                <li ><NavLink to="/events/nukkad">खजाने की खोज</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <hr/> */}
      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div className="contact-info">
          <h4 className="footer-title">संपर्क करें</h4>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <a href="">राजभाषा समिति</a>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>राष्ट्रीय प्रौद्योगिकी संस्थान रायपुर</span>
          </div>
        </div>
        <div className="made-with">
          <div >
          <p>Made with <span role="img" aria-label="heart">❤️</span> by <NavLink to="/webteam" className='web-team'>WebTeam</NavLink></p></div>
        </div>
        <div className="social-connect">
          <div className='inside-social'>
          <p>राजभाषा समिति से जुड़े:</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/rajbhasha.nitrr/" target="_blank" rel="noopener noreferrer" data-tooltip="Follow us on Facebook">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://www.instagram.com/rajbhasha_nit_raipur/?igsh=YmQ5ODNtMG85czBt" target="_blank" rel="noopener noreferrer" data-tooltip="Follow us on Instagram">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://in.linkedin.com/company/राजभाषा-समिति-nit-raipur" target="_blank" rel="noopener noreferrer" data-tooltip="Follow us on LinkedIn">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://www.youtube.com/@028karyanpareek9" target="_blank" rel="noopener noreferrer" data-tooltip="Follow us on Youtube">
              <FaYoutube className="social-icon" />
            </a>
          </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        © 2024 राजभाषा समिति | NIT Raipur. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
