import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/dearpost-quiz",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
