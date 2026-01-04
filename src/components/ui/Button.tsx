import Link from "next/link";
import React from "react";
import { IconArrowRight, IconExternal } from "@/components/ui/icons";

export function Button({
  href,
  external,
  variant,
  icon,
  children,
}: {
  href: string;
  external?: boolean;
  variant: "primary" | "secondary";
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  const className =
    variant === "primary" ? "btn btn-primary" : "btn btn-secondary";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {icon ? <span className="btn-icon">{icon}</span> : null}
        <span className="btn-label">{children}</span>
        <span className="btn-trail" aria-hidden="true">
          <IconExternal />
        </span>
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {icon ? <span className="btn-icon">{icon}</span> : null}
      <span className="btn-label">{children}</span>
      <span className="btn-trail" aria-hidden="true">
        <IconArrowRight />
      </span>
    </Link>
  );
}

export default Button;
