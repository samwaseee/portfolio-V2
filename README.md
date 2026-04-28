# ⚡ Samwasee | Full Stack Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)

A high-performance, cinematic personal portfolio designed to showcase my journey as a Full Stack Web Developer and Software Engineer. Built with a focus on seamless user experience, scroll-triggered animations, and a sleek dark-mode aesthetic.

🔗 **Live Demo:** https://samiur-rahman-wasee.vercel.app

---

## ✨ Key Features

This portfolio was built to exceed standard web development requirements, featuring:

* **Cinematic UI/UX:** Custom scroll-triggered animations and glass-morphism effects using Framer Motion.
* **Dynamic Navigation:** A sticky, smart navbar that updates the active section title based on document scroll position.
* **Data-Driven Architecture:** All portfolio content (Projects, Skills, Achievements) is decoupled from the UI and driven by a central `portfolioData.ts` file for easy maintenance.
* **Interactive Project Showcase:** Detailed project cards featuring the MERN stack, live links, GitHub repositories, and comprehensive descriptions of challenges and future plans.
* **Bento-Grid Skills Section:** A modern, staggered grid layout highlighting technical proficiencies.
* **Functional Contact Form:** A fully working, serverless email integration using Formspree.
* **100% Responsive:** Flawless rendering across mobile, tablet, and desktop viewports.

---

## 🛠️ Technology Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript / JavaScript
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Form Handling:** Formspree API
* **Deployment:** Vercel

---

## 🚀 Getting Started

To run this project locally on your machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18.x or later recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/samwaseee/portfolio-V2
   cd portfolio-V2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure the Contact Form:**
   * Open `src/components/Contact.tsx`.
   * Locate the `<form>` tag.
   * Replace the `action` URL with your own Formspree endpoint ID.

4. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **View the site:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

A quick look at the core structure:

```text
├── public/
│   └── images/               # Project screenshots, certificates, and profile photos
├── src/
│   ├── app/                  
│   │   ├── projects/         # Dynamic routing directory
│   │   │   └── [slug]/       
│   │   │       └── page.tsx  # Dynamic project details page
│   │   ├── layout.tsx        # Root layout & global metadata
│   │   ├── page.tsx          # Main entry page assembling all sections
│   │   └── globals.css       # Global styles and Tailwind directives
│   ├── components/           # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx      
│   │   ├── Achievements.tsx
│   │   └── Contact.tsx
│   └── data/
│       └── portfolioData.ts  # Centralized data source for the entire site
└── README.md
```

---

## 👤 About the Developer

**Samiur Rahman Wasi**
*B.Sc. in Computer Science and Engineering, IIUC*

I am an ambitious software engineer with a Black-Belt from Programming Hero. I specialize in developing robust real-world applications using the MERN stack and researching generative AI for cybersecurity. When I step away from the keyboard, I maintain a disciplined 6-day PPL workout regimen, bringing the same seasoned work ethic to the gym as I do to my code.

* **LinkedIn:** [linkedin.com/in/samiur-rahman-wasi](https://linkedin.com/in/samiur-rahman-wasi)
* **GitHub:** [github.com/samwaseee](https://github.com/samwaseee)
* **Email:** samwaseee@gmail.com

---
*Engineered in Chattogram, Bangladesh.*

