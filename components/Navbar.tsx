import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../src/data/content';
import logo from '../logo.png';

const Navbar: React.FC = () => {
  const { products } = siteContent;
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = (
    <>
      <div className="relative group">
        <span className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors cursor-pointer py-2 block">
          Products
        </span>
        <div className="absolute top-full left-0 -mt-px pt-1 hidden group-hover:block z-50 lg:group-hover:block">
          <div className="bg-white dark:bg-background-dark border border-border-slate py-2 min-w-[200px] shadow-lg">
            {products.map((p, idx) => (
              <Link
                key={idx}
                to={`/${p.slug}`}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium uppercase tracking-wide hover:bg-slate-50 dark:hover:bg-zinc-800 hover:text-primary touch-target"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Link className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors py-2 block" to="/hydraulic-systems" onClick={() => setMobileOpen(false)}>
        Systems
      </Link>
      <Link className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors py-2 block" to="/services" onClick={() => setMobileOpen(false)}>
        Engineering
      </Link>
      <Link className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors py-2 block" to="/contact-us" onClick={() => setMobileOpen(false)}>
        Support
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-background-dark border-b border-border-slate overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 lg:px-12 min-w-0">
        {/* Brand - Logo routes to home */}
        <Link to="/" className="flex items-center min-w-0 flex-shrink-0">
          <img
            src={logo}
            alt="Sasco Hydraulics"
            className="h-8 sm:h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 lg:gap-8 items-center flex-shrink-0">
          {navLinks}
        </nav>

        {/* Mobile menu button + Desktop CTA */}
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center size-11 -mr-2 touch-target"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
          <Link
            to="/contact-us"
            className="hidden md:flex items-center justify-center h-9 px-5 bg-primary text-white text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors touch-target"
          >
            Request Quote
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-200 ease-out ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="border-t border-border-slate bg-slate-50 dark:bg-zinc-900 px-4 py-4 flex flex-col gap-1">
          <div className="space-y-1">
            <p className="text-[10px] font-mono uppercase text-text-muted px-2 py-1">Products</p>
            {products.map((p, idx) => (
              <Link
                key={idx}
                to={`/${p.slug}`}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium uppercase tracking-wide hover:bg-white dark:hover:bg-zinc-800 hover:text-primary border-l-2 border-transparent hover:border-primary touch-target"
              >
                {p.name}
              </Link>
            ))}
          </div>
          <Link to="/hydraulic-systems" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium uppercase tracking-wide hover:bg-white dark:hover:bg-zinc-800 hover:text-primary border-l-2 border-transparent hover:border-primary touch-target">
            Systems
          </Link>
          <Link to="/services" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium uppercase tracking-wide hover:bg-white dark:hover:bg-zinc-800 hover:text-primary border-l-2 border-transparent hover:border-primary touch-target">
            Engineering
          </Link>
          <Link to="/contact-us" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium uppercase tracking-wide hover:bg-white dark:hover:bg-zinc-800 hover:text-primary border-l-2 border-transparent hover:border-primary touch-target">
            Support
          </Link>
          <Link
            to="/contact-us"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center min-h-[44px] mt-4 mx-4 px-5 bg-primary text-white text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors touch-target"
          >
            Request Quote
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
