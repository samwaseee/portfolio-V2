export const personalInfo = {
  name: "Samiur Rahman Wasee",
  designation: "Full Stack Developer | ML Researcher ",
  about: `As an ambitious Computer Science undergraduate, I possess a solid grounding in full-stack web development, cultivated through my coursework at Programming Hero, where I was recognized as one of the top students in my batch and received the Black-Belt. My fervor for web development has sharpened my analytical skills and prepared me to develop user-centric and responsive full-stack applications. Eager to leverage my analytical thinking, honed through competitive programming, I am keen to apply my technical knowledge and problem-solving expertise to real-world projects. I am dedicated to lifelong learning and aspire to excel as a software engineer, where I can innovate and optimize technological processes. I operate well in both individual and team capacities, leveraging a seasoned work ethic to quickly adapt to different workflows and contribute to teams that value cutting-edge solutions and continuous improvement.`,
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
    stack: ["React", "Express.js", "Node.js", "MongoDB", "Tailwind CSS", "XML"],
    shortDesc:
      "A comprehensive educational management system handling courses, attendance, and exams.",
    longDesc:
      "Starlight University is my first team project, designed to tackle the complexities of managing educational institutions. It streamlines various processes for students, teachers, and administrators to foster an efficient educational environment.",
    features: [
      "Custom Authentication System: Secure login with encrypted credentials ensures robust data protection.",
      "Role-Based Access Control: Different access levels for students, teachers, and administrators streamline permissions.",
      "Course Management: Enables browsing and enrollment of courses.",
      "Integrated Attendance Tracking: Real-time monitoring of attendance records.",
      "Exam Management: Students can view upcoming exams and track results.",
    ],
    pageBreakdowns: [
      {
        pageName: "Home Page",
        description:
          "Provides an overview of the application with prominent Call-to-Action buttons, Service Highlights, User Testimonials, and direct Navigation Links.",
        image: "/images/starlight_home.png",
      },
      {
        pageName: "Admin Dashboard",
        description:
          "Includes Statistics Overview, User Management, Course/Exam Administration, Notice Management, Financial Tracking, and Report Generation.",
        image: "/images/starlight_admin.png",
      },
    ],
    liveLink: "https://starlight-un-edu.vercel.app",
    githubClient: "https://github.com/samwaseee/starlight-university-client",
    githubServer: "https://github.com/samwaseee/starlight-university-server",
    challenges:
      "Implementing secure, multi-tier role-based access control and ensuring the real-time attendance tracking synced perfectly.",
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
      "Care Camp is a MERN stack web application intended to simplify the organization and participation processes for medical camps. Organizers can efficiently handle camp information and registrations, while participants can locate, join, and monitor their experiences.",
    features: [
      "Efficient Registration & Payment: Secure camp registration with integrated payment tracking.",
      "Feedback & Ratings: Participants can rate their experiences.",
      "Advanced Search & Sort: Robust filtering by keywords, dates, registration count, or fees.",
      "Analytics Dashboard: Visual representation of camp data.",
    ],
    pageBreakdowns: [
      {
        pageName: "Home Page",
        description:
          "Displays navbar with authenticated profile dropdown, a success stories banner slider, popular camps showcase, and comprehensive camp details with registration modals.",
        image: "/images/project_2.png",
      },
      {
        pageName: "Available Camps & Search",
        description:
          "Displays all camps with essential details. Includes a search bar, sorting options, and a layout button to switch between two and three-column card layouts.",
        image: "/images/carecamp_camps.png",
      },
      {
        pageName: "Organizer Dashboard",
        description:
          "Organizers can manage their profile, add new camps, view/update existing camps, manage registered users, and confirm payments or cancel registrations.",
        image: "/images/carecamp_org_dash.png",
      },
      {
        pageName: "Participant Dashboard",
        description:
          "Participants can manage their profile, view camp analysis charts, manage registered camps, provide feedback, and track full payment history.",
        image: "/images/carecamp_part_dash.png",
      },
    ],
    liveLink: "https://care-camp-a12.web.app",
    githubClient: "https://github.com/samwaseee/Care_Camp_client",
    githubServer: "https://github.com/samwaseee/Care_Camp_server",
    challenges:
      "Implementing secure JWT authentication alongside role-verification for admin routes, and robust Stripe processing.",
    futurePlans:
      "Adding real-time chat support and dynamic analytics dashboards.",
  },
  {
    slug: "bookedinn",
    title: "BookedInn",
    image: "/images/project_3.png",
    stack: [
      "React",
      "Express.js",
      "MongoDB",
      "Node.js",
      "Material UI",
      "Firebase",
    ],
    shortDesc: "A sophisticated full-stack hotel reservation web application.",
    longDesc:
      "BookedInn enables customers to effortlessly make hotel reservations, read and submit reviews, and manage their bookings. The backend is powered by MongoDB and Express middleware, utilizing cookie-parsed JWT tokens for server-side authentication.",
    features: [
      "User Authentication: Register or log in using email, Google, or GitHub via Firebase Auth.",
      "Room Reservations: Guests can book, modify check-in dates, and cancel reservations.",
      "Interactive Reviews: Visitors can read and write room-specific reviews.",
    ],
    pageBreakdowns: [
      {
        pageName: "Home Page",
        description:
          "Serves as the user's first impression, showcasing an attractive dynamic slideshow of images, quick access to popular rooms, and encouraging deeper exploration.",
        image: "/images/bookedinn_home.png",
      },
      {
        pageName: "Rooms List & Details",
        description:
          "Displays available rooms vertically with a price filtering system. Detailed views offer descriptions, photos, amenities, guest reviews, and reservation options.",
        image: "/images/bookedinn_rooms.png",
      },
      {
        pageName: "My Reservations (My List)",
        description:
          "A personalized section for users to manage their bookings, allowing them to modify check-in dates, cancel, or leave reviews for completed stays.",
        image: "/images/bookedinn_mylist.png",
      },
      {
        pageName: "Authentication & About",
        description:
          "Secure Login/Signup pages using Email, Google, or GitHub. The About page builds trust by disclosing the hotel's history, mission, and values.",
        image: "/images/bookedinn_auth.png",
      },
    ],
    liveLink: "https://bookedinn-a11.web.app",
    githubClient: "https://github.com/samwaseee/BookedInn-client",
    githubServer: "https://github.com/samwaseee/BookedInn-server",
    challenges:
      "Handling complex MongoDB aggregation pipelines for filtering available rooms based on real-time booking dates.",
    futurePlans:
      "Integrating a recommendation engine to suggest rooms based on user history.",
  },
  {
    slug: "sam-travels",
    title: "SAM Travels",
    image: "/images/project_4.png",
    stack: ["React", "Express.js", "MongoDB", "Tailwind CSS", "Daisy UI"],
    shortDesc:
      "A collaborative tourist spot management system for European exploration.",
    longDesc:
      "SAM Travels is a platform that empowers users to discover, share, and manage tourist spots across European countries.",
    features: [
      "Multi-Factor Authentication: Register and log in with email, Google, or GitHub.",
      "Tourist Spot Management: Add, update, and delete community spots.",
      "Dark Theme Toggle: Seamlessly switch between light and dark themes.",
    ],
    pageBreakdowns: [
      {
        pageName: "Home Page & Dark Theme",
        description:
          "A visually striking landing page featuring a seamless dark theme toggle for enhanced user experience after logging in.",
        image: "/images/samtravels_home.png",
      },
      {
        pageName: "Tourist Spot Directory",
        description:
          "Displays all tourist spots. Logged-in users can access the 'Add Tourist Spots' page and view a personalized list of spots they have contributed.",
        image: "/images/samtravels_spots.png",
      },
    ],
    liveLink: "https://sam-travels-a10.web.app",
    githubClient: "https://github.com/samwaseee/sam-travels-client",
    githubServer: "https://github.com/samwaseee/sam-travels-server",
    challenges:
      "Structuring the database schemas to efficiently link user-generated content, reviews, and specific geographic locations.",
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
