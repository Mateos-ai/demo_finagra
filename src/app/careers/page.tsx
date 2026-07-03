import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/section";
import { Photo } from "@/components/photo";
import { Button } from "@/components/ui/button";
import { careers } from "@/content/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build the future of rural agriculture. Work that matters, in places that matter.",
};

export default function CareersPage() {
  return (
    <>
      <section className="bg-field-soft">
        <Container className="grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-xl">
            <Eyebrow>{careers.hero.eyebrow}</Eyebrow>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-[3.2rem] md:leading-[1.05]">
              {careers.hero.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {careers.hero.subtitle}
            </p>
            <Button asChild className="mt-8 h-11 rounded-xl px-6">
              <Link href="#open-roles">See open roles ↓</Link>
            </Button>
          </div>
          <Photo
            src="/images/careers.jpg"
            alt="A team working together across terraced farmland"
            aspect="aspect-[4/3]"
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </Container>
      </section>

      <Section id="open-roles">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Open roles
          </h2>
          <ul className="mt-8 divide-y divide-border rounded-2xl border border-border">
            {careers.roles.map((role) => (
              <li
                key={role.title}
                className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {role.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="size-3.5" />
                      {role.location}
                    </span>
                    <span>·</span>
                    <span>{role.type}</span>
                  </p>
                </div>
                <Button asChild variant="outline" className="h-10 rounded-xl px-5">
                  <Link href="/#contact">
                    Apply
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-muted-foreground">
            Don&apos;t see the right role?{" "}
            <Link
              href="/#contact"
              className="font-medium text-green-700 underline underline-offset-4 hover:text-green-800"
            >
              Get in touch
            </Link>{" "}
            — we&apos;re always looking for great people.
          </p>
        </Container>
      </Section>
    </>
  );
}
