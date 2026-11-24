"use client";

import { useEffect, useState } from "react";

/**
 * `hidden` is true while the visitor scrolls down past `threshold` and false
 * as soon as they scroll up. `scrolled` is true whenever the page is off the
 * very top.
 */
export function useHideOnScroll(threshold = 120) {
  const [state, setState] = useState({ hidden: false, scrolled: false });

  useEffect(() => {
    let last = window.scrollY;
    let hidden = false;
    let queued = false;
    const update = () => {
      queued = false;
      const y = window.scrollY;
      // An event without movement (smooth scrolling settling) keeps the
      // current direction.
      if (y !== last) hidden = y > threshold && y > last;
      else if (y <= threshold) hidden = false;
      last = y;
      const next = { hidden, scrolled: y > 0 };
      setState((prev) =>
        prev.hidden === next.hidden && prev.scrolled === next.scrolled ? prev : next,
      );
    };
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return state;
}
