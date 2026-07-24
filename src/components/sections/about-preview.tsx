"use client";

import { useLanguage } from "@/components/ui/language-provider";
import { LinkButton } from "@/components/ui/button";

export function AboutPreview() {
  const { messages } = useLanguage();
  const about = messages.about;

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      <div className="gradient-orb gradient-orb-secondary w-[500px] h-[500px] -right-40 top-0 opacity-20" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <span className="inline-block text-xs font-medium uppercase tracking-widest text-accent-primary mb-4">
                About Me
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                <span className="gradient-text">{about.title}</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>{about.intro}</p>
              <p>{about.approach}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <LinkButton href="/about" variant="primary" size="lg" className="group">
                Learn More About Me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </LinkButton>
            </div>
          </div>

          {/* Right: Tech stack visual */}
          <div className="animate-fade-in-delay-2">
            <div className="relative">
              {/* Card */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Tech Stack
                </h3>

                {/* Tech categories */}
                <div className="space-y-6">
                  {/* Frontend */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-violet-500" />
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Frontend</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Next.js', 'React', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg text-sm font-medium bg-card border border-border/50 hover:border-violet-500/50 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Backend</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'ASP.NET Core', 'Laravel', 'PostgreSQL'].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg text-sm font-medium bg-card border border-border/50 hover:border-blue-500/50 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* DevOps */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">DevOps & Cloud</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Docker', 'AWS', 'CI/CD', 'Linux'].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg text-sm font-medium bg-card border border-border/50 hover:border-emerald-500/50 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-accent-primary/20 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-accent-secondary/20 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
