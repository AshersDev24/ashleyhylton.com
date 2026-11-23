import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RevealObserver } from "@/components/RevealObserver";
import { DEFAULT_TITLE, SITE_NAME, SITE_URL } from "@/lib/seo";
import { DEFAULT_THEME, themeInitScript } from "@/lib/theme";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
  // Only small labels use it, so it shouldn't compete with the fonts the
  // hero text needs on a slow connection.
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  // Each page sets its own description, canonical URL, Open Graph and
  // Twitter card through pageMetadata() in src/lib/seo.ts.
};

export const viewport: Viewport = {
  themeColor: "#0E1013",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // The inline script may change data-theme before React hydrates.
    <html
      lang="en-GB"
      data-theme={DEFAULT_THEME}
      className={`${bodyFont.variable} ${headingFont.variable} ${monoFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <RevealObserver />
      </body>
    </html>
  );
}
