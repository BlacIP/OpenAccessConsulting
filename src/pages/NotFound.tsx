import { meta } from '../content/seo';
import { usePageMeta } from '../lib/usePageMeta';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { Eyebrow } from '../components/ui/SectionHeading';

const NotFound = () => {
  usePageMeta(meta.notFound);

  return (
    <section className="py-24 lg:py-36">
      <Container className="max-w-2xl text-center">
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-3 text-h1 text-ink">We couldn’t find that page.</h1>
        <p className="mt-5 text-lead text-slate-600">
          It may have moved, or the link may be out of date. These pages are a good place to start.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
          <Button to="/">Go to the home page</Button>
          <Button to="/services" variant="link">
            Browse services
          </Button>
          <Button to="/contact" variant="link">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
