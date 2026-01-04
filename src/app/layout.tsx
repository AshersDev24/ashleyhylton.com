import "./globals.css";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Inter, Space_Grotesk } from "next/font/google";

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
  metadataBase: new URL("https://ashleyhylton.com"),
  title: {
    default: "Ashley Hylton | Software Developer",
    template: "%s | Ashley Hylton",
  },
  description:
    "Developer portfolio: product work, client work, and case studies.",
  openGraph: {
    type: "website",
    title: "Ashley Hylton | Software Developer",
    description:
      "Developer portfolio: product work, client work, and case studies.",
    url: "https://ashleyhylton.com",
    siteName: "Ashley Hylton",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashley Hylton | Software Developer",
    description:
      "Developer portfolio: product work, client work, and case studies.",
  },
  alternates: {
    canonical: "https://ashleyhylton.com",
  },
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
