import type { Metadata } from "next";

// The apex domain redirects here, so canonical URLs must use www.
export const SITE_URL = "https://www.ashleyhylton.com";
export const SITE_NAME = "Ashley Hylton";
export const JOB_TITLE = "Full-Stack TypeScript Engineer";
export const DEFAULT_TITLE = `${SITE_NAME} | ${JOB_TITLE}`;

// Generated at build time by src/app/og.png/route.tsx.
const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: `${SITE_NAME}, ${JOB_TITLE}`,
};

type PageSeo = {
  /** Page title without the site name. Leave out for the home page. */
  title?: string;
  description: string;
  /** Path from the site root, starting with "/". */
  path: string;
};

/**
 * Full metadata for one page: its own title, description, canonical URL,
 * Open Graph and Twitter card.
 *
 * Next.js replaces (does not merge) a parent's `openGraph` and `twitter`
 * objects when a page sets them, so every field is set here rather than
 * relying on the root layout.
 */
export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;

  return {
    // Absolute, so a nested layout's title can never stop the root
    // template reaching pages below it.
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_GB",
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
