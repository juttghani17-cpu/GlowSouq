export interface SiteConfig {
  brandName: string;
  tagline: string;
  announcement: string;
  defaultCurrency: {
    code: string;
    symbol: string;
    rateToSAR: number;
  };
  supportedCurrencies: Array<{
    code: string;
    symbol: string;
    rateToSAR: number;
    name: string;
  }>;
  contactEmail: string;
  instagramHandle: string;
  amazonAffiliateUrl: string;
  freeShippingThresholdSAR: number;
  socialLinks: {
    instagram: string;
    pinterest: string;
    tiktok: string;
  };
  policies: {
    shipping: string;
    returns: string;
    authenticity: string;
  };
}

export const siteConfig: SiteConfig = {
  brandName: "GLOW SOUQ",
  tagline: "The Art of Everyday Luxury & Glow",
  announcement: "A LITTLE LUXURY, EVERY DAY — GLOW SOUQ SIGNATURE PACKAGING ON ALL ORDERS",
  amazonAffiliateUrl: "https://www.amazon.com/gp/css/homepage.html?&linkCode=ll2&tag=muhammadu047a-20&linkId=276ec242b400db3bed9d39100b19e78e&language=en_US&ref_=as_li_ss_tl",
  defaultCurrency: {
    code: "SAR",
    symbol: "SAR",
    rateToSAR: 1,
  },
  supportedCurrencies: [
    { code: "SAR", symbol: "SAR", rateToSAR: 1, name: "Saudi Riyal (SAR)" },
    { code: "AED", symbol: "AED", rateToSAR: 0.98, name: "UAE Dirham (AED)" },
    { code: "USD", symbol: "$", rateToSAR: 0.27, name: "US Dollar ($)" },
    { code: "EUR", symbol: "€", rateToSAR: 0.25, name: "Euro (€)" },
    { code: "GBP", symbol: "£", rateToSAR: 0.21, name: "British Pound (£)" },
  ],
  contactEmail: "concierge@glowsouq.com",
  instagramHandle: "@glowsouq",
  freeShippingThresholdSAR: 350,
  socialLinks: {
    instagram: "https://instagram.com",
    pinterest: "https://pinterest.com",
    tiktok: "https://tiktok.com",
  },
  policies: {
    shipping: "Complimentary express delivery across the GCC on orders over SAR 350. Delivered in our signature embossed blush gift box.",
    returns: "14-day effortless returns and complimentary exchanges on all unworn items and unopened beauty products.",
    authenticity: "Every garment and beauty formulation is meticulously crafted with ethically sourced silk, botanical extracts, and premium hardware.",
  },
};
