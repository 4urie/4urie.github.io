import profileImg from './assets/images/home.jpg';
import posImg from './assets/images/pos.png';
import chatifyImg from './assets/images/1.png';

const logotext = "AURIE";
const meta = {
    title: "Aurie Nellas",
    description: "I am Aurie Nellas, 3rd year BSIT student passionate about IoT, Web Development, and Networking",
};

const introdata = {
    title: "I am Aurie Nellas",
    animated: {
        first: "I love IoT development",
        second: "I build web applications", 
        third: "I explore networking solutions",
    },
    description: "I am passionate about building real-world systems that bridge the digital and physical world. Currently exploring the intersection of Networking, IoT, and Web Development to create innovative solutions.",
    your_img_url: profileImg,
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I am a 3rd year BSIT student passionate about building real-world systems that bridge the digital and physical world. Currently exploring IoT, Web Development, and Networking. I work on ESP32 projects, learn Django and Cloud Computing. Ask me about Laravel, Python, or MySQL. Fun fact: I play support in Dota 2 but carry my team in tech projects!",
};

// Achievements Section
const achievements = [
    {
        title: "Dean's Lister",
        description: "Achieved Dean's List recognition for academic excellence in BSIT program",
        year: "2023-2024",
        icon: "🏆"
    },
    {
        title: "Best Capstone Project",
        description: "IoT-based Smart Home Automation System using ESP32 and sensor integration",
        year: "2024",
        icon: "🥇"
    },
    {
        title: "Programming Competition Winner",
        description: "1st Place in Regional Programming Competition - Web Development Category",
        year: "2023",
        icon: "🏅"
    },
    {
        title: "Outstanding Student Award",
        description: "Recognition for exceptional performance in Database Management Systems",
        year: "2023",
        icon: "⭐"
    }
];

// Certificates Section
const certificates = [
    {
        title: "Laravel Certified Developer",
        issuer: "Laravel",
        date: "2024",
        description: "Advanced Laravel framework development and best practices",
        link: "#"
    },
    {
        title: "Python for Data Science",
        issuer: "Coursera - IBM",
        date: "2023",
        description: "Data analysis, visualization, and machine learning with Python",
        link: "#"
    },
    {
        title: "IoT Fundamentals",
        issuer: "Cisco Networking Academy",
        date: "2023",
        description: "Internet of Things concepts, protocols, and implementation",
        link: "#"
    },
    {
        title: "MySQL Database Administration",
        issuer: "Oracle",
        date: "2023",
        description: "Database design, optimization, and administration",
        link: "#"
    },
    {
        title: "Network Security Fundamentals",
        issuer: "CompTIA",
        date: "2022",
        description: "Cybersecurity principles and network protection strategies",
        link: "#"
    },
    {
        title: "React.js Development",
        issuer: "freeCodeCamp",
        date: "2022",
        description: "Modern React development with hooks and state management",
        link: "#"
    }
];

const worktimeline = [{
        jobtitle: "IoT Developer",
        where: "Personal Projects",
        date: "2024",
    },
    {
        jobtitle: "Web Developer", 
        where: "Freelance",
        date: "2023",
    },
    {
        jobtitle: "BSIT Student",
        where: "DSNC",
        date: "2022-Present",
    },
];

const skills = [{
        name: "Laravel",
        value: 85,
    },
    {
        name: "Python",
        value: 80,
    },
    {
        name: "Django",
        value: 75,
    },
    {
        name: "MySQL",
        value: 85,
    },
    {
        name: "IoT/ESP32",
        value: 70,
    },
    {
        name: "Networking",
        value: 75,
    },
    {
        name: "JavaScript",
        value: 70,
    },
    {
        name: "React",
        value: 60,
    },
];

const services = [{
        title: "Web Development",
        description: "Building modern web applications using Laravel, Django, and React. Specialized in creating scalable and user-friendly solutions.",
    },
    {
        title: "IoT Solutions", 
        description: "Developing IoT projects with ESP32 and sensor integration to bridge the digital and physical world.",
    },
    {
        title: "Database Design",
        description: "Designing and optimizing MySQL databases for web applications and data management systems.",
    },
];

const dataportfolio = [{
        img: chatifyImg,
        description: "Laravel Chatify - Real-time chat application built with Laravel and WebSocket technology.",
        link: "https://github.com/4urie/laravelchatify",
    },
    {
        img: posImg, 
        description: "Laravel POS - Point of Sale system for retail businesses with inventory management.",
        link: "https://github.com/4urie/laravelpos",
    },
    {
        img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400",
        description: "Laravel E-commerce - Full-featured online shopping platform with payment integration.",
        link: "https://github.com/4urie/laravelecommerce",
    },
    {
        img: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400",
        description: "Django OAuth - Authentication system implementing OAuth2 for secure user management.", 
        link: "https://github.com/4urie/djangooauth",
    },
    {
        img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400",
        description: "IoT ESP32 Project - Sensor integration and data monitoring system using ESP32 microcontroller.",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400",
        description: "Network Monitoring Tool - Advanced networking protocol implementation for system monitoring.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "nellas.aurie@dsnc.edu",
    YOUR_FONE: "(555)123-4567",
    description: "Feel free to reach out if you want to collaborate on projects, discuss tech topics, or just have a chat about IoT, web development, or gaming! Always excited to connect with fellow developers and tech enthusiasts.",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id", 
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/4urie",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    achievements,
    certificates,
};
