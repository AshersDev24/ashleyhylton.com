// src/app/projects/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/content/projects";
import { ProjectLogo } from "@/components/projects/ProjectLogo";
import { Button } from "@/components/ui/Button";
import { TechPill } from "@/components/ui/TechPill";
import {
  IconArrowRight,
  IconCaseStudy,
  IconGlobe,
  IconRocket,
  IconSpark,
  IconLayers,
  IconShield,
} from "@/components/ui/icons";

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
                A focused set of product + client work. Each case study breaks
                down what I built, why I built it that way, and what changed as
                the project evolved.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "TypeScript",
                "React",
                "React Native (Expo)",
                "PHP",
                "MySQL",
                "Shopify",
                "SEO",
              ].map((t) => (
                <TechPill key={t} label={t} />
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              <Button href="/contact" variant="primary" icon={<IconRocket />}>
                Contact
              </Button>
              <Button href="/about" variant="secondary" icon={<IconSpark />}>
                About
              </Button>
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
                  Maintainable structure
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
                      {p.stack.slice(0, 8).map((s) => (
                        <TechPill key={s} label={s} />
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
                        <Button
                          href="https://bublhub.com"
                          external
                          variant="primary"
                          icon={<IconGlobe />}
                        >
                          Visit site
                        </Button>
                      ) : null}

                      <Button
                        href={`/projects/${p.slug}`}
                        variant="secondary"
                        icon={<IconCaseStudy />}
                      >
                        Case study
                      </Button>
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
