import {
  BadgeCheck,
  Briefcase,
  Building2,
  ClipboardCheck,
  GraduationCap,
  Plane,
  ShieldCheck,
  Users,
  type LucideIcon,
} from 'lucide-react';

export type PillarId = 'talent' | 'workforce' | 'compliance';

export type Service = {
  slug: string;
  pillar: PillarId;
  title: string;
  /** One line, used in menus and cards */
  summary: string;
  icon: LucideIcon;
};

export type Pillar = {
  id: PillarId;
  name: string;
  headline: string;
  description: string;
};

export const pillars: Pillar[] = [
  {
    id: 'talent',
    name: 'Talent',
    headline: 'Hire the right people, with confidence.',
    description: 'Find, assess and verify candidates before they join your team.',
  },
  {
    id: 'workforce',
    name: 'Workforce',
    headline: 'Run and develop your people.',
    description: 'Outsourced staff, day-to-day HR support and practical training.',
  },
  {
    id: 'compliance',
    name: 'Mobility & Compliance',
    headline: 'Stay licensed, certified and compliant.',
    description: 'Expatriate permits, statutory registrations and audit readiness.',
  },
];

export const services: Service[] = [
  {
    slug: 'recruitment',
    pillar: 'talent',
    title: 'Recruitment',
    summary: 'End-to-end hiring, executive search and bulk recruitment.',
    icon: Users,
  },
  {
    slug: 'pre-employment-tests',
    pillar: 'talent',
    title: 'Pre-Employment Tests',
    summary: 'Aptitude, personality, skills and integrity assessments.',
    icon: ClipboardCheck,
  },
  {
    slug: 'employee-verification',
    pillar: 'talent',
    title: 'Employee Verification',
    summary: 'KYC, guarantor, address, credit and criminal record checks.',
    icon: ShieldCheck,
  },
  {
    slug: 'outsourcing',
    pillar: 'workforce',
    title: 'Outsourcing',
    summary: 'Contract staff managed end to end, payroll included.',
    icon: Building2,
  },
  {
    slug: 'hr-services',
    pillar: 'workforce',
    title: 'HR Services',
    summary: 'Policies, handbooks, payroll and performance systems.',
    icon: Briefcase,
  },
  {
    slug: 'training-and-development',
    pillar: 'workforce',
    title: 'Training & Development',
    summary: 'Leadership, sales, customer service and HR programmes.',
    icon: GraduationCap,
  },
  {
    slug: 'expatriate-and-immigration',
    pillar: 'compliance',
    title: 'Expatriate & Immigration',
    summary: 'Expatriate quota, work permits, CERPAC and visas.',
    icon: Plane,
  },
  {
    slug: 'regulatory-compliance',
    pillar: 'compliance',
    title: 'Regulatory Compliance & Audit',
    summary: 'Statutory registrations, certifications and audits.',
    icon: BadgeCheck,
  },
];

export const servicesByPillar = (id: PillarId) => services.filter((s) => s.pillar === id);

export const serviceHref = (service: Service) => `/services/${service.slug}`;

export const getService = (slug: string | undefined) => services.find((s) => s.slug === slug);
