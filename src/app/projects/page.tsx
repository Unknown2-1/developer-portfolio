"use client";

import { useLanguage } from "@/components/ui/language-provider";
import { LinkButton } from "@/components/ui/button";
import { projects, getStatusLabel } from "@/config/projects";

export default function ProjectsPage() {
  const { messages } = useLanguage();

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {messages.nav.projects}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            {messages.projects.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg"
            >
              {/* Screenshot */}
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                {project.screenshots.desktop ? (
                  <img
                    src={project.screenshots.desktop}
                    alt={project.screenshots.alt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {project.name}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      project.status === "live"
                        ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
                        : project.status === "completed"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                        : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                    }`}
                  >
                    {getStatusLabel(project.status)}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {project.role}
                  </span>
                  {project.startDate && (
                    <span className="text-xs text-muted-foreground">
                      {project.startDate}
                    </span>
                  )}
                </div>

                <h2 className="mb-2 text-xl font-semibold">{project.name}</h2>
                <p className="mb-4 text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-3">
                  <LinkButton href={`/projects/${project.slug}`} variant="primary" size="sm">
                    {messages.projects.viewCaseStudy}
                  </LinkButton>
                  <LinkButton
                    href={project.githubUrl}
                    variant="outline"
                    size="sm"
                    external
                  >
                    {messages.projects.sourceCode}
                  </LinkButton>
                  {project.liveUrl && (
                    <LinkButton
                      href={project.liveUrl}
                      variant="ghost"
                      size="sm"
                      external
                    >
                      {messages.projects.liveDemo}
                    </LinkButton>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
