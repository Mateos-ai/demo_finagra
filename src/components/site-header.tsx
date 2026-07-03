"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { Container } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SiteLink, withBasePath } from "@/components/site-link";
import { nav, repNav } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // The sheet's scroll lock swallows hash scrolling if navigation happens
  // while it is still closing, so close first and navigate afterwards.
  const navigateFromSheet =
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setOpen(false);
      window.setTimeout(() => window.location.assign(withBasePath(href)), 300);
    };

  // Representative region pages get a contextual nav focused on applying.
  const isRepPage = /^\/become-a-rep\/[^/]+$/.test(pathname);
  const links = isRepPage ? repNav.links : nav;
  const cta = isRepPage
    ? repNav.cta
    : ({ label: "Join Us", href: "/#contact" } as const);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((item) => (
              <SiteLink
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </SiteLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="glow"
              className="hidden h-9 px-4 text-sm md:inline-flex"
            >
              <SiteLink href={cta.href}>{cta.label}</SiteLink>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <Logo />
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-2 flex flex-col gap-1 px-4">
                  {links.map((item) => (
                    <SiteLink
                      key={item.href}
                      href={item.href}
                      onClick={navigateFromSheet(item.href)}
                      className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-muted"
                    >
                      {item.label}
                    </SiteLink>
                  ))}
                  <Button asChild variant="glow" className="mt-3 h-10">
                    <SiteLink
                      href={cta.href}
                      onClick={navigateFromSheet(cta.href)}
                    >
                      {cta.label}
                    </SiteLink>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}
