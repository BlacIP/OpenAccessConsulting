import { Factory, Fuel, GraduationCap, HardHat, HeartPulse, Home, Hotel, Landmark, RadioTower, Wheat } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

const industries = [
  { label: 'Banking & Microfinance', icon: Landmark },
  { label: 'Oil & Gas', icon: Fuel },
  { label: 'Manufacturing', icon: Factory },
  { label: 'Healthcare & Pharma', icon: HeartPulse },
  { label: 'Engineering & Construction', icon: HardHat },
  { label: 'Telecoms', icon: RadioTower },
  { label: 'Hospitality', icon: Hotel },
  { label: 'Education', icon: GraduationCap },
  { label: 'Real Estate', icon: Home },
  { label: 'Agriculture & Food', icon: Wheat },
];

const Industries = () => (
  <section className="bg-surface py-20 lg:py-24">
    <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
      <Reveal>
        <SectionHeading
          eyebrow="Industries"
          title="Built for the sectors that move Nigeria."
          subtitle="We know their hiring realities."
        />
      </Reveal>
      <Reveal delay={80}>
        <ul className="flex flex-wrap gap-3">
          {industries.map((industry) => (
            <li
              key={industry.label}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-ink ring-1 ring-line"
            >
              <industry.icon className="h-4 w-4 text-brand-600" aria-hidden="true" />
              {industry.label}
            </li>
          ))}
        </ul>
      </Reveal>
    </Container>
  </section>
);

export default Industries;
