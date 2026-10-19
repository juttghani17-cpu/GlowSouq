import React from "react";
import { ArrowRight } from "lucide-react";

interface EditorialBannerProps {
  onDiscoverEdit: () => void;
}

export const EditorialBanner: React.FC<EditorialBannerProps> = ({ onDiscoverEdit }) => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#55463E] text-[#FFFCF8]">
      {/* Background Editorial Image with refined tint scrim */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1800"
          alt="Warm neutral dressing table with dried ivory florals, perfume flacon, and travertine surfaces"
          className="w-full h-full object-cover object-center opacity-30"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#55463E]/90 via-[#55463E]/70 to-[#55463E]/90" />
      </div>

      {/* Centered Editorial Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2">
          <span className="w-8 h-[1px] bg-[#D6AAA4]" />
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-[#D6AAA4]">
            Curated For Modern Living
          </span>
          <span className="w-8 h-[1px] bg-[#D6AAA4]" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#FFFCF8] leading-[1.12]">
          Make Every Detail Yours.
        </h2>

        <p className="text-base sm:text-lg text-[#D4C2AD] font-light max-w-xl mx-auto">
          Small luxuries. Lasting impressions. Discover timeless pieces to elevate every corner of your daily sanctuary.
        </p>

        <div className="pt-2">
          <button
            onClick={onDiscoverEdit}
            className="px-8 py-3.5 bg-[#FFFCF8] text-[#55463E] hover:bg-[#D6AAA4] hover:text-[#FFFCF8] text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-sm cursor-pointer shadow-lg inline-flex items-center gap-2 group"
          >
            <span>Discover Your Edit</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
