import Image from "next/image";
import Link from "next/link";
import { CV_PAGE, TEA_POWERED_PERIOD } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import photo from "@/assets/ashley-hylton.png";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Ashley Hylton: self-taught full-stack TypeScript engineer in Nottingham. Client work at Tea Powered Projects, eight years building BublHub, and ten years in customer service before that.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="hero">
      <div className="wrap">
        <span className="eyebrow">About</span>
        <h1 className="name" style={{ fontSize: "clamp(48px, 8vw, 104px)" }}>
          Ashley Hylton
        </h1>
        <div className="about-grid">
          <Image
            className="about-photo"
            src={photo}
            alt="Ashley Hylton"
            sizes="(max-width: 960px) 380px, 380px"
            preload
          />
          <div className="stack">
            <p className="big-p">
              I&apos;m a full-stack TypeScript engineer in Nottingham. At Tea
              Powered Projects I built Shopify stores, mobile apps and web apps
              for clients. Since 2018 I&apos;ve also been building BublHub, a
              ticketing and community platform: I launched it, took it offline
              to rebuild the infrastructure and add features, and I&apos;m
              relaunching it in 2027.
            </p>
            <p>
              I taught myself to code in 2018 through lots of small projects,
              writing everything by hand from the basics up, long before AI
              coding tools. Today I use AI agents to move faster, and I review
              and test everything they produce.
            </p>
            <p>
              Before engineering I spent more than ten years in customer
              service, contact centres and legal admin, and I studied law
              (LLB).
            </p>
            <p>
              I care about software other people can rely on: tests that run
              on real devices, changes that go through staging first, and
              errors that reach me before they reach a support inbox.
            </p>

            <dl className="kv" style={{ marginTop: 40, fontSize: 16 }}>
              <dt>Looking for</dt>
              <dd>A permanent engineering role on a product team</dd>
              <dt>Working</dt>
              <dd>Hybrid, Nottingham and around</dd>
              <dt>Strongest in</dt>
              <dd>TypeScript, Next.js, React Native with Expo, Node.js, Stripe Connect, testing</dd>
              <dt>Commercial</dt>
              <dd>
                Full-Stack Software Developer, Tea Powered Projects,{" "}
                {TEA_POWERED_PERIOD}: Shopify stores, mobile apps and web apps
                for clients
              </dd>
              <dt>Also</dt>
              <dd>10+ years customer service · LLB Law, Sheffield Hallam University</dd>
            </dl>

            <div className="ctas">
              <Link className="btn btn-primary" href={CV_PAGE}>
                Download CV
              </Link>
              <Link className="btn btn-ghost" href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
