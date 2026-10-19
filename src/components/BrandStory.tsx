import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface BrandStoryProps {
  onLearnMore: () => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ onLearnMore }) => {
  return (
    <section id="story" className="py-20 sm:py-28 bg-[#F8F4EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Column (~5 of 12 or 6 of 12) */}
          <div className="lg:col-span-6 relative">
            {/* Primary Story Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-4/5 shadow-xl border border-[#E5DCD3] bg-[#E9E3DC]">
              <img
                src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=1200"
                alt="Tactile luxury dressing table with amber perfume, soft silk fabric, and natural light"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#55463E]/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Overlaid Vignette (Small secondary card) */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 w-44 sm:w-56 p-4 rounded-xl bg-[#FFFCF8]/95 backdrop-blur-md border border-[#E5DCD3] shadow-xl">
              <div className="space-y-1">
                <span className="font-script text-2xl text-[#D6AAA4] block">
                  Everyday Rituals ♡
                </span>
                <p className="text-[11px] text-[#75645A] font-light leading-snug">
                  Pure botanical essences & ethically woven mulberry silks.
                </p>
              </div>
            </div>
          </div>

          {/* Right Narrative Column */}
          <div className="lg:col-span-6 lg:pl-6 space-y-6">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-6 h-[1px] bg-[#D6AAA4]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#75645A]">
                The Glow Souq Philosophy
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#302722] tracking-tight leading-[1.15]">
              Luxury Is a Feeling,{" "}
              <span className="italic font-light text-[#75645A] block sm:inline">
                Not a Label.
              </span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#82766E] font-light leading-relaxed">
              <p>
                We believe personal style begins with the little things. A beautiful texture, a familiar fragrance, a favorite accessory, or a moment spent caring for yourself.
              </p>
              <p>
                GLOW SOUQ brings together thoughtfully chosen pieces that celebrate individuality, simplicity, and the quiet confidence of being yourself. We reject mass obsolescence in favor of tactile materials that grow softer and richer over time.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#55463E] hover:text-[#302722] border-b border-[#55463E] pb-1 transition-colors group cursor-pointer"
              >
                <span>Get to Know Us</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* 3 Editorial Craft Markers */}
            <div className="pt-8 border-t border-[#E5DCD3] grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-medium text-[#55463E]">
                  100%
                </span>
                <span className="text-[11px] text-[#A99A8D] uppercase tracking-wider block mt-0.5">
                  Mulberry Silks
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-medium text-[#55463E]">
                  Grasse
                </span>
                <span className="text-[11px] text-[#A99A8D] uppercase tracking-wider block mt-0.5">
                  Formulated
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-medium text-[#55463E]">
                  14-Day
                </span>
                <span className="text-[11px] text-[#A99A8D] uppercase tracking-wider block mt-0.5">
                  Easy Returns
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
