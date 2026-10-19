import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { siteConfig } from "../data/config";
import { X, CheckCircle, ShieldCheck, CreditCard, Sparkles, AlertCircle } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { cart, subtotalSAR, formatPrice, clearCart } = useCart();

  const [step, setStep] = useState<"form" | "confirmed">("form");
  const [formData, setFormData] = useState({
    name: "Noura Al-Hassan",
    email: "noura@example.com",
    phone: "+966 50 123 4567",
    city: "Riyadh",
    address: "Al Olaya District, Building 4",
    paymentMethod: "Apple Pay",
  });

  const isFreeShipping = subtotalSAR >= siteConfig.freeShippingThresholdSAR;
  const shippingFeeSAR = isFreeShipping ? 0 : 35;
  const totalSAR = subtotalSAR + shippingFeeSAR;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("confirmed");
    clearCart();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#FFFCF8] rounded-2xl shadow-2xl border border-[#E5DCD3] overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto">
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#E5DCD3] flex items-center justify-between bg-[#F8F4EE]">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl font-medium tracking-wider text-[#55463E] uppercase">
              {siteConfig.brandName}
            </span>
            <span className="text-xs text-[#A99A8D]">| Atelier Checkout</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#E9E3DC] text-[#55463E] cursor-pointer"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1">
          {step === "form" ? (
            <form onSubmit={handlePlaceOrder} className="space-y-6">
              {/* Integration Disclaimer Banner */}
              <div className="p-4 rounded-xl bg-[#F8F4EE] border border-[#D6AAA4]/60 text-xs text-[#75645A] flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-[#75645A] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold text-[#55463E] block mb-0.5">
                    Demonstration Checkout Interface
                  </strong>
                  This is a front-end checkout simulation. No real financial credentials are required or processed. When deploying to Hostinger, connect this modal to Stripe, Moyasar, or Shopify Storefront API.
                </div>
              </div>

              {/* Order Summary Recap */}
              <div className="p-4 rounded-xl bg-[#F8F4EE]/60 border border-[#E5DCD3] space-y-2 text-xs">
                <div className="flex items-center justify-between font-semibold text-[#55463E]">
                  <span>Items in Atelier Bag ({cart.length})</span>
                  <span>{formatPrice(subtotalSAR)}</span>
                </div>
                <div className="flex items-center justify-between text-[#82766E]">
                  <span>Complimentary Signature Gift Box</span>
                  <span className="text-[#55463E] font-medium">Included</span>
                </div>
                <div className="flex items-center justify-between text-[#82766E]">
                  <span>Estimated Courier Delivery</span>
                  <span>
                    {isFreeShipping ? "Complimentary" : formatPrice(shippingFeeSAR)}
                  </span>
                </div>
                <div className="pt-2 border-t border-[#E5DCD3] flex items-center justify-between font-serif text-base text-[#302722] font-semibold">
                  <span>Total Amount</span>
                  <span className="tabular-nums">{formatPrice(totalSAR)}</span>
                </div>
              </div>

              {/* Delivery Details */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#55463E]">
                  1. Delivery Destination
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] uppercase font-semibold text-[#82766E] mb-1">
                      Recipient Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 bg-[#F8F4EE] border border-[#E5DCD3] rounded text-xs text-[#302722]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-semibold text-[#82766E] mb-1">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-[#F8F4EE] border border-[#E5DCD3] rounded text-xs text-[#302722]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] uppercase font-semibold text-[#82766E] mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3 py-2 bg-[#F8F4EE] border border-[#E5DCD3] rounded text-xs text-[#302722]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-semibold text-[#82766E] mb-1">
                      Delivery Address
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-3 py-2 bg-[#F8F4EE] border border-[#E5DCD3] rounded text-xs text-[#302722]"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#55463E]">
                  2. Select Payment Method
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["Apple Pay", "Mada Card", "Credit Card", "Cash on Delivery"].map((method) => (
                    <button
                      type="button"
                      key={method}
                      onClick={() => setFormData({ ...formData, paymentMethod: method })}
                      className={`p-3 rounded-lg border text-center text-xs font-medium transition-all cursor-pointer ${
                        formData.paymentMethod === method
                          ? "bg-[#55463E] text-[#FFFCF8] border-[#55463E] shadow-xs"
                          : "bg-[#F8F4EE] text-[#55463E] border-[#E5DCD3] hover:border-[#75645A]"
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              {/* Place Order CTA */}
              <button
                type="submit"
                className="w-full py-4 bg-[#55463E] hover:bg-[#302722] text-[#FFFCF8] text-xs font-semibold tracking-widest uppercase rounded-md transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#D6AAA4]" />
                <span>Simulate Order Confirmation · {formatPrice(totalSAR)}</span>
              </button>
            </form>
          ) : (
            /* Order Confirmed State */
            <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
              <CheckCircle className="w-14 h-14 text-[#D6AAA4] mx-auto" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#A99A8D] font-semibold block">
                Atelier Receipt Demo
              </span>
              <h3 className="font-serif text-3xl font-medium text-[#302722]">
                Order #MB-8291 Preview
              </h3>
              <p className="text-sm text-[#82766E] max-w-md mx-auto font-light leading-relaxed">
                Thank you, <span className="font-semibold text-[#302722]">{formData.name}</span>. Your simulated reservation for delivery to <span className="font-semibold text-[#302722]">{formData.city}</span> has been processed.
              </p>

              <div className="p-5 bg-[#F8F4EE] rounded-xl border border-[#E5DCD3] max-w-md mx-auto text-left text-xs space-y-2 text-[#75645A]">
                <div className="font-semibold text-[#55463E] uppercase text-[10px] tracking-wider">
                  Hostinger Client Handover Note:
                </div>
                <p>
                  To receive live credit card payments on your Hostinger hosted domain:
                </p>
                <ol className="list-decimal list-inside space-y-1 text-[#82766E]">
                  <li>Connect Stripe, Moyasar, or Shopify Buy SDK.</li>
                  <li>Configure your live publishable keys in <code className="font-mono text-[10px]">.env</code>.</li>
                  <li>Use the server webhook endpoint in <code className="font-mono text-[10px]">server.ts</code>.</li>
                </ol>
              </div>

              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-[#55463E] text-[#FFFCF8] text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-[#302722] cursor-pointer"
                >
                  Return to Boutique
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
