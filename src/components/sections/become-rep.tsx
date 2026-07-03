import Link from "next/link";
import {
  ArrowRight,
  Coins,
  Sprout,
  Handshake,
  Check,
  type LucideIcon,
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/section";
import { Photo } from "@/components/photo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { becomeRep } from "@/content/site";

const icons: Record<string, LucideIcon> = {
  coins: Coins,
  sprout: Sprout,
  handshake: Handshake,
};

export function BecomeRep() {
  return (
    <Section id="become-a-rep">
      <Container>
        {/* Header + photo */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div data-reveal>
            <SectionHeading
              eyebrow={becomeRep.eyebrow}
              title={becomeRep.title}
              intro={becomeRep.body}
            />
          </div>
          <div data-reveal data-reveal-delay="1">
            <Photo
              src="/images/rep-entrepreneur.jpg"
              alt="A young rural representative in the field"
              aspect="aspect-[4/3]"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="shadow-xl shadow-green-900/5"
            />
          </div>
        </div>

        {/* The deal, in three steps */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {becomeRep.model.map((step, i) => {
            const Icon = icons[step.icon] ?? Coins;
            return (
              <Card
                key={step.title}
                data-reveal
                data-reveal-delay={i}
                className="border-border/80 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/8"
              >
                <CardContent className="p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-green-50 text-green-700">
                      <Icon className="size-6" />
                    </div>
                    <span className="font-[family-name:var(--font-mono-brand)] text-sm font-semibold text-green-600/70">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* What you receive */}
        <div
          className="mt-8 rounded-2xl border border-border bg-muted/40 p-8 md:p-10"
          data-reveal
        >
          <h3 className="text-sm font-semibold tracking-wide text-foreground">
            What you receive as a representative
          </h3>
          <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {becomeRep.receives.map((item) => (
              <div key={item.title} className="flex gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                <div>
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {becomeRep.regions.map((region) => (
            <Button
              key={region.href}
              asChild
              variant="glow"
              className="h-11 w-full rounded-full px-6 text-[0.95rem] sm:w-auto"
            >
              <Link href={region.href}>
                Become a Representative in {region.label}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          ))}
        </div>
      </Container>
    </Section>
  );
}
