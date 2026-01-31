import React from 'react';

const Hero: React.FC = () => {
  return (
    <>
      {/* Breadcrumb / Status Bar */}
      <div className="border-b border-border-slate bg-slate-50 dark:bg-zinc-900 px-6 lg:px-12 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-mono text-text-muted uppercase">
          <span className="text-primary font-bold">///</span>
          <a className="hover:underline" href="#">Home</a>
          <span>/</span>
          <span className="text-text-main font-bold">High-Pressure Solutions</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-text-muted">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500"></span> SYSTEM STATUS: OPERATIONAL
          </span>
          <span>UTC: 14:02:45</span>
        </div>
      </div>

      {/* Hero Section: Split Screen Technical */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-border-slate min-h-[500px]">
        {/* Left: Typography & CTA */}
        <div className="flex flex-col justify-center p-8 lg:p-16 border-r border-border-slate bg-white dark:bg-background-dark relative overflow-hidden group">
          {/* Decorative background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20"></div>
          
          <div className="relative z-10">
            <span className="inline-block py-1 px-2 border border-primary text-primary text-xs font-bold uppercase mb-6 tracking-widest bg-primary/5">
              Series 700-X
            </span>
            <h2 className="text-5xl lg:text-6xl font-bold uppercase leading-[0.9] tracking-tighter mb-6 text-text-main">
              High-Pressure <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-800">Hydraulic</span> <br />
              Solutions
            </h2>
            
            <div className="grid grid-cols-2 gap-4 max-w-md mb-8 border-t border-b border-border-slate py-4">
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Max Pressure</p>
                <p className="text-xl font-mono font-bold">700 BAR</p>
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Flow Rate</p>
                <p className="text-xl font-mono font-bold">120 L/MIN</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="h-12 px-8 bg-text-main text-white text-sm font-bold uppercase tracking-widest hover:bg-primary transition-colors flex items-center gap-2">
                Explore Systems
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
              <button className="h-12 px-8 border border-border-slate text-text-main hover:border-text-main text-sm font-bold uppercase tracking-widest transition-colors">
                Download Spec Sheet
              </button>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative bg-slate-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden h-[400px] lg:h-auto">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
          
          {/* Technical Cutaway Image */}
          <div 
            className="w-full h-full bg-contain bg-center bg-no-repeat relative z-10 scale-90" 
            style={{ 
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD7IpN5-W0WOuqj9HAabcerWG5-uXD_y9F5b-EtD6U2USkoo7rCDXlevJd8JEIJlaIOM7Lk5XFrPZDesxmKIza9bZdJyOOcSuRYVphOew4phmM0-rpbLhjsccPi0K4H-9afsw9mrX5AcQbf3ipkl8Wh7n2I0W2bXjCYUxSFSr8_OhmsP3MeEzKA3BxdPbTIrCoVkJRmdKcbeAp3cX7eP-OsjzCrwUisLINDpWuHoSfjx6w6oRAVIgxZd4xgfyqmxHm_H6__Rgsw118')",
              backgroundBlendMode: "multiply"
            }}
          >
            {/* Overlay to make the image look more like a render/cutaway */}
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          </div>

          {/* Floating specs on image */}
          <div className="absolute bottom-6 right-6 bg-white/90 dark:bg-black/90 backdrop-blur border border-border-slate p-3 text-xs font-mono shadow-lg">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="font-bold">LIVE RENDER</span>
            </div>
            <div className="text-text-muted">ID: CYL-900-REV2</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;