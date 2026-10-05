import type { ReactNode } from 'react';

type EyebrowProps = {
  children: ReactNode;
  inverse?: boolean;
};

export const Eyebrow = ({ children, inverse = false }: EyebrowProps) => (
  <p className={`text-sm font-semibold ${inverse ? 'text-brand-200' : 'text-brand-600'}`}>{children}</p>
);

type SectionHeadingProps = {
  eyebrow?: string;
  /** The bold statement */
  title: string;
  /** Muted continuation, rendered in the same heading (two-tone) */
  subtitle?: string;
  inverse?: boolean;
  className?: string;
};

/** Stripe-style two-tone heading: a confident statement followed by the explanation in a muted tone */
const SectionHeading = ({ eyebrow, title, subtitle, inverse = false, className = '' }: SectionHeadingProps) => (
  <div className={`max-w-3xl ${className}`}>
    {eyebrow && <Eyebrow inverse={inverse}>{eyebrow}</Eyebrow>}
    <h2 className={`mt-3 text-h2 ${inverse ? 'text-white' : 'text-ink'}`}>
      {title}
      {subtitle && <span className={inverse ? 'text-slate-400' : 'text-slate-500'}> {subtitle}</span>}
    </h2>
  </div>
);

export default SectionHeading;
