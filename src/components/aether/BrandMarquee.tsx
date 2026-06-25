/**
 * Official brand logos via logo.dev public CDN.
 * Uses a publishable demo token; safe to ship client-side.
 */
const LOGO_TOKEN = "pk_X-1zO13GSgeOoUrIuJ6GMQ";

const brands = [
  { name: "Apple", domain: "apple.com" },
  { name: "Nike", domain: "nike.com" },
  { name: "Adidas", domain: "adidas.com" },
  { name: "Samsung", domain: "samsung.com" },
  { name: "Sony", domain: "sony.com" },
  { name: "Puma", domain: "puma.com" },
  { name: "JBL", domain: "jbl.com" },
  { name: "Logitech", domain: "logitech.com" },
  { name: "HP", domain: "hp.com" },
  { name: "Dell", domain: "dell.com" },
  { name: "Bose", domain: "bose.com" },
  { name: "Canon", domain: "canon.com" },
];

function logoUrl(domain: string) {
  return `https://img.logo.dev/${domain}?token=${LOGO_TOKEN}&format=png&size=120&retina=true`;
}

export function BrandMarquee() {
  // duplicate list for seamless loop
  const loop = [...brands, ...brands];

  return (
    <section id="brands" className="relative py-24 overflow-hidden border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 mb-12 flex items-end justify-between gap-8">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-aether mb-3">
            01 / Trusted house
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[0.9]">
            The world's most
            <br />
            <span className="text-aether-gradient">obsessive</span> brands.
          </h2>
        </div>
        <p className="hidden md:block max-w-sm text-sm text-muted-foreground">
          Curated from a hand-picked roster of category leaders. We don't list everything —
          only what holds up under a magnifying glass.
        </p>
      </div>

      {/* fade edges */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="flex animate-marquee gap-16 will-change-transform">
          {loop.map((b, i) => (
            <div
              key={`${b.name}-${i}`}
              className="flex h-20 w-40 shrink-0 items-center justify-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              title={b.name}
            >
              <img
                src={logoUrl(b.domain)}
                alt={`${b.name} logo`}
                loading="lazy"
                decoding="async"
                width={120}
                height={48}
                className="max-h-12 max-w-[120px] object-contain"
                style={{ filter: "brightness(0) invert(0.95)" }}
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  // 1st failure: drop the mono filter and retry with brand colors
                  if (!img.dataset.fallback) {
                    img.dataset.fallback = "color";
                    img.style.filter = "none";
                    return;
                  }
                  // 2nd failure: swap to a text wordmark so the slot never goes blank
                  if (img.dataset.fallback !== "text") {
                    img.dataset.fallback = "text";
                    const parent = img.parentElement;
                    if (parent) {
                      img.remove();
                      const span = document.createElement("span");
                      span.textContent = b.name;
                      span.className =
                        "font-display text-xl tracking-wide text-platinum/80";
                      parent.appendChild(span);
                    }
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
