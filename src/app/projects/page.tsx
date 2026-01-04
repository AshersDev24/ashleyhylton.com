"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/content/projects";
import { motion } from "framer-motion";

function ProjectLogo({ slug, title }: { slug: string; title: string }) {
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

  return (
    <div className="project-logo">
      <span className="text-xs font-medium opacity-70">•</span>
    </div>
  );
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

function IconSpark() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2l1.2 5.2L18 9l-4.8 1.8L12 16l-1.2-5.2L6 9l4.8-1.8L12 2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M5 14l.7 2.8L8.5 18l-2.8.7L5 21l-.7-2.3L1.5 18l2.8-1.2L5 14Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLayers() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3l9 5-9 5-9-5 9-5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M3 12l9 5 9-5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M3 16l9 5 9-5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconShield() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2l8 4v6c0 6-3.5 9.5-8 10-4.5-.5-8-4-8-10V6l8-4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconRocket() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 4c3 0 6 3 6 6-1 5-6 10-11 11-3 0-6-3-6-6C4 10 9 5 14 4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M13 7l4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M7 17l-2 5 5-2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M10 10h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
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

function tagTone(
  label: string
): "aqua" | "violet" | "pink" | "mint" | "amber" | "slate" {
  const l = label.toLowerCase();
  if (l.includes("react") && !l.includes("native")) return "aqua";
  if (l.includes("expo") || l.includes("react native") || l.includes("mobile"))
    return "violet";
  if (l.includes("appwrite") || l.includes("node") || l.includes("server"))
    return "pink";
  if (l.includes("mysql") || l.includes("db") || l.includes("database"))
    return "mint";
  if (
    l.includes("figma") ||
    l.includes("phpstorm") ||
    l.includes("gitlab") ||
    l.includes("tool") ||
    l.includes("ci")
  )
    return "amber";
  return "slate";
}

function TagPill({
  label,
  variant = "soft",
}: {
  label: string;
  variant?: "soft" | "glow" | "outline";
}) {
  const tone = tagTone(label);
  const cls =
    variant === "glow"
      ? "tag-pill tag-pill-glow"
      : variant === "outline"
      ? "tag-pill tag-pill-outline"
      : "tag-pill tag-pill-soft";
  return (
    <span className={cls} data-tone={tone}>
      {label}
    </span>
  );
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-10">
      <header className="project-index-hero">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="about-builder-avatar">
                <Image
                  src="/images/me.jpg"
                  alt="Ashley Hylton"
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-3xl object-cover"
                  priority
                />
              </div>

              <div className="flex flex-col leading-tight">
                <div className="text-sm font-semibold tracking-tight">
                  Ashley Hylton
                </div>
                <div
                  className="text-xs"
                  style={{ color: "rgba(244,246,247,0.62)" }}
                >
                  Full-Stack • UI-focused • Systems-first
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Projects & Case Studies
              </h1>
              <p
                className="max-w-2xl text-sm leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                This is the best overview of what I ship: product builds
                (BublHub) and client delivery (Tea Powered Projects). Each case
                study highlights decisions, implementation, and outcomes.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="tag-pill tag-pill-outline" data-tone="amber">
                Next.js + TypeScript
              </span>
              <span className="tag-pill tag-pill-outline" data-tone="violet">
                Expo (React Native)
              </span>
              <span className="tag-pill tag-pill-outline" data-tone="pink">
                Appwrite + Functions
              </span>
              <span className="tag-pill tag-pill-outline" data-tone="mint">
                Payments + Data
              </span>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              <Link href="/contact" className="btn btn-primary">
                <span className="btn-icon" aria-hidden="true">
                  <IconRocket />
                </span>
                <span className="btn-label">Contact</span>
                <span className="btn-trail" aria-hidden="true">
                  <IconArrowRight />
                </span>
              </Link>

              <Link href="/about" className="btn btn-secondary">
                <span className="btn-icon" aria-hidden="true">
                  <IconSpark />
                </span>
                <span className="btn-label">About</span>
                <span className="btn-trail" aria-hidden="true">
                  <IconArrowRight />
                </span>
              </Link>
            </div>
          </div>

          <div className="project-index-strengths">
            <div className="project-index-strength">
              <div className="project-index-strength-icon" aria-hidden="true">
                <IconLayers />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-sm font-semibold">
                  End-to-end product delivery
                </div>
                <div className="text-xs" style={{ color: "var(--muted)" }}>
                  UI, data model, backend workflows, and deploy-ready
                  integrations.
                </div>
              </div>
            </div>

            <div className="project-index-strength">
              <div className="project-index-strength-icon" aria-hidden="true">
                <IconShield />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-sm font-semibold">
                  Clean architecture & maintainability
                </div>
                <div className="text-xs" style={{ color: "var(--muted)" }}>
                  Clear boundaries, reusable components, predictable patterns.
                </div>
              </div>
            </div>

            <div className="project-index-strength">
              <div className="project-index-strength-icon" aria-hidden="true">
                <IconRocket />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-sm font-semibold">
                  Shipping velocity with polish
                </div>
                <div className="text-xs" style={{ color: "var(--muted)" }}>
                  Fast iteration without sacrificing UX and stability.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => {
          const isBublhub = p.slug === "bublhub";
          return (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.05 }}
              className="h-full"
            >
              <div className="project-card h-full">
                <div className="flex items-start gap-4">
                  <ProjectLogo slug={p.slug} title={p.title} />

                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex flex-col gap-1">
                        <div className="text-lg font-semibold tracking-tight">
                          {p.title}
                        </div>
                        <div
                          className="text-sm"
                          style={{ color: "var(--muted)" }}
                        >
                          {p.subtitle}
                        </div>
                      </div>

                      <Link
                        href={`/projects/${p.slug}`}
                        className="inline-flex items-center gap-1 text-xs transition"
                        style={{ color: "rgba(244,246,247,0.62)" }}
                      >
                        Open{" "}
                        <span
                          className="translate-y-[0.5px]"
                          aria-hidden="true"
                        >
                          <IconArrowRight />
                        </span>
                      </Link>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.stack.slice(0, 6).map((s, idx) => (
                        <TagPill
                          key={s}
                          label={s}
                          variant={idx < 2 ? "glow" : "soft"}
                        />
                      ))}
                    </div>

                    <div className="mt-4 grid gap-2">
                      {p.highlights.slice(0, 2).map((h) => (
                        <div key={h} className="project-mini">
                          <span
                            className="project-mini-dot"
                            aria-hidden="true"
                          />
                          <span
                            className="text-xs"
                            style={{ color: "rgba(244,246,247,0.78)" }}
                          >
                            {h}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {isBublhub ? (
                        <a
                          className="btn btn-primary"
                          href="https://bublhub.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="btn-icon" aria-hidden="true">
                            <IconGlobe />
                          </span>
                          <span className="btn-label">Visit site</span>
                          <span className="btn-trail" aria-hidden="true">
                            <IconArrowRight />
                          </span>
                        </a>
                      ) : null}

                      <Link
                        className="btn btn-secondary"
                        href={`/projects/${p.slug}`}
                      >
                        <span className="btn-icon" aria-hidden="true">
                          <IconCaseStudy />
                        </span>
                        <span className="btn-label">Case study</span>
                        <span className="btn-trail" aria-hidden="true">
                          <IconArrowRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
