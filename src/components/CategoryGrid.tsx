import React from "react";
import { categories } from "../data/categories";
import { ArrowUpRight } from "lucide-react";

interface CategoryGridProps {
  onSelectCategory: (categorySlug: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#F8F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A99A8D] block mb-2">
            Curated Categories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#302722] tracking-tight">
            Find Your Signature Style
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#82766E] font-light leading-relaxed">
            Beautifully considered pieces for every side of you.
          </p>
        </div>

        {/* 4 Category Tiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.slug)}
              className="group cursor-pointer flex flex-col bg-[#FFFCF8] rounded-xl overflow-hidden border border-[#E5DCD3] transition-all duration-300 hover:shadow-md"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelectCategory(cat.slug);
                }
              }}
            >
              {/* Image Container with 4:5 aspect ratio */}
              <div className="relative aspect-4/5 overflow-hidden bg-[#E9E3DC]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#302722]/50 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Kicker Tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#FFFCF8] bg-[#55463E]/80 backdrop-blur-xs px-2.5 py-1 rounded-sm">
                    {cat.editorialKicker}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-[#FFFCF8]">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-serif text-2xl font-normal tracking-wide text-[#FFFCF8]">
                        {cat.name}
                      </h3>
                      <p className="text-[11px] text-[#D4C2AD] font-light line-clamp-1 mt-0.5">
                        {cat.subtitle}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#FFFCF8]/90 text-[#55463E] flex items-center justify-center shrink-0 group-hover:bg-[#D6AAA4] group-hover:text-[#FFFCF8] transition-colors shadow-xs">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom text bar */}
              <div className="p-3.5 flex items-center justify-between text-xs border-t border-[#E5DCD3]/60 bg-[#FFFCF8]">
                <span className="text-[11px] uppercase tracking-wider text-[#82766E] font-medium">
                  Explore Collection
                </span>
                <span className="text-[11px] tabular-nums text-[#A99A8D]">
                  {cat.itemCount} Items
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
