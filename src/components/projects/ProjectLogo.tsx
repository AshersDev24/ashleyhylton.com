import Image from "next/image";
import React from "react";

export function ProjectLogo({
  slug,
  title,
  size = "sm",
}: {
  slug: string;
  title: string;
  size?: "sm" | "lg";
}) {
  const cls = size === "lg" ? "project-logo project-logo-lg" : "project-logo";
  const imgSize = size === "lg" ? 44 : 32;
  const imgCls =
    size === "lg" ? "h-10 w-10 object-contain" : "h-8 w-8 object-contain";

  if (slug === "bublhub") {
    return (
      <div className={cls}>
        <Image
          src="/images/Glowlogo.png"
          alt={`${title} logo`}
          width={imgSize}
          height={imgSize}
          className={imgCls}
        />
      </div>
    );
  }

  if (slug === "tea-powered-projects") {
    return (
      <div className={cls}>
        <Image
          src="/images/tea-powered-icon.webp"
          alt={`${title} logo`}
          width={imgSize}
          height={imgSize}
          className={imgCls}
        />
      </div>
    );
  }

  return (
    <div className={cls}>
      <span
        className={
          size === "lg"
            ? "text-sm font-medium opacity-70"
            : "text-xs font-medium opacity-70"
        }
      >
        •
      </span>
    </div>
  );
}
