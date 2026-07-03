import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Rounded, cover-cropped photo that fills an aspect box.
 * Images live in /public/images and are served as-is (static export).
 */
export function Photo({
  src,
  alt,
  className,
  aspect = "aspect-[4/3]",
  priority = false,
  sizes = "(min-width: 1024px) 40vw, 100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  aspect?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-muted",
        aspect,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
