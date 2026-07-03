import type { ImageLoaderProps } from "next/image";

// Static export serves images as plain files; this loader only prepends the
// GitHub Pages basePath (inlined at build via NEXT_PUBLIC_BASE_PATH).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function imageLoader({ src }: ImageLoaderProps): string {
  return src.startsWith("/") ? `${basePath}${src}` : src;
}
