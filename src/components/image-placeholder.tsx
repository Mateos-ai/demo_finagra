import { cn } from "@/lib/utils";

/**
 * Branded placeholder for imagery not yet uploaded to /public.
 * Drop real photos in and replace these with <Image /> when assets arrive.
 */
export function ImagePlaceholder({
  label,
  className,
  aspect = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border",
        aspect,
        className,
      )}
      style={{
        background:
          "linear-gradient(135deg, var(--green-100) 0%, var(--sky-50) 55%, var(--earth-50) 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, color-mix(in oklch, var(--green-600) 22%, transparent) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <span className="rounded-full border border-border/70 bg-background/70 px-3 py-1 font-[family-name:var(--font-mono-brand)] text-xs font-medium tracking-wide text-muted-foreground backdrop-blur-sm">
          {label}
        </span>
      </div>
    </div>
  );
}
