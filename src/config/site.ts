export interface SiteConfig {
  name: string;
  displayName: string;
  role: string;
  tagline: string;
  location: string;
  githubUrl: string;
  email: string | null;
  linkedinUrl: string | null;
  resumeUrl: string | null;
  availability: string | null;
  siteUrl: string;
  repositoryUrl: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  name: "danish",
  displayName: "Danish",
  role: "Full-Stack Developer",
  tagline: "I build secure, useful, and production-ready web applications.",
  location: "Indonesia",
  githubUrl: "https://github.com/Unknown2-1",
  email: null, // Configure when available
  linkedinUrl: null, // Configure when available
  resumeUrl: null, // Configure when available
  availability: null, // Set to "open" or null
  siteUrl: "https://developer-portfolio-six-jet.vercel.app",
  repositoryUrl: "https://github.com/Unknown2-1/developer-portfolio",
  description:
    "A professional developer portfolio featuring secure, useful, and real-world software projects.",
};
