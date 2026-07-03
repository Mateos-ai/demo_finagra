import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/section";
import { StatGrid } from "@/components/stat-grid";
import { Button } from "@/components/ui/button";
import { becomeRep } from "@/content/site";

export function BecomeRep() {
  return (
    <Section id="become-a-rep" className="py-20 md:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl px-8 py-14 md:px-14 md:py-16">
          <Image
            src="/images/rep-entrepreneur.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 1100px, 100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(150deg, color-mix(in oklch, var(--green-800) 92%, transparent) 0%, color-mix(in oklch, var(--green-900) 96%, transparent) 100%)",
            }}
          />
          <div className="relative">
          <p className="eyebrow mb-4 !text-green-200">{becomeRep.eyebrow}</p>
          <h2 className="max-w-3xl text-3xl font-bold text-white md:text-[2.5rem] md:leading-[1.1]">
            {becomeRep.title}
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-green-100/80">
            {becomeRep.body}
          </p>

          <StatGrid
            stats={becomeRep.stats}
            className="mt-12 border-t border-white/15 pt-10"
          />

          <div className="mt-12 grid gap-x-8 gap-y-6 border-t border-white/15 pt-10 sm:grid-cols-2">
            {becomeRep.receives.map((item) => (
              <div key={item.title}>
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-green-100/75">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-11 flex flex-wrap gap-3">
            {becomeRep.regions.map((region) => (
              <Button
                key={region.href}
                asChild
                className="h-11 rounded-xl bg-white px-6 text-[0.95rem] text-green-900 hover:bg-green-50"
              >
                <Link href={region.href}>
                  Become a REP in {region.label}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            ))}
          </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
