import Container from '../ui/Container';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';

type Action = { label: string; to?: string; href?: string };

type FinalCTAProps = {
  title?: string;
  text?: string;
  primary?: Action;
  secondary?: Action;
};

const FinalCTA = ({
  title = 'Let’s talk about your team.',
  text = 'Book a free consultation and we’ll map out the right hiring, training or compliance support for your business.',
  primary = { label: 'Book a consultation', to: '/contact' },
  secondary,
}: FinalCTAProps) => (
  <section className="pb-20 lg:pb-28">
    <Container>
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-band px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          <div className="relative max-w-2xl">
            <h2 className="text-h2 text-white">{title}</h2>
            <p className="mt-4 text-lead text-white/80">{text}</p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Button to={primary.to} href={primary.href} variant="inverse" arrow>
                {primary.label}
              </Button>
              {secondary && (
                <Button to={secondary.to} href={secondary.href} variant="link-inverse">
                  {secondary.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </Container>
  </section>
);

export default FinalCTA;
