import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { TechPill } from "@/components/ui/TechPill";
import {
  IconCaseStudy,
  IconGlobe,
  IconRoadmap,
  IconServer,
  IconBrush,
  IconCpu,
} from "@/components/ui/icons";

export const metadata: Metadata = pageMetadata({
  title: "BublHub v2",
  description:
    "BublHub v2: redesign + migration (Firebase → Appwrite) and foundations built for future portability.",
  path: "/projects/bublhub/v2",
});

function Section({
  title,
  body,
  bullets,
  pills,
}: {
  title: string;
  body: string;
  bullets?: string[];
  pills?: string[];
}) {
  return (
    <section className="surface-card">
      <h2 className="text-sm font-semibold">{title}</h2>
      <p
        className="mt-2 text-sm leading-relaxed"
        style={{ color: "var(--muted)" }}
      >
        {body}
      </p>

      {pills && pills.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {pills.map((p) => (
            <TechPill key={p} label={p} />
          ))}
        </div>
      ) : null}

      {bullets && bullets.length > 0 ? (
        <ul
          className="mt-4 list-disc pl-5 text-sm"
          style={{ color: "var(--muted)" }}
        >
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function BenefitCard({
  title,
  subtitle,
  bullets,
  tone,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
  tone: "amber" | "aqua" | "pink" | "mint";
}) {
  return (
    <div className="surface-card surface-card-tight">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <div className="text-sm font-semibold">{title}</div>
          <div className="text-xs" style={{ color: "rgba(244,246,247,0.62)" }}>
            {subtitle}
          </div>
        </div>
        <span className="tag-pill tag-pill-outline" data-tone={tone}>
          Benefit
        </span>
      </div>
      <ul
        className="mt-3 list-disc pl-5 text-sm"
        style={{ color: "var(--muted)" }}
      >
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function BublHubV2Page() {
  const demoUrl = "https://www.bublhub.com/eventListing/demo";

  return (
    <article className="flex flex-col gap-10">
      <header className="project-detail-hero">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="meta-chip">
              <span className="meta-chip-icon" aria-hidden="true">
                <IconRoadmap />
              </span>
              BublHub v2
            </span>
            <span className="meta-chip">
              <span className="meta-chip-icon" aria-hidden="true">
                <IconBrush />
              </span>
              New UI + rebrand
            </span>
            <span className="meta-chip">
              <span className="meta-chip-icon" aria-hidden="true">
                <IconServer />
              </span>
              Firebase → Appwrite
            </span>
            <span className="meta-chip">
              <span className="meta-chip-icon" aria-hidden="true">
                <IconCpu />
              </span>
              Built for portability
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              BublHub v2 — redesign + migration (in progress)
            </h1>
            <p
              className="max-w-3xl text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              v2 is a rebuild of the foundations. It’s not only a database
              migration — the UI and data model are being rebuilt so we can ship
              more capable features on top of a platform that stays maintainable
              and migration-friendly.
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <Button
                href="https://www.bublhub.com"
                external
                variant="primary"
                icon={<IconGlobe />}
              >
                Visit BublHub
              </Button>
              <Button
                href={demoUrl}
                external
                variant="secondary"
                icon={<IconCaseStudy />}
              >
                Demo purchase flow
              </Button>
              <Button
                href="/projects/bublhub"
                variant="secondary"
                icon={<IconCaseStudy />}
              >
                Back to project page
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="surface-card md:col-span-2">
              <h2 className="text-sm font-semibold">v2 objective</h2>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                Rebuild the UI around a new brand direction, migrate away from
                Firebase to reduce vendor lock-in, and redesign the data model
                so we can add richer platform features — while keeping the
                system structured so a future move away from Appwrite stays
                realistic.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <TechPill label="New UI language" />
                <TechPill label="Rebrand in Figma + Adobe" />
                <TechPill label="Database redesign" />
                <TechPill label="Feature build-out" />
                <TechPill label="Future migrations" />
              </div>
            </div>

            <div className="surface-card">
              <div
                className="text-xs"
                style={{ color: "rgba(244,246,247,0.62)" }}
              >
                Current focus
              </div>
              <div className="mt-3 flex flex-col gap-2">
                <span className="tag-pill tag-pill-outline" data-tone="amber">
                  UI consistency
                </span>
                <span className="tag-pill tag-pill-outline" data-tone="aqua">
                  Domain-first data model
                </span>
                <span className="tag-pill tag-pill-outline" data-tone="pink">
                  New feature capability
                </span>
                <span className="tag-pill tag-pill-outline" data-tone="mint">
                  Portability
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <Section
          title="UI rebuild + rebrand"
          body="The UI is being rebuilt to match the current brand direction and to stay consistent as features grow. v2 moves away from one-off screens and towards reusable patterns and clearer hierarchy."
          bullets={[
            "New brand direction translated into a consistent UI language",
            "Cleaner hierarchy and action placement across journeys",
            "Reusable patterns so features don’t feel bolted-on",
          ]}
          pills={["Figma", "Adobe Creative Suite", "UI patterns"]}
        />

        <Section
          title="Database migration and redesign"
          body="The platform direction needs a more expressive data model than a simple ticketing system. v2 migrates from Firebase to Appwrite to reduce lock-in and redesign the database around the real domain."
          bullets={[
            "Migration from Firebase (v1) to Appwrite to improve control and reduce lock-in",
            "Reshaped collections and relationships to support a more complex product",
            "Designed with future migrations in mind, not just the current vendor",
          ]}
          pills={[
            "Firebase → Appwrite",
            "Domain modelling",
            "Permissions + workflows",
          ]}
        />
      </section>

      <section className="surface-card">
        <h2 className="text-sm font-semibold">
          Feature build-out (enabled by v2)
        </h2>
        <p
          className="mt-2 text-sm leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          The point of the migration and redesign is to unlock new functionality
          without the platform becoming fragile. v2 is where the foundations are
          being rebuilt so feature work feels additive, not risky.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="surface-card surface-card-tight">
            <div className="text-sm font-semibold">
              Richer organiser tooling
            </div>
            <ul
              className="mt-3 list-disc pl-5 text-sm"
              style={{ color: "var(--muted)" }}
            >
              <li>More capable organiser profiles and workflows</li>
              <li>Clearer operational states and requirements</li>
              <li>Foundations for dashboards and comms</li>
            </ul>
          </div>

          <div className="surface-card surface-card-tight">
            <div className="text-sm font-semibold">Beyond basic ticketing</div>
            <ul
              className="mt-3 list-disc pl-5 text-sm"
              style={{ color: "var(--muted)" }}
            >
              <li>Data model shaped for growth</li>
              <li>Better boundaries for communities and retention</li>
              <li>Platform features that need real relationships</li>
            </ul>
          </div>

          <div className="surface-card surface-card-tight">
            <div className="text-sm font-semibold">Safer iteration</div>
            <ul
              className="mt-3 list-disc pl-5 text-sm"
              style={{ color: "var(--muted)" }}
            >
              <li>Reusable UI patterns across screens</li>
              <li>Backend structure that stays debuggable</li>
              <li>Less rework as the scope increases</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="surface-card">
        <h2 className="text-sm font-semibold">
          Why Appwrite over Firebase (for v2)
        </h2>
        <p
          className="mt-2 text-sm leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          The switch isn’t about chasing a new tool — it’s about control and
          portability. Appwrite gives a backend surface area that fits the
          direction of the product and makes it easier to keep vendor code
          contained.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <BenefitCard
            title="Reduced lock-in"
            subtitle="Keep product logic portable"
            tone="amber"
            bullets={[
              "Vendor calls contained behind small adapters",
              "Domain rules live in services, not platform glue",
              "Migration becomes swapping infrastructure pieces",
            ]}
          />
          <BenefitCard
            title="Richer domain modelling"
            subtitle="Support a more complex platform"
            tone="aqua"
            bullets={[
              "Collections and relationships designed around the domain",
              "Clear permission boundaries per entity",
              "Better fit for workflows beyond basic ticketing",
            ]}
          />
          <BenefitCard
            title="Workflow control"
            subtitle="Reliability for key journeys"
            tone="mint"
            bullets={[
              "State-first flows for onboarding and purchase",
              "Idempotency where it matters (payments, onboarding)",
              "Clearer debug paths as complexity increases",
            ]}
          />
        </div>
      </section>

      <section className="surface-card">
        <h2 className="text-sm font-semibold">The engineering direction</h2>
        <p
          className="mt-2 text-sm leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          The goal is to keep product logic stable and keep vendor code
          contained. That way the product can evolve without becoming tightly
          coupled to one backend choice.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="surface-card surface-card-tight">
            <div className="text-sm font-semibold">Structure</div>
            <ul
              className="mt-3 list-disc pl-5 text-sm"
              style={{ color: "var(--muted)" }}
            >
              <li>Thin endpoints: authenticate, validate, delegate</li>
              <li>Service layer owns business rules and orchestration</li>
              <li>
                Adapters contain vendor SDK calls (DB, storage, messaging)
              </li>
            </ul>
          </div>

          <div className="surface-card surface-card-tight">
            <div className="text-sm font-semibold">Reliability</div>
            <ul
              className="mt-3 list-disc pl-5 text-sm"
              style={{ color: "var(--muted)" }}
            >
              <li>State-first workflows for key journeys</li>
              <li>Idempotency where it matters (payments, onboarding)</li>
              <li>Status surfaces, retries, and debug paths</li>
            </ul>
          </div>

          <div className="surface-card surface-card-tight">
            <div className="text-sm font-semibold">Portability</div>
            <ul
              className="mt-3 list-disc pl-5 text-sm"
              style={{ color: "var(--muted)" }}
            >
              <li>Domain logic stays stable in services</li>
              <li>Infrastructure behind minimal interfaces</li>
              <li>Migrate by swapping adapters, not rewriting features</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-builder">
        <div className="about-builder-card">
          <div className="about-builder-left">
            <div className="about-builder-avatar">
              <Image
                src="/images/me.jpg"
                alt="Ashley Hylton"
                width={56}
                height={56}
                className="h-14 w-14 rounded-3xl object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-sm font-semibold tracking-tight">
                Want to chat through v2?
              </div>
              <div
                className="text-xs"
                style={{ color: "rgba(244,246,247,0.62)" }}
              >
                Design direction, migration decisions, and what’s being built.
              </div>
            </div>
          </div>

          <div className="about-builder-body">
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              v2 is ongoing work: the UI and data model are being rebuilt so the
              platform can grow without getting stuck to a single vendor or a
              fragile foundation.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="tag-pill tag-pill-outline" data-tone="amber">
                Product thinking
              </span>
              <span className="tag-pill tag-pill-outline" data-tone="aqua">
                Design systems
              </span>
              <span className="tag-pill tag-pill-outline" data-tone="pink">
                Data + migration
              </span>
              <span className="tag-pill tag-pill-outline" data-tone="mint">
                Architecture decisions
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                href="/contact"
                variant="primary"
                icon={<IconCaseStudy />}
              >
                Quick message
              </Button>
              <Button
                href="/projects/bublhub"
                variant="secondary"
                icon={<IconCaseStudy />}
              >
                Back to project page
              </Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
