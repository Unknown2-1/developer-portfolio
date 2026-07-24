"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Boxes,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleDot,
  Code2,
  Database,
  Github,
  Globe2,
  Layers3,
  LockKeyhole,
  Mail,
  MousePointer2,
  Send,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/components/ui/language-provider";
import { siteConfig } from "@/config/site";
import { projects, type Project } from "@/config/projects";

const fallbackProject = {
  slug: "arus-finance",
  name: "Arus Finance",
  tagline: "A calm, editorial finance workspace for better decisions.",
  description:
    "A personal finance dashboard designed around cash flow clarity, local currency, and low-friction daily habits.",
  status: "source-available" as const,
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
  problem: "Money tools often make simple decisions feel like accounting work.",
  solution: "A warm workspace that makes patterns, budgets, and next actions easier to see.",
  features: ["Cash-flow overview", "Transaction search", "Budget tracking", "Dark mode"],
  challenges: ["Keeping dense financial data calm", "Designing for mobile-first review"],
  securityHighlights: ["Local-first demo data", "No account or API key required"],
  highlights: ["Responsive interface", "Local currency support", "Portfolio-ready case study"],
} satisfies Project;

const primaryProjects: Project[] = [
  projects.find((project) => project.slug === "vaultshare") ?? projects[0],
  projects.find((project) => project.slug === "umkm-pos") ?? projects[1],
  fallbackProject,
].filter(Boolean);

const projectVisuals = [
  { label: "privacy infrastructure", tone: "violet", glyph: "01", icon: ShieldCheck },
  { label: "commerce operations", tone: "blue", glyph: "02", icon: Boxes },
  { label: "personal finance", tone: "peach", glyph: "03", icon: Layers3 },
] as const;

const capabilities = [
  {
    icon: Code2,
    eyebrow: "01 / build",
    title: "Interfaces with a pulse",
    body: "Responsive product surfaces that feel considered at every breakpoint, from the first tap to the last detail.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: LockKeyhole,
    eyebrow: "02 / protect",
    title: "Security as a product feature",
    body: "Permission models, encryption, audit trails, and fail-closed defaults are designed into the experience.",
    tags: ["ASP.NET Core", "Laravel", "Auth"],
  },
  {
    icon: Database,
    eyebrow: "03 / ship",
    title: "Systems that hold up",
    body: "Practical architecture, honest testing, and deployment-ready workflows for software that can leave the demo.",
    tags: ["PostgreSQL", "Docker", "CI/CD"],
  },
];

function revealDelay(index: number) {
  return { transitionDelay: `${index * 70}ms` };
}

function ProjectVisual({
  project,
  visual,
  active,
}: {
  project: Project;
  visual: (typeof projectVisuals)[number];
  active: boolean;
}) {
  const VisualIcon = visual.icon;
  return (
    <div className={`project-visual project-visual-${visual.tone} ${active ? "is-active" : ""}`}>
      <div className="visual-noise" />
      <div className="visual-orbit visual-orbit-one" />
      <div className="visual-orbit visual-orbit-two" />
      <div className="visual-topline">
        <span className="visual-kicker">{visual.label}</span>
        <span className="visual-index">{visual.glyph}</span>
      </div>
      <div className="visual-window">
        <div className="visual-window-bar">
          <span className="window-dot window-dot-red" />
          <span className="window-dot window-dot-yellow" />
          <span className="window-dot window-dot-green" />
          <span className="window-address">danish / {project.slug}</span>
        </div>
        {project.screenshots.desktop ? (
          <div className="visual-screenshot">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.screenshots.desktop} alt={project.screenshots.alt} />
          </div>
        ) : (
          <div className="visual-interface">
            <div className="visual-interface-heading">
              <span>overview</span>
              <b>↗</b>
            </div>
            <div className="visual-bars">
              <span style={{ height: "42%" }} />
              <span style={{ height: "68%" }} />
              <span style={{ height: "51%" }} />
              <span style={{ height: "82%" }} />
              <span style={{ height: "61%" }} />
              <span style={{ height: "94%" }} />
            </div>
            <div className="visual-interface-foot">
              <span>Rp 28.450.000</span>
              <i>this month</i>
            </div>
          </div>
        )}
      </div>
      <div className="visual-chip">
        <VisualIcon size={15} strokeWidth={1.8} />
        <span>{project.technologies[0]}</span>
      </div>
      <div className="visual-cursor">
        <MousePointer2 size={13} />
      </div>
    </div>
  );
}

