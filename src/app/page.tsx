import Image from "next/image";
import Link from "next/link";
import { ContactLinks, EmailLine } from "@/components/ContactBlock";
import { StatusPill } from "@/components/StatusPill";
import { Timeline } from "@/components/Timeline";
import { Chips } from "@/components/Chips";
import { BublHubVisual, QuizWindow, TeaPoweredFan } from "@/components/ProjectVisuals";
import {
  BagIcon,
  BrowserIcon,
  CardIcon,
  CheckCircleIcon,
  CodeIcon,
  LayersIcon,
  PhoneIcon,
  PulseIcon,
} from "@/components/icons";
import {
  CV_PAGE,
  GITHUB_URL,
  QUIZ_URL,
  LINKEDIN_URL,
  TEA_POWERED_PERIOD,
  stats,
} from "@/content/site";
import { JOB_TITLE, SITE_NAME, SITE_URL, pageMetadata } from "@/lib/seo";
import photo from "@/assets/ashley-hylton.png";

export const metadata = pageMetadata({
  description:
    "Full-stack TypeScript engineer in Nottingham, UK, open to permanent hybrid roles. Next.js, React Native and Node.js, with tests, staging and Sentry behind everything I ship.",
  path: "/",
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  jobTitle: JOB_TITLE,
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nottingham",
    addressCountry: "GB",
  },
  sameAs: [GITHUB_URL, LINKEDIN_URL],
};

const buildTiles = [
  { href: "/projects/tea-powered-projects", icon: <BagIcon />, title: "Shopify stores", sub: "Client work" },
  { href: "/projects/tea-powered-projects", icon: <PhoneIcon />, title: "Mobile apps", sub: "Clients and BublHub" },
  { href: "/projects/tea-powered-projects", icon: <BrowserIcon />, title: "Web apps", sub: "Clients and BublHub" },
  { href: "/projects/bublhub", icon: <CardIcon />, title: "Payments and backend", sub: "BublHub" },
];

const principles = [
  { icon: <CheckCircleIcon />, title: "Tested before it ships", text: "~475 test files, Playwright, ~50 real-phone journeys." },
  { icon: <CodeIcon />, title: "Self-taught foundations", text: "Coding by hand since 2018, long before AI tools." },
  { icon: <LayersIcon />, title: "Staging first", text: "CI on every repo. Nothing skips staging." },
  { icon: <PulseIcon />, title: "Watched in production", text: "Sentry across web, app and backend." },
];

const habits: { title: string; body: React.ReactNode }[] = [
  {
    title: "Tests are part of the feature",
    body: (
      <>
        A feature isn&apos;t finished until it&apos;s covered.
        <ul>
          <li>About 475 test files across Jest and Vitest</li>
          <li>Playwright end-to-end tests on the web</li>
          <li>About 50 Maestro journeys run on a real phone</li>
          <li>CI on every repo with GitHub Actions</li>
        </ul>
      </>
    ),
  },
  {
    title: "Rehearse on staging",
    body: "Nothing reaches production without going through staging first, with real email sending switched on. Before going live again I ran a staging rehearsal, a payments audit and a server permissions lockdown.",
  },
  {
    title: "Make failures visible",
    body: "Sentry across web, app and backend. I've handled incidents too, including a suspension by our email provider.",
  },
  {
    title: "Fundamentals first, AI second",
    body: "I taught myself to code from 2018, building lots of small projects by hand, long before AI tools. Today I use AI agents to move faster, and every change still goes through my review, the tests and staging.",
  },
  {
    title: "Extra care where money moves",
    body: "Payouts run seven days after an event and hold themselves automatically on ticket-holder flags or missing verification. Refunds are blocked once a payout is paid. Payouts need manual approval while in testing.",
  },
  {
    title: "Write decisions down",
    body: "The repo keeps a current-state document and a decisions log for fees, refunds and payouts, so the code and the reasoning stay in step.",
  },
  {
    title: "Work well with clients and non-engineers",
    body: "Client projects at Tea Powered Projects, plus more than ten years in customer-facing roles before engineering. I explain trade-offs in plain language and keep people updated.",
  },
];

