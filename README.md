# OpenAccess Consulting

Marketing site for [openaccessconsult.com](https://openaccessconsult.com): React, Vite and Tailwind, pre-rendered to static HTML and hosted on GitHub Pages.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # build + pre-render every page into dist/
npm run preview    # serve dist/ locally
npm run lint
```

## Where things live

| What | Where |
| --- | --- |
| Service list, groups and links | `src/content/services.ts` |
| Service page copy and FAQs | `src/content/serviceDetails.ts` |
| Contact details, stats, client logos, training price | `src/content/site.ts` |
| Training curriculum and FAQs | `src/content/training.ts` |
| Page titles and descriptions (SEO) | `src/content/seo.ts` |
| Design tokens (colours, type scale, shadows) | `tailwind.config.js` |
| Pre-render, sitemap and robots.txt | `scripts/build.mjs` |

## Deploys

| Branch | Deploys to |
| --- | --- |
| `openaccesslocal` | https://openaccessconsult.com/staging/ (not indexed by search engines) |
| `main` | https://openaccessconsult.com/ |

Push to `openaccesslocal`, check staging, then open a pull request into `main`.

## Optional settings

Add these under **GitHub → Settings → Secrets and variables → Actions → Variables**. Both are optional.

| Variable | Effect |
| --- | --- |
| `VITE_FORMSPREE_ID` | Contact form submits to Formspree. Without it, the form opens the visitor's email app. |
| `VITE_GA_ID` | Loads Google Analytics 4 and tracks `generate_lead` (form) and `enroll_click` (training). |

For local testing, put the same keys in a `.env.local` file (git-ignored).
