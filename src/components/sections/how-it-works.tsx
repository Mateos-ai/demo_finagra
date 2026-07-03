import { Sparkles } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/section";
import { howItWorks } from "@/content/site";

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-muted/40">
      <Container>
        <div data-reveal>
          <SectionHeading
            eyebrow={howItWorks.eyebrow}
            title={howItWorks.title}
            intro={howItWorks.intro}
          />
        </div>

        <ol className="relative mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          {/* connecting line (desktop) */}
          <div
            className="absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-green-200 to-transparent md:block"
            aria-hidden="true"
          />
          {howItWorks.steps.map((step, i) => (
            <li
              key={step.step}
              data-reveal
              data-reveal-delay={i}
              className="relative rounded-2xl border border-border bg-background p-7 pt-8 transition-shadow hover:shadow-lg hover:shadow-green-900/5"
            >
              <span className="relative z-10 flex size-11 items-center justify-center rounded-full bg-green-600 font-[family-name:var(--font-mono-brand)] text-sm font-semibold text-white shadow-md shadow-green-900/20">
                {step.step}
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <div
          data-reveal
          className="mt-10 flex items-center justify-center gap-2.5 rounded-2xl border border-green-200 bg-green-50 px-6 py-5 text-center"
        >
          <Sparkles className="size-5 shrink-0 text-green-700" />
          <p className="text-base font-semibold text-green-800 md:text-lg">
            {howItWorks.closing}
          </p>
        </div>
      </Container>
    </Section>
  );
}
