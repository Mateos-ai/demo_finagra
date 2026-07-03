import Link from "next/link";
import { LogoMark } from "@/components/logo";
import { Container } from "@/components/section";
import { footer, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="section-dark mt-auto overflow-hidden">
      <Container className="pt-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-xs">
            <Link
              href="/"
              aria-label="Finagra home"
              className="flex items-center gap-2.5"
            >
              <LogoMark />
              <span
                className="text-[1.35rem] font-bold tracking-tight text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Finagra
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {site.tagline}. Combining capital, technology, and local
              representatives to build climate-smart farms that strengthen
              rural economies.
            </p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-lime-300">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/65 transition-colors hover:text-lime-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span className="font-[family-name:var(--font-mono-brand)] text-xs tracking-wide">
            {site.tagline}
          </span>
        </div>
      </Container>

      {/* Oversized watermark, cropped at the page edge */}
      <div
        className="pointer-events-none -mb-[0.26em] mt-6 select-none overflow-hidden"
        aria-hidden="true"
      >
        <p
          className="whitespace-nowrap text-center text-[18vw] font-bold leading-none tracking-tight text-white/[0.05]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          finagra
        </p>
      </div>
    </footer>
  );
}
