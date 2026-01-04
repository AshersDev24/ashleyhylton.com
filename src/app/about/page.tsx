import Link from "next/link";
import Image from "next/image";

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
            <span className="tag-pill tag-pill-outline" data-tone="amber">
              Product-minded
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

          <div className="flex flex-wrap gap-2 pt-1">
            <Link href="/projects" className="btn btn-primary">
              <span className="btn-icon" aria-hidden="true">
                <IconRocket />
              </span>
              <span className="btn-label">View projects</span>
              <span className="btn-trail" aria-hidden="true">
                <IconArrowRight />
              </span>
            </Link>

            <Link href="/contact" className="btn btn-secondary">
              <span className="btn-icon" aria-hidden="true">
                <IconSpark />
              </span>
              <span className="btn-label">Contact</span>
              <span className="btn-trail" aria-hidden="true">
                <IconArrowRight />
              </span>
            </Link>
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
                <span className="tag-pill tag-pill-outline" data-tone="violet">
                  Expo
                </span>
                <span className="tag-pill tag-pill-outline" data-tone="pink">
                  Appwrite
                </span>
                <span className="tag-pill tag-pill-outline" data-tone="amber">
                  Stripe Connect
                </span>
              </div>

              <div className="mt-4">
                <Link
                  href="/projects/bublhub"
                  className="btn btn-secondary w-full justify-center"
                >
                  <span className="btn-icon" aria-hidden="true">
                    <IconArrowRight />
                  </span>
                  <span className="btn-label">View case study</span>
                  <span className="btn-trail" aria-hidden="true">
                    <IconArrowRight />
                  </span>
                </Link>
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
                <span className="tag-pill tag-pill-outline" data-tone="aqua">
                  Next.js
                </span>
                <span className="tag-pill tag-pill-outline" data-tone="amber">
                  PHP
                </span>
                <span className="tag-pill tag-pill-outline" data-tone="mint">
                  MySQL
                </span>
              </div>

              <div className="mt-4">
                <Link
                  href="/projects/tea-powered-projects"
                  className="btn btn-secondary w-full justify-center"
                >
                  <span className="btn-icon" aria-hidden="true">
                    <IconArrowRight />
                  </span>
                  <span className="btn-label">View case study</span>
                  <span className="btn-trail" aria-hidden="true">
                    <IconArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <aside className="surface-card">
          <div className="text-xs" style={{ color: "rgba(244,246,247,0.62)" }}>
            Focus areas
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <div className="project-mini">
              <span className="project-mini-dot" aria-hidden="true" />
              <span
                className="text-xs"
                style={{ color: "rgba(244,246,247,0.78)" }}
              >
                React + Next.js
              </span>
            </div>
            <div className="project-mini">
              <span className="project-mini-dot" aria-hidden="true" />
              <span
                className="text-xs"
                style={{ color: "rgba(244,246,247,0.78)" }}
              >
                React Native (Expo)
              </span>
            </div>
            <div className="project-mini">
              <span className="project-mini-dot" aria-hidden="true" />
              <span
                className="text-xs"
                style={{ color: "rgba(244,246,247,0.78)" }}
              >
                Appwrite + serverless workflows
              </span>
            </div>
            <div className="project-mini">
              <span className="project-mini-dot" aria-hidden="true" />
              <span
                className="text-xs"
                style={{ color: "rgba(244,246,247,0.78)" }}
              >
                Payments + platform architecture
              </span>
            </div>
            <div className="project-mini">
              <span className="project-mini-dot" aria-hidden="true" />
              <span
                className="text-xs"
                style={{ color: "rgba(244,246,247,0.78)" }}
              >
                Clean code + separation of concerns
              </span>
            </div>
          </div>

          <div
            className="mt-6 text-xs"
            style={{ color: "rgba(244,246,247,0.62)" }}
          >
            Working style
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <div className="project-mini">
              <span className="project-mini-dot" aria-hidden="true" />
              <span
                className="text-xs"
                style={{ color: "rgba(244,246,247,0.78)" }}
              >
                Build small, ship often
              </span>
            </div>
            <div className="project-mini">
              <span className="project-mini-dot" aria-hidden="true" />
              <span
                className="text-xs"
                style={{ color: "rgba(244,246,247,0.78)" }}
              >
                Strong defaults, clear abstractions
              </span>
            </div>
            <div className="project-mini">
              <span className="project-mini-dot" aria-hidden="true" />
              <span
                className="text-xs"
                style={{ color: "rgba(244,246,247,0.78)" }}
              >
                Design-led, data-informed iteration
              </span>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/contact"
              className="btn btn-primary w-full justify-center"
            >
              <span className="btn-icon" aria-hidden="true">
                <IconSpark />
              </span>
              <span className="btn-label">Contact me</span>
              <span className="btn-trail" aria-hidden="true">
                <IconArrowRight />
              </span>
            </Link>
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
          <Link href="/projects/bublhub" className="btn btn-secondary">
            <span className="btn-icon" aria-hidden="true">
              <IconLayers />
            </span>
            <span className="btn-label">View BublHub</span>
            <span className="btn-trail" aria-hidden="true">
              <IconArrowRight />
            </span>
          </Link>

          <Link
            href="/projects/tea-powered-projects"
            className="btn btn-secondary"
          >
            <span className="btn-icon" aria-hidden="true">
              <IconServer />
            </span>
            <span className="btn-label">View Tea Powered Projects</span>
            <span className="btn-trail" aria-hidden="true">
              <IconArrowRight />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
