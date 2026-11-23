import { pageMetadata } from "@/lib/seo";

// The projects index is a client component, so its metadata lives here.
// Case-study pages under /projects set their own with generateMetadata.
export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Case studies: BublHub, an event ticketing and community platform across web, mobile and backend, and client delivery at Tea Powered Projects.",
  path: "/projects",
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
