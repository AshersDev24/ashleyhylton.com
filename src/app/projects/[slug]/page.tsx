import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { ProjectLogo } from "@/components/projects/ProjectLogo";
import { Button } from "@/components/ui/Button";
import { TechPill } from "@/components/ui/TechPill";
import {
  IconGlobe,
  IconCaseStudy,
  IconCalendar,
  IconBriefcase,
  IconCpu,
  IconBrush,
  IconServer,
  IconRoadmap,
  IconSend,
} from "@/components/ui/icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const isBublhub = project.slug === "bublhub";

  const whatThisShows = [
    {
      icon: <IconCpu />,
      title: "Systems & architecture",
      body: "Data model clarity, predictable boundaries, and workflows that scale with features.",
    },
    {
      icon: <IconBrush />,
      title: "UI craft & consistency",
      body: "Reusable patterns, clean layout decisions, and a coherent product experience.",
    },
    {
      icon: <IconServer />,
      title: "Backend workflows",
      body: "Serverless functions, permissions, integrations, and operational thinking.",
    },
    {
      icon: <IconRoadmap />,
      title: "Product thinking",
      body: "Clear journeys, iterative phases, and shipping decisions that match real user needs.",
    },
  ];

  return (
    <article className="flex flex-col gap-10">
      <header className="project-detail-hero">
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <ProjectLogo slug={project.slug} title={project.title} size="lg" />

            <div className="flex flex-1 flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="meta-chip">
                  <span className="meta-chip-icon" aria-hidden="true">
                    <IconCalendar />
                  </span>
                  {project.period}
                </span>
                <span className="meta-chip">
                  <span className="meta-chip-icon" aria-hidden="true">
                    <IconBriefcase />
                  </span>
                  {project.role}
                </span>
              </div>

              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                {project.title}
              </h1>

              <p
                className="max-w-3xl text-sm leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                {project.subtitle}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {project.stack.map((s) => (
                  <TechPill key={s} label={s} />
                ))}
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
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
                  href="/projects"
                  variant="secondary"
                  icon={<IconCaseStudy />}
                >
                  Back to projects
                </Button>

                <Button href="/contact" variant="secondary" icon={<IconSend />}>
                  Quick message
                </Button>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="surface-card md:col-span-2">
              <h2 className="text-sm font-semibold">Overview</h2>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                {project.body.overview}
              </p>

              <div className="mt-5 grid gap-2">
                {project.highlights.map((h) => (
                  <div key={h} className="project-mini">
                    <span className="project-mini-dot" aria-hidden="true" />
                    <span
                      className="text-xs"
                      style={{ color: "rgba(244,246,247,0.78)" }}
                    >
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-card">
              <div
                className="text-xs"
                style={{ color: "rgba(244,246,247,0.62)" }}
              >
                What this case study shows
              </div>

              <div className="mt-3 flex flex-col gap-2">
                {project.tags.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="tag-pill tag-pill-outline"
                    data-tone="amber"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="surface-card">
          <h2 className="text-sm font-semibold">Problem</h2>
          <p
            className="mt-2 text-sm leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            {project.body.problem}
          </p>
        </div>

        <div className="surface-card">
          <h2 className="text-sm font-semibold">Highlights</h2>
          <ul
            className="mt-2 list-disc pl-5 text-sm"
            style={{ color: "var(--muted)" }}
          >
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {whatThisShows.map((x) => (
          <div key={x.title} className="surface-card surface-card-tight">
            <div className="project-signal">
              <div className="project-signal-icon" aria-hidden="true">
                {x.icon}
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-sm font-semibold">{x.title}</div>
                <div className="text-xs" style={{ color: "var(--muted)" }}>
                  {x.body}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {project.timeline && project.timeline.length > 0 ? (
        <section className="surface-card">
          <div className="flex flex-col gap-1">
            <h2 className="text-sm font-semibold">Timeline</h2>
            <p className="text-sm" style={{ color: "rgba(244,246,247,0.62)" }}>
              How the project evolved — decisions, migrations, and capability
              growth.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-6">
            {project.timeline.map((t, idx) => (
              <div
                key={`${t.title}-${idx}`}
                className="grid gap-4 md:grid-cols-3"
              >
                <div className="md:col-span-1">
                  <div
                    className="text-xs"
                    style={{ color: "rgba(244,246,247,0.62)" }}
                  >
                    {t.period}
                  </div>
                  <div className="mt-1 text-base font-semibold">{t.title}</div>

                  {t.stack && t.stack.length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {t.stack.map((s) => (
                        <TechPill key={s} label={s} />
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="surface-card surface-card-tight md:col-span-2">
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {t.summary}
                  </p>
                  <ul
                    className="mt-3 list-disc pl-5 text-sm"
                    style={{ color: "var(--muted)" }}
                  >
                    {t.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="surface-card">
        <h2 className="text-sm font-semibold">Approach</h2>
        <ul
          className="mt-2 list-disc pl-5 text-sm"
          style={{ color: "var(--muted)" }}
        >
          {project.body.approach.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>

        <h2 className="mt-8 text-sm font-semibold">Outcome</h2>
        <ul
          className="mt-2 list-disc pl-5 text-sm"
          style={{ color: "var(--muted)" }}
        >
          {project.body.outcome.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      </section>

      {project.sections && project.sections.length > 0 ? (
        <section className="grid gap-6 md:grid-cols-2">
          {project.sections.map((s) => (
            <div key={s.title} className="surface-card">
              <h2 className="text-sm font-semibold">{s.title}</h2>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                {s.body}
              </p>

              {s.stack && s.stack.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.stack.map((x) => (
                    <TechPill key={x} label={x} />
                  ))}
                </div>
              ) : null}

              {s.bullets && s.bullets.length > 0 ? (
                <ul
                  className="mt-4 list-disc pl-5 text-sm"
                  style={{ color: "var(--muted)" }}
                >
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </section>
      ) : null}

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
                Want to chat through a build?
              </div>
              <div
                className="text-xs"
                style={{ color: "rgba(244,246,247,0.62)" }}
              >
                Product-minded delivery, clean UI, and reliable systems.
              </div>
            </div>
          </div>

          <div className="about-builder-body">
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              I build end-to-end: UI that feels intentional, backends that are
              predictable, and workflows that map to real operations. If you’ve
              got a role or project in mind, I’m happy to talk.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="tag-pill tag-pill-outline" data-tone="amber">
                Product thinking
              </span>
              <span className="tag-pill tag-pill-outline" data-tone="aqua">
                Frontend craft
              </span>
              <span className="tag-pill tag-pill-outline" data-tone="pink">
                Workflows + integrations
              </span>
              <span className="tag-pill tag-pill-outline" data-tone="mint">
                Data + payments
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Button href="/contact" variant="primary" icon={<IconSend />}>
                Quick message
              </Button>
              <Button
                href="/projects"
                variant="secondary"
                icon={<IconCaseStudy />}
              >
                More case studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
