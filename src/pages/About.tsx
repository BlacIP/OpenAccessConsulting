import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { pillars, servicesByPillar } from '../content/services';
import { meta } from '../content/seo';
import { usePageMeta } from '../lib/usePageMeta';
import Container from '../components/ui/Container';
import Button, { HoverArrow } from '../components/ui/Button';
import SectionHeading, { Eyebrow } from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import StatsBand from '../components/home/StatsBand';
import FinalCTA from '../components/home/FinalCTA';

const model = [
  {
    title: 'Expertise',
    description: 'Experienced professionals across HR, recruitment, immigration, compliance and business strategy.',
  },
  {
    title: 'Efficiency',
    description: 'Streamlined processes that deliver results quickly, without cutting corners.',
  },
  {
    title: 'Excellence',
    description: 'High standards in every engagement, from the first call to long-term support.',
  },
];

const commitments = [
  'Applying industry best practice across every service',
  'Responsive, client-focused solutions',
  'Timely delivery',
  'Value-driven, measurable results',
];

const differentiators = [
  { title: 'One partner, many services', description: 'Hiring, verification, HR, training and compliance under one roof.' },
  { title: 'A customised approach', description: 'Solutions built around each client’s goals and challenges.' },
  { title: 'Integrity', description: 'Transparent processes that build trust and accountability.' },
  { title: 'Local and international clients', description: 'Nigerian businesses and foreign companies operating in Nigeria.' },
];

// Team section returns here once real names, roles and photos are supplied.
const About = () => {
  usePageMeta(meta.about);

  return (
    <>
      <section className="border-b border-line">
        <Container className="grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <Eyebrow>About us</Eyebrow>
            <h1 className="mt-3 text-h1 text-ink">Helping Nigerian businesses hire, grow and stay compliant.</h1>
            <p className="mt-6 text-lead text-slate-600">
              OpenAccess Consulting is a Lagos-based professional services firm. For over 13 years we’ve delivered
              human capital development, recruitment, background checks, expatriate and immigration services,
              consulting and outsourcing.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-500">
              We build long-term relationships, helping clients improve performance at every stage of their business
              with flexible, expert-led support.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Button to="/contact">Book a consultation</Button>
              <Button to="/services" variant="link">
                Explore services
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src={`${import.meta.env.BASE_URL}aboutus-page.jpg`}
              alt="OpenAccess consultants in a meeting"
              width={1600}
              height={1066}
              // Largest element on the page: fetch it first (lowercase attribute for React 18)
              {...{ fetchpriority: 'high' }}
              className="aspect-[4/3] w-full rounded-[2rem] object-cover"
            />
            <div aria-hidden="true" className="absolute -bottom-6 left-6 rounded-2xl bg-white px-5 py-4 shadow-elevated ring-1 ring-black/5">
              <p className="text-3xl font-semibold tracking-tight text-ink tabular-nums">13+</p>
              <p className="text-xs text-slate-500">years in business</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>Our mission</Eyebrow>
            <p className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-[1.75rem]">
              To deliver human capital development, business support, immigration services and value-added consulting
              that improve our clients’ performance at every stage of growth.
            </p>
          </Reveal>
          <Reveal delay={60}>
            <Eyebrow>Our vision</Eyebrow>
            <p className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-[1.75rem]">
              To help organisations achieve their goals, enabling individual and organisational growth through
              learning, knowledge and stewardship.
            </p>
          </Reveal>
        </Container>
      </section>

      <StatsBand />

      <section className="py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Our values" title="The 3E model." subtitle="How we work with every client." />
          </Reveal>
          <ol className="mt-12 grid gap-4 md:grid-cols-3">
            {model.map((value, i) => (
              <li key={value.title}>
                <Reveal delay={i * 60} className="h-full rounded-2xl border border-line p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-lg font-semibold text-white">
                    E
                  </span>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">{value.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{value.description}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-surface py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Our commitment" title="What you can expect from us." />
            <ul className="mt-8 space-y-4">
              {commitments.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {differentiators.map((item, i) => (
              <li key={item.title}>
                <Reveal delay={i * 50} className="h-full rounded-2xl bg-white p-6 ring-1 ring-line">
                  <p className="font-semibold text-ink">{item.title}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{item.description}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="What we do" title="Eight services," subtitle="three areas of expertise." />
          </Reveal>
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => (
              <li key={pillar.id}>
                <Link
                  to={`/services#${pillar.id}`}
                  className="group flex h-full flex-col rounded-2xl border border-line p-6 transition-colors hover:border-brand-200"
                >
                  <span className="text-sm font-semibold text-brand-600">{pillar.name}</span>
                  <span className="mt-2 text-lg font-semibold tracking-tight text-ink">{pillar.headline}</span>
                  <span className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {servicesByPillar(pillar.id)
                      .map((s) => s.title)
                      .join(' · ')}
                  </span>
                  <span className="mt-5 inline-flex items-center text-sm font-semibold text-brand-600">
                    View services
                    <HoverArrow />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
};

export default About;
