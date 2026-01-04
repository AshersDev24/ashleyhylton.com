"use client";

import Image from "next/image";
import Link from "next/link";

function IconGithub() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 19c-4 1.5-4-2.5-6-3m12 6v-3.2c0-.9.3-1.6.8-2-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.3-3.3-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.4 1.3 1-.3 2-.4 3-.4s2 .1 3 .4c2.4-1.6 3.4-1.3 3.4-1.3.7 1.7.2 3 .1 3.3.8.9 1.3 2 1.3 3.3 0 4.6-2.7 5.6-5.3 5.9.5.4.9 1.2.9 2.5V22"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconGitlab() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 21 3.5 14.8 6.1 4.7h3.5L12 11l2.4-6.3h3.5l2.6 10.1L12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.5 9.5V19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6.5 6.2h.01"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M10.5 19v-5.2c0-2.3 1.2-3.5 3.2-3.5 2 0 3.3 1.2 3.3 3.5V19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 11.2V19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="footer-avatar">
              <Image
                src="/images/me.jpg"
                alt="Ashley Hylton"
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <div className="text-sm font-semibold tracking-tight">
                Ashley Hylton
              </div>
              <div
                className="text-xs"
                style={{ color: "rgba(244,246,247,0.62)" }}
              >
                Full-Stack • UI-focused • Systems-first
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <a
              className="footer-link"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="footer-link-icon" aria-hidden="true">
                <IconGithub />
              </span>
              GitHub
              <span className="ml-0.5 opacity-70" aria-hidden="true">
                <IconArrowRight />
              </span>
            </a>

            <a
              className="footer-link"
              href="https://gitlab.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="footer-link-icon" aria-hidden="true">
                <IconGitlab />
              </span>
              GitLab
              <span className="ml-0.5 opacity-70" aria-hidden="true">
                <IconArrowRight />
              </span>
            </a>

            <a
              className="footer-link"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="footer-link-icon" aria-hidden="true">
                <IconLinkedIn />
              </span>
              LinkedIn
              <span className="ml-0.5 opacity-70" aria-hidden="true">
                <IconArrowRight />
              </span>
            </a>
          </div>
        </div>

        <div
          className="mt-5 flex flex-col gap-2 border-t pt-4"
          style={{ borderColor: "rgba(244,246,247,0.08)" }}
        >
          <div className="text-xs" style={{ color: "rgba(244,246,247,0.62)" }}>
            © {new Date().getFullYear()} Ashley Hylton
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/projects" className="footer-link">
              <span className="footer-link-icon" aria-hidden="true">
                <IconArrowRight />
              </span>
              Projects
              <span className="ml-0.5 opacity-70" aria-hidden="true">
                <IconArrowRight />
              </span>
            </Link>

            <Link href="/about" className="footer-link">
              <span className="footer-link-icon" aria-hidden="true">
                <IconArrowRight />
              </span>
              About
              <span className="ml-0.5 opacity-70" aria-hidden="true">
                <IconArrowRight />
              </span>
            </Link>

            <Link href="/contact" className="footer-link">
              <span className="footer-link-icon" aria-hidden="true">
                <IconArrowRight />
              </span>
              Contact
              <span className="ml-0.5 opacity-70" aria-hidden="true">
                <IconArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
