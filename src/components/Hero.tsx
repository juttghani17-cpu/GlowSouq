import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  onExploreCollection: () => void;
  onDiscoverStory: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCollection,
  onDiscoverStory,
}) => {
  return (
    <section className="relative bg-[#F8F4EE] pt-4 pb-12 sm:pb-16 lg:pt-6 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden shadow-xl border border-[#E5DCD3] bg-[#55463E]">
          {/* Left Panel: Deep Mocha Text Column (~48% -> 5 of 12 cols in lg grid or 48%) */}
          <div className="lg:col-span-5 p-8 sm:p-12 lg:p-16 flex flex-col justify-between text-[#FFFCF8] relative">
            {/* Top Eyebrow */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2.5">
                <span className="w-6 h-[1px] bg-[#D6AAA4]" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#D6AAA4] uppercase">
                  The Art of Everyday Luxury
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-[#FFFCF8] text-balance">
                Style That Feels{" "}
                <span className="italic font-light text-[#D6AAA4] block sm:inline">
                  Like You.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-[#D4C2AD] text-sm sm:text-base font-light leading-relaxed max-w-md pt-2">
                Discover thoughtfully selected fashion, botanical beauty, and timeless accessories designed to make every day feel extraordinary.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={onExploreCollection}
                  className="px-6 py-3.5 bg-[#FFFCF8] text-[#55463E] text-xs font-semibold tracking-widest uppercase hover:bg-[#D6AAA4] hover:text-[#FFFCF8] transition-all duration-300 rounded-sm cursor-pointer shadow-sm flex items-center justify-center gap-2 group"
                >
                  <span>Explore The Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onDiscoverStory}
                  className="px-6 py-3.5 bg-transparent border border-[#D4C2AD]/60 text-[#F8F4EE] text-xs font-semibold tracking-widest uppercase hover:border-[#FFFCF8] hover:bg-[#FFFCF8]/10 transition-all duration-300 rounded-sm cursor-pointer flex items-center justify-center"
                >
                  <span>Discover Our Story</span>
                </button>
              </div>
            </div>

            {/* Bottom Statement & Trust Note */}
            <div className="pt-10 lg:pt-12 border-t border-[#75645A]/70 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#D4C2AD]">
              <div className="flex items-center gap-2 tracking-wider uppercase text-[11px] font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#D6AAA4]" />
                <span>Timeless Pieces · Effortless Confidence</span>
              </div>
              <div className="font-serif italic text-sm text-[#D6AAA4]">
                Glow Souq Atelier
              </div>
            </div>
          </div>

          {/* Right Panel: Editorial Photography Showcase (~52% -> 7 cols) */}
          <div className="lg:col-span-7 relative min-h-[420px] sm:min-h-[520px] lg:min-h-[640px] bg-[#E9E3DC] overflow-hidden group">
            {/* Primary Editorial Image */}
            <img
              src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=85&w=1400"
              alt="Editorial still life with structured taupe leather handbag, luxury perfume, and natural lighting on marble"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              loading="eager"
              referrerPolicy="no-referrer"
            />

            {/* Subtle warm luxury vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#55463E]/60 via-transparent to-black/10 pointer-events-none" />

            {/* Editorial Floating Tag (Echoing the reference image aesthetic with delicate script) */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-xs bg-[#FFFCF8]/90 backdrop-blur-md p-4 sm:p-5 rounded-lg border border-[#E5DCD3] shadow-lg">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#82766E]">
                    Curated Edit
                  </span>
                  <p className="font-serif text-lg text-[#302722] font-medium mt-0.5">
                    The Modern Essentials
                  </p>
                  <p className="text-xs text-[#75645A] font-light mt-1">
                    Supple calfskin, botanical notes & 18k vermeil details.
                  </p>
                </div>
                <span className="font-script text-2xl text-[#D6AAA4] shrink-0 transform -rotate-6 select-none">
                  Pure Grace ♡
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
