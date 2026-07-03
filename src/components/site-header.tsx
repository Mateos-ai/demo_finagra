"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { Container } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              className="hidden h-9 px-4 text-sm md:inline-flex"
            >
              <Link href="#contact">Join Us</Link>
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
                  {nav.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-muted"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Button asChild className="mt-3 h-10">
                      <Link href="#contact">Join Us</Link>
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}
