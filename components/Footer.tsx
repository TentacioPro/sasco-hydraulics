import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../src/data/content';

const hiResLogo = new URL('../assets/adobe-logo.svg', import.meta.url).href;

const Footer: React.FC = () => {
  const { contact } = siteContent;
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      // Throttle scroll events for better performance
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      timeoutId = setTimeout(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        
        // Show button when user has scrolled 70% of the page or more
        // This ensures it appears when nearing the end but not too late
        const scrollPercentage = (scrollTop + windowHeight) / documentHeight;
        const shouldShow = scrollPercentage >= 0.7;
        
        setShowBackToTop(shouldShow);
      }, 10); // Small debounce to improve performance
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <>
      {/* Back to Top Button - Only show when near bottom of page */}
      <button
        onClick={scrollToTop}
        className={`
          back-to-top-button
          fixed bottom-6 right-4 sm:bottom-8 sm:right-6 md:bottom-10 md:right-8 z-50
          inline-flex items-center justify-center
          w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10
          text-text-muted hover:text-white
          bg-white/80 hover:bg-primary
          border border-text-muted/30 hover:border-primary
          rounded-full
          shadow-lg hover:shadow-xl
          backdrop-blur-sm
          transition-all duration-300 ease-in-out
          group
          ${showBackToTop 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-4 pointer-events-none'
          }
        `}
        title="Back to top"
        aria-label="Back to top"
        style={{ 
          transform: showBackToTop 
            ? 'translateY(0px) scale(1)' 
            : 'translateY(16px) scale(0.8)'
        }}
      >
        <svg 
          className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
        </svg>
        <div className="absolute -bottom-10 right-0 bg-gray-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-10">
          Back to top
        </div>
      </button>
      <footer className="relative bg-white dark:bg-background-dark border-t border-border-slate py-6 sm:py-8 lg:py-10 xl:py-12 overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 min-w-0">
        <div className="flex flex-col gap-6 sm:gap-6 lg:gap-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 lg:gap-8 min-w-0">
            <div className="flex flex-col gap-1 lg:gap-2 min-w-0">
              <span className="text-sm lg:text-base xl:text-lg font-bold uppercase tracking-wider">Sasco Hydraulics</span>
              <span className="text-[10px] sm:text-xs lg:text-sm text-text-muted font-mono max-w-xs lg:max-w-md break-words">{contact.address}</span>
              <div className="flex flex-wrap gap-x-3 lg:gap-x-4 gap-y-1 mt-2 items-center">
                {contact.phones.map((phone, idx) => (
                  <a key={idx} href={`tel:${phone.replace(/\s/g, '')}`} className="text-[10px] sm:text-xs lg:text-sm font-mono text-text-muted hover:text-primary flex items-center">
                    {phone}
                  </a>
                ))}
                {contact.emails.map((email, idx) => (
                  <a key={idx} href={`mailto:${email}`} className="text-[10px] sm:text-xs lg:text-sm font-mono text-text-muted hover:text-primary flex items-center break-all">
                    {email}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 md:items-end">
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] sm:text-xs font-medium uppercase tracking-wide text-text-muted">
                <Link className="hover:text-primary min-h-[44px] flex items-center" to="/about-us">About</Link>
                <Link className="hover:text-primary min-h-[44px] flex items-center" to="/hydraulic-cylinder">Cylinders</Link>
                <Link className="hover:text-primary min-h-[44px] flex items-center" to="/hydraulic-systems">Systems</Link>
                <Link className="hover:text-primary min-h-[44px] flex items-center" to="/hydraulic-components">Components</Link>
                <Link className="hover:text-primary min-h-[44px] flex items-center" to="/services">Services</Link>
                <Link className="hover:text-primary min-h-[44px] flex items-center" to="/products/gallery">Gallery</Link>
                <Link className="hover:text-primary min-h-[44px] flex items-center" to="/contact-us">Contact</Link>
              </div>
              <a href="https://cruiseai.space" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 group">
                <span className="text-xs sm:text-sm text-text-muted group-hover:text-primary transition font-mono font-light tracking-wider">Crafted by</span>
                <img src={hiResLogo} alt="CruiseAI" title="CruiseAI" className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto group-hover:opacity-80 transition" />
              </a>
            </div>
          </div>
          <div className="pt-2 border-t border-border-slate">
            <div className="text-[9px] sm:text-[10px] text-text-muted font-mono">
              © {new Date().getFullYear()} SASCO HYDRAULICS. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
