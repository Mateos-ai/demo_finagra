import { Container, Section, SectionHeading } from "@/components/section";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { whoWeServe } from "@/content/site";

export function WhoWeServe() {
  return (
    <Section id="who-we-serve">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <ImagePlaceholder
            label="Farmers & landowners in the field"
            aspect="aspect-[4/3]"
            className="order-last lg:order-first"
          />
          <div>
            <SectionHeading
              eyebrow={whoWeServe.eyebrow}
              title={whoWeServe.title}
            />
            <div className="mt-8 space-y-6">
              {whoWeServe.groups.map((group) => (
                <div
                  key={group.title}
                  className="border-l-2 border-green-200 pl-5"
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
