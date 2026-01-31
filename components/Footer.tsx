import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-border-slate py-8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold uppercase tracking-wider">Sasco Hydraulics GmbH</span>
            <span className="text-xs text-text-muted font-mono">Industriestraße 45, 80339 Munich, DE</span>
          </div>
          <div className="flex gap-6 text-xs font-medium uppercase tracking-wide text-text-muted">
            <a className="hover:text-primary" href="#">Imprint</a>
            <a className="hover:text-primary" href="#">Privacy</a>
            <a className="hover:text-primary" href="#">Terms of Sale</a>
            <a className="hover:text-primary" href="#">Sitemap</a>
          </div>
          <div className="text-[10px] text-text-muted font-mono">
            © 2024 SASCO. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;