import React from "react";
import { Compass, Sparkles, Feather, HeartHandshake } from "lucide-react";

export const BrandValues: React.FC = () => {
  const values = [
    {
      icon: Compass,
      title: "Thoughtfully Curated",
      description: "Each piece selected for timeless relevance, not fleeting trends.",
    },
    {
      icon: Sparkles,
      title: "Everyday Elegance",
      description: "Understated refinement made for real life and lasting comfort.",
    },
    {
      icon: Feather,
      title: "Quality You Can Feel",
      description: "Mulberry silks, full-grain Italian leathers, and pure botanical extracts.",
    },
    {
      icon: HeartHandshake,
      title: "A Personal Touch",
      description: "Hand-wrapped in signature embossed blush boxes with handwritten care.",
    },
  ];

  return (
    <section className="border-y border-[#E5DCD3] bg-[#FFFCF8]/70 py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#E5DCD3]/60">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className={`flex items-start gap-4 ${
                  idx > 0 ? "pt-6 sm:pt-0 sm:pl-6" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-[#F8F4EE] border border-[#E5DCD3] flex items-center justify-center shrink-0 text-[#75645A]">
                  <Icon className="w-4 h-4 stroke-[1.6]" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-semibold text-[#55463E]">
                    {v.title}
                  </h3>
                  <p className="text-xs text-[#82766E] font-light mt-1 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
