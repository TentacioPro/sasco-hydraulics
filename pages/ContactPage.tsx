import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../src/data/content';

const ContactPage: React.FC = () => {
  const { contact } = siteContent;

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-border-slate bg-slate-50 dark:bg-zinc-900 px-4 sm:px-6 lg:px-12 py-2 flex items-center justify-between min-w-0 overflow-hidden">
        <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-text-muted uppercase min-w-0 flex-shrink">
          <span className="text-primary font-bold flex-shrink-0">///</span>
          <Link className="hover:underline truncate" to="/">Home</Link>
          <span className="flex-shrink-0">/</span>
          <span className="text-text-main font-bold truncate">Contact Us</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="border-b border-border-slate p-6 sm:p-8 lg:p-16 bg-white dark:bg-background-dark min-w-0 overflow-hidden">
        <div className="relative overflow-hidden group">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20"></div>
          <div className="relative z-10 min-w-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-tighter mb-4 text-text-main">
              Contact Us
            </h1>
            <p className="text-text-muted max-w-3xl text-xs sm:text-sm leading-relaxed">
              Please give us a call, drop us an email or fill out the contact form and we'll get back to you.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-border-slate min-w-0 overflow-hidden">
        <div className="p-6 sm:p-8 lg:p-12 border-b md:border-b-0 md:border-r border-border-slate bg-slate-50 dark:bg-zinc-900 min-w-0">
          <span className="material-symbols-outlined text-2xl text-primary mb-4 block">location_on</span>
          <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-2">Address</h3>
          <p className="text-xs sm:text-sm text-text-main font-mono break-words">{contact.address}</p>
        </div>
        <div className="p-6 sm:p-8 lg:p-12 border-b md:border-b-0 md:border-r border-border-slate bg-white dark:bg-background-dark min-w-0">
          <span className="material-symbols-outlined text-2xl text-primary mb-4 block">phone</span>
          <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-2">Phone</h3>
          <div className="space-y-1">
            {contact.phones.map((phone, idx) => (
              <a key={idx} href={`tel:${phone.replace(/\s/g, '')}`} className="block text-xs sm:text-sm font-mono text-text-main hover:text-primary transition-colors min-h-[44px] flex items-center break-all">
                {phone}
              </a>
            ))}
          </div>
        </div>
        <div className="p-6 sm:p-8 lg:p-12 border-border-slate bg-slate-50 dark:bg-zinc-900 min-w-0">
          <span className="material-symbols-outlined text-2xl text-primary mb-4 block">email</span>
          <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-2">Email</h3>
          <div className="space-y-1">
            {contact.emails.map((email, idx) => (
              <a key={idx} href={`mailto:${email}`} className="block text-xs sm:text-sm font-mono text-text-main hover:text-primary transition-colors min-h-[44px] flex items-center break-all">
                {email}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Enquire CTA */}
      <div className="p-6 sm:p-8 lg:p-16 bg-text-main dark:bg-black text-white min-w-0 overflow-hidden">
        <div className="max-w-md">
          <h4 className="text-lg sm:text-xl font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-primary flex-shrink-0"></span>
            Ask us anything
          </h4>
          <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">We're here to help. Fill out the form or reach out directly.</p>
          <a
            href={`mailto:${contact.emails[0]}`}
            className="inline-flex items-center justify-center min-h-[44px] px-6 sm:px-8 py-3 bg-primary text-white text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
