import { Link } from 'react-router-dom';
import { pillars, servicesByPillar, serviceHref } from '../../content/services';
import Container from '../ui/Container';
import { HoverArrow } from '../ui/Button';

type MegaMenuProps = {
  id: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const MegaMenu = ({ id, onMouseEnter, onMouseLeave }: MegaMenuProps) => (
  <div
    id={id}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="absolute inset-x-0 top-full hidden border-b border-line bg-white shadow-card lg:block"
  >
    <Container className="grid grid-cols-4 gap-8 py-8">
      {pillars.map((pillar) => (
        <div key={pillar.id}>
          <p className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">{pillar.name}</p>
          <ul className="mt-3 space-y-1">
            {servicesByPillar(pillar.id).map((service) => (
              <li key={service.slug}>
                <Link
                  to={serviceHref(service)}
                  className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-surface"
                >
                  <service.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span>
                    <span className="block text-sm font-semibold text-ink">{service.title}</span>
                    <span className="mt-0.5 block text-[13px] leading-snug text-slate-500">{service.summary}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="flex flex-col justify-between rounded-2xl bg-ink p-6 text-white">
        <div>
          <p className="text-sm font-semibold text-brand-200">Not sure where to start?</p>
          <p className="mt-2 text-lg font-semibold leading-snug">
            Tell us about your team and we&apos;ll recommend the right support.
          </p>
        </div>
        <Link to="/contact" className="group mt-6 inline-flex items-center text-sm font-semibold text-white">
          Book a free consultation
          <HoverArrow />
        </Link>
      </div>
    </Container>
  </div>
);

export default MegaMenu;
