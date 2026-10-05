import { CalendarDays, Clock3, MonitorPlay } from 'lucide-react';
import { training, trainingEnrolUrl } from '../../content/site';
import Button from '../ui/Button';

type CohortCardProps = {
  /** Show real actions; the decorative hero copy leaves them out */
  interactive?: boolean;
  compact?: boolean;
  className?: string;
};

const CohortCard = ({ interactive = false, compact = false, className = '' }: CohortCardProps) => (
  <div className={`rounded-2xl bg-white shadow-elevated ring-1 ring-black/5 ${compact ? 'p-4' : 'p-6'} ${className}`}>
    <div className="flex items-center justify-between gap-3">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
        <span className="h-1.5 w-1.5 rounded-full bg-success" />
        {training.nextCohort ?? 'Enrolment open'}
      </span>
      {!compact && <span className="text-xs font-medium text-slate-500">HR Training</span>}
    </div>

    <p className={`font-semibold text-ink ${compact ? 'mt-3 text-sm' : 'mt-4 text-lg'}`}>{training.name}</p>
    <p className={`font-semibold tracking-tight text-ink tabular-nums ${compact ? 'mt-1 text-xl' : 'mt-2 text-3xl'}`}>
      {training.price}
    </p>

    {!compact && (
      <ul className="mt-5 space-y-3 border-t border-line pt-5 text-sm text-slate-600">
        <li className="flex items-center gap-3">
          <CalendarDays className="h-4 w-4 text-brand-600" /> {training.duration}
        </li>
        <li className="flex items-center gap-3">
          <Clock3 className="h-4 w-4 text-brand-600" /> {training.schedule}
        </li>
        <li className="flex items-center gap-3">
          <MonitorPlay className="h-4 w-4 text-brand-600" /> {training.format}, live sessions
        </li>
      </ul>
    )}

    {interactive && (
      <div className="mt-6 flex flex-col gap-3">
        <Button href={trainingEnrolUrl} className="w-full">
          Enroll now
        </Button>
        <Button to="/enroll-for-training" variant="secondary" className="w-full">
          See the programme
        </Button>
      </div>
    )}
  </div>
);

export default CohortCard;
