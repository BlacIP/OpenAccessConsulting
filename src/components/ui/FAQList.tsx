import { Plus } from 'lucide-react';

type FAQListProps = {
  faqs: { q: string; a: string }[];
};

/** Native <details> accordion: keyboard and screen-reader accessible with no JS */
const FAQList = ({ faqs }: FAQListProps) => (
  <div className="divide-y divide-line border-y border-line">
    {faqs.map((faq) => (
      <details key={faq.q} className="group py-5">
        <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left text-[17px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
          {faq.q}
          <Plus
            className="mt-0.5 h-5 w-5 shrink-0 text-brand-600 transition-transform duration-200 group-open:rotate-45"
            aria-hidden="true"
          />
        </summary>
        <p className="mt-3 max-w-2xl pr-10 text-[15px] leading-relaxed text-slate-600">{faq.a}</p>
      </details>
    ))}
  </div>
);

export default FAQList;
