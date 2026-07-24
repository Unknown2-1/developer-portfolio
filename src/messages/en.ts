export const en = {
  metadata: {
    title: {
      default: "Danish — Full-Stack Developer",
      template: "%s | Danish",
    },
    description:
      "A professional developer portfolio featuring secure, useful, and real-world software projects.",
  },
  nav: {
    home: "Home",
    projects: "Projects",
    about: "About",
    contact: "Contact",
  },
  hero: {
    greeting: "Hello, I'm",
    name: "Danish",
    role: "Full-Stack Developer",
    tagline: "I build secure, useful, and production-ready web applications.",
    location: "Based in Indonesia",
    viewProjects: "View Projects",
    github: "GitHub",
    contact: "Contact",
  },
  projects: {
    title: "Featured Projects",
    subtitle: "Real-world software built with attention to security and quality.",
    viewAll: "View All Projects",
    viewCaseStudy: "View Case Study",
    sourceCode: "Source Code",
    liveDemo: "Live Demo",
    technologies: "Technologies",
    status: "Status",
    problem: "The Problem",
    solution: "The Solution",
    features: "Key Features",
    challenges: "Technical Challenges",
    securityHighlights: "Security Highlights",
    buildStatus: "Build Status",
    testStatus: "Tests",
    noProjects: "No projects found.",
  },
  capabilities: {
    title: "Capabilities",
    subtitle: "Technical skills and tools I work with.",
    frontend: "Frontend",
    frontendItems: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI",
      "Accessibility",
    ],
    backend: "Backend",
    backendItems: [
      "ASP.NET Core",
      "Laravel",
      "REST API",
      "Authentication",
      "Authorization",
      "Background Processing",
    ],
    data: "Data",
    dataItems: [
      "PostgreSQL",
      "SQLite",
      "Entity Framework Core",
      "Database Migrations",
    ],
    security: "Security",
    securityItems: [
      "Encryption",
      "Secure File Access",
      "Rate Limiting",
      "Security Headers",
      "Audit Logs",
      "Input Validation",
    ],
    infrastructure: "Infrastructure",
    infrastructureItems: [
      "Docker",
      "GitHub Actions",
      "Linux",
      "Automated Testing",
      "Vercel",
    ],
  },
  process: {
    title: "How I Work",
    subtitle: "A systematic approach to building software.",
    step1: {
      title: "Understand the Problem",
      description:
        "Research requirements, constraints, and user needs before writing any code.",
    },
    step2: {
      title: "Design the Solution",
      description:
        "Create clear architecture, choose appropriate tools, and plan the implementation.",
    },
    step3: {
      title: "Build and Test",
      description:
        "Write clean, maintainable code with comprehensive automated tests.",
    },
    step4: {
      title: "Secure",
      description:
        "Implement security best practices, validate inputs, and protect user data.",
    },
    step5: {
      title: "Deploy and Verify",
      description:
        "Ship to production with monitoring, then iterate based on real usage.",
    },
  },
  about: {
    title: "About Me",
    intro:
      "I'm a full-stack developer focused on building secure, production-ready web applications. I care about writing clean code, implementing proper security measures, and creating software that actually solves problems.",
    approach:
      "My approach combines attention to detail with practical problem-solving. I believe in understanding the problem thoroughly before writing any code, and I prioritize security and maintainability in every project I build.",
    stack: "My current stack centers around Next.js and React for frontend work, ASP.NET Core and Laravel for backend services, PostgreSQL and SQLite for data storage, and Docker for deployment. I'm comfortable working across the full stack and enjoy tackling complex technical challenges.",
    interests:
      "I'm particularly interested in application security, secure file handling, and building tools that prioritize user privacy. When I'm not coding, I'm exploring new technologies and improving my craft.",
  },
  contact: {
    title: "Get in Touch",
    subtitle: "Interested in working together? Here's how to reach me.",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
    resume: "Resume",
    copyEmail: "Copy Email",
    emailCopied: "Email copied to clipboard!",
    noContact:
      "Contact information not yet configured. Please reach out via GitHub.",
  },
  footer: {
    copyright: "All rights reserved.",
    privacy: "Privacy",
    sourceCode: "Source Code",
  },
  common: {
    loading: "Loading...",
    error: "Something went wrong.",
    notFound: "Page not found.",
    backHome: "Back to Home",
    learnMore: "Learn More",
    available: "Available for projects",
    notAvailable: "Not currently available",
  },
  accessibility: {
    skipToContent: "Skip to main content",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    switchTheme: "Switch theme",
    switchLanguage: "Switch language",
    externalLink: "Opens in new tab",
  },
  privacy: {
    title: "Privacy Policy",
    intro:
      "This portfolio website prioritizes your privacy. Here's what you should know:",
    points: [
      "No third-party analytics or tracking scripts are loaded by default.",
      "No cookies are used for tracking purposes.",
      "The only external service is GitHub for hosting the repository.",
      "Your interactions with this site are not tracked or monitored.",
    ],
    contact:
      "For privacy concerns, please open an issue on the GitHub repository.",
  },
};

export type Messages = typeof en;
