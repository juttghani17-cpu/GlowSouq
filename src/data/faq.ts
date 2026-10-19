export interface FAQItem {
  id: string;
  category: "Orders & Shipping" | "Products & Care" | "Returns & Exchanges";
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    category: "Orders & Shipping",
    question: "How can I place an order and track its shipment?",
    answer: "You can select your desired pieces, select any customized shades or sizing, and proceed to checkout. Once completed, you will receive an immediate confirmation with an assigned dispatch tracking number. Complimentary shipping is automatically applied on all orders exceeding SAR 350.",
  },
  {
    id: "faq-2",
    category: "Orders & Shipping",
    question: "Can I modify or cancel an order after placing it?",
    answer: "Because our atelier prepares orders with meticulous care within 2 hours of confirmation, please reach out to our concierge team at concierge@maisonblush.com promptly with your order reference. If your parcel has not yet left our facility, we will adjust or cancel your request immediately.",
  },
  {
    id: "faq-3",
    category: "Orders & Shipping",
    question: "What payment methods are supported?",
    answer: "We support Visa, Mastercard, American Express, Apple Pay, Mada (for KSA residents), and Tabby/Tamara split payments upon client integration. Cash on delivery is also available for regional courier drop-offs.",
  },
  {
    id: "faq-4",
    category: "Products & Care",
    question: "How should I care for my mulberry silk and leather pieces?",
    answer: "Mulberry silk should be hand-washed in cool water with a neutral ph silk shampoo, or dry cleaned. Avoid direct spraying of fragrances directly on fine silks. For our calfskin leather handbags, avoid prolonged moisture exposure and store in the provided cotton dust bag when not in use.",
  },
  {
    id: "faq-5",
    category: "Returns & Exchanges",
    question: "What is your return and exchange policy?",
    answer: "We offer an effortless 14-day return window from the day your parcel arrives. Items must remain unwashed, unworn, and in their original embossed presentation box with safety seals intact. Fragrance bottles and skincare products must remain sealed for hygiene reasons.",
  },
  {
    id: "faq-6",
    category: "Products & Care",
    question: "How can I contact customer support for styling advice?",
    answer: "Our dedicated digital concierge is available 7 days a week from 9:00 AM to 9:00 PM via email at concierge@maisonblush.com or through the interactive Contact form. We provide personalized sizing recommendations, gifting curation, and care assistance.",
  },
];
