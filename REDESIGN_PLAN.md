# OpenAccess Consulting: Website Redesign Plan

**Status:** Draft for review · **Date:** 5 Oct 2026 · **Reference:** stripe.com (plus examples from Mobbin)

---

## 1. Summary

The site works and the content is solid, but it looks like a 2019 Tailwind template: the same blue gradient on every hero, the same "icon in a tinted square" card on every page, centred text everywhere, and no proof (testimonials, numbers, case studies) to back up 13+ years in business.

This plan keeps the stack (React + Vite + Tailwind) and the content. It changes four things:

1. **A real design system.** Brand tokens taken from the logo (`#0765FF`), a type scale, spacing and one shadow style, so the look stays consistent across pages.
2. **A Stripe-style layout.** Left-aligned headlines in two tones, one signature diagonal gradient, small UI-style "artifacts" in place of stock photos, a logo strip under the hero, a dark stats band, and a mega-menu.
3. **A proper page for each service.** The 8 services move out of a 1,250-line modal into their own URLs that can be linked and found on Google.
4. **Trust and conversion basics.** A contact form that actually submits, testimonials and metrics, working footer links, SEO metadata and faster images.

The work comes in 5 phases over roughly 3–4 weeks. Phase 0 (quick fixes) can ship this week.

---

## 2. What makes it feel dated (findings)

### 2.1 Visual design

| # | Issue | Where | Why it matters |
|---|-------|-------|----------------|
| V1 | The same `from-blue-600 via-blue-700 to-blue-800` gradient is used on 6 sections across 4 pages | [HeroSection](src/components/landing/HeroSection.tsx), [ServicesHero](src/components/services/ServicesHero.tsx), [ContactHero](src/components/contact/ContactHero.tsx), [TrainingHero](src/components/training/TrainingHero.tsx), [TrainingContent](src/components/training/TrainingContent.tsx), [TrainingHighlight](src/components/landing/TrainingHighlight.tsx) | Every page looks the same and nothing feels special. This is the clearest sign of a template. |
| V2 | The colour is Tailwind's default `blue-600` (#2563EB), not the logo blue (#0765FF) | Everywhere | The site doesn't match the brand. |
| V3 | The same card (tinted icon box, title, grey text, `shadow-lg`) is reused for services, values and training benefits | ServicesSection, CoreServices, ValuesSection, WhyChooseTraining | It reads as generic. Stripe almost never repeats one card pattern across a page. |
| V4 | Almost everything is centred, with `text-xl` grey paragraphs | All sections | Centred blocks of body text are hard to scan. Modern B2B sites left-align and keep line length short. |
| V5 | Buttons use `hover:scale-105` with big shadows | Hero, CTAs | This hover effect looks dated. Modern sites use a small colour or arrow shift. |
| V6 | 17 emoji used as headings (🎯 💼 🚀 📞 …) plus red "alert" boxes | [CoreServices.tsx](src/components/services/CoreServices.tsx) | Feels informal and makes services look like warnings. |
| V7 | Stock photography (6000px JPGs) is the only imagery | Hero, About, Training | Doesn't look like OpenAccess, and the files are heavy. |
| V8 | The client logo strip is cramped (`py-6`), uses boxed cards and mixes JPG/PNG backgrounds | [ClientLogos.tsx](src/components/landing/ClientLogos.tsx) | Social proof should be the strongest thing on the page, but here it's the weakest. |
| V9 | Broken Tailwind classes: `text-l`, `text-s`, `mb` (no value) and `-mx-22` / `px-22` (not in the scale, so they do nothing) in 20 files | Multiple | Spacing is inconsistent and the code is messy. |

### 2.2 Content and trust

