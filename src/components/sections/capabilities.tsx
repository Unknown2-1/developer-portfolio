"use client";

import type { ReactElement } from "react";
import { useLanguage } from "@/components/ui/language-provider";

type IconKey = "layout" | "server" | "database" | "shield" | "cloud" | "code" | "terminal" | "layers";

const icons: Record<IconKey, ReactElement> = {
  layout: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  ),
  server: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  ),
  database: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  ),
  shield: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  cloud: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  ),
  code: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  terminal: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m4 17 6-6-6-6" />
      <path d="M12 19h8" />
    </svg>
  ),
  layers: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 12.59-7.19 3.62a2 2 0 0 1-1.66 0L2.12 12.6" />
      <path d="m22 17.59-7.19 3.62a2 2 0 0 1-1.66 0L2.12 17.6" />
    </svg>
  ),
};

export function Capabilities() {
  const { messages } = useLanguage();
  const caps = messages.capabilities;

  const categories = [
    {
      title: caps.frontend,
      items: caps.frontendItems,
      icon: icons.layout,
      gradient: "from-violet-500 to-purple-500",
    },
    {
      title: caps.backend,
      items: caps.backendItems,
      icon: icons.server,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: caps.data,
      items: caps.dataItems,
      icon: icons.database,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: caps.security,
      items: caps.securityItems,
      icon: icons.shield,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: caps.infrastructure,
      items: caps.infrastructureItems,
      icon: icons.cloud,
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      <div className="gradient-orb gradient-orb-primary w-[400px] h-[400px] top-0 -left-40 opacity-30" />
      <div className="gradient-orb gradient-orb-secondary w-[300px] h-[300px] bottom-0 -right-20 opacity-20" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-accent-secondary mb-4 animate-fade-in">
            What I Do
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in-delay-1">
            <span className="gradient-text">{caps.title}</span>
          </h2>
          <div className="mt-6 mx-auto max-w-2xl">
            <p className="text-muted-foreground text-lg">
              {caps.subtitle}
            </p>
          </div>
        </div>

        {/* Capabilities grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              {/* Card with gradient border on hover */}
              <div className="relative h-full rounded-2xl p-6 glass-card hover-lift transition-all duration-300">
                {/* Gradient accent line */}
                <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-${category.gradient.split(' ')[0]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 bg-gradient-to-br ${category.gradient} text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 group-hover:text-accent-primary transition-colors">
                  {category.title}
                </h3>

                {/* Skills list */}
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-muted-foreground group/item"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${category.gradient} opacity-70 group-hover/item:opacity-100 transition-opacity`} />
                      <span className="group-hover/item:text-foreground transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack showcase */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">
            Technologies I work with
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Tailwind CSS', 'GraphQL', 'Redis', 'Git'].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-sm font-medium glass-card-light hover:bg-accent/50 transition-colors cursor-default"
                style={{ animationDelay: `${0.9 + index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
