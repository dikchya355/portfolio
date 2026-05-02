"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { navItems } from "./data";

export function SiteFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const revealItems = document.querySelectorAll<HTMLElement>(".reveal");
    let scrollFrame = 0;

    const updateScroll = () => {
      root.style.setProperty("--scroll-y", `${window.scrollY}`);
      scrollFrame = 0;
    };

    const onScroll = () => {
      if (!scrollFrame) {
        scrollFrame = window.requestAnimationFrame(updateScroll);
      }
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
        });
      },
      { threshold: 0.18 },
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      revealObserver.disconnect();
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  return (
    <main className="portfolio-shell">
      <div className="ambient-layer" aria-hidden="true">
        <div className="ambient-grid" />
      </div>

      <nav className="site-nav">
        <Link className="brand" href="/" aria-label="Dikchya Rai home">
          Dikchya<span>Rai</span>
        </Link>

        <div className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              className={`nav-link ${pathname === item.href ? "active" : ""}`}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <button
        aria-label="Close menu"
        className={`mobile-menu-backdrop ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
        type="button"
      />

      <aside
        aria-hidden={!menuOpen}
        aria-label="Mobile navigation"
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
      >
        <div>
          <Link className="brand" href="/" onClick={() => setMenuOpen(false)}>
            Dikchya<span>Rai</span>
          </Link>
          <p>Undergraduate portfolio</p>
        </div>

        <div className="mobile-menu-links">
          {navItems.map((item) => (
            <Link
              className={pathname === item.href ? "active" : ""}
              href={item.href}
              key={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a
          className="mobile-menu-contact"
          href="mailto:dikchya.official1989@gmail.com"
        >
          dikchya.official1989@gmail.com
        </a>
      </aside>

      {children}

      <footer className="site-footer">
        <div className="footer-panel">
          <div className="footer-brand-block">
            <Link className="brand" href="/">
              Dikchya<span>Rai</span>
            </Link>
            <p className="footer-kicker">Undergraduate Portfolio</p>
            <h2>Learning, research, and creative digital work.</h2>
          </div>

          <div className="footer-column">
            <p className="footer-heading">Pages</p>
            <div className="footer-links">
              {navItems.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-contact">
            <p className="footer-heading">Contact</p>
            <span>Open to opportunities</span>
            <a href="mailto:dikchya.official1989@gmail.com">
              dikchya.official1989@gmail.com
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Dikchya Rai. All rights reserved.</p>
          <Link href="/contact">Start a conversation</Link>
        </div>
      </footer>
    </main>
  );
}
