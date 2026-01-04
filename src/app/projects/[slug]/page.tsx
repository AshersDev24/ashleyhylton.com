import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";

function ProjectLogo({ slug, title }: { slug: string; title: string }) {
  if (slug === "bublhub") {
    return (
      <div className="project-logo project-logo-lg">
        <Image
          src="/images/Glowlogo.png"
          alt={`${title} logo`}
          width={44}
          height={44}
          className="h-10 w-10 object-contain"
        />
      </div>
    );
  }

  if (slug === "tea-powered-projects") {
    return (
      <div className="project-logo project-logo-lg">
        <Image
          src="/images/tea-powered-icon.webp"
          alt={`${title} logo`}
          width={44}
          height={44}
          className="h-10 w-10 object-contain"
        />
      </div>
    );
  }

  return (
    <div className="project-logo project-logo-lg">
      <span className="text-sm font-medium opacity-70">•</span>
    </div>
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

function IconCalendar() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 3v3M17 3v3M4 8h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6 5h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBriefcase() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 7V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4 8h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M4 12h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCpu() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 9h6v6H9V9Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M4 10V8h2V6h2V4h2M20 10V8h-2V6h-2V4h-2M4 14v2h2v2h2v2h2M20 14v2h-2v2h-2v2h-2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 7h10v10H7V7Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBrush() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 21c2 0 3-1 3-3 0-2-1-3-3-3-2 0-3 1-3 3 0 2 1 3 3 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M10 18c3-6 8-12 10-14 1 2 0 5-2 7-2 2-5 3-8 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
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

function IconRoadmap() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 20V4c0-1 1-2 2-2h8c1 0 2 1 2 2v16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8 7h8M8 11h8M8 15h6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconSend() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M22 2L11 13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 2l-7 20-4-9-9-4 20-7Z"
        stroke="currentColor"
        strokeWidth="1.8"
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

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

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
            <ProjectLogo slug={project.slug} title={project.title} />

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
                {project.stack.map((s, idx) => (
                  <TagPill
                    key={s}
                    label={s}
                    variant={idx < 2 ? "glow" : "soft"}
                  />
                ))}
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
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

                <Link className="btn btn-secondary" href="/projects">
                  <span className="btn-icon" aria-hidden="true">
                    <IconCaseStudy />
                  </span>
                  <span className="btn-label">Back to projects</span>
                  <span className="btn-trail" aria-hidden="true">
                    <IconArrowRight />
                  </span>
                </Link>

                <Link className="btn btn-secondary" href="/contact">
                  <span className="btn-icon" aria-hidden="true">
                    <IconSend />
                  </span>
                  <span className="btn-label">Quick message</span>
                  <span className="btn-trail" aria-hidden="true">
                    <IconArrowRight />
                  </span>
                </Link>
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
                      {t.stack.map((s, sIdx) => (
                        <TagPill
                          key={s}
                          label={s}
                          variant={sIdx < 1 ? "outline" : "soft"}
                        />
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
                  {s.stack.map((x, idx) => (
                    <TagPill
                      key={x}
                      label={x}
                      variant={idx < 1 ? "outline" : "soft"}
                    />
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
                Want to see how I work?
              </div>
              <div
                className="text-xs"
                style={{ color: "rgba(244,246,247,0.62)" }}
              >
                Clean UI, reliable systems, and product-minded delivery.
              </div>
            </div>
          </div>

          <div className="about-builder-body">
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              I build end-to-end: UI that feels intentional, backends that are
              predictable, and workflows that map to real operations. I’m
              currently shipping BublHub and delivering client work at Tea
              Powered Projects.
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
              <Link className="btn btn-primary" href="/contact">
                <span className="btn-icon" aria-hidden="true">
                  <IconSend />
                </span>
                <span className="btn-label">Quick message</span>
                <span className="btn-trail" aria-hidden="true">
                  <IconArrowRight />
                </span>
              </Link>

              <Link className="btn btn-secondary" href="/projects">
                <span className="btn-icon" aria-hidden="true">
                  <IconCaseStudy />
                </span>
                <span className="btn-label">More case studies</span>
                <span className="btn-trail" aria-hidden="true">
                  <IconArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
