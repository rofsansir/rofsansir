import {
    ArrowLeft,
    ArrowRight,
    Calendar,
    ChevronDown,
    ChevronRight,
    ChevronUp,
    Clock,
    HelpCircle,
    Search,
    ShieldCheck,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SEO from '../../../components/SEO/SEO';
import VideoCard from '../../../components/VideoCard';
import YouTubeEmbed from '../../../components/YouTubeEmbed';
import blogContent from '../../../data/blogContent.json';
import { FAQS } from '../../../data/faq';
import videoData from '../../../data/videoData.json';

const FAQItem: React.FC<{ question: string; answer: string }> = ({
    question,
    answer,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            className={`mb-4 overflow-hidden rounded-[32px] transition-all duration-300 ${isOpen ? 'bg-brand-navy text-white shadow-2xl' : 'border border-slate-100 bg-white hover:border-brand-blue/30'}`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between px-8 py-6 text-left focus:outline-none"
            >
                <span
                    className={`text-lg font-bold ${isOpen ? 'text-white' : 'text-brand-navy'}`}
                >
                    {question}
                </span>
                {isOpen ? (
                    <ChevronUp className="h-6 w-6 text-brand-blue-light" />
                ) : (
                    <ChevronDown className="h-6 w-6 text-slate-300" />
                )}
            </button>
            <div
                className={`bengali-text overflow-hidden px-8 transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <p
                    className={`${isOpen ? 'text-slate-300' : 'text-slate-500'} leading-relaxed font-medium`}
                >
                    {answer}
                </p>
            </div>
        </div>
    );
};

const ExaminerTipsPage: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBlog, setSelectedBlog] = useState<number | null>(null);
    const [faqCategory, setFaqCategory] = useState<'student' | 'parent'>(
        'student',
    );
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    // Filter videos for tips page
    const tipsVideos = videoData.filter((video) =>
        video.pages.includes('tips'),
    );

    const studentFAQs = FAQS.student;
    const parentFAQs = FAQS.parent;

    // Check URL parameter for blog ID
    useEffect(() => {
        if (id) {
            setSelectedBlog(parseInt(id, 10));
        } else {
            setSelectedBlog(null);
        }
    }, [id]);

    // Handle blog selection
    const handleBlogSelect = (blogId: number) => {
        navigate(`/tips/${blogId}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Handle back to list
    const handleBackToList = () => {
        navigate('/tips');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const tips = [
        {
            id: 1,
            title: 'ও লেভেল বাংলা পরীক্ষা না দিলে ভবিষ্যতে কী কী সমস্যা হয়?',
            subtitle: "Parents' Guide to Cambridge O Level Bengali",
            category: 'Parents',
            date: 'Feb 10, 2026',
            duration: '8 min read',
            excerpt:
                'বিদেশে উচ্চশিক্ষা, মাতৃভাষার দুর্বলতা, একাডেমিক রাইটিং, মানসিক স্থিতি এবং ক্যারিয়ার নিরাপত্তা—O Level Bangla না পড়ালে কী কী সমস্যা হতে পারে তা বিস্তারিত জানুন।',
            thumbnail: '../assets/tips/1.jpg',
            isVideo: false,
        },
        {
            id: 2,
            title: 'O Level Bangla না পড়ালে কী ধরনের Academic ও Career ক্ষতি হতে পারে?',
            subtitle: 'Cambridge O Level Bengali Series – Part 2',
            category: 'Parents',
            date: 'Feb 09, 2026',
            duration: '10 min read',
            excerpt:
                'University Admission, Academic Writing দুর্বলতা, Competitive Exams, Career Flexibility এবং দীর্ঘমেয়াদি পেশাগত সমস্যার বিস্তারিত বিশ্লেষণ।',
            thumbnail: '../assets/tips/2.jpg',
            isVideo: false,
        },
        {
            id: 3,
            title: 'How O Level Bangla Actually Improves English & Critical Thinking',
            subtitle: 'Cambridge O Level Bangla Series – Part 3',
            category: 'General',
            date: 'Feb 08, 2026',
            duration: '9 min read',
            excerpt:
                'Research-backed explanation of how studying Bengali strengthens English academic writing, develops critical thinking, and builds intellectual discipline.',
            thumbnail: '../assets/tips/3.jpg',
            isVideo: false,
        },
        {
            id: 4,
            title: 'Common Parent Myths About O Level Bangla',
            subtitle: 'What the Cambridge Syllabus Actually Says',
            category: 'Parents',
            date: 'Feb 07, 2026',
            duration: '7 min read',
            excerpt:
                'Debunking 8 common myths: Is it all memorization? Does it weaken English? Is it needed abroad? Get syllabus-based facts, not assumptions.',
            thumbnail: '../assets/tips/4.jpg',
            isVideo: false,
        },
        {
            id: 5,
            title: 'When Should a Student Start O Level Bangla?',
            subtitle: 'Class VIII, IX or X?',
            category: 'General',
            date: 'Feb 06, 2026',
            duration: '8 min read',
            excerpt:
                'Detailed analysis of starting in Class VIII, IX, or X—benefits, challenges, and examiner recommendations for optimal preparation timeline.',
            thumbnail: '../assets/tips/5.jpg',
            isVideo: false,
        },
        {
            id: 6,
            title: 'Why Students Lose Marks in O Level Bangla',
            subtitle: 'Even After Studying Hard',
            category: 'Students',
            date: 'Feb 05, 2026',
            duration: '9 min read',
            excerpt:
                'Examiner reveals hidden mark-loss areas: weak idea development, incorrect register, poor paragraph structure, and exam strategy mistakes.',
            thumbnail: '../assets/tips/6.jpg',
            isVideo: false,
        },
        {
            id: 7,
            title: 'How to Prepare for O Level Bengali Paper 01',
            subtitle: 'A Clear and Practical Guide for Students',
            category: 'Paper 1',
            date: 'Feb 04, 2026',
            duration: '12 min read',
            excerpt:
                'Complete Paper 01 preparation guide: composition types, assessment objectives, common mistakes, topic selection strategy, and scoring techniques.',
            thumbnail: '../assets/tips/7.jpg',
            isVideo: false,
        },
        {
            id: 8,
            title: 'How to Prepare for O Level Bengali Paper 02',
            subtitle: 'Language & Comprehension Explained Clearly',
            category: 'Paper 2',
            date: 'Feb 03, 2026',
            duration: '11 min read',
            excerpt:
                'Paper 02 mastery guide: comprehension techniques, own-word answers, grammar accuracy, vocabulary building, and expert-guided preparation methods.',
            thumbnail: '../assets/tips/8.jpg',
            isVideo: false,
        },
    ];

    const filteredTips = tips.filter((tip) => {
        const matchesFilter =
            activeFilter === 'All' || tip.category === activeFilter;
        const matchesSearch = tip.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });


    // If a blog is selected, show detail view
    if (selectedBlog !== null) {
        const blog = blogContent.find((b) => b.id === selectedBlog);
        const tip = tips.find((t) => t.id === selectedBlog);

        if (!blog || !tip) {
            return (
                <div className="animate-fade-in-up min-h-screen pt-24">
                    <div className="mx-auto max-w-4xl px-4 py-24 text-center">
                        <h1 className="mb-4 text-4xl font-bold text-brand-navy">
                            Blog not found
                        </h1>
                        <button
                            onClick={handleBackToList}
                            className="text-brand-blue hover:underline"
                        >
                            Back to all insights
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <div className="animate-fade-in-up min-h-screen pt-24">
                {/* Blog Detail Hero */}
                <section className="relative overflow-hidden bg-brand-navy py-16 md:py-24">
                    <div className="mx-auto max-w-7xl px-4 md:px-8">
                        <button
                            onClick={handleBackToList}
                            className="group mb-8 flex items-center text-white/80 transition-colors hover:text-white"
                        >
                            <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                            Back to All Insights
                        </button>

                        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
                            {/* Left Content - 40% */}
                            <div className="flex flex-col justify-center lg:col-span-2">
                                <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-brand-blue/20 px-4 py-1.5 text-xs font-black tracking-widest text-white uppercase">
                                    <ShieldCheck className="h-4 w-4" />
                                    <span>{tip.category}</span>
                                </div>

                                <h1 className="font-heading font-bengali mb-4 text-3xl leading-tight font-extrabold text-white md:text-4xl lg:text-5xl">
                                    {blog.title}
                                </h1>

                                <p className="font-bengali mb-8 text-lg font-semibold text-brand-blue-light md:text-xl">
                                    {blog.subtitle}
                                </p>

                                <div className="flex items-center space-x-6 text-sm text-white/60">
                                    <div className="flex items-center">
                                        <Calendar className="mr-2 h-4 w-4" />
                                        {tip.date}
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="mr-2 h-4 w-4" />
                                        {tip.duration}
                                    </div>
                                </div>
                            </div>

                            {/* Right Image - 60% */}
                            <div className="lg:col-span-3">
                                <div className="overflow-hidden rounded-2xl shadow-2xl">
                                    <img
                                        src={tip.thumbnail}
                                        alt={tip.title}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Blog Content */}
                <section className="bg-white py-24">
                    <div className="mx-auto max-w-4xl px-4 md:px-8">
                        <article className="prose prose-lg prose-slate max-w-none">
                            {blog.content.map((paragraph, idx) => {
                                // Skip empty lines
                                if (!paragraph.trim()) return null;

                                // Detect markdown table rows
                                const isTableRow = paragraph.match(/^\|.*\|$/);

                                // If it's a table row, collect all consecutive table rows
                                if (isTableRow) {
                                    // Check if we already processed this table
                                    if (idx > 0 && blog.content[idx - 1]?.match(/^\|.*\|$/)) {
                                        return null; // Skip, already processed as part of previous table
                                    }

                                    // Collect all table rows
                                    const tableRows = [];
                                    let currentIdx = idx;
                                    while (currentIdx < blog.content.length && blog.content[currentIdx]?.match(/^\|.*\|$/)) {
                                        tableRows.push(blog.content[currentIdx]);
                                        currentIdx++;
                                    }

                                    // Parse table
                                    const headers = tableRows[0].split('|').filter(cell => cell.trim()).map(cell => cell.trim());
                                    const dataRows = tableRows.slice(2).map(row =>
                                        row.split('|').filter(cell => cell.trim()).map(cell => cell.trim())
                                    );

                                    return (
                                        <div key={idx} className="my-8 overflow-x-auto">
                                            <table className="min-w-full border-collapse border border-slate-300">
                                                <thead className="bg-brand-blue/10">
                                                    <tr>
                                                        {headers.map((header, hIdx) => (
                                                            <th key={hIdx} className="border border-slate-300 px-4 py-3 text-left font-bold text-brand-navy">
                                                                {header}
                                                            </th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {dataRows.map((row, rIdx) => (
                                                        <tr key={rIdx} className="hover:bg-slate-50">
                                                            {row.map((cell, cIdx) => (
                                                                <td key={cIdx} className="border border-slate-300 px-4 py-3 text-slate-700">
                                                                    {cell}
                                                                </td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    );
                                }

                                // Detect Bengali numbered section headings (১., ২., ৩., etc.)
                                const isBengaliNumberedHeading =
                                    paragraph.match(/^[০-৯১-৯]+\.\s/);

                                // Detect English numbered subheadings with text (1. Not Reading..., 2. Copying...)
                                const isNumberedSubHeading =
                                    paragraph.match(/^[0-9]+\.\s[A-Z]/) && paragraph.length < 150;

                                // Detect "Common..." headings
                                const isCommonHeading =
                                    paragraph.match(/^Common\s/) && paragraph.length < 150;

                                // Detect "How..." headings (both "How to" and "How [Name]")
                                const isHowHeading =
                                    (paragraph.match(/^How\s/) || paragraph.match(/^How to\s/)) &&
                                    paragraph.length < 150 &&
                                    !paragraph.trim().endsWith('?');

                                // Detect "Final..." headings (Final Note, Final Advice, Final Thought, etc.)
                                const isFinalHeading =
                                    paragraph.match(/^Final\s/) && paragraph.length < 100;

                                // Detect emoji-based headings (✉️ Letter Writing, 📰 Report Writing, etc.)
                                const isEmojiHeading =
                                    paragraph.match(/^[✉️📰💬🎤📝✔📘🔄🧩📖]/);

                                // Detect question headings (lines ending with ?)
                                const isQuestionHeading =
                                    paragraph.trim().endsWith('?') &&
                                    paragraph.length < 200;

                                // Detect explicit bullet points ONLY (must start with bullet symbol)
                                const isBulletPoint =
                                    paragraph.match(/^[•●○◦✓✔️✅❌×]\s/);

                                // Detect subheadings with colons (but not too long)
                                const isSubHeading =
                                    paragraph.includes(':') &&
                                    paragraph.length < 150 &&
                                    !isBulletPoint &&
                                    !isBengaliNumberedHeading &&
                                    !isNumberedSubHeading &&
                                    !isEmojiHeading &&
                                    !isHowHeading &&
                                    !isFinalHeading &&
                                    !isCommonHeading;

                                // Main section headings (Bengali numbered)
                                if (isBengaliNumberedHeading) {
                                    return (
                                        <h2
                                            key={idx}
                                            className="font-bengali mt-16 mb-8 border-l-4 border-brand-blue pl-6 text-3xl font-extrabold text-brand-navy first:mt-0"
                                        >
                                            {paragraph}
                                        </h2>
                                    );
                                }

                                // "Common..." headings
                                if (isCommonHeading) {
                                    return (
                                        <h2
                                            key={idx}
                                            className="font-bengali mt-16 mb-8 border-l-4 border-brand-blue pl-6 text-3xl font-extrabold text-brand-navy"
                                        >
                                            {paragraph}
                                        </h2>
                                    );
                                }

                                // "How..." headings
                                if (isHowHeading) {
                                    return (
                                        <h2
                                            key={idx}
                                            className="font-bengali mt-16 mb-8 border-l-4 border-brand-blue pl-6 text-3xl font-extrabold text-brand-navy"
                                        >
                                            {paragraph}
                                        </h2>
                                    );
                                }

                                // Numbered subheadings (1. Not Reading..., 2. Copying...)
                                if (isNumberedSubHeading) {
                                    return (
                                        <h4
                                            key={idx}
                                            className="font-bengali mt-8 mb-4 text-lg font-bold text-brand-blue"
                                        >
                                            {paragraph}
                                        </h4>
                                    );
                                }

                                // "Final..." headings (Final Note, Final Advice, etc.)
                                if (isFinalHeading) {
                                    return (
                                        <h3
                                            key={idx}
                                            className="font-bengali mt-12 mb-6 text-2xl font-bold text-brand-blue"
                                        >
                                            {paragraph}
                                        </h3>
                                    );
                                }

                                // Emoji-based headings
                                if (isEmojiHeading) {
                                    return (
                                        <h3
                                            key={idx}
                                            className="font-bengali mt-10 mb-4 text-xl font-bold text-brand-blue"
                                        >
                                            {paragraph}
                                        </h3>
                                    );
                                }

                                // Question headings
                                if (isQuestionHeading) {
                                    return (
                                        <h3
                                            key={idx}
                                            className="font-bengali mt-12 mb-6 text-2xl font-bold text-brand-blue italic"
                                        >
                                            {paragraph}
                                        </h3>
                                    );
                                }

                                // Subheadings with colons
                                if (isSubHeading) {
                                    return (
                                        <h4
                                            key={idx}
                                            className="font-bengali mt-8 mb-4 text-xl font-semibold text-brand-navy"
                                        >
                                            {paragraph}
                                        </h4>
                                    );
                                }

                                // Bullet points / list items (ONLY explicit bullets)
                                if (isBulletPoint) {
                                    return (
                                        <p
                                            key={idx}
                                            className="font-bengali relative mb-3 pl-8 text-lg leading-relaxed text-slate-700 before:absolute before:left-0 before:font-bold before:text-brand-blue before:content-['•']"
                                        >
                                            {paragraph.replace(/^[•●○◦✓✔️✅❌×]\s*/, '')}
                                        </p>
                                    );
                                }

                                // Regular paragraphs
                                return (
                                    <p
                                        key={idx}
                                        className="font-bengali mb-6 text-lg leading-relaxed text-slate-700"
                                    >
                                        {paragraph}
                                    </p>
                                );
                            })}
                        </article>

                        {/* Back to List CTA */}
                        <div className="mt-16 border-t border-slate-200 pt-16 text-center">
                            <button
                                onClick={handleBackToList}
                                className="group inline-flex items-center justify-center rounded-3xl bg-brand-navy px-8 py-4 text-lg font-black text-white shadow-xl transition-all hover:bg-brand-blue md:px-12 md:py-6 md:text-xl"
                            >
                                <ArrowLeft className="mr-3 h-6 w-6 transition-transform group-hover:-translate-x-1" />
                                View All Examiner Insights
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <>
            <SEO path="/tips" />
            <div className="animate-fade-in-up min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-brand-blue-dark py-24 text-white">
                <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
                    <div className="max-w-3xl space-y-10">
                        <div className="inline-flex items-center space-x-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-6 py-2.5">
                            <ShieldCheck className="h-5 w-5 text-white" />
                            <span className="text-xs font-black tracking-widest text-white uppercase">
                                Insider Knowledge
                            </span>
                        </div>
                        <h1 className="font-heading text-5xl leading-tight font-extrabold tracking-tight md:text-7xl">
                            Examiner{' '}
                            <span className="text-brand-blue-light">Insights</span>
                        </h1>
                        <p className="text-xl leading-relaxed text-slate-300">
                            Step behind the examiner’s desk. Learn marking insights, proven strategies, and common pitfalls from an experienced O Level Bengali educator.
                        </p>
                    </div>
                </div>
                <div className="absolute top-0 right-0 h-full w-1/3 rounded-full bg-brand-blue/5 blur-[120px]"></div>
            </section>

            {/* Filter & Search Bar */}
            <section className="sticky top-[72px] z-30 border-b border-slate-100 bg-white py-10">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 md:flex-row md:px-8">
                    <div className="no-scrollbar flex w-full space-x-3 overflow-x-auto md:w-auto">
                        {[
                            'All',
                            'Parents',
                            'Students',
                            'Paper 1',
                            'Paper 2',
                            'General',
                        ].map((f) => (
                            <button
                                key={f}
                                onClick={() => setActiveFilter(f)}
                                className={`rounded-2xl border-2 px-8 py-3 text-xs font-black tracking-widest whitespace-nowrap uppercase transition-all ${
                                    activeFilter === f
                                        ? 'scale-105 border-brand-navy bg-brand-navy text-white shadow-2xl'
                                        : 'border-slate-100 bg-white text-slate-500 hover:border-brand-blue'
                                }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-96">
                        <Search className="absolute top-1/2 left-6 h-5 w-5 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search examiner insights..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-[32px] border-2 border-slate-100 bg-slate-50 py-4 pr-6 pl-16 text-sm font-bold transition-all focus:border-brand-blue focus:bg-white focus:outline-none"
                        />
                    </div>
                </div>
            </section>

            {/* Tips Grid */}
            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    {filteredTips.length > 0 ? (
                        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                            {filteredTips.map((tip) => (
                                <div
                                    key={tip.id}
                                    className="group flex flex-col overflow-hidden rounded-[56px] border border-slate-100 bg-white shadow-sm transition-all hover:shadow-2xl"
                                >
                                    <div className="relative aspect-video overflow-hidden">
                                        <img
                                            src={tip.thumbnail}
                                            alt={tip.title}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent"></div>
                                        <div className="absolute top-6 right-6">
                                            <span className="rounded-full bg-brand-navy px-4 py-1.5 text-[9px] font-black tracking-[0.2em] text-white uppercase">
                                                {tip.category}
                                            </span>
                                        </div>
                                        <div className="absolute right-6 bottom-6 left-6">
                                            <p className="font-bengali line-clamp-1 text-xs font-semibold text-white/80">
                                                {tip.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex-grow space-y-6 p-12">
                                        <div className="flex items-center space-x-6 text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
                                            <div className="flex items-center">
                                                <Calendar className="mr-2 h-4 w-4 text-brand-blue" />
                                                {tip.date}
                                            </div>
                                            <div className="flex items-center">
                                                <Clock className="mr-2 h-4 w-4 text-brand-blue" />
                                                {tip.duration}
                                            </div>
                                        </div>
                                        <h3 className="font-heading font-bengali text-2xl leading-tight font-black tracking-tight text-brand-navy transition-colors group-hover:text-brand-blue">
                                            {tip.title}
                                        </h3>
                                        <p className="font-bengali line-clamp-2 text-base leading-relaxed text-slate-500">
                                            {tip.excerpt}
                                        </p>
                                    </div>

                                    <div className="p-12 pt-0">
                                        <button
                                            onClick={() =>
                                                handleBlogSelect(tip.id)
                                            }
                                            className="group/btn flex w-full items-center justify-center rounded-3xl bg-slate-50 py-5 text-sm font-black text-brand-navy transition-all hover:bg-brand-navy hover:text-white"
                                        >
                                            Full Insight
                                            <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-4 py-20 text-center">
                            <div className="mx-auto mb-10 flex h-24 w-24 items-center justify-center rounded-full bg-slate-200">
                                <Search className="h-10 w-10 text-slate-400" />
                            </div>
                            <h3 className="text-3xl font-black text-brand-navy">
                                No insights found
                            </h3>
                            <button
                                onClick={() => {
                                    setActiveFilter('All');
                                    setSearchQuery('');
                                }}
                                className="text-xs font-black tracking-widest text-brand-blue uppercase hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Video Section */}
            <section className="bg-white py-16 md:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="mb-16 space-y-6 text-center">
                        <p className="text-[11px] font-black tracking-[0.3em] text-brand-blue uppercase">
                            Video Resources
                        </p>
                        <h2 className="font-heading text-5xl font-extrabold tracking-tight text-brand-navy">
                            Exam Tips{' '}
                            <span className="text-brand-blue">Videos</span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg font-medium text-slate-500">
                            Watch expert guidance on exam strategies, paper preparation, and scoring techniques.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {tipsVideos.map((video) => (
                            <VideoCard
                                key={video.id}
                                videoId={video.videoId}
                                title={video.title}
                                duration={video.duration}
                                views={video.views}
                                onClick={() => setSelectedVideo(video.videoId)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {selectedVideo && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={() => setSelectedVideo(null)}
                >
                    <div
                        className="relative w-full max-w-5xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute -top-12 right-0 text-white hover:text-brand-blue"
                        >
                            <span className="text-4xl font-bold">×</span>
                        </button>
                        <YouTubeEmbed
                            videoId={selectedVideo}
                            title="Video"
                            autoplay={true}
                        />
                    </div>
                </div>
            )}

            {/* Structured FAQ Section for Students & Parents */}
            <section className="bg-slate-50 py-16 md:py-24 lg:py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="mb-16 space-y-6 text-center">
                        <div className="inline-flex items-center space-x-3 rounded-full bg-brand-navy/5 px-5 py-2 text-brand-navy">
                            <HelpCircle className="h-5 w-5 text-brand-blue" />
                            <span className="text-[10px] font-black tracking-widest uppercase">
                                Academic Support
                            </span>
                        </div>
                        <h2 className="font-heading text-5xl font-extrabold tracking-tight text-brand-navy">
                            Frequently Asked{' '}
                            <span className="text-brand-blue">Question</span>
                        </h2>

                        {/* Category Toggle */}
                        <div className="flex justify-center pt-8">
                            <div className="flex space-x-2 rounded-3xl border border-slate-100 bg-white p-2 shadow-xl">
                                <button
                                    onClick={() => setFaqCategory('student')}
                                    className={`rounded-2xl px-8 py-4 text-sm font-black tracking-widest uppercase transition-all ${faqCategory === 'student' ? 'bg-brand-blue text-white shadow-lg' : 'text-slate-400 hover:text-brand-navy'}`}
                                >
                                    For Students
                                </button>
                                <button
                                    onClick={() => setFaqCategory('parent')}
                                    className={`rounded-2xl px-8 py-4 text-sm font-black tracking-widest uppercase transition-all ${faqCategory === 'parent' ? 'bg-brand-blue text-white shadow-lg' : 'text-slate-400 hover:text-brand-navy'}`}
                                >
                                    For Parents
                                </button>
                            </div>
                        </div>
                        {faqCategory === 'student' ? (
                            <div className="animate-fade-in space-y-4 p-8">
                                <h2 className="font-heading text-4xl font-extrabold tracking-tight text-brand-navy">
                                    Cambridge O Level Bengali (3204)
                                </h2>
                                <p>
                                    This section answers common questions
                                    students have about{' '}
                                    <span className="font-extrabold text-brand-navy">
                                        O Level Bengali
                                    </span>
                                    , preparation strategy, and learning
                                    experience.
                                </p>
                            </div>
                        ) : (
                            <div className="animate-fade-in bengali-text space-y-4 p-8">
                                <h2 className="font-heading text-4xl font-extrabold tracking-tight text-brand-navy">
                                    Cambridge O Level Bangla (3204)
                                </h2>
                                <p>
                                    এই অংশটি তৈরি করা হয়েছে সেইসব অভিভাবকদের
                                    জন্য, যারা{' '}
                                    <span className="font-extrabold text-brand-navy">
                                        O Level Bangla
                                    </span>{' '}
                                    নিয়ে স্পষ্ট, বাস্তব ও নির্ভরযোগ্য উত্তর
                                    জানতে চান।
                                </p>
                            </div>
                        )}
                    </div>

                    <div
                        className="animate-fade-in space-y-4"
                        style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}
                    >
                        {(faqCategory === 'student'
                            ? studentFAQs
                            : parentFAQs
                        ).map((faq, i) => (
                            <FAQItem
                                key={`${faqCategory}-${i}`}
                                question={faq.question}
                                answer={faq.answer}
                            />
                        ))}
                        {faqCategory === 'student' ? (
                            <div className="animate-fade-in space-y-4 rounded-3xl border border-brand-blue/20 bg-white p-8 shadow-lg">
                                <h2 className="font-heading text-4xl font-extrabold tracking-tight text-brand-blue">
                                    Final Message for Students
                                </h2>
                                <p>
                                    <span className="font-extrabold text-brand-navy">
                                        O Level Bengali is not about fear or
                                        pressure,
                                    </span>{' '}
                                    with early preparation, clear guidance, and
                                    regular practice, it becomes a subject where
                                    students gain confidence and control. <br />
                                    <span className="font-extrabold text-brand-navy">
                                        Start early,
                                    </span>{' '}
                                    practice regularly, and learn from
                                    feedback—progress will follow.
                                </p>
                            </div>
                        ) : (
                            <div className="animate-fade-in bengali-text space-y-4 rounded-3xl border border-brand-blue/20 bg-white p-8 shadow-lg">
                                <h2 className="font-heading text-4xl font-extrabold tracking-tight text-brand-blue">
                                    Final Note for Parents
                                </h2>
                                <p>
                                    <span className="font-extrabold text-brand-navy">
                                        Cambridge O Level Bangla
                                    </span>{' '}
                                    কোনো অতিরিক্ত বোঝা নয়। সঠিক পদ্ধতিতে পড়ালে
                                    এটি শিক্ষার্থীর জন্য— <br />
                                    <span className="font-extrabold text-brand-navy">
                                        ✔ Confidence builder <br />
                                        ✔ Thinking skill developer <br />✔
                                        Future-ready academic foundation <br />
                                    </span>
                                    সঠিক তথ্যের ভিত্তিতে নেওয়া সিদ্ধান্তই
                                    সন্তানের জন্য সবচেয়ে নিরাপদ।
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Authority Banner */}
            <section className="relative overflow-hidden bg-brand-navy py-24 text-white">
                <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
                    <div className="flex flex-col items-center gap-8 rounded-[64px] border border-brand-blue/20 bg-brand-blue/10 p-12 shadow-2xl backdrop-blur-md md:flex-row md:gap-16 md:p-24">
                        <div className="h-40 w-40 shrink-0 rotate-3 overflow-hidden rounded-[56px] border-8 border-brand-blue shadow-2xl md:h-56 md:w-56">
                            <img
                                src="../assets/teacher/2.jpg"
                                alt="Rofsan Sir"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="space-y-8 text-center md:text-left">
                            <h2 className="font-heading text-4xl font-extrabold tracking-tight md:text-6xl">
                                Personal Script Review
                            </h2>
                            <p className="text-xl leading-relaxed text-slate-300">
                              Receive detailed feedback on your O Level practice scripts based on official marking standards. Join our elite mock batch for session-by-session improvement.
                            </p>
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSeUzeSITL4mIIvevRn3-PsQC3-7Pcv_J7ow7xzpHymekgnjMg/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group mx-auto flex items-center justify-center rounded-3xl bg-brand-blue px-8 py-4 text-lg font-black text-white shadow-2xl transition-all hover:scale-105 hover:bg-brand-blue-dark md:mx-0 md:px-12 md:py-6 md:text-2xl"
                            >
                                Get Personalized Feedback
                                <ChevronRight className="ml-2 h-8 w-8 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            </div>
        </>
    );
};

export default ExaminerTipsPage;
