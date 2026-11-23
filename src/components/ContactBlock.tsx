import Link from "next/link";
import { CV_PAGE, EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/content/site";
import { CopyEmail } from "./CopyEmail";

/** The big email address with its copy button. */
export function EmailLine() {
  return (
    <div className="contact-head">
      <a className="email" href={`mailto:${EMAIL}`}>
        {EMAIL}
      </a>
      <CopyEmail email={EMAIL} />
    </div>
  );
}

export function ContactLinks() {
  return (
    <ul className="links">
      <li>
        <a className="card" href={`mailto:${EMAIL}`}>
          <span className="k">Email</span>
          <span className="v">{EMAIL}</span>
        </a>
      </li>
      <li>
        <a className="card" href={GITHUB_URL}>
          <span className="k">GitHub</span>
          <span className="v">github.com/AshersDev24</span>
        </a>
      </li>
      <li>
        <a className="card" href={LINKEDIN_URL}>
          <span className="k">LinkedIn</span>
          <span className="v">linkedin.com/in/ashley-hylton</span>
        </a>
      </li>
      <li>
        <Link className="card" href={CV_PAGE}>
          <span className="k">CV</span>
          <span className="v">Download PDF</span>
        </Link>
      </li>
    </ul>
  );
}
