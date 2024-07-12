import Header from '@/components/base/Header';
import FeatureCard from '@/components/ui/FeatureCard';
import Hero from '@/components/ui/Hero';
import Jobs from '@/components/ui/Jobs';
import TopCompanies from '@/components/ui/TopCompanies';
import React from 'react';

const Home = () => {
  return (
    <main>
      <Hero />
      <Jobs />
      <TopCompanies />
      <FeatureCard />
    </main>
  );
};

export default Home;
