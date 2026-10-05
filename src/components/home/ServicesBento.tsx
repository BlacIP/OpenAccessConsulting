import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Clock3 } from 'lucide-react';
import { pillars, servicesByPillar, serviceHref, type PillarId } from '../../content/services';
import Container from '../ui/Container';
import Button, { HoverArrow } from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

// Illustrative visuals only

const HiringFunnel = () => {
  const stages = [
    { label: 'Applicants', value: 48, width: '100%' },
    { label: 'Assessed', value: 12, width: '62%' },
    { label: 'Verified', value: 5, width: '38%' },
    { label: 'Shortlisted', value: 3, width: '24%' },
  ];
  return (
    <div className="space-y-3">
      {stages.map((stage) => (
        <div key={stage.label}>
          <div className="flex justify-between text-xs">
            <span className="text-slate-500">{stage.label}</span>
            <span className="font-semibold tabular-nums text-ink">{stage.value}</span>
          </div>
          <div className="mt-1.5 h-2 rounded-full bg-white">
            <div className="h-2 rounded-full bg-gradient-to-r from-brand-600 to-[#00B8FF]" style={{ width: stage.width }} />
          </div>
        </div>
      ))}
    </div>
  );
};

const PermitTracker = () => {
  const steps = [
    { label: 'Expatriate quota', done: true },
    { label: 'STR visa', done: true },
    { label: 'CERPAC', done: false },
  ];
  return (
    <div>
      <p className="text-xs font-medium text-slate-500">Expatriate permit · Plant Engineer</p>
      <ul className="mt-3 space-y-2">
        {steps.map((step) => (
          <li key={step.label} className="flex items-center justify-between rounded-lg bg-white px-3 py-2.5 text-sm ring-1 ring-line">
            <span className="font-medium text-ink">{step.label}</span>
            {step.done ? (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="h-3.5 w-3.5" /> Approved
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600">
                <Clock3 className="h-3.5 w-3.5" /> In review
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

type PillarCardProps = {
  id: PillarId;
  visual?: ReactNode;
  className?: string;
};

const PillarCard = ({ id, visual, className = '' }: PillarCardProps) => {
  const pillar = pillars.find((p) => p.id === id)!;
  return (
    <div className={`flex h-full flex-col gap-8 rounded-3xl border border-line bg-white p-7 sm:p-8 ${visual ? 'md:flex-row' : ''} ${className}`}>
      <div className="flex flex-1 flex-col">
        <p className="text-sm font-semibold text-brand-600">{pillar.name}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">{pillar.headline}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{pillar.description}</p>
        <ul className="mt-6 space-y-1 border-t border-line pt-4">
          {servicesByPillar(id).map((service) => (
            <li key={service.slug}>
              <Link
                to={serviceHref(service)}
                className="group -mx-2 flex items-center gap-3 rounded-lg px-2 py-2 text-[15px] font-medium text-ink transition-colors hover:bg-surface"
              >
                <service.icon className="h-4 w-4 shrink-0 text-brand-600" />
                <span className="flex-1">{service.title}</span>
                <span className="text-brand-600">
                  <HoverArrow />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {visual && (
        <div aria-hidden="true" className="flex flex-1 items-center rounded-2xl bg-surface p-6">
          <div className="w-full">{visual}</div>
        </div>
      )}
    </div>
  );
};

const ServicesBento = () => (
  <section id="services" className="py-20 lg:py-28">
    <Container>
      <Reveal>
        <SectionHeading
          eyebrow="What we do"
          title="One partner across the employee lifecycle."
          subtitle="From the first interview to full compliance."
        />
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <PillarCard id="talent" visual={<HiringFunnel />} />
        </Reveal>
        <Reveal delay={60}>
          <PillarCard id="workforce" />
        </Reveal>
        <Reveal delay={60}>
          <div className="flex h-full flex-col justify-between rounded-3xl bg-ink p-7 text-white sm:p-8">
            <div>
              <p className="text-sm font-semibold text-brand-200">Not sure what you need?</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight">
                Tell us about your team. We&apos;ll recommend the right mix of support.
              </p>
            </div>
            <Button to="/contact" variant="inverse" arrow className="mt-8 self-start">
              Book a consultation
            </Button>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-2" delay={120}>
          <PillarCard id="compliance" visual={<PermitTracker />} />
        </Reveal>
      </div>
    </Container>
  </section>
);

export default ServicesBento;
