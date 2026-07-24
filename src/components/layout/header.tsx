"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { useLanguage } from "@/components/ui/language-provider";
import { siteConfig } from "@/config/site";

export function Header() {
  const pathname = usePathname();
  const { locale } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const links = [
    { href: "/", label: locale === "id" ? "Beranda" : "Home" },
    { href: "/#work", label: locale === "id" ? "Karya" : "Work" },
    { href: "/#about", label: locale === "id" ? "Profil" : "About" },
    { href: "/#contact", label: locale === "id" ? "Kontak" : "Contact" },
  ];

  return (
    <header className="site-header">
      <div className="site-nav">
        <Link href="/" className="brand-lockup" aria-label="Danish home">
          <span className="brand-mark">D</span>
          <span className="brand-name">danish<span>®</span></span>
        </Link>

        <nav className={`site-links ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={pathname === link.href ? "is-active" : ""}>
              {link.label}
            </Link>
          ))}
          <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className="nav-github">
            GitHub <ArrowUpRight size={13} />
          </a>
          <div className="mobile-controls">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </nav>

        <div className="nav-controls">
          <ThemeSwitcher className="desktop-control" />
          <LanguageSwitcher className="desktop-control" />
          <button
            type="button"
            className="mobile-menu-button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
