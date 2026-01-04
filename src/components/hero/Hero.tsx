// src/components/hero/Hero.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CodeTypewriter from "@/components/hero/CodeTypewriter";
import HeroMarquee from "@/components/hero/HeroMarquee";
import StatusRow from "@/components/hero/HeroStatus";
import { Button } from "@/components/ui/Button";

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
  '  "Stripe",',
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

const marqueeItems = [
  "Next.js",
  "React",
  "React Native (Expo)",
  "TypeScript",
  "Node.js",
  "Appwrite",
  "Stripe",
  "Firebase",
  "GCP",
  "PHP",
  "MySQL",
  "Shopify",
  "CI/CD",
  "Clean Architecture",
  "Web & Mobile",
];

export default function Hero() {
  return (
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
              UK • Full-Stack • Founder (BublHub)
            </p>

            <div className="max-w-2xl">
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                I build web and mobile products — clean UI, solid systems, and
                work that ships.
              </h1>
            </div>

            <div className="max-w-2xl">
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                I’m Ashley — a full-stack developer and founder of BublHub. I
                split my time between building the product and shipping client
                work at Tea Powered Projects.
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
                value="Open for work"
                tone="green"
              />
              <StatusRow label="BublHub" value="In development" tone="amber" />
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-3">
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            A few things I’ve been working with lately:
          </p>
          <HeroMarquee items={marqueeItems} />
        </div>
      </motion.div>
    </section>
  );
}
