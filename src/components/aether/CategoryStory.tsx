import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export type Category = {
  index: string;
  name: string;
  tagline: string;
  blurb: string;
  items: { label: string; brand: string }[];
  accent: string; // oklch / hex
  glyph: string; // emoji or symbol
};

export function CategoryStory({ category, i }: { category: Category; i: number }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const numberY = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);

  // Aurora wash colour per section
  useEffect(() => {
    // noop; placeholder for future per-section background scroll trigger
  }, []);

  const flip = i % 2 === 1;

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `radial-gradient(80% 60% at ${flip ? "80%" : "20%"} 40%, ${category.accent}26, transparent 60%), var(--background)`,
      }}
    >
      {/* big floating number */}
      <motion.div
        style={{ y: numberY }}
        className={`absolute ${flip ? "right-[-3vw]" : "left-[-3vw]"} top-1/2 -translate-y-1/2 select-none pointer-events-none`}
      >
        <span
          className="font-display leading-none"
          style={{
            fontSize: "clamp(18rem, 38vw, 42rem)",
            color: "transparent",
            WebkitTextStroke: "1px oklch(1 0 0 / 0.06)",
          }}
        >
          {category.index}
        </span>
      </motion.div>

      <div
        className={`relative z-10 mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 w-full ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        {/* Visual */}
        <motion.div
          style={{ y, scale, opacity }}
          className="lg:col-span-7 relative aspect-[5/4] lg:aspect-[7/6]"
        >
          <div
            className="absolute inset-0 rounded-[2.5rem] overflow-hidden glass-strong shadow-elevated"
            style={{
              background: `linear-gradient(135deg, ${category.accent}33, oklch(0.13 0.02 270) 60%)`,
            }}
          >
            {/* layered orbs */}
            <div
              className="absolute -top-1/4 -right-1/4 h-[120%] w-[120%] rounded-full blur-3xl opacity-60"
              style={{ background: category.accent }}
            />
            <div
              className="absolute inset-0 flex items-center justify-center text-[20rem] opacity-90 animate-float"
              aria-hidden
            >
              {category.glyph}
            </div>
            {/* corner badge */}
            <div className="absolute top-6 left-6 flex items-center gap-2 glass rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]">
              <span className="h-1.5 w-1.5 rounded-full bg-aether pulse-ring" />
              Live · {category.items.length} drops
            </div>
            {/* product chips */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 max-h-[55%] overflow-hidden">
              {category.items.slice(0, 8).map((it) => (
                <div
                  key={it.label}
                  className="glass-strong rounded-2xl px-4 py-3 text-xs"
                >
                  <div className="text-[0.65rem] uppercase tracking-[0.18em] text-aether">
                    {it.brand}
                  </div>
                  <div className="font-medium">{it.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            className="text-[0.7rem] uppercase tracking-[0.32em] text-aether mb-4"
          >
            {category.index} / Chapter
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl md:text-7xl xl:text-8xl leading-[0.85]"
          >
            {category.name}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-4 text-xl text-platinum/90 font-light tracking-wide"
          >
            {category.tagline}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ delay: 0.18, duration: 0.7 }}
            className="mt-6 text-muted-foreground leading-relaxed max-w-md"
          >
            {category.blurb}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ delay: 0.26 }}
            className="mt-10 flex items-center gap-3"
          >
            <a
              href="#shop"
              className="inline-flex items-center gap-3 rounded-full bg-platinum text-background px-7 py-3.5 text-xs uppercase tracking-[0.22em] font-medium magnetic hover:shadow-glow"
            >
              Explore {category.name.toLowerCase()}
              <span className="text-base">→</span>
            </a>
            <a
              href="#shop"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-xs uppercase tracking-[0.22em]"
            >
              {category.items.length} pieces
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
