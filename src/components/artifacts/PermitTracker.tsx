import { CheckCircle2, Clock3 } from 'lucide-react';

// Illustrative sample data only
const steps = [
  { label: 'Expatriate quota', done: true },
  { label: 'STR visa', done: true },
  { label: 'CERPAC', done: false },
];

type PermitTrackerProps = {
  /** Render as a standalone elevated card */
  framed?: boolean;
  className?: string;
};

const PermitTracker = ({ framed = false, className = '' }: PermitTrackerProps) => (
  <div className={`${framed ? 'rounded-2xl bg-white p-5 shadow-elevated ring-1 ring-black/5' : ''} ${className}`}>
    <p className={framed ? 'text-[15px] font-semibold text-ink' : 'text-xs font-medium text-slate-500'}>
      Expatriate permit · Plant Engineer
    </p>
    <ul className="mt-3 space-y-2">
      {steps.map((step) => (
        <li
          key={step.label}
          className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm ring-1 ring-line ${framed ? 'bg-surface' : 'bg-white'}`}
        >
          <span className="font-medium text-ink">{step.label}</span>
          {step.done ? (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">
              <CheckCircle2 className="h-3.5 w-3.5" /> Approved
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600">
              <Clock3 className="h-3.5 w-3.5" /> In review
            </span>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default PermitTracker;
