import React, { useState } from "react";
import { faqItems } from "../data/faq";
import { ChevronDown } from "lucide-react";

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqItems[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FFFCF8] border-b border-[#E5DCD3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A99A8D] block mb-2">
            Client Assistance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#302722] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-[#82766E] font-light max-w-lg mx-auto">
            Everything you need to know regarding dispatch, sizing, botanical ingredients, and atelier returns.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-xl border border-[#E5DCD3] bg-[#F8F4EE] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-medium text-[#302722]">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FFFCF8] border border-[#E5DCD3] flex items-center justify-center shrink-0 text-[#75645A] transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#55463E] text-[#FFFCF8]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#82766E] font-light leading-relaxed border-t border-[#E5DCD3]/50 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
