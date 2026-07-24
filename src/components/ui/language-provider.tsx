"use client";

import { createContext, useContext, useState, useSyncExternalStore } from "react";
import { defaultLocale, type Locale, type Messages } from "@/messages";
import { en } from "@/messages/en";
import { id } from "@/messages/id";

const allMessages = { en, id } as const;

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: Messages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Sync external store for locale
function getLocaleSnapshot() {
  if (typeof window === "undefined") return defaultLocale;
  return (localStorage.getItem("locale") as Locale) || defaultLocale;
}

function getServerSnapshot() {
  return defaultLocale;
}

function subscribeLocale(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribeLocale, getLocaleSnapshot, getServerSnapshot);
  const [, forceUpdate] = useState({});

  const setLocale = (newLocale: Locale) => {
    localStorage.setItem("locale", newLocale);
    document.documentElement.lang = newLocale;
    // Force re-render to pick up new locale
    forceUpdate({});
  };

  const messages = allMessages[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, messages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function getLocaleDisplayName(locale: Locale): string {
  return locale === "en" ? "EN" : "ID";
}
