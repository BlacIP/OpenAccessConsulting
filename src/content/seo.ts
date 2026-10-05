import { services } from './services';
import { serviceDetails } from './serviceDetails';

export const siteUrl = 'https://openaccessconsult.com';
export const siteName = 'OpenAccess Consulting';

export type PageMeta = {
  path: string;
  /** Short title; the site name is appended except on the home page */
  title: string;
  description: string;
};

export const meta = {
  home: {
    path: '/',
    title: 'OpenAccess Consulting | HR, Recruitment & Training in Lagos, Nigeria',
    description:
      'OpenAccess Consulting helps Nigerian businesses recruit, verify, train and stay compliant. Recruitment, background checks, outsourcing, HR training and immigration services in Lagos for over 13 years.',
  },
  services: {
    path: '/services',
    title: 'Services',
    description:
      'Recruitment, pre-employment tests, employee verification, outsourcing, HR services, training, expatriate & immigration and regulatory compliance for Nigerian businesses.',
  },
  training: {
    path: '/training',
    title: 'HR Training',
    description:
      'Intensive Hands-On HR Training: a 12-week virtual programme covering payroll, PAYE, HR policies, labour law and more. ₦120,000, Saturdays 10am–1pm.',
  },
  about: {
    path: '/about',
    title: 'About us',
    description:
      'OpenAccess Consulting is a Lagos-based professional services firm helping Nigerian businesses hire, grow and stay compliant for over 13 years.',
  },
  contact: {
    path: '/contact',
    title: 'Contact us',
    description: 'Talk to OpenAccess Consulting. Book a free consultation about recruitment, HR, training or compliance support.',
  },
  notFound: {
    path: '/404',
    title: 'Page not found',
    description: 'The page you were looking for could not be found.',
  },
} satisfies Record<string, PageMeta>;

export const servicePageMeta = (slug: string): PageMeta => {
  const service = services.find((s) => s.slug === slug)!;
  return { path: `/services/${slug}`, title: service.title, description: serviceDetails[slug].lead };
};

/** Every indexable page, used for pre-rendering and the sitemap */
export const pages: PageMeta[] = [
  meta.home,
  meta.services,
  ...services.map((s) => servicePageMeta(s.slug)),
  meta.training,
  meta.about,
  meta.contact,
];

export const fullTitle = (page: PageMeta) => (page.path === '/' ? page.title : `${page.title} | ${siteName}`);
