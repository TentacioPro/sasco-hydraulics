import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent, siteImages } from '../src/data/content';

const Hero: React.FC = () => {
  const { hero } = siteContent;

  return (
    <>
      {/* Breadcrumb / Status Bar */}
      <div className="border-b border-border-slate bg-slate-50 dark:bg-zinc-900 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 py-2 flex items-center justify-between gap-2 min-w-0 overflow-hidden">
        <div className="flex items-center gap-2 text-[10px] sm:text-xs lg:text-sm font-mono text-text-muted uppercase min-w-0 flex-shrink">
          <span className="text-primary font-bold flex-shrink-0">///</span>
          <Link className="hover:underline truncate" to="/">Home</Link>
          <span className="flex-shrink-0">/</span>
          <span className="text-text-main font-bold truncate">Hydraulic Solutions</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 lg:gap-4 xl:gap-6 text-[10px] sm:text-xs lg:text-sm font-mono text-text-muted flex-shrink-0">
          <span className="flex items-center gap-1 whitespace-nowrap">
            <span className="w-2 h-2 xl:w-2.5 xl:h-2.5 rounded-full bg-green-500 flex-shrink-0"></span> OPERATIONAL
          </span>
          <span className="whitespace-nowrap">UTC: {new Date().toISOString().slice(11, 19)}</span>
        </div>
      </div>

      {/* Hero Section: Split Screen Technical */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-border-slate min-h-[min(500px,80vh)] lg:min-h-[500px] xl:min-h-[600px] 2xl:min-h-[700px]">
        {/* Left: Typography & CTA */}
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-16 xl:p-20 2xl:p-28 border-r-0 lg:border-r border-border-slate bg-white dark:bg-background-dark relative overflow-hidden group min-w-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20"></div>
          
          <div className="relative z-10 min-w-0">
            <span className="inline-block py-1 px-2 border border-primary text-primary text-[10px] sm:text-xs font-bold uppercase mb-4 sm:mb-6 tracking-widest bg-primary/5">
              20+ Years of Experience
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-[0.95] tracking-tighter mb-4 sm:mb-6 text-text-main break-words">
              {hero.headline}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-text-muted mb-6 sm:mb-8">{hero.subHeadline}</p>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mb-6 sm:mb-8 border-t border-b border-border-slate py-3 sm:py-4">
              <div>
                <p className="text-[10px] sm:text-xs text-text-muted uppercase tracking-wider mb-1">Max Pressure</p>
                <p className="text-lg sm:text-xl font-mono font-bold">700 BAR</p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-text-muted uppercase tracking-wider mb-1">Flow Rate</p>
                <p className="text-lg sm:text-xl font-mono font-bold">120 L/MIN</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                to="/hydraulic-cylinder"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-text-main text-white text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-primary transition-colors"
              >
                Explore Products
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link
                to="/contact-us"
                className="min-h-[44px] inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-border-slate text-text-main hover:border-text-main text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors"
              >
                Download Spec Sheet
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Technical Cutaway Image */}
        <div className="relative bg-slate-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden h-[280px] sm:h-[350px] lg:h-auto lg:min-h-[400px] min-w-0">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
          <div
            className="w-full h-full bg-contain bg-center bg-no-repeat relative z-10 scale-90"
            style={{
              backgroundImage: `url('${siteImages.heroTechnicalCutaway}')`,
              backgroundBlendMode: 'multiply',
            }}
          >
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Hero;
