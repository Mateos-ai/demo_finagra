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
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered."
          align="center"
        />
        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-[0.95rem] leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}
