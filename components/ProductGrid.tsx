import React from 'react';
import { Link } from 'react-router-dom';
import { galleryItems } from '../src/data/content';

const ProductGrid: React.FC = () => {
  // Show 6 featured items on homepage (2 cylinders, 2 systems, 2 components)
  const cylinders = galleryItems.filter(item => item.category === 'cylinders').slice(0, 2);
  const systems = galleryItems.filter(item => item.category === 'systems').slice(0, 2);
  const components = galleryItems.filter(item => item.category === 'components').slice(0, 2);
  const featuredItems = [...cylinders, ...systems, ...components];

  return (
    <>
      {/* Section Header: Product Schematics */}
      <div className="bg-slate-50 dark:bg-zinc-900 border-b border-border-slate p-4 sm:p-6 lg:px-12 xl:px-16 2xl:px-24 lg:py-8 xl:py-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 xl:gap-6 min-w-0">
        <div className="min-w-0">
          <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase tracking-tight">Featured Products</h3>
          <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-text-muted mt-1 xl:mt-2 max-w-lg xl:max-w-xl 2xl:max-w-2xl">Explore our range of hydraulic cylinders, systems, and components with detailed specifications.</p>
        </div>
        <Link
          className="flex items-center justify-center gap-1 text-sm lg:text-base xl:text-lg font-bold uppercase text-primary hover:underline min-h-[44px] sm:inline-flex sm:min-h-0 flex-shrink-0"
          to="/products/gallery"
        >
          View Full Gallery <span className="material-symbols-outlined text-sm lg:text-base xl:text-lg">chevron_right</span>
        </Link>
      </div>

      {/* Product Grid: Gallery Cards */}
      <div className="technical-grid bg-white dark:bg-background-dark">
        {featuredItems.map((item, index) => (
          <Link
            key={index}
            to="/products/gallery"
            className="technical-cell p-0 group hover-invert transition-colors duration-200 cursor-pointer min-h-[44px] active:bg-text-main active:text-white"
          >
            <div className="p-4 sm:p-6 xl:p-8 2xl:p-10 h-full flex flex-col min-w-0">
              <div className="flex justify-between items-start mb-3 sm:mb-4 xl:mb-6">
                <span className="text-[10px] lg:text-xs font-mono border border-border-slate px-1 lg:px-1.5 xl:px-2 group-hover:border-white/20 flex-shrink-0">{item.ref}</span>
                <span className="material-symbols-outlined text-border-slate group-hover:text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl flex-shrink-0">{item.icon}</span>
              </div>
              <div className="aspect-[4/3] bg-slate-50 dark:bg-white/5 mb-4 sm:mb-6 xl:mb-8 rounded-sm relative overflow-hidden min-h-0">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold uppercase mb-2 xl:mb-3 group-hover:text-white min-w-0 break-words">{item.name}</h4>
              <p className="text-[10px] lg:text-xs xl:text-sm text-text-muted uppercase tracking-wider font-mono mb-3 xl:mb-4 group-hover:text-gray-400">{item.tagline}</p>
              <div className="mt-auto space-y-1.5 xl:space-y-2 font-mono text-[10px] sm:text-xs lg:text-sm min-w-0">
                {item.specs.slice(0, 3).map((spec, idx) => (
                  <div key={idx} className="flex justify-between gap-2 border-b border-border-slate/50 pb-1 group-hover:border-white/20 last:border-b-0">
                    <span className="text-text-muted group-hover:text-white/60 truncate uppercase">{spec.label}</span>
                    <span className={`font-bold flex-shrink-0 ${spec.isPrimary ? 'text-primary group-hover:text-white' : 'group-hover:text-white'}`}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
