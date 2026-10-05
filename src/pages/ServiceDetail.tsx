import { Navigate, useParams } from 'react-router-dom';
import { getService, pillars } from '../content/services';
import { serviceDetails } from '../content/serviceDetails';
import { meta, servicePageMeta } from '../content/seo';
import { usePageMeta } from '../lib/usePageMeta';
import Container from '../components/ui/Container';
import FAQList from '../components/ui/FAQList';
import Reveal from '../components/ui/Reveal';
import ServiceHero from '../components/service-detail/ServiceHero';
import Offerings from '../components/service-detail/Offerings';
import { ListSection, ProcessSteps, WhyItMatters, WhyUs } from '../components/service-detail/DetailSections';
import RelatedServices from '../components/service-detail/RelatedServices';
import FinalCTA from '../components/home/FinalCTA';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = getService(slug);
  const detail = slug ? serviceDetails[slug] : undefined;
  usePageMeta(service && detail ? servicePageMeta(service.slug) : meta.services);

  if (!service || !detail) return <Navigate to="/services" replace />;
  const pillar = pillars.find((p) => p.id === service.pillar)!;

  return (
    <>
      <ServiceHero service={service} pillar={pillar} detail={detail} />
      <Offerings title={detail.offeringsTitle} offerings={detail.offerings} />
      {detail.listSection && <ListSection section={detail.listSection} />}
      {detail.process && <ProcessSteps steps={detail.process} />}
      {detail.whyItMatters && <WhyItMatters data={detail.whyItMatters} />}
      {detail.whyUs && <WhyUs items={detail.whyUs} industries={detail.industries} />}

      <section className="py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal>
            <h2 className="text-h2 text-ink">
              Questions, <span className="text-slate-500">answered.</span>
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <FAQList faqs={detail.faqs} />
          </Reveal>
        </Container>
      </section>

      <RelatedServices service={service} />
      <FinalCTA title={detail.closing.title} text={detail.closing.text} />
    </>
  );
};

export default ServiceDetailPage;
