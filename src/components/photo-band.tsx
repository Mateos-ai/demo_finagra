import Image from "next/image";
import type { Stat } from "@/components/stat-grid";

/**
 * Full-width photographic band. Optionally overlays a centered statement
 * or a row of glass stat cards; renders the image alone otherwise.
 */
export function PhotoBand({
  src,
  alt,
  eyebrow,
  statement,
  stats,
}: {
  src: string;
  alt: string;
  eyebrow?: string;
  statement?: string;
  stats?: readonly Stat[];
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative flex min-h-[320px] items-center py-14 md:min-h-[440px]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
        />

        {statement ? (
          <>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, color-mix(in oklch, var(--green-900) 55%, transparent) 0%, color-mix(in oklch, var(--green-900) 75%, transparent) 100%)",
              }}
            />
            <div className="relative mx-auto w-full max-w-4xl px-6 text-center md:px-10">
              {eyebrow ? (
                <p className="eyebrow mb-4 justify-center !text-green-200">
                  {eyebrow}
                </p>
              ) : null}
              <p className="text-3xl font-bold leading-tight text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.35)] md:text-5xl md:leading-[1.12]">
                {statement}
              </p>
            </div>
          </>
        ) : null}

        {stats ? (
          <>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, color-mix(in oklch, var(--green-900) 30%, transparent) 0%, color-mix(in oklch, var(--green-900) 60%, transparent) 100%)",
              }}
            />
            <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10">
              <dl className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5" data-reveal>
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/20 bg-white/10 p-5 text-center backdrop-blur-md md:p-7"
                  >
                    <dt
                      className="text-3xl font-bold tracking-tight text-lime-300 md:text-[2.6rem]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {stat.value}
                    </dt>
                    <dd className="mt-1.5 text-xs leading-snug text-white/85 md:text-sm">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
