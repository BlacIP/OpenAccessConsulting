import type { Service } from '../../content/services';
import type { ServiceDetail } from '../../content/serviceDetails';
import ShortlistCard from '../artifacts/ShortlistCard';
import VerificationReport from '../artifacts/VerificationReport';
import AssessmentCard from '../artifacts/AssessmentCard';
import PermitTracker from '../artifacts/PermitTracker';
import ComplianceTracker from '../artifacts/ComplianceTracker';
import HighlightsCard from '../artifacts/HighlightsCard';

type HeroVisualProps = {
  service: Service;
  detail: ServiceDetail;
};

const HeroVisual = ({ service, detail }: HeroVisualProps) => {
  switch (detail.visual) {
    case 'shortlist':
      return <ShortlistCard />;
    case 'verification':
      return <VerificationReport className="mx-auto max-w-sm" />;
    case 'assessment':
      return <AssessmentCard className="mx-auto max-w-sm" />;
    case 'permit':
      return <PermitTracker framed className="mx-auto max-w-sm" />;
    case 'compliance':
      return <ComplianceTracker className="mx-auto max-w-sm" />;
    default:
      return <HighlightsCard title={service.title} icon={service.icon} items={detail.highlights} className="mx-auto max-w-sm" />;
  }
};

export default HeroVisual;
