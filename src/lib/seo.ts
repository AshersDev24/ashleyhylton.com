import type { Metadata } from "next";

export const SITE_URL = "https://ashleyhylton.com";
export const SITE_NAME = "Ashley Hylton";
export const DEFAULT_TITLE = "Ashley Hylton | Full-Stack TypeScript Engineer";

const OG_IMAGE = { url: "/images/me.jpg", alt: "Ashley Hylton" };

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
    // Absolute, because a plain string title in a nested layout (such as
    // /projects) stops the root title template reaching pages below it.
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
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
