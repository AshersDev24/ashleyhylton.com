// src/components/hero/CodeTypewriter.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { usePrefersReducedMotion } from "@/components/hero/usePrefersReducedMotion";

export default function CodeTypewriter({
  text,
  speedMs = 14,
  pauseMs = 1200,
}: {
  text: string;
  speedMs?: number;
  pauseMs?: number;
}) {
  const reduced = usePrefersReducedMotion();
  const [count, setCount] = useState(reduced ? text.length : 0);

  const content = useMemo(() => text.slice(0, count), [text, count]);

  useEffect(() => {
    if (reduced) return;

    let t: number | null = null;
    let i: number | null = null;

    if (count < text.length) {
      i = window.setInterval(() => {
        setCount((c) => (c < text.length ? c + 1 : c));
      }, speedMs);
    } else {
      t = window.setTimeout(() => setCount(0), pauseMs);
    }

    return () => {
      if (i) window.clearInterval(i);
      if (t) window.clearTimeout(t);
    };
  }, [count, pauseMs, reduced, speedMs, text.length]);

  return (
    <pre className="whitespace-pre-wrap font-mono text-[11px] leading-[1.85] md:text-[12px]">
      <span style={{ color: "#A6E22E" }}>{content}</span>
      {!reduced ? (
        <span className="type-caret" style={{ color: "#F8F8F2" }}>
          ▍
        </span>
      ) : null}
    </pre>
  );
}
