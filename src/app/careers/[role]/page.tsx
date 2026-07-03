import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Briefcase, Check, MapPin } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/section";
import { ApplyForm } from "@/components/apply-form";
import { Badge } from "@/components/ui/badge";
import { careers, type CareerRole } from "@/content/site";

export function generateStaticParams() {
  return careers.roles.map((role) => ({ role: role.slug }));
}

type Params = { role: string };

function getRole(slug: string): CareerRole | undefined {
  return careers.roles.find((r) => r.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { role } = await params;
  const data = getRole(role);
  if (!data) return { title: "Careers" };
  return { title: data.title, description: data.summary };
}

export default async function RolePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { role } = await params;
  const data = getRole(role);
  if (!data) notFound();

  return (
    <>
      <section className="bg-field-soft">
        <Container className="py-16 md:py-20">
          <Link
            href="/careers"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            All open roles
          </Link>
          <div className="mt-6 max-w-3xl">
            <Eyebrow>Careers</Eyebrow>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {data.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {data.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Badge variant="secondary" className="gap-1.5 px-3 py-1 text-sm">
                <MapPin className="size-3.5" />
                {data.location}
              </Badge>
              <Badge variant="secondary" className="gap-1.5 px-3 py-1 text-sm">
                <Briefcase className="size-3.5" />
                {data.type}
              </Badge>
            </div>
          </div>
        </Container>
      </section>

      <Section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  About the role
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {data.about}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  What you&apos;ll do
                </h2>
                <ul className="mt-4 space-y-3">
                  {data.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground">
                      <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  What we&apos;re looking for
                </h2>
                <ul className="mt-4 space-y-3">
                  {data.lookingFor.map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground">
                      <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-700">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:sticky lg:top-24 lg:self-start">
              <ApplyForm roleTitle={data.title} />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
