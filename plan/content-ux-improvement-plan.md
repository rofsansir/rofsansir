# Content & UX Improvement Plan — rofsansir.com

**Prepared by:** Senior UI/UX + Content Strategist (with a Parent/Student hat on)
**Date:** 2026-07-06
**Scope:** Public marketing site (React SPA). All findings below are grounded in
the actual code/content as of this commit — references cite real files/lines.

---

## 0. How to read this document

Each item is written from **two lenses**:

- 🎨 **UX lens** — design, information architecture, conversion, accessibility.
- 👨‍👩‍👧 **Parent/Student lens** — what a paying parent or anxious student
  actually needs to decide *“Is this the right teacher for me / my child, and
  how do I enroll?”*

Severity legend:
- 🔴 **P0 — fix now** (breaks trust, blocks conversion, or is factually wrong)
- 🟠 **P1 — fix this sprint** (clear uplift, low effort)
- 🟡 **P2 — next quarter** (strategic / content-heavy)

---

## 1. Executive summary

The site is visually polished and clearly *authored by an examiner* — that’s a
genuine differentiator. But from a **parent trying to make a decision**, three
things are working against conversion today:

1. **Missing decision-critical information.** No pricing/fees, no clear
   step-by-step enrollment, no book purchase links, no verifiable proof behind
   headline claims (98% A*, 3000+ students). Parents in this market treat
   *absence of price = expensive or evasive*.
2. **Content is exhaustive but not scannable.** `AboutPage` is **1,458 lines**
   with ~20 `<h2>` sections. Nobody reads that. The value is buried.
3. **Broken / placeholder content is live**, which quietly destroys
   credibility: all 6 “premium resources” link to `'#'`, two `{/* TODO: replace
   the YouTube video ID */}` blocks are still in `HomePage`/`AboutPage`, and
   `ContactPage` says “O & **A** Level Bengali” while the entire site is O Level.

The good news: most of this is **content and IA work, not rebuilding**. The plan
below is prioritized so a small effort yields a large trust + conversion lift.

---

## 2. Top findings (evidence-based)

### 2.1 🔴 P0 — Broken / placeholder content shipped to production

| Where | Problem |
|---|---|
| `resources/js/constants.tsx` | All **6 `RESOURCES`** entries have `url: '#'` — clicking “Download” does nothing. |
| `HomePage.tsx:190`, `AboutPage.tsx:244` | `{/* TODO: replace the YouTube video ID below with the real one */}` — placeholder video on the two most important pages. |
| `ContactPage.tsx:23` | Copy says **“O & A Level Bengali classes”** — site is O Level only. Inconsistent and confusing. |
| `Hero.tsx:100`, `ClassVIIIPage.tsx:109`, `AboutPage.tsx` (×5), `ExaminerTipsPage.tsx:201/213` | Images use **relative paths** `../assets/...`. These only resolve correctly at the root depth; they break on deeper routes and are fragile. Must be absolute `/assets/...`. |

### 2.2 🔴 P0 — No pricing, no enrollment flow

- `RoutinePage.tsx` defines `monthly_fee / total_fee / admission_fee / books_fee`
  types but the data fetch is stubbed (“those tables were empty”) and **no price
  is ever shown**. The three program cards have features but **no fee, no
  schedule, no “Enroll” next step**.
- There is **no “How to enroll” page or section** — just a floating WhatsApp
  button and an external `edutechs.app` admission link in the hero. A parent has
  no idea what happens after they click.
- 👨‍👩‍👧 *“I won’t WhatsApp a stranger to ask ‘কত টাকা?’ (how much?). Put the
  fee range on the site.”*

### 2.3 🟠 P1 — Claims without proof (trust deficit)

Headline stats — **98% A\* & A**, **3000+ students**, **8+ years**, **5 books**,
**“Award-Winning”** (Footer) — are stated but never substantiated. Skeptical
parents (and Google’s E-E-A-T guidelines) want:

- **Named, photographed, verifiable results** (e.g., “2024 batch: 42 students,
  31 A\*, 9 A”) — not a single rounded number.
