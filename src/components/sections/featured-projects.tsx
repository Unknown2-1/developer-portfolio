"use client";

import { useLanguage } from "@/components/ui/language-provider";
import { LinkButton } from "@/components/ui/button";
import { getFeaturedProjects, getStatusLabel } from "@/config/projects";

export function FeaturedProjects() {
  const { messages } = useLanguage();
  const projects = getFeaturedProjects();

  return (
    <section className="py-20 sm:py-28 relative">
      {/* Section background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-accent-primary mb-4 animate-fade-in">
            {messages.projects.subtitle}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in-delay-1">
            <span className="gradient-text">{messages.projects.title}</span>
          </h2>
          <div className="mt-6 mx-auto max-w-2xl">
            <p className="text-muted-foreground text-lg">
              {messages.projects.subtitle}
            </p>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              {/* Card */}
              <div className="relative glass-card rounded-2xl overflow-hidden hover-lift transition-all duration-500">
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary" />
                </div>

                {/* Screenshot container */}
                <div className="relative aspect-video overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />

                  {project.screenshots.desktop ? (
                    <img
                      src={project.screenshots.desktop}
                      alt={project.screenshots.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-accent-primary/20 via-accent-secondary/20 to-accent-tertiary/20 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-card/80 flex items-center justify-center backdrop-blur-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="text-accent-primary"
                        >
                          <path d="m18 16 4-4-4-4" />
                          <path d="m6 8-4 4 4 4" />
                          <path d="m14.5 4-5 16" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Project number badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm text-sm font-bold border border-border/50">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6 z-20 -mt-12">
                  {/* Status badge */}
                  <div className="mb-4 flex items-center gap-3">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                      project.status === "live"
                        ? "status-live"
                        : project.status === "in-development"
                        ? "status-development"
                        : "status-archived"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        project.status === "live" ? "bg-emerald-400" : "bg-accent-primary"
                      }`} />
                      {getStatusLabel(project.status)}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.role}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 group-hover:text-accent-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.tagline}
                  </p>

                  {/* Tech stack */}
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-md bg-secondary/80 px-2.5 py-1 text-xs font-medium text-secondary-foreground backdrop-blur-sm border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="inline-flex items-center rounded-md bg-secondary/80 px-2.5 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm border border-border/50">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-3">
                    <LinkButton
                      href={`/projects/${project.slug}`}
                      variant="primary"
                      size="sm"
                      className="group/btn"
                    >
                      View Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1.5 transition-transform group-hover/btn:translate-x-0.5"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </LinkButton>
                    <LinkButton
                      href={project.githubUrl}
                      variant="ghost"
                      size="sm"
                      external
                      className="group/btn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-1.5"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Source
                    </LinkButton>
                  </div>
                </div>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-accent-primary/20 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-accent-secondary/20 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </article>
          ))}
        </div>

        {/* View all projects CTA */}
        <div className="mt-16 text-center">
          <LinkButton href="/projects" variant="outline" size="lg" className="group">
            View All Projects
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
    </section>
  );
}
