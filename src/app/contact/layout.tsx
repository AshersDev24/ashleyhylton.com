import { pageMetadata } from "@/lib/seo";

// The contact page is a client component, so its metadata lives here.
export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Ashley Hylton about engineering roles or projects.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
