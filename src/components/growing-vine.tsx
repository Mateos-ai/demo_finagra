"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-grown vine in the left page gutter.
 *
 * A faint wavy track runs the full viewport height; the vivid stem draws
 * itself over the track as you scroll, a lime growth tip glides along the
 * curve, and foliage unfurls once the tip passes it. Foliage density
 * increases with depth: sparse leaves up top, clusters of leaves and
 * flowers toward the bottom, and a full bloom at the very end.
 * Desktop-only (xl+), pointer-events-none, purely decorative.
 */

const W = 36; // strip width in px
const AMP = 9; // wave amplitude
const SEGS = 7; // S-curve segments
const N = 18; // foliage anchors (spacing tightens toward the bottom)

type Item = {
  x: number;
  y: number;
  angle: number;
  side: 1 | -1;
  t: number;
  kind: "leaf" | "flower";
  color: number;
  scale: number;
  jitter: number;
  duration: number;
};

// Flower palette — brand colors up top, the whole meadow near the bottom.
const FLOWER_COLORS = [
  { petal: "var(--lime-400)", heart: "var(--green-700)" }, // lime
  { petal: "var(--earth-500)", heart: "var(--earth-700)" }, // marigold
  { petal: "var(--sky-500)", heart: "var(--sky-700)" }, // cornflower
  { petal: "oklch(0.82 0.12 350)", heart: "oklch(0.6 0.17 352)" }, // blossom pink
  { petal: "oklch(0.89 0.15 95)", heart: "var(--earth-700)" }, // sunflower
];

// Deterministic pseudo-random, stable across renders/resizes.
function hash(n: number): number {
  const s = Math.sin(n * 127.1) * 43758.5453;
  return s - Math.floor(s);
}

function buildPath(h: number): string {
  const cx = W / 2;
  let d = `M ${cx} 0`;
  const step = h / SEGS;
  for (let i = 0; i < SEGS; i++) {
    const y0 = i * step;
    const y1 = (i + 1) * step;
    const dir = i % 2 === 0 ? 1 : -1;
    d += ` C ${cx + AMP * dir} ${(y0 + step * 0.33).toFixed(1)}, ${
      cx + AMP * dir
    } ${(y1 - step * 0.33).toFixed(1)}, ${cx} ${y1.toFixed(1)}`;
  }
  return d;
}

// Teardrop leaf pointing up-and-out; rotated per anchor.
const LEAF_D = "M0 0 C 5.5 -1.5, 9.5 -6.5, 10 -13 C 4.5 -11.5, 0.5 -6, 0 0 Z";

function Flower({ color, r = 1 }: { color: number; r?: number }) {
  const { petal, heart } = FLOWER_COLORS[color] ?? FLOWER_COLORS[0];
  return (
    <>
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse
          key={deg}
          rx={3 * r}
          ry={5.5 * r}
          transform={`rotate(${deg}) translate(0 ${-5.5 * r})`}
          fill={petal}
          fillOpacity="0.92"
        />
      ))}
      <circle r={2.3 * r} fill={heart} />
    </>
  );
}

