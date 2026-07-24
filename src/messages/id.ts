import type { Messages } from "./en";

export const id: Messages = {
  metadata: {
    title: {
      default: "Danish — Pengembang Full-Stack",
      template: "%s | Danish",
    },
    description:
      "Portfolio pengembang profesional dengan proyek perangkat lunak yang aman, berguna, dan nyata.",
  },
  nav: {
    home: "Beranda",
    projects: "Proyek",
    about: "Tentang",
    contact: "Kontak",
  },
  hero: {
    greeting: "Halo, saya",
    name: "Danish",
    role: "Pengembang Full-Stack",
    tagline: "Saya membangun aplikasi web yang aman, berguna, dan siap produksi.",
    location: "Berkedudukan di Indonesia",
    viewProjects: "Lihat Proyek",
    github: "GitHub",
    contact: "Kontak",
  },
  projects: {
    title: "Proyek Unggulan",
    subtitle:
      "Perangkat lunak nyata yang dibangun dengan perhatian pada keamanan dan kualitas.",
    viewAll: "Lihat Semua Proyek",
    viewCaseStudy: "Lihat Studi Kasus",
    sourceCode: "Kode Sumber",
    liveDemo: "Demo Langsung",
    technologies: "Teknologi",
    status: "Status",
    problem: "Permasalahan",
    solution: "Solusi",
    features: "Fitur Utama",
    challenges: "Tantangan Teknis",
    securityHighlights: "Poin Keamanan",
    buildStatus: "Status Build",
    testStatus: "Pengujian",
    noProjects: "Tidak ada proyek ditemukan.",
  },
  capabilities: {
    title: "Kemampuan",
    subtitle: "Keterampilan teknis dan alat yang saya gunakan.",
    frontend: "Frontend",
    frontendItems: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "UI Responsif",
      "Aksesibilitas",
    ],
    backend: "Backend",
    backendItems: [
      "ASP.NET Core",
      "Laravel",
      "REST API",
      "Autentikasi",
      "Otorisasi",
      "Pemrosesan Latar Belakang",
    ],
    data: "Data",
    dataItems: [
      "PostgreSQL",
      "SQLite",
      "Entity Framework Core",
      "Migrasi Database",
    ],
    security: "Keamanan",
    securityItems: [
      "Enkripsi",
      "Akses File Aman",
      "Rate Limiting",
      "Header Keamanan",
      "Log Audit",
      "Validasi Input",
    ],
    infrastructure: "Infrastruktur",
    infrastructureItems: [
      "Docker",
      "GitHub Actions",
      "Linux",
      "Pengujian Otomatis",
      "Vercel",
    ],
  },
  process: {
    title: "Cara Saya Bekerja",
    subtitle: "Pendekatan sistematis dalam membangun perangkat lunak.",
    step1: {
      title: "Memahami Masalah",
      description:
        "Merasakan kebutuhan, batasan, dan kebutuhan pengguna sebelum menulis kode.",
    },
    step2: {
      title: "Merancang Solusi",
      description:
        "Membuat arsitektur yang jelas, memilih alat yang tepat, dan merencanakan implementasi.",
    },
    step3: {
      title: "Membangun dan Menguji",
      description:
        "Menulis kode yang bersih dan dapat dipelihara dengan pengujian otomatis yang komprehensif.",
    },
    step4: {
      title: "Mengamankan",
      description:
        "Mengimplementasikan praktik keamanan terbaik, memvalidasi input, dan melindungi data pengguna.",
    },
    step5: {
      title: "Menerapkan dan Memverifikasi",
      description:
        "Meluncurkan ke produksi dengan pemantauan, kemudian iterasi berdasarkan penggunaan nyata.",
    },
  },
  about: {
    title: "Tentang Saya",
    intro:
      "Saya adalah pengembang full-stack yang fokus pada pembangunan aplikasi web yang aman dan siap produksi. Saya peduli pada penulisan kode yang bersih, implementasi langkah keamanan yang tepat, dan pembuatan perangkat lunak yang benar-benar menyelesaikan masalah.",
    approach:
      "Pendekatan saya menggabungkan perhatian pada detail dengan pemecahan masalah praktis. Saya percaya pada pemahaman masalah secara menyeluruh sebelum menulis kode, dan saya memprioritaskan keamanan dan kemampuan pemeliharaan dalam setiap proyek yang saya bangun.",
    stack:
      "Stack saya saat ini berpusat pada Next.js dan React untuk kerja frontend, ASP.NET Core dan Laravel untuk layanan backend, PostgreSQL dan SQLite untuk penyimpanan data, dan Docker untuk penerapan. Saya nyaman bekerja di seluruh stack dan menikmati tantangan teknis yang kompleks.",
    interests:
      "Saya khususnya tertarik pada keamanan aplikasi, penanganan file yang aman, dan pembuatan alat yang memprioritaskan privasi pengguna. Ketika saya tidak coding, saya mengeksplorasi teknologi baru dan meningkatkan keterampilan saya.",
  },
  contact: {
    title: "Hubungi Saya",
    subtitle: "Tertarik bekerja sama? Berikut cara menghubungi saya.",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
    resume: "Resume",
    copyEmail: "Salin Email",
    emailCopied: "Email disalin ke clipboard!",
    noContact:
      "Informasi kontak belum dikonfigurasi. Silakan hubungi melalui GitHub.",
  },
  footer: {
    copyright: "Hak cipta dilindungi.",
    privacy: "Privasi",
    sourceCode: "Kode Sumber",
  },
  common: {
    loading: "Memuat...",
    error: "Terjadi kesalahan.",
    notFound: "Halaman tidak ditemukan.",
    backHome: "Kembali ke Beranda",
    learnMore: "Pelajari Lebih Lanjut",
    available: "Tersedia untuk proyek",
    notAvailable: "Saat ini tidak tersedia",
  },
  accessibility: {
    skipToContent: "Lewati ke konten utama",
    menuOpen: "Buka menu",
    menuClose: "Tutup menu",
    switchTheme: "Ganti tema",
    switchLanguage: "Ganti bahasa",
    externalLink: "Buka di tab baru",
  },
  privacy: {
    title: "Kebijakan Privasi",
    intro:
      "Situs portfolio ini memprioritaskan privasi Anda. Berikut yang perlu Anda ketahui:",
    points: [
      "Tidak ada analitik pihak ketiga atau skrip pelacakan yang dimuat secara default.",
      "Cookie tidak digunakan untuk tujuan pelacakan.",
      "Layanan eksternal satu-satunya adalah GitHub untuk hosting repository.",
      "Interaksi Anda dengan situs ini tidak dilacak atau dipantau.",
    ],
    contact:
      "Untuk masalah privasi, silakan buka issue di repository GitHub.",
  },
};
