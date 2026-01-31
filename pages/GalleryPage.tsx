import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../src/data/content';

const GalleryPage: React.FC = () => {
  const { gallery, products } = siteContent;

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-border-slate bg-slate-50 dark:bg-zinc-900 px-4 sm:px-6 lg:px-12 py-2 flex items-center justify-between min-w-0 overflow-hidden">
        <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-text-muted uppercase min-w-0 flex-shrink">
          <span className="text-primary font-bold flex-shrink-0">///</span>
          <Link className="hover:underline truncate" to="/">Home</Link>
          <span className="flex-shrink-0">/</span>
          <span className="text-text-main font-bold truncate">{gallery.title}</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="border-b border-border-slate p-6 sm:p-8 lg:p-16 bg-white dark:bg-background-dark min-w-0 overflow-hidden">
        <div className="relative overflow-hidden group">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20"></div>
          <div className="relative z-10 min-w-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-tighter mb-4 text-text-main">
              {gallery.title}
            </h1>
            {gallery.intro && (
              <p className="text-text-muted max-w-3xl text-xs sm:text-sm leading-relaxed">{gallery.intro}</p>
            )}
          </div>
        </div>
      </div>

      {/* Product Schematic Grid - minimalistic style */}
      <div className="technical-grid bg-white dark:bg-background-dark">
        {products.map((product, idx) => (
          <Link
            key={idx}
            to={`/${product.slug}`}
            className="technical-cell p-0 group hover-invert transition-colors duration-200 cursor-pointer min-h-[44px] active:bg-text-main active:text-white"
          >
            <div className="p-4 sm:p-6 h-full flex flex-col min-w-0">
              <div className="flex justify-between items-start mb-3 sm:mb-4">
                <span className="text-[10px] font-mono border border-border-slate px-1 group-hover:border-white/20 flex-shrink-0">{product.ref}</span>
                <span className="material-symbols-outlined text-border-slate group-hover:text-white text-lg sm:text-xl flex-shrink-0">{product.icon}</span>
              </div>
              <div className="aspect-[4/3] bg-slate-50 dark:bg-white/5 mb-4 sm:mb-6 rounded-sm relative overflow-hidden min-h-0">
                <div
                  className="w-full h-full bg-contain bg-center bg-no-repeat mix-blend-multiply dark:mix-blend-normal opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  style={{ backgroundImage: `url('${product.schematicImageUrl}')` }}
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold uppercase mb-2 group-hover:text-white min-w-0 break-words">{product.name}</h3>
              <p className="text-xs sm:text-sm text-text-muted group-hover:text-white/80 line-clamp-2 min-w-0">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default GalleryPage;
