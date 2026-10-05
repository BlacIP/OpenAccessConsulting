import type { Offering } from '../../content/serviceDetails';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

const OfferingCard = ({ offering }: { offering: Offering }) => (
  <div className="h-full rounded-2xl border border-line bg-white p-6">
    <h3 className="text-[17px] font-semibold tracking-tight text-ink">{offering.title}</h3>
    {offering.description && <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{offering.description}</p>}
    {offering.items && (
      <ul className="mt-4 space-y-2 border-t border-line pt-4">
        {offering.items.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm text-slate-600">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-600" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const OfferingGrid = ({ offerings }: { offerings: Offering[] }) => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {offerings.map((offering, i) => (
      <Reveal key={offering.title} delay={(i % 3) * 50}>
        <OfferingCard offering={offering} />
      </Reveal>
    ))}
  </div>
);

type OfferingsProps = {
  title: string;
  offerings: Offering[];
};

const Offerings = ({ title, offerings }: OfferingsProps) => {
  // Preserve the order groups first appear in
  const groups = [...new Set(offerings.map((o) => o.group).filter(Boolean))] as string[];

  return (
    <section className="py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={title} title="Everything you need," subtitle="in one place." />
        </Reveal>

        {groups.length === 0 ? (
          <div className="mt-12">
            <OfferingGrid offerings={offerings} />
          </div>
        ) : (
          groups.map((group) => (
            <div key={group} className="mt-12">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-500">{group}</h3>
              <OfferingGrid offerings={offerings.filter((o) => o.group === group)} />
            </div>
          ))
        )}
      </Container>
    </section>
  );
};

export default Offerings;
