"use client";

import { useLanguage } from "@/components/ui/language-provider";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  const { messages } = useLanguage();
  const about = messages.about;

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {about.title}
          </h1>
        </header>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {about.intro}
            </p>
          </section>

          {/* Approach */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Approach</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {about.approach}
            </p>
          </section>

          {/* Tech Stack */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Tech Stack</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {about.stack}
            </p>
          </section>

          {/* Interests */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Interests</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {about.interests}
            </p>
          </section>

          {/* Current Stack */}
          <section>
            <h2 className="mb-6 text-2xl font-semibold">Current Stack</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                </div>
                <h3 className="mb-2 font-semibold">Frontend</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Next.js</li>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                    <line x1="6" x2="6.01" y1="6" y2="6" />
                    <line x1="6" x2="6.01" y1="18" y2="18" />
                  </svg>
                </div>
                <h3 className="mb-2 font-semibold">Backend</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>ASP.NET Core</li>
                  <li>Laravel</li>
                  <li>REST API</li>
                  <li>Authentication</li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                    <path d="M3 12A9 3 0 0 0 21 12" />
                  </svg>
                </div>
                <h3 className="mb-2 font-semibold">Data</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>PostgreSQL</li>
                  <li>SQLite</li>
                  <li>Entity Framework Core</li>
                  <li>Database Migrations</li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="mb-2 font-semibold">Security</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Encryption</li>
                  <li>Secure File Access</li>
                  <li>Audit Logs</li>
                  <li>Input Validation</li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-semibold">Infrastructure</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Docker</li>
                  <li>GitHub Actions</li>
                  <li>Linux</li>
                  <li>Vercel</li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-semibold">Quality</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Automated Testing</li>
                  <li>Code Review</li>
                  <li>Type Safety</li>
                  <li>Accessibility</li>
                </ul>
              </div>
            </div>
          </section>

          {/* GitHub */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">GitHub</h2>
            <p className="mb-4 text-muted-foreground">
              You can find more of my work on GitHub:
            </p>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              {siteConfig.githubUrl.replace("https://", "")}
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
