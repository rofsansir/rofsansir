import { HelpCircle, Search, Users, Heart } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import FAQItem from '../../../components/FAQItem';
import SEO from '../../../components/SEO/SEO';
import StructuredData from '../../../components/SEO/StructuredData';
import { FAQS } from '../../../data/faq';

type Category = 'student' | 'parent';

const FAQPage: React.FC = () => {
    const [category, setCategory] = useState<Category>('parent');
    const [query, setQuery] = useState('');

    const entries = category === 'student' ? FAQS.student : FAQS.parent;

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return entries;
        return entries.filter(
            (e) =>
                e.question.toLowerCase().includes(q) ||
                e.answer.toLowerCase().includes(q) ||
                (e.enSummary?.toLowerCase().includes(q) ?? false),
        );
    }, [entries, query]);

    // Flatten ALL FAQs for FAQPage structured data (Google can use all of them).
    const allForSchema = useMemo(
        () => [...FAQS.student, ...FAQS.parent],
        [],
    );

    return (
        <>
            <SEO path="/faq" />
            <StructuredData type="organization" />
            <StructuredData type="faq" data={allForSchema} />

            <div className="min-h-screen bg-slate-50 pt-24">
                {/* Hero */}
                <section className="bg-white py-16">
                    <div className="mx-auto max-w-3xl space-y-4 px-6 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-2 text-xs font-black tracking-widest text-brand-blue uppercase">
                            <HelpCircle className="h-4 w-4" />
                            Frequently Asked Questions
                        </div>
                        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-brand-navy md:text-5xl">
                            Answers for{' '}
                            <span className="text-brand-blue">
                                Students &amp; Parents
                            </span>
                        </h1>
                        <p className="text-lg text-brand-navy/70">
                            Everything you need to know about O Level Bengali —
                            the exam, the preparation, and what to expect with
                            Rofsan Sir. Can&apos;t find your answer?{' '}
                            <Link
                                to="/contact"
                                className="font-semibold text-brand-blue hover:underline"
                            >
                                Ask us directly
                            </Link>
                            .
                        </p>
                    </div>
                </section>

                {/* Controls */}
                <section className="mx-auto -mt-8 max-w-3xl px-6">
                    {/* Category toggle */}
                    <div className="mb-6 flex justify-center">
                        <div className="inline-flex rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
                            <button
                                onClick={() => setCategory('parent')}
                                className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-all ${
                                    category === 'parent'
                                        ? 'bg-brand-blue text-white shadow'
                                        : 'text-brand-navy hover:bg-brand-blue/10'
                                }`}
                            >
                                <Heart className="h-4 w-4" />
                                For Parents
                            </button>
                            <button
                                onClick={() => setCategory('student')}
                                className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-all ${
                                    category === 'student'
                                        ? 'bg-brand-blue text-white shadow'
                                        : 'text-brand-navy hover:bg-brand-blue/10'
                                }`}
                            >
                                <Users className="h-4 w-4" />
                                For Students
                            </button>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="relative mb-2">
                        <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder={`Search ${category === 'parent' ? 'parent' : 'student'} questions…`}
                            className="w-full rounded-2xl border border-slate-200 bg-white py-4 pr-4 pl-12 text-brand-navy shadow-sm transition-all placeholder:text-slate-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none"
                        />
                    </div>
                    <p className="mb-6 text-center text-xs font-medium text-slate-400">
                        Showing {filtered.length} of {entries.length} questions
                    </p>

                    {/* List */}
                    <div className="pb-8">
                        {filtered.length > 0 ? (
                            filtered.map((entry, i) => (
                                <FAQItem
                                    key={`${category}-${i}`}
                                    question={entry.question}
                                    answer={entry.answer}
                                    enSummary={entry.enSummary}
                                    defaultOpen={filtered.length === 1}
                                />
                            ))
                        ) : (
                            <div className="rounded-[32px] border border-slate-100 bg-white px-8 py-12 text-center">
                                <p className="text-brand-navy/70">
                                    No questions match &ldquo;{query}&rdquo;.
                                </p>
                                <Link
                                    to="/contact"
                                    className="mt-3 inline-block font-semibold text-brand-blue hover:underline"
                                >
                                    Contact us with your question →
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-white py-16">
                    <div className="mx-auto max-w-3xl px-6">
                        <div className="rounded-[32px] bg-brand-navy px-8 py-10 text-center text-white shadow-2xl">
                            <h2 className="font-heading text-2xl font-extrabold md:text-3xl">
                                Still have a question?
                            </h2>
                            <p className="mt-2 text-slate-300">
                                Talk to Rofsan Sir directly — we usually reply
                                within a few hours.
                            </p>
                            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                                <Link
                                    to="/contact"
                                    className="rounded-2xl bg-brand-blue px-6 py-3 text-sm font-bold transition-all hover:-translate-y-0.5 hover:bg-brand-blue-light"
                                >
                                    Contact Us
                                </Link>
                                <a
                                    href="https://wa.me/8801948116595"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-bold transition-all hover:bg-white/10"
                                >
                                    WhatsApp Rofsan Sir
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default FAQPage;
