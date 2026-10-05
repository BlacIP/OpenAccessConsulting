declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const GA_ID = import.meta.env.VITE_GA_ID as string | undefined;

/** Loads Google Analytics 4 when VITE_GA_ID is set; does nothing otherwise. */
export const initAnalytics = () => {
  if (!GA_ID || typeof window === 'undefined' || window.gtag) return;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag expects the arguments object itself
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
};

/** Records a conversion or interaction event (no-op without analytics configured). */
export const track = (event: string, params: Record<string, unknown> = {}) => {
  window.gtag?.('event', event, params);
};