export function PortfolioExperience() {
  const { locale } = useLanguage();
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(primaryProjects[0]?.slug ?? "");
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    await navigator.clipboard?.writeText(siteConfig.githubUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const handlePointer = (event: PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    root.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    window.addEventListener("pointermove", handlePointer, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", handlePointer);
    };
  }, []);

  const currentProject = useMemo(
    () => primaryProjects.find((project) => project.slug === activeProject) ?? primaryProjects[0],
    [activeProject],
  );

  const copy = locale === "id"
    ? {
        availability: "terbuka untuk kolaborasi",
        heroKicker: "FULL-STACK PRODUCT BUILDER / INDONESIA",
        heroTitle: "Software yang terasa",
        heroAccent: "seharusnya.",
        heroBody:
          "Saya merancang dan membangun produk digital yang berguna, aman, dan siap dipakai di dunia nyata.",
        explore: "Lihat karya",
        github: "Buka GitHub",
        signal: "Saat ini fokus pada",
        signalValue: "produk web yang praktis",
        projectsKicker: "selected work / 03",
        projectsTitle: "Yang sudah saya",
        projectsAccent: "kirim.",
        projectsBody: "Tiga proyek yang mewakili cara saya berpikir: jelas, aman, dan dekat dengan kebutuhan pengguna.",
        viewCase: "Baca studi kasus",
        openSource: "Lihat source",
        capabilityKicker: "cara saya membangun",
        capabilityTitle: "Bukan sekadar layar.",
        capabilityBody: "Setiap keputusan visual punya alasan teknis. Setiap keputusan teknis tetap harus terasa manusiawi.",
        aboutKicker: "profile / danish",
        aboutTitle: "Rasa ingin tahu,",
        aboutAccent: "dibuat nyata.",
        aboutBody:
          "Danish adalah full-stack product builder berbasis di Indonesia. Ia nyaman bergerak dari user flow ke database schema, lalu kembali lagi untuk merapikan satu detail kecil di layar.",
        contactKicker: "next chapter",
        contactTitle: "Ada sesuatu yang",
        contactAccent: "perlu dibangun?",
        contactBody: "Kirim konteksnya. Kita mulai dari masalah, bukan dari jargon.",
        contactButton: "Mulai percakapan",
        profile: "profil GitHub",
      }
    : {
        availability: "available for collaboration",
        heroKicker: "FULL-STACK PRODUCT BUILDER / INDONESIA",
        heroTitle: "Software that feels",
        heroAccent: "inevitable.",
        heroBody:
          "I design and build digital products that are useful, secure, and ready for the real world.",
        explore: "Explore work",
        github: "Open GitHub",
        signal: "Currently focused on",
        signalValue: "practical web products",
        projectsKicker: "selected work / 03",
        projectsTitle: "Things I",
        projectsAccent: "ship.",
        projectsBody: "Three projects that show how I think: clear, secure, and close to real user needs.",
        viewCase: "Read case study",
        openSource: "View source",
        capabilityKicker: "how I build",
        capabilityTitle: "More than a screen.",
        capabilityBody: "Every visual decision has a technical reason. Every technical decision still needs to feel human.",
        aboutKicker: "profile / danish",
        aboutTitle: "Curiosity,",
        aboutAccent: "made tangible.",
        aboutBody:
          "Danish is a full-stack product builder based in Indonesia. He is comfortable moving from user flow to database schema, then back again to polish one small detail on screen.",
        contactKicker: "next chapter",
        contactTitle: "Have something",
        contactAccent: "to build?",
        contactBody: "Send the context. We start with the problem, not the jargon.",
        contactButton: "Start a conversation",
        profile: "GitHub profile",
      };

  return (
    <div ref={rootRef} className="portfolio-root">
      <div className="cursor-glow" aria-hidden="true" />
      <div className="ambient ambient-a" aria-hidden="true" />
      <div className="ambient ambient-b" aria-hidden="true" />
      <div className="ambient ambient-c" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />

      <main>
        <section id="top" className="portfolio-hero section-shell">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy reveal is-visible">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              {copy.heroKicker}
            </div>
            <h1>
              {copy.heroTitle}
              <em>{copy.heroAccent}</em>
            </h1>
            <p className="hero-lede">{copy.heroBody}</p>
            <div className="hero-actions">
              <Link href="#work" className="button button-primary">
                <Sparkles size={16} />
                {copy.explore}
                <ArrowDown size={15} />
              </Link>
              <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className="button button-glass">
                <Github size={16} />
                {copy.github}
                <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="hero-signal">
              <span>{copy.signal}</span>
              <strong><i /> {copy.signalValue}</strong>
            </div>
          </div>

          <div className="hero-stage reveal is-visible" style={{ transitionDelay: "140ms" }}>
            <div className="stage-halo" />
            <div className="glass-orb orb-main">
              <div className="orb-refraction" />
              <div className="orb-ring orb-ring-a" />
              <div className="orb-ring orb-ring-b" />
              <span className="orb-monogram">D</span>
              <span className="orb-caption">product<br />builder</span>
            </div>
            <div className="floating-panel panel-top">
              <span className="panel-label"><CircleDot size={11} /> {copy.availability}</span>
              <span className="panel-value">10 <small>public repos</small></span>
            </div>
            <div className="floating-panel panel-bottom">
              <div className="mini-icon"><Zap size={14} /></div>
              <div><span className="panel-label">now building</span><strong>useful things</strong></div>
              <ChevronRight size={16} />
            </div>
            <div className="stage-axis axis-x" />
            <div className="stage-axis axis-y" />
            <div className="stage-tag tag-one">secure by default</div>
            <div className="stage-tag tag-two">built in public</div>
          </div>

          <div className="hero-bottom reveal is-visible" style={{ transitionDelay: "280ms" }}>
            <span>scroll to explore</span>
            <div className="scroll-line"><i /></div>
            <span className="hero-year">2026 / portfolio 01</span>
          </div>
        </section>

        <section className="marquee-band" aria-label="Skills">
          <div className="marquee-track">
            {[...["PRODUCT THINKING", "SECURE SYSTEMS", "FULL-STACK CRAFT", "HUMAN INTERFACES", "PRODUCT THINKING", "SECURE SYSTEMS", "FULL-STACK CRAFT", "HUMAN INTERFACES"]].map((item, index) => (
              <span key={`${item}-${index}`}>{item}<b>✦</b></span>
            ))}
          </div>
        </section>

        <section id="work" className="section-shell work-section">
          <div className="section-heading reveal">
            <div>
              <div className="eyebrow">{copy.projectsKicker}</div>
              <h2>{copy.projectsTitle} <em>{copy.projectsAccent}</em></h2>
            </div>
            <p>{copy.projectsBody}</p>
          </div>

          <div className="project-list">
            {primaryProjects.map((project, index) => {
              const visual = projectVisuals[index];
              const isActive = activeProject === project.slug;
              return (
                <article
                  key={project.slug}
                  className={`project-card reveal ${isActive ? "is-selected" : ""}`}
                  style={revealDelay(index)}
                  onMouseEnter={() => setActiveProject(project.slug)}
                >
                  <div className="project-card-index">0{index + 1}</div>
                  <ProjectVisual project={project} visual={visual} active={isActive} />
                  <div className="project-info">
                    <div className="project-meta">
                      <span>{project.status.replace("-", " ")}</span>
                      <span>{project.startDate ?? "2026"}</span>
                    </div>
                    <h3>{project.name}</h3>
                    <p>{project.tagline}</p>
                    <div className="project-tags">
                      {project.technologies.slice(0, 4).map((technology) => <span key={technology}>{technology}</span>)}
                    </div>
                    <div className="project-actions">
                      <Link href={`/projects/${project.slug}`} className="text-link">
                        {copy.viewCase} <ArrowUpRight size={15} />
                      </Link>
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="icon-link" aria-label={`${copy.openSource}: ${project.name}`}>
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="work-foot reveal">
            <span>more experiments live on GitHub</span>
            <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">view all repositories <ArrowUpRight size={15} /></a>
          </div>
        </section>

        <section id="capabilities" className="section-shell capability-section">
          <div className="section-heading reveal">
            <div>
              <div className="eyebrow">{copy.capabilityKicker}</div>
              <h2>{copy.capabilityTitle}</h2>
            </div>
            <p>{copy.capabilityBody}</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="capability-card reveal" style={revealDelay(index)}>
                  <div className="capability-icon"><Icon size={19} /></div>
                  <span className="capability-eyebrow">{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <div className="capability-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="about" className="section-shell about-section">
          <div className="about-card reveal">
            <div className="about-portrait">
              <div className="portrait-grid" />
              <div className="portrait-ring ring-a" />
              <div className="portrait-ring ring-b" />
              <span className="portrait-letter">D</span>
              <span className="portrait-caption">INDONESIA / 06°12′S</span>
            </div>
            <div className="about-copy">
              <div className="eyebrow">{copy.aboutKicker}</div>
              <h2>{copy.aboutTitle} <em>{copy.aboutAccent}</em></h2>
              <p>{copy.aboutBody}</p>
              <div className="about-facts">
                <span><BriefcaseBusiness size={15} /> 10 projects</span>
                <span><Globe2 size={15} /> Indonesia</span>
                <span><ShieldCheck size={15} /> security-minded</span>
              </div>
              <div className="about-actions">
                <Link href="/about" className="text-link">more about Danish <ArrowUpRight size={15} /></Link>
                <button type="button" className="copy-link" onClick={copyLink}>
                  {copied ? <Check size={15} /> : <MousePointer2 size={15} />}
                  {copied ? "copied" : "copy GitHub link"}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell contact-section">
          <div className="contact-card reveal">
            <div className="contact-spark"><Send size={18} /></div>
            <div>
              <div className="eyebrow">{copy.contactKicker}</div>
              <h2>{copy.contactTitle} <em>{copy.contactAccent}</em></h2>
              <p>{copy.contactBody}</p>
            </div>
            <Link href="/contact" className="button button-primary">
              <Mail size={16} />
              {copy.contactButton}
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>

        <section className="section-shell now-section">
          <div className="now-row reveal">
            <div className="now-label"><span className="eyebrow">now / 2026</span><i /></div>
            <p>Designing systems that make complex work feel <strong>quietly simple.</strong></p>
            <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">{copy.profile} <ArrowUpRight size={15} /></a>
          </div>
        </section>
      </main>
    </div>
  );
}
