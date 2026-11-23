import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The old BublHub v2 write-up is now part of the main case study.
      {
        source: "/projects/bublhub/v2",
        destination: "/projects/bublhub",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
