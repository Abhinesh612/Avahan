import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Event.css";
import nukkadimage from "../assets/events/nukkad.png";
import andhamod from "../assets/events/images.png";
import treasurehunt from "../assets/events/treasure.jpeg";
import vaachan from "../assets/events/vaachan.jpg";

function Event() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleMouseMove = (e) => {
    const textbox = e.currentTarget.querySelector(".textbox");
    const rect = textbox.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    textbox.style.setProperty("--rotateX", `${rotateX}deg`);
    textbox.style.setProperty("--rotateY", `${rotateY}deg`);
    textbox.classList.add("tilt");
  };

  const handleMouseLeave = (e) => {
    const textbox = e.currentTarget.querySelector(".textbox");
    textbox.classList.remove("tilt");
  };

  const handleClick = (id) => {
    navigate(`/events/${id}`);
  };

  return (
    <>
      <div className="main">
        <h1>Events</h1>
        {/* <h1>शब्दांगन</h1> */}
        <h1>शब्दांगन</h1>

        <div className="eventline">
          <div
            className="container left-container"
            onClick={() => handleClick("kavitavaachan18")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src='https://i.postimg.cc/m2kHvr3Z/Whats-App-Image-2024-09-16-at-18-13-09-06a8c673.jpg' alt="" />
            <div className="textbox">
              <div className="header">
                <div className="left">
                  <h2>कविता वाचन </h2>
                  <h5>18/9/24</h5>
                </div>
                <div className="right">
                  <button className="event-btn">छात्र वर्ग </button>
                  <button className="event-btn">5 se 7 बजे</button>
                </div>
              </div>

              <p>
                राजभाषा समिति ‘आह्वान 2024’ के अंतर्गत ‘कविता वाचन’ कार्यक्रम का
                आयोजन कर रही है। इस कार्यक्रम के अंतर्गत छात्र अपनी स्वरचित
                कविताओं या किसी अन्य कवि की रचनाओं को प्रस्तुत कर सकते हैं। इसका
                उद्देश्य छात्रों में आत्मविश्वास बढ़ाना, मंच भय को कम करना और
                उनकी लेखन एवं वक्तृत्व कला को प्रोत्साहित करना है।
              </p>
              <div className="bottom">
                <div className="left">
                  <div className="venue">स्थान</div>
                  <div className="name">E हॉल</div>
                </div>
                <div className="right">और पढ़ें</div>
              </div>

              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div
            className="container right-container"
            onClick={() => handleClick("chitrakathaLekhan")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src='https://i.postimg.cc/sxhRW7dD/Whats-App-Image-2024-09-18-at-02-15-40-06fe54e6.jpg' alt="" />
            <div className="textbox">
              <div className="header">
                <div className="left">
                  <h2>चित्रकथा लेखन </h2>
                  <h5>17/9/24</h5>
                </div>
                <div className="right">
                  <button className="event-btn">छात्र वर्ग</button>
                  <button className="event-btn">4 se 5 बजे</button>
                </div>
              </div>

              <p>
                इस प्रतियोगिता में प्रतिभागी अपनी रचनात्मकता की यात्रा पर
                निकलेंगे। उन्हें दो असंबंधित चित्र दिए जाएंगे। प्रतिभागियों को
                इन चित्रों को जोड़कर एक कल्पनाशील और रोचक कहानी बनानी होगी। अंक
                उनकी त्वरित प्रतिक्रिया, कहानी की समृद्धि और उनकी कल्पनाशक्ति के
                आधार पर दिए जाएंगे। यह छात्रों के लिए एक मजेदार और दिलचस्प
                कार्यक्रम है, जो उनकी रचनात्मकता को परखने का अवसर देगा।
              </p>
              <div className="bottom">
                <div className="left">
                  <div className="venue">स्थान</div>
                  <div className="name">FN 02</div>
                </div>
                <div className="right">और पढ़ें</div>
              </div>
              <span className="right-container-arrow"></span>
            </div>
          </div>
          <div
            className="container left-container"
            onClick={() => handleClick("prashnottari")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src='https://i.postimg.cc/j59DKH4s/Whats-App-Image-2024-09-18-at-02-16-41-d02f63f5.jpg' alt="" />
            <div className="textbox">
              <div className="header">
                <div className="left">
                  <h2>प्रश्नोत्तरी </h2>
                  <h5>18/9/24</h5>
                </div>
                <div className="right">
                  <button className="event-btn">छात्र वर्ग</button>
                  <button className="event-btn">2 se 5 बजे</button>
                </div>
              </div>

              <p>
                इस प्रतियोगिता में विभिन्न राउंड होंगे, जिनमें इतिहास, राजनीति
                विज्ञान, संस्कृति, धर्म, विज्ञान और भाषा जैसे विविध विषयों पर
                प्रश्न पूछे जाएंगे। प्रतिभागियों को चित्र, ऑडियो क्लिप और
                ऐतिहासिक व्यक्तियों की आवाज़ों के माध्यम से प्रश्न पूछे जाएंगे,
                जिससे प्रतियोगिता और भी रोचक और चुनौतीपूर्ण बनेगी। इस
                प्रतियोगिता का उद्देश्य छात्रों में ज्ञान और भाषा के प्रति रुचि
                को बढ़ावा देना है।
              </p>
              <div className="bottom">
                <div className="left">
                  <div className="venue">स्थान</div>
                  <div className="name">E हॉल</div>
                </div>
                <div className="right">और पढ़ें</div>
              </div>
              <span className="left-container-arrow"></span>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd head---------------- */}
      <div className="main">
        <h1>अभिव्यक्ति</h1>

        <div className="eventline">
          <div
            className="container left-container"
            onClick={() => handleClick("kavitavaachan19")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src='https://i.postimg.cc/m2kHvr3Z/Whats-App-Image-2024-09-16-at-18-13-09-06a8c673.jpg' alt="" />
            <div className="textbox">
              <div className="header">
                <div className="left">
                  <h2>कविता वाचन </h2>
                  <h5>19/9/24</h5>
                </div>
                <div className="right">
                  <button className="event-btn">शिक्षक वर्ग </button>
                  <button className="event-btn">5 se 6 बजे</button>
                </div>
              </div>

              <p>
              राजभाषा समिति ‘आह्वान 2024’ के अंतर्गत ‘कविता वाचन’ कार्यक्रम का
                आयोजन कर रही है। इस कार्यक्रम के अंतर्गत छात्र अपनी स्वरचित
                कविताओं या किसी अन्य कवि की रचनाओं को प्रस्तुत कर सकते हैं। इसका
                उद्देश्य छात्रों में आत्मविश्वास बढ़ाना, मंच भय को कम करना और
                उनकी लेखन एवं वक्तृत्व कला को प्रोत्साहित करना है।
              </p>
              <div className="bottom">
                <div className="left">
                  <div className="venue">स्थान</div>
                  <div className="name">विक्रम साराभाई हॉल</div>
                </div>
                <div className="right">और पढ़ें</div>
              </div>
              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div
            className="container right-container"
            onClick={() => handleClick("purnaviraam")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src='https://i.postimg.cc/15N9VgDj/Whats-App-Image-2024-09-18-at-02-19-32-d8b33e4a.jpg'alt="" />
            <div className="textbox">
              <div className="header">
                <div className="left">
                  <h2>पूर्ण विराम </h2>
                  <h5>19/9/24</h5>
                </div>
                <div className="right">
                  <button className="event-btn">शिक्षक वर्ग</button>
                  <button className="event-btn">4 से 4:30 बजेढ़ें</button>
                </div>
              </div>

              <p>
              राजभाषा समिति 'आह्वान 2024' के शिक्षक वर्ग के अंतर्गत 'पूर्ण विराम' नामक प्रतियोगिता का आयोजन कर रही है। यह काफी रचनात्मक आयोजन है, जिसमें प्रतिभागियों को दिए गए कुछ प्रारंभिक शब्दों के आधार पर कहानी पूरी करनी होगी। इस कार्यक्रम का मुख्य उद्देश्य प्रतिभागियों की सृजनात्मकता, कल्पनाशक्ति और लेखन कौशल का विकास करना है।

यह आयोजन दिनांक 19 सितंबर 2024 को शाम 4:00 से 4:30 बजे तक विक्रम साराभाई हॉल में आयोजित किया जाएगा।
              </p>
              <div className="bottom">
                <div className="left">
                  <div className="venue">स्थान</div>
                  <div className="name">विक्रम साराभाई हॉल</div>
                </div>
                <div className="right">और पढ़ें</div>
              </div>
              <span className="right-container-arrow"></span>
            </div>
          </div>
          <div
            className="container left-container"
            onClick={() => handleClick("shabdrachna")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src='https://i.postimg.cc/nrftv24S/Whats-App-Image-2024-09-18-at-02-20-02-2b32ed6b.jpg' alt="" />
            <div className="textbox">
              <div className="header">
                <div className="left">
                  <h2>शब्द रचना </h2>
                  <h5>19/9/24</h5>
                </div>
                <div className="right">
                  <button className="event-btn">शिक्षक वर्ग</button>
                  <button className="event-btn">4 बजे से 5 बजे</button>
                </div>
              </div>

              <p>
              राजभाषा समिति 'आह्वान 2024' के अवसर पर ’शब्द रचना’ का आयोजन कर रही है। यह आयोजन 19 सितंबर 2024 को शाम 4:30 बजे से 5 बजे तक विक्रम साराभाई कक्ष में आयोजित किया जाएगा। यह न केवल सृजनात्मकता और त्वरित सोच का परीक्षण है बल्कि एक रोचक और मस्तिष्क को सक्रिय करने वाला आयोजन है।

इस प्रतियोगिता में प्रतिभागियों को केवल कुछ अक्षर दिए जाएंगे और उस अक्षर के आधार पर आपको अधिक से अधिक शब्द बनाने होंगे। यह खेल न सिर्फ हिंदी भाषा की समझ को बढ़ावा देता है बल्कि शब्दावली में वृद्धि और रचनात्मकता को भी प्रोत्साहित करता है।
              </p>
              <div className="bottom">
                <div className="left">
                  <div className="venue">स्थान</div>
                  <div className="name">विक्रम साराभाई हॉल</div>
                </div>
                <div className="right">और पढ़ें</div>
              </div>
              <span className="left-container-arrow"></span>
            </div>
          </div>
        </div>
      </div>
      {/* 3rd head---------------- */}

      <div className="main">
        <h1>चक्रव्यूह</h1>

        <div className="eventline">
          <div
            className="container left-container"
            onClick={() => handleClick("chakmagend")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src='https://i.postimg.cc/sXVYvd8T/Whats-App-Image-2024-09-18-at-02-20-41-f1aaa70c.jpg' alt="" />
            <div className="textbox">
              <div className="header">
                <div className="left">
                  <h2>चकमा गेंद </h2>
                  <h5>20/9/24</h5>
                </div>
                <div className="right">
                  <button className="event-btn">छात्र वर्ग</button>
                  <button className="event-btn">5 बजे से 7बजे</button>
                </div>
              </div>

              <p>
              राजभाषा समिति 'आह्वान 2024' के छात्र वर्ग में 'चकमा गेंद' नामक प्रतियोगिता का आयोजन कर रही है। यह अनूठा कार्यक्रम दिनांक 20 सितम्बर, 2024 को संस्थान के वॉलीबॉल कोर्ट में सायं काल 5:30 बजे से 7:00 बजे तक आयोजित किया जाएगा। 

इस कार्यक्रम में कुछ प्रतिभागियों का गुट एक गोलाकार रूपी घेराव बनाएंगे। उसके अंदर जो साझीदार रहेंगे उनका केवल एक ही उद्देश्य रहेगा — गेंद से खुद बचाव करना। यदि कोई प्रतिभागी गेंद के संपर्क में आता है तो वो इस खेल से बाहर हो जायेगा। प्रतियोगिता के विजेताओं को प्रमाण पत्र और उपहार से पुरस्कृत किया जायेगा।
              </p>
              <div className="bottom">
                <div className="left">
                  <div className="venue">स्थान</div>
                  <div className="name">फ़ुटबॉल मैदा</div>
                </div>
                <div className="right">और पढ़ें</div>
              </div>
              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div
            className="container right-container"
            onClick={() => handleClick("gatispardha")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src='https://i.postimg.cc/1XMss6FW/Whats-App-Image-2024-09-18-at-02-20-54-19cce32d.jpg' alt="" />
            <div className="textbox">
              <div className="header">
                <div className="left">
                  <h2>गतिस्पर्धा </h2>
                  <h5>20/9/24</h5>
                </div>
                <div className="right">
                  <button className="event-btn">छात्र वर्ग</button>
                  <button className="event-btn">3 बजे से 5 बजे</button>
                </div>
              </div>

              <p>
              राजभाषा समिति 'आह्वान 2024' के छात्र वर्ग में 'गतिस्पर्धा' नामक प्रतियोगिता का आयोजन कर रही है। यह एक अनोखा कार्यक्रम दिनांक 20 सितम्बर, 2024 को संस्थान के मुख्य खेल मैदान में दोपहर 3:00 बजे से सायं काल 5:00 बजे तक आयोजित किया जाएगा। 

यह कार्यक्रम प्रतिभागियों के तेज गति से आगे बढ़ने की क्षमता को प्रदर्शित करेगा परंतु इसके रोचक नियम जैसे बोरे का उपयोग करके आगे बढ़ना या फिर विलोम चाल इसको अनूठा बनाता है। प्रतियोगिता के विजेताओं को आकर्षक पुरस्कार एवं प्रमाण पत्र दिए जायेंगे।
              </p>
              <div className="bottom">
                <div className="left">
                  <div className="venue">स्थान</div>
                  <div className="name">फ़ुटबॉल मैदा</div>
                </div>
                <div className="right">और पढ़ें</div>
              </div>
              <span className="right-container-arrow"></span>
            </div>
          </div>
          <div
            className="container left-container"
            onClick={() => handleClick("khazanekikhoj")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img src='https://i.postimg.cc/9FJZNnD9/Whats-App-Image-2024-09-18-at-02-21-19-8eb4117b.jpg' alt="" />
            <div className="textbox">
              <div className="header">
                <div className="left">
                  <h2>खजाने की खोज </h2>
                  <h5>20/9/24</h5>
                </div>
                <div className="right">
                  <button className="event-btn">छात्र वर्ग</button>
                  <button className="event-btn">3:30 बजे से 5:30 बजे</button>
                </div>
              </div>

              <p>
              राजभाषा समिति 'आह्वान 2024' के छात्र वर्ग में 'ख़ज़ाने की खोज' नामक  प्रतियोगिता का आयोजन कर रही है। यह रहस्यपूर्ण कार्यक्रम दिनांक 20 सितम्बर, 2024 को संस्थान में दोपहर 3:30 बजे से 5:30 बजे तक आयोजित किया जाएगा।

सुराग और संकेत की मदद से पहेली सुलझती जायेगी जब जासूसों की टोली सूत्रों को ढूंढ़ने के लिए एक से दूसरे स्थान का भ्रमण करेगी। प्रतियोगिता में 4 प्रतिभागियों की एक टीम बनेगी तथा समस्त टीम में एक छात्रा का उपस्थित होना अनिवार्य है। खेल के अंत में एक रोचक उलट-फेर भी होगा। विजेता टीम को उपहार और प्रमाण पत्र से पुरस्कृत किया जायेगा।
              </p>
              <div className="bottom">
                <div className="left">
                  <div className="venue">स्थान</div>
                  <div className="name">फ़ुटबॉल मैदान</div>
                </div>
                <div className="right">और पढ़ें</div>
              </div>
              <span className="left-container-arrow"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;
