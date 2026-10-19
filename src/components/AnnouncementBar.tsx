import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { siteConfig } from "../data/config";
import { ChevronDown, Globe } from "lucide-react";

export const AnnouncementBar: React.FC = () => {
  const { selectedCurrency, setSelectedCurrency } = useCart();
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);

  return (
    <div className="bg-[#55463E] text-[#F8F4EE] border-b border-[#75645A]/40 text-xs tracking-wider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
        {/* Left Amazon Storefront link */}
        <div className="hidden lg:flex items-center gap-2 text-[11px] font-medium tracking-wider">
          <a
            href={siteConfig.amazonAffiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="text-[#D6AAA4] hover:text-[#FFFCF8] transition-colors flex items-center gap-1 group"
          >
            <span>AMAZON STOREFRONT</span>
            <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
          </a>
          <span className="opacity-40 text-[#D4C2AD]">·</span>
          <span className="text-[#D4C2AD] font-light">CURATED FINDS</span>
        </div>

        {/* Center message */}
        <p className="text-center flex-1 text-[11px] sm:text-xs font-medium tracking-widest uppercase">
          {siteConfig.announcement}
        </p>

        {/* Right currency selector */}
        <div className="relative shrink-0 flex items-center">
          <button
            onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
            className="flex items-center gap-1.5 text-[11px] font-medium text-[#D4C2AD] hover:text-[#FFFCF8] transition-colors py-1 px-2 rounded cursor-pointer"
            aria-label="Change currency"
            aria-expanded={isCurrencyDropdownOpen}
          >
            <Globe className="w-3.5 h-3.5 opacity-80" />
            <span className="tabular-nums">{selectedCurrency.code}</span>
            <ChevronDown className="w-3 h-3 opacity-70" />
          </button>

          {isCurrencyDropdownOpen && (
            <div
              className="absolute right-0 top-full mt-1.5 w-48 bg-[#FFFCF8] text-[#302722] rounded-md shadow-xl border border-[#E5DCD3] py-1.5 z-50 text-xs"
              onMouseLeave={() => setIsCurrencyDropdownOpen(false)}
            >
              <div className="px-3 py-1 text-[10px] uppercase font-semibold text-[#82766E] border-b border-[#E5DCD3]/60 mb-1">
                Select Currency
              </div>
              {siteConfig.supportedCurrencies.map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => {
                    setSelectedCurrency(curr);
                    setIsCurrencyDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-[#F8F4EE] transition-colors ${
                    selectedCurrency.code === curr.code
                      ? "font-semibold text-[#55463E] bg-[#F8F4EE]/70"
                      : "text-[#82766E]"
                  }`}
                >
                  <span>{curr.name}</span>
                  <span className="text-[11px] text-[#A99A8D]">{curr.symbol}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
