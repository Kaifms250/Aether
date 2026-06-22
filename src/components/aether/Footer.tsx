import { AetherLogo } from "./Logo";

const cols = [
  {
    title: "Shop",
    links: ["Electronics", "Fashion", "Footwear", "Fitness", "Home", "Accessories"],
  },
  {
    title: "Studio",
    links: ["Manifesto", "Sustainability", "Press", "Careers", "Contact"],
  },
  {
    title: "Care",
    links: ["Shipping", "Returns", "Warranty", "Concierge", "FAQ"],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-24 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12">
          <div className="col-span-2 md:col-span-3">
            <AetherLogo />
            <p className="mt-6 max-w-sm text-sm text-muted-foreground leading-relaxed">
              A small house of curated commerce. Fewer, better things — assembled with
              the precision of a watchmaker and the patience of a librarian.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {["X", "IG", "BE", "LI"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="h-10 w-10 rounded-full glass inline-flex items-center justify-center text-[0.7rem] tracking-widest hover:bg-aether/20 transition"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-[0.65rem] uppercase tracking-[0.28em] text-aether mb-5">
                {c.title}
              </div>
              <ul className="space-y-3 text-sm text-platinum/85">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="link-underline hover:text-platinum">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
          <div>© 2026 Aether House — All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-platinum">Privacy</a>
            <a href="#" className="hover:text-platinum">Terms</a>
            <a href="#" className="hover:text-platinum">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
