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

export default function Index() {
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
