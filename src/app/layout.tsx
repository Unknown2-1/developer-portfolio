import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { LanguageProvider } from "@/components/ui/language-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/config/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.role + " | " + siteConfig.displayName,
    template: `%s | ${siteConfig.displayName}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      id: "/",
    },
  },
  authors: [{ name: siteConfig.displayName }],
  creator: siteConfig.displayName,
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "id_ID",
    url: siteConfig.siteUrl,
    siteName: siteConfig.displayName,
    title: siteConfig.role + " | " + siteConfig.displayName,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.role + " | " + siteConfig.displayName,
    description: siteConfig.description,
    creator: "@Unknown2_1",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${firaCode.variable} min-h-screen flex flex-col antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>
            {/* Noise overlay for texture */}
            <div className="noise-overlay" aria-hidden="true" />

            <a
              href="#main-content"
              className="skip-to-content"
            >
              Skip to main content
            </a>
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
