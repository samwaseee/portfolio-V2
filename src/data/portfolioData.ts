export const personalInfo = {
  name: "Samiur Rahman Wasi",
  designation: "Full Stack Web Developer | Software Engineer",
  about: "I am an ambitious Computer Science undergraduate with a solid grounding in full-stack web development. My fervor for building user-centric, responsive applications was cultivated through intensive coursework, where I earned a Black-Belt for my performance. I leverage my analytical thinking, honed through competitive programming, to develop robust real-world projects and optimize technological processes. When I step away from the keyboard, I maintain a disciplined 6-day workout regimen (including a dedicated legs and shoulders day), bringing the same seasoned work ethic to the gym as I do to my code.",
  education: "B.Sc. in Computer Science and Engineering - International Islamic University Chittagong (IIUC)",
  socials: {
    github: "https://github.com/samwaseee",
    linkedin: "https://linkedin.com/in/samiur-rahman-wasi", 
  },
  contact: {
    email: "samwaseee@gmail.com",
    phone: "+880 1881 146425",
  }
};

export const skills = {
  Frontend: ["ReactJS", "NextJS", "Tailwind CSS", "Next UI", "HTML5", "CSS3"],
  Backend: ["NodeJS", "ExpressJS", "MongoDB", "Firebase", "MSSQL"],
  Languages: ["JavaScript", "C", "C++", "Python"],
  Tools: ["Git/GitHub", "Vercel", "Stripe", "JWT"]
};

export const projects = [
  {
    slug: "starlight-university",
    title: "Starlight University",
    image: "/images/project_1.png", 
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind"],
    shortDesc: "A comprehensive educational management system.",
    longDesc: "A robust platform built to streamline university operations. It features a custom authentication system with encrypted credentials, integrated real-time attendance tracking for both students and teachers, and highly tailored role-based access control for students, teachers, parents, and administrators.",
    features: [
      "Custom Authentication System: Secure login with encrypted credentials ensuring robust data protection.",
      "Integrated Attendance Tracking: Real-time monitoring for students and teachers to track attendance patterns.",
      "Role-Based Access Control: Streamlined permissions for students, teachers, parents, and admins."
    ],
    liveLink: "https://starlight-un-edu.vercel.app", 
    githubClient: "https://github.com/samwaseee/starlight-university-client",
    challenges: "Implementing secure, multi-tier role-based access control and ensuring real-time data sync across dashboards.",
    futurePlans: "Integrating advanced analytics for administrators to monitor overall campus performance."
  },
  {
    slug: "care-camp",
    title: "Care Camp",
    image: "/images/project_2.png", 
    stack: ["React", "Express.js", "MongoDB", "Stripe", "JWT"],
    shortDesc: "A comprehensive Medical Camp Management System.",
    longDesc: "A full-stack MERN application developed to simplify the organization and participation processes for medical camps. It features secure user authentication, personalized role-based dashboards (Admin/User), and integrated payment gateways.",
    features: [
      "Personalized Dashboards: Specialized interfaces for participants and organizers to track activities.",
      "Secure Payment Processing: Safe transactions through integrated payment gateways with history tracking.",
      "Comprehensive Camp Listings: Detailed browseable listings with fees, dates, and healthcare professional info."
    ],
    liveLink: "https://care-camp-a12.web.app", 
    githubClient: "https://github.com/samwaseee/Care_Camp_client",
    challenges: "Implementing secure JWT authentication alongside Stripe payment processing for camp registrations.",
    futurePlans: "Adding real-time chat support and dynamic analytics dashboards for camp organizers."
  },
  {
    slug: "bookedinn",
    title: "BookedInn",
    image: "/images/project_3.png",
    stack: ["React", "Express.js", "MongoDB", "Node.js"],
    shortDesc: "A sophisticated hotel reservation platform.",
    longDesc: "A web application that enables customers to effortlessly make hotel reservations, modify check-in dates, and submit reviews, powered by a scalable Express-based backend.",
    features: [
      "Room Reservations: Flexible booking system allowing guests to modify or cancel reservations easily.",
      "Room Reviews: Interactive system for visitors to read, write, and view average ratings for every room.",
      "Simple Registration & Login: Quick sign-up and secure access using email or social media accounts."
    ],
    liveLink: "https://bookedinn-a11.web.app",
    githubClient: "https://github.com/samwaseee/BookedInn-client",
    challenges: "Handling complex MongoDB aggregation pipelines for filtering available rooms based on dates.",
    futurePlans: "Integrating a recommendation engine based on user history and preferences."
  },
  {
    slug: "sam-travels",
    title: "SAM Travels",
    image: "/images/project_4.png",
    stack: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
    shortDesc: "A collaborative tourist spot management system.",
    longDesc: "A platform with custom authentication that empowers users to discover, share, and manage tourist spots across various European countries with a dark theme toggle for better UX.",
    features: [
      "Tourist Spot Management: Full CRUD capabilities to add, update, and delete community-shared spots.",
      "Dark Theme Toggle: Seamless switching between light and dark themes for customized user experience.",
      "Collaborative Platform: Engaging interface to discover tourist spots added by other community users."
    ],
    liveLink: "https://sam-travels-a10.web.app",
    githubClient: "https://github.com/samwaseee/sam-travels-client",
    challenges: "Structuring database schemas to link user-generated content and geographic locations efficiently.",
    futurePlans: "Adding an interactive mapping feature to visually display tourist spots."
  }
];