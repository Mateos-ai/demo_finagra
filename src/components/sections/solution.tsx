import { Sprout, Cpu, Users, type LucideIcon } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { solution } from "@/content/site";

const icons: Record<string, LucideIcon> = { sprout: Sprout, cpu: Cpu, users: Users };

export function Solution() {
  return (
    <Section id="solution">
      <Container>
        <SectionHeading
          eyebrow={solution.eyebrow}
          title={solution.title}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {solution.pillars.map((pillar) => {
            const Icon = icons[pillar.icon] ?? Sprout;
            return (
              <Card
                key={pillar.title}
                className="border-border/80 transition-shadow hover:shadow-lg hover:shadow-green-900/5"
              >
                <CardContent className="p-7">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-green-50 text-green-700">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {pillar.body}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
