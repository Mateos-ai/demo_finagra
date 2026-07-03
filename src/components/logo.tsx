import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Finagra wordmark. The mark is a growth glyph — three rising strokes
 * (green · earth · sky) evoking a field taking off.
 * Swap <LogoMark> for an uploaded /public asset when brand art is ready.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-7 w-7", className)}
      aria-hidden="true"
      fill="none"
    >
      <rect x="4" y="17" width="6" height="11" rx="3" fill="var(--earth-500)" />
      <rect x="13" y="10" width="6" height="18" rx="3" fill="var(--green-600)" />
      <rect x="22" y="4" width="6" height="24" rx="3" fill="var(--sky-500)" />
    </svg>
  );
}

export function Logo({
  className,
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      aria-label="Finagra home"
      className={cn("flex items-center gap-2.5", className)}
    >
      <LogoMark />
      <span
        className="text-[1.35rem] font-bold tracking-tight text-foreground"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Finagra
      </span>
    </Link>
  );
}
