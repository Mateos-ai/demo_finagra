import type { NextConfig } from "next";

// GitHub Pages serves project sites from a subpath
// (https://mateos-ai.github.io/demo_finagra/), so the deploy workflow sets
// NEXT_PUBLIC_BASE_PATH=/demo_finagra. Local dev and custom-domain builds
// leave it unset.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // This project is the workspace root (a sibling lockfile exists in ~/mateos).
  turbopack: {
    root: __dirname,
  },
  // Static export — deploys to GitHub Pages / any static host, like mateos.
  // Remove `output` if you later need API routes / server rendering.
  output: "export",
  basePath,
  images: {
    // Custom loader prepends basePath to image srcs (unoptimized bypasses it).
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
};

export default nextConfig;
