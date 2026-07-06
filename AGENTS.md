# AGENTS.md

Project guide for AI coding agents working on **Rofsan Sir — Static Site**.

## What this project is

A fully static, public-facing marketing & resources website for **Rofsan Sir**
(Rofsan Khan), a CAIE O Level Bengali Examiner, author, and educator. The site
promotes his books, courses, past papers, examiner tips, and admission — with no
backend or database required at runtime. All dynamic data is committed as static
JSON/TS in `resources/js/data/`.

It is a Vite + React SPA (not SSR) served as static assets.

## Tech stack

- **Build:** Vite 7 (`vite.config.ts`), entry `index.html` → `resources/js/index.tsx`
- **Framework:** React 19 with `react-router-dom` v7 (BrowserRouter), TypeScript
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite` + `resources/css/new-frontend.css`
  (`@theme` block defines brand tokens). Also a `tailwind.config.js` for legacy content globs/animations.
- **UI primitives:** shadcn-style (config in `components.json`, style `new-york`,
  alias `@/*` → `resources/js/*`) — note `@/components/ui` is currently **empty**.
  Radix UI + Headless UI + `lucide-react` icons are installed.
- **SEO:** `react-helmet-async` (`SEO`/`StructuredData` components).
- **Notifications:** `react-hot-toast`.
- **Firebase:** configured in `resources/js/config/firebase.ts` (auth + analytics
  + storage), reading `VITE_FIREBASE_*` env vars. Largely unused by the static
  public site but wired in.

## Project layout

```
index.html                       # Vite entry, mounts /resources/js/index.tsx
vite.config.ts                   # alias '@' -> resources/js; pins single react instance
resources/
  css/new-frontend.css           # Tailwind v4 @theme + global styles
  js/
    index.tsx                    # ReactDOM root (StrictMode)
    app.tsx                      # Router + layout shell (Navbar/Footer/Toaster/FABs)
    constants.tsx                # BOOKS, RESOURCES, QUIZ_QUESTIONS
    types.ts                     # Book, Resource, QuizQuestion, (PastPaperRow in data/)
    layouts/                     # Navbar.tsx, Footer.tsx
    components/                  # ScrollToTop, YouTubeEmbed, VideoCard, SEO/*
    features/public/
      pages/                     # HomePage, AboutPage, ClassVIII/IX/XPage,
                                 # BookDetailPage, PastPaperDetailPage,
                                 # ResourcesPage, RoutinePage, ExaminerTipsPage,
                                 # ContactPage, Privacy/Terms pages
      components/                # Hero, Stats, Bookshelf, Quiz, AdmissionNow
    data/                        # STATIC content (no DB at runtime)
      bookData.json              # full per-book detail content
      pastPapers.json + .ts      # past-paper rows (typed export)
      videoData.json, blogContent.json (+ .backup)
    config/firebase.ts
public/
  logos/, assets/                # favicon, book covers, class banners,
                                 # past-paper PDFs under assets/past-paper/<year>/
```

## Routes (defined in `resources/js/app.tsx`)

`/`, `/about`, `/routine`, `/courses` (→ Routine), `/resources`,
`/past-papers/:slug`, `/tips`, `/tips/:id`, `/class-8|class-viii`,
`/class-9|class-ix`, `/class-10|class-x`, `/contact`,
`/privacy-policy`, `/terms-of-service`, and individual book slugs:
`/o-level-bengali-{basic,composition,practice,revision,foundation}-plus`.
Unknown paths redirect to `/`.

Navbar + Footer are always rendered (the `shouldHideNavbar` / `isAdminDashboard`
flags are hard-coded `false` — leftover from a prior admin dashboard, kept for
reference). Floating WhatsApp "Admission Query" + back-to-top buttons are global.

## Common tasks & commands

```bash
npm run dev        # local dev server (Vite)
npm run build      # production build -> dist/
npm run preview    # preview built dist/
npm run types      # tsc --noEmit        — typecheck only, run before committing
npm run lint       # eslint . --fix
npm run format     # prettier --write resources/
npm run format:check
```

`npm run types` is the fastest correctness gate — prefer it over a full build.

## Conventions to follow

- **Add new pages** under `resources/js/features/public/pages/`, register a route
  in `app.tsx`, and add nav entries in `layouts/Navbar.tsx` / `Footer.tsx` as needed.
- **Branding colors**: use the Tailwind `brand-*` tokens
  (`brand-navy`, `brand-blue`, `brand-blue-light/-medium/-dark`, `brand-white`, `brand-dark`).
  Fonts: `font-heading` (Poppins/Montserrat), `font-body` (Inter). Don't hardcode hex.
- **Content is static.** New books → add to `constants.tsx` (BOOKS) **and**
  `data/bookData.json`; new past papers → append to `data/pastPapers.json`
  (see the regenerate-from-SQLite note at the top of `data/pastPapers.ts`).
- **Path alias:** import via `@/...` maps to `resources/js/...` (per `vite.config.ts`).
- **TypeScript strict** — keep `types.ts` / inline types in sync; run `npm run types`.
- **Formatting:** Prettier with `prettier-plugin-tailwindcss` + organize-imports
  (see `.prettierrc`). Format scope is `resources/` only.
- SEO: every page should render the `SEO` component (and `StructuredData` where
  relevant) — follow `HomePage.tsx` as the reference.

## Notes / gotchas

- The project previously had an admin dashboard + Firebase backend; remnants
  (`shouldHideNavbar`, firebase config, `blogContent.json.backup`) remain but the
  current deployment is intentionally **static-only**.
- `dist/` is committed/present locally but gitignored — treat it as build output.
- `resources/js/data/pastPapers.json` ships PDF references under
  `public/assets/past-paper/<year>/...`; keep paths consistent when adding papers.
