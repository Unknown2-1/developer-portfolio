"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/ui/language-provider";
import { LinkButton } from "@/components/ui/button";

export function Hero() {
  const { messages } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xOffset = (clientX - innerWidth / 2) / innerWidth;
      const yOffset = (clientY - innerHeight / 2) / innerHeight;

      const orbs = heroRef.current.querySelectorAll('.gradient-orb');
      orbs.forEach((orb, index) => {
        const factor = (index + 1) * 15;
        const direction = index % 2 === 0 ? 1 : -1;
        (orb as HTMLElement).style.transform = `translate(${xOffset * factor * direction}px, ${yOffset * factor * direction}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden py-20 sm:py-28 lg:py-32">
      {/* Background gradient orbs */}
      <div className="gradient-orb gradient-orb-primary w-[600px] h-[600px] -top-40 -left-40 animate-float" />
      <div className="gradient-orb gradient-orb-secondary w-[500px] h-[500px] top-1/2 -right-20 animate-float-delayed" />
      <div className="gradient-orb gradient-orb-accent w-[400px] h-[400px] bottom-0 left-1/3 animate-float" style={{ animationDelay: '4s' }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="animate-fade-in mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-1.5 text-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-muted-foreground">{messages.hero.location}</span>
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl animate-fade-in-delay-1">
                <span className="text-muted-foreground">{messages.hero.greeting}</span>
                <br />
                <span className="gradient-text">{messages.hero.name}</span>
              </h1>

              <p className="text-2xl sm:text-3xl lg:text-4xl font-medium animate-fade-in-delay-2">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  {messages.hero.role}
                </span>
              </p>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-in-delay-3">
              {messages.hero.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-delay-4">
              <LinkButton href="/projects" variant="primary" size="lg" className="group">
                {messages.hero.viewProjects}
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
              <LinkButton
                href="https://github.com/Unknown2-1"
                variant="outline"
                size="lg"
                external
                className="group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                {messages.hero.github}
              </LinkButton>
              <LinkButton href="/contact" variant="ghost" size="lg" className="group">
                {messages.hero.contact}
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
                  className="ml-2 opacity-70 group-hover:opacity-100"
                >
                  <path d="M7 10v12" />
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                </svg>
              </LinkButton>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-8 animate-fade-in-delay-4">
              <div>
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="w-px bg-border" />
              <div>
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="w-px bg-border" />
              <div>
                <div className="text-3xl font-bold gradient-text">Full Stack</div>
                <div className="text-sm text-muted-foreground">Developer</div>
              </div>
            </div>
          </div>

          {/* Right: Code snippet / Visual element */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in-delay-2">
            <div className="relative">
              {/* Floating code card */}
              <div className="glass-card rounded-2xl p-6 max-w-md hover-lift">
                {/* Terminal header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-muted-foreground ml-2">portfolio.ts</span>
                </div>

                {/* Code content */}
                <div className="font-mono text-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">const</span>
                    <span className="text-blue-400">developer</span>
                    <span className="text-white"> = </span>
                    <span className="text-amber-400">{'{'}</span>
                  </div>
                  <div className="flex items-center gap-2 pl-4">
                    <span className="text-emerald-400">name</span>
                    <span className="text-white">:</span>
                    <span className="text-cyan-400">&quot;Danish&quot;</span>
                  </div>
                  <div className="flex items-center gap-2 pl-4">
                    <span className="text-emerald-400">role</span>
                    <span className="text-white">:</span>
                    <span className="text-cyan-400">&quot;Full Stack Developer&quot;</span>
                  </div>
                  <div className="flex items-center gap-2 pl-4">
                    <span className="text-emerald-400">skills</span>
                    <span className="text-white">:</span>
                    <span className="text-amber-400">[</span>
                    <span className="text-cyan-400">&quot;React&quot;</span>
                    <span className="text-white">,</span>
                    <span className="text-cyan-400">&quot;Node.js&quot;</span>
                    <span className="text-white">,</span>
                    <span className="text-cyan-400">&quot;TypeScript&quot;</span>
                    <span className="text-amber-400">]</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">{'}'}</span>
                    <span className="text-white">;</span>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-purple-400">export</span>
                    <span className="text-purple-400">default</span>
                    <span className="text-blue-400">developer</span>
                    <span className="text-white">;</span>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass-card-light rounded-lg px-3 py-2 text-xs font-medium animate-float">
                <span className="text-emerald-400">●</span> Available for work
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card-light rounded-lg px-3 py-2 text-xs font-medium animate-float-delayed">
                <span className="gradient-text">5+ Technologies</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1s' }}>
        <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll</span>
        <div className="w-6 h-10 border-2 border-border/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
