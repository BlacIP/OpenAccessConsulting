import { CalendarClock, CheckCircle2, FileCheck2 } from 'lucide-react';

// Illustrative sample data only
const items = [
  { label: 'NIPEX registration', status: 'Renewed', tone: 'done' },
  { label: 'NCDMB & NOGIC JQS', status: 'Active', tone: 'done' },
  { label: 'ISO 45001 Stage 2 audit', status: 'Scheduled', tone: 'pending' },
  { label: 'Contractor safety audit', status: 'Passed', tone: 'done' },
] as const;

const ComplianceTracker = ({ className = '' }: { className?: string }) => (
  <div className={`rounded-2xl bg-white p-5 shadow-elevated ring-1 ring-black/5 ${className}`}>
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
        <FileCheck2 className="h-5 w-5" />
      </span>
      <div>
        <p className="text-[15px] font-semibold text-ink">Compliance status</p>
        <p className="text-xs text-slate-500">Engineering services client</p>
      </div>
    </div>

    <ul className="mt-5 divide-y divide-line">
      {items.map((item) => (
        <li key={item.label} className="flex items-center justify-between py-3 text-sm">
          <span className="text-slate-700">{item.label}</span>
          {item.tone === 'done' ? (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">
              <CheckCircle2 className="h-3.5 w-3.5" /> {item.status}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600">
              <CalendarClock className="h-3.5 w-3.5" /> {item.status}
            </span>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default ComplianceTracker;
