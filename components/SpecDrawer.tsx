import { useEffect } from "react";
import { GalleryItem } from "../src/data/content";

interface SpecDrawerProps {
  item: GalleryItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function SpecDrawer({ item, isOpen, onClose }: SpecDrawerProps) {
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

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[50] bg-black/40 backdrop-blur-sm backdrop-enter"
        onClick={onClose}
      />

      {/* Drawer panel */}
      <div
        className="fixed top-0 right-0 bottom-0 z-[51] w-full sm:w-[420px] md:w-[480px] bg-white dark:bg-background-dark border-l border-border-slate overflow-y-auto drawer-enter"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-muted hover:text-primary min-h-[44px] p-4 sm:p-6 border-b border-border-slate w-full transition-colors"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Close
        </button>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Ref code */}
          <span className="text-[10px] font-mono border border-border-slate px-1 mb-4 inline-block">
            {item.ref}
          </span>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tighter leading-tight mb-3">
            {item.name}
          </h2>

          {/* Badges */}
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <span className="py-1 px-2 border border-primary text-primary text-[10px] font-bold uppercase tracking-widest bg-primary/5 inline-block">
              {item.tagline}
            </span>
            <span className="py-1 px-2 border border-border-slate text-text-muted text-[10px] font-bold uppercase tracking-widest inline-block">
              {item.category}
            </span>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-8">
            {item.description}
          </p>

          {/* Section divider */}
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted border-b border-border-slate pb-1 mb-4">
            ━━ Engineering Data ━━
          </div>

          {/* Specs table */}
          <div className="border border-border-slate overflow-hidden mb-8">
            {item.specs.map((spec, idx) => (
              <div
                key={idx}
                className={`spec-row flex justify-between items-baseline gap-4 p-3 ${
                  idx % 2 === 0 ? "" : "bg-slate-50 dark:bg-zinc-900"
                }`}
              >
                <span className="text-[10px] sm:text-xs text-text-muted font-mono uppercase tracking-wide">
                  {spec.label}
                </span>
                <span
                  className={`text-[10px] sm:text-xs font-mono font-bold text-right ${
                    spec.isPrimary ? "text-primary" : "text-text-main"
                  }`}
                >
                  {spec.value}
                  {spec.isPrimary && (
                    <span className="ml-1 text-primary">●</span>
                  )}
                </span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-border-slate my-8" />

          {/* CTAs */}
          <div className="space-y-3">
            <a
              href={`mailto:info@sascohydraulics.com?subject=Quote Request: ${item.ref} - ${item.name}`}
              className="block w-full min-h-[44px] bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors flex items-center justify-center"
            >
              Request Quote
            </a>
            <a
              href={`mailto:info@sascohydraulics.com?subject=Datasheet Request: ${item.ref} - ${item.name}`}
              className="block w-full min-h-[44px] border border-border-slate text-text-main text-xs font-bold uppercase tracking-widest hover:border-text-main transition-colors flex items-center justify-center"
            >
              Download Datasheet
            </a>
          </div>

          {/* Footer meta */}
          <div className="mt-6 text-[10px] font-mono text-text-muted space-y-1">
            <div>ID: {item.id}</div>
            <div>Last Updated: 2026</div>
          </div>
        </div>
      </div>
    </>
  );
}
