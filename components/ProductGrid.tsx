import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../src/data/content';

const ProductGrid: React.FC = () => {
  const { products } = siteContent;

  return (
    <>
      {/* Section Header: Product Schematics */}
      <div className="bg-slate-50 dark:bg-zinc-900 border-b border-border-slate p-4 sm:p-6 lg:px-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 min-w-0">
        <div className="min-w-0">
          <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight">Product Schematics</h3>
          <p className="text-xs sm:text-sm text-text-muted mt-1 max-w-lg">Select a component to view detailed engineering specifications and compatibility charts.</p>
        </div>
        <Link
          className="flex items-center justify-center gap-1 text-sm font-bold uppercase text-primary hover:underline min-h-[44px] sm:inline-flex sm:min-h-0"
          to="/hydraulic-cylinder"
        >
          View Full Catalog <span className="material-symbols-outlined text-sm">chevron_right</span>
        </Link>
      </div>

      {/* Product Grid: Schematic Cards */}
      <div className="technical-grid bg-white dark:bg-background-dark">
        {products.map((product, index) => (
          <Link
            key={index}
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
              <h4 className="text-base sm:text-lg font-bold uppercase mb-3 sm:mb-4 group-hover:text-white min-w-0 break-words">{product.name}</h4>
              <div className="mt-auto space-y-2 font-mono text-[10px] sm:text-xs min-w-0">
                {product.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between gap-2 border-b border-border-slate/50 pb-1 group-hover:border-white/20 last:border-b-0">
                    <span className="text-text-muted group-hover:text-white/60 truncate">{spec.label}</span>
                    <span className={`font-bold flex-shrink-0 ${spec.isPrimary ? 'text-primary' : ''}`}>{spec.value}</span>
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
