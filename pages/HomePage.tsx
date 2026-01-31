import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import BrochureDownload from '../components/BrochureDownload';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ProductGrid />
      <BrochureDownload />
    </>
  );
};

export default HomePage;
