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
  Frontend: [
    "ReactJS",
    "NextJS",
    "Tailwind CSS",
    "shadcn/ui",
    "Material UI",
    "Next UI",
    "Framer Motion",
    "TanStack Query",
    "HTML5",
    "CSS3",
  ],
  Backend: [
    "NodeJS",
    "ExpressJS",
    "REST APIs",
    "Prisma",
    "JWT",
    "NextAuth",
    "Zod",
  ],
  Databases: ["MongoDB", "PostgreSQL", "Firebase", "MSSQL"],
  Languages: ["JavaScript", "TypeScript", "Python", "C", "C++", "SQL"],
  "AI & Research": ["TensorFlow", "LLMs", "NLP", "CNN", "QNN"],
  Tools: ["Git/GitHub", "Vercel", "Vite", "Stripe", "Cloudinary"],
};

export const projects = [
  {
    slug: "nexusai",
    title: "NexusAI",
    image: "/images/nexusai-home.webp",
    video: "/videos/nexusai_demo.mp4",
    cardTech: ["Gemini API", "NextAuth", "Mongoose", "Cloudinary"],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "TanStack Query",
      "Zustand",
      "NextAuth",
      "Framer Motion",
      "Recharts",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "Gemini API",
      "Cloudinary",
      "Passport",
      "JWT",
      "Zod",
    ],
    shortDesc:
      "An AI-powered freelance marketplace that helps freelancers write winning pitches, get career coaching and discover in-demand gigs, with role-based dashboards for freelancers, clients and admins.",
    longDesc:
      "NexusAI is an AI-powered freelance marketplace that connects freelancers with client opportunities and career guidance. Built with the Next.js App Router, NextAuth, and React Query, its frontend pairs with an Express and TypeScript REST API backed by MongoDB and Mongoose. The API uses Zod validation, JWT access and refresh tokens, Helmet, rate limiting, and Cloudinary uploads, while Gemini-powered endpoints generate pitches, analyze careers, recommend gigs, and support persistent coach conversations. Separate role-based dashboards support freelancers, clients, and administrators across marketplace workflows.",
    features: [
      "AI Pitch Builder: Generate tailored proposals from a job description and the freelancer's profile.",
      "AI Career Coach: Get conversational advice on pricing, skills, and clients, with saved conversation history.",
      "Market Insights: Discover AI-generated gig recommendations and hand off directly to the pitch builder.",
      "Role-Based Platform: Separate dashboards and permissions for freelancers, clients, and admins cover orders, finances, billing, disputes, and moderation, secured with JWT, Google OAuth, and rate-limited AI endpoints.",
    ],
    pageBreakdowns: [
      {
        pageName: "Landing Page",
        description:
          "The homepage introduces NexusAI as a career co-pilot for the gig economy, with platform highlights, AI features, marketplace categories, testimonials, and pricing.",
        image: "/images/nexusai-home.webp",
      },
      {
        pageName: "Gig Marketplace",
        description:
          "The Explore Gigs page presents searchable freelance listings with filters, trending labels, freelancer details, skill tags, delivery estimates, ratings, and starting prices.",
        image: "/images/nexusai-explore.webp",
      },
      {
        pageName: "Gig Details",
        description:
          "A machine-learning development listing displays the freelancer profile and rating, service packages, project gallery, gig description, and technology tags.",
        image: "/images/nexusai-gig-details.webp",
      },
      {
        pageName: "AI Pitch Builder",
        description:
          "The proposal workspace invites freelancers to provide job details or client requirements and draft a tailored cover letter with NexusAI.",
        image: "/images/nexusai-ai-pitch.webp",
      },
      {
        pageName: "AI Career Coach",
        description:
          "A conversational coaching screen offers guidance for pricing gigs, learning skills, and handling difficult clients.",
        image: "/images/nexusai-chat.webp",
      },
      {
        pageName: "AI Market Insights",
        description:
          "The insights page pairs a skill-acquisition matrix with recommended gig packages, each offering a direct path to draft a proposal.",
        image: "/images/nexusai-recommendations.webp",
      },
      {
        pageName: "Analytics",
        description:
          "The analytics dashboard combines Gemini-generated market analysis with monthly revenue and traffic charts over a six-month period.",
        image: "/images/nexusai-analytics.webp",
      },
      {
        pageName: "Finances Dashboard",
        description:
          "The freelancer finance view summarizes available, earned, and withdrawn balances alongside earnings charts and recent transactions.",
        image: "/images/nexusai-finances.webp",
      },
      {
        pageName: "Billing",
        description:
          "The billing dashboard shows the active subscription, available plans, saved payment method, and a history of invoices.",
        image: "/images/nexusai-billing.webp",
      },
    ],
    liveLink: "https://nexus-ai-nexus.vercel.app/",
    githubClient: "https://github.com/samwaseee/Nexus-AI_frontend",
    githubServer: "https://github.com/samwaseee/Nexus-AI_backend",
    challenges:
      "Coordinating NextAuth sessions on the frontend with JWT-protected Express APIs requires a clear boundary between user sessions and API authorization. AI endpoints are kept behind authentication and rate limiting, while career-coach conversations are persisted for later use.",
    futurePlans:
      "Adding real-time messaging between clients and freelancers would make project coordination more direct. Payment and escrow integration could support order transactions within the marketplace.",
  },
  {
    slug: "promptforge",
    title: "PromptForge",
    image: "/images/promtforge-home.webp",
    video: "/videos/promptforge_demo.mp4",
    cardTech: ["PostgreSQL", "Prisma", "Firebase", "Stripe"],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Firebase",
      "JWT",
      "Stripe",
      "Recharts",
      "Framer Motion",
      "GSAP",
    ],
    shortDesc:
      "A premium full-stack e-commerce marketplace for discovering, buying, and selling production-ready AI prompts with multi-role dashboards.",
    longDesc:
      "PromptForge is a highly scalable digital asset exchange designed for the AI generation era. It bridges the gap between AI engineers and everyday users by providing a secure, centralized platform to trade prompts for cutting-edge models like GPT-4, Claude, and Midjourney. The architecture features robust role-based access control, delivering tailored experiences, secure transactions, and advanced analytics for Buyers, Sellers, and Administrators.",
    features: [
      "Centralized Prompt Vault: Discover, securely purchase, and store production-ready AI assets in a personalized, gated library.",
      "Seller Analytics: Comprehensive dashboards featuring real-time revenue tracking, sales visualization, and inventory management.",
      "Admin Moderation: Powerful approval workflows, financial reporting tools, and user management to maintain marketplace quality.",
      "Enterprise-Grade Security: Implemented JWT-backed API clients, protected routes, and Firebase Google OAuth for seamless authentication.",
    ],
    pageBreakdowns: [
      {
        pageName: "Landing Page",
        description:
          "A highly polished, conversion-optimized homepage that introduces the marketplace, highlights trending prompts, and routes users into specific role-based workflows.",
        image: "/images/promtforge-home(fullpage).webp",
      },
      {
        pageName: "Buyer Library",
        description:
          "A secure, centralized vault where buyers can search via category filters, read reviews, execute purchases, and access their unlocked digital assets.",
        image: "/images/promtforge-buyer library.webp",
      },
      {
        pageName: "Seller Dashboard",
        description:
          "A comprehensive analytics hub allowing sellers to manage their prompt inventory, track real-time revenue trends, and monitor sales performance.",
        image: "/images/promtforge-frontend.vercel.app_dashboard_seller.webp",
      },
      {
        pageName: "Admin Dashboard",
        description:
          "The core moderation portal where administrators review incoming prompt submissions, monitor platform GMV, and manage global user statuses.",
        image: "/images/promtforge-admin dashboard.webp",
      },
    ],
    liveLink: "https://promtforge-frontend.vercel.app/",
    githubClient: "https://github.com/samwaseee/promtforge-frontend",
    githubServer: "https://github.com/samwaseee/promtforge-backend",
    challenges:
      "Architecting a secure, multi-role ecosystem where digital assets remain completely hidden until a transaction is validated, while ensuring real-time data synchronization across complex analytical dashboards without sacrificing UI performance.",
    futurePlans:
      "Integrating direct API connections to test prompts live within the browser, expanding the analytics engine with predictive sales models, and implementing a comprehensive rating/review system for enhanced marketplace trust.",
  },
  {
    slug: "starlight-university",
    title: "Starlight University",
    image: "/images/project_1.webp",
    cardTech: ["Material UI", "Flowbite", "TanStack Query", "EmailJS"],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Material UI",
      "Flowbite",
      "TanStack Query",
      "Framer Motion",
      "JWT",
      "EmailJS",
    ],
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
    image: "/images/project_2.webp",
    cardTech: ["Stripe", "TanStack Query", "Ant Design", "NextUI"],
    stack: [
      "React",
      "Vite",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Firebase",
      "JWT",
      "Stripe",
      "TanStack Query",
      "Tailwind CSS",
      "Daisy UI",
      "Material UI",
      "NextUI",
      "Ant Design",
      "Framer Motion",
      "Recharts",
    ],
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
        image: "/images/project_2.webp",
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
    image: "/images/project_3.webp",
    cardTech: ["Firebase", "Material UI", "Pigeon Maps", "Swiper"],
    stack: [
      "React",
      "Vite",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Firebase",
      "JWT",
      "Tailwind CSS",
      "Daisy UI",
      "Material UI",
      "Swiper",
      "Pigeon Maps",
      "AOS",
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
    image: "/images/project_4.webp",
    cardTech: ["Firebase", "Daisy UI", "Swiper"],
    stack: [
      "React",
      "Vite",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
      "Daisy UI",
      "Swiper",
    ],
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
        src: "/images/QPAIN2026_NIDS.webp",
        alt: "Behavioral Generative Augmentation for Network Intrusion Detection - IEEE QPAIN 2026",
        href: "https://doi.org/10.1109/QPAIN69676.2026.11545987",
        isbn: "979-8-3315-4990-9",
      },
      {
        src: "/images/IEOM2025.webp",
        alt: "IEOM 2025 Bangladesh Conference Research",
        href: "https://doi.org/10.46254/BA08.20250158",
        isbn: "979-8-3507-4441-5",
        issn: "2169-8767",
      },
      {
        src: "/images/QPAIN2026_QUT-DV25.webp",
        alt: "Revisiting the QUT-DV25 Benchmark: Interpretable Feature-Fused Models for PyPI Malware Detection - IEEE QPAIN 2026",
        href: "https://doi.org/10.1109/QPAIN69676.2026.11545547",
        isbn: "979-8-3315-4990-9",
      },
    ],
  },
  {
    title: "Competitive Programming",
    images: [
      {
        src: "/images/canvas.webp",
        href: "https://www.hackerrank.com/certificates/3321f878e95d",
      },
      { src: "/images/Samiur Rahman Wasi.jpg" },
    ],
  },
  {
    title: "Web Development",
    images: [
      { src: "/images/blackbelt.png" },
      { src: "/images/certificate_page-0001.webp" },
      {
        src: "/images/jira.png",
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
    images: ["/images/Samiur Rahman Wasi.webp"],
  },
  {
    title: "Idea Generation",
    images: ["/images/bl.webp"],
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
    images: ["/images/ieee.webp"],
  },
];
