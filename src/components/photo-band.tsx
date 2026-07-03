import Image from "next/image";

/**
 * Full-width photographic band with a dark overlay and a centered statement.
 */
export function PhotoBand({
  src,
  alt,
  eyebrow,
  statement,
}: {
  src: string;
  alt: string;
  eyebrow?: string;
  statement: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[340px] md:h-[420px]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in oklch, var(--green-900) 55%, transparent) 0%, color-mix(in oklch, var(--green-900) 75%, transparent) 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-4xl px-6 text-center md:px-10">
            {eyebrow ? (
              <p className="eyebrow mb-4 justify-center !text-green-200">
                {eyebrow}
              </p>
            ) : null}
            <p className="text-2xl font-bold leading-snug text-white md:text-4xl md:leading-[1.15]">
              {statement}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
