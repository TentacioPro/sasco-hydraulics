import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import BrochureDownload from './components/BrochureDownload';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-full font-sans">
      <Navbar />
      
      <main className="flex-grow w-full max-w-[1440px] mx-auto border-x border-border-slate">
        <Hero />
        <ProductGrid />
        <BrochureDownload />
      </main>

      <Footer />
    </div>
  );
};

export default App;