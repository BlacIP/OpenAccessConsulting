import { CheckCircle2 } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import CohortCard from '../artifacts/CohortCard';

const topics = [
  'Recruitment & onboarding',
  'Payroll & PAYE administration',
  'HR policies & employee handbook',
  'Labour law essentials',
  'Performance management',
  'HR metrics & reporting',
];

const TrainingSpotlight = () => (
  <section className="py-20 lg:py-28">
    <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
      <Reveal>
        <SectionHeading
          eyebrow="HR Training"
          title="Practical HR skills in 12 weeks."
          subtitle="Hands-on, practical and virtual."
        />
        <p className="mt-5 max-w-xl text-lead text-slate-600">
          Bridge the gap between HR theory and real-world practice, with tools you can use in any HR role.
        </p>
        <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
          {topics.map((topic) => (
            <li key={topic} className="flex items-start gap-2.5 text-[15px] text-slate-700">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
              {topic}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-slate-500">
          For entry-level HR officers, business owners running HR themselves, and admin professionals moving into HR.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <div className="rounded-[2rem] bg-brand-mesh p-6 sm:p-12">
          <CohortCard interactive className="mx-auto max-w-sm" />
        </div>
      </Reveal>
    </Container>
  </section>
);

export default TrainingSpotlight;
