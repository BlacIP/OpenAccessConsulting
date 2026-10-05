import { clients } from '../../content/site';
import Container from '../ui/Container';

const LogoCloud = () => (
  <section aria-labelledby="clients-heading" className="border-y border-line">
    <Container className="flex flex-col items-center gap-8 py-10 lg:flex-row lg:gap-12">
      <h2 id="clients-heading" className="shrink-0 text-center text-sm font-medium text-slate-500 lg:max-w-[11rem] lg:text-left">
        Trusted by growing businesses across Nigeria
      </h2>
      <ul className="grid w-full grid-cols-3 items-center gap-x-8 gap-y-6 sm:grid-cols-6 lg:flex lg:flex-1 lg:justify-between">
        {clients.map((client) => (
          <li key={client.name} className="flex justify-center">
            {/* multiply blends away the white backgrounds baked into some logo files */}
            <img
              src={client.logo}
              alt={client.name}
              loading="lazy"
              className="h-10 w-auto max-w-[110px] object-contain opacity-70 mix-blend-multiply grayscale transition duration-200 hover:opacity-100 hover:grayscale-0 sm:h-11"
            />
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default LogoCloud;
