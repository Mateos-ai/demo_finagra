import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function LogoMark({
  className,
  size = 30,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Image
      src="/images/logo.png"
      alt=""
      width={size}
      height={size}
      className={cn("h-[30px] w-[30px]", className)}
      priority
    />
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
