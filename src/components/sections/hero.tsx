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
          <p className="eyebrow mb-6 justify-center">{hero.eyebrow}</p>
          <h1 className="text-[2.9rem] font-bold leading-[1.04] tracking-tight text-foreground sm:text-6xl md:text-[5rem]">
            {hero.title}
            <br />
            <span className="relative inline-block">
              <span className="accent-serif text-green-700">
                {hero.titleAccent}
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full md:-bottom-3"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M3 9 C 70 3, 230 2.5, 297 6.5"
                  stroke="var(--lime-400)"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {hero.subtitle}
          </p>
          <div className="mt-9">
            <Button asChild variant="glow" className="h-12 rounded-full px-8 text-base">
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>

        <Photo
          src="/images/hero.webp"
          alt="A drone flying over terraced farmland in a lush green valley"
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
