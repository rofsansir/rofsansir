import {
    CheckCircle,
    ChevronDown,
    ChevronUp,
    Download,
    Eye,
    FileText,
    Lock,
    Mail,
    MapPin,
    Spotlight,
    Phone,
} from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ExtendedResource, RESOURCES } from '../../../constants';
import SEO from '../../../components/SEO/SEO';
import { AdmissionNow } from '../components/AdmissionNow';
import Bookshelf from '../components/Bookshelf';
import { getPastPapersGrouped } from '@/data/pastPapers';

interface PastPaperFile {
    id: string;
    name: string;
    size: number;
    viewUrl: string;
    downloadUrl: string;
    modifiedTime: string;
    paperType: string;
    slug: string;
}

interface PastPaperYear {
    year: string;
    folderId: string;
    files: PastPaperFile[];
}

const ResourcesPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [showCaptureModal, setShowCaptureModal] =
        useState<ExtendedResource | null>(null);
    const [email, setEmail] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeResourceCategory, setActiveResourceCategory] = useState('All');
    const [premiumVisibleCount, setPremiumVisibleCount] = useState(4);
    const [papersVisibleCount, setPapersVisibleCount] = useState(4);

    // Past papers from Google Drive
    const [pastPapersData, setPastPapersData] = useState<PastPaperYear[]>([]);
    const [loadingPastPapers, setLoadingPastPapers] = useState(true);
    const [expandedYears, setExpandedYears] = useState<Set<string>>(new Set());
    const [visibleYearsCount, setVisibleYearsCount] = useState(8); // Show 4 years initially (same as premium resources)

    // Toggle year expansion
    const toggleYear = (year: string) => {
        setExpandedYears((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(year)) {
                newSet.delete(year);
            } else {
                newSet.add(year);
            }
            return newSet;
        });
    };

    // Show more years
    const handleShowMoreYears = () => {
        setVisibleYearsCount((prev) => prev + 8); // Load 4 more at a time (same as premium resources)
    };

    // Past papers loaded from static JSON export (no backend needed)
    useEffect(() => {
        setPastPapersData(getPastPapersGrouped());
        setLoadingPastPapers(false);
    }, []);

    const filteredResources =
        activeFilter === 'All'
            ? RESOURCES
            : RESOURCES.filter((r) => r.category === activeFilter);

    const premiumDownloads = [
        {
            id: 1,
            title: 'O Level Letter writing format & Sample answer',
            filename: 'Letter writing format & sample answer, Bengali with Rofsan Sir.pdf',
            category: 'Paper 1',
        },
        {
            id: 2,
            title: 'O Level Bengali Letter & Report writing Practice Sheet',
            filename: 'O Level Bengali Letter & Report Practice.pdf',
            category: 'Paper 1',
        },
        {
            id: 3,
            title: 'O Level Bengali Essay Writing (Science Related)',
            filename: 'O Level Bengali Essay Examples (Science).pdf',
            category: 'Paper 1',
        },
        {
            id: 4,
            title: 'O Level Bengali Idioms and Proverbs Practice',
            filename: 'প্রবাদ প্রবচন- স্বর.pdf',
            category: 'Paper 2',
        },
        {
            id: 5,
            title: 'Shor Shondhi Practice - Formula 1',
            filename: 'স্বর সন্ধি অনুশীলন -formula 1.pdf',
            category: 'Paper 2',
        },
        {
            id: 6,
            title: 'Shandhi Exam Question Paper (100 Marks)',
            filename: 'QP Shandhi Exam (all) 100 Marks.pdf',
            category: 'Paper 2',
        },
        {
            id: 7,
            title: 'স্বরসন্ধি | সূত্র ১-২ | Specialised for O Level Candidates',
            filename: 'স্বরসন্ধি Prasantation Formula 1-6 by Rofsan Sir.pdf',
            category: 'Paper 2',
        },
        {
            id: 8,
            title: 'O Level Bengali Close Passage Practice',
            filename: 'O Level Bengali Letter & Report Practice (1).pdf',
            category: 'Paper 2',
        },
        {
            id: 9,
            title: 'O Level Bengali OE Comprehension Practice',
            filename: 'O Level Bengali OE Comprehension Practice.pdf',
            category: 'Paper 2',
        },
        {
            id: 10,
            title: 'O Level Bengali Sentence Transformation',
            filename: 'O Level Bengali Sentence Transformation.pdf',
            category: 'Paper 2',
        },
    ];

    const normalizedSearch = searchQuery.trim().toLowerCase();
    const filteredPremiumDownloads = premiumDownloads.filter((item) => {
        const matchesCategory =
            activeResourceCategory === 'All' ||
            item.category === activeResourceCategory;
        const matchesSearch =
            normalizedSearch.length === 0 ||
            item.title.toLowerCase().includes(normalizedSearch) ||
            item.description.toLowerCase().includes(normalizedSearch);
        return matchesCategory && matchesSearch;
    });

    const visiblePremiumDownloads = filteredPremiumDownloads.slice(
        0,
        premiumVisibleCount,
    );

    const hasMorePremium =
        premiumVisibleCount < filteredPremiumDownloads.length;

    const resourceCategories = [
        'All',
        ...new Set(premiumDownloads.map((item) => item.category)),
    ];

    const handleShowMorePremium = () => {
        setPremiumVisibleCount((current) => current + 4);
    };

    const handleSearchChange = (value: string) => {
        setSearchQuery(value);
        setPremiumVisibleCount(4);
        setPapersVisibleCount(4);
    };

    const handleCategoryChange = (category: string) => {
        setActiveResourceCategory(category);
        setPremiumVisibleCount(4);
        setPapersVisibleCount(4);
    };

    const handleCaptureSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);
            setTimeout(() => setShowCaptureModal(null), 2500);
        }, 1500);
    };

    return (
        <>
            <SEO path="/resources" />
            <div className="animate-fade-in-up min-h-screen pt-24">
            {/* Header Section */}
            <section className="relative overflow-hidden bg-brand-blue-dark py-24 text-white">
                <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
                    <div className="max-w-3xl space-y-8">
                        <div className="inline-flex items-center space-x-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-5 py-2">
                            <FileText className="h-4 w-4 text-white" />
                            <span className="text-xs font-black tracking-widest text-white uppercase">
                                Expert Resources
                            </span>
                        </div>
                        <h1 className="font-heading text-5xl font-extrabold tracking-tight md:text-7xl">
                            O Level Bengali Knowledge {' '}
                            <span className="text-brand-blue-light">Base</span>
                        </h1>
                        <p className="text-xl leading-relaxed text-slate-300">
                            Access a curated collection of study materials, past papers, and expert resources designed to strengthen your O Level Bengali preparation.
                        </p>
                    </div>
                </div>
                <div className="absolute top-0 right-0 h-full w-1/3 rounded-full bg-brand-blue/5 blur-[120px]"></div>
            </section>

            {/* Premium + Past Papers Downloads */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="space-y-10">
                        <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-extrabold text-brand-navy">
                                    Find the right resource
                                </h3>
                                <p className="text-sm text-slate-500">
                                    Search by title or description and filter by
                                    category.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(event) =>
                                            handleSearchChange(
                                                event.target.value,
                                            )
                                        }
                                        placeholder="Search resources..."
                                        className="w-full rounded-full border border-brand-navy/10 bg-white px-4 py-2.5 text-sm font-semibold text-brand-navy shadow-sm focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 md:w-64"
                                    />
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {resourceCategories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() =>
                                                handleCategoryChange(category)
                                            }
                                            className={`rounded-full border px-4 py-2 text-xs font-bold uppercase transition-all ${
                                                activeResourceCategory ===
                                                category
                                                    ? 'border-brand-blue bg-brand-blue text-white'
                                                    : 'border-brand-navy/10 bg-white text-brand-navy hover:border-brand-blue hover:text-brand-blue'
                                            }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-12 lg:grid-cols-2">
                            <div className="space-y-12">
                                <div className="space-y-6">
                                    <div className="mb-3 flex items-center gap-4">
                                        <div className="h-1 w-12 rounded-full bg-gradient-to-r from-brand-blue to-brand-navy"></div>
                                        <span className="text-sm font-black tracking-wider text-brand-blue uppercase">
                                            PREMIUM RESOURCES
                                        </span>
                                    </div>
                                    <h2 className="font-heading text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                                      CAIE Cambridge O Level Bengali (3204) Study Materials & Sample Answers
                                    </h2>
                                    <p className="text-lg text-slate-600">
                                        Download CAIE Cambridge O Level Bengali (3204) study materials, worksheets, and sample answers designed to strengthen your preparation and improve exam performance.
                                    </p>
                                </div>

                                <div className="grid gap-6">
                                    {visiblePremiumDownloads.map((pdf) => (
                                        <div
                                            key={pdf.id}
                                            className="group rounded-[32px] border border-brand-navy/10 bg-white p-6 shadow-sm transition-all hover:border-brand-blue/40 hover:shadow-lg"
                                        >
                                            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                                                <div className="flex flex-1 items-start gap-4">
                                                    <div className="rounded-2xl bg-brand-blue/10 p-4">
                                                        <FileText className="h-7 w-7 text-brand-blue" />
                                                    </div>
                                                    <div className="flex-1 space-y-3">
                                                        <h4 className="font-bengali text-lg font-black text-brand-navy transition-colors group-hover:text-brand-blue">
                                                            {pdf.title}
                                                        </h4>

                                                        <div className="flex flex-wrap items-center gap-3">
                                                            <span className="text-xs font-black tracking-wider text-brand-blue uppercase">
                                                                {pdf.category}
                                                            </span>
                                                            <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-bold text-brand-blue">
                                                                FREE
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap gap-3">
                                                    <a
                                                        href={`/assets/pdfs/${encodeURIComponent(pdf.filename)}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group/btn inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-white px-5 py-2.5 text-sm font-bold text-brand-navy transition-all hover:border-brand-blue hover:text-brand-blue"
                                                        onClick={(e) =>
                                                            e.stopPropagation()
                                                        }
                                                    >
                                                        <Eye className="h-4 w-4" />
                                                        <span className="hidden sm:inline">
                                                            View
                                                        </span>
                                                    </a>
                                                    <a
                                                        href={`/assets/pdfs/${encodeURIComponent(pdf.filename)}`}
                                                        download
                                                        className="group/btn inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-brand-navy"
                                                        onClick={(e) =>
                                                            e.stopPropagation()
                                                        }
                                                    >
                                                        <Download className="h-4 w-4" />
                                                        <span className="hidden sm:inline">
                                                            Download
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {filteredPremiumDownloads.length === 0 && (
                                    <div className="rounded-[28px] border border-dashed border-brand-navy/20 bg-brand-navy/5 px-6 py-10 text-center text-sm font-semibold text-brand-navy">
                                        No premium resources match your search.
                                    </div>
                                )}
                                {hasMorePremium && (
                                    <button
                                        onClick={handleShowMorePremium}
                                        className="inline-flex w-full items-center justify-center rounded-full border border-brand-navy/10 bg-white px-6 py-3 text-sm font-bold text-brand-navy transition-all hover:border-brand-blue hover:text-brand-blue"
                                    >
                                        Show more resources
                                    </button>
                                )}
                            </div>

                            {/* Past Papers Resources Downloads */}
                            <div className="space-y-12">
                                <div className="space-y-6">
                                    <div className="mb-3 flex items-center gap-4">
                                        <div className="h-1 w-12 rounded-full bg-gradient-to-r from-brand-blue to-brand-navy"></div>
                                        <span className="text-sm font-black tracking-wider text-brand-blue uppercase">
                                            PAST PAPERS RESOURCES
                                        </span>
                                    </div>
                                    <h2 className="font-heading text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                                        CAIE O Level Bengali (3204) Past Papers
                                    </h2>
                                    <p className="text-lg text-slate-600">
                                        Access CAIE Cambridge O Level Bengali (3204) past papers with instant view and download. Practice real Cambridge exam questions and strengthen your preparation for Paper 1 and Paper 2.
                                    </p>
                                </div>

                                {loadingPastPapers ? (
                                    <div className="py-12 text-center">
                                        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-brand-blue/30 border-t-brand-blue"></div>
                                        <p className="mt-4 text-sm text-slate-600">Loading past papers...</p>
                                    </div>
                                ) : pastPapersData.length === 0 ? (
                                    <div className="rounded-[28px] border border-dashed border-brand-navy/20 bg-brand-navy/5 px-6 py-10 text-center text-sm font-semibold text-brand-navy">
                                        Past papers will be available soon.
                                    </div>
                                ) : (
                                    <>
                                        <div className="space-y-4">
                                            {pastPapersData.slice(0, visibleYearsCount).map((yearData) => {
                                                const isExpanded = expandedYears.has(yearData.year);
                                                return (
                                                    <div key={yearData.year} className="overflow-hidden rounded-[32px] border border-brand-navy/10 bg-white shadow-sm">
                                                        {/* Year Header - Clickable */}
                                                        <button
                                                            onClick={() => toggleYear(yearData.year)}
                                                            className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-slate-50"
                                                        >
                                                            <div className="flex items-center gap-4">
                                                                <div className="rounded-2xl bg-brand-navy/10 p-3">
                                                                    <FileText className="h-6 w-6 text-brand-navy" />
                                                                </div>
                                                                <div>
                                                                    <h3 className="text-2xl font-bold text-brand-navy">
                                                                        {yearData.year}
                                                                    </h3>
                                                                    <p className="text-sm text-slate-600">
                                                                        {yearData.files.length} {yearData.files.length === 1 ? 'file' : 'files'}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="rounded-full bg-brand-blue/10 p-2">
                                                                {isExpanded ? (
                                                                    <ChevronUp className="h-5 w-5 text-brand-blue" />
                                                                ) : (
                                                                    <ChevronDown className="h-5 w-5 text-brand-blue" />
                                                                )}
                                                            </div>
                                                        </button>

                                                        {/* Files List - Collapsible */}
                                                        {isExpanded && (
                                                            <div className="border-t border-brand-navy/10 bg-slate-50/50 p-6">
                                                                <div className="space-y-4">
                                                                    {yearData.files.map((paper) => (
                                                                        <div
                                                                            key={paper.id}
                                                                            className="group rounded-[24px] border border-brand-navy/10 bg-white p-4 shadow-sm transition-all hover:border-brand-blue/40 hover:shadow-md"
                                                                        >
                                                                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                                                                <div className="flex flex-1 items-start gap-3">
                                                                                    <div className="rounded-xl bg-brand-blue/10 p-2">
                                                                                        <FileText className="h-5 w-5 text-brand-blue" />
                                                                                    </div>
                                                                                    <div className="flex-1 space-y-2">
                                                                                        <a
                                                                                            href={`/past-papers/${paper.slug}`}
                                                                                            className="text-base font-bold text-brand-navy transition-colors group-hover:text-brand-blue"
                                                                                        >
                                                                                            {paper.name}
                                                                                        </a>
                                                                                        <div className="flex flex-wrap items-center gap-2">
                                                                                            <span className="text-xs font-black tracking-wider text-brand-blue uppercase">
                                                                                                {paper.paperType}
                                                                                            </span>
                                                                                            <span className="text-xs text-slate-400">
                                                                                                {(paper.size / 1024 / 1024).toFixed(2)} MB
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="flex flex-wrap gap-2">
                                                                                    <a
                                                                                        href={paper.viewUrl}
                                                                                        target="_blank"
                                                                                        rel="noopener noreferrer"
                                                                                        className="inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-white px-4 py-2 text-sm font-bold text-brand-navy transition-all hover:border-brand-blue hover:text-brand-blue"
                                                                                        onClick={(e) => e.stopPropagation()}
                                                                                    >
                                                                                        <Eye className="h-4 w-4" />
                                                                                        <span>View</span>
                                                                                    </a>
                                                                                    {paper.downloadUrl && (
                                                                                        <a
                                                                                            href={paper.downloadUrl}
                                                                                            className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-4 py-2 text-sm font-bold text-white transition-all hover:bg-brand-navy"
                                                                                            onClick={(e) => e.stopPropagation()}
                                                                                        >
                                                                                            <Download className="h-4 w-4" />
                                                                                            <span>Download</span>
                                                                                        </a>
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {/* Show More Button */}
                                        {visibleYearsCount < pastPapersData.length && (
                                            <button
                                                onClick={handleShowMoreYears}
                                                className="inline-flex w-full items-center justify-center rounded-full border border-brand-navy/10 bg-white px-6 py-3 text-sm font-bold text-brand-navy transition-all hover:border-brand-blue hover:text-brand-blue"
                                            >
                                                Show more resources
                                            </button>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Bookshelf />

            {/* Final Admission CTA */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-5xl space-y-16 px-4 text-center">
                    <div className="rounded-[64px] border border-slate-100 bg-slate-50 p-16 shadow-inner md:p-24">
                        <div className="mb-20 space-y-6 text-center">
                            <div className="mx-auto mb-6 flex w-fit items-center justify-center">
                                <Spotlight className="h-18 w-18 text-brand-navy" />
                            </div>
                            <h3 className="font-heading text-5xl font-extrabold tracking-tight text-brand-navy md:text-7xl">
                                Secure Your Spot
                            </h3>
                            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-500">
                                Let's get you started on the path to O Level
                                Bengali success. Enroll now to reserve your seat
                                in our upcoming batches and take the first step
                                towards mastering the CAIE 3204 syllabus with
                                Rofsan Sir.
                            </p>
                        </div>

                        <div className="mt-20 flex flex-col justify-center gap-8 sm:flex-row">
                            <AdmissionNow />
                        </div>
                    </div>
                </div>
            </section>

            {/* Capture Modal */}
            {showCaptureModal && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-6"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                    onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                            setShowCaptureModal(null);
                        }
                    }}
                >
                    <div
                        className="absolute inset-0 bg-brand-navy/90 backdrop-blur-md"
                        onClick={() => setShowCaptureModal(null)}
                    ></div>
                    <div className="animate-fade-in-up relative z-10 w-full max-w-lg rounded-[64px] bg-white p-16 shadow-2xl">
                        {!isSuccess ? (
                            <form
                                onSubmit={handleCaptureSubmit}
                                className="space-y-10"
                            >
                                <div className="space-y-6 text-center">
                                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[40px] bg-brand-blue/10">
                                        <Lock className="h-12 w-12 text-brand-blue" />
                                    </div>
                                    <h2
                                        id="modal-title"
                                        className="font-heading text-4xl font-extrabold tracking-tight text-brand-navy"
                                    >
                                        Premium Access
                                    </h2>
                                    <p className="text-base text-slate-500">
                                        Verify your Enrolllment or enter email
                                        for student access to{' '}
                                        <strong>
                                            {showCaptureModal.title}
                                        </strong>
                                        .
                                    </p>
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Enter student email"
                                    className="w-full rounded-[32px] border-2 border-slate-100 bg-slate-50 p-6 font-bold transition-all focus:border-brand-blue focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-[32px] bg-brand-blue py-6 text-xl font-black text-white shadow-xl transition-all hover:bg-brand-blue-dark"
                                >
                                    {isProcessing ? (
                                        <div className="h-8 w-8 animate-spin rounded-full border-4 border-white/30 border-t-white"></div>
                                    ) : (
                                        'Unlock Access'
                                    )}
                                </button>
                            </form>
                        ) : (
                            <div className="animate-fade-in space-y-10 text-center">
                                <CheckCircle className="mx-auto h-24 w-24 text-green-500" />
                                <h2 className="font-heading text-4xl font-extrabold tracking-tight text-brand-navy">
                                    Verified!
                                </h2>
                                <p className="text-lg text-slate-500">
                                    Your access link has been sent to {email}.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
            </div>
        </>
    );
};

export default ResourcesPage;
