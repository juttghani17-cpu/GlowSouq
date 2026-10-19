export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  productMentioned: string;
  rating: number;
}

// NOTE FOR STORE OWNER: These are demonstration testimonials designed to show typography and editorial layout.
// Replace with your verified customer feedback when connecting your store reviews.
export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    quote: "The Everyday Structure Bag in Mocha is pure understated luxury. The leather feels like butter, and the hardware has that quiet, brushed champagne glow that never screams.",
    author: "Elena V.",
    location: "Riyadh, KSA",
    productMentioned: "The Everyday Structure Bag",
    rating: 5,
  },
  {
    id: "t-2",
    quote: "Amber Veil has become my signature scent. It lingers softly on my silk blouses throughout the day without overwhelming the room. The presentation box was so breathtaking.",
    author: "Nadine K.",
    location: "Dubai, UAE",
    productMentioned: "Amber Veil Eau de Parfum",
    rating: 5,
  },
  {
    id: "t-3",
    quote: "Finally a boutique that understands neutral color palettes and tactile quality. The mulberry silk scarf and travertine tray transformed my morning dressing table ritual.",
    author: "Camille M.",
    location: "London, UK",
    productMentioned: "The Silk Touch Scarf",
    rating: 5,
  },
];
