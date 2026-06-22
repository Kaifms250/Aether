import { createFileRoute } from "@tanstack/react-router";
import "@fontsource/bebas-neue/400.css";
import "@fontsource/barlow/300.css";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/500.css";
import "@fontsource/barlow/600.css";

import { SmoothScroll } from "@/components/aether/SmoothScroll";
import { Nav } from "@/components/aether/Nav";
import { Hero } from "@/components/aether/Hero";
import { BrandMarquee } from "@/components/aether/BrandMarquee";
import { Stats } from "@/components/aether/Stats";
import { Categories } from "@/components/aether/Categories";
import { Showcase } from "@/components/aether/Showcase";
import { Testimonials } from "@/components/aether/Testimonials";
import { Newsletter } from "@/components/aether/Newsletter";
import { Footer } from "@/components/aether/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aether — Objects worth keeping" },
      {
        name: "description",
        content:
          "Aether is a curated index of the world's most considered electronics, fashion, footwear, fitness, home, and accessories — in one cinematic shop.",
      },
      { property: "og:title", content: "Aether — Objects worth keeping" },
      {
        property: "og:description",
        content:
          "A curated house of fewer, better things. Electronics, fashion, and home — assembled with the precision of a watchmaker.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Aether — Objects worth keeping" },
      {
        name: "twitter:description",
        content:
          "A curated house of fewer, better things. Cinematic commerce, in one shop.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground overflow-x-clip">
      <SmoothScroll />
      <Nav />
      <Hero />
      <BrandMarquee />
      <Stats />
      <Categories />
      <Showcase />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
