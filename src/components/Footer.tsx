import React from "react";
import { siteConfig } from "../data/config";
import { useCart } from "../context/CartContext";
import { Instagram, ArrowUp, Mail, ShieldCheck } from "lucide-react";

interface FooterProps {
  onNavigateCategory: (cat: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateCategory,
  onNavigateSection,
}) => {
  const currentYear = new Date().getFullYear();
  const { selectedCurrency } = useCart();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#55463E] text-[#FFFCF8] pt-16 sm:pt-20 pb-12 border-t border-[#75645A]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#75645A]/60">
          {/* Column 1: Brand Wordmark & Story (~4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-serif text-2xl sm:text-3xl font-medium tracking-[0.2em] uppercase block">
              {siteConfig.brandName}
            </span>
            <p className="text-xs text-[#D4C2AD] font-light leading-relaxed max-w-sm">
              An atelier dedicated to understated luxury, timeless personal style, and intentional daily beauty. Meticulously sourced mulberry silks, botanical formulations, and sculptured calfskin.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#FFFCF8]/10 hover:bg-[#D6AAA4] hover:text-[#55463E] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="w-8 h-8 rounded-full bg-[#FFFCF8]/10 hover:bg-[#D6AAA4] hover:text-[#55463E] flex items-center justify-center transition-colors"
                aria-label="Email concierge"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: EXPLORE (~2-3 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D6AAA4]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#D4C2AD] font-light">
              <li>
                <button
                  onClick={() => onNavigateSection("collection")}
                  className="hover:text-[#FFFCF8] transition-colors cursor-pointer"
                >
                  New Arrivals
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateCategory("fashion")}
                  className="hover:text-[#FFFCF8] transition-colors cursor-pointer"
                >
                  Fashion Silhouettes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateCategory("beauty")}
                  className="hover:text-[#FFFCF8] transition-colors cursor-pointer"
                >
                  Botanical Beauty
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateCategory("accessories")}
                  className="hover:text-[#FFFCF8] transition-colors cursor-pointer"
                >
                  Handbags & Jewelry
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection("story")}
                  className="hover:text-[#FFFCF8] transition-colors cursor-pointer"
                >
                  Our Story & Philosophy
                </button>
              </li>
              <li>
                <a
                  href={siteConfig.amazonAffiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="text-[#D6AAA4] hover:text-[#FFFCF8] transition-colors inline-flex items-center gap-1 font-medium"
                >
                  <span>Amazon Curated Finds</span>
                  <span>↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: CUSTOMER CARE (~3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D6AAA4]">
              Customer Care
            </h4>
            <ul className="space-y-2 text-xs text-[#D4C2AD] font-light">
              <li>
                <button
                  onClick={() => onNavigateSection("contact")}
                  className="hover:text-[#FFFCF8] transition-colors cursor-pointer"
                >
                  Concierge & Styling Advice
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection("faq")}
                  className="hover:text-[#FFFCF8] transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <span className="text-[#A99A8D]">
                  GCC Delivery: Free over SAR 350
                </span>
              </li>
              <li>
                <span className="text-[#A99A8D]">
                  Atelier Guarantee: 14-Day Returns
                </span>
              </li>
              <li>
                <span className="text-[#A99A8D]">
                  Signature Embossed Gift Boxing
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: ATELIER DIRECT (~3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D6AAA4]">
              Concierge Desk
            </h4>
            <p className="text-xs text-[#D4C2AD] font-light leading-relaxed">
              Inquiries regarding bespoke sizing or private styling:
            </p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-xs font-medium text-[#FFFCF8] hover:text-[#D6AAA4] underline block pt-1"
            >
              {siteConfig.contactEmail}
            </a>
            <div className="pt-2">
              <a
                href={siteConfig.amazonAffiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#FFFCF8]/10 hover:bg-[#D6AAA4] hover:text-[#55463E] text-xs font-medium text-[#FFFCF8] transition-colors"
              >
                <span>Shop Official Amazon Store</span>
                <span>↗</span>
              </a>
            </div>
            <div className="pt-2 text-[11px] text-[#A99A8D] font-light flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D6AAA4]" />
              <span>Hostinger Verified Production Build</span>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A99A8D] font-light">
          <div className="flex flex-wrap items-center gap-4 text-center sm:text-left">
            <span>© {currentYear} {siteConfig.brandName}. All rights reserved.</span>
            <span>·</span>
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Terms of Atelier Service</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="tabular-nums">
              Active Currency: <strong className="text-[#FFFCF8]">{selectedCurrency.code} ({selectedCurrency.symbol})</strong>
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#FFFCF8]/10 hover:bg-[#FFFCF8]/20 text-[#FFFCF8] transition-colors cursor-pointer flex items-center gap-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
