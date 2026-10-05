import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

const steps = [
  {
    title: 'Discovery call',
    description: 'A free conversation about your business, your team and the problem you need solved.',
  },
  {
    title: 'Tailored plan',
    description: 'A clear scope, timeline and cost, matched to your goals and budget.',
  },
  {
    title: 'Delivery',
    description: 'Our specialists do the work and keep you updated at every stage.',
  },
  {
    title: 'Ongoing support',
    description: 'We stay on hand to review results and adjust as your business grows.',
  },
];

const HowWeWork = () => (
  <section className="py-20 lg:py-28">
    <Container>
      <Reveal>
        <SectionHeading
          eyebrow="How we work"
          title="A clear process,"
          subtitle="from the first call to long after the job is done."
        />
      </Reveal>

      <div className="relative mt-14">
        {/* connecting line on desktop */}
        <div aria-hidden="true" className="absolute left-0 right-0 top-[18px] hidden h-px bg-line lg:block" />
        <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 60}>
                <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-semibold text-brand-600 ring-1 ring-line tabular-nums">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-h3 text-ink">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Container>
  </section>
);

export default HowWeWork;
