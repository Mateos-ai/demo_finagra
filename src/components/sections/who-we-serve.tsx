import { Container, Section, SectionHeading } from "@/components/section";
import { Photo } from "@/components/photo";
import { whoWeServe } from "@/content/site";

export function WhoWeServe() {
  return (
    <Section id="who-we-serve">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-reveal className="order-last lg:order-first">
            <Photo
              src="/images/who-we-serve.jpg"
              alt="A farmer tending high-value crops in the field"
              aspect="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/4.6]"
              className="shadow-xl shadow-green-900/5"
            />
          </div>
          <div data-reveal data-reveal-delay="1">
            <SectionHeading
              eyebrow={whoWeServe.eyebrow}
              title={whoWeServe.title}
            />
            <div className="mt-9 space-y-7">
              {whoWeServe.groups.map((group) => (
                <div
                  key={group.title}
                  className="group border-l-2 border-green-200 pl-6 transition-colors hover:border-green-500"
                >
                  <h3 className="text-lg font-bold text-foreground">
                    {group.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {group.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
