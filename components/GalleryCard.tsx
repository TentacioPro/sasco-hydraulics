import { GalleryItem } from "../src/data/content";

interface GalleryCardProps {
  key?: string;
  item: GalleryItem;
  index: number;
  onImageClick: (index: number) => void;
  onSpecClick: (item: GalleryItem) => void;
}

export default function GalleryCard({
  item,
  index,
  onImageClick,
  onSpecClick,
}: GalleryCardProps) {
  return (
    <div className="technical-cell p-0 group hover-invert transition-colors duration-200">
      {/* Header: Ref + Icon + Category */}
      <div className="flex items-start justify-between gap-2 p-4 sm:p-6 pb-3">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono border border-border-slate px-1 py-0.5">
            {item.ref}
          </span>
          <span className="material-symbols-outlined text-sm text-text-muted group-hover:text-white transition-colors">
            {item.icon}
          </span>
        </div>
        <span className="py-0.5 px-2 border border-primary text-primary text-[10px] font-bold uppercase tracking-widest bg-primary/5 group-hover:bg-white/10 group-hover:border-white group-hover:text-white transition-colors">
          {item.category}
        </span>
      </div>

      {/* Image */}
      <div
        className="aspect-[4/3] bg-slate-50 dark:bg-zinc-900 overflow-hidden relative cursor-pointer mx-4 sm:mx-6 mb-4 group/image"
        onClick={() => onImageClick(index)}
      >
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover/image:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/40 transition-colors duration-300 flex items-center justify-center">
          <span className="material-symbols-outlined text-white text-4xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
            zoom_in
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 pb-4 sm:pb-6 flex flex-col gap-3 flex-1">
        {/* Title */}
        <div>
          <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight leading-tight group-hover:text-white transition-colors">
            {item.name}
          </h3>
          <p className="text-[10px] text-text-muted uppercase tracking-wider font-mono mt-1 group-hover:text-gray-400 transition-colors">
            {item.tagline}
          </p>
        </div>

        {/* Mini-specs (first 3) */}
        <div className="border-t border-border-slate pt-3 space-y-1.5 group-hover:border-white/20 transition-colors">
          {item.specs.slice(0, 3).map((spec, idx) => (
            <div
              key={idx}
              className="flex justify-between items-baseline gap-2 text-[10px] sm:text-xs"
            >
              <span className="text-text-muted uppercase font-mono tracking-wider group-hover:text-gray-400 transition-colors">
                {spec.label}
              </span>
              <span
                className={`font-mono font-bold ${
                  spec.isPrimary
                    ? "text-primary group-hover:text-white"
                    : "text-text-main group-hover:text-white"
                } transition-colors`}
              >
                {spec.value}
                {spec.isPrimary && (
                  <span className="ml-1 text-primary group-hover:text-white">
                    ●
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 mt-auto pt-3 border-t border-border-slate group-hover:border-white/20 transition-colors">
          <button
            onClick={() => onImageClick(index)}
            className="flex-1 flex items-center justify-center gap-1.5 min-h-[44px] text-[10px] font-bold uppercase tracking-widest text-text-muted hover:text-primary group-hover:text-gray-400 group-hover:hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-sm">zoom_in</span>
            View Image
          </button>
          <button
            onClick={() => onSpecClick(item)}
            className="flex-1 flex items-center justify-center gap-1.5 min-h-[44px] text-[10px] font-bold uppercase tracking-widest text-primary hover:text-primary/80 group-hover:text-white group-hover:hover:text-gray-300 transition-colors border-l border-border-slate group-hover:border-white/20"
          >
            <span className="material-symbols-outlined text-sm">assignment</span>
            View Specs
          </button>
        </div>
      </div>
    </div>
  );
}
