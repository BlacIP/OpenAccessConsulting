import Hero from '../components/home/Hero';
import LogoCloud from '../components/home/LogoCloud';
import ServicesBento from '../components/home/ServicesBento';
import StatsBand from '../components/home/StatsBand';
import HowWeWork from '../components/home/HowWeWork';
import Industries from '../components/home/Industries';
import TrainingSpotlight from '../components/home/TrainingSpotlight';
import FinalCTA from '../components/home/FinalCTA';

// Client stories (testimonials + results) slot in after Industries once real quotes are approved.
const Home = () => (
  <>
    <Hero />
    <LogoCloud />
    <ServicesBento />
    <StatsBand />
    <HowWeWork />
    <Industries />
    <TrainingSpotlight />
    <FinalCTA />
  </>
);

export default Home;
