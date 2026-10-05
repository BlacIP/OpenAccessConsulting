import { Link } from 'react-router-dom';
import { pillars, servicesByPillar, serviceHref } from '../content/services';
import { usePageTitle } from '../lib/usePageTitle';
import Container from '../components/ui/Container';
import Button, { HoverArrow } from '../components/ui/Button';
import { Eyebrow } from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import HowWeWork from '../components/home/HowWeWork';
import Industries from '../components/home/Industries';
import FinalCTA from '../components/home/FinalCTA';

const Services = () => {
  usePageTitle('Services');

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-40 h-[28rem] w-[28rem] rounded-full bg-brand-mesh opacity-25 blur-3xl"
        />
        <Container className="relative py-14 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <Eyebrow>Services</Eyebrow>
            <h1 className="mt-3 text-h1 text-ink">
              Everything your people function needs.{' '}
              <span className="text-slate-500">Eight services, one accountable team.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lead text-slate-600">
              From hiring and background checks to payroll, training and immigration, we take on the people work so you
              can run the business.
            </p>
            <div className="mt-9">
              <Button to="/contact">Book a consultation</Button>
            </div>
          </div>

          <ul className="mt-14 grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => (
              <li key={pillar.id}>
                <a
                  href={`#${pillar.id}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-colors hover:border-brand-200"
                >
                  <span className="text-sm font-semibold text-brand-600">{pillar.name}</span>
                  <span className="mt-2 flex-1 text-[15px] leading-relaxed text-slate-600">{pillar.description}</span>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-ink">
                    {servicesByPillar(pillar.id).length} services
                    <HoverArrow />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {pillars.map((pillar, i) => (
        <section key={pillar.id} id={pillar.id} className={`scroll-mt-16 py-20 lg:py-24 ${i % 2 === 1 ? 'bg-surface' : ''}`}>
          <Container className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <Eyebrow>{pillar.name}</Eyebrow>
                <h2 className="mt-3 text-h2 text-ink">{pillar.headline}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{pillar.description}</p>
              </div>
            </Reveal>
            <ul className="grid gap-4 sm:grid-cols-2">
              {servicesByPillar(pillar.id).map((service, j) => (
                <li key={service.slug}>
                  <Reveal delay={j * 50} className="h-full">
                    <Link
                      to={serviceHref(service)}
                      className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-colors hover:border-brand-200 hover:shadow-card"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                        <service.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="mt-5 text-lg font-semibold tracking-tight text-ink">{service.title}</span>
                      <span className="mt-2 flex-1 text-[15px] leading-relaxed text-slate-600">{service.summary}</span>
                      <span className="mt-6 inline-flex items-center text-sm font-semibold text-brand-600">
                        Learn more
                        <HoverArrow />
                      </span>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ))}

      <HowWeWork />
      <Industries />
      <div className="pt-20 lg:pt-28">
        <FinalCTA />
      </div>
    </>
  );
};

export default Services;
