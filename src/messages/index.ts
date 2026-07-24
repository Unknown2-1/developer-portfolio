import { en, type Messages } from "./en";
import { id } from "./id";

export { en } from "./en";
export { id } from "./id";
export type { Messages };

export const messages = { en, id } as const;
export type Locale = keyof typeof messages;
export type MessageKey = keyof (typeof messages)["en"];

export const defaultLocale: Locale = "en";
export const locales = ["en", "id"] as const;
export const localeNames: Record<Locale, string> = {
  en: "English",
  id: "Bahasa Indonesia",
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
