import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import { navLinks } from './navLinks';

const MENU_ID = 'services-menu';
const MOBILE_MENU_ID = 'mobile-menu';

const Header = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number>();
  const hoverOpenedAt = useRef(0);

  // Close menus whenever the route changes
  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Escape and click-outside close the menus
  useEffect(() => {
    if (!servicesOpen && !mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setServicesOpen(false);
      setMobileOpen(false);
      triggerRef.current?.focus();
    };
    const onPointerDown = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [servicesOpen, mobileOpen]);

  // Lock page scroll behind the mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const openServices = () => {
    window.clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeServicesSoon = () => {
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 120);
  };
  const onTriggerEnter = () => {
    hoverOpenedAt.current = Date.now();
    openServices();
  };
  // A mouse click lands right after hover has opened the menu; don't let it toggle the menu shut
  const onTriggerClick = () => {
    if (Date.now() - hoverOpenedAt.current < 500) return;
    setServicesOpen((open) => !open);
  };

  const elevated = scrolled || servicesOpen || mobileOpen;

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-[border-color,box-shadow] duration-200 ${
        elevated ? 'border-line shadow-[0_1px_0_rgb(11_31_58/0.02)]' : 'border-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <Container className="flex h-16 items-center justify-between gap-6">
        <Link to="/" className="shrink-0" aria-label="OpenAccess Consulting home">
          <img
            src={`${import.meta.env.BASE_URL}Logo/black.png`}
            alt="OpenAccess Consulting"
            width={198}
            height={32}
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden flex-1 items-center gap-1 lg:flex" aria-label="Main">
          <button
            ref={triggerRef}
            type="button"
            aria-expanded={servicesOpen}
            aria-controls={MENU_ID}
            onClick={onTriggerClick}
            onMouseEnter={onTriggerEnter}
            onMouseLeave={closeServicesSoon}
            className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors ${
              servicesOpen || pathname.startsWith('/services') ? 'text-ink' : 'text-slate-600 hover:text-ink'
            }`}
          >
            Services
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
          {/* Rendered right after its trigger so Tab moves into it; positioned against the header */}
          {servicesOpen && <MegaMenu id={MENU_ID} onMouseEnter={openServices} onMouseLeave={closeServicesSoon} />}
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors ${
                  isActive ? 'text-ink' : 'text-slate-600 hover:text-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button to="/contact" size="sm" className="hidden sm:inline-flex">
            Book a consultation
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls={MOBILE_MENU_ID}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-surface lg:hidden"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {mobileOpen && <MobileMenu id={MOBILE_MENU_ID} />}
    </header>
  );
};

export default Header;
