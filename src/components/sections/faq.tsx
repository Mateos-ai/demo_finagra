import { Container, Section, SectionHeading } from "@/components/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/content/site";

export function Faq() {
  return (
    <Section id="faq" className="bg-muted/40">
      <Container className="max-w-3xl">
        <div data-reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered."
            align="center"
          />
        </div>
        <Accordion
          type="single"
          collapsible
          className="mt-12 w-full space-y-3"
          data-reveal
        >
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card px-5 shadow-xs transition-colors last:border-b data-[state=open]:border-lime-500/50"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}
