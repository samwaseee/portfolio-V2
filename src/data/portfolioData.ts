export const personalInfo = {
  name: "Samiur Rahman Wasee",
  designation: "Full Stack Developer | ML Researcher ",
  about: 
  `As an ambitious Computer Science undergraduate, I possess a solid grounding in full-stack web development, cultivated through my coursework at Programming Hero, where I was recognized as one of the top students in my batch and received the Black-Belt. My fervor for web development has sharpened my analytical skills and prepared me to develop user-centric and responsive full-stack applications. Eager to leverage my analytical thinking, honed through competitive programming, I am keen to apply my technical knowledge and problem-solving expertise to real-world projects. I am dedicated to lifelong learning and aspire to excel as a software engineer, where I can innovate and optimize technological processes. I operate well in both individual and team capacities, leveraging a seasoned work ethic to quickly adapt to different workflows and contribute to teams that value cutting-edge solutions and continuous improvement.`,
  education:
    "B.Sc. in Computer Science and Engineering - International Islamic University Chittagong (IIUC)",
  socials: {
    github: "https://github.com/samwaseee",
    linkedin: "https://linkedin.com/in/samiur-rahman-wasi",
    facebook: "https://www.facebook.com/Samiur.Rahman.Wasee",
    instagram: "https://www.instagram.com/samiur_rahman_wasee",
    twitter: "https://twitter.com/samwaseee",
  },
  contact: {
    email: "samwaseee@gmail.com",
    phone: "+880 1881 146425",
  },
};

export const skills = {
  Frontend: ["ReactJS", "NextJS", "Tailwind CSS", "Next UI", "HTML5", "CSS3"],
  Backend: ["NodeJS", "ExpressJS", "MongoDB", "Firebase", "MSSQL"],
  Languages: ["JavaScript", "C", "C++", "Python"],
  Tools: ["Git/GitHub", "Vercel", "Stripe", "JWT"],
};

export const projects = [
  {
    slug: "starlight-university",
    title: "Starlight University",
    image: "/images/project_1.png",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind"],
    shortDesc: "A comprehensive educational management system.",
    longDesc:
      "A robust platform built to streamline university operations. It features a custom authentication system with encrypted credentials, integrated real-time attendance tracking for both students and teachers, and highly tailored role-based access control for students, teachers, parents, and administrators.",
    features: [
      "Custom Authentication System: Secure login with encrypted credentials ensuring robust data protection.",
      "Integrated Attendance Tracking: Real-time monitoring for students and teachers to track attendance patterns.",
      "Role-Based Access Control: Streamlined permissions for students, teachers, parents, and admins.",
    ],
    liveLink: "https://starlight-un-edu.vercel.app",
    githubClient: "https://github.com/samwaseee/starlight-university-client",
    challenges:
      "Implementing secure, multi-tier role-based access control and ensuring real-time data sync across dashboards.",
    futurePlans:
      "Integrating advanced analytics for administrators to monitor overall campus performance.",
  },
  {
    slug: "care-camp",
    title: "Care Camp",
    image: "/images/project_2.png",
    stack: ["React", "Express.js", "MongoDB", "Stripe", "JWT"],
    shortDesc: "A comprehensive Medical Camp Management System.",
    longDesc:
      "A full-stack MERN application developed to simplify the organization and participation processes for medical camps. It features secure user authentication, personalized role-based dashboards (Admin/User), and integrated payment gateways.",
    features: [
      "Personalized Dashboards: Specialized interfaces for participants and organizers to track activities.",
      "Secure Payment Processing: Safe transactions through integrated payment gateways with history tracking.",
      "Comprehensive Camp Listings: Detailed browseable listings with fees, dates, and healthcare professional info.",
    ],
    liveLink: "https://care-camp-a12.web.app",
    githubClient: "https://github.com/samwaseee/Care_Camp_client",
    challenges:
      "Implementing secure JWT authentication alongside Stripe payment processing for camp registrations.",
    futurePlans:
      "Adding real-time chat support and dynamic analytics dashboards for camp organizers.",
  },
  {
    slug: "bookedinn",
    title: "BookedInn",
    image: "/images/project_3.png",
    stack: ["React", "Express.js", "MongoDB", "Node.js"],
    shortDesc: "A sophisticated hotel reservation platform.",
    longDesc:
      "A web application that enables customers to effortlessly make hotel reservations, modify check-in dates, and submit reviews, powered by a scalable Express-based backend.",
    features: [
      "Room Reservations: Flexible booking system allowing guests to modify or cancel reservations easily.",
      "Room Reviews: Interactive system for visitors to read, write, and view average ratings for every room.",
      "Simple Registration & Login: Quick sign-up and secure access using email or social media accounts.",
    ],
    liveLink: "https://bookedinn-a11.web.app",
    githubClient: "https://github.com/samwaseee/BookedInn-client",
    challenges:
      "Handling complex MongoDB aggregation pipelines for filtering available rooms based on dates.",
    futurePlans:
      "Integrating a recommendation engine based on user history and preferences.",
  },
  {
    slug: "sam-travels",
    title: "SAM Travels",
    image: "/images/project_4.png",
    stack: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
    shortDesc: "A collaborative tourist spot management system.",
    longDesc:
      "A platform with custom authentication that empowers users to discover, share, and manage tourist spots across various European countries with a dark theme toggle for better UX.",
    features: [
      "Tourist Spot Management: Full CRUD capabilities to add, update, and delete community-shared spots.",
      "Dark Theme Toggle: Seamless switching between light and dark themes for customized user experience.",
      "Collaborative Platform: Engaging interface to discover tourist spots added by other community users.",
    ],
    liveLink: "https://sam-travels-a10.web.app",
    githubClient: "https://github.com/samwaseee/sam-travels-client",
    challenges:
      "Structuring database schemas to link user-generated content and geographic locations efficiently.",
    futurePlans:
      "Adding an interactive mapping feature to visually display tourist spots.",
  },
];

