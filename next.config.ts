import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/our-gardens",
        destination: "/portfolio",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