- **No proof.** There are no testimonials, case studies or results. Strong claims ("13+ years", "500+ client partnerships", "nationwide coverage") are buried inside bullet lists.
- **Repetition.** "Ready to Transform Your Business?" appears twice word for word. The About page repeats itself across Mission, Vision, Who We Are and Values; for example, "Expertise" has identical copy in two sections.
- **Copy bug.** "Pre-Employment Tests" has the description *"Comprehensive business support across multiple functional areas."*, which was pasted from another service ([CoreServices.tsx:795](src/components/services/CoreServices.tsx#L795)).
- **No h1 on the About page.** It's commented out, and the hero is a 2xl paragraph of 120+ words ([AboutHero.tsx](src/components/about/AboutHero.tsx)).
- **Stale training info.** The start date is commented out, there's no next cohort date, and "Download Brochure" does nothing ([TrainingContent.tsx](src/components/training/TrainingContent.tsx)).

### 2.3 UX and conversion

- **Services are trapped in a modal.** They can't be linked to, shared or indexed by Google. The modal has no Esc-to-close, no focus trap and no scroll lock.
- **The contact form uses `mailto:`.** Users without a mail app configured, which includes most mobile and webmail users, lose their message without seeing an error ([ContactForm.tsx](src/components/contact/ContactForm.tsx)).
- **14 dead links (`href="#"`)** in the footer, including LinkedIn and Twitter.
- **Two primary CTAs compete.** The header pushes "Enroll for Training" while the hero pushes "Get Started". The business goal (consultations) isn't the most visible action.
- **No WhatsApp contact,** which is the default way many Lagos B2B buyers make first contact.

### 2.4 Technical, SEO and performance

- `<title>OpenAccess Conculting</title>` is misspelled. The favicon points to the missing `/vite.svg`. There's no meta description, no Open Graph image and no per-page titles.
- The site is a client-only SPA on GitHub Pages using the `404.html` fallback. Google sees an empty `<div id="root">` on first load.
- Hero and About images are 5,700–6,700px wide (500–700 KB each), have no `width`/`height` (which causes layout shift) and no lazy loading.
- `setTimeout(() => window.scrollTo(0,0), 100)` is copied into 5+ components instead of handling scroll once in the router.
- Accessibility: the mobile menu button has no `aria-label`, there's no skip link, no `prefers-reduced-motion` handling, and focus styles are inconsistent.

---

## 3. Design direction: what "Stripe-like" means here

Stripe sells software. OpenAccess sells expertise and people. We should copy Stripe's **discipline**, not its WebGL effects.

### Patterns to adopt

| Stripe pattern | How it applies to OpenAccess | Reference |
|----------------|------------------------------|-----------|
| **Two-tone headline:** a bold statement followed by the explanation in muted colour, as one block | "Hire, verify and develop great people. *Recruitment, background checks, training and compliance from one team that has done it for 13+ years.*" | [Stripe hero](https://mobbin.com/sites/sections/fc905901-fe5f-4813-bc2a-112fd8de0c21) |
| **One signature visual:** a diagonal gradient band cut across the page | A brand-blue → cyan → teal diagonal gradient (CSS only, no WebGL). Used **only** on the home hero and the final CTA, not on every page. | [Stripe "Financial infrastructure"](https://mobbin.com/sites/sections/f8f0c7c8-7538-4d10-b49a-d7e6c9e16d61), [Stripe Connect](https://mobbin.com/sites/sections/7bcbb3a8-b450-4cd1-845d-bc7bee4209ed) |
| **Product UI in the hero** in place of stock photos | Build small HTML/CSS "artifacts" of our deliverables: a **candidate shortlist card**, a **verification report** with ✓ KYC / ✓ Address / ✓ Guarantor, and a **next training cohort** card. This is the single change that will make the site feel most like Stripe. | [Stripe Payments](https://mobbin.com/sites/sections/8247f8fd-e608-43c7-a149-92d16e163277), [Stripe Apps](https://mobbin.com/sites/sections/f164cb2d-c891-42d8-9156-979865f91558) |
| **Logo strip directly under the hero** | Bigger client logos in one colour, all on transparent backgrounds, with no boxes | [Stripe hero + logos](https://mobbin.com/sites/sections/fc905901-fe5f-4813-bc2a-112fd8de0c21) |
| **Numbers as design:** large figures with short captions | 13+ years · 500+ clients · 8 service lines · 36 states covered *(numbers to be confirmed)* | [Stripe stats row](https://mobbin.com/sites/sections/8dce9566-a3a9-4dae-a7ba-1e9109c0ffb5), [Stripe dark stats](https://mobbin.com/sites/sections/f841fbdf-2290-402a-a019-2993b0c5f070) |
| **Thin vertical guide lines** framing the content column | A subtle 1px grid gives structure without boxing everything in cards | Visible in most Stripe sections above |
| **Compact buttons + text links with a chevron (›)** | Primary: "Book a consultation" button (4px radius). Secondary: "Explore services ›" as a text link, not a second filled button. | All Stripe heroes |
| **Organised, dense footer** acting as a sitemap | Every service, training programme, company page and contact detail, with real links | [Stripe footer](https://mobbin.com/sites/sections/aedbe0cb-192a-4e87-bed2-307065b1e559) |

### What not to copy

- **Heavy animated WebGL gradients.** Much of our audience browses on mobile data in Nigeria. Keep the signature gradient as static CSS and keep the JS bundle small.
- **Purple/pink "AI" gradients.** These don't fit the brand. Stay in the blue family.
- **Developer-oriented density.** Our buyers are HR managers and business owners. Use plainer words and fewer sections per page.

---

## 4. Design system

All of this goes into `tailwind.config.js` as tokens, so components never use raw hex values or default Tailwind blues.

### 4.1 Colour

| Token | Value | Use |
|-------|-------|-----|
| `brand` | `#0765FF` | Primary buttons, links, key accents (from the logo; 4.9:1 contrast on white, passes AA) |
| `brand-hover` | `#0552D6` | Hover and pressed states |
| `brand-soft` | `#EAF2FF` | Tinted backgrounds, chips |
| `ink` | `#0B1F3A` | Headings, dark sections (deep navy, never pure black) |
| `body` | `#475569` | Body text |
| `muted` | `#64748B` | Captions, the second half of two-tone headlines |
| `surface` | `#F6F9FC` | Alternate section background |
| `line` | `#E3E8EF` | Borders, guide lines |
| `success` | `#12B76A` | Check marks in verification artifacts |
| Gradient | `#0765FF → #00B8FF → #4FE3C1` | Signature diagonal band only |

### 4.2 Typography

Keep **Plus Jakarta Sans**. It's already loaded and it's a good modern geometric face. The problem is how it's used, not the font. (The design tool suggested Poppins + Open Sans. I'm not taking that suggestion because it would look *more* generic.)

| Role | Size (mobile → desktop) | Weight | Tracking |
|------|------------------------|--------|----------|
| Display (home hero) | 40 → 64px | 600 | -0.03em |
| H1 (page heroes) | 36 → 52px | 600 | -0.025em |
| H2 (sections) | 30 → 40px | 600 | -0.02em |
| H3 (cards) | 20 → 22px | 600 | -0.01em |
| Eyebrow | 14px | 600, brand colour | normal |
| Body large | 18 → 20px | 400 | normal |
| Body | 16 → 17px | 400, line-height 1.65 | normal |
| Small | 14px | 500 | normal |

Rule: use weight 600 for headings, not 700/800. Stripe's calm, confident feel comes from lighter headings at large sizes.

### 4.3 Layout, spacing and shape

- **Container:** `max-w-[1200px] mx-auto px-5 sm:px-8`. Use one `<Container>` component and remove every `-mx-22` and `lg:px-28`.
- **Section rhythm:** `py-20 lg:py-28`. Hero `pt-28 lg:pt-36`.
- **Spacing scale:** 4/8px based (Tailwind default, used consistently).
- **Radius:** all buttons 4px (`rounded-button` token, changed from pills on 6 Oct 2026); cards `rounded-2xl` (16px); inputs `rounded-lg`. Status badges and tags stay pill-shaped because they are not clickable.
- **Shadow:** one elevated token for artifacts and floating cards (Stripe-style layered shadow: `0 30px 60px -12px rgb(11 31 58 / .18), 0 18px 36px -18px rgb(0 0 0 / .2)`). Regular cards get a 1px `line` border and **no shadow**.
- **Breakpoints to QA:** 375 / 768 / 1024 / 1440.

### 4.4 Motion

- Hover: 150–200ms colour change, and the arrow in a button nudges 2px. Remove all `scale-105`.
- On scroll: sections fade up 12px, items stagger by 40ms, each element animates once. Use a small `useInView` hook (IntersectionObserver); no animation library is needed.
- Respect `prefers-reduced-motion`: turn off all transforms and keep opacity changes only.

### 4.5 Shared components to build

`Container`, `Section`, `Eyebrow`, `SectionHeading` (two-tone variant), `Button` (primary / secondary / link-with-chevron), `Card`, `LogoCloud`, `StatBand`, `CTABand`, `Accordion` (FAQ, curriculum), `Artifact*` (ShortlistCard, VerificationReport, CohortCard), `MegaMenu`, `ScrollToTop` (replaces the copied `setTimeout` code).

---

## 5. Page-by-page plan

### 5.1 Header and footer (all pages)

**Header**
- Sticky. It's transparent over the hero, then turns white with `backdrop-blur` and a bottom border once the page scrolls.
- Nav: **Services ▾** (mega-menu) · **Training** · **About** · **Contact**. Right side: "Book a consultation" (primary button).
- The mega-menu groups the 8 services into 3 pillars. Each item has a one-line description:
  - **Talent:** Recruitment · Pre-Employment Tests · Employee Verification
  - **Workforce:** Outsourcing · HR Services · Training & Development
  - **Mobility & Compliance:** Expatriate & Immigration · Regulatory Compliance & Audit
- Mobile: full-screen sheet with the groups as an accordion and the CTA pinned at the bottom. The button gets `aria-label` and `aria-expanded`.

**Footer.** Stripe-style sitemap: Services (all 8, real links) · Training · Company (About, Contact, Careers if relevant) · Contact (phone, WhatsApp, both emails, address) · real LinkedIn/X/Instagram URLs · © year generated automatically.

### 5.2 Home page

New section order (currently Hero → Logos → 4 cards → Training → CTA):

| # | Section | Notes | Reference |
|---|---------|-------|-----------|
| 1 | **Hero** | Left: eyebrow "HR & People Solutions · Lagos", two-tone headline, CTAs (Book a consultation / Explore services ›). Right: a layered stack of 2–3 artifacts (shortlist card, verification report, cohort card). Diagonal gradient behind it. | [Stripe](https://mobbin.com/sites/sections/f8f0c7c8-7538-4d10-b49a-d7e6c9e16d61) |
| 2 | **Logo cloud** | "Trusted by teams at" + 6+ logos in one colour, no boxes. Marquee on mobile only, paused when reduced motion is on. | [Stripe](https://mobbin.com/sites/sections/fc905901-fe5f-4813-bc2a-112fd8de0c21) |
| 3 | **Services bento** | "One partner across the employee lifecycle." A grid of the 3 pillars: Recruitment gets the large tile with a mini artifact, the others are smaller tiles. Every tile links to its service page. | [OpenPhone](https://mobbin.com/sites/sections/368e9368-e7ad-44c1-88fb-ed73b0d3cd04), [Fiverr Business](https://mobbin.com/sites/sections/106f217e-e46e-48ab-ab78-4a8be59a2023) |
| 4 | **Stats band (dark ink)** | 3–4 big numbers with short captions | [Stripe dark](https://mobbin.com/sites/sections/f841fbdf-2290-402a-a019-2993b0c5f070) |
| 5 | **How we work** | 4 steps (Consult → Plan → Deliver → Support) in a horizontal row with a connecting line on desktop and a vertical timeline on mobile | [Upwork](https://mobbin.com/sites/sections/9e3f57fc-198b-48ee-8ce9-fe488251d984), [Fluz](https://mobbin.com/sites/sections/ed68ef39-7f40-4c35-9126-9a28002a8153) |
| 6 | **Industries** | Chips or tabs: Oil & Gas, Finance & MFBs, Healthcare, Manufacturing, Hospitality, Tech. This copy already exists inside the service modals. | — |
| 7 | **Client stories** | 3 cards, each with logo, one headline metric, a short quote and the person's name/title | [Grammarly](https://mobbin.com/sites/sections/12e0e749-e85c-4006-a8e7-33e397d7cd86), [Vercel](https://mobbin.com/sites/sections/3534dc3e-a1a5-456e-ba6f-f423b4e56f34) |
| 8 | **Training spotlight** | A course card (not a photo): title, ₦ price, 12 weeks, virtual, Saturdays 10am–1pm, **next cohort date**, Enroll button | — |
| 9 | **Final CTA band** | Gradient band: "Let's talk about your team." + Book a consultation + WhatsApp link | — |

### 5.3 Services: index page + 8 service pages (largest structural change)

- **`/services`:** short hero (no gradient; white background with the guide grid), then the 3 pillars as sections, each with its service cards linking to detail pages, then process, then CTA.
- **`/services/:slug`:** one template, driven by data. Move the content out of the JSX blobs in `CoreServices.tsx` into `src/content/services.ts` (typed objects).

**Service page template**
1. Hero: eyebrow (pillar), H1 (for example "Find the right talent. Every time."), a 2-line subhead, CTAs, and a service-specific artifact on the right (for example a verification report for Employee Verification).
2. "What we offer": 2- or 3-column list of offerings (no emoji).
3. Our process: numbered steps (the existing content is good).
4. "Why it matters": replace the red alert boxes with **one** large stat callout (for example "Up to 60% of contract bids are lost to incomplete registrations").
5. Industries served: chips.
6. FAQ accordion (new; also helps SEO).
7. Related services + CTA band.

Fix the Pre-Employment Tests description while doing this.

### 5.4 Training (`/training`, currently `/enroll-for-training`)

Rebuild it as a **course page** with a sticky enrollment card, following the [Sketch course page](https://mobbin.com/sites/sections/61ccddb2-20f8-47a6-aa81-6c76b2ade4c3) pattern:

- **Left column:** title + summary → What you'll learn (checklist) → Curriculum (accordion of the 6 modules) → Who should attend → Facilitators (photos + credentials) → Testimonials from past cohorts → FAQ.
- **Right column (sticky on desktop, bottom bar on mobile):** ₦120,000 · 12 weeks · Saturdays 10am–1pm · Virtual · **Next cohort: [date]** · "Enroll now" (primary) · "Download brochure" (an actual PDF).
- Keep the Google Form for now, but open it from the card. A later phase could use an embedded form or Paystack checkout.
- Add a redirect from `/enroll-for-training` → `/training` so existing shared links keep working.

### 5.5 About

- Add a real H1, for example "13 years helping Nigerian businesses hire, grow and stay compliant", with a short 2–3 line intro in place of the 120-word paragraph.
- **Story / timeline:** founding year → milestones → today.
- **Mission & Vision:** merged into one two-column statement block. Remove the duplicate "Why choose" and "Who we are" lists.
- **The 3E model** (Expertise · Efficiency · Excellence): 3 cards with short, distinct copy.
- **Team:** bring back `TeamSection` with real headshots and LinkedIn links. People are what this firm sells.
- Stats band (reused) + CTA.

### 5.6 Contact

Follow the [Webflow](https://mobbin.com/sites/sections/87a2d31e-7955-4ab1-961c-086ba5f43f62) / [Framer](https://mobbin.com/sites/sections/cf2cd4d3-fc26-47d2-8b25-0c92f59b3758) contact-sales pattern:

- **Left:** H1 "Talk to our team" · "What happens next" (1. We reply within 1 business day · 2. A 30-min discovery call · 3. A tailored proposal) · direct lines (phone, **WhatsApp**, email) · client logos.
- **Right:** form card with a **real backend** (Formspree or Web3Forms, both free and both work on GitHub Pages). Add inline validation, a loading state, an on-page success message and a honeypot field against spam.
- Below: office address + a smaller map.

### 5.7 Gallery (currently disabled)

Decide whether to bring it back. If training events happen regularly, a "Moments" strip on the Training page is a better place for those photos than a separate page.

---

## 6. Technical foundations

| Area | Action |
|------|--------|
| **Tokens** | Add colours, font sizes, shadow and container to `tailwind.config.js`. Remove raw `blue-*` classes. |
| **Routing** | Add a single `ScrollToTop` in `App.tsx`, `/services/:slug`, a `/enroll-for-training → /training` redirect and a proper 404 page. |
| **SEO** | Per-page `<title>` + meta description (`react-helmet-async`), OG image, favicon fix, `sitemap.xml`, `robots.txt`, JSON-LD `ProfessionalService` with address and phone. |
| **Pre-rendering** | Generate static HTML per route at build time (`vite-react-ssg` or `vite-plugin-prerender`) so Google and link previews see real content. This works with the current GitHub Pages deploy. |
| **Images** | Resize to 800/1600w WebP (`sharp` script or `vite-imagetools`), add `width`/`height`, `loading="lazy"` below the fold, `fetchpriority="high"` on the hero. Goal: each image under 150 KB. |
| **Forms** | Formspree / Web3Forms for contact. Track submit and "Enroll" clicks as conversion events. |
| **Analytics** | GA4 or Plausible, with the conversion events above. |
| **Accessibility** | Skip link, visible focus rings (`focus-visible:ring-2 ring-brand`), one H1 per page, alt text, labelled icon buttons, `prefers-reduced-motion`, AA contrast checked. |
| **Code health** | Remove the `-mx-22`/`px-22`/`text-l`/`text-s` hacks, the unused `import React` lines and the `any` in CoreServices. Break the 1,250-line `CoreServices.tsx` into data + template. |

**Targets:** Lighthouse ≥ 90 on Performance, Accessibility, Best Practices and SEO (mobile). LCP < 2.5s on a 4G profile. CLS < 0.05.

---

## 7. Content needed from the business (blocks parts of the design)

The new design depends on proof. Without these items, sections 5.2 #7, 5.4 and 5.5 will be thin.

- [ ] **3–6 client testimonials:** quote, name, title, company, and permission to publish
- [ ] **2–3 mini case studies with a number** (for example "Hired 40 branch staff in 6 weeks for X MFB")
- [ ] **Confirmed stats:** years in business, clients served, candidates placed/verified, states covered
- [ ] **Client logos** as SVG or transparent PNG, with permission
- [ ] **Real photos:** team headshots, office, a training session. A half-day shoot would replace all the stock imagery.
- [ ] **Training:** next cohort date, facilitator bios, past attendee quotes, brochure PDF
- [ ] **Social profile URLs** (LinkedIn, X, Instagram) and a **WhatsApp Business** number
- [ ] **Positioning line:** one sentence on who we serve and why us (to be agreed; see §9)

---

## 8. Roadmap

| Phase | Scope | Rough effort |
|-------|-------|--------------|
| **0 · Quick wins** | ✅ Staging blank-page fix · ✅ title typo, favicon, meta description + OG tags · ✅ Pre-Employment copy bug · ✅ dead footer links (social icons removed until real URLs exist) · ✅ emoji removed · ✅ aria-labels + accessible service modal (Esc, click-outside, scroll lock) · ✅ photos resized (−66%) with width/height · ✅ staging `noindex` · ✅ GitHub Actions v4 / Node 22 / pinned runner · ✅ typecheck + lint clean · ⏳ contact form → Formspree (**needs a Formspree form ID**) | 1–2 days |
| **1 · Foundations + Home** | ✅ Tokens in `tailwind.config.js` (legacy `blue-*` aliased to brand) · ✅ UI kit in `src/components/ui` · ✅ artifacts · ✅ header with mega-menu + mobile menu, skip link · ✅ sitemap footer · ✅ home page (hero, logos, services bento, stats, process, industries, training spotlight, CTA) · ✅ shared content in `src/content` · ⏳ client stories section (**waiting on approved testimonials**) | ~1 week |
| **2 · Services** | ✅ Content moved out of the 1,250-line modal into `src/content/serviceDetails.ts` · ✅ `/services` overview grouped by pillar · ✅ 8 pages at `/services/:slug` (hero artifact, offerings, process, why it matters, why us, industries, FAQ, related, CTA) · ✅ per-page tab titles · ⏳ **client to review FAQ answers** and source the two unsourced stats dropped from the old copy ("70% of immigration penalties", "60% of contract bids lost") | ~1 week |
| **3 · Training, About, Contact** | ✅ `/training` course page (sticky enrol card, curriculum, FAQ, mobile enrol bar; `/enroll-for-training` redirects) · ✅ About rebuilt (mission/vision, 3E model, commitments, services) · ✅ Contact-sales layout with validated form (Formspree when `VITE_FORMSPREE_ID` is set, email fallback otherwise; service pre-selected from service pages) · ✅ legacy components and `blue-*` alias removed · ⏳ **team section (needs real names, roles, photos)** · ⏳ **brochure PDF** (old button did nothing; removed) | 3–4 days |
| **4 · SEO, performance, QA** | ✅ Every page pre-rendered to static HTML (`scripts/build.mjs`) with its own title, description, canonical and OG tags · ✅ real 404 page · ✅ `/enroll-for-training` static redirect · ✅ `sitemap.xml` + `robots.txt` (staging disallowed) · ✅ JSON-LD `ProfessionalService` · ✅ 1200×630 share image · ✅ self-hosted font (removed render-blocking Google Fonts) · ✅ contrast fixes · ✅ unused images removed · ✅ GA4 + Formspree switchable via repo variables · ✅ hydration verified clean on every page · **Lighthouse (mobile): Performance 95–100, Accessibility 100, Best Practices 100, SEO 100, CLS 0** · ⏳ **needs `VITE_FORMSPREE_ID` and (optionally) `VITE_GA_ID`** · ⏳ submit sitemap in Google Search Console after go-live | 2–3 days |

Phase 0 can ship independently right away. Phases 1–4 can each go to the existing `/staging` deploy for review before merging to `main`.

---

## 9. Decisions

**Agreed (5 Oct 2026)**

1. **Primary CTA: "Book a consultation."** It's the filled button in the header, home hero, service pages and final CTA band. Training becomes a strong secondary spotlight and never competes as a second filled button in the same view.
2. **Positioning: Nigeria-focused.** Copy, stats ("36 states covered"), industries (MFBs, oil & gas, manufacturing) and contact options (WhatsApp, Lagos office) all lean local. Prices stay in ₦. Expatriate & Immigration is framed as "bringing international talent into Nigeria", not as a global offering.
3. **Hosting: stay on GitHub Pages for now.** That rules out Netlify Forms, so the contact form uses Formspree or Web3Forms. Pre-rendering (`vite-react-ssg`) works on Pages.

**Still open**

4. **Training branding:** keep it inside the main site, or give it a sub-brand (for example "OpenAccess Academy")?
5. **Font:** keep Plus Jakarta Sans (recommended) or license something more distinctive?
6. **Gallery:** bring it back, fold it into Training, or drop it?

---

## 9a. How staging and production work

There are two live copies of the site. Both are deployed automatically by GitHub Actions to the same `gh-pages` branch:

| | Production | Staging |
|---|---|---|
| **URL** | https://openaccessconsult.com/ | https://openaccessconsult.com/staging/ |
| **Deploys when you push to** | `main` | `openaccesslocal` |
| **Workflow** | [deploy-prod.yml](.github/workflows/deploy-prod.yml) | [deploy-staging.yml](.github/workflows/deploy-staging.yml) |
| **Built with** | `vite build --mode production` (base `/`) | `vite build --mode staging` (base `/staging/`) |

**Day-to-day workflow**

1. `git checkout openaccesslocal && git pull`, then `git merge main` to bring it up to date.
2. Make changes. Preview locally with `npm run dev` (http://localhost:5173).
3. `git push`. About 2 minutes later the change appears at **openaccessconsult.com/staging/** (progress is under the repo's **Actions** tab on GitHub).
4. When you're happy, open a pull request `openaccesslocal → main` and merge it. Production updates about 2 minutes later.

**Bug fixed (5 Oct 2026).** Until now staging showed a **blank page**. The React Router base was hard-coded in `.env.staging` as `/OpenAccessConsulting/staging/` (left over from before the custom domain). The site is actually served at `/staging/`, so the router matched nothing and rendered nothing. `App.tsx` now uses `import.meta.env.BASE_URL`, which Vite sets correctly for each mode, and the stale `VITE_APP_BASE` lines were removed from the env files.

**Follow-ups (add to Phase 0)**
- Add `<meta name="robots" content="noindex">` to staging builds so Google doesn't index a duplicate of the site.
- The workflows use `actions/checkout@v3`, `setup-node@v3` and Node 18, which are all past end-of-life. Bump them to `@v4` and Node 20/22.
- The prod workflow's `echo "VITE_APP_BASE=/"` step is now unused and can be deleted.

---

## 10. Reference board (Mobbin)

| Pattern | Examples |
|---------|----------|
| Hero with gradient + product UI | [Stripe home](https://mobbin.com/sites/sections/fc905901-fe5f-4813-bc2a-112fd8de0c21) · [Stripe classic](https://mobbin.com/sites/sections/f8f0c7c8-7538-4d10-b49a-d7e6c9e16d61) · [Stripe Payments](https://mobbin.com/sites/sections/8247f8fd-e608-43c7-a149-92d16e163277) · [Stripe Connect](https://mobbin.com/sites/sections/7bcbb3a8-b450-4cd1-845d-bc7bee4209ed) · [Stripe use cases](https://mobbin.com/sites/sections/4e30933c-7533-4812-ba94-eb510facc2f8) |
| Stats | [Stripe stats row](https://mobbin.com/sites/sections/8dce9566-a3a9-4dae-a7ba-1e9109c0ffb5) · [Stripe dark band](https://mobbin.com/sites/sections/f841fbdf-2290-402a-a019-2993b0c5f070) · [Stripe big number](https://mobbin.com/sites/sections/c8cd8f03-72c9-4f3a-80aa-697bd8de5e16) |
| Footer / sitemap | [Stripe footer](https://mobbin.com/sites/sections/aedbe0cb-192a-4e87-bed2-307065b1e559) · [Stripe sitemap](https://mobbin.com/sites/sections/3652bdff-2a9f-43d3-ad78-06ee40c2fdc9) |
| Service cards / bento | [OpenPhone](https://mobbin.com/sites/sections/368e9368-e7ad-44c1-88fb-ed73b0d3cd04) · [Fiverr Business](https://mobbin.com/sites/sections/106f217e-e46e-48ab-ab78-4a8be59a2023) · [Deel](https://mobbin.com/sites/sections/a1575033-e4c2-4a82-b90f-a9cb86cf8763) · [Intercom services](https://mobbin.com/sites/sections/6aa10dc8-88e4-45d3-bfdb-632f5f688f20) |
| Client stories | [Grammarly](https://mobbin.com/sites/sections/12e0e749-e85c-4006-a8e7-33e397d7cd86) · [Vercel](https://mobbin.com/sites/sections/3534dc3e-a1a5-456e-ba6f-f423b4e56f34) · [Amplemarket](https://mobbin.com/sites/sections/887f98cc-5dbf-4655-860e-bdd5faaeee19) · [Zendesk](https://mobbin.com/sites/sections/478fd721-dc82-4e3a-a65b-43cccab6d19e) |
| Process steps | [Upwork Talent Scout](https://mobbin.com/sites/sections/9e3f57fc-198b-48ee-8ce9-fe488251d984) · [Fluz](https://mobbin.com/sites/sections/ed68ef39-7f40-4c35-9126-9a28002a8153) · [United Carriers](https://mobbin.com/sites/sections/21cf0851-381d-4fb1-a6fa-a22d22bb100b) |
| Contact sales | [Webflow](https://mobbin.com/sites/sections/87a2d31e-7955-4ab1-961c-086ba5f43f62) · [Framer](https://mobbin.com/sites/sections/cf2cd4d3-fc26-47d2-8b25-0c92f59b3758) · [ReadMe](https://mobbin.com/sites/sections/fc18984b-8b57-4960-b3c7-ffa9b054666f) |
| Course page | [Sketch](https://mobbin.com/sites/sections/61ccddb2-20f8-47a6-aa81-6c76b2ade4c3) · [Webflow University](https://mobbin.com/sites/sections/4e89212b-95fd-4d19-8e01-6bc61bcd804a) |
