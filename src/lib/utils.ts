import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLocaleFromPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];
  if (firstSegment === "en" || firstSegment === "id") {
    return firstSegment;
  }
  return "en";
}

export function getPathWithoutLocale(pathname: string): string {
  const locale = getLocaleFromPath(pathname);
  if (locale === "en" || locale === "id") {
    return "/" + pathname.split("/").slice(2).join("/");
  }
  return pathname;
}
