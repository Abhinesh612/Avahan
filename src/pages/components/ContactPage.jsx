import React from 'react';
import './ContactPage.css'; // Ensure this CSS file contains the updated styles

const ContactPage = () => {
    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>संपर्क करें</h1>
                <p>हमें आपकी प्रतिक्रिया सुनकर खुशी होगी!</p>
            </div>
            <div className="contact-body">
                <div className="contact-form-container">
                    <h2>संदेश भेजें</h2>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">नाम</label>
                            <input type="text" id="name" name="name" placeholder="आपका नाम" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">ईमेल</label>
                            <input type="email" id="email" name="email" placeholder="आपका ईमेल" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">संदेश</label>
                            <textarea id="message" name="message" placeholder="आपका संदेश" required></textarea>
                        </div>
                        <button type="submit">संदेश भेजें</button>
                    </form>
                </div>
                <div className="contact-infos">
                    <h2>हमारा स्थान</h2>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.9291690545306!2d81.6050291!3d21.2497222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dde213f66723%3A0x21543965c50c43c7!2sNational%20Institute%20of%20Technology%20(NIT)%2C%20Raipur!5e0!3m2!1sen!2sin!4v1631027265563!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
