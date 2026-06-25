import { CategoryStory, type Category } from "./CategoryStory";

const categories: Category[] = [
  {
    index: "03",
    name: "Electronics",
    tagline: "Computing, audio, and spatial — at the bleeding edge.",
    blurb:
      "From the first Vision Pro Studio to the quietest noise-cancelling we've ever stocked. Tested by engineers, vouched for by composers.",
    glyph: "◐",
    accent: "#8ab4ff",
    items: [
      { brand: "Apple", label: "Vision Pro Studio" },
      { brand: "Sony", label: "WH-1000XM6" },
      { brand: "Samsung", label: "Galaxy S26 Ultra" },
      { brand: "Logitech", label: "MX Master 4S" },
      { brand: "Apple", label: "MacBook Pro 16 M5" },
      { brand: "Dell", label: "XPS 14 OLED" },
      { brand: "HP", label: "Spectre x360" },
      { brand: "Sonos", label: "Era 300" },
      { brand: "Bose", label: "QC Ultra Earbuds" },
      { brand: "Canon", label: "EOS R5 Mk II" },
      { brand: "JBL", label: "Charge 6" },
      { brand: "Samsung", label: "Odyssey OLED G9" },
    ],
  },
  {
    index: "04",
    name: "Fashion",
    tagline: "Cut, cloth, and considered tailoring.",
    blurb:
      "A tight rotation of investment pieces from houses who still own their factories. Heritage cotton, certified wool, the occasional cashmere.",
    glyph: "◇",
    accent: "#c08aff",
    items: [
      { brand: "Aimé Leon Dore", label: "Wool Topcoat" },
      { brand: "Acne Studios", label: "Denim 1996" },
      { brand: "Stüssy", label: "8 Ball Knit" },
      { brand: "Carhartt WIP", label: "Detroit Jacket" },
      { brand: "A.P.C.", label: "Petit New Standard" },
      { brand: "Our Legacy", label: "Box Shirt" },
      { brand: "Lemaire", label: "Twisted Pant" },
      { brand: "Loro Piana", label: "Cashmere Crew" },
      { brand: "Norse Projects", label: "Aros Chino" },
      { brand: "Drake's", label: "Linen Camp Shirt" },
      { brand: "Sunspel", label: "Riviera Tee" },
      { brand: "Patagonia", label: "R1 Air Hoody" },
    ],
  },
  {
    index: "05",
    name: "Footwear",
    tagline: "Performance and craft, in one shelf.",
    blurb:
      "Carbon-plated racers next to hand-welted leathers. The full spectrum — from Saturday's long run to Friday's late dinner.",
    glyph: "▲",
    accent: "#ff7a59",
    items: [
      { brand: "Nike", label: "Alphafly 3" },
      { brand: "Adidas", label: "Samba OG" },
      { brand: "Puma", label: "Speedcat" },
      { brand: "New Balance", label: "1906R" },
      { brand: "Asics", label: "Gel-Kayano 31" },
      { brand: "Hoka", label: "Clifton 10" },
      { brand: "On", label: "Cloudmonster 2" },
      { brand: "Salomon", label: "XT-6" },
      { brand: "Vans", label: "Old Skool 36" },
      { brand: "Converse", label: "Chuck 70 Hi" },
      { brand: "Birkenstock", label: "Boston Suede" },
      { brand: "Common Projects", label: "Achilles Low" },
    ],
  },
  {
    index: "06",
    name: "Fitness",
    tagline: "Tools that disappear in your hand.",
    blurb:
      "Equipment for people who train every day and never want to think about gear. Powder-coated steel, machined aluminium, perfect knurl.",
    glyph: "◍",
    accent: "#90e0c0",
    items: [
      { brand: "Hyperice", label: "Hypervolt 3" },
      { brand: "Garmin", label: "Fenix 8 Pro" },
      { brand: "Whoop", label: "5.0 Strap" },
      { brand: "Rogue", label: "Ohio Bar" },
      { brand: "Theragun", label: "Pro Plus" },
      { brand: "Lululemon", label: "Align Mat 5mm" },
      { brand: "Eight Sleep", label: "Pod 4 Ultra" },
      { brand: "Concept2", label: "RowErg PM5" },
      { brand: "Peloton", label: "Bike+ 2025" },
      { brand: "Manduka", label: "Pro Black Mat" },
      { brand: "Bowflex", label: "SelectTech 1090" },
      { brand: "Garmin", label: "HRM-Pro Plus" },
    ],
  },
  {
    index: "07",
    name: "Home Decor",
    tagline: "Architecture, miniaturised.",
    blurb:
      "Lighting, ceramics, and small furniture from independents in Kyoto, Milan, and Mexico City. Every piece arrives crated, not boxed.",
    glyph: "◰",
    accent: "#e8c07a",
    items: [
      { brand: "HAY", label: "Pao Steel Lamp" },
      { brand: "Muuto", label: "Fiber Chair" },
      { brand: "Vitra", label: "Eames LCW" },
      { brand: "Menu", label: "JWDA Lamp" },
      { brand: "Gubi", label: "Bestlite BL5" },
      { brand: "Flos", label: "IC Lights T1" },
      { brand: "Artek", label: "Stool 60" },
      { brand: "&Tradition", label: "Flowerpot VP9" },
      { brand: "Carl Hansen", label: "CH24 Wishbone" },
      { brand: "Fritz Hansen", label: "Series 7" },
      { brand: "String", label: "Pocket Shelf" },
      { brand: "Marimekko", label: "Unikko Throw" },
    ],
  },
  {
    index: "08",
    name: "Accessories",
    tagline: "The small things you carry every day.",
    blurb:
      "Wallets, eyewear, watches, and travel — built to outlast the season they were bought in. Patina earned, never manufactured.",
    glyph: "◈",
    accent: "#6d6cff",
    items: [
      { brand: "Bellroy", label: "Note Sleeve" },
      { brand: "Persol", label: "714 Folding" },
      { brand: "Tudor", label: "Black Bay 58" },
      { brand: "Bose", label: "QC Ultra" },
      { brand: "Ray-Ban", label: "Meta Wayfarer" },
      { brand: "Oakley", label: "Sutro Lite" },
      { brand: "Tumi", label: "Alpha Backpack" },
      { brand: "Away", label: "Carry-On Aluminum" },
      { brand: "Montblanc", label: "Meisterstück 149" },
      { brand: "Mujjo", label: "Leather Wallet Case" },
      { brand: "Filson", label: "Original Briefcase" },
      { brand: "Apple", label: "Watch Ultra 3" },
    ],
  },
];

export function Categories() {
  return (
    <div id="categories" className="relative">
      {/* Anchor heading band */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-aether mb-3">
            Six chapters
          </p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.88] max-w-3xl">
            Each category, a <span className="text-aether-gradient">room of its own.</span>
          </h2>
        </div>
      </section>

      {categories.map((c, i) => (
        <CategoryStory key={c.name} category={c} i={i} />
      ))}
    </div>
  );
}
