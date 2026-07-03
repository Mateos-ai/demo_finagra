import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This project is the workspace root (a sibling lockfile exists in ~/mateos).
  turbopack: {
    root: __dirname,
  },
  // Static export — deploys to GitHub Pages / any static host, like mateos.
  // Remove `output` if you later need API routes / server rendering.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
