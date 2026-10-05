import { CheckCircle2, type LucideIcon } from 'lucide-react';

type HighlightsCardProps = {
  title: string;
  icon: LucideIcon;
  items: string[];
  className?: string;
};

/** A "what's included" checklist card for services without a bespoke artifact */
const HighlightsCard = ({ title, icon: Icon, items, className = '' }: HighlightsCardProps) => (
  <div className={`rounded-2xl bg-white p-6 shadow-elevated ring-1 ring-black/5 ${className}`}>
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-medium text-slate-500">What’s included</p>
        <p className="text-[15px] font-semibold text-ink">{title}</p>
      </div>
    </div>
    <ul className="mt-5 space-y-3 border-t border-line pt-5">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-success" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default HighlightsCard;
