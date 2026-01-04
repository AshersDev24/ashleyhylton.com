"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {}, [error]);

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-3xl border border-black/10 p-8">
        <div className="text-xs opacity-70">Something went wrong</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          An error occurred
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed opacity-80">
          Try again, or go back to a safe page. If it keeps happening, it’s
          likely a bug in the site and I’ll fix it.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={reset}
            className="rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-2xl border border-black/15 px-5 py-3 text-sm font-medium hover:bg-black/5"
          >
            Go home
          </Link>
          <Link
            href="/contact"
            className="rounded-2xl border border-black/15 px-5 py-3 text-sm font-medium hover:bg-black/5"
          >
            Contact
          </Link>
        </div>

        {process.env.NODE_ENV === "development" && (
          <div className="mt-6 rounded-2xl border border-black/10 bg-black/5 p-4">
            <div className="text-xs font-medium opacity-70">Debug</div>
            <pre className="mt-2 whitespace-pre-wrap text-xs opacity-80">
              {error.message}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
