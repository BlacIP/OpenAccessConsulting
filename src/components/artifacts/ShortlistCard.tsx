// Illustrative sample data only: shows what a client shortlist looks like.
const candidates = [
  { initials: 'AO', name: 'Adaeze Okafor', meta: '6 yrs · Banking operations', fit: 94, status: 'Interview booked', tone: 'brand', avatar: 'bg-brand-100 text-brand-700' },
  { initials: 'TB', name: 'Tunde Bakare', meta: '5 yrs · Branch services', fit: 89, status: 'Verified', tone: 'success', avatar: 'bg-emerald-100 text-emerald-700' },
  { initials: 'IN', name: 'Ifeoma Nwosu', meta: '4 yrs · Customer service', fit: 81, status: 'Assessment', tone: 'amber', avatar: 'bg-amber-100 text-amber-700' },
] as const;

const badge = {
  brand: 'bg-brand-50 text-brand-700',
  success: 'bg-emerald-50 text-emerald-700',
  amber: 'bg-amber-50 text-amber-700',
};

const ShortlistCard = ({ className = '' }: { className?: string }) => (
  <div className={`rounded-2xl bg-white p-5 shadow-elevated ring-1 ring-black/5 ${className}`}>
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-xs font-medium text-slate-500">Shortlist</p>
        <p className="mt-0.5 text-[15px] font-semibold text-ink">Branch Operations Officer</p>
      </div>
      <span className="shrink-0 rounded-full bg-surface px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-line">
        3 of 48 applicants
      </span>
    </div>

    <ul className="mt-4 divide-y divide-line">
      {candidates.map((c) => (
        <li key={c.name} className="flex items-center gap-3 py-3">
          <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${c.avatar}`}>
            {c.initials}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-ink">{c.name}</p>
            <p className="truncate text-xs text-slate-500">{c.meta}</p>
          </div>
          <div className="hidden w-20 sm:block">
            <div className="flex items-center justify-between text-[11px] text-slate-500">
              <span>Fit</span>
              <span className="font-semibold tabular-nums text-ink">{c.fit}%</span>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-surface">
              <div className="h-1.5 rounded-full bg-brand-600" style={{ width: `${c.fit}%` }} />
            </div>
          </div>
          <span className={`shrink-0 rounded-full px-2 py-1 text-[11px] font-semibold ${badge[c.tone]}`}>{c.status}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ShortlistCard;
