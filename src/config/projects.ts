export type ProjectStatus =
  | "live"
  | "completed"
  | "in-development"
  | "case-study"
  | "source-available"
  | "demo-unavailable";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  featured: boolean;
  role: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string | null;
  screenshots: {
    desktop: string | null;
    mobile: string | null;
    alt: string;
  };
  problem: string;
  solution: string;
  features: string[];
  challenges: string[];
  securityHighlights: string[];
  buildStatus?: string;
  testStatus?: string;
  startDate?: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    slug: "vaultshare",
    name: "VaultShare",
    tagline: "Secure file sharing with encryption, access controls, and audit trails.",
    description:
      "A privacy-focused secure file sharing platform with encrypted storage, expiring links, password protection, download limits, malware scanning, audit logs, and workspace collaboration.",
    status: "live",
    featured: true,
    role: "Full-Stack Developer",
    technologies: [
      "Next.js",
      "ASP.NET Core",
      "PostgreSQL",
      "ClamAV",
      "Docker",
      "AES-256-GCM",
      "Entity Framework Core",
    ],
    githubUrl: "https://github.com/Unknown2-1/secure-file-sharing-platform",
    liveUrl: null,
    screenshots: {
      desktop: "/projects/vaultshare/dashboard.png",
      mobile: null,
      alt: "VaultShare dashboard showing file management interface",
    },
    problem:
      "Regular file sharing services often rely on long URLs, public buckets, or UI-only access controls. VaultShare designs authorization at the API level with hashed share tokens, ciphertext-only object storage, fail-closed malware scanning, and redacted audit logs.",
    solution:
      "Built with application-level encryption at rest, chunked resumable uploads, atomic download reservations, and comprehensive workspace permissions (Owner, Admin, Member, Viewer).",
    features: [
      "Personal and team workspace with role-based permissions",
      "Cookie authentication with CSRF defense, email verification, and session controls",
      "TOTP 2FA with recovery codes",
      "Chunked/resumable streaming upload with quota and content validation",
      "ClamAV streaming malware scanning with fail-closed policy",
      "AES-256-GCM envelope encryption per file",
      "Public/internal share with expiration, password, maximum download, one-time semantics",
      "Streaming authenticated decryption without direct public object URL",
      "Comprehensive audit logs and notifications",
    ],
    challenges: [
      "Implementing atomic download slot reservation to prevent abuse",
      "Designing envelope encryption with secure key management",
      "Building fail-closed malware scanning pipeline",
      "Achieving cross-workspace isolation in multi-tenant architecture",
    ],
    securityHighlights: [
      "Raw share token, password, plaintext DEK, and KEK are never stored in the database",
      "Filename is never used as object key or filesystem path",
      "Scanner error is not a clean result; production is fail-closed",
      "Public share path is redacted from proxy access logs",
    ],
    buildStatus: "Release build: 0 warning, 0 error",
    testStatus: "Backend: 49 passed | Frontend: 34 passed | E2E: 4 passed",
    startDate: "2024",
    highlights: [
      "49 backend tests, 34 frontend tests, 4 E2E tests",
      "Railway deployment ready",
      "Production security hardening documented",
    ],
  },
  {
    slug: "umkm-pos",
    name: "UMKM POS & Inventory",
    tagline:
      "Point of Sale and inventory management system for Indonesian MSMEs.",
    description:
      "A production-style POS and inventory management system designed for Indonesian Micro, Small, and Medium Enterprises (UMKM), featuring real-time sales, purchase orders, stock management, and comprehensive audit trails.",
    status: "completed",
    featured: true,
    role: "Full-Stack Developer",
    technologies: [
      "Laravel",
      "Livewire",
      "Alpine.js",
      "Tailwind CSS",
      "SQLite",
      "Chart.js",
    ],
    githubUrl: "https://github.com/Unknown2-1/umkm-pos-inventory",
    liveUrl: null,
    screenshots: {
      desktop: null,
      mobile: null,
      alt: "UMKM POS dashboard showing sales and inventory metrics",
    },
    problem:
      "Indonesian MSMEs often lack affordable, localized POS systems that handle Indonesian Rupiah currency precision, exclusive tax calculations, and business workflows specific to the local market.",
    solution:
      "Built with Laravel and Livewire for real-time updates, using BigInteger for financial precision, exclusive 11% PPN tax handling, and comprehensive role-based access control (Owner, Admin, Cashier).",
    features: [
      "Real-time POS with barcode scanner support and hold/resume cart",
      "Purchase order with partial/full receipt and row-level locking",
      "Automatic stock ledger card with qty_before, qty_change, qty_after",
      "Product CRUD with image upload, SKU, CSV import/export",
      "RBAC with Owner, Admin, and Cashier roles",
      "Audit log with data_before and data_after tracking",
      "Dashboard with Chart.js financial trends",
      "Manual SQLite database backup",
    ],
    challenges: [
      "Implementing secure partial purchase receipt with database transactions",
      "Building POS with exclusive tax calculation matching Indonesian regulations",
      "Designing stock movement service with proper quantity tracking",
    ],
    securityHighlights: [
      "Role-based access control at middleware level",
      "Audit log captures all data changes with before/after snapshots",
      "Secure session management with account active/inactive rules",
    ],
    testStatus: "30+ automated tests covering auth, POS, inventory, and reports",
    startDate: "2025",
    highlights: [
      "30+ feature tests",
      "90-day realistic demo data seeded",
      "Thermal receipt printing support",
    ],
  },
  {
    slug: "arus-finance",
    name: "Arus Finance",
    tagline: "A calm, editorial workspace for better money decisions.",
    description:
      "A personal finance dashboard for understanding cash flow, tracking transactions, setting budgets, and building better financial habits without the noise of a spreadsheet.",
    status: "source-available",
    featured: true,
    role: "Product designer & full-stack developer",
    technologies: ["Next.js", "React", "TypeScript", "Local Storage"],
    githubUrl: "https://github.com/Unknown2-1/arus-finance",
    liveUrl: "https://arus-finance.spork-uplift-9b175am.chatgpt.site",
    screenshots: {
      desktop: null,
      mobile: null,
      alt: "Arus Finance personal finance dashboard",
    },
    problem:
      "Personal finance tools often make everyday decisions feel like accounting work.",
    solution:
      "A warm, focused workspace that turns balances, budgets, and transactions into clear next actions.",
    features: [
      "Cash-flow overview with monthly trend",
      "Real-time transaction search",
      "Budget tracking by category",
      "Local-first demo data and dark mode",
    ],
    challenges: [
      "Keeping dense financial data calm and readable",
      "Designing a responsive review flow for mobile and desktop",
    ],
    securityHighlights: [
      "No account or API key required for the demo",
      "Preferences and demo transactions stay in browser storage",
    ],
    startDate: "2026",
    highlights: [
      "Indonesian Rupiah support",
      "Responsive editorial interface",
      "Portfolio-ready product case study",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getStatusLabel(status: ProjectStatus): string {
  const labels: Record<ProjectStatus, string> = {
    live: "Live",
    completed: "Completed",
    "in-development": "In Development",
    "case-study": "Case Study",
    "source-available": "Source Available",
    "demo-unavailable": "Demo Unavailable",
  };
  return labels[status];
}

export function getStatusColor(status: ProjectStatus): string {
  const colors: Record<ProjectStatus, string> = {
    live: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
    completed: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    "in-development":
      "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
    "case-study": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
    "source-available":
      "bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-400",
    "demo-unavailable":
      "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400",
  };
  return colors[status];
}
