import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero" style={{ paddingBottom: 120 }}>
      <div className="wrap">
        <span className="eyebrow">404</span>
        <h1 className="h2 page-title">Page not found</h1>
        <p className="lede" style={{ marginTop: 20 }}>
          That page doesn&apos;t exist, or it has moved.
        </p>
        <div className="ctas">
          <Link className="btn btn-primary" href="/">
            Go home
          </Link>
          <Link className="btn btn-ghost" href="/projects">
            View projects
          </Link>
        </div>
      </div>
    </section>
  );
}
