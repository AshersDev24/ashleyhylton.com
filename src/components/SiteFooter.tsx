import Link from "next/link";
import { LOCATION, REPO_URL } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="wrap">
        <span>Ashley Hylton · {LOCATION}</span>
        <span className="foot-links">
          <Link href="/contact">Get in touch</Link>
          <a href={REPO_URL}>Built with Next.js and TypeScript</a>
        </span>
      </div>
    </footer>
  );
}
