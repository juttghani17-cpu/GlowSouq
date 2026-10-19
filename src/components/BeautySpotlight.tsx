import React, { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface BeautySpotlightProps {
  onExploreBeauty: () => void;
}

export const BeautySpotlight: React.FC<BeautySpotlightProps> = ({ onExploreBeauty }) => {
  const [activeTab, setActiveTab] = useState<"fragrance" | "lip" | "skincare">("fragrance");

  const rituals = {
    fragrance: {
      title: "Artisanal Fragrance",
      subtitle: "Slowly distilled in Grasse with golden amber, iris butter, and cashmere woods.",
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1000",
      highlight: "Notes of Italian Bergamot & Cedar",
    },
    lip: {
      title: "Lip & Colour Elixirs",
      subtitle: "Botanical balm-lipsticks enriched with cold-pressed rosehip seed and damask rose oils.",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=1000",
      highlight: "Weightless satin hydration",
    },
    skincare: {
      title: "Barrier Restoration",
      subtitle: "Clean ceramides, multi-weight hyaluronic acid, and plant squalane for a soft velvet finish.",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=1000",
      highlight: "Dermatologist-tested simplicity",
    },
  };

  const current = rituals[activeTab];

  return (
    <section className="py-20 sm:py-28 bg-[#F5EDE9] border-y border-[#E5DCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Interactive Narrative & Category Selectors */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-6 h-[1px] bg-[#D6AAA4]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#75645A]">
                Beauty Spotlight
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#302722] tracking-tight leading-[1.15]">
              Your Everyday{" "}
              <span className="italic font-light text-[#75645A]">
                Beauty Ritual
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#82766E] font-light leading-relaxed">
              Make room for the little rituals that help you feel refreshed, confident, and completely yourself. Clean ingredients and sensory textures designed to elevate your morning routine.
            </p>

            {/* Interactive 3 Disciplines Selector */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => setActiveTab("fragrance")}
                className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  activeTab === "fragrance"
                    ? "bg-[#FFFCF8] border-[#75645A] shadow-xs"
                    : "bg-[#FFFCF8]/60 border-[#E5DCD3] hover:bg-[#FFFCF8]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#55463E]">
                    01. Artisanal Fragrance
                  </span>
                  {activeTab === "fragrance" && (
                    <Sparkles className="w-3.5 h-3.5 text-[#D6AAA4]" />
                  )}
                </div>
                <p className="text-xs text-[#82766E] font-light mt-1">
                  Intimate skin-warming scents that unfold with warmth.
                </p>
              </button>

              <button
                onClick={() => setActiveTab("lip")}
                className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  activeTab === "lip"
                    ? "bg-[#FFFCF8] border-[#75645A] shadow-xs"
                    : "bg-[#FFFCF8]/60 border-[#E5DCD3] hover:bg-[#FFFCF8]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#55463E]">
                    02. Lip & Colour
                  </span>
                  {activeTab === "lip" && (
                    <Sparkles className="w-3.5 h-3.5 text-[#D6AAA4]" />
                  )}
                </div>
                <p className="text-xs text-[#82766E] font-light mt-1">
                  Sheer botanical pigments and conditioning natural waxes.
                </p>
              </button>

              <button
                onClick={() => setActiveTab("skincare")}
                className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  activeTab === "skincare"
                    ? "bg-[#FFFCF8] border-[#75645A] shadow-xs"
                    : "bg-[#FFFCF8]/60 border-[#E5DCD3] hover:bg-[#FFFCF8]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#55463E]">
                    03. Barrier Skincare
                  </span>
                  {activeTab === "skincare" && (
                    <Sparkles className="w-3.5 h-3.5 text-[#D6AAA4]" />
                  )}
                </div>
                <p className="text-xs text-[#82766E] font-light mt-1">
                  Peptide hydration, ceramides, and comforting botanicals.
                </p>
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={onExploreBeauty}
                className="px-6 py-3.5 bg-[#55463E] text-[#FFFCF8] text-xs font-semibold tracking-widest uppercase hover:bg-[#302722] transition-colors rounded-sm cursor-pointer shadow-xs inline-flex items-center gap-2 group"
              >
                <span>Explore Beauty</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Stage with smooth photo presentation */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-[#E5DCD3] bg-[#E9E3DC]">
              <img
                key={activeTab}
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover object-center animate-in fade-in duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#302722]/50 via-transparent to-transparent pointer-events-none" />

              {/* Detail Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-sm bg-[#FFFCF8]/95 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-[#E5DCD3] shadow-lg">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#82766E]">
                  {current.highlight}
                </span>
                <h3 className="font-serif text-xl font-medium text-[#302722] mt-0.5">
                  {current.title}
                </h3>
                <p className="text-xs text-[#75645A] font-light mt-1">
                  {current.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
