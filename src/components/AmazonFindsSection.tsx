import React from "react";
import { siteConfig } from "../data/config";
import { ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";

interface AmazonFindItem {
  id: string;
  name: string;
  tagline: string;
  priceUSD: string;
  image: string;
  category: string;
}

export const AmazonFindsSection: React.FC = () => {
  const finds: AmazonFindItem[] = [
    {
      id: "af-1",
      name: "Minimalist Glass Amber Soap Dispensers",
      tagline: "Small Changes Big Difference ♡",
      priceUSD: "$18.99",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
      category: "Home & Vanity",
    },
    {
      id: "af-2",
      name: "Bamboo Lid Glass Food Storage Trio",
      tagline: "Organize Your Everyday ♡",
      priceUSD: "$22.50",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600",
      category: "Kitchen & Living",
    },
    {
      id: "af-3",
      name: "Insulated Cream Travel Tumbler 40oz",
      tagline: "Everyday Favorites for Less ♡",
      priceUSD: "$24.99",
      image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&q=80&w=600",
      category: "Drinkware",
    },
    {
      id: "af-4",
      name: "Natural Beechwood Dry Body Brush",
      tagline: "Simple Self-Care ♡",
      priceUSD: "$14.00",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600",
      category: "Bath & Wellness",
    },
    {
      id: "af-5",
      name: "Sage Green Waffle Weave Bed Throw",
      tagline: "Cozier Nights ♡",
      priceUSD: "$23.95",
      image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=600",
      category: "Textiles",
    },
    {
      id: "af-6",
      name: "Compact Magnetic Wireless Power Bank",
      tagline: "Stay Charged ♡",
      priceUSD: "$21.99",
      image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=600",
      category: "Tech Essentials",
    },
    {
      id: "af-7",
      name: "Acrylic 360° Rotating Cosmetic Organizer",
      tagline: "Beauty Made Simple ♡",
      priceUSD: "$19.80",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600",
      category: "Vanity Storage",
    },
    {
      id: "af-8",
      name: "Magnetic Minimalist Car Air Vent Mount",
      tagline: "On The Go Essentials ♡",
      priceUSD: "$16.50",
      image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=600",
      category: "Travel & Auto",
    },
  ];

  return (
    <section id="amazon-finds" className="py-20 sm:py-28 bg-[#F5EDE9] border-b border-[#E5DCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heading Lockup echoing the user's reference board */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#55463E] text-[#FFFCF8] text-[11px] font-semibold tracking-[0.25em] uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D6AAA4]" />
            <span>The Find File</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#302722] tracking-tight">
            Curated Amazon Finds Under $25
          </h2>

          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#75645A]">
            Practical · Affordable · Everyday Favorites
          </p>

          <p className="text-sm text-[#82766E] font-light max-w-xl mx-auto pt-1 leading-relaxed">
            Thoughtfully vetted essentials designed for a more intentional home, beauty vanity, and everyday routine. Shop our verified Amazon affiliate storefront.
          </p>
        </div>

        {/* Finds Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {finds.map((item) => (
            <a
              key={item.id}
              href={siteConfig.amazonAffiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="group bg-[#FFFCF8] rounded-xl overflow-hidden border border-[#E5DCD3] transition-all duration-300 hover:shadow-md flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-[#E9E3DC]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Hand-drawn Script Overlay Tag */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="font-script text-base sm:text-lg text-[#55463E] bg-[#FFFCF8]/90 backdrop-blur-xs px-2.5 py-0.5 rounded-md shadow-2xs select-none">
                    {item.tagline}
                  </span>
                </div>

                {/* Quick Amazon Indicator on hover */}
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-1.5 rounded-full bg-[#55463E] text-[#FFFCF8] flex items-center justify-center shadow-xs">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A99A8D] font-medium block">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-sm font-medium text-[#302722] mt-0.5 line-clamp-1 group-hover:text-[#75645A] transition-colors">
                    {item.name}
                  </h4>
                </div>

                <div className="mt-3 pt-2 border-t border-[#E5DCD3]/60 flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#55463E] tabular-nums">
                    {item.priceUSD}
                  </span>
                  <span className="text-[10px] text-[#75645A] font-medium flex items-center gap-1 group-hover:underline">
                    <span>View on Amazon</span>
                    <span>↗</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="mt-12 text-center">
          <a
            href={siteConfig.amazonAffiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#55463E] hover:bg-[#302722] text-[#FFFCF8] text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-sm shadow-md group"
          >
            <ExternalLink className="w-4 h-4 text-[#D6AAA4]" />
            <span>Explore All 10 Finds on Our Amazon Storefront</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <p className="text-[10px] text-[#A99A8D] font-light mt-3">
            * As an Amazon Associate, we earn from qualifying purchases at no additional cost to you.
          </p>
        </div>
      </div>
    </section>
  );
};
