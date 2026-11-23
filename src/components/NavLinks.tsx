"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CV_PAGE } from "@/content/site";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: CV_PAGE, label: "CV" },
];

export function NavLinks() {
  const pathname = usePathname();

  return links.map(({ href, label }) => {
    // Case studies live under /projects, so Projects stays marked on them.
    const current = pathname === href || pathname.startsWith(`${href}/`);
    return (
      <Link key={href} href={href} aria-current={current ? "page" : undefined}>
        {label}
      </Link>
    );
  });
}
