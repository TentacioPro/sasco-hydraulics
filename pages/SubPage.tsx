import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../src/data/content';
import type { SubPage as SubPageType } from '../src/data/content';

interface SubPageProps {
  page: SubPageType;
}

const SubPage: React.FC<SubPageProps> = ({ page }) => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-border-slate bg-slate-50 dark:bg-zinc-900 px-4 sm:px-6 lg:px-12 py-2 flex items-center justify-between min-w-0 overflow-hidden">
        <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-text-muted uppercase min-w-0 flex-shrink">
          <span className="text-primary font-bold flex-shrink-0">///</span>
          <Link className="hover:underline truncate" to="/">Home</Link>
          <span className="flex-shrink-0">/</span>
          <span className="text-text-main font-bold truncate">{page.title}</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="border-b border-border-slate p-6 sm:p-8 lg:p-16 bg-white dark:bg-background-dark min-w-0 overflow-hidden">
        <div className="relative overflow-hidden group">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20"></div>
          <div className="relative z-10 min-w-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-tighter mb-4 text-text-main break-words">
              {page.title}
            </h1>
            {page.intro && (
              <p className="text-text-muted max-w-3xl text-xs sm:text-sm leading-relaxed">{page.intro}</p>
            )}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      {page.content && page.content.length > 0 && (
        <div className="border-b border-border-slate p-6 sm:p-8 lg:p-16 bg-slate-50 dark:bg-zinc-900 min-w-0 overflow-hidden">
          <div className="space-y-4 sm:space-y-6 max-w-3xl">
            {page.content.map((paragraph, idx) => (
              <p key={idx} className="text-text-muted text-xs sm:text-sm leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </div>
      )}

      {/* Section Cards */}
      {page.sections && page.sections.length > 0 && (
        <div className="technical-grid bg-white dark:bg-background-dark">
          {page.sections.map((section, idx) => (
            <div
              key={idx}
              className="technical-cell p-0 group hover-invert transition-colors duration-200 border-r border-b border-border-slate min-w-0"
            >
              <div className="p-6 sm:p-8 h-full flex flex-col min-w-0">
                <span className="inline-block py-1 px-2 border border-primary text-primary text-[10px] sm:text-xs font-bold uppercase mb-3 sm:mb-4 tracking-widest bg-primary/5 w-fit">
                  {section.tagline}
                </span>
                <h2 className="text-lg sm:text-xl font-bold uppercase mb-3 sm:mb-4 group-hover:text-white break-words">{section.title}</h2>
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed group-hover:text-white/80 flex-grow break-words">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SubPage;
