import { ContactLinks, EmailLine } from "@/components/ContactBlock";
import { StatusPill } from "@/components/StatusPill";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Email Ashley Hylton about permanent full-stack engineering roles. Remote preferred, or hybrid in the East Midlands.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="hero" style={{ paddingBottom: 120 }}>
      <div className="wrap">
        <StatusPill />
        <h1 className="eyebrow" style={{ marginTop: 40 }}>
          Contact
        </h1>
        <EmailLine />
        <p className="lede" style={{ marginTop: 20 }}>
          Email is quickest.
        </p>
        <ContactLinks />
      </div>
    </section>
  );
}
