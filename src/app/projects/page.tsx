import Link from "next/link";
import { Chips } from "@/components/Chips";
import { QUIZ_URL, TEA_POWERED_PERIOD } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "BublHub, a ticketing platform I built end to end; commercial client work at Tea Powered Projects; and a live quiz-night app for a Nottingham charity.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <span className="eyebrow">Projects</span>
          <h1 className="h2 page-title">Work, with the outcome first</h1>
          <p className="lede" style={{ marginTop: 20 }}>
            Commercial work for clients, and a product I&apos;ve built,
            launched and rebuilt end to end.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: 120 }}>
        <div className="wrap">
          <div className="rows" data-reveal>
            <article className="card row row-lg lift">
              <div className="tile amber" aria-hidden="true">
                B
              </div>
              <div>
                <span className="tag">BublHub · 2018 – present</span>
                <h2>A ticketing platform, web to payouts, built by a team of one</h2>
                <p className="muted">
                  Events, communities and teams for organisers. Next.js web
                  app, Expo mobile app, Node.js backend and Stripe Connect
                  payouts, with about 475 test files and about 50 device
                  journeys behind it. Launched, rebuilt, and relaunching in
                  2027.
                </p>
                <Link className="more" href="/projects/bublhub">
                  Read case study<span className="sr-only">: BublHub</span>{" "}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <article className="card row row-lg lift">
              <div className="tile" aria-hidden="true">
                TP
              </div>
              <div>
                <span className="tag">
                  Tea Powered Projects · commercial · {TEA_POWERED_PERIOD}
                </span>
                <h2>Shopify stores, mobile apps and web apps for clients</h2>
                <p className="muted">
                  Twelve projects for eleven clients as a full-stack developer:
                  Reader&apos;s Shopify store, web apps for Humanatees and
                  Navigate Neurodiversity OT, an internal React Native app, and
                  websites for local businesses and a charity.
                </p>
                <Link className="more" href="/projects/tea-powered-projects">
                  Read case study<span className="sr-only">: Tea Powered Projects</span>{" "}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <article className="card row row-lg lift">
              <div className="tile" aria-hidden="true">
                Q
              </div>
              <div>
                <span className="tag">Side project · OnlyNotts · Jul 2026</span>
                <h2>A live quiz-night app for a Nottingham charity</h2>
                <p className="muted">
                  A fun one. Two screens from one laptop: a stage display for
                  the room and a control panel for the quizmaster, kept in sync
                  with the BroadcastChannel API. Next.js 16 and Tailwind 4 with
                  no backend, built for OnlyNotts quiz nights. It ran live on
                  the night and did its job.
                </p>
                <Chips items={["Next.js 16", "Tailwind 4", "BroadcastChannel", "No backend"]} />
                <a className="more" href={QUIZ_URL}>
                  See it live<span className="sr-only">: OnlyNotts quiz app</span>{" "}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
