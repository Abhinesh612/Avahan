import React from 'react';
import './Result.css'; // Assuming your CSS is in this file

const WinnerAnnouncement = () => {
    return (
        <div className="winner-announcement">
            {/* Banner Section */}
            <div className="banner1">
                <img src="https://i.postimg.cc/MTP4tK3T/banner.png" alt="Banner" className="banner1-img" />
            </div>

            <div className="banner1-heading">
                <h2>आह्वान</h2>
            </div>

            {/* Treasure Hunt Section 
            <section className="event-section">
                <h2>खजाना खोज</h2>
                <div className="winner-icons">
                    <div className='winner-not-announce'>
                        <p>अभी घोषित किया जाना बाकी है |</p>
                    </div>
                    <div className="winner first-place">
                        <h3>विजेता</h3>
                        <p>एड्वेंट्स ऑफ गॉड्स एंड डेमन्स</p>
                        <ul>
                            <li>प्रीतपाल केशर</li>
                            <li>अनिरुद्ध मल्होत्रा</li>
                        </ul>
                    </div> 
                     <div className="winner second-place">
                        <h3>रनर अप्स</h3>
                        <p>3 इडियट्स</p>
                        <ul>
                            <li>सोनाक्षी</li>
                            <li>यधु कृष्णन</li>
                            <li>अर्पित गुप्ता</li>
                        </ul>
                    </div>
                    <div className="winner third-place">
                        <h3>दूसरा रनर</h3>
                        <p>टीम टिसियन्स</p>
                        <ul>
                            <li>रीता भगत</li>
                            <li>मोहम्मद आदिल</li>
                        </ul>
                    </div> 
                </div>
            </section>  */}

            {/* Kavita Lekhan Section 
            <section className="event-section">
                <h2>कविता लेखन</h2>
                <div className="winner-icons">
                    <div className='winner-not-announce'>
                        <p>अभी घोषित किया जाना बाकी है |</p>
                    </div>
                     <div className="winner first-place">
                        <img src="https://i.postimg.cc/jnQcyX2M/first-place-icon.png" alt="1st Place Icon" className="icon" />
                        <p>गोविन्द सिंह राठौड़</p>
                        <p>(केशव महाविद्यालय, दिल्ली)</p>
                    </div>
                    <div className="winner second-place">
                        <img src="https://i.postimg.cc/w3hwK62D/second-place-icon.png" alt="2nd Place Icon" className="icon" />
                        <p>आयुष केशरवानी</p>
                        <p>(यूआईटी भोपाल)</p>
                    </div>
                    <div className="winner third-place">
                        <img src="https://i.postimg.cc/56bnbZKT/third-place-icon.png" alt="3rd Place Icon" className="icon" />
                        <p>युवराज सिंह</p>
                        <p>(एनआईटी रायपुर)</p>
                    </div> 
                </div>
            </section>
            */}

            {/* Laghu Video Section 
            <section className="event-section">
                <h2>लघु वीडियो</h2>
                <div className="winner-icons">
                    <div className='winner-not-announce'>
                        <p>अभी घोषित किया जाना बाकी है |</p>
                    </div>
                     <div className="winner first-place">
                        <img src="https://i.postimg.cc/jnQcyX2M/first-place-icon.png" alt="1st Place Icon" className="icon" />
                        <p>रोहित कुमार सिंह</p>
                        <p>(एनआईटी रायपुर)</p>
                    </div>
                    <div className="winner second-place">
                        <img src="https://i.postimg.cc/w3hwK62D/second-place-icon.png" alt="2nd Place Icon" className="icon" />
                        <p>प्रफुल्ल द्विवेदी</p>
                        <p>(लखनऊ विश्वविद्यालय)</p>
                    </div>
                    <div className="winner third-place">
                        <img src="https://i.postimg.cc/56bnbZKT/third-place-icon.png" alt="3rd Place Icon" className="icon" />
                        <p>प्रतीक</p>
                        <p>(ज़ेवियर स्कूल ऑफ मैनेजमेंट)</p>
                    </div> 
                </div>
            </section>
            */}

            <section className="event-section">
                <h2>डंब शराड्स</h2>
                <div className="event-details">
                    <p>समय: 4 बजे से 5 बजे तक</p>
                    <p>स्थान: विक्रम साराभाई हॉल (D2)</p>
                    <div className="winner-icons">
                        <div className='winner-not-announce'>
                            <p>अभी घोषित किया जाना बाकी है |</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="event-section">
                <h2>नुक्कड़ नाटक</h2>
                <div className="event-details">
                    <p>समय: दोपहर 1 बजे</p>
                    <p>स्थान: मुख्य भवन के सामने</p>
                    <div className="winner-icons">
                        <div className='winner-not-announce'>
                            <p>अभी घोषित किया जाना बाकी है |</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="event-section">
                <h2>चित्रकथा</h2>
                <div className="event-details">
                    <p>समय: 4 बजे से 5 बजे तक</p>
                    <div className="winner-icons">
                        <div className='winner-not-announce'>
                            <p>अभी घोषित किया जाना बाकी है |</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="event-section">
                <h2>प्रश्नोत्तरी</h2>
                <div className="event-details">
                    <p>समय: 2 बजे से 5 बजे तक</p>
                    <p>स्थान: E हॉल</p>
                    <div className="winner-icons">
                        <div className='winner-not-announce'>
                            <p>अभी घोषित किया जाना बाकी है |</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="event-section">
                <h2>कविता वाचन (छात्र कार्यक्रम)</h2>
                <div className="event-details">
                    <p>समय: 5 बजे से 7 बजे तक</p>
                    <p>स्थान: E हॉल</p>
                    <div className="winner-icons">
                        <div className='winner-not-announce'>
                            <p>अभी घोषित किया जाना बाकी है |</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="event-section">
                <h2>पूर्णविराम</h2>
                <div className="event-details">
                    <p>समय: 4 बजे से 4:30 बजे तक</p>
                    <p>स्थान: विक्रम साराभाई हॉल (D2)</p>
                    <div className="winner-icons">
                        <div className='winner-not-announce'>
                            <p>अभी घोषित किया जाना बाकी है |</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="event-section">
                <h2>शब्द रचना</h2>
                <div className="event-details">
                    <p>समय: 4:30 बजे से 5 बजे तक</p>
                    <p>स्थान: विक्रम साराभाई हॉल (D2)</p>
                    <div className="winner-icons">
                        <div className='winner-not-announce'>
                            <p>अभी घोषित किया जाना बाकी है |</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="event-section">
                <h2>कविता वाचन (शिक्षक कार्यक्रम)</h2>
                <div className="event-details">
                    <p>समय: 5 बजे से 6 बजे तक</p>
                    <p>स्थान: विक्रम साराभाई हॉल (D2)</p>
                    <div className="winner-icons">
                        <div className='winner-not-announce'>
                            <p>अभी घोषित किया जाना बाकी है |</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="event-section">
                <h2>स्पर्धा</h2>
                <div className="event-details">
                    <p>समय: 3:30 बजे से 5:30 बजे तक</p>
                    <p>स्थान: फुटबॉल मैदान</p>
                    <div className="winner-icons">
                        <div className='winner-not-announce'>
                            <p>अभी घोषित किया जाना बाकी है |</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="event-section">
                <h2>खजाने की खोज</h2>
                <div className="event-details">
                    <p>समय: 3:30 बजे से 5:30 बजे तक</p>
                    <div className="winner-icons">
                        <div className='winner-not-announce'>
                            <p>अभी घोषित किया जाना बाकी है |</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="event-section">
                <h2>डॉजबॉल</h2>
                <div className="event-details">
                    <p>समय: 5:30 बजे से 7 बजे तक</p>
                    <p>स्थान: वॉलीबॉल कोर्ट</p>
                    <div className="winner-icons">
                        <div className='winner-not-announce'>
                            <p>अभी घोषित किया जाना बाकी है |</p>
                        </div>
                    </div>
                </div>
            </section>




            <div className="banner1-heading">
                <h2>मातृभूमि दिवस</h2>
            </div>

            <section className="event-section">
                <h2>खजाना खोज</h2>
                <div className="winner-icons">
                    <div className="winner first-place">
                        <h3>विजेता</h3>
                        <p>एड्वेंट्स ऑफ गॉड्स एंड डेमन्स</p>
                        <ul>
                            <li>प्रीतपाल केशर</li>
                            <li>अनिरुद्ध मल्होत्रा</li>
                        </ul>
                    </div>
                    <div className="winner second-place">
                        <h3>रनर अप्स</h3>
                        <p>3 इडियट्स</p>
                        <ul>
                            <li>सोनाक्षी</li>
                            <li>यधु कृष्णन</li>
                            <li>अर्पित गुप्ता</li>
                        </ul>
                    </div>
                    <div className="winner third-place">
                        <h3>दूसरा रनर</h3>
                        <p>टीम टिसियन्स</p>
                        <ul>
                            <li>रीता भगत</li>
                            <li>मोहम्मद आदिल</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Kavita Lekhan Section */}
            <section className="event-section">
                <h2>कविता लेखन</h2>
                <div className="winner-icons">
                    <div className="winner first-place">
                        <img src="https://i.postimg.cc/jnQcyX2M/first-place-icon.png" alt="1st Place Icon" className="icon" />
                        <p>गोविन्द सिंह राठौड़</p>
                        <p>(केशव महाविद्यालय, दिल्ली)</p>
                    </div>
                    <div className="winner second-place">
                        <img src="https://i.postimg.cc/w3hwK62D/second-place-icon.png" alt="2nd Place Icon" className="icon" />
                        <p>आयुष केशरवानी</p>
                        <p>(यूआईटी भोपाल)</p>
                    </div>
                    <div className="winner third-place">
                        <img src="https://i.postimg.cc/56bnbZKT/third-place-icon.png" alt="3rd Place Icon" className="icon" />
                        <p>युवराज सिंह</p>
                        <p>(एनआईटी रायपुर)</p>
                    </div>
                </div>
            </section>

            {/* Laghu Video Section */}
            <section className="event-section">
                <h2>लघु वीडियो</h2>
                <div className="winner-icons">
                    <div className="winner first-place">
                        <img src="https://i.postimg.cc/jnQcyX2M/first-place-icon.png" alt="1st Place Icon" className="icon" />
                        <p>रोहित कुमार सिंह</p>
                        <p>(एनआईटी रायपुर)</p>
                    </div>
                    <div className="winner second-place">
                        <img src="https://i.postimg.cc/w3hwK62D/second-place-icon.png" alt="2nd Place Icon" className="icon" />
                        <p>प्रफुल्ल द्विवेदी</p>
                        <p>(लखनऊ विश्वविद्यालय)</p>
                    </div>
                    <div className="winner third-place">
                        <img src="https://i.postimg.cc/56bnbZKT/third-place-icon.png" alt="3rd Place Icon" className="icon" />
                        <p>प्रतीक</p>
                        <p>(ज़ेवियर स्कूल ऑफ मैनेजमेंट)</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WinnerAnnouncement;