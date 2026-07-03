import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/section";
import { Button } from "@/components/ui/button";
import { becomeRep, repRegions } from "@/content/site";

export const metadata: Metadata = {
  title: "Become a REP",
  description: becomeRep.body,
};

export default function BecomeRepIndex() {
  return (
    <Section className="bg-field-soft">
      <Container className="max-w-3xl py-8">
        <Eyebrow>{becomeRep.eyebrow}</Eyebrow>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Choose your region
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {becomeRep.body}
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {Object.values(repRegions).map((r) => (
            <Link
              key={r.slug}
              href={`/become-a-rep/${r.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-lg hover:shadow-green-900/5"
            >
              <span className="flex items-center gap-3 text-lg font-semibold text-foreground">
                <span className="text-2xl">{r.flag}</span>
                {r.country}
              </span>
              <ArrowRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-green-700" />
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild variant="outline" className="h-10 rounded-xl px-5">
            <Link href="/#become-a-rep">Learn more about the REP model</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
