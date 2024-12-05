import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  powerbi,
  excel,  
  powerpoint,
  jupyter,
  numpy,
  pandas,
  python,
  sql,
  powerbi_project,
  excel_project,
  python_project,
  sql_project,
  price_tracker_project,
  portfolio_project,
  inotebook_project,
  newsapp_project,
  attendance_project,
  shaurya_logo,
  rajbhasha_logo
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "होम",
  },
  {
    id: "team",
    title: "टीम",
  },
  {
    id: "events",
    title: "इवेंट्स",
  },
  {
    id: "gallery",
    title: "गैलरी",
  },
  {
    id: "results",
    title: "परिणाम",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: mobile,
  },
  {
    title: "Machine Learning",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "typescript",
    icon: typescript,
  },
  {
    name: "threejs",
    icon: threejs,
  },
  {
    name: "redux",
    icon: redux,
  },
  {
    name: "tailwind",
    icon: tailwind,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Shaurya Committee",
    company_name: "WebD Domain",
    icon: shaurya_logo,
    iconBg: "#383E56",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Led the creation of Shaurya Club's sports fest website, 'Samar', using React, Three.js, and Tailwind CSS, deploying a 3D model for an engaging user experience.",
      "Demonstrated effective team leadership, assigning tasks to juniors, fostering skill development, and contributing to successful project completion.",
      "Managed and version-controlled the project efficiently on GitHub.",
      "Strengthened networking with seniors, enhancing web development skills.",
    ],
    link:"https://samar2k22.netlify.app/",
  },
  {
    title: "Rajbhasha Club",
    company_name: "WebD Domain",
    icon: rajbhasha_logo,
    iconBg: "#E6DEDD",
    date: "Ongoing",
    points: [
      "Drove backend development for the Rajbhasha Club's website, implementing a robust forum with interactive features and efficient certificate issuance through face recognition.",
      "Spearheaded the integration of machine learning programs, enhancing the website's functionality and user experience.",
      "Demonstrated expertise in backend systems, ensuring seamless data processing and storage.",
      "Contributed to a collaborative and innovative environment, leveraging backend and machine learning skills for a dynamic web platform.",
    ],
    link:"https://samar2k22.netlify.app/",
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Akshay proved me wrong.",
    name: "Neha Singh",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Akshay does.",
    name: "Akash Kumar",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Akshay optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Yaseen Khan",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Price Tracker",
    description:
      "Crafted an e-commerce scraping platform using Next.js and Bright Data's webunlocker. Empowers users with price drop alerts and keeps competitors informed about stock status through automated cron jobs, ensuring strategic insights for both.",
    tags: [
      {
        name: "webScraping",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
    ],
    image: price_tracker_project,
    source_code_link: "https://github.com/akshayjain07/price-tracker",
  },
  {
    name: "News App",
    description:
      "Designed and developed a React-powered news application that efficiently retrieves real-time updates from external APIs. The app prioritizes a seamless user experience through an user-friendly interface, making news browsing effortless and engaging.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api fetching",
        color: "green-text-gradient",
      },
      // {
      //   name: "matplotlib",
      //   color: "pink-text-gradient",
      // },
    ],
    image: newsapp_project,
    source_code_link: "https://github.com/akshayjain07/news-app",
  },
  {
    name: "Cloud Note App",
    description:
      "Developed a MERN stack cloud note app for seamless cross-device note storage. Utilized MongoDB, Express.js, React, and Node.js to ensure secure and responsive functionality. Empowering users with easy and efficient note management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: inotebook_project,
    source_code_link: "https://github.com/akshayjain07/inotebook",
  },
  {
    name: "Personal Portfolio",
    description:
      "Crafted a dynamic personal portfolio website using React, incorporating advanced libraries such as Three.js for immersive experiences and react-tilt for interactive elements. Integrated emailjs for efficient communication.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "react-tilt",
        color: "green-text-gradient",
      },
      {
        name: "emailjs",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio_project,
    source_code_link: "https://github.com/akshayjain07/SDE-akshay-portfolio",
  },
  {
    name: "Attendance App",
    description:
      "Engineered a machine learning-based attendance app, seamlessly storing data in Excel for efficient management. Demonstrates proficiency in merging advanced technologies for streamlined and accurate attendance tracking.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machineLearning",
        color: "green-text-gradient",
      },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: attendance_project,
    source_code_link: "https://github.com/akshayjain07/face-recognition-attendance-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
