export interface ProductVariant {
  name: string;
  options: string[];
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: "fashion" | "beauty" | "accessories" | "essentials";
  categoryLabel: string;
  priceSAR: number;
  compareAtPriceSAR?: number;
  badge?: "BESTSELLER" | "NEW" | "CURATED EDIT";
  description: string;
  details: string[];
  materialsOrNotes: string;
  dimensionsOrVolume: string;
  images: string[];
  variants?: ProductVariant[];
  rating: number;
  reviewsCount: number;
  isBestseller?: boolean;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: "mb-001",
    name: "The Everyday Structure Bag",
    slug: "everyday-structure-bag",
    category: "accessories",
    categoryLabel: "Accessories",
    priceSAR: 780,
    compareAtPriceSAR: 890,
    badge: "BESTSELLER",
    isBestseller: true,
    description: "An architectural masterpiece in supple Italian taupe calfskin. Designed with clean beveled edges, brushed champagne-gold hardware, and an intentional interior designed for the modern woman.",
    details: [
      "Hand-finished in soft Italian pebble-grain calfskin leather",
      "Brushed champagne gold protective feet and custom turn-lock",
      "Suede-lined dual compartment with interior zippered pocket",
      "Detachable crossbody strap with custom engraved buckle",
    ],
    materialsOrNotes: "100% Full-grain calfskin exterior, sand suede microfiber lining",
    dimensionsOrVolume: "28cm W × 21cm H × 11cm D (Handle drop: 9cm)",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=900",
    ],
    variants: [
      { name: "Tone", options: ["Mocha Taupe", "Warm Ivory", "Espresso"] },
    ],
    rating: 4.9,
    reviewsCount: 38,
  },
  {
    id: "mb-002",
    name: "Soft Glow Lip Colour",
    slug: "soft-glow-lip-colour",
    category: "beauty",
    categoryLabel: "Beauty & Rituals",
    priceSAR: 165,
    badge: "BESTSELLER",
    isBestseller: true,
    description: "A nourishing botanical balm-lipstick infused with cold-pressed rosehip seed oil and damask rose extract. Melts into lips for a sheer, dewy flush that enhances natural contour.",
    details: [
      "Nourishing satin-dew finish with long-lasting comfortable wear",
      "Formulated with cold-pressed botanical oils and natural waxes",
      "Heavy weighted brushed gold metal flacon with magnetic closure",
      "Subtle natural Madagascar vanilla and white tea essence",
    ],
    materialsOrNotes: "Rosehip oil, shea butter, hyaluronic microspheres, vitamin E",
    dimensionsOrVolume: "3.5g / 0.12 oz",
    images: [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1631730486784-5456119f69ae?auto=format&fit=crop&q=80&w=900",
    ],
    variants: [
      { name: "Shade", options: ["Petal Blush", "Mocha Nude", "Spiced Rose"] },
    ],
    rating: 4.8,
    reviewsCount: 64,
  },
  {
    id: "mb-003",
    name: "Amber Veil Eau de Parfum",
    slug: "amber-veil-eau-de-parfum",
    category: "beauty",
    categoryLabel: "Fragrance",
    priceSAR: 490,
    badge: "CURATED EDIT",
    isBestseller: true,
    description: "An intimate, skin-warmed olfactory portrait. Opens with luminous bergamot and dry iris, unfurling into creamy sandalwood, golden amber resin, and soft Cashmeran woods.",
    details: [
      "Concentrated Eau de Parfum formulated in Grasse, France",
      "Smoked amber crystal glass flacon with weighty zamac cap",
      "Long-lasting 10-hour sillage with intimate projection",
      "Cruelty-free, vegan, crafted with organic sugarcane alcohol",
    ],
    materialsOrNotes: "Top: Italian Bergamot, Pink Peppercorn; Heart: Iris Butter, Cedar; Base: Golden Amber, Cashmere Musk",
    dimensionsOrVolume: "100ml / 3.4 fl. oz.",
    images: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=900",
    ],
    variants: [
      { name: "Size", options: ["50ml", "100ml"] },
    ],
    rating: 5.0,
    reviewsCount: 42,
  },
  {
    id: "mb-004",
    name: "The Silk Touch Scarf",
    slug: "silk-touch-scarf",
    category: "essentials",
    categoryLabel: "Everyday Essentials",
    priceSAR: 320,
    badge: "NEW",
    isNew: true,
    description: "Woven from pure 18-momme Mulberry silk with hand-rolled edges. Features a bespoke architectural line motif in soft taupe, dusty blush, and warm ivory.",
    details: [
      "100% Grade 6A Mulberry silk with lustrous twill weave",
      "Meticulously hand-rolled and hand-stitched borders",
      "Versatile 90cm square silhouette for hair, neck, or bag handle",
      "Presented in a rigid embossed presentation envelope",
    ],
    materialsOrNotes: "100% Pure Mulberry Silk (18 Momme)",
    dimensionsOrVolume: "90cm × 90cm (35.4\" × 35.4\")",
    images: [
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=900",
    ],
    variants: [
      { name: "Colorway", options: ["Blush Horizon", "Mocha Geometry", "Ivory Bloom"] },
    ],
    rating: 4.9,
    reviewsCount: 19,
  },
  {
    id: "mb-005",
    name: "Golden Hour Hoop Earrings",
    slug: "golden-hour-hoop-earrings",
    category: "accessories",
    categoryLabel: "Jewelry",
    priceSAR: 290,
    badge: "BESTSELLER",
    isBestseller: true,
    description: "Flattering tapered huggie hoops with an organic, hand-sculpted contour. Crafted from recycled sterling silver bathed in a thick layer of 18k champagne gold vermeil.",
    details: [
      "18k Champagne Gold Vermeil (3.0 microns over 925 sterling silver)",
      "Secure click-hinge closure designed for effortless daily wear",
      "Hypoallergenic, nickel-free, featherweight feel on earlobes",
      "Designed to catch and reflect warm natural sunlight",
    ],
    materialsOrNotes: "18k Champagne gold vermeil on 925 solid sterling silver",
    dimensionsOrVolume: "Diameter: 22mm; Thickness: 4.2mm; Weight: 4.8g pair",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=900",
    ],
    variants: [
      { name: "Metal", options: ["18k Champagne Gold", "Sterling Silver Rhodium"] },
    ],
    rating: 4.9,
    reviewsCount: 51,
  },
  {
    id: "mb-006",
    name: "Bare Skin Hydration Cream",
    slug: "bare-skin-hydration-cream",
    category: "beauty",
    categoryLabel: "Skincare",
    priceSAR: 275,
    badge: "NEW",
    isNew: true,
    description: "A rich yet weightless peptide barrier cream designed to replenish moisture and restore skin's velvety radiance. Housed in a frosted glass pot with a custom golden spatula.",
    details: [
      "Multi-molecular hyaluronic acid combined with ceramides NP and AP",
      "Marshmallow root extract and squalane for non-greasy cushion",
      "Fragrance-free, dermatologist-tested for sensitive skin",
      "Formulated without parabens, silicones, or synthetic dyes",
    ],
    materialsOrNotes: "Squalane, ceramide complex, niacinamide, oat lipid extract",
    dimensionsOrVolume: "50ml / 1.7 fl. oz.",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1608248597359-5484501a3511?auto=format&fit=crop&q=80&w=900",
    ],
    variants: [
      { name: "Formula", options: ["Velvet Rich", "Light Gel-Emulsion"] },
    ],
    rating: 4.8,
    reviewsCount: 29,
  },
  {
    id: "mb-007",
    name: "The Modern Cat-Eye Sunglasses",
    slug: "modern-cat-eye-sunglasses",
    category: "accessories",
    categoryLabel: "Eyewear",
    priceSAR: 420,
    badge: "CURATED EDIT",
    description: "Sculpted Italian acetate frames with refined beveling and warm warm-smoke nylon lenses. Offers complete UV400 protection with an unmistakable vintage-modern appeal.",
    details: [
      "Handmade Italian cellulose acetate from Mazzucchelli",
      "Category 3 warm smoke lenses with 100% UVA/UVB protection",
      "Durable 5-barrel German hinges with gold internal wire core",
      "Supplied with protective leatherette pouch and microfiber cloth",
    ],
    materialsOrNotes: "Handcrafted Mazzucchelli acetate, CR-39 sun lenses",
    dimensionsOrVolume: "Frame width: 142mm; Lens width: 51mm; Bridge: 19mm",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=900",
    ],
    variants: [
      { name: "Frame", options: ["Warm Tortoise", "Espresso Black", "Bone Ivory"] },
    ],
    rating: 4.7,
    reviewsCount: 22,
  },
  {
    id: "mb-008",
    name: "The Signature Travel Pouch",
    slug: "signature-travel-pouch",
    category: "accessories",
    categoryLabel: "Accessories",
    priceSAR: 240,
    isNew: true,
    badge: "NEW",
    description: "The quintessential companion for cosmetics and jewelry. Made from washable structured vegan leather with a wipe-clean interior and whisper-quiet champagne metal zipper.",
    details: [
      "Structured boxy silhouette that stays upright on vanity tables",
      "Water-resistant interior with dedicated brush and lipstick slots",
      "Gold embossed GLOW SOUQ insignia at front center",
      "Packs flat when empty for effortless luggage packing",
    ],
    materialsOrNotes: "Ultra-matte vegan leather, stain-resistant nylon lining",
    dimensionsOrVolume: "22cm L × 14cm H × 10cm D",
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=900",
    ],
    variants: [
      { name: "Color", options: ["Dusty Blush", "Sand Taupe", "Mushroom"] },
    ],
    rating: 4.9,
    reviewsCount: 31,
  },
  {
    id: "mb-009",
    name: "The Linen Trench Coat",
    slug: "linen-trench-coat",
    category: "fashion",
    categoryLabel: "Fashion & Outerwear",
    priceSAR: 1150,
    badge: "CURATED EDIT",
    description: "Cut from heavy washed European flax linen with a fluid, unstructured drape. Features storm flaps, horn-effect buttons, and an elongated tie belt that cinches with ease.",
    details: [
      "100% Pre-washed European flax linen with natural slub texture",
      "Unlined construction with French-seamed internal finishing",
      "Deep side welt pockets and back vent for ease of motion",
      "Dry clean or delicate hand wash cold; softens with age",
    ],
    materialsOrNotes: "100% European Flax Linen (240 GSM)",
    dimensionsOrVolume: "True to size; relaxed tailored silhouette",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=900",
    ],
    variants: [
      { name: "Size", options: ["XS", "S", "M", "L", "XL"] },
      { name: "Color", options: ["Oatmeal Beige", "Soft Olive", "Mocha"] },
    ],
    rating: 5.0,
    reviewsCount: 17,
  },
  {
    id: "mb-010",
    name: "Mulberry Silk Bias Slip Dress",
    slug: "mulberry-silk-bias-slip-dress",
    category: "fashion",
    categoryLabel: "Fashion",
    priceSAR: 850,
    badge: "BESTSELLER",
    isBestseller: true,
    description: "Cut on the bias to skim the body naturally. Crafted in 19-momme sandwashed silk satin that catches the light with a soft matte luster. Features adjustable micro-straps.",
    details: [
      "100% Sandwashed Mulberry Silk satin with fluid movement",
      "Delicate cowl neckline with French-hemmed floor graze",
      "Adjustable lingerie-style champagne metal hardware",
      "Breathable, temperature-regulating natural silk fiber",
    ],
    materialsOrNotes: "100% Sandwashed Silk Satin (19 Momme)",
    dimensionsOrVolume: "Midi length: 122cm from high shoulder",
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=900",
    ],
    variants: [
      { name: "Size", options: ["XS", "S", "M", "L"] },
      { name: "Color", options: ["Champagne Rose", "Deep Mocha", "Ivory Pearl"] },
    ],
    rating: 4.9,
    reviewsCount: 26,
  },
  {
    id: "mb-011",
    name: "Botanical Restorative Body Oil",
    slug: "botanical-restorative-body-oil",
    category: "beauty",
    categoryLabel: "Body Care",
    priceSAR: 210,
    badge: "NEW",
    isNew: true,
    description: "A fast-absorbing, dry-finish body nectar formulated with sweet almond, jojoba, and camellia seed oils. Imparts a radiant sheen and delicate notes of neroli and white cedar.",
    details: [
      "100% Plant-derived cold-pressed botanical carrier oils",
      "Leaves skin supple and radiant without slick residue",
      "Glass bottle with precision pump dispenser",
      "Use post-shower on damp skin for maximum moisture retention",
    ],
    materialsOrNotes: "Camellia oleifera seed oil, jojoba seed oil, neroli blossom oil, sweet almond oil",
    dimensionsOrVolume: "150ml / 5.1 fl. oz.",
    images: [
      "https://images.unsplash.com/photo-1608248597359-5484501a3511?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=900",
    ],
    variants: [
      { name: "Scent", options: ["Neroli & White Cedar", "Warm Amber Vanilla"] },
    ],
    rating: 4.8,
    reviewsCount: 15,
  },
  {
    id: "mb-012",
    name: "The Travertine Vanity Tray",
    slug: "travertine-vanity-tray",
    category: "essentials",
    categoryLabel: "Everyday Essentials",
    priceSAR: 310,
    badge: "CURATED EDIT",
    description: "Hand-honed from natural beige travertine stone with distinctive porous texture and smooth beveled rims. Designed to display your signature perfumes, jewelry, and skincare rituals.",
    details: [
      "Carved from natural beige Roman travertine stone",
      "Padded velvet base to protect delicate vanity surfaces",
      "Each piece features unique natural veining and fissures",
      "Sealed with a food-safe matte waterproof coating",
    ],
    materialsOrNotes: "100% Solid beige travertine stone, protective felt backing",
    dimensionsOrVolume: "30cm L × 18cm W × 2.5cm H; Weight: 1.6kg",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=900",
    ],
    variants: [
      { name: "Shape", options: ["Rectangular (30×18cm)", "Oval (28×16cm)"] },
    ],
    rating: 4.9,
    reviewsCount: 18,
  },
];
