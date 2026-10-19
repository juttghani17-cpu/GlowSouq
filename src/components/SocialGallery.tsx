import React from "react";
import { Instagram } from "lucide-react";
import { siteConfig } from "../data/config";

export const SocialGallery: React.FC = () => {
  const galleryItems = [
    {
      id: "g1",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=600",
      alt: "Structured taupe calfskin bag on travertine pedestal",
      caption: "Morning coffee & quiet structure.",
    },
    {
      id: "g2",
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=600",
      alt: "Amber Veil perfume bottle catching sunlight",
      caption: "The warmth of golden amber.",
    },
    {
      id: "g3",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=600",
      alt: "Model in neutral linen and silk tailoring",
      caption: "Effortless fluid silhouettes.",
    },
    {
      id: "g4",
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=600",
      alt: "18k champagne gold hoop earrings on marble",
      caption: "Golden hour reflection.",
    },
    {
      id: "g5",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
      alt: "Velvet hydration face cream in frosted glass jar",
      caption: "Tactile barrier care.",
    },
    {
      id: "g6",
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&q=80&w=600",
      alt: "Mulberry silk scarf with delicate hand-rolled edges",
      caption: "The final touch before stepping out.",
    },
  ];

  return (
    <section className="py-20 bg-[#F8F4EE] border-b border-[#E5DCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2 text-[#75645A]">
            <Instagram className="w-4 h-4" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">
              {siteConfig.instagramHandle}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#302722] tracking-tight">
            Follow the Feeling
          </h2>
          <p className="mt-2 text-sm text-[#82766E] font-light">
            Everyday moments, beautiful details, and a little inspiration.
          </p>
        </div>

        {/* 6-Grid Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {galleryItems.map((item) => (
            <a
              key={item.id}
              href={siteConfig.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden bg-[#E9E3DC] border border-[#E5DCD3] shadow-xs cursor-pointer block"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#55463E]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center text-[#FFFCF8]">
                <Instagram className="w-5 h-5 text-[#D6AAA4] mb-1.5" />
                <p className="text-[10px] line-clamp-2 font-light">
                  {item.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
