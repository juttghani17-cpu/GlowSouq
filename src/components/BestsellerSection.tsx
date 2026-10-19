import React from "react";
import { products, Product } from "../data/products";
import { ProductCard } from "./ProductCard";
import { ArrowRight } from "lucide-react";

interface BestsellerSectionProps {
  onQuickView: (product: Product) => void;
  onShopAll: () => void;
}

export const BestsellerSection: React.FC<BestsellerSectionProps> = ({
  onQuickView,
  onShopAll,
}) => {
  // Select 4 distinct bestsellers
  const bestsellers = products.filter((p) => p.isBestseller).slice(0, 4);

  return (
    <section className="py-20 sm:py-28 bg-[#F8F4EE] border-b border-[#E5DCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[1px] bg-[#D6AAA4]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#75645A]">
                Customer Favorites
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#302722] tracking-tight">
              Loved for a Reason
            </h2>
            <p className="mt-2 text-sm text-[#82766E] font-light max-w-lg">
              Our most coveted wardrobe staples and beauty essentials, celebrated for enduring craft and effortless beauty.
            </p>
          </div>

          <button
            onClick={onShopAll}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#55463E] hover:text-[#302722] border-b border-[#55463E] pb-1 transition-colors group cursor-pointer self-start sm:self-end"
          >
            <span>Shop The Full Edit</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4-column bestsellers grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
