import { stats } from '../../content/site';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

const StatsBand = () => (
  <section className="relative overflow-hidden bg-ink py-20 lg:py-24">
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-600/25 blur-3xl"
    />
    <Container className="relative">
      <Reveal>
        <SectionHeading
          inverse
          eyebrow="Why OpenAccess"
          title="Over a decade of people work, done properly."
          subtitle="Trusted by businesses nationwide."
        />
      </Reveal>
      <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 50} className="flex flex-col-reverse border-l border-white/15 pl-5">
            <dt className="mt-2 text-sm leading-snug text-slate-400">{stat.label}</dt>
            <dd className="text-4xl font-semibold tracking-tight text-white tabular-nums lg:text-5xl">{stat.value}</dd>
          </Reveal>
        ))}
      </dl>
    </Container>
  </section>
);

export default StatsBand;
