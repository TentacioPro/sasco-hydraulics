import React, { useState } from 'react';

const BrochureDownload: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleEmailSubmit = () => {
    if (email) {
      console.log(`Initiating request for: ${email}`);
      setStep(2);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return; // Prevent multiple chars
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleVerify = () => {
    const fullOtp = otp.join('');
    console.log(`Verifying OTP: ${fullOtp} for ${email}`);
    alert('Brochure download started (simulated)');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-border-slate">
      {/* Documentation Left */}
      <div className="bg-slate-100 dark:bg-zinc-800 p-8 lg:p-12 border-b md:border-b-0 md:border-r border-border-slate">
        <div className="flex flex-col h-full justify-between gap-8">
          <div>
            <span className="material-symbols-outlined text-4xl mb-4 text-primary">description</span>
            <h3 className="text-3xl font-bold uppercase tracking-tight mb-2">Technical<br />Documentation</h3>
            <p className="text-text-muted max-w-sm">Access CAD files, detailed performance curves, and installation manuals for the Series 700-X.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <a className="flex items-center gap-3 p-3 bg-white dark:bg-background-dark border border-border-slate hover:border-primary group transition-colors" href="#">
              <span className="material-symbols-outlined text-text-muted group-hover:text-primary">download</span>
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase">Datasheet</span>
                <span className="text-[10px] text-text-muted">PDF - 2.4MB</span>
              </div>
            </a>
            <a className="flex items-center gap-3 p-3 bg-white dark:bg-background-dark border border-border-slate hover:border-primary group transition-colors" href="#">
              <span className="material-symbols-outlined text-text-muted group-hover:text-primary">3d_rotation</span>
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase">CAD Model</span>
                <span className="text-[10px] text-text-muted">STEP - 14MB</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* OTP Form Right */}
      <div className="bg-text-main dark:bg-black text-white p-8 lg:p-12">
        <div className="h-full flex flex-col justify-center max-w-md mx-auto">
          <div className="mb-6">
            <h4 className="text-xl font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary"></span>
              Secure Access
            </h4>
            <p className="text-sm text-gray-400 font-mono">
                {step === 1 ? 'Enter corporate email to retrieve access code.' : 'Enter the verification code sent to your email.'}
            </p>
          </div>

          <div className="space-y-4">
            {step === 1 ? (
              /* Step 1: Email */
              <div className="animate-fade-in">
                <div className="relative group mb-4">
                  <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-mono">Step 1: Identification</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 border border-r-0 border-gray-700 bg-gray-900 text-gray-400 font-mono text-sm">&gt;_</span>
                    <input 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full bg-transparent border border-gray-700 text-white p-3 font-mono text-sm focus:outline-none focus:border-primary focus:ring-0 placeholder-gray-600 transition-colors" 
                      placeholder="user@company.com" 
                    />
                  </div>
                </div>
                <button 
                  onClick={handleEmailSubmit}
                  className="w-full bg-primary hover:bg-red-600 text-white font-bold h-10 uppercase tracking-widest text-sm transition-colors"
                >
                  Request OTP
                </button>
              </div>
            ) : (
              /* Step 2: OTP */
              <div className="animate-fade-in">
                <div className="relative group mb-4">
                    <div className="flex justify-between items-baseline mb-1">
                        <label className="block text-[10px] uppercase tracking-widest text-gray-500 font-mono">Step 2: Verification</label>
                        <button onClick={() => setStep(1)} className="text-[10px] uppercase text-primary hover:underline">Change Email</button>
                    </div>
                  
                  <div className="flex gap-2">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        className="w-12 h-12 text-center bg-gray-900 border border-gray-700 text-white font-mono text-lg focus:outline-none focus:border-primary"
                        placeholder="X"
                      />
                    ))}
                    <div className="flex-1 flex items-center justify-center bg-gray-900/50 border border-dashed border-gray-700">
                         <span className="material-symbols-outlined text-gray-600">lock_clock</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={handleVerify}
                  className="w-full bg-primary hover:bg-red-600 text-white font-bold h-10 uppercase tracking-widest text-sm transition-colors"
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