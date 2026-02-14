import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../src/data/content';

const ContactPage: React.FC = () => {
  const { contact } = siteContent;

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-border-slate bg-slate-50 dark:bg-zinc-900 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 py-2 flex items-center justify-between min-w-0 overflow-hidden">
        <div className="flex items-center gap-2 text-[10px] sm:text-xs lg:text-sm font-mono text-text-muted uppercase min-w-0 flex-shrink">
          <span className="text-primary font-bold flex-shrink-0">///</span>
          <Link className="hover:underline truncate" to="/">Home</Link>
          <span className="flex-shrink-0">/</span>
          <span className="text-text-main font-bold truncate">Contact Us</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="border-b border-border-slate p-6 sm:p-8 lg:p-16 xl:p-20 2xl:p-24 bg-white dark:bg-background-dark min-w-0 overflow-hidden">
        <div className="relative overflow-hidden group">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20"></div>
          <div className="relative z-10 min-w-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold uppercase leading-tight tracking-tighter mb-4 xl:mb-6 text-text-main">
              Contact Us
            </h1>
            <p className="text-text-muted max-w-3xl xl:max-w-4xl 2xl:max-w-5xl text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed">
              Please give us a call, drop us an email or fill out the contact form and we'll get back to you.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-border-slate min-w-0 overflow-hidden">
        <div className="p-6 sm:p-8 lg:p-12 xl:p-16 2xl:p-20 border-b md:border-b-0 md:border-r border-border-slate bg-slate-50 dark:bg-zinc-900 min-w-0">
          <span className="material-symbols-outlined text-2xl lg:text-3xl xl:text-4xl text-primary mb-4 xl:mb-6 block">location_on</span>
          <h3 className="text-xs lg:text-sm xl:text-base font-bold uppercase tracking-wider text-text-muted mb-2 xl:mb-3">Address</h3>
          <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-text-main font-mono break-words">{contact.address}</p>
        </div>
        <div className="p-6 sm:p-8 lg:p-12 xl:p-16 2xl:p-20 border-b md:border-b-0 md:border-r border-border-slate bg-white dark:bg-background-dark min-w-0">
          <span className="material-symbols-outlined text-2xl lg:text-3xl xl:text-4xl text-primary mb-4 xl:mb-6 block">phone</span>
          <h3 className="text-xs lg:text-sm xl:text-base font-bold uppercase tracking-wider text-text-muted mb-2 xl:mb-3">Phone</h3>
          <div className="space-y-1 xl:space-y-2">
            {contact.phones.map((phone, idx) => (
              <a key={idx} href={`tel:${phone.replace(/\s/g, '')}`} className="block text-xs sm:text-sm lg:text-base xl:text-lg font-mono text-text-main hover:text-primary transition-colors min-h-[44px] flex items-center break-all">
                {phone}
              </a>
            ))}
          </div>
        </div>
        <div className="p-6 sm:p-8 lg:p-12 xl:p-16 2xl:p-20 border-border-slate bg-slate-50 dark:bg-zinc-900 min-w-0">
          <span className="material-symbols-outlined text-2xl lg:text-3xl xl:text-4xl text-primary mb-4 xl:mb-6 block">email</span>
          <h3 className="text-xs lg:text-sm xl:text-base font-bold uppercase tracking-wider text-text-muted mb-2 xl:mb-3">Email</h3>
          <div className="space-y-1 xl:space-y-2">
            {contact.emails.map((email, idx) => (
              <a key={idx} href={`mailto:${email}`} className="block text-xs sm:text-sm lg:text-base xl:text-lg font-mono text-text-main hover:text-primary transition-colors min-h-[44px] flex items-center break-all">
                {email}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Enquire CTA */}
      <div className="p-6 sm:p-8 lg:p-16 xl:p-20 2xl:p-24 bg-text-main dark:bg-black text-white min-w-0 overflow-hidden">
        <div className="max-w-md xl:max-w-lg 2xl:max-w-xl">
          <h4 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold uppercase tracking-wider mb-2 xl:mb-4 flex items-center gap-2 xl:gap-3">
            <span className="w-2 h-2 xl:w-3 xl:h-3 bg-primary flex-shrink-0"></span>
            Ask us anything
          </h4>
          <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-400 mb-4 sm:mb-6 xl:mb-8">We're here to help. Fill out the form or reach out directly.</p>
          <a
            href={`mailto:${contact.emails[0]}`}
            className="inline-flex items-center justify-center min-h-[44px] px-6 sm:px-8 lg:px-10 xl:px-12 py-3 lg:py-4 bg-primary text-white text-xs sm:text-sm lg:text-base font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
