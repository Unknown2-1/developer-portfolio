"use client";

import Link from "next/link";
import { useLanguage } from "@/components/ui/language-provider";

export default function NotFound() {
  const { messages } = useLanguage();

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16">
      <div className="text-center">
        <p className="mb-4 font-mono text-6xl font-bold text-muted-foreground/30">
          404
        </p>
        <h1 className="mb-4 text-3xl font-bold tracking-tight">
          {messages.common.notFound}
        </h1>
        <p className="mb-8 max-w-md mx-auto text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {messages.common.backHome}
        </Link>
      </div>
    </div>
  );
}
