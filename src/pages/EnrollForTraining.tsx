import React from 'react';
import TrainingHero from '../components/training/TrainingHero';
import TrainingContent from '../components/training/TrainingContent';
import WhyChooseTraining from '../components/training/WhyChooseTraining';
import TrainingModules from '../components/training/TrainingModules';
import FinalCTA from '../components/training/FinalCTA';

const EnrollForTraining = () => {
  return (
    <div className="min-h-screen">
      <TrainingHero />
      <TrainingContent />
      <WhyChooseTraining />
      <TrainingModules />
      <FinalCTA />
    </div>
  );
};

export default EnrollForTraining;