import { CheckCircle2, Clock3, ShieldCheck } from 'lucide-react';

// Illustrative sample data only: shows what a verification report looks like.
const checks = [
  { label: 'Identity (NIN)', done: true },
  { label: 'Residential address', done: true },
  { label: 'Guarantor', done: true },
  { label: 'Previous employer', done: true },
  { label: 'Education certificate', done: false },
];

const VerificationReport = ({ className = '' }: { className?: string }) => {
  const complete = checks.filter((c) => c.done).length;

  return (
    <div className={`rounded-2xl bg-white p-5 shadow-elevated ring-1 ring-black/5 ${className}`}>
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <div>
          <p className="text-[15px] font-semibold text-ink">Background check</p>
          <p className="text-xs text-slate-500">Candidate · T. Bakare</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between text-xs">
          <span className="text-slate-500">Checks complete</span>
          <span className="font-semibold tabular-nums text-ink">
            {complete} of {checks.length}
          </span>
        </div>
        <div className="mt-1.5 h-1.5 rounded-full bg-surface">
          <div className="h-1.5 rounded-full bg-success" style={{ width: `${(complete / checks.length) * 100}%` }} />
        </div>
      </div>

      <ul className="mt-4 space-y-2.5">
        {checks.map((c) => (
          <li key={c.label} className="flex items-center justify-between text-sm">
            <span className="text-slate-700">{c.label}</span>
            {c.done ? (
              <CheckCircle2 className="h-4 w-4 text-success" aria-label="Complete" />
            ) : (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700">
                <Clock3 className="h-3.5 w-3.5" /> In progress
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerificationReport;
