import { ArrowLeft, CheckCircle, ShieldCheck } from 'lucide-react';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BOOKS } from '../../../constants';
import bookData from '../../../data/bookData.json';

const BookDetailPage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Extract slug from pathname (e.g., "/o-level-bengali-basic-plus" -> "o-level-bengali-basic-plus")
    const bookSlug = location.pathname.substring(1); // Remove leading slash

    console.log('BookDetailPage LOADED - pathname:', location.pathname);
    console.log('BookDetailPage LOADED - bookSlug:', bookSlug);

    const bookInfo = BOOKS.find((b) => b.slug === bookSlug);
    const book = bookData.find((b) => b.id === bookSlug);

    console.log('BookDetailPage - bookInfo:', bookInfo);
    console.log('BookDetailPage - book:', book);

    const handleBackToResources = () => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!book || !bookInfo) {
        return (
            <div className="animate-fade-in-up min-h-screen pt-24">
                <div className="mx-auto max-w-4xl px-4 py-24 text-center">
                    <h1 className="mb-4 text-4xl font-bold text-brand-navy">
                        Book not found
                    </h1>
                    <button
                        onClick={handleBackToResources}
                        className="text-brand-blue hover:underline"
                    >
                        Back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="animate-fade-in-up min-h-screen pt-24">
            <section className="relative overflow-hidden bg-brand-navy py-24">
                <div className="absolute inset-0">
                    <img
                        src={bookInfo.image}
                        alt={bookInfo.title}
                        className="h-full w-full object-cover opacity-15"
                    />
                    <div className="absolute inset-0 bg-brand-navy/90"></div>
                </div>
                <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
                    <button
                        onClick={handleBackToResources}
                        className="group mb-8 flex items-center text-white/80 transition-colors hover:text-white"
                    >
                        <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                        Back
                    </button>

                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div className="order-2 lg:order-1">
                            <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-1.5 text-xs font-black tracking-widest text-brand-blue uppercase">
                                <ShieldCheck className="h-4 w-4" />
                                <span>{bookInfo.tag}</span>
                            </div>

                            <h1 className="font-heading mb-4 text-4xl leading-tight font-extrabold text-white md:text-6xl">
                                {book.title}
                            </h1>

                            <p className="mb-6 text-xl font-semibold text-brand-blue-light">
                                {book.subtitle}
                            </p>

                            <p className="mb-8 text-lg text-white/80">
                                {book.author}
                            </p>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-[40px] border-8 border-white/10 shadow-2xl">
                                <img
                                    src={bookInfo.image}
                                    alt={bookInfo.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {book.sections &&
                book.sections.map((section, sectionIdx) => {
                    const isEven = sectionIdx % 2 === 0;

                    return (
                        <section
                            key={sectionIdx}
                            className={`py-20 ${isEven ? 'bg-white' : 'bg-brand-navy/5'}`}
                        >
                            <div className="mx-auto max-w-4xl px-4 md:px-8">
                                <div className="mb-10">
                                    <h2 className="font-bengali text-3xl leading-tight font-extrabold text-brand-navy md:text-4xl">
                                        {section.heading}
                                    </h2>
                                </div>

                                <div className="space-y-5">
                                    {section.content.map((item, itemIdx) => {
                                        const isSubHeading =
                                            item.length < 150 &&
                                            (item.endsWith(':') ||
                                                item.match(/^[A-Z][^a-z]*:/) ||
                                                item.match(/^Part \d+:/));

                                        const isBullet =
                                            item.startsWith('•') ||
                                            item.startsWith('✓') ||
                                            item.startsWith('-');

                                        if (isSubHeading && !isBullet) {
                                            return (
                                                <div
                                                    key={itemIdx}
                                                    className="mt-10 mb-6 border-l-4 border-brand-blue pb-4 pl-6"
                                                >
                                                    <h3 className="font-bengali text-xl leading-snug font-bold text-brand-blue md:text-2xl">
                                                        {item}
                                                    </h3>
                                                </div>
                                            );
                                        }

                                        if (isBullet) {
                                            return (
                                                <div
                                                    key={itemIdx}
                                                    className="group flex items-start gap-4 rounded-xl border border-brand-navy/5 bg-white/80 p-4 transition-all hover:border-brand-blue/30"
                                                >
                                                    <div className="flex-shrink-0 rounded-xl bg-brand-blue p-2.5 shadow-md transition-all group-hover:bg-brand-blue-light">
                                                        <CheckCircle className="h-5 w-5 text-white" />
                                                    </div>
                                                    <p className="font-bengali flex-1 pt-0.5 text-lg leading-relaxed text-slate-700">
                                                        {item.replace(/^[•✓-]\s*/, '')}
                                                    </p>
                                                </div>
                                            );
                                        }

                                        return (
                                            <p
                                                key={itemIdx}
                                                className="font-bengali border-l-2 border-transparent pl-4 text-lg leading-[1.8] text-slate-600 transition-colors hover:border-brand-blue/30"
                                            >
                                                {item}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        </section>
                    );
                })}
        </div>
    );
};

export default BookDetailPage;
