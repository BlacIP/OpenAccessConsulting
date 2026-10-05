import type { MouseEventHandler, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'inverse' | 'link' | 'link-inverse';
type Size = 'sm' | 'md';

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Internal route */
  to?: string;
  /** External or mailto/tel link */
  href?: string;
  onClick?: MouseEventHandler;
  /** Show the sliding arrow (defaults on for primary and link variants) */
  arrow?: boolean;
  className?: string;
};

const variants: Record<Variant, string> = {
  primary: 'rounded-full bg-brand-600 text-white hover:bg-brand-700',
  secondary: 'rounded-full bg-white text-ink ring-1 ring-inset ring-line hover:ring-slate-300 hover:bg-surface',
  inverse: 'rounded-full bg-white text-ink hover:bg-brand-50',
  link: 'text-brand-600 hover:text-brand-700',
  'link-inverse': 'text-white hover:text-white/80',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-[15px]',
};

/** Stripe-style chevron that gains a shaft and slides right on hover */
export const HoverArrow = () => (
  <svg
    className="ml-2 h-2.5 w-2.5 shrink-0 overflow-visible"
    viewBox="0 0 10 10"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path className="opacity-0 transition-opacity duration-150 group-hover:opacity-100" d="M0 5h7" />
    <path className="transition-transform duration-150 group-hover:translate-x-[3px]" d="M1 1l4 4-4 4" />
  </svg>
);

const Button = ({ children, variant = 'primary', size = 'md', to, href, onClick, arrow, className = '' }: ButtonProps) => {
  const isLink = variant === 'link' || variant === 'link-inverse';
  const showArrow = arrow ?? (variant === 'primary' || isLink);
  const classes = [
    'group inline-flex items-center justify-center font-semibold transition-colors duration-150',
    variants[variant],
    isLink ? 'text-[15px]' : sizes[size],
    className,
  ].join(' ');
  const content = (
    <>
      {children}
      {showArrow && <HoverArrow />}
    </>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classes}>
        {content}
      </Link>
    );
  }
  if (href) {
    const external = href.startsWith('http');
    return (
      <a
        href={href}
        onClick={onClick}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
};

export default Button;
