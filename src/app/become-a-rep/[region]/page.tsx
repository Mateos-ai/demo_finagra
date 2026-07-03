import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Section, Eyebrow, SectionHeading } from "@/components/section";
import { StatGrid } from "@/components/stat-grid";
import { Photo } from "@/components/photo";
import { Contact } from "@/components/sections/contact";
import { becomeRep, repRegions, type RepRegionSlug } from "@/content/site";

export function generateStaticParams() {
  return Object.keys(repRegions).map((region) => ({ region }));
}

type Params = { region: string };

function getRegion(region: string) {
  return (repRegions as Record<string, (typeof repRegions)[RepRegionSlug]>)[region];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { region } = await params;
  const data = getRegion(region);
  if (!data) return { title: "Become a Representative" };
  return {
    title: `Become a Representative in ${data.country}`,
    description: data.definition,
  };
}

export default async function BecomeRepRegionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { region } = await params;
  const data = getRegion(region);
  if (!data) notFound();

  return (
    <>
      <section className="bg-field-soft">
        <Container className="py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-xl">
              <Eyebrow>Part of our team · {data.flag} {data.country}</Eyebrow>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-[3.2rem] md:leading-[1.05]">
                {data.headline}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {data.definition}
              </p>
            </div>
            <Photo
              src={data.image}
              alt={`Farming in ${data.country}`}
              aspect="aspect-[4/3]"
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>

          <div
            className="mt-12 overflow-hidden rounded-3xl px-8 py-12 md:px-12"
            style={{
              background:
                "linear-gradient(150deg, var(--green-800) 0%, var(--green-900) 100%)",
            }}
          >
            <p className="max-w-2xl text-xl font-medium leading-snug text-white md:text-2xl">
              {data.model}
            </p>
            <StatGrid
              stats={data.stats}
              className="mt-10 border-t border-white/15 pt-8"
            />
          </div>
        </Container>
      </section>

      <Section>
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="What representatives receive"
            title="Everything you need to farm at scale."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {becomeRep.receives.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border p-6"
              >
                <span className="font-[family-name:var(--font-mono-brand)] text-sm font-semibold text-green-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Contact showInterest={false} />
    </>
  );
}