- **Cambridge Examiner ID / credential proof** (redacted cert image, or
  “Cambridge Assessment Examiner #… since 20XX”).
- **Media features / school partnerships / logos** (the `public/logos/` folder
  has Cambridge/Edexcel/Elite logos already — they’re barely used).

### 2.4 🟠 P1 — Information architecture is confusing

- Nav has **“Courses & Admission” → `/courses`**, but `/courses` just redirects
  to `/routine` (`app.tsx`). So “Courses” and “Routine” are the *same page*
  under two names. Parents can’t find distinct course detail.
- **Class 8 / 9 / 10 pages exist** (`ClassVIIIPage` etc.) but are **only in the
  footer**, not the main nav — the most important funnel (pick your class) is
  hidden.
- The floating **“Admission Query” WhatsApp button** + hero **“Start Learning”**
  + multiple section CTAs + footer CTAs **compete** and dilute the primary action.

### 2.5 🟠 P1 — Content volume ≠ content value

- `AboutPage` = **1,458 lines / ~20 H2s**. No table of contents, no anchor nav,
  no progressive disclosure. A parent on mobile will bounce.
- `ExaminerTipsPage` = **987 lines** mixing articles, videos, FAQs (student +
  parent), and a tip carousel — **too many jobs on one URL**.
- Testimonials (`HomePage`) are good (9 entries) but use `avatar: '../assets/students/...'`
  (relative path) and lack **grade proof, school name, year** verification.

### 2.6 🟡 P2 — Accessibility & polish

- Navbar links use `text-xs` (12px) — below comfortable tap-target/reading size.
- Several `image-placeholder` divs suggest images that may be missing — verify
  every `public/assets/...` referenced actually exists (audit step below).
- Bengali copy appears without an English gloss for English-medium families who
  can’t read Bengali well (ironic for the target audience). E.g.,
  `ExaminerTipsPage` parent FAQs are Bengali-only.
- Hero H1 mixes `text-8xl`/`text-10xl` — risk of horizontal overflow on small
  devices; needs `clamp()`/responsive testing.
- Color contrast: `brand-blue (#006DD6)` on white is okay, but `text-slate-500`
  body copy on `slate-50` sections can fail WCAG AA for small text.

---

## 3. Prioritized roadmap

### 🚀 Phase 0 — Trust & Truth (1–2 days, do immediately)
*Goal: stop leaking credibility. Mostly content fixes, near-zero dev.*

- [ ] **P0** Replace the 6 `RESOURCES` `url:'#'` with real PDF links or remove
      the cards. (`constants.tsx`)
- [ ] **P0** Put the **real YouTube video ID** in `HomePage` and `AboutPage`
      (replace both TODO blocks), or delete the video sections until ready.
- [ ] **P0** Fix **“O & A Level”** → **“O Level”** everywhere. (`ContactPage`)
      Run a repo-wide grep for `A Level`/`A & A Level` to catch others.
- [ ] **P0** Convert all `../assets/...` image refs to absolute `/assets/...`
      (Hero, Class pages, About, ExaminerTips). Add an ESLint/grep guard.
- [ ] **P0** Audit every `public/assets/**` path referenced in code actually
      exists; remove or replace `image-placeholder` shells that have no image.

### 💎 Phase 1 — Parent Decision Pack (1–2 weeks)
*Goal: give parents everything they need to say yes without a phone call.*

- [ ] **P1 — Add a “Fees & Admission” section** to `RoutinePage`: per-batch
      monthly fee range, admission fee, what’s included, payment methods
      (bKash/Nagad/cash), and a clear 3-step “How to enroll” flow.
      Use the existing `PaymentPlan` type — just fill it with real (or
      range) data.
- [ ] **P1 — Results/proof page (`/results`)**: year-by-year breakdown table
      (batch size, A\* count, A count), a few scanned result slips (with
      consent/redaction), and the Cambridge examiner credential. This is the
      single biggest trust lever.
- [ ] **P1 — Fix IA / nav**:
      - Replace single “Courses & Admission” with a **“Classes” dropdown**:
        Class 8 · Class 9 · Class 10, plus “Fees & Admission”.
      - Make `/courses` a real **course overview** page (cards linking to each
        class page), not a silent redirect to Routine.
      - Demote competing CTAs: keep **one** primary CTA (“Book a Free
        Consultation” or “Enroll”) site-wide; move WhatsApp to secondary.
- [ ] **P1 — Strengthen testimonials**: add **school, year, grade, and a real
      photo** (with consent) to each; fix relative avatar paths. Add 2–3
      **video testimonials** (short clips) — far more persuasive than text.
- [ ] **P1 — Book purchase links**: each book (`BookDetailPage`) needs a
      “Where to buy” block (Rokomari / Amazon / local bookstores / contact to
      order) with real links. Right now there’s no path to purchase.

### 📝 Phase 2 — Content Restructure (2–4 weeks)
*Goal: make the existing great content actually consumable.*

- [ ] **P2 — Break up `AboutPage`** into a tight **/about** (story, credential,
      philosophy, 1 video, CTA) ≈ 1 screen + 2 scrolls. Move the deep material
      (teaching methodology, detailed achievements) to sub-sections with a
      **sticky table of contents** or separate `/methodology` page.
- [ ] **P2 — Split `ExaminerTipsPage`** into:
      - `/tips` = article/blog index (cards, categories, search).
      - `/tips/:slug` = single article (you already prerender these).
      - `/faq` = the student + parent FAQs as a dedicated, searchable FAQ
        (with Bengali + English side by side).
- [ ] **P2 — Bilingual glosses**: for English-medium families, every Bengali
      FAQ/section should have an English summary line. This is literally your
      customer base.
- [ ] **P2 — Content depth for SEO**: each class page (8/9/10) and the home
      page should answer the questions parents Google: *“Is O Level Bengali
      compulsory?”, “Best O Level Bengali tutor Dhaka”, “O Level Bengali 3204
      syllabus”, “paper 1 vs paper 2”*. Add a concise FAQ block per page.

### 🎯 Phase 3 — Conversion & Growth (ongoing)
- [ ] **P2 — Lead capture that respects users**: the Resources page currently
      gates “premium” downloads behind an email modal. Replace with **optional**
      email capture (“Get notified of new papers”) and keep downloads free —
      friction here costs more leads than it gains.
- [ ] **P2 — Free diagnostic / “Is my child ready?” mini-quiz**: the `Quiz`
      component exists — promote it as a lead magnet on the home page
      (“Take a 2-min Bengali readiness check → get personalized feedback”).
- [ ] **P2 — Email newsletter / blog cadence**: the `blogContent.json` has 8
      articles; commit to publishing 1–2/month (parents love “Examiner’s note”
      content) for SEO + retention.
- [ ] **P3 — Analytics**: add privacy-respecting analytics (Plausible/Umami via
      Cloudflare) to measure which pages/CTAs convert, then iterate.

---

## 4. Page-by-page quick wins

| Page | Do this first |
|---|---|
| **Home** (`HomePage`) | Real hero video; one clear primary CTA; proof strip (logos + result line) above the fold; fix testimonial avatar paths. |
| **About** (`AboutPage`) | Cut to ~⅓ length; add sticky ToC; surface the examiner credential + a results table near the top. |
| **Classes 8/9/10** | Add to main nav; each needs: syllabus coverage, weekly schedule, fee, “who this is for”, enroll CTA. |
| **Routine / Courses** | Show **fees**; clarify Courses ≠ Routine; add 3-step enrollment; payment methods. |
| **Resources** | Fix dead `'#'` links; make premium gating optional; add filter by Paper 1 / Paper 2 / year (UI partly exists). |
| **Past papers** | Great asset — add a “Download all (year)” button and link each paper to a related mark scheme. |
| **Tips** | Split into blog index + single article + dedicated FAQ; bilingual summaries. |
| **Books** | Add **buy links** per book + “look inside” sample PDF. |
| **Contact** | Add a real **form** (name, class, message) → email/WhatsApp; fix “O & A Level”; emphasize WhatsApp. |

---

## 5. New pages / content to create

1. **`/results`** — Verified year-by-year results + examiner credential. *(highest trust ROI)*
2. **`/fees`** (or a Fees section on Routine) — Transparent pricing + what’s included.
3. **`/enroll`** or an “How to Enroll” block — 3 steps: 1) Free consultation → 2) Placement → 3) Join batch.
4. **`/faq`** — Consolidated, bilingual, searchable FAQ (pull from `ExaminerTipsPage`).
5. **`/blog`** (rename/expand Tips) — Ongoing examiner articles for SEO + authority.

---

## 6. Measurement (how we’ll know it worked)

- **Conversion**: consultation form submissions / week (baseline = today’s 0, since there’s no form).
- **Engagement**: avg. scroll depth on Home + About (expect About bounce to drop after trim).
- **Resource downloads**: count after fixing `'#'` links.
- **SEO**: impressions/CTR in Google Search Console for “O Level Bengali tutor Dhaka”, “3204 past papers”, etc.
- **Tools**: add Plausible/Umami (via Cloudflare) + keep using Search Console.

---

## 7. Suggested execution order (if you do nothing else)

1. **Phase 0** entirely (1–2 days) — removes the “is this site maintained?” doubt.
2. **Fees + Results page + nav fix** (Phase 1 core) — biggest parent-conversion lift.
3. Then chip away at Phase 2 content restructure as content becomes available.

> **One-line takeaway for the owner:**
> *The design is strong and the examiner authority is real — but parents can’t
> decide without **prices, proof, and a clear path to enroll**. Fix those three
> and the site converts.*
