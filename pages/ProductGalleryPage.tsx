import { useState } from "react";
import { Link } from "react-router";
import { galleryItems, GalleryCategory, GalleryItem } from "../src/data/content";
import GalleryCard from "../components/GalleryCard";
import ImageLightbox from "../components/ImageLightbox";
import SpecDrawer from "../components/SpecDrawer";

export default function ProductGalleryPage() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [specDrawerOpen, setSpecDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Filter items
  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  // Get counts
  const counts = {
    all: galleryItems.length,
    cylinders: galleryItems.filter((i) => i.category === "cylinders").length,
    systems: galleryItems.filter((i) => i.category === "systems").length,
    components: galleryItems.filter((i) => i.category === "components").length,
  };

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleSpecClick = (item: GalleryItem) => {
    setSelectedItem(item);
    setSpecDrawerOpen(true);
  };

  const handleLightboxNavigate = (index: number) => {
    setLightboxIndex(index);
  };

  const handleLightboxOpenSpecs = (item: GalleryItem) => {
    setSelectedItem(item);
    setSpecDrawerOpen(true);
    setLightboxOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="border-b border-border-slate bg-slate-50 dark:bg-zinc-900 px-4 sm:px-6 lg:px-12 py-2 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <span className="text-primary font-bold">///</span>
          <Link
            to="/"
            className="text-text-muted hover:text-primary transition-colors"
          >
            Home
          </Link>
          <span className="text-text-muted">/</span>
          <span className="text-text-muted">Products</span>
          <span className="text-text-muted">/</span>
          <span className="text-text-main font-medium">Gallery</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-wider text-text-muted">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          {filteredItems.length} Items Loaded
        </div>
      </div>

      {/* Page Header */}
      <div className="relative bg-white dark:bg-background-dark border-b border-border-slate overflow-hidden">
        {/* Grid-line background decoration */}
        <div
          className="absolute inset-0 opacity-5 dark:opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 py-12 sm:py-16 lg:py-20 xl:py-24">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold uppercase tracking-tighter mb-4">
            Product Gallery
          </h1>
          <p className="text-text-muted text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed max-w-5xl">
            Explore our complete range of hydraulic cylinders, systems, and
            components. Click on any product to view detailed engineering
            specifications and technical schematics.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="border-b border-border-slate bg-white dark:bg-background-dark px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 py-3 flex items-center gap-3 flex-wrap sticky top-16 z-40">
        {(["all", "cylinders", "systems", "components"] as GalleryCategory[]).map(
          (filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`border text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-widest px-3 sm:px-4 lg:px-6 py-2 lg:py-3 min-h-[44px] transition-colors ${
                activeFilter === filter
                  ? "border-primary bg-primary text-white"
                  : "border-border-slate text-text-muted hover:border-text-main hover:text-text-main"
              }`}
            >
              {filter}{" "}
              <span className="font-mono ml-1">
                ●{counts[filter]}
              </span>
            </button>
          )
        )}
      </div>

      {/* Gallery Grid */}
      <div className="mx-auto">
        <div className="technical-grid bg-white dark:bg-background-dark">
          {filteredItems.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={index}
              onImageClick={handleImageClick}
              onSpecClick={handleSpecClick}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-text-main text-white p-6 sm:p-8 lg:p-16 xl:p-20 2xl:p-24">
        <div className="mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
          <div className="w-2 h-2 lg:w-3 lg:h-3 bg-primary flex-shrink-0 mt-1 sm:mt-0" />
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold uppercase tracking-wider mb-2">
              Need a Custom Solution?
            </h2>
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-400">
              Contact our engineering team for bespoke specifications tailored
              to your application requirements.
            </p>
          </div>
          <Link
            to="/contact-us"
            className="bg-primary text-white font-bold uppercase tracking-widest text-xs lg:text-sm px-6 lg:px-8 py-3 lg:py-4 min-h-[44px] hover:bg-primary/90 transition-colors flex items-center justify-center"
          >
            Enquire Now
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        items={filteredItems}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={handleLightboxNavigate}
        onOpenSpecs={handleLightboxOpenSpecs}
      />

      {/* Spec Drawer */}
      <SpecDrawer
        item={selectedItem}
        isOpen={specDrawerOpen}
        onClose={() => setSpecDrawerOpen(false)}
      />
    </div>
  );
}
