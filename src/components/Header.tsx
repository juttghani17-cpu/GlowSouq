import React, { useState, useEffect } from "react";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { siteConfig } from "../data/config";

interface HeaderProps {
  onOpenSearch: () => void;
  onNavigateCategory: (cat: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onNavigateCategory,
  onNavigateSection,
}) => {
  const { itemCount, openCart } = useCart();
  const { wishlist, openWishlist } = useWishlist();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "New Arrivals", action: () => onNavigateSection("collection") },
    { label: "Fashion", action: () => onNavigateCategory("fashion") },
    { label: "Beauty", action: () => onNavigateCategory("beauty") },
    { label: "Accessories", action: () => onNavigateCategory("accessories") },
    { label: "Amazon Finds", action: () => window.open(siteConfig.amazonAffiliateUrl, "_blank", "noopener,noreferrer,sponsored") },
    { label: "Our Story", action: () => onNavigateSection("story") },
    { label: "Contact", action: () => onNavigateSection("contact") },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F8F4EE]/95 backdrop-blur-md shadow-xs border-b border-[#E5DCD3]"
          : "bg-[#F8F4EE] border-b border-[#E5DCD3]/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-left group cursor-pointer focus:outline-hidden"
              aria-label="MAISON BLUSH Home"
            >
              <span className="font-serif text-2xl sm:text-3xl font-medium tracking-[0.2em] text-[#55463E] group-hover:text-[#75645A] transition-colors uppercase">
                {siteConfig.brandName}
              </span>
              <span className="block text-[9px] uppercase tracking-[0.3em] text-[#A99A8D] font-light -mt-1">
                Atelier & Parfumerie
              </span>
            </button>
          </div>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wider text-[#55463E] uppercase"
            aria-label="Primary Navigation"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="relative py-1 whitespace-nowrap shrink-0 hover:text-[#302722] transition-colors cursor-pointer group focus:outline-hidden"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D6AAA4] group-hover:w-full transition-all duration-300 ease-out" />
              </button>
            ))}
          </nav>

          {/* Zone 3: Actions (Amazon CTA, Search, Wishlist, Cart, Mobile Toggle) */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
            {/* Amazon Direct Affiliate Button */}
            <a
              href={siteConfig.amazonAffiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#75645A]/40 text-[#55463E] hover:bg-[#55463E] hover:text-[#FFFCF8] text-[11px] font-semibold tracking-wider uppercase transition-all shadow-2xs"
              title="Shop our curated Amazon finds storefront"
            >
              <span>Amazon Shop</span>
              <span className="text-[10px]">↗</span>
            </a>

            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#55463E] hover:text-[#302722] transition-colors cursor-pointer rounded-full hover:bg-[#E9E3DC]/40 focus:outline-hidden"
              aria-label="Search collection"
              title="Search collection"
            >
              <Search className="w-5 h-5 stroke-[1.6]" />
            </button>

            {/* Wishlist Trigger */}
            <button
              onClick={openWishlist}
              className="relative p-2 text-[#55463E] hover:text-[#302722] transition-colors cursor-pointer rounded-full hover:bg-[#E9E3DC]/40 focus:outline-hidden"
              aria-label={`Saved items: ${wishlist.length}`}
              title="Saved items"
            >
              <Heart className="w-5 h-5 stroke-[1.6]" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#D6AAA4] text-[#FFFCF8] text-[9px] font-bold rounded-full flex items-center justify-center tabular-nums">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Bag Trigger */}
            <button
              onClick={openCart}
              className="relative p-2 text-[#55463E] hover:text-[#302722] transition-colors cursor-pointer rounded-full hover:bg-[#E9E3DC]/40 focus:outline-hidden"
              aria-label={`Shopping bag: ${itemCount} items`}
              title="Shopping bag"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.6]" />
              {itemCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#55463E] text-[#FFFCF8] text-[9px] font-bold rounded-full flex items-center justify-center tabular-nums">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#55463E] hover:text-[#302722] transition-colors rounded-md focus:outline-hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[1.7]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[1.7]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFCF8] border-b border-[#E5DCD3] px-6 py-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  item.action();
                  setMobileMenuOpen(false);
                }}
                className="text-left text-sm uppercase tracking-widest text-[#55463E] hover:text-[#302722] py-2 border-b border-[#E5DCD3]/40 cursor-pointer font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-[#82766E]">
            <span>Need assistance?</span>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-[#55463E] font-medium underline underline-offset-4"
            >
              {siteConfig.contactEmail}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
