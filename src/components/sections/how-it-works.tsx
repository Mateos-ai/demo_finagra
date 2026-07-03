import { Sparkles } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/section";
import { howItWorks } from "@/content/site";

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-muted/40">
      <Container>
        <SectionHeading
          eyebrow={howItWorks.eyebrow}
          title={howItWorks.title}
          intro={howItWorks.intro}
        />

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {howItWorks.steps.map((step) => (
            <li
              key={step.step}
              className="relative rounded-2xl border border-border bg-background p-7"
            >
              <span className="font-[family-name:var(--font-mono-brand)] text-sm font-semibold text-green-600">
                {step.step}
              </span>
              <h3 className="mt-3 text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex items-center justify-center gap-2 rounded-2xl border border-green-200 bg-green-50 px-6 py-5 text-center">
          <Sparkles className="size-5 shrink-0 text-green-700" />
          <p className="text-base font-semibold text-green-800">
            {howItWorks.closing}
          </p>
        </div>
      </Container>
    </Section>
  );
}
