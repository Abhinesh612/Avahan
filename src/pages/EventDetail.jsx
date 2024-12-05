import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageCarousel from './Carousel/ImageCarousel';
import './EventDetail.css';

const eventDetails = {
  kavitavaachan18: {
    title: 'कविता वाचन',
    nukkad: '18/9/24',
    time: '5:00 PM',
    venue: 'E हॉल',
    description: 'राजभाषा समिति ‘आह्वान 2024’ के अंतर्गत ‘कविता वाचन’ कार्यक्रम का आयोजन कर रही है। इस कार्यक्रम के अंतर्गत छात्र अपनी स्वरचित कविताओं या किसी अन्य कवि की रचनाओं को प्रस्तुत कर सकते हैं। इसका उद्देश्य छात्रों में आत्मविश्वास बढ़ाना, मंच भय को कम करना और उनकी लेखन एवं वक्तृत्व कला को प्रोत्साहित करना है।',
    images: ['https://i.postimg.cc/Y0xBPSCB/DSC01779.jpg', 'https://i.postimg.cc/kggqkWS1/IMG20230911172459.jpg', 'https://i.postimg.cc/v87yT0L2/DSC01771.jpg'],
    rulesFile: 'vaachanupd.txt' ,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSe7MepNkwXY6LI4rmwhz1f0cZg4xs1Ntq2MvXXNwO75Zp8tvw/viewform'
  },
  kavitavaachan19: {
    title: 'कविता वाचन',
    nukkad: '19/9/24',
    time: '5:00 PM',
    venue: 'विक्रम साराभाई हॉल',
    description: 'राजभाषा समिति ‘आह्वान 2024’ के अंतर्गत ‘कविता वाचन’ कार्यक्रम का आयोजन कर रही है। इस कार्यक्रम के अंतर्गत छात्र अपनी स्वरचित कविताओं या किसी अन्य कवि की रचनाओं को प्रस्तुत कर सकते हैं। इसका उद्देश्य छात्रों में आत्मविश्वास बढ़ाना, मंच भय को कम करना और उनकी लेखन एवं वक्तृत्व कला को प्रोत्साहित करना है।',
    images: ['https://i.postimg.cc/Y0xBPSCB/DSC01779.jpg', 'https://i.postimg.cc/kggqkWS1/IMG20230911172459.jpg', 'https://i.postimg.cc/v87yT0L2/DSC01771.jpg'],
    rulesFile: 'vaachanupd.txt' ,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSe7MepNkwXY6LI4rmwhz1f0cZg4xs1Ntq2MvXXNwO75Zp8tvw/viewform'
  },
  chitrakathaLekhan: {
    title: 'चित्रकथा लेखन',
    nukkad: '17/9/24',
    time: '4:00 PM',
    venue: 'FN2',
    description: 'इस प्रतियोगिता में प्रतिभागी अपनी रचनात्मकता की यात्रा पर निकलेंगे। उन्हें दो असंबंधित चित्र दिए जाएंगे। प्रतिभागियों को इन चित्रों को जोड़कर एक कल्पनाशील और रोचक कहानी बनानी होगी। अंक उनकी त्वरित प्रतिक्रिया, कहानी की समृद्धि और उनकी कल्पनाशक्ति के आधार पर दिए जाएंगे। यह छात्रों के लिए एक मजेदार और दिलचस्प कार्यक्रम है, जो उनकी रचनात्मकता को परखने का अवसर देगा।',
    images: ['https://i.postimg.cc/Y0xBPSCB/DSC01779.jpg', 'https://i.postimg.cc/kggqkWS1/IMG20230911172459.jpg', 'https://i.postimg.cc/v87yT0L2/DSC01771.jpg'],
    rulesFile: 'chitrakatha.txt' ,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSe7MepNkwXY6LI4rmwhz1f0cZg4xs1Ntq2MvXXNwO75Zp8tvw/viewform'
  },
  prashnottari: {
    title: 'प्रश्नोत्तरी',
    nukkad: '18/9/24',
    time: '2:00 PM',
    venue: 'E हॉल',
    description: 'इस प्रतियोगिता में विभिन्न राउंड होंगे, जिनमें इतिहास, राजनीति विज्ञान, संस्कृति, धर्म, विज्ञान और भाषा जैसे विविध विषयों पर प्रश्न पूछे जाएंगे। प्रतिभागियों को चित्र, ऑडियो क्लिप और ऐतिहासिक व्यक्तियों की आवाज़ों के माध्यम से प्रश्न पूछे जाएंगे, जिससे प्रतियोगिता और भी रोचक और चुनौतीपूर्ण बनेगी। इस प्रतियोगिता का उद्देश्य छात्रों में ज्ञान और भाषा के प्रति रुचि को बढ़ावा देना है।',
    images: ['https://i.postimg.cc/Y0xBPSCB/DSC01779.jpg', 'https://i.postimg.cc/kggqkWS1/IMG20230911172459.jpg', 'https://i.postimg.cc/v87yT0L2/DSC01771.jpg'],
    rulesFile: 'vaachan.txt' ,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSe7MepNkwXY6LI4rmwhz1f0cZg4xs1Ntq2MvXXNwO75Zp8tvw/viewform'
  },
  purnaviraam: {
    title: 'पूर्ण विराम',
    nukkad: '19/9/24',
    time: '4:00 PM',
    venue: 'विक्रम साराभाई हॉल',
    description: "राजभाषा समिति 'आह्वान 2024' के शिक्षक वर्ग के अंतर्गत 'पूर्ण विराम' नामक प्रतियोगिता का आयोजन कर रही है। यह काफी रचनात्मक आयोजन है, जिसमें प्रतिभागियों को दिए गए कुछ प्रारंभिक शब्दों के आधार पर कहानी पूरी करनी होगी। इस कार्यक्रम का मुख्य उद्देश्य प्रतिभागियों की सृजनात्मकता, कल्पनाशक्ति और लेखन कौशल का विकास करना है। यह आयोजन दिनांक 19 सितंबर 2024 को शाम 4:00 से 4:30 बजे तक विक्रम साराभाई हॉल में आयोजित किया जाएगा। ",
    images: ['https://i.postimg.cc/Twpxpx0r/IMG-20240314-WA0006.jpg', 'https://i.postimg.cc/YCzMPbjm/IMG-20240314-WA0003.jpg', 'https://i.postimg.cc/QC2yNGYx/IMG-6869.avif'],
    rulesFile: 'kahaniPooriKro.txt',
    link: ''
  },
  shabdrachna: {
    title: 'शब्द रचना',
    nukkad: '19/9/24',
    time: '4:00 PM',
    venue: 'विक्रम साराभाई हॉल',
    description: "राजभाषा समिति 'आह्वान 2024' के अवसर पर ’शब्द रचना’ का आयोजन कर रही है। यह आयोजन 19 सितंबर 2024 को शाम 4:30 बजे से 5 बजे तक विक्रम साराभाई कक्ष में आयोजित किया जाएगा। यह न केवल सृजनात्मकता और त्वरित सोच का परीक्षण है बल्कि एक रोचक और मस्तिष्क को सक्रिय करने वाला आयोजन है। इस प्रतियोगिता में प्रतिभागियों को केवल कुछ अक्षर दिए जाएंगे और उस अक्षर के आधार पर आपको अधिक से अधिक शब्द बनाने होंगे। यह खेल न सिर्फ हिंदी भाषा की समझ को बढ़ावा देता है बल्कि शब्दावली में वृद्धि और रचनात्मकता को भी प्रोत्साहित करता है।",
    images: ['https://i.postimg.cc/Twpxpx0r/IMG-20240314-WA0006.jpg', 'https://i.postimg.cc/YCzMPbjm/IMG-20240314-WA0003.jpg', 'https://i.postimg.cc/QC2yNGYx/IMG-6869.avif'],
    rulesFile: 'shabdrachna.txt',
    link: ''
  },
  chakmagend: {
    title: 'चकमा गेंद',
    nukkad: '20/9/24',
    time: '5:00 PM',
    venue: 'फ़ुटबॉल मैदा',
    description: "राजभाषा समिति 'आह्वान 2024' के छात्र वर्ग में 'गतिस्पर्धा' नामक प्रतियोगिता का आयोजन कर रही है। यह एक अनोखा कार्यक्रम दिनांक 20 सितम्बर, 2024 को संस्थान के मुख्य खेल मैदान में दोपहर 3:00 बजे से सायं काल 5:00 बजे तक आयोजित किया जाएगा। यह कार्यक्रम प्रतिभागियों के तेज गति से आगे बढ़ने की क्षमता को प्रदर्शित करेगा परंतु इसके रोचक नियम जैसे बोरे का उपयोग करके आगे बढ़ना या फिर विलोम चाल इसको अनूठा बनाता है। प्रतियोगिता के विजेताओं को आकर्षक पुरस्कार एवं प्रमाण पत्र दिए जायेंगे।",
    images: ['https://i.postimg.cc/Twpxpx0r/IMG-20240314-WA0006.jpg', 'https://i.postimg.cc/YCzMPbjm/IMG-20240314-WA0003.jpg', 'https://i.postimg.cc/QC2yNGYx/IMG-6869.avif'],
    rulesFile: 'dodgeball.txt',
    link: ''
  },
  gatispardha: {
    title: 'गतिस्पर्धा',
    nukkad: '20/9/24',
    time: '3:00 PM',
    venue: 'फ़ुटबॉल मैदा',
    description: "राजभाषा समिति 'आह्वान 2024' के छात्र वर्ग में 'चकमा गेंद' नामक प्रतियोगिता का आयोजन कर रही है। यह अनूठा कार्यक्रम दिनांक 20 सितम्बर, 2024 को संस्थान के वॉलीबॉल कोर्ट में सायं काल 5:30 बजे से 7:00 बजे तक आयोजित किया जाएगा। इस कार्यक्रम में कुछ प्रतिभागियों का गुट एक गोलाकार रूपी घेराव बनाएंगे। उसके अंदर जो साझीदार रहेंगे उनका केवल एक ही उद्देश्य रहेगा — गेंद से खुद बचाव करना। यदि कोई प्रतिभागी गेंद के संपर्क में आता है तो वो इस खेल से बाहर हो जायेगा। प्रतियोगिता के विजेताओं को प्रमाण पत्र और उपहार से पुरस्कृत किया जायेगा।",
    images: ['https://i.postimg.cc/Twpxpx0r/IMG-20240314-WA0006.jpg', 'https://i.postimg.cc/YCzMPbjm/IMG-20240314-WA0003.jpg', 'https://i.postimg.cc/QC2yNGYx/IMG-6869.avif'],
    rulesFile: 'andha.txt',
    link: ''
  },
  khazanekikhoj: {
    title: 'खजाने की खोज',
    nukkad: '20/9/24',
    time: '3:30 PM',
    venue: 'फ़ुटबॉल मैदा',
    description: "राजभाषा समिति 'आह्वान 2024' के छात्र वर्ग में 'ख़ज़ाने की खोज' नामक प्रतियोगिता का आयोजन कर रही है। यह रहस्यपूर्ण कार्यक्रम दिनांक 20 सितम्बर, 2024 को संस्थान में दोपहर 3:30 बजे से 5:30 बजे तक आयोजित किया जाएगा। सुराग और संकेत की मदद से पहेली सुलझती जायेगी जब जासूसों की टोली सूत्रों को ढूंढ़ने के लिए एक से दूसरे स्थान का भ्रमण करेगी। प्रतियोगिता में 4 प्रतिभागियों की एक टीम बनेगी तथा समस्त टीम में एक छात्रा का उपस्थित होना अनिवार्य है। खेल के अंत में एक रोचक उलट-फेर भी होगा। विजेता टीम को उपहार और प्रमाण पत्र से पुरस्कृत किया जायेगा।",
    images: ['https://i.postimg.cc/Twpxpx0r/IMG-20240314-WA0006.jpg', 'https://i.postimg.cc/YCzMPbjm/IMG-20240314-WA0003.jpg', 'https://i.postimg.cc/QC2yNGYx/IMG-6869.avif'],
    rulesFile: 'treasure.txt',
    link: ''
  },
  // tr: {
  //   title: 'अंधा मोड़',
  //   nukkad: '19/9/24',
  //   time: '1:00 PM',
  //   venue: 'Front of Main Building',
  //   description: 'यह एक खेल या गतिविधि है जिसमें प्रतिभागी अपनी आंखों पर पट्टी बांधकर एक निश्चित मार्ग को पार करने का प्रयास करते हैं। इसमें दिशा ज्ञान और सहयोग की महत्वपूर्ण भूमिका होती है।',
  //   images: ['https://i.postimg.cc/LXCsbvCV/DSC01889.jpg', 'https://i.postimg.cc/Pr8qSWmm/DSC01903.jpg', 'https://i.postimg.cc/7Z8Zd5Vj/IMG-7230.avif'],
  //   rulesFile: 'andha.txt',
  //   link: 'https://docs.google.com/forms/d/e/1FAIpQLSe7MepNkwXY6LI4rmwhz1f0cZg4xs1Ntq2MvXXNwO75Zp8tvw/viewform'
  // },
  // treasure: {
  //   title: 'खजाने की खोज',
  //   nukkad: '20/9/24',
  //   time: '1:00 PM',
  //   venue: 'Front of Main Building',
  //   description: 'इसमें प्रतिभागियों को विभिन्न सुरागों के आधार पर एक निर्धारित लक्ष्य यानी खजाने तक पहुंचना होता है। यह दिमागी खेल है जिसमें त्वरित सोच और निर्णय लेने की क्षमता आवश्यक होती है।',
  //   images: ['/src/assets/images/nukkad.jpg', '/src/assets/images/nukkad.jpg', '/src/assets/images/nukkad.jpg'],
  //   rulesFile: 'treasure.txt',
  //   link: 'https://docs.google.com/forms/d/e/1FAIpQLSe7MepNkwXY6LI4rmwhz1f0cZg4xs1Ntq2MvXXNwO75Zp8tvw/viewform'
  // },
  
  // nukkad: {
  //   title: 'नुक्कड़ नाटक',
  //   nukkad: '18/9/24',
  //   time: '1:00 PM',
  //   venue: 'Front of Main Building',
  //   description: 'यह एक सड़क पर प्रस्तुत किया जाने वाला नाट्य रूप है जिसमें समाज की समस्याओं या किसी सामाजिक मुद्दे पर ध्यान आकर्षित किया जाता है। इसमें सीमित मंच और साधन होते हैं, लेकिन संदेश स्पष्ट और जोरदार होता है।',
  //   images: ['https://i.postimg.cc/Twpxpx0r/IMG-20240314-WA0006.jpg', 'https://i.postimg.cc/YCzMPbjm/IMG-20240314-WA0003.jpg', 'https://i.postimg.cc/QC2yNGYx/IMG-6869.avif'],
  //   rulesFile: 'nukkad.txt',
  //   link: ''
  // },
  // andha: {
  //   title: 'अंधा मोड़',
  //   nukkad: '19/9/24',
  //   time: '1:00 PM',
  //   venue: 'Front of Main Building',
  //   description: 'यह एक खेल या गतिविधि है जिसमें प्रतिभागी अपनी आंखों पर पट्टी बांधकर एक निश्चित मार्ग को पार करने का प्रयास करते हैं। इसमें दिशा ज्ञान और सहयोग की महत्वपूर्ण भूमिका होती है।',
  //   images: ['https://i.postimg.cc/LXCsbvCV/DSC01889.jpg', 'https://i.postimg.cc/Pr8qSWmm/DSC01903.jpg', 'https://i.postimg.cc/7Z8Zd5Vj/IMG-7230.avif'],
  //   rulesFile: 'andha.txt',
  //   link: 'https://docs.google.com/forms/d/e/1FAIpQLSe7MepNkwXY6LI4rmwhz1f0cZg4xs1Ntq2MvXXNwO75Zp8tvw/viewform'
  // },
  // treasure: {
  //   title: 'खजाने की खोज',
  //   nukkad: '20/9/24',
  //   time: '1:00 PM',
  //   venue: 'Front of Main Building',
  //   description: 'इसमें प्रतिभागियों को विभिन्न सुरागों के आधार पर एक निर्धारित लक्ष्य यानी खजाने तक पहुंचना होता है। यह दिमागी खेल है जिसमें त्वरित सोच और निर्णय लेने की क्षमता आवश्यक होती है।',

  //   images: ['/src/assets/images/nukkad.jpg', '/src/assets/images/nukkad.jpg', '/src/assets/images/nukkad.jpg'],
  //   rulesFile: 'treasure.txt',
  //   link: 'https://docs.google.com/forms/d/e/1FAIpQLSe7MepNkwXY6LI4rmwhz1f0cZg4xs1Ntq2MvXXNwO75Zp8tvw/viewform'
  // },

};

