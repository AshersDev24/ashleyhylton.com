"use client";

import { useHideOnScroll } from "./useHideOnScroll";

/** The fixed site header: slides away on scroll down, back on scroll up. */
export function HeaderShell({ children }: { children: React.ReactNode }) {
  const { hidden, scrolled } = useHideOnScroll();
  return (
    <header className="top" data-hidden={hidden} data-scrolled={scrolled}>
      {children}
    </header>
  );
}
