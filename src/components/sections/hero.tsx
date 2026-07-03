import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Container } from "@/components/section";
import { Photo } from "@/components/photo";
import { Button } from "@/components/ui/button";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-field-soft">
      <Container className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-[2.6rem] font-bold leading-[1.06] tracking-tight text-foreground sm:text-6xl md:text-[4.2rem]">
            {hero.title}{" "}
            <span className="text-green-600">{hero.titleAccent}</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {hero.subtitle}
          </p>
          <div className="mt-9">
            <Button asChild className="btn-glow h-12 rounded-xl px-8 text-base">
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>

        <Photo
          src="/images/hero-corn-wide.jpg"
          alt="A rural representative holding a fresh harvest of maize in the field"
          aspect="aspect-[4/3] md:aspect-[16/9]"
          priority
          sizes="(min-width: 1024px) 1100px, 100vw"
          className="mt-14 rounded-3xl shadow-2xl shadow-green-900/10"
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
