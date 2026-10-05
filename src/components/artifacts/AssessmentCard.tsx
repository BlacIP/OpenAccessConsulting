import { CheckCircle2 } from 'lucide-react';

// Illustrative sample data only: shows what an assessment summary looks like.
const scores = [
  { label: 'Numerical reasoning', value: 82 },
  { label: 'Verbal reasoning', value: 76 },
  { label: 'Situational judgement', value: 88 },
  { label: 'Emotional intelligence', value: 71 },
];

const AssessmentCard = ({ className = '' }: { className?: string }) => (
  <div className={`rounded-2xl bg-white p-5 shadow-elevated ring-1 ring-black/5 ${className}`}>
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-xs font-medium text-slate-500">Assessment summary</p>
        <p className="mt-0.5 text-[15px] font-semibold text-ink">Candidate · I. Nwosu</p>
      </div>
      <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">Recommended</span>
    </div>

    <ul className="mt-5 space-y-3.5">
      {scores.map((s) => (
        <li key={s.label}>
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">{s.label}</span>
            <span className="font-semibold tabular-nums text-ink">{s.value}</span>
          </div>
          <div className="mt-1.5 h-1.5 rounded-full bg-surface">
            <div className="h-1.5 rounded-full bg-brand-600" style={{ width: `${s.value}%` }} />
          </div>
        </li>
      ))}
    </ul>

    <div className="mt-5 flex items-center justify-between rounded-lg bg-surface px-3 py-2.5 text-sm">
      <span className="font-medium text-ink">Integrity test</span>
      <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">
        <CheckCircle2 className="h-3.5 w-3.5" /> Pass
      </span>
    </div>
  </div>
);

export default AssessmentCard;
