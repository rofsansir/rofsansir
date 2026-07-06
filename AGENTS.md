# AGENTS.md

Project instructions for the **Rofsan Sir — O Level Bengali Coaching Platform**.
Read this first, then read [`docs/AGENTS.md`](docs/AGENTS.md) for the full Laravel
Boost guidelines (PHP/Pest/Inertia/Tailwind/Wayfinder conventions) — follow both.

## Stack

- **Backend:** Laravel 12 (PHP 8.2+), Laravel Fortify + Sanctum (session-based SPA auth),
  Laravel Wayfinder, Google API client (Drive), Laravel DomPDF, Laravel Notify.
- **Frontend:** React 19, TypeScript 5, Tailwind CSS v4, Vite 7.
- **Auth extras:** Firebase Auth on the client (`resources/js/config/firebase.ts`).
- **UI:** shadcn/ui ("new-york" style) + Radix primitives + lucide-react.

## Architecture (read carefully — this is a hybrid)

Two rendering paths coexist in one codebase:

1. **Main public + student app = React Router SPA.** Vite entry is
   `resources/js/index.tsx`, mounted into a Blade `app` view served by the catch-all
   route in `routes/web.php`. Client-side routing via `react-router-dom` v7 lives in
   `resources/js/router` and `resources/js/features/*`.
2. **Admin + Fortify auth views = Inertia v2.** `AdminController` and
   `app/Providers/FortifyServiceProvider.php` use `Inertia::render(...)`.

When adding a page, match the path it belongs to:
- Public/student pages → React Router SPA (`resources/js/features/...`).
- Admin/Fortify pages → Inertia (`Inertia::render(...)`).

Wayfinder regenerates `resources/js/actions/` and `resources/js/routes/` from
controllers/named routes — import named functions from there (tree-shakable) and run
`php artisan wayfinder:generate` after route changes if the Vite plugin misses them.

## Common commands

```bash
# Full stack dev (php artisan serve + vite, concurrently)
composer run dev

# Frontend only
npm run dev          # vite dev server
npm run build        # production build
npm run types        # tsc --noEmit  (typecheck)
npm run lint         # eslint . --fix
npm run format       # prettier --write resources/

# Backend
php artisan serve
php artisan test --compact                       # all Pest tests
php artisan test --compact --filter=Name          # focused run
vendor/bin/pint --dirty                           # format changed PHP files (fix, not --test)

# First-time setup (composer install, key:generate, migrate, npm, build)
composer run setup

# Docker
./local-docker.sh        # local dev containers
docker compose up        # or docker-compose.yml
```

If a frontend change isn't visible, the user likely needs `npm run dev` / `npm run build`
or `composer run dev` — ask first.

## Project layout

```
app/
  Http/Controllers/   Admin, Student, DriveAccess, Contact, Home,
                      PublicResource, Sitemap, *Pdf, Settings/, Api/
  Http/Requests/      Form Request validation classes (use these, not inline rules)
  Models/             User, Routine, PaymentPlan, PastPaper, ContactSubmission,
                      NewsletterSubscriber, StudentEmail, StudentDriveFolder,
                      AccessLog, BlockedGmail
  Providers/          FortifyServiceProvider (registers auth views/middleware)
  Services/ Actions/  Supporting PHP classes
routes/               web.php (SPA catch-all), api.php, console.php, settings.php
resources/js/
  index.tsx           SPA entry (mounts <App/> under AuthProvider)
  app.tsx             Router + route tree
  features/           admin/ auth/ public/ student/  (feature-scoped code)
  components/ui/      shadcn/ui components (alias @/components/ui)
  layouts/ contexts/ router/ data/ config/
  actions/ routes/    Wayfinder-generated (TS API to Laravel routes)
resources/views/      app.blade (SPA shell), emails/, pdfs/
database/             migrations/ seeders/ factories/ (uses SQLite by default)
config/               google.php, fortify.php, dompdf.php, notify.php, ...
docs/                 project docs + AGENTS.md (Laravel Boost guidelines)
tests/                Feature/ Unit/ (Pest)
```

Path alias: `@` → `resources/js` (see `vite.config.ts` and `components.json`).

## Conventions

- **PHP:** Laravel 12 streamlined structure (middleware/exceptions in
  `bootstrap/app.php`, providers in `bootstrap/providers.php`, no `Kernel.php`).
  Use constructor promotion, explicit return types, Form Requests for validation,
  Eloquent over `DB::`. Run `vendor/bin/pint --dirty` before finishing.
- **TypeScript/React:** follow siblings for structure and naming. Use named
  imports for Wayfinder functions. Run `npm run types` and `npm run lint` before
  finishing.
- **Tailwind v4:** CSS-first config via `@theme` in `resources/css/app.css`; no
  `tailwind.config.js` content array needed. Use gap utilities, not margins, for
  lists. Match existing dark-mode support.
- **Tests:** Pest only (`php artisan make:test --pest`). Write/update a test for
  every change and run the minimal relevant subset. Never delete tests without
  approval. Factories + seeders exist for models — reuse them.
- **Config:** read env vars via `config(...)`, never `env(...)` outside config files.
- **Dependencies:** do not add/change composer or npm dependencies without approval.
- **Secrets:** `.env` is gitignored and present locally — never print or commit it.
  `.env.example` is the template.

## Notes for agents

- Be concise; skip obvious explanations.
- Don't create documentation files unless explicitly asked.
- Prefer reuse over new code; check sibling files before adding components.
- When unsure of an Artisan command's options, check with the list-artisan/tinker
  tools (Boost) or `php artisan list` before guessing.
