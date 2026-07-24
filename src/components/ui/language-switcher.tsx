"use client";

import { useLanguage, getLocaleDisplayName } from "./language-provider";
import { cn } from "@/lib/utils";
import { locales, type Locale } from "@/messages";

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { locale, setLocale, messages } = useLanguage();

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => setLocale(loc)}
          className={cn(
            "px-2 py-1 text-sm font-medium rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            locale === loc
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
          )}
          aria-label={`${messages.accessibility.switchLanguage}: ${loc}`}
          aria-current={locale === loc ? "page" : undefined}
        >
          {getLocaleDisplayName(loc)}
        </button>
      ))}
    </div>
  );
}
