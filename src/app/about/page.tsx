import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { TechPill } from "@/components/ui/TechPill";
import {
  IconSpark,
  IconRocket,
  IconLayers,
  IconBrush,
  IconServer,
  IconArrowRight,
} from "@/components/ui/icons";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10">
      <header className="page-hero">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="about-builder-avatar">
              <Image
                src="/images/me.jpg"
                alt="Ashley Hylton"
                fill
                sizes="56px"
                className="object-cover"
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
              About
            </h1>
            <p
              className="max-w-2xl text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              I’m Ashley — a UK-based full-stack developer who likes shipping
              production-quality work with clean UI, strong fundamentals, and
              systems that scale.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "Entrepreneur",
              "Full stack developer",
              "Design",
              "Start-ups",
            ].map((t) => (
              <span
                key={t}
                className="tag-pill tag-pill-outline"
                data-tone="amber"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            <Button href="/projects" variant="primary" icon={<IconRocket />}>
              View projects
            </Button>
            <Button href="/contact" variant="secondary" icon={<IconSpark />}>
              Contact
            </Button>
          </div>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="surface-card md:col-span-2">
          <h2 className="text-sm font-semibold">What I do</h2>
          <p
            className="mt-2 text-sm leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            I work across web, mobile, and backend services. I’m product-minded,
            which means I care about the entire journey: discovery, design,
            implementation, release, iteration, and long-term maintainability.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="surface-card surface-card-tight">
              <div className="project-signal">
                <div className="project-signal-icon" aria-hidden="true">
                  <IconLayers />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-sm font-semibold">Product builds</div>
                  <div
                    className="text-xs"
                    style={{ color: "rgba(244,246,247,0.62)" }}
                  >
                    BublHub
                  </div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>
                    End-to-end ownership: UI/UX, app architecture, backend, and
                    platform workflows.
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Expo", "Appwrite", "Stripe Connect"].map((t) => (
                  <TechPill key={t} label={t} />
                ))}
              </div>

              <div className="mt-4">
                <Button
                  href="/projects/bublhub"
                  variant="secondary"
                  icon={<IconArrowRight />}
                >
                  View case study
                </Button>
              </div>
            </div>

            <div className="surface-card surface-card-tight">
              <div className="project-signal">
                <div className="project-signal-icon" aria-hidden="true">
                  <IconBrush />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-sm font-semibold">Client delivery</div>
                  <div
                    className="text-xs"
                    style={{ color: "rgba(244,246,247,0.62)" }}
                  >
                    Tea Powered Projects
                  </div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>
                    Shipping features, improving systems, and maintaining
                    multiple production sites using a shared CMS approach.
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Next.js", "PHP", "MySQL"].map((t) => (
                  <TechPill key={t} label={t} />
                ))}
              </div>

              <div className="mt-4">
                <Button
                  href="/projects/tea-powered-projects"
                  variant="secondary"
                  icon={<IconArrowRight />}
                >
                  View case study
                </Button>
              </div>
            </div>
          </div>
        </div>

        <aside className="surface-card">
          <div className="text-xs" style={{ color: "rgba(244,246,247,0.62)" }}>
            Focus areas
          </div>

          <div className="mt-3 flex flex-col gap-2">
            {[
              "React + Next.js",
              "React Native (Expo)",
              "Appwrite + serverless workflows",
              "Payments + platform architecture",
              "Clean code + separation of concerns",
            ].map((x) => (
              <div key={x} className="project-mini">
                <span className="project-mini-dot" aria-hidden="true" />
                <span
                  className="text-xs"
                  style={{ color: "rgba(244,246,247,0.78)" }}
                >
                  {x}
                </span>
              </div>
            ))}
          </div>

          <div
            className="mt-6 text-xs"
            style={{ color: "rgba(244,246,247,0.62)" }}
          >
            Working style
          </div>

          <div className="mt-3 flex flex-col gap-2">
            {[
              "Build small, ship often",
              "Strong defaults, clear abstractions",
              "Design-led, data-informed iteration",
            ].map((x) => (
              <div key={x} className="project-mini">
                <span className="project-mini-dot" aria-hidden="true" />
                <span
                  className="text-xs"
                  style={{ color: "rgba(244,246,247,0.78)" }}
                >
                  {x}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Button href="/contact" variant="primary" icon={<IconSpark />}>
              Contact me
            </Button>
          </div>
        </aside>
      </section>

      <section className="surface-card">
        <h2 className="text-sm font-semibold">What you’ll find on this site</h2>
        <p
          className="mt-2 text-sm leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          The projects section focuses on real decisions and implementation. The
          BublHub page is a journey over time (design through to v2 launch
          readiness). The Tea Powered Projects page is a view into professional
          delivery, systems thinking, and day-to-day engineering practice.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <Button
            href="/projects/bublhub"
            variant="secondary"
            icon={<IconLayers />}
          >
            View BublHub
          </Button>
          <Button
            href="/projects/tea-powered-projects"
            variant="secondary"
            icon={<IconServer />}
          >
            View Tea Powered Projects
          </Button>
        </div>
      </section>
    </div>
  );
}
