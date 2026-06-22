import { useState } from "react";
import { motion } from "motion/react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section id="newsletter" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] glass-strong p-12 md:p-20 overflow-hidden shadow-elevated"
        >
          {/* aurora bg */}
          <div className="absolute -top-1/2 -right-1/2 h-[150%] w-[150%] bg-aurora opacity-80 blur-2xl" />
          <div className="relative">
            <p className="text-[0.7rem] uppercase tracking-[0.32em] text-aether mb-4">
              11 / Access
            </p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.88] max-w-xl">
              First seat at every
              <br />
              <span className="text-aether-gradient">private drop.</span>
            </h2>
            <p className="mt-6 text-platinum/80 max-w-md leading-relaxed">
              One letter a month. New arrivals 48 hours early, members-only colourways,
              and the occasional film. No noise.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.includes("@")) setSent(true);
              }}
              className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@studio.com"
                className="flex-1 rounded-full glass px-6 py-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-aether/50 transition"
              />
              <button
                type="submit"
                className="rounded-full bg-platinum text-background px-8 py-4 text-xs uppercase tracking-[0.22em] font-medium magnetic hover:shadow-glow whitespace-nowrap"
              >
                {sent ? "Welcome aboard ◇" : "Request invite"}
              </button>
            </form>
            <p className="mt-4 text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
              No spam. Unsubscribe in one click.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
