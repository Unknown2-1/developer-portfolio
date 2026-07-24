"use client";

import { useLanguage } from "@/components/ui/language-provider";

interface StepData {
  title: string;
  description: string;
}

export function DevelopmentProcess() {
  const { messages } = useLanguage();
  const process = messages.process;

  const steps: { key: keyof typeof process; number: string; icon: string }[] = [
    { key: "step1", number: "01", icon: "💡" },
    { key: "step2", number: "02", icon: "📐" },
    { key: "step3", number: "03", icon: "⚡" },
    { key: "step4", number: "04", icon: "🔧" },
    { key: "step5", number: "05", icon: "🚀" },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-accent-tertiary mb-4 animate-fade-in">
            How I Work
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in-delay-1">
            <span className="gradient-text">{process.title}</span>
          </h2>
          <div className="mt-6 mx-auto max-w-2xl">
            <p className="text-muted-foreground text-lg">
              {process.subtitle}
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid gap-8 md:grid-cols-5">
            {steps.map((step, index) => {
              const stepData = process[step.key] as StepData;
              return (
                <div
                  key={step.key}
                  className="relative text-center animate-fade-in"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  {/* Step card */}
                  <div className="relative glass-card rounded-2xl p-6 hover-lift transition-all duration-300">
                    {/* Step number badge */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full glass-card-light text-xs font-mono font-bold">
                        <span className="text-accent-primary">{step.number}</span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mb-4 flex justify-center pt-2">
                      <span className="text-4xl">{step.icon}</span>
                    </div>

                    {/* Content */}
                    <h3 className="text-base font-semibold mb-2">{stepData.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {stepData.description}
                    </p>
                  </div>

                  {/* Arrow connector (hidden on last and mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2">
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
                        className="text-muted-foreground"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
