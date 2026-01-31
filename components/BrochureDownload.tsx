import React, { useState } from 'react';
import { siteContent } from '../src/data/content';

const BrochureDownload: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleEmailSubmit = () => {
    if (email) {
      setStep(2);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleVerify = () => {
    const fullOtp = otp.join('');
    if (fullOtp.length === 4) {
      window.location.href = `mailto:${siteContent.contact.emails[0]}?subject=Brochure%20Request&body=Please%20send%20technical%20documentation%20to%20${encodeURIComponent(email)}`;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-border-slate min-w-0 overflow-hidden">
      {/* Documentation Left */}
      <div className="bg-slate-100 dark:bg-zinc-800 p-6 sm:p-8 lg:p-12 border-b md:border-b-0 md:border-r border-border-slate min-w-0">
        <div className="flex flex-col h-full justify-between gap-6 sm:gap-8">
          <div className="min-w-0">
            <span className="material-symbols-outlined text-3xl sm:text-4xl mb-4 text-primary block">description</span>
            <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-2">Technical<br />Documentation</h3>
            <p className="text-xs sm:text-sm text-text-muted max-w-sm">Access product specifications, performance data, and installation guides for our hydraulic cylinders, systems, and components.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <a
              href={`mailto:${siteContent.contact.emails[0]}?subject=Datasheet%20Request`}
              className="flex items-center gap-3 p-3 bg-white dark:bg-background-dark border border-border-slate hover:border-primary group transition-colors min-h-[44px]"
            >
              <span className="material-symbols-outlined text-text-muted group-hover:text-primary flex-shrink-0">download</span>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold uppercase">Request Datasheet</span>
                <span className="text-[10px] text-text-muted">PDF specifications</span>
              </div>
            </a>
            <a
              href={`mailto:${siteContent.contact.emails[0]}?subject=CAD%20Model%20Request`}
              className="flex items-center gap-3 p-3 bg-white dark:bg-background-dark border border-border-slate hover:border-primary group transition-colors min-h-[44px]"
            >
              <span className="material-symbols-outlined text-text-muted group-hover:text-primary flex-shrink-0">3d_rotation</span>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold uppercase">CAD Models</span>
                <span className="text-[10px] text-text-muted">Technical drawings</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* OTP Form Right */}
      <div className="bg-text-main dark:bg-black text-white p-6 sm:p-8 lg:p-12 min-w-0">
        <div className="h-full flex flex-col justify-center max-w-md mx-auto w-full">
          <div className="mb-4 sm:mb-6">
            <h4 className="text-lg sm:text-xl font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary flex-shrink-0"></span>
              Secure Access
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 font-mono">
              {step === 1 ? 'Enter your email to request access to technical documentation.' : 'Enter the verification code sent to your email.'}
            </p>
          </div>

          <div className="space-y-4 min-w-0">
            {step === 1 ? (
              <div className="animate-fade-in">
                <div className="relative group mb-4">
                  <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-mono">Step 1: Identification</label>
                  <div className="flex min-w-0">
                    <span className="inline-flex items-center px-3 border border-r-0 border-gray-700 bg-gray-900 text-gray-400 font-mono text-sm flex-shrink-0">&gt;_</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full min-w-0 bg-transparent border border-gray-700 text-white p-3 font-mono text-sm focus:outline-none focus:border-primary focus:ring-0 placeholder-gray-600 transition-colors"
                      placeholder="user@company.com"
                    />
                  </div>
                </div>
                <button
                  onClick={handleEmailSubmit}
                  className="w-full min-h-[44px] bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest text-sm transition-colors"
                >
                  Request OTP
                </button>
              </div>
            ) : (
              <div className="animate-fade-in">
                <div className="relative group mb-4">
                  <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                    <label className="block text-[10px] uppercase tracking-widest text-gray-500 font-mono">Step 2: Verification</label>
                    <button onClick={() => setStep(1)} className="text-[10px] uppercase text-primary hover:underline min-h-[44px] flex items-center">Change Email</button>
                  </div>
                  <div className="flex flex-wrap gap-2 min-w-0">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        className="w-11 h-11 sm:w-12 sm:h-12 text-center bg-gray-900 border border-gray-700 text-white font-mono text-lg focus:outline-none focus:border-primary flex-shrink-0"
                        placeholder="X"
                      />
                    ))}
                    <div className="flex-1 min-w-[60px] flex items-center justify-center bg-gray-900/50 border border-dashed border-gray-700">
                      <span className="material-symbols-outlined text-gray-600">lock_clock</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleVerify}
                  className="w-full min-h-[44px] bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest text-sm transition-colors"
                >
                  Verify & Download
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrochureDownload;
