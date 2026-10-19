import React, { useState } from "react";
import { Product, products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { siteConfig } from "../data/config";
import { X, Heart, Plus, Minus, Check, ShieldCheck, Truck, RefreshCw, Star, ExternalLink } from "lucide-react";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onSelectProduct: (p: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onSelectProduct,
}) => {
  if (!product) return null;

  const { addToCart, formatPrice } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<string>(
    product.variants?.[0]?.options[0] || ""
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [openTab, setOpenTab] = useState<"details" | "shipping" | "care">("details");

  const isFavorited = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant || undefined);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // Find 3 related products
  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-5xl bg-[#FFFCF8] rounded-2xl shadow-2xl border border-[#E5DCD3] overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#FFFCF8]/90 border border-[#E5DCD3] text-[#55463E] hover:text-[#302722] hover:bg-[#F8F4EE] flex items-center justify-center transition-colors shadow-xs cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-10 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Image Gallery */}
            <div className="md:col-span-6 space-y-4">
              <div className="relative aspect-4/5 rounded-xl overflow-hidden bg-[#E9E3DC] border border-[#E5DCD3]">
                <img
                  src={product.images[activeImageIdx] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] font-semibold bg-[#55463E] text-[#FFFCF8] px-2.5 py-1 rounded-sm shadow-xs">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`relative w-20 aspect-square rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        activeImageIdx === idx
                          ? "border-[#55463E] shadow-xs"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} preview ${idx + 1}`}
                        className="w-full h-full object-cover object-center"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Contiguous Purchase Module */}
            <div className="md:col-span-6 flex flex-col justify-between">
              <div>
                {/* Category & Rating */}
                <div className="flex items-center justify-between text-xs text-[#82766E] mb-2">
                  <span className="uppercase tracking-[0.2em] font-medium text-[#A99A8D]">
                    {product.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1 text-[#75645A]">
                    <Star className="w-3.5 h-3.5 fill-[#75645A]" />
                    <span className="font-semibold text-xs tabular-nums">
                      {product.rating.toFixed(1)}
                    </span>
                    <span className="text-[#A99A8D]">({product.reviewsCount} reviews)</span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-[#302722] tracking-tight">
                  {product.name}
                </h1>

                {/* Price */}
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="text-xl sm:text-2xl font-semibold text-[#55463E] tabular-nums">
                    {formatPrice(product.priceSAR)}
                  </span>
                  {product.compareAtPriceSAR && (
                    <span className="text-sm text-[#A99A8D] line-through tabular-nums">
                      {formatPrice(product.compareAtPriceSAR)}
                    </span>
                  )}
                </div>

                {/* Short Description */}
                <p className="mt-4 text-sm text-[#82766E] font-light leading-relaxed">
                  {product.description}
                </p>

                {/* Variant Selector */}
                {product.variants && product.variants.length > 0 && (
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold uppercase tracking-wider text-[#55463E]">
                        {product.variants[0].name}:
                      </span>
                      <span className="text-[#82766E] font-medium">{selectedVariant}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.variants[0].options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => setSelectedVariant(opt)}
                          className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                            selectedVariant === opt
                              ? "bg-[#55463E] text-[#FFFCF8] shadow-xs"
                              : "bg-[#F8F4EE] text-[#55463E] border border-[#E5DCD3] hover:border-[#75645A]"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity & Add to Cart Controls */}
                <div className="mt-8 flex items-center gap-3">
                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-[#E5DCD3] rounded-md bg-[#F8F4EE]">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="p-2.5 text-[#55463E] hover:text-[#302722] cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-10 text-center text-xs font-semibold tabular-nums text-[#302722]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-2.5 text-[#55463E] hover:text-[#302722] cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Add to Bag CTA */}
                  <button
                    onClick={handleAddToCart}
                    className={`flex-1 py-3 px-6 rounded-md text-xs font-semibold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                      added
                        ? "bg-[#75645A] text-[#FFFCF8]"
                        : "bg-[#55463E] text-[#FFFCF8] hover:bg-[#302722]"
                    }`}
                  >
                    {added ? (
                      <>
                        <Check className="w-4 h-4 text-[#D6AAA4]" />
                        <span>Added to Bag</span>
                      </>
                    ) : (
                      <>
                        <span>Add to Bag</span>
                        <span className="opacity-40">·</span>
                        <span className="tabular-nums">
                          {formatPrice(product.priceSAR * quantity)}
                        </span>
                      </>
                    )}
                  </button>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product)}
                    className="p-3 rounded-md bg-[#F8F4EE] border border-[#E5DCD3] text-[#55463E] hover:text-[#D6AAA4] transition-colors cursor-pointer"
                    aria-label={isFavorited ? "Remove from wishlist" : "Save to wishlist"}
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isFavorited ? "fill-[#D6AAA4] text-[#D6AAA4]" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Direct Amazon Buy Action */}
                <div className="mt-3">
                  <a
                    href={siteConfig.amazonAffiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="w-full py-2.5 px-4 rounded-md border border-[#75645A]/40 text-[#55463E] hover:bg-[#55463E] hover:text-[#FFFCF8] text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-2xs group"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#D6AAA4] group-hover:text-[#FFFCF8]" />
                    <span>Shop via Amazon Curated Storefront</span>
                  </a>
                </div>

                {/* Assurance Indicators */}
                <div className="mt-6 pt-6 border-t border-[#E5DCD3]/70 grid grid-cols-3 gap-3 text-center text-[10px] text-[#82766E]">
                  <div className="flex flex-col items-center gap-1">
                    <Truck className="w-4 h-4 text-[#75645A]" />
                    <span>Free GCC Shipping &gt; SAR 350</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-[#75645A]" />
                    <span>Authentic Materials</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <RefreshCw className="w-4 h-4 text-[#75645A]" />
                    <span>14-Day Atelier Returns</span>
                  </div>
                </div>

                {/* Accordions: Details / Notes / Dimensions */}
                <div className="mt-6 border-t border-[#E5DCD3] divide-y divide-[#E5DCD3]/70 text-xs">
                  <div className="py-3">
                    <button
                      onClick={() => setOpenTab(openTab === "details" ? "shipping" : "details")}
                      className="w-full flex items-center justify-between font-semibold uppercase tracking-wider text-[#55463E] text-left cursor-pointer"
                    >
                      <span>Specifications & Features</span>
                      <span>{openTab === "details" ? "−" : "+"}</span>
                    </button>
                    {openTab === "details" && (
                      <ul className="mt-2.5 space-y-1.5 text-[#82766E] list-disc list-inside font-light">
                        {product.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                        <li className="pt-1">
                          <strong className="font-medium text-[#55463E]">Composition / Notes:</strong> {product.materialsOrNotes}
                        </li>
                        <li>
                          <strong className="font-medium text-[#55463E]">Dimensions / Volume:</strong> {product.dimensionsOrVolume}
                        </li>
                      </ul>
                    )}
                  </div>

                  <div className="py-3">
                    <button
                      onClick={() => setOpenTab(openTab === "shipping" ? "care" : "shipping")}
                      className="w-full flex items-center justify-between font-semibold uppercase tracking-wider text-[#55463E] text-left cursor-pointer"
                    >
                      <span>Signature Packaging & Dispatch</span>
                      <span>{openTab === "shipping" ? "−" : "+"}</span>
                    </button>
                    {openTab === "shipping" && (
                      <div className="mt-2.5 text-[#82766E] font-light space-y-2">
                        <p>
                          Every piece arrives in our rigid, blush-embossed presentation box lined with acid-free tissue paper and sealed with natural cotton ribbon.
                        </p>
                        <p>
                          Orders placed before 2:00 PM AST are dispatched same day from our local fulfillment atelier.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-[#E5DCD3]">
              <h2 className="font-serif text-xl font-medium text-[#302722] mb-4">
                You May Also Admire
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onSelectProduct(p);
                      setActiveImageIdx(0);
                    }}
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-[#F8F4EE] border border-[#E5DCD3] hover:border-[#75645A] transition-colors cursor-pointer group"
                  >
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-16 h-20 object-cover rounded-md bg-[#E9E3DC]"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-[#A99A8D] block">
                        {p.categoryLabel}
                      </span>
                      <h3 className="font-serif text-sm font-medium text-[#302722] line-clamp-1 group-hover:text-[#75645A]">
                        {p.name}
                      </h3>
                      <span className="text-xs font-semibold text-[#55463E] tabular-nums mt-0.5 block">
                        {formatPrice(p.priceSAR)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
