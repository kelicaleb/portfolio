import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  // Change this to your GitHub repo name if not using custom domain
  // basePath: "/your-repo-name",
  // assetPrefix: "/your-repo-name",
};

export default nextConfig;
