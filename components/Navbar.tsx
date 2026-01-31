import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-background-dark border-b border-border-slate">
      <div className="max-w-[1440px] mx-auto flex h-16 items-center justify-between px-6 lg:px-12">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="bg-primary size-8 flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-xl">settings_input_component</span>
          </div>
          <div>
            <h1 className="font-bold text-lg uppercase tracking-tight leading-none">
              Sasco<span className="text-primary">Hydraulics</span>
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-text-muted">ISO 9001:2015 CERTIFIED</p>
          </div>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex gap-8 items-center">
          <a className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors" href="#">Products</a>
          <a className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors" href="#">Systems</a>
          <a className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors" href="#">Engineering</a>
          <a className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors" href="#">Support</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center justify-center h-9 px-4 border border-border-slate hover:border-primary hover:text-primary text-xs font-bold uppercase tracking-wider transition-colors">
            Login
          </button>
          <button className="flex items-center justify-center h-9 px-5 bg-primary text-white text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-colors">
            Request Quote
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;