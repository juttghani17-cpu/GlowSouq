import React, { useState } from "react";
import { Product } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { Heart, Plus, Eye, Check } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
}) => {
  const { addToCart, formatPrice } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [isHovered, setIsHovered] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const isFavorited = isInWishlist(product.id);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  const currentImage =
    isHovered && product.images.length > 1
      ? product.images[1]
      : product.images[0];

  return (
    <div
      onClick={() => onQuickView(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer flex flex-col bg-[#FFFCF8] rounded-xl overflow-hidden border border-[#E5DCD3] transition-all duration-300 hover:shadow-md"
    >
      {/* 4:5 Image Container */}
      <div className="relative aspect-4/5 overflow-hidden bg-[#E9E3DC]/60">
        <img
          src={currentImage}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-out"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Top Badges / Wishlist */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {product.badge ? (
            <span
              className={`text-[9px] uppercase tracking-[0.2em] font-semibold px-2 py-0.5 rounded-sm ${
                product.badge === "BESTSELLER"
                  ? "bg-[#55463E] text-[#FFFCF8]"
                  : product.badge === "NEW"
                  ? "bg-[#D6AAA4] text-[#302722]"
                  : "bg-[#FFFCF8]/90 text-[#55463E] border border-[#E5DCD3]"
              }`}
            >
              {product.badge}
            </span>
          ) : (
            <div />
          )}

          {/* Wishlist Button */}
          <button
            onClick={handleWishlist}
            className="w-8 h-8 rounded-full bg-[#FFFCF8]/90 backdrop-blur-xs flex items-center justify-center text-[#55463E] hover:text-[#D6AAA4] transition-colors pointer-events-auto shadow-xs border border-[#E5DCD3]/60 cursor-pointer"
            aria-label={isFavorited ? "Remove from wishlist" : "Save to wishlist"}
            title={isFavorited ? "Remove from wishlist" : "Save to wishlist"}
          >
            <Heart
              className={`w-4 h-4 transition-transform duration-200 ${
                isFavorited ? "fill-[#D6AAA4] text-[#D6AAA4] scale-110" : ""
              }`}
            />
          </button>
        </div>

        {/* Quick Action Overlay on Hover */}
        <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleAdd}
            className={`flex-1 py-2.5 px-3 rounded-md text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all duration-200 shadow-md ${
              justAdded
                ? "bg-[#75645A] text-[#FFFCF8]"
                : "bg-[#55463E] text-[#FFFCF8] hover:bg-[#302722]"
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#D6AAA4]" />
                <span>Added to Bag</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Add to Bag</span>
              </>
            )}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="p-2.5 rounded-md bg-[#FFFCF8] text-[#55463E] hover:text-[#302722] hover:bg-[#F8F4EE] border border-[#E5DCD3] transition-colors shadow-md"
            aria-label="Quick view product"
            title="Quick view"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#A99A8D] block">
            {product.categoryLabel}
          </span>
          <h3 className="font-serif text-lg font-medium text-[#302722] mt-1 line-clamp-1 group-hover:text-[#75645A] transition-colors">
            {product.name}
          </h3>
        </div>

        {/* Price Row */}
        <div className="mt-3 pt-2.5 border-t border-[#E5DCD3]/50 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-semibold text-[#55463E] tabular-nums">
              {formatPrice(product.priceSAR)}
            </span>
            {product.compareAtPriceSAR && (
              <span className="text-xs text-[#A99A8D] line-through tabular-nums">
                {formatPrice(product.compareAtPriceSAR)}
              </span>
            )}
          </div>
          <span className="text-[11px] text-[#A99A8D]">
            ★ {product.rating.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
};
