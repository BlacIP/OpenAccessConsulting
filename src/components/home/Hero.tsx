import Container from '../ui/Container';
import Button from '../ui/Button';
import ShortlistCard from '../artifacts/ShortlistCard';
import VerificationReport from '../artifacts/VerificationReport';
import CohortCard from '../artifacts/CohortCard';

const Hero = () => (
  <section className="relative overflow-hidden">
    {/* Signature diagonal gradient: a band along the bottom on mobile, the right-hand side on desktop */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-brand-mesh [clip-path:polygon(0_22%,100%_0,100%_100%,0_100%)] lg:inset-y-0 lg:left-auto lg:h-auto lg:w-[52%] lg:[clip-path:polygon(24%_0,100%_0,100%_100%,0_100%)]"
    />

    <Container className="relative grid items-center gap-16 pb-20 pt-12 sm:pt-16 lg:grid-cols-[1.1fr_1fr] lg:gap-8 lg:pb-28 lg:pt-24">
      <div className="max-w-xl">
        <p className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-sm font-semibold text-brand-700">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
          HR &amp; people solutions in Lagos
        </p>
        <h1 className="mt-6 text-display text-ink">Hire, verify and grow great teams.</h1>
        <p className="mt-6 text-lead text-slate-600">
          Recruitment, background checks, HR training and compliance for Nigerian businesses, from one partner with
          over 13 years on the ground.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
          <Button to="/contact">Book a consultation</Button>
          <Button to="/services" variant="link">
            Explore services
          </Button>
        </div>
      </div>

      {/* Illustrative product-style artifacts of what clients receive */}
      <div aria-hidden="true" className="relative mx-auto w-full max-w-lg lg:mr-0 lg:h-[500px] lg:max-w-none">
        <ShortlistCard className="lg:absolute lg:left-0 lg:top-0 lg:w-[86%]" />
        <VerificationReport className="relative -mt-12 ml-auto w-[78%] sm:w-[64%] lg:absolute lg:right-0 lg:top-[196px] lg:mt-0 lg:w-[54%]" />
        <CohortCard compact className="hidden lg:absolute lg:left-[6%] lg:top-[352px] lg:block lg:w-[38%]" />
      </div>
    </Container>
  </section>
);

export default Hero;
