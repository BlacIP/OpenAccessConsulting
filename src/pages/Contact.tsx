import { Clock3, Mail, MapPin, Phone } from 'lucide-react';
import { clients, contact } from '../content/site';
import { usePageTitle } from '../lib/usePageTitle';
import Container from '../components/ui/Container';
import { Eyebrow } from '../components/ui/SectionHeading';
import ContactForm from '../components/contact/ContactForm';

const nextSteps = [
  { title: 'Send us a message', description: 'Tell us about your team and what you need.' },
  { title: 'Free consultation', description: 'We arrange a call to understand your goals.' },
  { title: 'A tailored plan', description: 'You get a clear scope, timeline and cost.' },
];

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96800.76508513864!2d3.3946093528314774!3d6.5251174813143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b937a75c894ed%3A0x604cbad4c7f4679e!2sOpen%20Access%20Consulting%20Limited!5e0!3m2!1sen!2sng!4v1750202053306!5m2!1sen!2sng';

const Contact = () => {
  usePageTitle('Contact us');

  const lines = [
    { icon: Phone, label: 'Phone', value: contact.phoneDisplay, href: contact.phoneHref },
    { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: Clock3, label: 'Hours', value: contact.hours },
  ];

  return (
    <>
      <section className="bg-surface">
        <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:py-20">
          <div className="lg:pt-6">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-3 text-h1 text-ink">Talk to our team.</h1>
            <p className="mt-6 text-lead text-slate-600">
              Tell us what you need and we’ll arrange a free consultation, whether it’s one hire, a background check
              or a full HR setup.
            </p>

            <h2 className="mt-12 text-sm font-semibold uppercase tracking-wider text-slate-500">What happens next</h2>
            <ol className="mt-4 space-y-4">
              {nextSteps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-semibold text-brand-700 tabular-nums">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{step.title}</p>
                    <p className="text-[15px] text-slate-600">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <ul className="mt-12 space-y-4 border-t border-line pt-8">
              {lines.map((line) => (
                <li key={line.label} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-600 ring-1 ring-line">
                    <line.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs text-slate-500">{line.label}</p>
                    {line.href ? (
                      <a href={line.href} className="font-semibold text-ink hover:text-brand-600">
                        {line.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-ink">{line.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ContactForm />
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16 lg:py-20">
        <Container>
          <p className="text-center text-sm font-medium text-slate-500">Trusted by growing businesses across Nigeria</p>
          <ul className="mt-6 grid grid-cols-3 items-center gap-x-8 gap-y-6 sm:grid-cols-6">
            {clients.map((client) => (
              <li key={client.name} className="flex justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  className="h-10 w-auto max-w-[110px] object-contain opacity-70 mix-blend-multiply grayscale"
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="pb-20 lg:pb-28">
        <Container className="grid gap-6 lg:grid-cols-[1fr_2fr]">
          <div className="flex flex-col justify-center rounded-2xl bg-ink p-8 text-white">
            <MapPin className="h-6 w-6 text-brand-200" aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-semibold tracking-tight">Visit our office</h2>
            <address className="mt-3 not-italic leading-relaxed text-slate-300">
              {contact.addressLines[0]},
              <br />
              {contact.addressLines[1]}
            </address>
            <a
              href="https://maps.google.com/?q=Open+Access+Consulting+Limited+Oregun+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 text-sm font-semibold text-white underline-offset-4 hover:underline"
            >
              Get directions
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-line">
            <iframe
              src={MAP_SRC}
              title="Map showing the OpenAccess Consulting office in Oregun, Lagos"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block aspect-[16/10] h-full w-full border-0 lg:aspect-auto lg:min-h-[360px]"
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
