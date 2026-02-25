import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "gw.alipayobjects.com",
      },
      {
        protocol: "https",
        hostname: "turbo.build",
      },
      {
        protocol: "https",
        hostname: "vitest.dev",
      },
      {
        protocol: "https",
        hostname: "cesium.com",
      },
    ],
  },
};

export default nextConfig;
