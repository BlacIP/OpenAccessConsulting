import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import ClientLogos from '../components/landing/ClientLogos';
import ServicesSection from '../components/landing/ServicesSection';
import TrainingHighlight from '../components/landing/TrainingHighlight';
import CTASection from '../components/landing/CTASection';

const Landing = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ClientLogos />
      <ServicesSection />
      <TrainingHighlight />
      <CTASection />
    </div>
  );
};

export default Landing;