import { Hero } from "@/components/sections/hero";
import { Solution } from "@/components/sections/solution";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhoWeServe } from "@/components/sections/who-we-serve";
import { BecomeRep } from "@/components/sections/become-rep";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { PhotoBand } from "@/components/photo-band";
import { Container } from "@/components/section";
import { becomeRep, thesis } from "@/content/site";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Thesis strip — THE MODEL */}
      <section
        id="model"
        className="scroll-mt-20 border-y border-border bg-background py-16 md:py-24"
      >
        <Container className="max-w-4xl text-center" >
          <div data-reveal>
            <p className="eyebrow mb-6 justify-center">{thesis.eyebrow}</p>
            <p className="text-[1.7rem] font-semibold leading-snug tracking-tight text-foreground md:text-4xl md:leading-[1.2]">
              {thesis.paragraphs[0]}
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-xl font-medium leading-snug text-muted-foreground md:text-2xl md:leading-[1.35]">
              {thesis.paragraphs[1]}
            </p>
          </div>
        </Container>
      </section>

      <Solution />
      <HowItWorks />
      <WhoWeServe />

      <PhotoBand
        src="/images/field-aerial.jpg"
        alt="Aerial view of a combine harvester working a productive field"
        stats={becomeRep.stats}
      />

      <BecomeRep />
      <Faq />
      <Contact />
    </>
  );
}
