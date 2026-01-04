// src/components/hero/HeroMarquee.tsx
"use client";

import { usePrefersReducedMotion } from "@/components/hero/usePrefersReducedMotion";
import TechPill from "@/components/ui/TechPill";

export default function HeroMarquee({ items }: { items: string[] }) {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="marquee-fade">
      <div
        className="marquee-track"
        style={{
          animation: reduced ? "none" : "marquee 38s linear infinite",
          transform: "translate3d(0,0,0)",
        }}
      >
        {[...items, ...items, ...items].map((t, idx) => (
          <TechPill key={`${t}-${idx}`} label={t} />
        ))}
      </div>
    </div>
  );
}
