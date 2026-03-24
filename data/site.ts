export const siteConfig = {
  name: "Kim McCaskill",
  role: "Front End Engineer",
  location: "Remote / US",
  email: "kimmccaskill92@gmail.com",
  resumeHref: "/Kim_McCaskill_Resume.pdf",
  headshotSrc: "/images/kim-headshot.png",
  headshotAlt: "Portrait of Kim McCaskill smiling",
  teachingPhotoSrc: "/images/kim-teaching.png",
  teachingPhotoAlt:
    "Kim McCaskill teaching children how to play brass instrument at music camp",
  japanPhotoSrc: "/images/kim-japan.png",
  japanPhotoAlt: "Kim McCaskill visiting a garden in Japan",
  intro:
    "Welcome! My name is Kim and I am a Software Developer with a focus on Front-End technologies.",
  about:
    "Before software, I earned my Bachelor's in Instrumental Music Education from Florida State University, spent long days in the marching band under the Florida sun, and worked three summers as a camp counselor at FSU Summer Music Camps. I later trained at Turing School of Software and Design, and I have been building software since 2020 (6 years and counting). That path still shapes how I work: I break down complex systems into teachable parts, listen closely, and translate ideas across disciplines. As a front-end engineer, I bring that same musician's precision and educator's empathy to craft interfaces that feel clear, thoughtful, and genuinely human.",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/kimmccaskill" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kimmccaskill/" },
  ],
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const experiences = [
  {
    company: "Oddball",
    role: "Software Engineer II",
    period: "Nov 2024 - Present",
    description:
      "Build and maintain React Native features for government and enterprise users, while driving accessibility, reusable component standards, and cross-team delivery.",
  },
  {
    company: "MakeMusic",
    role: "Software Developer",
    period: "Apr 2022 - Nov 2024",
    description:
      "Shipped production features across React and Ember apps, expanded a shared component library, and led internal workshops on Git workflows and Redux Toolkit.",
  },
  {
    company: "Envysion",
    role: "Software Developer",
    period: "Jan 2021 - Apr 2022",
    description:
      "Developed customer-facing video analytics features with React and VideoJS, and improved UI consistency, performance, and accessibility for a high-traffic SaaS platform.",
  },
  {
    company: "4th Down Software",
    role: "Front End Developer",
    period: "Sep 2020 - Jan 2021",
    description:
      "Built React/TypeScript front-end features backed by Strapi CMS and helped launch client-facing applications serving more than 1,200 users.",
  },
] as const;

export const skills = [
  "React",
  "TypeScript",
  "React Native",
  "Accessibility",
  "Testing",
] as const;

export const projects = [
  {
    name: "Cruxing in Color",
    href: "https://www.cruxingincolor.com",
    period: "Past contribution",
    role: "Front End Developer",
    stack: ["React", "Strapi", "Headless CMS"],
    summary:
      "Built as a React front end with Strapi as a headless CMS for a Denver climbing group focused on connecting, supporting, and empowering self-identified climbers of color.",
    note: "Current site ownership and implementation have changed, so the live website no longer reflects my original work.",
    highlights: [
      "Built and refined React-based UI flows",
      "Integrated Strapi content models into front-end views",
      "Supported iterative feature delivery and usability polish",
    ],
  },
  {
    name: "Mile High Asian Food Week",
    href: "https://www.milehighafw.com",
    period: "Feature takeover and enhancements",
    role: "Front End Developer",
    stack: ["Wix", "Search", "Favorites", "Content updates"],
    summary:
      "Took over an existing Wix website and expanded key features for AANHPI food discovery, including better vendor browsing and event updates.",
    note: "MHAFW helps foodies explore participating AANHPI-owned businesses and makers, with limited-time discounts, specialty menus, and insider perks.",
    highlights: [
      "Added vendor search for faster discovery",
      "Implemented favorites functionality for users",
      "Updated and maintained vendor content for new events",
    ],
  },
] as const;
