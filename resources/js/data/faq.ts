/**
 * Single source of truth for the site's FAQs (Students + Parents).
 *
 * Data lives in `faq.json` so it can be read by both the React app (here)
 * and the Node prerender script (to bake FAQPage JSON-LD into static HTML).
 *
 * Used by:
 *   - /faq page (resources/js/features/public/pages/FAQPage.tsx)
 *   - Examiner Tips page (resources/js/features/public/pages/ExaminerTipsPage.tsx)
 *   - the FAQ JSON-LD structured data for SEO
 *
 * NOTE on bilingual glosses (`enSummary`):
 * The target audience is English-medium families, many of whom cannot read
 * Bengali confidently. Every Bengali answer carries a short English summary so
 * no parent is locked out of the information.
 */

import faqData from './faq.json';

export interface FAQEntry {
    question: string;
    answer: string;
    /** English summary shown under Bengali answers (English-medium families). */
    enSummary?: string;
}

export interface FAQData {
    student: FAQEntry[];
    parent: FAQEntry[];
}

export const FAQS: FAQData = faqData as FAQData;

export default FAQS;
