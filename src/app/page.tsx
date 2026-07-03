import { Hero } from "@/components/sections/hero";
import { Solution } from "@/components/sections/solution";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhoWeServe } from "@/components/sections/who-we-serve";
import { BecomeRep } from "@/components/sections/become-rep";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { PhotoBand } from "@/components/photo-band";
import { Container } from "@/components/section";
import { thesis } from "@/content/site";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Thesis strip — THE MODEL */}
      <section
        id="model"
        className="scroll-mt-20 border-y border-border bg-background py-16 md:py-20"
      >
        <Container className="max-w-4xl space-y-4 text-center">
          <p className="eyebrow mb-4 justify-center">{thesis.eyebrow}</p>
          {thesis.paragraphs.map((para, i) => (
            <p
              key={i}
              className="text-2xl font-medium leading-snug text-foreground md:text-[1.9rem] md:leading-[1.25]"
            >
              {para}
            </p>
          ))}
        </Container>
      </section>

      <Solution />
      <HowItWorks />
      <WhoWeServe />

      <PhotoBand
        src="/images/field-aerial.jpg"
        alt="Aerial view of a combine harvester working a productive field"
        statement="Turning underperforming farmland into productive, high-yield operations, led by local entrepreneurs."
      />

      <BecomeRep />
      <Faq />
      <Contact />
    </>
  );
}
