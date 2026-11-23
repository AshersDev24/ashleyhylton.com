import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Chips } from "@/components/Chips";
import { GITHUB_URL } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "BublHub case study",
  description:
    "How I built BublHub on my own: a Next.js web app, an Expo mobile app, a Node.js backend and Stripe Connect payouts, with about 475 test files, real-phone journeys and Sentry. Relaunching in 2027.",
  path: "/projects/bublhub",
});

const years = [
  {
    y: "2018",
    lead: "Teaching myself to code.",
    text: "I learned from the basics up through lots of small projects, all written by hand, long before AI coding tools. BublHub started as the project I learned on: a place where organisers could run events and the communities around them.",
  },
  {
    y: "2019–22",
    lead: "Growing the product.",
    text: "Built the early versions on Firebase and Google Cloud, and shipped the core journeys: sign-in, profiles, organiser onboarding, publishing events and ticketing.",
  },
  {
    y: "2023",
    lead: "First launch.",
    text: "BublHub v1 went live as a working ticketing platform.",
  },
  {
    y: "2024",
    lead: "Making it a business.",
    text: "Set up BublHub Ltd so the product could take payments and publish to the app stores under a company. From September I was also working as a developer at Tea Powered Projects, building BublHub alongside.",
  },
  {
    y: "2024",
    lead: "Taken offline to rebuild.",
    text: "I took BublHub down on purpose to rework the infrastructure and add features before going live again. The backend moved off Firebase to reduce lock-in and give me more control, and I tightened service boundaries, the data model and permissions so one person can keep it maintainable.",
  },
  {
    y: "2026",
    lead: "The rebuild.",
    text: "Separate staging and production environments, a server permissions lockdown, a payments audit and a staging rehearsal before going live. Automated tests on the web and on real phones, Sentry across every surface, and a shared component system so web and mobile were redesigned together. New features include a web portal for organisers and tools for running communities.",
  },
  {
    y: "2027",
    lead: "Relaunch.",
    text: "Back live, starting in Nottingham.",
  },
];

const stack = [
  "TypeScript", "Next.js", "React Native", "Expo", "Node.js", "Appwrite",
  "Stripe Connect", "SendGrid", "Sentry", "GitHub Actions", "Jest", "Vitest",
  "Playwright", "Maestro",
];

export default function BublHubCaseStudy() {
  return (
    <div className="wrap cs-page">
      <Breadcrumbs current="BublHub" />
      <div className="tagline">
        <span className="tag">Case study</span>
        <span className="muted mono">2018 – present · relaunching 2027</span>
      </div>
      <h1 className="cs-title">
        A ticketing platform, web to payouts, built by a team of one
      </h1>
      <p className="lede" style={{ marginTop: 24 }}>
        BublHub is where organisers run events, communities and teams. I
        designed and built all of it: the Next.js web app, the Expo mobile app,
        the Node.js backend and Stripe Connect payouts. I launched it, took it
        offline to rebuild the infrastructure and add features, and I&apos;m
        relaunching it in 2027.
      </p>

      <div className="cs-grid">
        <article className="prose" data-reveal>
          <h2>Year by year</h2>
          <div className="years">
            {years.map((year) => (
              <div key={`${year.y}-${year.lead}`} className="year">
                <span className="y">{year.y}</span>
                <p>
                  <b>{year.lead}</b> {year.text}
                </p>
              </div>
            ))}
          </div>

          <h2>Testing</h2>
          <div className="trio">
            <div className="card">
              <b>~475</b>
              <span>test files, Jest and Vitest</span>
            </div>
            <div className="card">
              <b>~50</b>
              <span>Maestro journeys on a real phone</span>
            </div>
            <div className="card">
              <b>CI</b>
              <span>on every repo, GitHub Actions</span>
            </div>
          </div>
          <p>
            Unit and integration tests run in Jest and Vitest across the web
            app, the mobile app and the backend. Playwright covers end-to-end
            flows on the web. On mobile, about 50 Maestro journeys run on a
            physical phone, because a simulator hides the problems real devices
            have.
          </p>

          <h2>Payments</h2>
          <p>
            Money is the part of BublHub where a bug costs someone real money,
            so it has the most guardrails.
          </p>
          <ul>
            <li>Stripe Connect onboarding with account status handling, so an organiser can&apos;t be paid out until their account is ready.</li>
            <li>Organisers keep the full face value. The only fee is a buyer-side booking fee, calculated on the price after any discount and rounded to the penny.</li>
            <li>The fee formula is set by config and is the same in all three repos, so web, app and backend can&apos;t disagree on a price.</li>
            <li>Payouts go through Stripe Connect seven days after an event ends, run by a scheduled job.</li>
            <li>A payout holds itself if ticket holders raise flags or the organiser&apos;s verification is incomplete. Refunds are blocked once a payout is marked paid.</li>
            <li>While in testing, every payout needs manual approval.</li>
          </ul>

          <h2>Incidents</h2>
          <p>
            Sentry reports errors from the web app, the mobile app and the
            backend into one place, and every change goes through staging
            before production.
          </p>
          <div className="callout">
            <span className="eyebrow">Incident · email provider suspension</span>
            <p>Our email provider suspended the account.</p>
          </div>

          <nav className="nextcs" aria-label="More case studies">
            <Link href="/projects">
              <span aria-hidden="true">←</span> All projects
            </Link>
            <Link href="/projects/tea-powered-projects">
              Next: Tea Powered Projects <span aria-hidden="true">→</span>
            </Link>
          </nav>
        </article>

        <aside data-reveal="1" className="card facts" aria-labelledby="facts-h">
          <h2 id="facts-h">Key facts</h2>
          <dl>
            <dt>Role</dt>
            <dd>Founder and sole engineer</dd>
            <dt>Period</dt>
            <dd>2018 – present</dd>
            <dt>Team size</dt>
            <dd>1</dd>
            <dt>Stack</dt>
            <dd>
              <Chips items={stack} />
            </dd>
            <dt>Links</dt>
            <dd>
              <a href="https://www.bublhub.com">bublhub.com</a>
              <br />
              <a href={GITHUB_URL}>github.com/AshersDev24</a>
            </dd>
          </dl>
        </aside>
      </div>
    </div>
  );
}
