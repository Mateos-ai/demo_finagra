import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/section";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Button } from "@/components/ui/button";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-field-soft">
      <Container className="grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-[3.4rem] md:leading-[1.05]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {hero.subtitle}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild className="h-11 rounded-xl px-6 text-[0.95rem]">
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-xl px-6 text-[0.95rem]"
            >
              <Link href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative">
          <ImagePlaceholder
            label="Hero — climate-smart farm photography"
            aspect="aspect-[4/5]"
            className="shadow-xl shadow-green-900/5"
          />
        </div>
      </Container>
    </section>
  );
}
