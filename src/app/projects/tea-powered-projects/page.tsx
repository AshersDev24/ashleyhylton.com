import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Chips } from "@/components/Chips";
import { BagIcon, BrowserIcon, HouseIcon, PhoneIcon } from "@/components/icons";
import {
  TEA_POWERED_PERIOD,
  teaPoweredClients,
  teaPoweredMix,
} from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Tea Powered Projects case study",
  description: `My commercial work as a full-stack developer at Tea Powered Projects, ${TEA_POWERED_PERIOD}: twelve projects for eleven clients, from Shopify stores and web apps to a React Native app and business websites.`,
  path: "/projects/tea-powered-projects",
});

const kinds = [
  {
    icon: <BagIcon />,
    title: "Online shops",
    text: "Reader's Shopify store for trade buyers of cement and concrete, and the e-commerce site for Peak Dinghy Spares.",
  },
  {
    icon: <PhoneIcon />,
    title: "Mobile app",
    text: "An internal React Native app for booking and tracking warrant runs, with the forms filled in on the device. Built for a client, not yet launched.",
  },
  {
    icon: <BrowserIcon />,
    title: "Web apps",
    text: "On-demand platforms for Humanatees Home Tutoring and Navigate Neurodiversity OT, and a PHP-backed CMS with a Next.js front end that client sites moved onto without losing SEO.",
  },
  {
    icon: <HouseIcon />,
    title: "Business websites",
    text: "Sites for local trades, an aesthetics clinic, a charity and a video studio, built to win work through search, plus enterprise web support for Langley Holdings.",
  },
];

const stack = [
  "Next.js", "React", "TypeScript", "Tailwind", "PHP", "MySQL", "Shopify",
  "React Native", "GitLab CI", "GitHub Actions",
];

const mixLabel =
  "Twelve projects by type: " +
  teaPoweredMix.map((m) => `${m.n} ${m.label.toLowerCase()}`).join(", ");

export default function TeaPoweredCaseStudy() {
  return (
    <div className="wrap cs-page">
      <Breadcrumbs current="Tea Powered Projects" />
      <div className="tagline">
        <span className="tag">Case study · commercial</span>
        <span className="muted mono">{TEA_POWERED_PERIOD}</span>
      </div>
      <h1 className="cs-title">
        Websites, shops, web apps and a mobile app, shipped for clients
      </h1>
      <p className="lede" style={{ marginTop: 24 }}>
        My commercial experience. As a full-stack developer at Tea Powered
        Projects I worked on twelve client projects, from local trades and
        clinics to Langley Holdings, and from the front end down to
        e-commerce, booking flows, integrations and the database.
      </p>

      <div className="cs-grid">
        <article className="prose" data-reveal>
          <h2>What I built</h2>
          <div className="kinds3">
            {kinds.map((k) => (
              <div key={k.title} className="card lift">
                <div className="kicon">{k.icon}</div>
                <h3>{k.title}</h3>
                <p>{k.text}</p>
              </div>
            ))}
          </div>

          <h2>Clients I worked on</h2>
          <p>
            Twelve projects across eleven clients and an internal app. Each
            name links to the agency&apos;s own case study.
          </p>
          <div className="mix" role="img" aria-label={mixLabel}>
            {teaPoweredMix.map((m) => (
              <span
                key={m.label}
                className="seg"
                style={{ flex: `${m.n} 1 0`, opacity: m.opacity }}
              />
            ))}
          </div>
          <ul className="mixkey" aria-hidden="true">
            {teaPoweredMix.map((m) => (
              <li key={m.label}>
                <span className="sw" style={{ opacity: m.opacity }} />
                {m.label} <b>{m.n}</b>
              </li>
            ))}
          </ul>
          <ul className="clients">
            {teaPoweredClients.map((c) => (
              <li key={c.name}>
                <a className="card lift" href={c.url}>
                  <span className="ctype">{c.type}</span>
                  <b>{c.name}</b>
                  <span className="cwhat">{c.what}</span>
                </a>
              </li>
            ))}
          </ul>

          <h2>Working with clients</h2>
          <p>
            Client work means real deadlines, changing requirements and people
            who aren&apos;t engineers. I worked directly with stakeholders to
            pin down requirements and explained technical decisions in plain
            language. I also made releases more reliable with CI/CD work across
            GitLab pipelines and GitHub Actions.
          </p>

          <nav className="nextcs" aria-label="More case studies">
            <Link href="/projects/bublhub">
              <span aria-hidden="true">←</span> BublHub case study
            </Link>
            <Link href="/projects">
              All projects <span aria-hidden="true">→</span>
            </Link>
          </nav>
        </article>

        <aside data-reveal="1" className="card facts" aria-labelledby="tp-facts-h">
          <h2 id="tp-facts-h">Key facts</h2>
          <dl>
            <dt>Role</dt>
            <dd>Full-Stack Software Developer</dd>
            <dt>Period</dt>
            <dd>{TEA_POWERED_PERIOD}</dd>
            <dt>Work</dt>
            <dd>Business websites · online shops · web apps · a React Native app</dd>
            <dt>Stack</dt>
            <dd>
              <Chips items={stack} />
            </dd>
            <dt>Clients</dt>
            <dd>11, from local trades to Langley Holdings</dd>
            <dt>Links</dt>
            <dd>
              <a href="https://www.teapowered.pro/work">teapowered.pro/work</a>
              <br />
              <a href="https://www.reader.co.uk/">reader.co.uk</a>
            </dd>
          </dl>
        </aside>
      </div>
    </div>
  );
}
