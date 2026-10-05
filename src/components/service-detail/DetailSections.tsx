import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import type { ServiceDetail } from '../../content/serviceDetails';
import Container from '../ui/Container';
import SectionHeading, { Eyebrow } from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

type Detail = ServiceDetail;

/** Methodology / delivery approach checklist */
export const ListSection = ({ section }: { section: NonNullable<Detail['listSection']> }) => (
  <section className="bg-surface py-20 lg:py-24">
    <Container className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
      <Reveal>
        <h2 className="text-h2 text-ink">{section.title}</h2>
        {section.intro && <p className="mt-4 text-lead text-slate-600">{section.intro}</p>}
      </Reveal>
      <Reveal delay={60}>
        <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {section.items.map((item) => (
            <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-slate-700">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </Container>
  </section>
);

// Always follows the white offerings section, which supplies the top spacing
export const ProcessSteps = ({ steps }: { steps: NonNullable<Detail['process']> }) => (
  <section className="pb-20 lg:pb-24">
    <Container>
      <Reveal>
        <SectionHeading eyebrow="Our process" title="How it works," subtitle="step by step." />
      </Reveal>
      <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, i) => (
          <li key={step.title}>
            <Reveal delay={(i % 3) * 60} className="border-t border-line pt-6">
              <span className="text-sm font-semibold tabular-nums text-brand-600">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 text-h3 text-ink">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{step.description}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Container>
  </section>
);

export const WhyItMatters = ({ data }: { data: NonNullable<Detail['whyItMatters']> }) => (
  <section className="py-12 lg:py-16">
    <Container>
      <Reveal>
        <div className="grid gap-10 rounded-[2rem] bg-ink p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-14">
          <div>
            <Eyebrow inverse>Why it matters</Eyebrow>
            <h2 className="mt-3 text-h2 text-white">{data.title}</h2>
            {data.stat && (
              <figure className="mt-10 border-l border-white/15 pl-5">
                <p className="text-5xl font-semibold tracking-tight text-white tabular-nums">{data.stat.value}</p>
                <figcaption className="mt-2 max-w-xs text-sm leading-snug text-slate-400">
                  {data.stat.label}. Source: {data.stat.source}.
                </figcaption>
              </figure>
            )}
          </div>
          <div className="lg:pt-9">
            {data.intro && <p className="text-[15px] text-slate-300">{data.intro}</p>}
            <ul className="mt-4 space-y-4">
              {data.points.map((point) => (
                <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-slate-200">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Container>
  </section>
);

type WhyUsProps = {
  items: NonNullable<Detail['whyUs']>;
  industries?: string[];
};

export const WhyUs = ({ items, industries }: WhyUsProps) => (
  <section className="bg-surface py-20 lg:py-24">
    <Container>
      <Reveal>
        <SectionHeading eyebrow="Why OpenAccess" title="Why businesses choose us." />
      </Reveal>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <li key={item.title}>
            <Reveal delay={(i % 3) * 50} className="flex h-full gap-3 rounded-2xl bg-white p-6 ring-1 ring-line">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden="true" />
              <div>
                <p className="font-semibold text-ink">{item.title}</p>
                {item.description && <p className="mt-1 text-[15px] leading-relaxed text-slate-600">{item.description}</p>}
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      {industries && (
        <Reveal className="mt-14">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Industries we serve</h3>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {industries.map((industry) => (
              <li key={industry} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink ring-1 ring-line">
                {industry}
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </Container>
  </section>
);
