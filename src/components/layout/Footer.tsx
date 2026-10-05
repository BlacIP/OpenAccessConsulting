import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { pillars, servicesByPillar, serviceHref } from '../../content/services';
import { contact } from '../../content/site';
import Container from '../ui/Container';

const companyLinks = [
  { to: '/about', label: 'About us' },
  { to: '/enroll-for-training', label: 'HR Training' },
  { to: '/contact', label: 'Contact' },
  { to: '/contact', label: 'Book a consultation' },
];

const linkClass = 'text-sm text-slate-600 transition-colors hover:text-ink';

const Footer = () => (
  <footer className="border-t border-line bg-surface">
    <Container className="py-16">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <img
            src={`${import.meta.env.BASE_URL}Logo/black.png`}
            alt="OpenAccess Consulting"
            width={198}
            height={32}
            loading="lazy"
            className="h-8 w-auto"
          />
          <p className="mt-5 max-w-xs text-sm leading-6 text-slate-600">
            Recruitment, verification, training and compliance for Nigerian businesses for over 13 years.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-600">
            <li>
              <a href={contact.phoneHref} className="inline-flex items-center gap-2.5 hover:text-ink">
                <Phone className="h-4 w-4 text-slate-400" /> {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2.5 hover:text-ink">
                <Mail className="h-4 w-4 text-slate-400" /> {contact.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
              <span>
                {contact.addressLines[0]},<br />
                {contact.addressLines[1]}
              </span>
            </li>
          </ul>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.id}>
              <h3 className="text-sm font-semibold text-ink">{pillar.name}</h3>
              <ul className="mt-4 space-y-3">
                {servicesByPillar(pillar.id).map((service) => (
                  <li key={service.slug}>
                    <Link to={serviceHref(service)} className={linkClass}>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-sm font-semibold text-ink">Company</h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-2 border-t border-line pt-8 text-sm text-slate-500 sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} OpenAccess Consulting Limited. All rights reserved.</p>
        <p>Lagos, Nigeria</p>
      </div>
      {/* TODO: add LinkedIn / X / Instagram icons once the real profile URLs are available */}
    </Container>
  </footer>
);

export default Footer;
