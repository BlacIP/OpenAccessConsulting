import { Link } from 'react-router-dom';
import { services, serviceHref, type Service } from '../../content/services';
import Container from '../ui/Container';
import { HoverArrow } from '../ui/Button';

/** Other services in the same pillar first, topped up from the rest so there are always three */
const pickRelated = (current: Service) => {
  const samePillar = services.filter((s) => s.pillar === current.pillar && s.slug !== current.slug);
  const others = services.filter((s) => s.pillar !== current.pillar);
  return [...samePillar, ...others].slice(0, 3);
};

const RelatedServices = ({ service }: { service: Service }) => (
  <section className="py-20 lg:py-24">
    <Container>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-h2 text-ink">Related services</h2>
        <Link to="/services" className="group inline-flex items-center text-[15px] font-semibold text-brand-600">
          All services
          <HoverArrow />
        </Link>
      </div>
      <ul className="mt-10 grid gap-4 md:grid-cols-3">
        {pickRelated(service).map((related) => (
          <li key={related.slug}>
            <Link
              to={serviceHref(related)}
              className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-colors hover:border-brand-200 hover:bg-brand-50/40"
            >
              <related.icon className="h-6 w-6 text-brand-600" aria-hidden="true" />
              <span className="mt-5 text-[17px] font-semibold text-ink">{related.title}</span>
              <span className="mt-2 flex-1 text-[15px] leading-relaxed text-slate-600">{related.summary}</span>
              <span className="mt-5 inline-flex items-center text-sm font-semibold text-brand-600">
                Learn more
                <HoverArrow />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default RelatedServices;
