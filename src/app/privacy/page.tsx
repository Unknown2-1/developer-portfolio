"use client";

import { useLanguage } from "@/components/ui/language-provider";

export default function PrivacyPage() {
  const { messages } = useLanguage();
  const privacy = messages.privacy;

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {privacy.title}
          </h1>
        </header>

        {/* Content */}
        <div className="prose">
          <p className="text-lg text-muted-foreground">{privacy.intro}</p>

          <ul>
            {privacy.points.map((point: string, index: number) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <p>{privacy.contact}</p>
        </div>
      </div>
    </div>
  );
}
