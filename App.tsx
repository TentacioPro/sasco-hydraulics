import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SubPage from './pages/SubPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import { siteContent } from './src/data/content';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-full font-sans min-w-0 overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow w-full max-w-[1440px] mx-auto border-x-0 sm:border-x border-border-slate min-w-0 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<SubPage page={siteContent.about} />} />
          <Route path="/hydraulic-cylinder" element={<SubPage page={siteContent.cylinders} />} />
          <Route path="/hydraulic-systems" element={<SubPage page={siteContent.systems} />} />
          <Route path="/hydraulic-components" element={<SubPage page={siteContent.components} />} />
          <Route path="/services" element={<SubPage page={siteContent.services} />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
