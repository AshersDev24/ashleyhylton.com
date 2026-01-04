"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/content/projects";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const editorLines = [
  'import { NextResponse } from "next/server";',
  'import type { Metadata } from "next";',
  "",
  "type Project = { slug: string; title: string; stack: string[] };",
  "",
  "const stack = [",
  '  "Next.js",',
  '  "TypeScript",',
  '  "React Native (Expo)",',
  '  "Appwrite",',
  '  "Stripe Connect",',
  "];",
  "",
  "export async function POST(req: Request) {",
  "  const body = await req.json();",
  '  const email = String(body.email ?? "");',
  '  if (!email.includes("@")) {',
  "    return NextResponse.json({ ok: false }, { status: 400 });",
  "  }",
  "  return NextResponse.json({ ok: true });",
  "}",
].join("\n");

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const set = () => setReduced(!!mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  return reduced;
}

function CodeTypewriter({
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
      {!reduced && (
        <span className="type-caret" style={{ color: "#F8F8F2" }}>
          ▍
        </span>
      )}
    </pre>
  );
}

function Radar({ tone }: { tone: "green" | "amber" }) {
  const solid = tone === "green" ? "var(--statusGreen)" : "var(--statusAmber)";
  const soft =
    tone === "green" ? "var(--statusGreenSoft)" : "var(--statusAmberSoft)";

  return (
    <span className="relative inline-flex h-2.5 w-2.5">
      <span
        className="absolute inline-flex h-full w-full animate-ping rounded-full"
        style={{ background: soft }}
      />
      <span
        className="relative inline-flex h-2.5 w-2.5 rounded-full"
        style={{ background: solid }}
      />
    </span>
  );
}

function StatusRow({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "green" | "amber";
}) {
  return (
    <div className="status-row">
      <div className="flex items-center gap-3">
        <Radar tone={tone} />
        <div className="text-xs" style={{ color: "var(--muted)" }}>
          {label}
        </div>
      </div>
      <div className="text-xs font-medium">{value}</div>
    </div>
  );
}

function ProjectLogo({ slug, title }: { slug: string; title: string }) {
  const common = (
    <div className="project-logo">
      <span className="text-xs font-medium opacity-70">•</span>
    </div>
  );

  if (slug === "bublhub") {
    return (
      <div className="project-logo">
        <Image
          src="/images/Glowlogo.png"
          alt={`${title} logo`}
          width={32}
          height={32}
          className="h-8 w-8 object-contain"
        />
      </div>
    );
  }

  if (slug === "tea-powered-projects") {
    return (
      <div className="project-logo">
        <Image
          src="/images/tea-powered-icon.webp"
          alt={`${title} logo`}
          width={32}
          height={32}
          className="h-8 w-8 object-contain"
        />
      </div>
    );
  }

  return common;
}

function IconArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconExternal() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 5h5v5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 14L19 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 14v5H5V5h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12h20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2c2.6 2.7 4.1 6.3 4.1 10S14.6 19.3 12 22c-2.6-2.7-4.1-6.3-4.1-10S9.4 4.7 12 2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCaseStudy() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2v6h6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 13h6M9 17h6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconReact() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" />
      <path
        d="M12 2c2.7 0 5.2 3.9 5.2 10S14.7 22 12 22 6.8 18.1 6.8 12 9.3 2 12 2Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M4.2 7c1.3-2.3 6-2.1 10.6.6s7.1 6.4 5.8 8.7-6 2.1-10.6-.6S2.9 9.3 4.2 7Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M4.2 17c-1.3-2.3 1.2-6 5.8-8.7s9.3-2.9 10.6-.6-1.2 6-5.8 8.7-9.3 2.9-10.6.6Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function IconMobile() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18h.01"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconServer() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6h16v4H4V6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M4 14h16v4H4v-4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M7 8h.01M7 16h.01"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconDb() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <ellipse
        cx="12"
        cy="5"
        rx="7"
        ry="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconTool() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14.7 6.3a4 4 0 0 0-5.6 5.6L3 18v3h3l6.1-6.1a4 4 0 0 0 5.6-5.6l-2 2-2.4-2.4 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function pillVariant(label: string) {
  const l = label.toLowerCase();

  if (l.includes("react") && !l.includes("native"))
    return {
      fg: "#61DAFB",
      bg: "rgba(97,218,251,0.14)",
      bd: "rgba(97,218,251,0.26)",
      glow: "rgba(97,218,251,0.14)",
      icon: <IconReact />,
    };
  if (l.includes("expo") || l.includes("react native") || l.includes("mobile"))
    return {
      fg: "#A78BFA",
      bg: "rgba(167,139,250,0.14)",
      bd: "rgba(167,139,250,0.26)",
      glow: "rgba(167,139,250,0.14)",
      icon: <IconMobile />,
    };
  if (l.includes("appwrite") || l.includes("node") || l.includes("server"))
    return {
      fg: "#F472B6",
      bg: "rgba(244,114,182,0.14)",
      bd: "rgba(244,114,182,0.26)",
      glow: "rgba(244,114,182,0.14)",
      icon: <IconServer />,
    };
  if (l.includes("mysql") || l.includes("db") || l.includes("database"))
    return {
      fg: "#34D399",
      bg: "rgba(52,211,153,0.14)",
      bd: "rgba(52,211,153,0.26)",
      glow: "rgba(52,211,153,0.14)",
      icon: <IconDb />,
    };
  if (
    l.includes("figma") ||
    l.includes("phpstorm") ||
    l.includes("gitlab") ||
    l.includes("tool")
  )
    return {
      fg: "#F3BD68",
      bg: "rgba(243,189,104,0.14)",
      bd: "rgba(243,189,104,0.28)",
      glow: "rgba(243,189,104,0.14)",
      icon: <IconTool />,
    };

  return {
    fg: "var(--text)",
    bg: "rgba(23,37,49,0.18)",
    bd: "rgba(244,246,247,0.16)",
    glow: "rgba(244,246,247,0.06)",
    icon: <IconTool />,
  };
}

function MarqueePill({ label }: { label: string }) {
  const v = pillVariant(label);

  return (
    <span
      className="marquee-pill"
      style={
        {
          ["--pillFg" as any]: v.fg,
          ["--pillBg" as any]: v.bg,
          ["--pillBd" as any]: v.bd,
          ["--pillGlow" as any]: v.glow,
        } as any
      }
    >
      <span className="marquee-pill-icon" aria-hidden="true">
        {v.icon}
      </span>
      <span className="marquee-pill-label">{label}</span>
    </span>
  );
}

function MarqueeRow({ items }: { items: string[] }) {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="marquee-fade">
      <div
        className="marquee-track"
        style={{ animation: reduced ? "none" : "marquee 26s linear infinite" }}
      >
        {[...items, ...items].map((t, idx) => (
          <MarqueePill key={`${t}-${idx}`} label={t} />
        ))}
      </div>
    </div>
  );
}

function Button({
  href,
  external,
  variant,
  icon,
  children,
}: {
  href: string;
  external?: boolean;
  variant: "primary" | "secondary";
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  const className =
    variant === "primary" ? "btn btn-primary" : "btn btn-secondary";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {icon ? <span className="btn-icon">{icon}</span> : null}
        <span className="btn-label">{children}</span>
        <span className="btn-trail" aria-hidden="true">
          <IconExternal />
        </span>
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {icon ? <span className="btn-icon">{icon}</span> : null}
      <span className="btn-label">{children}</span>
      <span className="btn-trail" aria-hidden="true">
        <IconArrowRight />
      </span>
    </Link>
  );
}

function CardActions({ slug }: { slug: string }) {
  if (slug === "bublhub") {
    return (
      <div className="mt-5 flex flex-wrap gap-2">
        <Button
          href="https://bublhub.com"
          external
          variant="primary"
          icon={<IconGlobe />}
        >
          Visit site
        </Button>
        <Button
          href="/projects/bublhub"
          variant="secondary"
          icon={<IconCaseStudy />}
        >
          Case study
        </Button>
      </div>
    );
  }

  return (
    <div className="mt-5 flex flex-wrap gap-2">
      <Button
        href={`/projects/${slug}`}
        variant="secondary"
        icon={<IconCaseStudy />}
      >
        Case study
      </Button>
    </div>
  );
}

