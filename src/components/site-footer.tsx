import Link from "next/link";
import { Logo } from "@/components/logo";
import { Container } from "@/components/section";
import { footer, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-muted/40">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {site.tagline}. Combining capital, technology, and local
              representatives to build climate-smart farms that strengthen rural
              economies.
            </p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span className="font-[family-name:var(--font-mono-brand)] text-xs tracking-wide">
            {site.tagline}
          </span>
        </div>
      </Container>
    </footer>
  );
}
