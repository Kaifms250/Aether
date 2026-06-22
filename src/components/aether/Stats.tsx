import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return v;
}

const stats = [
  { value: 124, suffix: "+", label: "Curated brands" },
  { value: 3800, suffix: "+", label: "Products in rotation" },
  { value: 48, suffix: "h", label: "Average dispatch" },
  { value: 99, suffix: "%", label: "5-star fulfilment" },
];

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section id="story" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="text-[0.7rem] uppercase tracking-[0.32em] text-aether mb-4">
              02 / Manifesto
            </p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.88]">
              Commerce, but
              <br />
              <span className="text-aether-gradient">cinematic.</span>
            </h2>
            <p className="mt-8 text-lg text-platinum/90 leading-relaxed max-w-md">
              Aether is a small house that ships fewer, better things. We obsess over
              the cardboard, the unboxing, the weight of the metal in your hand —
              because every detail is the brand.
            </p>
            <div className="mt-10 flex items-center gap-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              <span className="h-px w-12 bg-platinum/40" />
              Est. 2026 — Designed in Reykjavík
            </div>
          </div>

          <div ref={ref} className="lg:col-span-7 grid grid-cols-2 gap-px bg-white/5 rounded-3xl overflow-hidden glass">
            {stats.map((s, i) => (
              <StatCell key={i} {...s} active={inView} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCell({
  value,
  suffix,
  label,
  active,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
  delay: number;
}) {
  const n = useCountUp(value, active);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="bg-background p-10 lg:p-14"
    >
      <div className="font-display text-6xl md:text-7xl leading-none text-platinum-gradient">
        {n.toLocaleString()}
        <span className="text-aether">{suffix}</span>
      </div>
      <div className="mt-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </div>
    </motion.div>
  );
}
