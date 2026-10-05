import { useEffect } from 'react';

const SITE = 'OpenAccess Consulting';

/** Sets the browser tab title for the current page and restores the default on leave. */
export const usePageTitle = (title: string) => {
  useEffect(() => {
    const previous = document.title;
    document.title = `${title} | ${SITE}`;
    return () => {
      document.title = previous;
    };
  }, [title]);
};
