import React from "react";
import {
  IconDb,
  IconMobile,
  IconReact,
  IconServer,
  IconTool,
} from "@/components/ui/icons";

type PillStyle = {
  fg: string;
  bg: string;
  bd: string;
  glow: string;
  icon: React.ReactNode;
};

function pillVariant(label: string): PillStyle {
  const l = label.toLowerCase();

  if (l.includes("react") && !l.includes("native")) {
    return {
      fg: "#61DAFB",
      bg: "rgba(97,218,251,0.14)",
      bd: "rgba(97,218,251,0.26)",
      glow: "rgba(97,218,251,0.14)",
      icon: <IconReact />,
    };
  }

  if (
    l.includes("expo") ||
    l.includes("react native") ||
    l.includes("mobile")
  ) {
    return {
      fg: "#A78BFA",
      bg: "rgba(167,139,250,0.14)",
      bd: "rgba(167,139,250,0.26)",
      glow: "rgba(167,139,250,0.14)",
      icon: <IconMobile />,
    };
  }

  if (
    l.includes("appwrite") ||
    l.includes("node") ||
    l.includes("server") ||
    l.includes("functions")
  ) {
    return {
      fg: "#F472B6",
      bg: "rgba(244,114,182,0.14)",
      bd: "rgba(244,114,182,0.26)",
      glow: "rgba(244,114,182,0.14)",
      icon: <IconServer />,
    };
  }

  if (
    l.includes("mysql") ||
    l.includes("db") ||
    l.includes("database") ||
    l.includes("data")
  ) {
    return {
      fg: "#34D399",
      bg: "rgba(52,211,153,0.14)",
      bd: "rgba(52,211,153,0.26)",
      glow: "rgba(52,211,153,0.14)",
      icon: <IconDb />,
    };
  }

  if (
    l.includes("figma") ||
    l.includes("phpstorm") ||
    l.includes("gitlab") ||
    l.includes("github") ||
    l.includes("ci")
  ) {
    return {
      fg: "#F3BD68",
      bg: "rgba(243,189,104,0.14)",
      bd: "rgba(243,189,104,0.28)",
      glow: "rgba(243,189,104,0.14)",
      icon: <IconTool />,
    };
  }

  return {
    fg: "var(--text)",
    bg: "rgba(23,37,49,0.18)",
    bd: "rgba(244,246,247,0.16)",
    glow: "rgba(244,246,247,0.06)",
    icon: <IconTool />,
  };
}

export function TechPill({ label }: { label: string }) {
  const v = pillVariant(label);

  return (
    <span
      className="marquee-pill"
      style={
        {
          "--pillFg": v.fg,
          "--pillBg": v.bg,
          "--pillBd": v.bd,
          "--pillGlow": v.glow,
        } as React.CSSProperties
      }
    >
      <span className="marquee-pill-icon" aria-hidden="true">
        {v.icon}
      </span>
      <span className="marquee-pill-label">{label}</span>
    </span>
  );
}

export default TechPill;
