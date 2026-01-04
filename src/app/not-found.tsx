import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-3xl border border-black/10 p-8">
        <div className="text-xs opacity-70">404</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed opacity-80">
          The page you’re looking for doesn’t exist (or it’s been moved). Use
          the links below to get back on track.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            Go home
          </Link>
          <Link
            href="/projects"
            className="rounded-2xl border border-black/15 px-5 py-3 text-sm font-medium hover:bg-black/5"
          >
            View projects
          </Link>
          <Link
            href="/contact"
            className="rounded-2xl border border-black/15 px-5 py-3 text-sm font-medium hover:bg-black/5"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
