"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function IconMenu() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 7h16"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M4 12h16"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M4 17h16"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconClose() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 6l12 12"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const items = useMemo(() => {
    return links.map((l) => ({ ...l, active: isActive(pathname, l.href) }));
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link
          href="/"
          className="site-brand"
          aria-label="Go to home"
          onClick={() => setOpen(false)}
        >
          <span className="site-brand-avatar">
            <Image
              src="/images/me.jpg"
              alt="Ashley Hylton"
              fill
              sizes="36px"
              className="object-cover"
              priority
            />
          </span>
          <span className="site-brand-text">
            <span className="site-brand-name">Ashley Hylton</span>
            <span className="site-brand-sub">Full-Stack Developer</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {items.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`site-nav-link ${l.active ? "is-active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="site-burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {open ? (
        <div className="site-mobile-overlay" role="dialog" aria-modal="true">
          <button
            type="button"
            className="site-mobile-backdrop"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div className="site-mobile-panel">
            <div className="site-mobile-title">Menu</div>
            <div className="site-mobile-links">
              {items.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`site-mobile-link ${l.active ? "is-active" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
