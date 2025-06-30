import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import CoreServices from '../components/services/CoreServices';
import ProcessSection from '../components/services/ProcessSection';
import TrainingCTA from '../components/services/TrainingCTA';
import ServicesCTA from '../components/services/ServicesCTA';

const Services = () => {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <CoreServices />
      <ProcessSection />
      <TrainingCTA />
      <ServicesCTA />
    </div>
  );
};

export default Services;