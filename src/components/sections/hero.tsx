import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Container } from "@/components/section";
import { Photo } from "@/components/photo";
import { Button } from "@/components/ui/button";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-field-soft">
      <Container className="py-20 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-[3.4rem] md:leading-[1.05]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {hero.subtitle}
          </p>
          <div className="mt-9">
            <Button asChild className="h-11 rounded-xl px-6 text-[0.95rem]">
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>

        <Photo
          src="/images/hero-corn-wide.jpg"
          alt="A rural entrepreneur holding a fresh harvest of maize in the field"
          aspect="aspect-[4/3] md:aspect-[3/2]"
          priority
          sizes="(min-width: 1024px) 1100px, 100vw"
          className="mt-12 shadow-xl shadow-green-900/5"
        />

        <Link
          href={hero.secondaryCta.href}
          className="group mt-12 flex items-center gap-4 text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="h-px flex-1 bg-border" />
          <span className="flex items-center gap-2 font-[family-name:var(--font-mono-brand)] text-xs font-medium uppercase tracking-[0.14em]">
            {hero.secondaryCta.label}
            <ArrowDown className="size-3.5 transition-transform group-hover:translate-y-0.5" />
          </span>
          <span className="h-px flex-1 bg-border" />
        </Link>
      </Container>
    </section>
  );
}
