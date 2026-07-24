"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/components/ui/language-provider";
import { LinkButton } from "@/components/ui/button";
import { getProjectBySlug, getStatusLabel } from "@/config/projects";
import { notFound } from "next/navigation";

export default function ProjectCaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { messages } = useLanguage();

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
          {messages.nav.projects}
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                project.status === "live"
                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
                  : project.status === "completed"
                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                  : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
              }`}
            >
              {getStatusLabel(project.status)}
            </span>
            <span className="text-sm text-muted-foreground">{project.role}</span>
            {project.startDate && (
              <span className="text-sm text-muted-foreground">{project.startDate}</span>
            )}
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {project.name}
          </h1>
          <p className="text-xl text-muted-foreground">{project.tagline}</p>

          {/* Links */}
          <div className="mt-6 flex flex-wrap gap-3">
            <LinkButton href={project.githubUrl} variant="primary" external>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              {messages.projects.sourceCode}
            </LinkButton>
            {project.liveUrl && (
              <LinkButton href={project.liveUrl} variant="outline" external>
                {messages.projects.liveDemo}
              </LinkButton>
            )}
          </div>
        </header>

        {/* Screenshot */}
        {project.screenshots.desktop && (
          <div className="mb-12 overflow-hidden rounded-xl border border-border">
            <img
              src={project.screenshots.desktop}
              alt={project.screenshots.alt}
              className="w-full"
            />
          </div>
        )}

        {/* Test Status */}
        {(project.testStatus || project.buildStatus) && (
          <div className="mb-12 grid gap-4 sm:grid-cols-2">
            {project.buildStatus && (
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="mb-1 text-sm font-medium text-muted-foreground">
                  {messages.projects.buildStatus}
                </p>
                <p className="font-mono text-sm">{project.buildStatus}</p>
              </div>
            )}
            {project.testStatus && (
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="mb-1 text-sm font-medium text-muted-foreground">
                  {messages.projects.testStatus}
                </p>
                <p className="font-mono text-sm">{project.testStatus}</p>
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="prose">
          {/* Problem */}
          <section className="mb-12">
            <h2>{messages.projects.problem}</h2>
            <p>{project.problem}</p>
          </section>

          {/* Solution */}
          <section className="mb-12">
            <h2>{messages.projects.solution}</h2>
            <p>{project.solution}</p>
          </section>

          {/* Features */}
          {project.features.length > 0 && (
            <section className="mb-12">
              <h2>{messages.projects.features}</h2>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Challenges */}
          {project.challenges.length > 0 && (
            <section className="mb-12">
              <h2>{messages.projects.challenges}</h2>
              <ul>
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Security Highlights */}
          {project.securityHighlights.length > 0 && (
            <section className="mb-12">
              <h2>{messages.projects.securityHighlights}</h2>
              <ul>
                {project.securityHighlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Technology Stack */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">{messages.projects.technologies}</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <div className="mt-12 flex justify-between border-t border-border pt-8">
          <LinkButton href="/projects" variant="outline">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            {messages.nav.projects}
          </LinkButton>
          <LinkButton href="/contact" variant="outline">
            {messages.nav.contact}
          </LinkButton>
        </div>
      </div>
    </article>
  );
}
