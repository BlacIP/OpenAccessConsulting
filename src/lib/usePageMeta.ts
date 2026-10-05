import { useEffect } from 'react';
import { fullTitle, type PageMeta } from '../content/seo';

/**
 * Keeps the tab title and meta description in sync on client-side navigation.
 * The pre-rendered HTML already contains both for the first page load.
 */
export const usePageMeta = (page: PageMeta) => {
  const title = fullTitle(page);
  const { description } = page;
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
};
