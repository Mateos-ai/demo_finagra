import { Hero } from "@/components/sections/hero";
import { Solution } from "@/components/sections/solution";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhoWeServe } from "@/components/sections/who-we-serve";
import { BecomeRep } from "@/components/sections/become-rep";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Container } from "@/components/section";
import { thesis } from "@/content/site";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Thesis strip */}
      <section className="border-y border-border bg-background py-16 md:py-20">
        <Container className="max-w-4xl text-center">
          <p className="eyebrow mb-4 justify-center">{thesis.eyebrow}</p>
          <p className="text-2xl font-medium leading-snug text-foreground md:text-[1.9rem] md:leading-[1.25]">
            {thesis.body}
          </p>
        </Container>
      </section>

      <Solution />
      <HowItWorks />
      <WhoWeServe />
      <BecomeRep />
      <Faq />
      <Contact />
    </>
  );
}
