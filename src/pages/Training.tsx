import type { ReactNode } from 'react';
import { CalendarDays, CheckCircle2, Clock3, Mail, MonitorPlay, Phone, UserRound } from 'lucide-react';
import { contact, training, trainingEnrolUrl } from '../content/site';
import { audience, benefits, learningTopics, modules, trainingFaqs } from '../content/training';
import { meta } from '../content/seo';
import { usePageMeta } from '../lib/usePageMeta';
import { track } from '../lib/analytics';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { Eyebrow } from '../components/ui/SectionHeading';
import FAQList from '../components/ui/FAQList';
import Reveal from '../components/ui/Reveal';
import CohortCard from '../components/artifacts/CohortCard';
import FinalCTA from '../components/home/FinalCTA';

const facts = [
  { icon: CalendarDays, label: training.duration },
  { icon: Clock3, label: training.schedule },
  { icon: MonitorPlay, label: `${training.format}, live sessions` },
];

const Block = ({ id, title, first = false, children }: { id: string; title: string; first?: boolean; children: ReactNode }) => (
  <Reveal>
    <section aria-labelledby={id} className={`py-12 ${first ? '' : 'border-t border-line'}`}>
      <h2 id={id} className="text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem]">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  </Reveal>
);

const Training = () => {
  usePageMeta(meta.training);

  return (
    <>
      <div className="relative pb-24 lg:pb-8">
        <Container className="relative grid gap-x-16 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            {/* Full-bleed tint that always matches the header's height */}
            <header className="bg-surface pb-12 pt-12 shadow-[0_0_0_100vmax_#F6F9FC] [clip-path:inset(0_-100vmax)] sm:pt-16 lg:pt-20">
              <Eyebrow>HR Training · Open enrolment</Eyebrow>
              <h1 className="mt-3 max-w-2xl text-h1 text-ink">{training.name}</h1>
              <p className="mt-6 max-w-2xl text-lead text-slate-600">
                Bridge the gap between HR theory and real-life practice. A hands-on virtual programme that gives you
                the practical tools and confidence to succeed in any HR role.
              </p>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {facts.map((fact) => (
                  <li key={fact.label} className="inline-flex items-center gap-2 text-[15px] font-medium text-ink">
                    <fact.icon className="h-4 w-4 text-brand-600" aria-hidden="true" />
                    {fact.label}
                  </li>
                ))}
              </ul>
            </header>

            {/* On small screens the enrolment card sits under the intro */}
            <div className="pb-4 pt-8 lg:hidden">
              <CohortCard interactive programmeLink={false} />
            </div>

            <Block id="learn" title="What you’ll learn" first>
              <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {learningTopics.map((topic) => (
                  <li key={topic} className="flex gap-2.5 text-[15px] text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                    {topic}
                  </li>
                ))}
              </ul>
            </Block>

            <Block id="curriculum" title="Curriculum">
              <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line">
                {modules.map((module, i) => (
                  <details key={module.title} className="group bg-white" open={i === 0}>
                    <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-4 hover:bg-surface [&::-webkit-details-marker]:hidden">
                      <span className="w-20 shrink-0 text-sm font-semibold tabular-nums text-brand-600">Module {i + 1}</span>
                      <span className="flex-1 font-semibold text-ink">{module.title}</span>
                      <span className="text-xs text-slate-500">{module.topics.length} topics</span>
                    </summary>
                    <ul className="space-y-2 px-5 pb-5 sm:pl-[6.25rem]">
                      {module.topics.map((topic) => (
                        <li key={topic} className="flex gap-2.5 text-sm text-slate-600">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-600" aria-hidden="true" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            </Block>

            <Block id="audience" title="Who should attend">
              <ul className="grid gap-3 sm:grid-cols-2">
                {audience.map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3 text-[15px] text-ink">
                    <UserRound className="h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Block>

            <Block id="why" title="Why train with us">
              <ul className="grid gap-4 sm:grid-cols-3">
                {benefits.map((benefit) => (
                  <li key={benefit.title} className="rounded-2xl border border-line p-5">
                    <p className="font-semibold text-ink">{benefit.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{benefit.description}</p>
                  </li>
                ))}
              </ul>
            </Block>

            <Block id="faq" title="Frequently asked questions">
              <FAQList faqs={trainingFaqs} />
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[15px]">
                <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 font-medium text-ink hover:text-brand-600">
                  <Mail className="h-4 w-4 text-brand-600" aria-hidden="true" /> {contact.email}
                </a>
                <a href={contact.phoneHref} className="inline-flex items-center gap-2 font-medium text-ink hover:text-brand-600">
                  <Phone className="h-4 w-4 text-brand-600" aria-hidden="true" /> {contact.phoneDisplay}
                </a>
              </div>
            </Block>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 pt-20">
              <CohortCard interactive programmeLink={false} />
            </div>
          </aside>
        </Container>
      </div>

      {/* Persistent enrol bar on small screens */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-5 py-3 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-container items-center justify-between gap-4">
          <div>
            <p className="text-lg font-semibold tabular-nums text-ink">{training.price}</p>
            <p className="text-xs text-slate-500">{training.duration} · {training.format}</p>
          </div>
          <Button href={trainingEnrolUrl} onClick={() => track('enroll_click', { location: 'mobile_bar' })} size="sm">
            Enroll now
          </Button>
        </div>
      </div>

      <FinalCTA
        title="Ready to advance your HR career?"
        text="Join the next cohort of our Intensive Hands-On HR Training and build skills you can use from day one."
        primary={{ label: 'Enroll now', href: trainingEnrolUrl }}
        secondary={{ label: 'Have questions? Contact us', to: '/contact' }}
      />
    </>
  );
};

export default Training;
