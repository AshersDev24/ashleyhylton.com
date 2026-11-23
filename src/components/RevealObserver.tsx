"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Adds `is-in` to each `[data-reveal]` element the first time any part of
 * it is in view. The hidden starting state lives in CSS under `html.js` and
 * `prefers-reduced-motion: no-preference`, so nothing is hidden without
 * JavaScript or with reduced motion. Re-scans on every client navigation,
 * since the layout (and this component) stays mounted.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Tells the inline head script the reveal is running (see theme.ts).
    document.documentElement.dataset.revealReady = "1";
    const targets = document.querySelectorAll("[data-reveal]:not(.is-in)");
    if (typeof IntersectionObserver !== "function") {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      // Any part in view counts, so a tall block (a case study's prose)
      // that starts above the fold is never left hidden.
      { rootMargin: "0px 0px -8% 0px" },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
