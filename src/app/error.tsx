"use client";

import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="hero" style={{ paddingBottom: 120 }}>
      <div className="wrap">
        <span className="eyebrow">Something went wrong</span>
        <h1 className="h2 page-title">An error occurred</h1>
        <p className="lede" style={{ marginTop: 20 }}>
          Try again, or go back to the home page.
        </p>
        <div className="ctas">
          <button className="btn btn-primary" type="button" onClick={reset}>
            Try again
          </button>
          <Link className="btn btn-ghost" href="/">
            Go home
          </Link>
        </div>
        {process.env.NODE_ENV === "development" && (
          <pre className="mono" style={{ marginTop: 24, whiteSpace: "pre-wrap" }}>
            {error.message}
          </pre>
        )}
      </div>
    </section>
  );
}
