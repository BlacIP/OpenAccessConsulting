import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
// Self-hosted font: avoids a render-blocking request to Google Fonts
import '@fontsource-variable/plus-jakarta-sans';
import './index.css';
import { initAnalytics } from './lib/analytics';

// Lets CSS hide reveal-on-scroll content only when JS is running
document.documentElement.classList.add('js');
initAnalytics();

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Production pages are pre-rendered (scripts/build.mjs), so attach to the existing HTML;
// the dev server serves an empty root and renders from scratch.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