// The design splits the habits into two columns: three, then four.
const habitColumns = [habits.slice(0, 3), habits.slice(3)];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <StatusPill />
              <p className="handle">ashley hylton // @AshersDev24</p>
              <h1 className="name">
                Ashley
                <br />
                Hylton
              </h1>
              <p className="claim">
                Full-stack TypeScript engineer, self-taught since 2018.
                Commercial client work at an agency, and a ticketing platform
                of my own.
              </p>
              <ul className="build" aria-label="What I build">
                {buildTiles.map((t) => (
                  <li key={t.title}>
                    <Link href={t.href}>
                      <span className="ic">{t.icon}</span>
                      <span>
                        {t.title}
                        <small>{t.sub}</small>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="ctas">
                <Link className="btn btn-primary" href="/projects/bublhub">
                  Read the BublHub case study
                </Link>
                <a className="btn btn-ghost" href="#contact">
                  Get in touch
                </a>
              </div>
            </div>

            <aside className="card side" aria-label="At a glance">
              <Image
                className="photo-img"
                src={photo}
                alt="Ashley Hylton"
                sizes="(max-width: 960px) 400px, 360px"
                preload
              />
              <dl className="kv">
                <dt>Based</dt>
                <dd>Nottingham, UK</dd>
                <dt>Looking for</dt>
                <dd>Permanent roles on product teams, hybrid</dd>
                <dt>Stack</dt>
                <dd>TypeScript · Next.js · React Native (Expo) · Node.js</dd>
                <dt>Links</dt>
                <dd>
                  <a href={GITHUB_URL}>GitHub</a> ·{" "}
                  <a href={LINKEDIN_URL}>LinkedIn</a> ·{" "}
                  <Link href={CV_PAGE}>CV (PDF)</Link>
                </dd>
              </dl>
            </aside>
          </div>

          <div className="principles">
            {principles.map((p) => (
              <div key={p.title} className="pcard">
                <span className="ic">{p.icon}</span>
                <div>
                  <h2>{p.title}</h2>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="numbers-h">
        <div className="wrap" data-reveal>
          <span className="eyebrow">In numbers · November 2026</span>
          <h2 className="h2" id="numbers-h">
            What sits behind the claims
          </h2>
          <div className="stats">
            {stats.map((s) => (
              <div key={s.label} className="card stat lift">
                <p className="num">
                  {s.approx && (
                    <>
                      <small aria-hidden="true">~</small>
                      <span className="sr-only">about </span>
                    </>
                  )}
                  {s.value}
                </p>
                <p className="label">{s.label}</p>
                <p className="ctx">{s.ctx}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="time-h">
        <div className="wrap" data-reveal>
          <span className="eyebrow">Timeline</span>
          <h2 className="h2" id="time-h">
            Self-taught, client work, and my own product
          </h2>
          <p className="lede" style={{ marginTop: 18 }}>
            Teaching myself to code through lots of small projects, commercial
            work for clients at Tea Powered Projects, and building, launching
            and rebuilding BublHub.
          </p>
          <Timeline />
        </div>
      </section>

      <section className="section" aria-labelledby="work-h">
        <div className="wrap" data-reveal>
          <span className="eyebrow">Selected work</span>
          <h2 className="h2" id="work-h">
            Projects
          </h2>
          <div className="work">
            <article className="card feature lift">
              <BublHubVisual />
              <div className="body">
                <span className="tag">Featured · 2018 – present</span>
                <h3>A ticketing platform, web to payouts, built by a team of one</h3>
                <p className="muted">
                  BublHub lets organisers run events, communities and teams in
                  one place. I designed and built the web app, the mobile app,
                  the backend and the Stripe Connect payouts. It launched, came
                  offline while I rebuilt the infrastructure and added
                  features, and relaunches in 2027.
                </p>
                <Chips items={["Next.js", "Expo", "Node.js", "Stripe Connect", "Sentry"]} />
                <Link className="more" href="/projects/bublhub">
                  Read case study<span className="sr-only">: BublHub</span>{" "}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <div className="rows">
              <article className="card row row-visual lift">
                <TeaPoweredFan />
                <div>
                  <span className="tag">Commercial · {TEA_POWERED_PERIOD}</span>
                  <h3 style={{ marginTop: 10 }}>Websites, shops and apps for 11 clients</h3>
                  <p>
                    Full-stack developer at Tea Powered Projects, shipping
                    production work across client sites and working directly
                    with the people who commissioned it.
                  </p>
                  <ul className="kinds">
                    <li><b>Online shops</b><span>Reader, Peak Dinghy Spares</span></li>
                    <li><b>Web apps</b><span>Humanatees, Navigate Neurodiversity OT</span></li>
                    <li><b>Mobile app</b><span>Internal React Native booking app</span></li>
                    <li><b>Business websites</b><span>Five local businesses and a charity</span></li>
                  </ul>
                  <Link className="more" href="/projects/tea-powered-projects">
                    Read case study<span className="sr-only">: Tea Powered Projects</span>{" "}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>

              <article className="card row row-visual lift">
                <QuizWindow />
                <div>
                  <span className="soon">Side project · for charity</span>
                  <h3>A live quiz-night app for a Nottingham charity</h3>
                  <p>
                    Built for OnlyNotts quiz nights: a stage screen for the room
                    and a control panel for the quizmaster, synced from one
                    laptop. It ran live on the night.
                  </p>
                  <Chips items={["Next.js 16", "Tailwind 4", "BroadcastChannel"]} />
                  <a className="more" href={QUIZ_URL}>
                    See it live<span className="sr-only">: OnlyNotts quiz app</span>{" "}
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="how-h">
        <div className="wrap" data-reveal>
          <span className="eyebrow">How I work</span>
          <h2 className="h2" id="how-h">
            Habits a team can rely on
          </h2>
          <p className="lede" style={{ marginTop: 18 }}>
            Each one comes with the evidence. Open any of them to see it.
          </p>
          <div className="how">
            {habitColumns.map((column, c) => (
              <div key={c}>
                {column.map((h, i) => (
                  <details key={h.title} open={c === 0 && i === 0}>
                    <summary>
                      <h3>{h.title}</h3>
                      <span className="plus" aria-hidden="true">
                        +
                      </span>
                    </summary>
                    <div className="ev">{h.body}</div>
                  </details>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact" aria-labelledby="contact-h">
        <div className="wrap" data-reveal>
          <h2 className="eyebrow" id="contact-h">
            Contact
          </h2>
          <EmailLine />
          <ContactLinks />
        </div>
      </section>
    </>
  );
}
