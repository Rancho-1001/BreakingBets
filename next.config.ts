import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/BreakingBets",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
