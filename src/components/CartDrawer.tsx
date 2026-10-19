import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { siteConfig } from "../data/config";
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck } from "lucide-react";
import { CheckoutModal } from "./CheckoutModal";

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotalSAR,
    itemCount,
    formatPrice,
  } = useCart();

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  if (!isCartOpen) return null;

  const threshold = siteConfig.freeShippingThresholdSAR;
  const progressPercent = Math.min(100, Math.round((subtotalSAR / threshold) * 100));
  const remainingForFreeShipping = Math.max(0, threshold - subtotalSAR);

  return (
    <>
      <div
        className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs transition-opacity duration-300"
        aria-modal="true"
        role="dialog"
      >
        <div className="fixed inset-0" onClick={closeCart} />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <div className="w-screen max-w-md bg-[#FFFCF8] shadow-2xl border-l border-[#E5DCD3] flex flex-col justify-between animate-in slide-in-from-right duration-300">
            {/* Header */}
            <div className="p-6 border-b border-[#E5DCD3] flex items-center justify-between bg-[#F8F4EE]">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#55463E]" />
                <h3 className="font-serif text-xl font-medium tracking-wide text-[#302722]">
                  Your Atelier Bag
                </h3>
                <span className="text-xs text-[#A99A8D] tabular-nums">
                  ({itemCount})
                </span>
              </div>
              <button
                onClick={closeCart}
                className="p-1.5 rounded-full hover:bg-[#E9E3DC] text-[#55463E] transition-colors cursor-pointer"
                aria-label="Close bag"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Strip */}
            <div className="px-6 py-3 bg-[#F5EDE9] border-b border-[#E5DCD3] text-xs">
              {remainingForFreeShipping > 0 ? (
                <p className="text-[#75645A] font-light">
                  Add <strong className="font-semibold text-[#55463E] tabular-nums">{formatPrice(remainingForFreeShipping)}</strong> more for complimentary GCC express shipping.
                </p>
              ) : (
                <p className="text-[#55463E] font-medium flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D6AAA4]" />
                  <span>Complimentary GCC express delivery unlocked!</span>
                </p>
              )}
              <div className="w-full bg-[#E5DCD3] h-1.5 rounded-full overflow-hidden mt-2">
                <div
                  className="bg-[#D6AAA4] h-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Cart Line Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 divide-y divide-[#E5DCD3]/60">
              {cart.length === 0 ? (
                <div className="py-20 text-center space-y-4">
                  <ShoppingBag className="w-12 h-12 text-[#D4C2AD] mx-auto stroke-1" />
                  <p className="font-serif text-2xl text-[#55463E]">Your bag is empty</p>
                  <p className="text-xs text-[#82766E] max-w-xs mx-auto font-light leading-relaxed">
                    Explore our curated fashion silhouettes, bespoke fragrances, and sculpted accessories.
                  </p>
                  <button
                    onClick={closeCart}
                    className="mt-2 px-6 py-3 bg-[#55463E] text-[#FFFCF8] text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-[#302722] transition-colors cursor-pointer"
                  >
                    Discover Collection
                  </button>
                  <div className="pt-2">
                    <a
                      href={siteConfig.amazonAffiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="text-xs text-[#75645A] hover:text-[#302722] underline underline-offset-4 font-medium inline-flex items-center gap-1"
                    >
                      <span>Or browse our curated Amazon Finds ↗</span>
                    </a>
                  </div>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="pt-4 first:pt-0 flex gap-4">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-20 h-24 object-cover rounded-lg bg-[#E9E3DC] border border-[#E5DCD3]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-serif text-base font-medium text-[#302722] line-clamp-1">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-[#A99A8D] hover:text-[#D6AAA4] transition-colors cursor-pointer p-0.5"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        {item.selectedVariant && (
                          <span className="text-[11px] text-[#82766E] block mt-0.5">
                            Option: {item.selectedVariant}
                          </span>
                        )}
                        <span className="text-xs font-semibold text-[#55463E] tabular-nums block mt-1">
                          {formatPrice(item.product.priceSAR)}
                        </span>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center border border-[#E5DCD3] rounded-sm bg-[#F8F4EE]">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 text-[#55463E] hover:text-[#302722] cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 text-center text-xs font-semibold tabular-nums text-[#302722]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 text-[#55463E] hover:text-[#302722] cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-xs text-[#82766E] tabular-nums font-light">
                          = {formatPrice(item.product.priceSAR * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Subtotal & Checkout */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-[#E5DCD3] bg-[#F8F4EE] space-y-3.5">
                <div className="space-y-1.5 text-xs text-[#82766E]">
                  <div className="flex items-center justify-between">
                    <span>Atelier Subtotal</span>
                    <span className="font-semibold text-[#302722] text-sm tabular-nums">
                      {formatPrice(subtotalSAR)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span>Packaging</span>
                    <span className="text-[#55463E] font-medium">Signature Blush Box Included</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsCheckoutOpen(true)}
                  className="w-full py-4 bg-[#55463E] hover:bg-[#302722] text-[#FFFCF8] text-xs font-semibold tracking-widest uppercase transition-colors rounded-sm shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Proceed to Atelier Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="pt-1 text-center">
                  <a
                    href={siteConfig.amazonAffiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center gap-1.5 text-xs text-[#75645A] hover:text-[#55463E] underline underline-offset-4 font-medium"
                  >
                    <span>Prefer Amazon? Shop our verified Storefront ↗</span>
                  </a>
                </div>

                <p className="text-[10px] text-center text-[#A99A8D] font-light">
                  Tax calculated during delivery checkout. 14-day effortless returns.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </>
  );
};
