import React from 'react';
import AboutHero from '../components/about/AboutHero';
import MissionSection from '../components/about/MissionSection';
import VisionSection from '../components/about/VisionSection';
import WhoWeAreSection from '../components/about/WhoWeAreSection';
import ValuesSection from '../components/about/ValuesSection';
// import TeamSection from '../components/about/TeamSection';

const About = () => {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <MissionSection />
      <VisionSection />
      <WhoWeAreSection />
      <ValuesSection />
      {/* <TeamSection /> */}
    </div>
  );
};

export default About;