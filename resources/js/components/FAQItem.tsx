import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

import { FAQEntry } from '../data/faq';

interface FAQItemProps {
    question: string;
    answer: string;
    /** English summary shown under Bengali answers (English-medium families). */
    enSummary?: string;
    /** Override the default open/closed control. */
    defaultOpen?: boolean;
}

/**
 * Reusable, accessible FAQ accordion item.
 *
 * When `enSummary` is provided (i.e. the answer is in Bengali), an English
 * one-line gloss is rendered so English-medium parents aren't locked out.
 */
const FAQItem: React.FC<FAQItemProps> = ({
    question,
    answer,
    enSummary,
    defaultOpen = false,
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div
            className={`mb-4 overflow-hidden rounded-[32px] transition-all duration-300 ${
                isOpen
                    ? 'bg-brand-navy text-white shadow-2xl'
                    : 'border border-slate-100 bg-white hover:border-brand-blue/30'
            }`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left focus:outline-none md:px-8"
            >
                <span
                    className={`text-base font-bold md:text-lg ${
                        isOpen ? 'text-white' : 'text-brand-navy'
                    }`}
                >
                    {question}
                </span>
                {isOpen ? (
                    <ChevronUp className="h-6 w-6 shrink-0 text-brand-blue-light" />
                ) : (
                    <ChevronDown className="h-6 w-6 shrink-0 text-slate-300" />
                )}
            </button>
            <div
                className={`bengali-text overflow-hidden px-6 transition-all duration-500 ease-in-out md:px-8 ${
                    isOpen ? 'max-h-[600px] pb-8 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <p
                    className={`whitespace-pre-line leading-relaxed font-medium ${
                        isOpen ? 'text-slate-300' : 'text-slate-500'
                    }`}
                >
                    {answer}
                </p>
                {enSummary && (
                    <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed font-medium text-brand-blue-light/90">
                        <span className="font-bold uppercase tracking-wider">
                            In English:{' '}
                        </span>
                        {enSummary}
                    </p>
                )}
            </div>
        </div>
    );
};

/** Convenience wrapper that takes a full FAQEntry. */
export const FAQItemFromEntry: React.FC<{
    entry: FAQEntry;
    defaultOpen?: boolean;
}> = ({ entry, defaultOpen }) => (
    <FAQItem
        question={entry.question}
        answer={entry.answer}
        enSummary={entry.enSummary}
        defaultOpen={defaultOpen}
    />
);

export default FAQItem;
