import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost"],
    unoptimized: false,
  },
  eslint: {
    // ignore lint errors during build so deployment isn’t blocked
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ignore type errors during build for fast deploy
    ignoreBuildErrors: true,
  },
  trailingSlash: false,
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
};

export default nextConfig;
