import Link from "next/link";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  return (
    <header className="top">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="wrap">
        <Link className="brand" href="/">
          ashleyhylton<span className="muted">.com</span>
        </Link>
        <nav className="nav" aria-label="Main">
          <NavLinks />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