export default function Home() {
  const featured = projects;

  return (
    <div className="flex flex-col gap-12">
      <section className="hero-shell">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="wave-layer-1 absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full blur-3xl"
            style={{ background: "rgba(77,100,115,0.55)" }}
          />
          <div
            className="wave-layer-2 absolute -right-28 top-10 h-[460px] w-[460px] rounded-full blur-3xl"
            style={{ background: "rgba(44,70,87,0.58)" }}
          />
          <div
            className="wave-layer-1 absolute left-24 bottom-[-140px] h-[520px] w-[520px] rounded-full blur-3xl"
            style={{ background: "rgba(243,189,104,0.20)" }}
          />

          <div
            className="absolute bottom-0 right-0 h-[70%] w-[62%] opacity-50 md:opacity-[0.92]"
            style={{
              maskImage:
                "radial-gradient(520px circle at 85% 85%, black 0%, transparent 68%)",
              WebkitMaskImage:
                "radial-gradient(520px circle at 85% 85%, black 0%, transparent 68%)",
            }}
          >
            <div className="editor-shell">
              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: "#FF5F56" }}
                  />
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: "#FFBD2E" }}
                  />
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: "#27C93F" }}
                  />
                </div>
                <div
                  className="text-[10px]"
                  style={{ color: "rgba(244,246,247,0.6)" }}
                >
                  portfolio.tsx
                </div>
              </div>

              <div className="editor-panel">
                <CodeTypewriter text={editorLines} />
              </div>
            </div>
          </div>

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(23,37,49,0.04), rgba(23,37,49,0.18) 55%, rgba(23,37,49,0.34))",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative"
        >
          <div className="grid gap-8 md:grid-cols-[1fr_auto]">
            <div className="flex flex-col gap-6">
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                UK • Full-Stack • Product-minded
              </p>

              <div className="max-w-2xl">
                <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                  I build modern web + mobile products with clean UI and
                  reliable backend systems.
                </h1>
              </div>

              <div className="max-w-2xl">
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  I’m a software developer working across product builds
                  (BublHub) and client delivery (Tea Powered Projects). This
                  site is a focused snapshot of what I’ve been shipping.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href="/projects" variant="primary">
                  View projects
                </Button>
                <Button href="/contact" variant="secondary">
                  Contact
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:items-end">
              <div
                className="relative h-28 w-28 overflow-hidden rounded-3xl border"
                style={{
                  borderColor: "var(--border)",
                  background: "rgba(245,246,247,0.06)",
                }}
              >
                <Image
                  src="/images/me.jpg"
                  alt="Ashley Hylton"
                  fill
                  sizes="112px"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="w-full max-w-[280px] space-y-2">
                <StatusRow
                  label="Current status"
                  value="Looking for work"
                  tone="green"
                />
                <StatusRow
                  label="BublHub"
                  value="In development"
                  tone="amber"
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <MarqueeRow items={marqueeItems} />
          </div>
        </motion.div>
      </section>

      <section className="flex flex-col gap-5">
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold tracking-tight">Featured</h2>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              The two core case studies recruiters should start with.
            </p>
          </div>

          <Link
            href="/projects"
            className="text-sm hover:opacity-100"
            style={{ color: "var(--muted)" }}
          >
            See all
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.05 }}
              className="h-full"
            >
              <div className="project-card">
                <div className="flex items-start gap-4">
                  <ProjectLogo slug={p.slug} title={p.title} />

                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex items-center justify-between gap-4">
                      <div
                        className="text-xs"
                        style={{ color: "var(--muted)" }}
                      >
                        {p.period}
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "rgba(244,246,247,0.55)" }}
                      >
                        {p.role}
                      </div>
                    </div>

                    <div className="text-lg font-semibold tracking-tight">
                      {p.title}
                    </div>
                    <div className="text-sm" style={{ color: "var(--muted)" }}>
                      {p.subtitle}
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="tag-pill">
                          {t}
                        </span>
                      ))}
                    </div>

                    <CardActions slug={p.slug} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

const marqueeItems = [
  "Next.js",
  "TypeScript",
  "React",
  "React Native (Expo)",
  "Appwrite",
  "Stripe Connect",
  "GitLab CI/CD",
  "Node.js",
  "PHP",
  "MySQL",
  "Figma",
  "PhpStorm",
  "Clean Architecture",
  "Separation of Concerns",
];
