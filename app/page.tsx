import Footer from '@/components/base/Footer';
import FAQ from '@/components/ui/FAQ';
import FeatureCard from '@/components/ui/FeatureCard';
import FeatureImage from '@/components/ui/FeatureImage';
import Hero from '@/components/ui/Hero';
import TopCompanies from '@/components/ui/TopCompanies';
import React from 'react';

const Home = () => {
  return (
    <main>
      <Hero />
      <TopCompanies />
      <FeatureCard />
      <FeatureImage />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Home;
