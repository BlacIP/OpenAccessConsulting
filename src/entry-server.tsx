import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export { pages, meta, siteUrl, fullTitle } from './content/seo';

/** Deploy base path, e.g. "/" or "/staging/" */
export const base = import.meta.env.BASE_URL;

/** Renders one route to HTML for pre-rendering. `path` is the app path, e.g. "/services/recruitment". */
export const render = (path: string) => {
  const prefix = import.meta.env.BASE_URL.replace(/\/$/, '');
  return renderToString(
    <StrictMode>
      <StaticRouter basename={import.meta.env.BASE_URL} location={`${prefix}${path}`}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
};