export function GrowingVine() {
  const stemRef = useRef<SVGPathElement>(null);
  const tipRef = useRef<SVGCircleElement>(null);
  const bloomRef = useRef<SVGGElement>(null);
  const itemRefs = useRef<(SVGGElement | null)[]>([]);
  const [height, setHeight] = useState(0);
  const [items, setItems] = useState<Item[]>([]);
  const [endPt, setEndPt] = useState<{ x: number; y: number } | null>(null);

  // Measure viewport height (SVG is rebuilt on resize).
  useEffect(() => {
    const measure = () => setHeight(window.innerHeight);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Compute foliage anchors along the real path geometry.
  // Depth-eased spacing: t = u^0.68 clusters anchors toward the bottom.
  useEffect(() => {
    const stem = stemRef.current;
    if (!stem || !height) return;
    const total = stem.getTotalLength();
    const next: Item[] = [];
    // Cycle order for the deep "meadow" flowers so every color shows up.
    const meadow = [3, 2, 4, 1, 0]; // pink, cornflower, sunflower, marigold, lime
    let deepFlowers = 0;
    for (let i = 0; i < N; i++) {
      const u = (i + 0.5) / N;
      const t = Math.pow(u, 0.68);
      const p = stem.getPointAtLength(t * total);
      const p2 = stem.getPointAtLength(Math.min(total, t * total + 2));
      const angle = (Math.atan2(p2.y - p.y, p2.x - p.x) * 180) / Math.PI;
      // flowers get likelier with depth: none up top, common below
      const kind: Item["kind"] =
        hash(i * 3 + 1) < (t - 0.25) * 0.9 ? "flower" : "leaf";
      // upper flowers stay on-brand; the deep ones cycle the whole meadow
      let color = hash(i * 7 + 2) < 0.6 ? 0 : 1;
      if (kind === "flower" && t >= 0.6) {
        color = meadow[deepFlowers % meadow.length];
        deepFlowers++;
      }
      next.push({
        x: p.x,
        y: p.y,
        angle,
        side: i % 2 === 0 ? 1 : -1,
        t,
        kind,
        color,
        // foliage also grows larger with depth
        scale: (0.72 + t * 0.55) * (0.88 + hash(i * 13 + 3) * 0.28),
        jitter: (hash(i * 17 + 5) - 0.5) * 26,
        duration: 0.45 + hash(i * 23 + 7) * 0.3,
      });
    }
    setItems(next);
    // Anchor the finale bloom a touch up the stem so it isn't edge-clipped.
    const e = stem.getPointAtLength(Math.max(0, total - 18));
    setEndPt({ x: e.x, y: e.y });
  }, [height]);

  // Scroll-driven growth, mutating the DOM directly (no re-renders).
  useEffect(() => {
    const stem = stemRef.current;
    if (!stem || !height || items.length === 0) return;

    const total = stem.getTotalLength();
    stem.style.strokeDasharray = `${total}`;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const apply = (p: number) => {
      stem.style.strokeDashoffset = `${total * (1 - p)}`;
      const tip = tipRef.current;
      if (tip) {
        const pt = stem.getPointAtLength(p * total);
        tip.setAttribute("cx", `${pt.x}`);
        tip.setAttribute("cy", `${pt.y}`);
        tip.setAttribute("r", p > 0.985 ? "0" : "3.5");
      }
      itemRefs.current.forEach((g, i) => {
        if (!g) return;
        const it = items[i];
        const grown = p >= it.t;
        const rot =
          it.kind === "leaf"
            ? it.angle + it.side * 62 + it.jitter
            : it.jitter * 2.2;
        g.style.transform = `translate(${it.x}px, ${it.y}px) rotate(${rot}deg) scale(${grown ? it.scale : 0})`;
      });
      const bloom = bloomRef.current;
      if (bloom) {
        bloom.style.transform = `scale(${p > 0.985 ? 1 : 0})`;
      }
    };

    if (reduced) {
      apply(1);
      return;
    }

    let raf = 0;
    let current = -1;
    const tick = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const target =
        max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 1;
      if (current < 0) current = target;
      current += (target - current) * 0.09; // gentle lag, feels organic
      if (Math.abs(target - current) < 0.0004) current = target;
      apply(current);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [height, items]);

  if (!height) return null;
  const d = buildPath(height);

  return (
    <div
      className="pointer-events-none fixed left-4 top-0 z-30 hidden h-screen select-none xl:block"
      aria-hidden="true"
    >
      <svg
        width={W}
        height={height}
        viewBox={`0 0 ${W} ${height}`}
        fill="none"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id="vine-stem" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--green-600)" />
            <stop offset="70%" stopColor="var(--green-500)" />
            <stop offset="100%" stopColor="var(--lime-500)" />
          </linearGradient>
        </defs>

        {/* faint full-height track */}
        <path
          d={d}
          stroke="var(--green-600)"
          strokeOpacity="0.14"
          strokeWidth="2"
        />

        {/* the growing stem */}
        <path
          ref={stemRef}
          d={d}
          stroke="url(#vine-stem)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* foliage: leaves and flowers, denser toward the bottom */}
        {items.map((it, i) => (
          <g
            key={i}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            style={{
              transform: `translate(${it.x}px, ${it.y}px) scale(0)`,
              transition: `transform ${it.duration}s cubic-bezier(0.34, 1.56, 0.64, 1)`,
            }}
          >
            {it.kind === "leaf" ? (
              <path
                d={LEAF_D}
                fill={i % 3 === 2 ? "var(--lime-400)" : "var(--green-500)"}
                fillOpacity="0.9"
              />
            ) : (
              <Flower color={it.color} />
            )}
          </g>
        ))}

        {/* growth tip */}
        <circle
          ref={tipRef}
          cx={W / 2}
          cy="0"
          r="3.5"
          fill="var(--lime-400)"
          stroke="var(--green-700)"
          strokeWidth="1"
          style={{ transition: "r 0.3s ease" }}
        />

        {/* finale bloom at the end of the stem */}
        {endPt ? (
          <g style={{ transform: `translate(${endPt.x}px, ${endPt.y}px)` }}>
            <g
              ref={bloomRef}
              style={{
                transform: "scale(0)",
                transition:
                  "transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              <Flower color={0} r={1.5} />
            </g>
          </g>
        ) : null}
      </svg>
    </div>
  );
}
