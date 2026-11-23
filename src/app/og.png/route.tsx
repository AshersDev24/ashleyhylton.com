import { ImageResponse } from "next/og";
import { JOB_TITLE, SITE_NAME } from "@/lib/seo";

// Rendered once at build time and served as a static PNG.
export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0E1013",
          color: "#ECEDEF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#A3A9B5" }}>
          ashleyhylton.com
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 120,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            {SITE_NAME}
          </div>
          <div style={{ display: "flex", fontSize: 46, marginTop: 28, color: "#FBBF24" }}>
            {JOB_TITLE}
          </div>
          <div style={{ display: "flex", fontSize: 30, marginTop: 18, color: "#A3A9B5" }}>
            Next.js · React Native · tested and in production
          </div>
        </div>
        <div style={{ display: "flex", height: 12, width: 220, background: "#F59E0B", borderRadius: 6 }} />
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
