import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../src/data/content';

const Footer: React.FC = () => {
  const { contact } = siteContent;

  return (
    <footer className="bg-white dark:bg-background-dark border-t border-border-slate py-6 sm:py-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 min-w-0">
        <div className="flex flex-col gap-6 sm:gap-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 min-w-0">
            <div className="flex flex-col gap-1 min-w-0">
              <span className="text-sm font-bold uppercase tracking-wider">Sasco Hydraulics</span>
              <span className="text-[10px] sm:text-xs text-text-muted font-mono max-w-xs break-words">{contact.address}</span>
              <div className="flex flex-col gap-0.5 mt-2">
                {contact.phones.map((phone, idx) => (
                  <a key={idx} href={`tel:${phone.replace(/\s/g, '')}`} className="text-[10px] sm:text-xs font-mono text-text-muted hover:text-primary min-h-[44px] flex items-center">
                    {phone}
                  </a>
                ))}
                {contact.emails.map((email, idx) => (
                  <a key={idx} href={`mailto:${email}`} className="text-[10px] sm:text-xs font-mono text-text-muted hover:text-primary min-h-[44px] flex items-center break-all">
                    {email}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] sm:text-xs font-medium uppercase tracking-wide text-text-muted">
              <Link className="hover:text-primary min-h-[44px] flex items-center" to="/about-us">About</Link>
              <Link className="hover:text-primary min-h-[44px] flex items-center" to="/hydraulic-cylinder">Cylinders</Link>
              <Link className="hover:text-primary min-h-[44px] flex items-center" to="/hydraulic-systems">Systems</Link>
              <Link className="hover:text-primary min-h-[44px] flex items-center" to="/hydraulic-components">Components</Link>
              <Link className="hover:text-primary min-h-[44px] flex items-center" to="/services">Services</Link>
              <Link className="hover:text-primary min-h-[44px] flex items-center" to="/gallery">Gallery</Link>
              <Link className="hover:text-primary min-h-[44px] flex items-center" to="/contact-us">Contact</Link>
            </div>
          </div>
          <div className="text-[9px] sm:text-[10px] text-text-muted font-mono pt-2 border-t border-border-slate">
            © {new Date().getFullYear()} SASCO HYDRAULICS. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
