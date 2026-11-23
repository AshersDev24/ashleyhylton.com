import { CV_PDF, GITHUB_URL, LINKEDIN_URL } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "CV",
  description:
    "Download Ashley Hylton's CV (PDF): full-stack TypeScript engineer, BublHub founder, and commercial client work at Tea Powered Projects.",
  path: "/cv",
});

export default function CvPage() {
  return (
    <section className="hero" style={{ paddingBottom: 120 }}>
      <div className="wrap">
        <span className="eyebrow">CV</span>
        <h1 className="h2 page-title">My CV</h1>
        <p className="lede" style={{ marginTop: 20 }}>
          Two pages: building BublHub end to end, my commercial work at Tea
          Powered Projects, the TypeScript stack I work in, and how I test and
          ship.
        </p>
        <div className="ctas">
          <a className="btn btn-primary" href={CV_PDF} download>
            Download CV (PDF)
          </a>
          <a className="btn btn-ghost" href={LINKEDIN_URL}>
            LinkedIn
          </a>
          <a className="btn btn-ghost" href={GITHUB_URL}>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
