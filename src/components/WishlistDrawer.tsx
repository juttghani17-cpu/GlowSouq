import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { Product } from "../data/products";
import { X, Heart, Trash2, Plus, ShoppingBag } from "lucide-react";

interface WishlistDrawerProps {
  onQuickView: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({ onQuickView }) => {
  const { wishlist, isWishlistOpen, closeWishlist, toggleWishlist, clearWishlist } = useWishlist();
  const { addToCart, formatPrice } = useCart();

  if (!isWishlistOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs transition-opacity duration-300"
      aria-modal="true"
      role="dialog"
    >
      <div className="fixed inset-0" onClick={closeWishlist} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFFCF8] shadow-2xl border-l border-[#E5DCD3] flex flex-col justify-between animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-6 border-b border-[#E5DCD3] flex items-center justify-between bg-[#F8F4EE]">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#D6AAA4] fill-[#D6AAA4]" />
              <h3 className="font-serif text-xl font-medium tracking-wide text-[#302722]">
                Saved Pieces
              </h3>
              <span className="text-xs text-[#A99A8D] tabular-nums">
                ({wishlist.length})
              </span>
            </div>
            <button
              onClick={closeWishlist}
              className="p-1.5 rounded-full hover:bg-[#E9E3DC] text-[#55463E] transition-colors cursor-pointer"
              aria-label="Close saved items"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 divide-y divide-[#E5DCD3]/60">
            {wishlist.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <Heart className="w-12 h-12 text-[#D4C2AD] mx-auto stroke-1" />
                <p className="font-serif text-2xl text-[#55463E]">No saved pieces yet</p>
                <p className="text-xs text-[#82766E] max-w-xs mx-auto font-light leading-relaxed">
                  Tap the heart icon on any piece to curate your personal wardrobe and vanity wishlist.
                </p>
                <button
                  onClick={closeWishlist}
                  className="mt-2 px-6 py-3 bg-[#55463E] text-[#FFFCF8] text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-[#302722] transition-colors cursor-pointer"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              wishlist.map((product) => (
                <div key={product.id} className="pt-4 first:pt-0 flex gap-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-20 h-24 object-cover rounded-lg bg-[#E9E3DC] border border-[#E5DCD3] cursor-pointer"
                    onClick={() => {
                      onQuickView(product);
                      closeWishlist();
                    }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4
                          onClick={() => {
                            onQuickView(product);
                            closeWishlist();
                          }}
                          className="font-serif text-base font-medium text-[#302722] line-clamp-1 hover:text-[#75645A] cursor-pointer"
                        >
                          {product.name}
                        </h4>
                        <button
                          onClick={() => toggleWishlist(product)}
                          className="text-[#A99A8D] hover:text-[#D6AAA4] transition-colors cursor-pointer p-0.5"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-[#A99A8D] block mt-0.5">
                        {product.categoryLabel}
                      </span>
                      <span className="text-xs font-semibold text-[#55463E] tabular-nums block mt-1">
                        {formatPrice(product.priceSAR)}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        addToCart(product, 1);
                        toggleWishlist(product);
                      }}
                      className="mt-2 py-2 px-3 bg-[#55463E] hover:bg-[#302722] text-[#FFFCF8] text-[11px] font-semibold tracking-wider uppercase rounded-md flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Move to Bag</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {wishlist.length > 0 && (
            <div className="p-6 border-t border-[#E5DCD3] bg-[#F8F4EE] flex items-center justify-between">
              <button
                onClick={clearWishlist}
                className="text-xs text-[#82766E] hover:text-[#55463E] underline cursor-pointer"
              >
                Clear all saved pieces
              </button>
              <button
                onClick={closeWishlist}
                className="px-5 py-2.5 bg-[#55463E] text-[#FFFCF8] text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-[#302722] cursor-pointer"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
