"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-grown vine in the left page gutter.
 *
 * A faint wavy track runs the full viewport height; the vivid stem draws
 * itself over the track as you scroll (stroke-dash technique), a lime growth
 * tip glides along the curve, and leaves unfurl once the tip passes them.
 * Desktop-only (xl+), pointer-events-none, and purely decorative.
 */

const W = 36; // strip width in px
const AMP = 9; // wave amplitude
const SEGS = 7; // S-curve segments

type Leaf = { x: number; y: number; angle: number; side: 1 | -1; t: number };

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
const LEAF_D =
  "M0 0 C 5.5 -1.5, 9.5 -6.5, 10 -13 C 4.5 -11.5, 0.5 -6, 0 0 Z";

export function GrowingVine() {
  const stemRef = useRef<SVGPathElement>(null);
  const tipRef = useRef<SVGCircleElement>(null);
  const leafRefs = useRef<(SVGGElement | null)[]>([]);
  const [height, setHeight] = useState(0);
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  // Measure viewport height (SVG is rebuilt on resize).
  useEffect(() => {
    const measure = () => setHeight(window.innerHeight);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Compute leaf anchors along the real path geometry.
  useEffect(() => {
    const stem = stemRef.current;
    if (!stem || !height) return;
    const total = stem.getTotalLength();
    const next: Leaf[] = [];
    for (let i = 0; i < SEGS; i++) {
      const t = (i + 0.55) / SEGS; // mid-segment, where the curve bulges
      const p = stem.getPointAtLength(t * total);
      const p2 = stem.getPointAtLength(Math.min(total, t * total + 2));
      const angle = (Math.atan2(p2.y - p.y, p2.x - p.x) * 180) / Math.PI;
      next.push({ x: p.x, y: p.y, angle, side: i % 2 === 0 ? 1 : -1, t });
    }
    setLeaves(next);
  }, [height]);

  // Scroll-driven growth, mutating the DOM directly (no re-renders).
  useEffect(() => {
    const stem = stemRef.current;
    if (!stem || !height || leaves.length === 0) return;

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
        tip.setAttribute("r", p > 0.995 ? "5" : "3.5");
      }
      leafRefs.current.forEach((g, i) => {
        if (!g) return;
        const leaf = leaves[i];
        const grown = p >= leaf.t;
        g.style.transform = `translate(${leaf.x}px, ${leaf.y}px) rotate(${
          leaf.angle + leaf.side * 62
        }deg) scale(${grown ? 1 : 0})`;
      });
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
      const target = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 1;
      if (current < 0) current = target;
      current += (target - current) * 0.09; // gentle lag, feels organic
      if (Math.abs(target - current) < 0.0004) current = target;
      apply(current);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [height, leaves]);

  if (!height) return null;
  const d = buildPath(height);

  return (
    <div
      className="pointer-events-none fixed left-4 top-0 z-30 hidden h-screen select-none xl:block"
      aria-hidden="true"
    >
      <svg width={W} height={height} viewBox={`0 0 ${W} ${height}`} fill="none">
        <defs>
          <linearGradient id="vine-stem" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--green-600)" />
            <stop offset="70%" stopColor="var(--green-500)" />
            <stop offset="100%" stopColor="var(--lime-500)" />
          </linearGradient>
        </defs>

        {/* faint full-height track */}
        <path d={d} stroke="var(--green-600)" strokeOpacity="0.14" strokeWidth="2" />

        {/* the growing stem */}
        <path
          ref={stemRef}
          d={d}
          stroke="url(#vine-stem)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* leaves */}
        {leaves.map((leaf, i) => (
          <g
            key={i}
            ref={(el) => {
              leafRefs.current[i] = el;
            }}
            style={{
              transform: `translate(${leaf.x}px, ${leaf.y}px) scale(0)`,
              transition:
                "transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            <path
              d={LEAF_D}
              fill={i % 3 === 2 ? "var(--lime-400)" : "var(--green-500)"}
              fillOpacity="0.9"
            />
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
      </svg>
    </div>
  );
}
