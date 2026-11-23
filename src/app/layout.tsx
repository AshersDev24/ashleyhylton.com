import "./globals.css";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Inter, Space_Grotesk } from "next/font/google";
import { DEFAULT_TITLE, SITE_NAME, SITE_URL } from "@/lib/seo";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  // Each page sets its own description, canonical URL, Open Graph and
  // Twitter card through pageMetadata() in src/lib/seo.ts.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${headingFont.variable} min-h-dvh`}
      >
        <SiteHeader />
        <main className="mx-auto max-w-5xl px-4 py-10 md:py-12">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
