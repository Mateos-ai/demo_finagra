import { Sprout, Cpu, Users, type LucideIcon } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/section";
import { solution } from "@/content/site";

const icons: Record<string, LucideIcon> = { sprout: Sprout, cpu: Cpu, users: Users };

export function Solution() {
  return (
    <Section id="solution">
      <Container>
        <div data-reveal>
          <SectionHeading eyebrow={solution.eyebrow} title={solution.title} />
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {solution.pillars.map((pillar, i) => {
            const Icon = icons[pillar.icon] ?? Sprout;
            return (
              <div
                key={pillar.title}
                data-reveal
                data-reveal-delay={i}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/8"
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "var(--green-100)" }}
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex size-13 items-center justify-center rounded-2xl bg-green-50 text-green-700 transition-colors duration-300 group-hover:bg-green-600 group-hover:text-white">
                      <Icon className="size-6" />
                    </div>
                    <span className="font-[family-name:var(--font-mono-brand)] text-sm font-semibold text-green-600/60">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {pillar.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
