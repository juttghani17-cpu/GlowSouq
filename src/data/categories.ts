export interface Category {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  editorialKicker: string;
  image: string;
  itemCount: number;
}

export const categories: Category[] = [
  {
    id: "fashion",
    name: "Fashion",
    slug: "fashion",
    subtitle: "Tailored wool, organic linen, and fluid mulberry silk silhouettes.",
    editorialKicker: "SILHOUETTES & SILK",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000",
    itemCount: 12,
  },
  {
    id: "beauty",
    name: "Beauty",
    slug: "beauty",
    subtitle: "Clean botanical skincare, artisanal fragrance, and luminous pigments.",
    editorialKicker: "RITUALS & GLOW",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=1000",
    itemCount: 14,
  },
  {
    id: "accessories",
    name: "Accessories",
    slug: "accessories",
    subtitle: "Structured calfskin bags, 18k vermeil hoops, and cat-eye frames.",
    editorialKicker: "SCULPTURAL ACCENTS",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1000",
    itemCount: 16,
  },
  {
    id: "essentials",
    name: "Everyday Essentials",
    slug: "essentials",
    subtitle: "Delicate mulberry scarves, amber candles, and curated lifestyle objects.",
    editorialKicker: "DAILY PLEASURES",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=1000",
    itemCount: 10,
  },
];
