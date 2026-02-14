import React, { useState, useEffect } from "react";
import { GalleryItem } from "../src/data/content";

interface ImageLightboxProps {
  items: GalleryItem[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
  onOpenSpecs: (item: GalleryItem) => void;
}

export default function ImageLightbox({
  items,
  initialIndex,
  isOpen,
  onClose,
  onNavigate,
  onOpenSpecs,
}: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);

  const currentItem = items[currentIndex];

  // Reset state when index changes
  useEffect(() => {
    setCurrentIndex(initialIndex);
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setImageLoaded(false);
  }, [initialIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") navigatePrev();
      if (e.key === "ArrowRight") navigateNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navigatePrev = () => {
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(newIndex);
    onNavigate(newIndex);
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setImageLoaded(false);
  };

  const navigateNext = () => {
    const newIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(newIndex);
    onNavigate(newIndex);
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setImageLoaded(false);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev * 1.5, 5));
  };

  const handleZoomOut = () => {
    const newZoom = Math.max(zoom / 1.5, 1);
    setZoom(newZoom);
    if (newZoom <= 1) setPan({ x: 0, y: 0 });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDoubleClick = () => {
    if (zoom === 1) {
      setZoom(2.5);
    } else {
      setZoom(1);
      setPan({ x: 0, y: 0 });
    }
  };

  if (!isOpen) return null;

  const zoomPercent = Math.round(zoom * 100);

  return (
    <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm lightbox-enter">
      {/* Backdrop - click to close */}
      <div
        className="absolute inset-0 cursor-default"
        onClick={onClose}
      />

      {/* Close button */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-end z-10">
        <button
          onClick={onClose}
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white/60 hover:text-white border border-white/20 hover:border-white transition-colors"
          aria-label="Close lightbox"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      {/* Nav arrows */}
      <button
        onClick={navigatePrev}
        className="absolute top-1/2 -translate-y-1/2 left-4 w-12 h-12 hidden sm:flex items-center justify-center text-white/60 hover:text-white border border-white/10 hover:border-white/40 bg-black/40 backdrop-blur transition-colors z-10"
        aria-label="Previous image"
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button
        onClick={navigateNext}
        className="absolute top-1/2 -translate-y-1/2 right-4 w-12 h-12 hidden sm:flex items-center justify-center text-white/60 hover:text-white border border-white/10 hover:border-white/40 bg-black/40 backdrop-blur transition-colors z-10"
        aria-label="Next image"
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>

      {/* Main content container */}
      <div className="relative h-full flex flex-col pb-32 sm:pb-24">
        {/* Image container */}
        <div
          className={`flex-1 flex items-center justify-center overflow-hidden relative z-0 ${
            zoom > 1
              ? isDragging
                ? "cursor-grabbing"
                : "cursor-grab"
              : "cursor-default"
          }`}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onDoubleClick={handleDoubleClick}
          onClick={(e) => e.stopPropagation()}
        >
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin" />
            </div>
          )}
          <img
            src={currentItem.schematicUrl}
            alt={currentItem.name}
            className={`max-w-full max-h-full object-contain select-none ${
              isDragging ? "" : "transition-transform duration-150"
            }`}
            style={{
              transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${
                pan.y / zoom
              }px)`,
            }}
            onLoad={() => setImageLoaded(true)}
            draggable={false}
          />
        </div>

        {/* Bottom bar */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 sm:p-6 z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-7xl mx-auto">
            {/* Controls row */}
            <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
              {/* Zoom controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleZoomOut}
                  disabled={zoom <= 1}
                  className="w-8 h-8 flex items-center justify-center border border-white/20 hover:border-white text-white/60 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  aria-label="Zoom out"
                >
                  <span className="material-symbols-outlined text-sm">
                    remove
                  </span>
                </button>
                <span className="text-xs font-mono text-white/80 tracking-widest min-w-[50px] text-center">
                  {zoomPercent}%
                </span>
                <button
                  onClick={handleZoomIn}
                  disabled={zoom >= 5}
                  className="w-8 h-8 flex items-center justify-center border border-white/20 hover:border-white text-white/60 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  aria-label="Zoom in"
                >
                  <span className="material-symbols-outlined text-sm">add</span>
                </button>
              </div>

              {/* Counter */}
              <div className="text-xs sm:text-sm font-mono text-white/60 tracking-widest">
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(items.length).padStart(2, "0")}
              </div>

              {/* View specs button */}
              <button
                onClick={() => onOpenSpecs(currentItem)}
                className="flex items-center gap-1.5 px-3 py-2 min-h-[44px] border border-white/20 hover:border-white text-white/80 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors"
              >
                <span className="material-symbols-outlined text-sm">
                  assignment
                </span>
                View Specs
              </button>
            </div>

            {/* Product info row */}
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <h3 className="text-xs sm:text-sm font-bold uppercase text-white tracking-wider">
                  {currentItem.name}
                </h3>
                <span className="py-0.5 px-2 border border-white/40 text-white/80 text-[10px] font-bold uppercase tracking-widest bg-white/5">
                  {currentItem.category}
                </span>
              </div>
              <span className="text-[10px] font-mono text-white/40 border border-white/20 px-1">
                {currentItem.ref}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