function EventDetail() {
  const { id } = useParams();
  const event = eventDetails[id];
  const [rules, setRules] = useState('');

  useEffect(() => {
    fetch(`/txts/${event.rulesFile}`)
      .then((response) => response.text())
      .then((text) => setRules(text))
      .catch((error) => console.error('Error fetching rules:', error));
  }, [id]);

  return (
    <div className="details">
      <div className="content">
        <h1>{event.title}</h1>

        <div className='minor-details'>
          <div className='minor'>
            <img src='/svgss/calendar.vite.svg' style={{ height: '50px', width: '50px', borderRadius: '50%' }} alt="nukkad Icon" />
            <p className='small-text'>दिनांक : {event.nukkad}</p>
          </div>
          <div className='minor'>
            <img src='/svgss/location.svg' style={{ height: '50px', width: '50px', borderRadius: '50%' }} alt="nukkad Icon" />
            <p className='small-text'>स्थान : {event.venue}</p>
          </div>
          <div className='minor'>
            <img src='/svgss/time.svg' style={{ height: '50px', width: '50px', borderRadius: '50%' }} alt="nukkad Icon" />
            <p className='small-text'>समय : {event.time}</p>
          </div>
        </div>

        <p>{event.description}</p>

        {/* Conditional rendering for the "Register" button */}
        {id !== 'nukkad' && (
          <button className="register-button"><a href={event.link}>पंजीकरण करें</a></button>
        )}


{rules && rules.trim() !== '' ? (
          <div className="rules-contact-wrapper">
            <div className="rules-container">
              <p className='rules'>नियम</p>
              <div className="rules-div">
                <pre>{rules}</pre>
              </div>
            </div>
            <div className="contact-container">
              <div style={{ display: 'flex', gap: '10px' }}>
                <img src='/svgss/contact.svg' style={{ height: '50px', width: '50px', borderRadius: '50%' }} />
                <p className='rules'>संपर्क</p>
              </div>
              <div className='organizer'>Aryan: +91 9303390568</div>
              <div className='organizer' style={{ marginBottom: '50px' }}>Ayush: +91 8677885690</div>
            </div>
          </div>
        ) : (
          <div style={{ width: '90%', marginTop:'2rem' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <img src='/svgss/contact.svg' style={{ height: '50px', width: '50px', borderRadius: '50%' }} />
              <p className='rules'>संपर्क</p>
            </div>
            <div className='organizer'>Aryan Pareek : 9931603459</div>
            <div className='organizer' style={{ marginBottom: '50px' }}>Ayush: 9931603459</div>
          </div>
        )}

        <ImageCarousel images={event.images} />
      </div>
    </div>
  );
}

export default EventDetail;
