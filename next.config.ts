import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: {
      enabled: false,
    },
  },
};

export default nextConfig;
