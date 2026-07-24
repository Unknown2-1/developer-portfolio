import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-topline" />
      <div className="footer-main">
        <div className="footer-brand">
          <span className="brand-mark">D</span>
          <div>
            <strong>danish<span>®</span></strong>
            <p>Full-stack product builder<br />based in Indonesia.</p>
          </div>
        </div>
        <div className="footer-links">
          <span className="footer-label">navigate</span>
          <Link href="/#work">Selected work <ArrowUpRight size={13} /></Link>
          <Link href="/about">About Danish <ArrowUpRight size={13} /></Link>
          <Link href="/contact">Start a conversation <ArrowUpRight size={13} /></Link>
        </div>
        <div className="footer-links">
          <span className="footer-label">elsewhere</span>
          <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer"><Github size={14} /> GitHub <ArrowUpRight size={13} /></a>
          <a href="https://github.com/Unknown2-1/developer-portfolio" target="_blank" rel="noreferrer">Source code <ArrowUpRight size={13} /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Danish. Crafted with intent.</span>
        <span>INDONESIA / UTC+7</span>
      </div>
    </footer>
  );
}
