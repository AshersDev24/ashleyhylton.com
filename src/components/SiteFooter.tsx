// src/components/SiteFooter.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "@/components/ui/icons";

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
              href="https://www.linkedin.com/in/ashley-hylton-8b1271142/"
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
              Projects
              <span className="ml-0.5 opacity-70" aria-hidden="true">
                <IconArrowRight />
              </span>
            </Link>

            <Link href="/about" className="footer-link">
              About
              <span className="ml-0.5 opacity-70" aria-hidden="true">
                <IconArrowRight />
              </span>
            </Link>

            <Link href="/contact" className="footer-link">
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
