import React from "react";
import { testimonials } from "../data/testimonials";
import { Star, Quote } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFCF8] border-b border-[#E5DCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A99A8D] block mb-2">
            Client Impressions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#302722] tracking-tight">
            Words We Treasure
          </h2>
          <p className="mt-3 text-sm text-[#82766E] font-light">
            Reflections from clients who have brought Glow Souq pieces into their daily lives.
          </p>
        </div>

        {/* Testimonials 3-Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#F8F4EE] rounded-2xl p-8 border border-[#E5DCD3] flex flex-col justify-between relative shadow-xs"
            >
              <div>
                <Quote className="w-6 h-6 text-[#D6AAA4] mb-4 opacity-80" />
                <div className="flex items-center gap-1 mb-4 text-[#75645A]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#75645A]" />
                  ))}
                </div>
                <p className="font-serif text-base sm:text-lg text-[#302722] italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E5DCD3]/70 flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-[#55463E] block">
                    {t.author}
                  </span>
                  <span className="text-[11px] text-[#A99A8D]">
                    {t.location}
                  </span>
                </div>
                <span className="text-[11px] text-[#75645A] font-medium bg-[#FFFCF8] px-2.5 py-1 rounded-sm border border-[#E5DCD3]/60">
                  {t.productMentioned}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Developer / Client Note */}
        <div className="mt-10 text-center">
          <p className="text-[11px] text-[#A99A8D] font-light italic">
            * Showcase testimonials for layout demonstration. Real verified customer reviews can be synced in <code className="text-[#75645A] font-mono text-[10px]">src/data/testimonials.ts</code>.
          </p>
        </div>
      </div>
    </section>
  );
};
