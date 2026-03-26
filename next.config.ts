import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/travel-supplier",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
