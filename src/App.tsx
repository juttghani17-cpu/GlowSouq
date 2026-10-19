import React, { useState } from "react";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { BrandValues } from "./components/BrandValues";
import { CategoryGrid } from "./components/CategoryGrid";
import { FeaturedCollection } from "./components/FeaturedCollection";
import { BrandStory } from "./components/BrandStory";
import { BeautySpotlight } from "./components/BeautySpotlight";
import { EditorialBanner } from "./components/EditorialBanner";
import { BestsellerSection } from "./components/BestsellerSection";
import { AmazonFindsSection } from "./components/AmazonFindsSection";
import { Testimonials } from "./components/Testimonials";
import { Newsletter } from "./components/Newsletter";
import { SocialGallery } from "./components/SocialGallery";
import { FAQ } from "./components/FAQ";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ProductDetailModal } from "./components/ProductDetailModal";
import { CartDrawer } from "./components/CartDrawer";
import { WishlistDrawer } from "./components/WishlistDrawer";
import { SearchModal } from "./components/SearchModal";
import { Product } from "./data/products";

const MainApp: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleCategorySelect = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    const collectionElem = document.getElementById("collection");
    if (collectionElem) {
      collectionElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigateSection = (sectionId: string) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F4EE] text-[#302722]">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Sticky Primary Header */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigateCategory={handleCategorySelect}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section (Editorial 2-Column Showcase) */}
        <Hero
          onExploreCollection={() => handleNavigateSection("collection")}
          onDiscoverStory={() => handleNavigateSection("story")}
        />

        {/* 2. Brand Values Strip */}
        <BrandValues />

        {/* 3. Shop by Category Grid */}
        <CategoryGrid onSelectCategory={handleCategorySelect} />

        {/* 4. Featured Collection ("The Edit") */}
        <FeaturedCollection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onQuickView={(p) => setActiveProduct(p)}
        />

        {/* 5. Editorial Brand Story */}
        <BrandStory onLearnMore={() => handleNavigateSection("contact")} />

        {/* 6. Dedicated Beauty Spotlight */}
        <BeautySpotlight
          onExploreBeauty={() => handleCategorySelect("beauty")}
        />

        {/* 7. The Find File: Curated Amazon Finds Under $25 (With Affiliate Link) */}
        <AmazonFindsSection />

        {/* 8. Full-Width Editorial Campaign Banner */}
        <EditorialBanner
          onDiscoverEdit={() => handleNavigateSection("collection")}
        />

        {/* 9. Loved for a Reason (Curated Bestsellers) */}
        <BestsellerSection
          onQuickView={(p) => setActiveProduct(p)}
          onShopAll={() => handleNavigateSection("collection")}
        />

        {/* 10. Client Words / Testimonials */}
        <Testimonials />

        {/* 11. Newsletter Subscription */}
        <Newsletter />

        {/* 12. Social Editorial Gallery */}
        <SocialGallery />

        {/* 13. FAQ Accordion */}
        <FAQ />

        {/* 14. Concierge Contact Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigateCategory={handleCategorySelect}
        onNavigateSection={handleNavigateSection}
      />

      {/* Interactive Modals and Drawers */}
      <ProductDetailModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        onSelectProduct={(p) => setActiveProduct(p)}
      />

      <CartDrawer />

      <WishlistDrawer onQuickView={(p) => setActiveProduct(p)} />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setActiveProduct(p)}
      />
    </div>
  );
};

export function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <MainApp />
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
