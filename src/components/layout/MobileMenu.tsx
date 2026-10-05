import { Link } from 'react-router-dom';
import { pillars, servicesByPillar, serviceHref } from '../../content/services';
import Button from '../ui/Button';
import { navLinks } from './navLinks';

type MobileMenuProps = {
  id: string;
};

const MobileMenu = ({ id }: MobileMenuProps) => (
  <div id={id} className="absolute inset-x-0 top-full z-40 flex h-[calc(100dvh-4rem)] flex-col border-t border-line bg-white lg:hidden">
    <nav className="flex-1 overflow-y-auto px-5 pb-6 pt-2" aria-label="Mobile">
      <p className="pt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Services</p>
      {pillars.map((pillar) => (
        <div key={pillar.id} className="mt-4">
          <p className="text-sm font-semibold text-ink">{pillar.name}</p>
          <ul className="mt-1">
            {servicesByPillar(pillar.id).map((service) => (
              <li key={service.slug}>
                <Link to={serviceHref(service)} className="flex items-center gap-3 py-2.5 text-[15px] text-slate-600">
                  <service.icon className="h-4 w-4 text-brand-600" />
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <ul className="mt-6 border-t border-line pt-4">
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className="block py-3 text-base font-semibold text-ink">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>

    <div className="border-t border-line p-5">
      <Button to="/contact" className="w-full">
        Book a consultation
      </Button>
    </div>
  </div>
);

export default MobileMenu;
