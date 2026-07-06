import {
    ArrowLeft,
    ArrowRight,
    CheckCircle,
    ChevronLeft,
    ChevronRight,
    Download,
    Eye,
    PenLine,
    ShieldCheck,
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BOOKS } from '../../../constants';
import bookData from '../../../data/bookData.json';

interface BookshelfProps {
    selectedBookSlug?: string | null;
}

const Bookshelf: React.FC<BookshelfProps> = ({ selectedBookSlug }) => {
    const navigate = useNavigate();
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);

    console.log('Bookshelf - selectedBookSlug:', selectedBookSlug);

    const handleBookSelect = (slug: string) => {
        console.log('Navigating to:', `/${slug}`);
        navigate(`/${slug}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBackToList = () => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            const canScrollLeft = scrollLeft > 10;
            const canScrollRight = scrollLeft < scrollWidth - clientWidth - 10;

            setShowLeftArrow(canScrollLeft);
            setShowRightArrow(canScrollRight);

            console.log('Scroll Debug:', { scrollLeft, scrollWidth, clientWidth, canScrollLeft, canScrollRight });
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 320; // width of card (288) + gap (32)
            const newScrollLeft = direction === 'left'
                ? scrollContainerRef.current.scrollLeft - scrollAmount
                : scrollContainerRef.current.scrollLeft + scrollAmount;

            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        // Initialize arrow visibility on mount with a slight delay
        const timer = setTimeout(() => {
            if (scrollContainerRef.current) {
                const { scrollWidth, clientWidth } = scrollContainerRef.current;
                // If content overflows, show right arrow initially
                if (scrollWidth > clientWidth) {
                    setShowRightArrow(true);
                    console.log('Content overflows, showing right arrow');
                }
            }
            handleScroll();
        }, 100);

        // Add resize listener to update arrows on window resize
        const handleResize = () => handleScroll();
        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (selectedBookSlug !== null && selectedBookSlug !== undefined) {
        const bookInfo = BOOKS.find((b) => b.slug === selectedBookSlug);
        const book = bookData.find((b) => b.id === selectedBookSlug);

        console.log('Bookshelf - Looking for slug:', selectedBookSlug);
        console.log('Bookshelf - Found bookInfo:', bookInfo);
        console.log('Bookshelf - Found book:', book);

        if (!book || !bookInfo) {
            return (
                <div className="animate-fade-in-up min-h-screen pt-24">
                    <div className="mx-auto max-w-4xl px-4 py-24 text-center">
                        <h1 className="mb-4 text-4xl font-bold text-brand-navy">
                            Book not found
                        </h1>
                        <button
                            onClick={handleBackToList}
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
                            onClick={handleBackToList}
                            className="group mb-8 flex items-center text-white/80 transition-colors hover:text-white"
                        >
                            <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                            Back to Resources
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
                                        {section.content.map(
                                            (item, itemIdx) => {
                                                const isSubHeading =
                                                    item.length < 150 &&
                                                    (item.endsWith(':') ||
                                                        item.match(
                                                            /^[A-Z][^a-z]*:/,
                                                        ) ||
                                                        item.match(
                                                            /^Part \d+:/,
                                                        ));

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
                                                                {item.replace(
                                                                    /^[•✓-]\s*/,
                                                                    '',
                                                                )}
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
                                            },
                                        )}
                                    </div>
                                </div>
                            </section>
                        );
                    })}
            </div>
        );
    }

    return (
        <section className="overflow-hidden bg-slate-50 py-24">
            <div className="mx-auto mb-12 flex max-w-7xl flex-col justify-between px-4 md:flex-row md:items-end md:px-8">
                <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-brand-blue">
                        <PenLine className="h-5 w-5" />
                        <span className="text-xs font-black tracking-widest uppercase">
                            Author of the books
                        </span>
                    </div>
                    <h2 className="font-heading text-4xl leading-tight font-extrabold tracking-tight text-brand-navy md:text-5xl">
                        Published <span className="text-brand-blue">Books</span>
                    </h2>
                    <p className="max-w-xl text-lg font-medium text-slate-500">
                        A comprehensive curriculum authored by Rofsan Sir
                        specifically for CAIE Bengali (3204) candidates.
                    </p>
                </div>
            </div>

            <div className="relative">
                {/* Left Arrow Button */}
                {showLeftArrow && (
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 transform rounded-full border-2 border-brand-navy/10 bg-white p-3 shadow-xl transition-all hover:scale-110 hover:border-brand-blue hover:bg-brand-blue hover:text-white lg:hidden"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                )}

                {/* Right Arrow Button */}
                {showRightArrow && (
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 transform rounded-full border-2 border-brand-navy/10 bg-white p-3 shadow-xl transition-all hover:scale-110 hover:border-brand-blue hover:bg-brand-blue hover:text-white lg:hidden"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                )}

                <div className="overflow-hidden">
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="no-scrollbar flex gap-8 overflow-x-auto scroll-smooth pb-8 pl-4 pr-4 md:pl-8 md:pr-8 lg:justify-center"
                    >
                        {BOOKS.map((book) => {
                            console.log('Book in map:', book.id, book.slug, book.title);
                            return (
                            <div key={book.id} className="group w-72 flex-shrink-0">
                                <button
                                    onClick={() => {
                                        console.log('Button clicked for book:', book.slug);
                                        handleBookSelect(book.slug);
                                    }}
                                    aria-label={`View details for ${book.title}`}
                                    className="relative w-full text-left focus:outline-none focus:ring-4 focus:ring-brand-blue/50 rounded-2xl"
                                >
                                    <div className="relative transform overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 group-hover:-translate-y-2 hover:shadow-2xl">
                                        <div className="relative aspect-[3/4]">
                                            <img
                                                src={book.image}
                                                alt={book.title}
                                                className="h-full w-full object-cover"
                                            />
                                            <div className="absolute top-4 left-4 rounded-full bg-brand-blue px-3 py-1.5 text-[10px] font-black text-white shadow-lg">
                                                {book.tag}
                                            </div>
                                        </div>
                                        <div className="space-y-3 p-6">
                                            <h3 className="font-heading text-lg leading-tight font-bold text-brand-navy">
                                                {book.title}
                                            </h3>
                                            <p className="line-clamp-2 text-xs leading-relaxed text-slate-500">
                                                {book.description}
                                            </p>
                                            <span className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue">
                                                Book Details
                                                <ArrowLeft className="h-3 w-3 rotate-180" />
                                            </span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bookshelf;
