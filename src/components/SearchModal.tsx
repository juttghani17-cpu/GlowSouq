import React, { useState, useMemo } from "react";
import { products, Product } from "../data/products";
import { useCart } from "../context/CartContext";
import { Search, X, ArrowUpRight } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (p: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState("");
  const { formatPrice } = useCart();

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.materialsOrNotes.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-start justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#FFFCF8] rounded-2xl shadow-2xl border border-[#E5DCD3] overflow-hidden z-10 mt-12 sm:mt-20">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-[#E5DCD3] flex items-center gap-3 bg-[#F8F4EE]">
          <Search className="w-5 h-5 text-[#75645A] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search fashion, beauty, fragrance, calfskin bags..."
            className="flex-1 bg-transparent text-sm sm:text-base text-[#302722] placeholder:text-[#A99A8D] focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs text-[#A99A8D] hover:text-[#55463E] p-1 cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#E9E3DC] text-[#55463E] cursor-pointer"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        {!query && (
          <div className="p-6 text-xs">
            <span className="font-semibold uppercase tracking-wider text-[#A99A8D] block mb-2.5">
              Popular Atelier Searches:
            </span>
            <div className="flex flex-wrap gap-2">
              {["Everyday Structure Bag", "Amber Veil", "Mulberry Silk", "Gold Hoops", "Hydration Cream", "Cat-Eye"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-3 py-1.5 rounded-md bg-[#F8F4EE] hover:bg-[#E9E3DC] text-[#55463E] border border-[#E5DCD3] transition-colors cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {query && (
          <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto divide-y divide-[#E5DCD3]/60">
            {results.length === 0 ? (
              <div className="py-12 text-center text-xs text-[#82766E]">
                <p className="font-serif text-lg text-[#55463E]">No pieces found matching "{query}"</p>
                <p className="mt-1 font-light">Try searching for fragrance, silk, bag, or earrings.</p>
              </div>
            ) : (
              results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="py-3 flex items-center justify-between gap-4 hover:bg-[#F8F4EE] px-3 rounded-lg transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-14 h-16 object-cover rounded-md bg-[#E9E3DC]"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#A99A8D] block">
                        {product.categoryLabel}
                      </span>
                      <h4 className="font-serif text-base font-medium text-[#302722] group-hover:text-[#75645A]">
                        {product.name}
                      </h4>
                      <span className="text-xs font-semibold text-[#55463E] tabular-nums">
                        {formatPrice(product.priceSAR)}
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-[#A99A8D] group-hover:text-[#55463E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
