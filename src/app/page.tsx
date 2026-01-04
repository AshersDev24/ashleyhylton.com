"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/content/projects";
import Hero from "@/components/hero/Hero";
import { Button } from "@/components/ui/Button";
import { TechPill } from "@/components/ui/TechPill";
import { IconCaseStudy, IconGlobe } from "@/components/ui/icons";

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

function FeaturedPills({ slug }: { slug: string }) {
  if (slug === "bublhub") {
    const items = [
      "React",
      "React Native (Expo)",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Appwrite",
      "Stripe",
      "Firebase",
      "Cloud",
      "Web & Mobile",
    ];
    return (
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((t) => (
          <TechPill key={t} label={t} />
        ))}
      </div>
    );
  }

  if (slug === "tea-powered-projects") {
    const items = [
      "PHP",
      "Custom CMS",
      "Next.js",
      "React",
      "SQL",
      "Shopify",
      "SEO",
      "Web & Mobile",
    ];
    return (
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((t) => (
          <TechPill key={t} label={t} />
        ))}
      </div>
    );
  }

  return null;
}

export default function Home() {
  const featured = projects;

  return (
    <div className="flex flex-col gap-12">
      <Hero />

      <section className="flex flex-col gap-5">
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold tracking-tight">Featured</h2>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              The two core case studies to start with.
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

                    <FeaturedPills slug={p.slug} />

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
