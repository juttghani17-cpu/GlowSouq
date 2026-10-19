import React, { useState, useMemo } from "react";
import { products, Product } from "../data/products";
import { ProductCard } from "./ProductCard";
import { SlidersHorizontal } from "lucide-react";

interface FeaturedCollectionProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onQuickView: (product: Product) => void;
}

export const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({
  selectedCategory,
  onSelectCategory,
  onQuickView,
}) => {
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "newest">("featured");

  const filterTabs = [
    { label: "All Curations", value: "all" },
    { label: "Fashion", value: "fashion" },
    { label: "Beauty", value: "beauty" },
    { label: "Accessories", value: "accessories" },
    { label: "Essentials", value: "essentials" },
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let list = [...products];

    // Filter
    if (selectedCategory !== "all") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // Sort
    if (sortBy === "price-asc") {
      list.sort((a, b) => a.priceSAR - b.priceSAR);
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.priceSAR - a.priceSAR);
    } else if (sortBy === "newest") {
      list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return list;
  }, [selectedCategory, sortBy]);

  return (
    <section id="collection" className="py-16 sm:py-24 bg-[#FFFCF8] border-b border-[#E5DCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[1px] bg-[#D6AAA4]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#75645A]">
                The Edit
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#302722] tracking-tight">
              Pieces to Fall in Love With
            </h2>
            <p className="mt-2 text-sm text-[#82766E] font-light max-w-lg">
              A considered collection of modern essentials and little luxuries designed for effortless daily confidence.
            </p>
          </div>

          {/* Sort Control */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <span className="text-xs uppercase tracking-wider text-[#82766E] font-medium flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Sort:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#F8F4EE] border border-[#E5DCD3] rounded-md px-3 py-1.5 text-xs text-[#55463E] focus:outline-hidden focus:border-[#75645A] font-medium cursor-pointer"
            >
              <option value="featured">Featured Curations</option>
              <option value="newest">Newest Arrivals</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category Filter Tabs (Clean segmented buttons adhering to frontend design constitution) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#E5DCD3]/60 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => onSelectCategory(tab.value)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === tab.value
                  ? "bg-[#55463E] text-[#FFFCF8] shadow-xs"
                  : "bg-[#F8F4EE] text-[#82766E] hover:text-[#302722] hover:bg-[#E9E3DC]/60"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* Reset Filter Action if empty */}
        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-16 bg-[#F8F4EE] rounded-xl border border-dashed border-[#E5DCD3] my-6">
            <p className="font-serif text-xl text-[#55463E]">No pieces found in this category.</p>
            <button
              onClick={() => onSelectCategory("all")}
              className="mt-4 px-5 py-2.5 bg-[#55463E] text-[#FFFCF8] text-xs uppercase tracking-widest rounded-md"
            >
              Show All Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