export const achievements = [
  {
    title: "Research Publications",
    images: [
      {
        src: "/images/QPAIN2026_NIDS.jpg",
        alt: "Behavioral Generative Augmentation for Network Intrusion Detection - IEEE QPAIN 2026",
      },
      {
        src: "/images/IEOM2025.jpg",
        alt: "IEOM 2025 Bangladesh Conference Research",
        href: "https://doi.org/10.46254/BA08.20250158",
        isbn: "979-8-3507-4441-5",
        issn: "2169-8767",
      },
      {
        src: "/images/QPAIN2026_QUT-DV25.jpg",
        alt: "Revisiting the QUT-DV25 Benchmark: Interpretable Feature-Fused Models for PyPI Malware Detection - IEEE QPAIN 2026",
      },
    ],
  },
  {
    title: "Competitive Programming",
    images: [
      {
        src: "/images/canvas.png",
        href: "https://www.hackerrank.com/certificates/3321f878e95d",
      },
      { src: "/images/Samiur Rahman Wasi.jpg" },
    ],
  },
  {
    title: "Web Development",
    images: [
      { src: "/images/blackbelt.png" },
      { src: "/images/certificate_page-0001.jpg" },
      {
        src: "/images/Jira.png",
        href: "https://simpli-web.app.link/e/0f5n03eEXXb",
      },
    ],
  },
  {
    title: "AI & ML",
    images: [
      {
        src: "/images/LLM.png",
        href: "https://simpli-web.app.link/e/LsJPG5fTVXb",
      },
      {
        src: "/images/NLP.png",
        href: "https://simpli-web.app.link/e/1y9Wh84SVXb",
      },
      {
        src: "/images/Introduction to NN.png",
        href: "https://simpli-web.app.link/e/g7RhVZICZXb",
      },
      {
        src: "/images/Gemini for Google Workspace.png",
        href: "https://simpli-web.app.link/e/qQ9v6AJGUXb",
      },
      {
        src: "/images/Generative AI.png",
        href: "https://simpli-web.app.link/e/0VH0gw3MWXb",
      },
      {
        src: "/images/Tensorflow.png",
        href: "https://simpli-web.app.link/e/gDLWELZH0Xb",
      },
      {
        src: "/images/Prompt Engineering.png",
        href: "https://simpli-web.app.link/e/x7n4Ca1MWXb",
      },
      {
        src: "/images/Agentic AI.png",
        href: "https://simpli-web.app.link/e/UsWtYbKPWXb",
      },
    ],
  },
  {
    title: "App Development",
    images: [{ src: "/images/EDGE_certificate.png" }],
  },
  {
    title: "Data Analysis",
    images: [
      {
        src: "/images/Data Analyst 101.png",
        href: "https://simpli-web.app.link/e/DDSC4gKSVXb",
      },
      {
        src: "/images/PowerBi.png",
        href: "https://simpli-web.app.link/e/lsa4OqB0SXb",
      },
      {
        src: "/images/Data Analytics.png",
        href: "https://simpli-web.app.link/e/F8Ik6l6FUXb",
      },
      {
        src: "/images/Data Analytics with Gen AI.png",
        href: "https://simpli-web.app.link/e/VSnYaHXMWXb",
      },
      {
        src: "/images/SQL Analytics and BI.png",
        href: "https://simpli-web.app.link/e/ipseA2XPWXb",
      },
    ],
  },
  {
    title: "Cloud",
    images: [
      {
        src: "/images/AWS cloud adoptation framework.png",
        href: "https://simpli-web.app.link/e/WAhIJJqQWXb",
      },
      {
        src: "/images/Basics of AZURE.png",
        href: "https://simpli-web.app.link/e/fsyvEugQWXb",
      },
      {
        src: "/images/Google Cloud Operations.png",
        href: "https://simpli-web.app.link/e/cUPrirxQWXb",
      },
      {
        src: "/images/Data Transformation with Google Cloud.png",
        href: "https://simpli-web.app.link/e/f6rkiP8NXXb",
      },
    ],
  },
  {
    title: "App Design",
    images: ["/images/Samiur Rahman Wasi.png"],
  },
  {
    title: "Idea Generation",
    images: ["/images/bl.jpg"],
  },
  {
    title: "Cyber Security",
    images: [
      {
        src: "/images/cybersecurity.png",
        href: "https://www.linkedin.com/learning/certificates/7650954fed6d8635f3a42fb7a715b46c1979c8dbd2193010a8b9fa56b03ae7ec",
      },
      {
        src: "/images/CISSP.png",
        href: "https://simpli-web.app.link/e/qCUuiKRtZXb",
      },
    ],
  },
  {
    title: "Communication Skills",
    images: [
      {
        src: "/images/Screenshot 2024-06-27 010101.png",
        href: "https://www.linkedin.com/learning/certificates/e8c1e49ac408303ef69f50f904f58a1793fb141976747775452849b5ae2b3280",
      },
      {
        src: "/images/10 minutes school.png",
        href: "https://10minuteschool.com/certificate/667d3ada155e1",
      },
    ],
  },
  {
    title: "ICISET Conference",
    images: ["/images/ieee.jpg"],
  },
];
