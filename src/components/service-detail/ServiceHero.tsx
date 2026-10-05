import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import type { Pillar, Service } from '../../content/services';
import type { ServiceDetail } from '../../content/serviceDetails';
import Container from '../ui/Container';
import Button from '../ui/Button';
import HeroVisual from './HeroVisual';

type ServiceHeroProps = {
  service: Service;
  pillar: Pillar;
  detail: ServiceDetail;
};

const ServiceHero = ({ service, pillar, detail }: ServiceHeroProps) => (
  <section className="border-b border-line">
    <Container className="grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-24">
      <div>
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
            <li>
              <Link to="/services" className="hover:text-ink">
                Services
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li>
              <Link to={`/services#${pillar.id}`} className="hover:text-ink">
                {pillar.name}
              </Link>
            </li>
          </ol>
        </nav>

        <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
          <service.icon className="h-4 w-4" aria-hidden="true" />
          {service.title}
        </p>
        <h1 className="mt-3 text-h1 text-ink">{detail.tagline}</h1>
        <p className="mt-6 max-w-xl text-lead text-slate-600">{detail.lead}</p>
        {detail.body && <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-500">{detail.body}</p>}

        <div className="mt-9">
          <Button to={`/contact?service=${service.slug}`}>Book a consultation</Button>
        </div>
      </div>

      <div aria-hidden="true" className="rounded-[2rem] bg-brand-mesh p-5 sm:p-10">
        <HeroVisual service={service} detail={detail} />
      </div>
    </Container>
  </section>
);

export default ServiceHero;
