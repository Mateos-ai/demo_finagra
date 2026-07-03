import { cn } from "@/lib/utils";

export type Stat = { value: string; label: string };

export function StatGrid({
  stats,
  className,
  tone = "onDark",
}: {
  stats: readonly Stat[];
  className?: string;
  tone?: "onDark" | "onLight";
}) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 gap-6 md:grid-cols-4",
        className,
      )}
    >
      {stats.map((stat) => (
        <div key={stat.label}>
          <dt
            className={cn(
              "text-3xl font-bold tracking-tight md:text-4xl",
              tone === "onDark" ? "text-white" : "text-green-700",
            )}
            style={{ fontFamily: "var(--font-display)" }}
          >
            {stat.value}
          </dt>
          <dd
            className={cn(
              "mt-1.5 text-sm leading-snug",
              tone === "onDark" ? "text-green-100/80" : "text-muted-foreground",
            )}
          >
            {stat.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}
