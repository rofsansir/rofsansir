import {
    Award,
    BookOpen,
    Camera,
    CheckCircle,
    ChevronLeft,
    ChevronRight,
    ClipboardList,
    Clock,
    Heart,
    Layers,
    Quote,
    ShieldCheck,
    Star,
    TrendingUp,
    BookOpenCheck,
    Users,
    Zap,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../../components/SEO/SEO';
import StructuredData from '../../../components/SEO/StructuredData';
import { AdmissionNow } from '../components/AdmissionNow';
import Bookshelf from '../components/Bookshelf';
import Hero from '../components/Hero';
import Quiz from '../components/Quiz';
import Stats from '../components/Stats';

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const testimonials = [
        {
            name: 'Prioman - World Heights',
            grade: 'A*',
            year: 'O Level 2023',
            text: "Rofsan Sir's detailed feedback and targeted mock exams gave me the clarity I needed. His positive, interactive environment motivated me to reach my full potential.",
            avatar: '../assets/students/prioman.jpg',
        },
        {
            name: 'Ayoka Paul',
            grade: 'A',
            year: 'O Level 2023',
            text: "Joined for only 6 months before O Levels and still scored an A. Sir's concise notes and cheat sheets made all the difference.",
            avatar: '../assets/students/ayoka.jpg',
        },
        {
            name: 'Apurva Sahil',
            grade: 'A*',
            year: 'O Level 2021',
            text: "Rofsan Sir's deep understanding of marking schemes and exam strategies sets him apart. Essay writing became my strength within a year.",
            avatar: '../assets/students/apurva.jpg',
        },
        {
            name: 'Maida Naz',
            grade: 'A*',
            year: 'O Level 2023',
            text: 'Regular mock tests and constructive feedback helped me improve exactly where needed. His structured approach builds real confidence.',
            avatar: '../assets/students/maida.jpg',
        },
        {
            name: 'Abul Kashem Birol',
            grade: 'A',
            year: 'O Level 2021',
            text: "Lessons were exam-focused with clear materials. Sir's simple, structured teaching style made everything easy to follow.",
            avatar: '../assets/students/birol.png',
        },
        {
            name: 'Raiyat Karim',
            grade: 'A*',
            year: 'O Level 2025',
            text: 'Teaching through stories helped me remember concepts naturally. His honest feedback helped me organize my ideas effectively.',
            avatar: '../assets/students/raiyat.jpg',
        },
        {
            name: 'Akib Azwad',
            grade: 'A*',
            year: 'O Level 2025',
            text: "Even with moderate attention, his notes covered everything. Classes felt like engaging stories—he truly simplifies complex topics.",
            avatar: '../assets/students/akib.png',
        },
        {
            name: 'Suprova Barua',
            grade: '89%',
            year: 'O Level 2025',
            text: 'Bangla changed from my most feared subject to favorite. His calming classes and cultural stories made learning enjoyable.',
            avatar: '../assets/students/suprova.png',
        },
        {
            name: 'Farhan Ahmad (Rafi)',
            grade: 'A*',
            year: 'CAIE O Level 2023',
            text: "Achieved 99 marks with Sir's guidance. Regular mocks and past paper discussions improved my understanding consistently.",
            avatar: '../assets/students/farhan.jpeg',
        },
    ];

    // Carousel logic
    const testimonialsPerView = 3; // Show 3 at a time on desktop
    const totalSlides = Math.ceil(testimonials.length / testimonialsPerView);

    // Auto-play carousel
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentTestimonialIndex((prev) =>
                prev >= totalSlides - 1 ? 0 : prev + 1,
            );
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying, totalSlides]);

    const nextTestimonial = () => {
        setCurrentTestimonialIndex((prev) =>
            prev >= totalSlides - 1 ? 0 : prev + 1,
        );
        setIsAutoPlaying(false);
    };

    const prevTestimonial = () => {
        setCurrentTestimonialIndex((prev) =>
            prev <= 0 ? totalSlides - 1 : prev - 1,
        );
        setIsAutoPlaying(false);
    };

    const goToSlide = (index: number) => {
        setCurrentTestimonialIndex(index);
        setIsAutoPlaying(false);
    };

    // Get current testimonials to display
    const startIndex = currentTestimonialIndex * testimonialsPerView;
    const currentTestimonials = testimonials.slice(
        startIndex,
        startIndex + testimonialsPerView,
    );

    return (
        <div className="animate-fade-in-up">
            <SEO path="/" />
            <StructuredData type="organization" />
            <StructuredData type="person" />
            <StructuredData type="course" />

            <Hero />

            {/* Featured Video Section */}
            <section className="bg-gradient-to-b from-white to-slate-50 py-16 md:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 md:px-8">
                    <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-5 lg:gap-20">
                        <div className="space-y-8 lg:col-span-2">
                            <div className="space-y-6">
                                <p className="text-[11px] font-black tracking-[0.3em] text-brand-blue uppercase">
                                    Watch Now
                                </p>
                                <h2 className="font-heading text-4xl leading-tight font-extrabold tracking-tight text-brand-navy md:text-5xl">
                                    Why Choose{' '}
                                    <span className="text-brand-blue">
                                        Rofsan Sir?
                                    </span>
                                </h2>
                                <p className="text-lg leading-relaxed font-medium text-slate-500">
                                    Discover how our specialized O Level Bengali
                                    coaching program helps students achieve A*
                                    grades through examiner-led mentorship and
                                    proven teaching methods.
                                </p>
                            </div>
                            <a
                                href="https://edutechs.app/s-online-admission?key=odLPMK4oh4Mus2Y8hXjis4YjTUX2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center rounded-3xl bg-brand-navy px-8 py-4 font-black text-white shadow-xl transition-all hover:bg-brand-blue hover:scale-105"
                            >

                                Book Free Consultation
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </a>
                        </div>
                        <div className="lg:col-span-3">
                            <div className="group relative">
                                <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-brand-blue/20 to-brand-navy/20 opacity-75 blur-2xl transition-all group-hover:opacity-100"></div>
                                <div className="relative overflow-hidden rounded-[32px] border-4 border-white shadow-2xl">
                                    {/* TODO: replace the YouTube video ID below with the real one */}
                                    <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                                        <iframe
                                            className="absolute inset-0 h-full w-full"
                                            src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?rel=0"
                                            title="Intro of Rofsan Sir"
                                            loading="lazy"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Stats Divider */}
            <div className="bg-white px-6">
                <Stats />
            </div>

            {/* Why Students Score A* Section */}
            <section className="bg-slate-50 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-6 md:px-8">
                    <div className="mb-12 text-center">
                        <p className="mb-4 text-xs font-black tracking-[0.3em] text-brand-blue uppercase">
                            Proven Success Formula
                        </p>
                        <h2 className="font-heading text-4xl leading-tight font-extrabold tracking-tight text-brand-navy md:text-5xl">
                            Why Students Score{' '}
                            <span className="text-brand-blue">A* with Rofsan Sir</span>
                        </h2>
                    </div>

                    <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
                        {[
                            {
                                icon: <Layers className="h-6 w-6" />,
                                title: 'Strong foundations before exam-focused preparation',
                            },
                            {
                                icon: <ClipboardList className="h-6 w-6" />,
                                title: 'Most practice completed during class',
                            },
                            {
                                icon: <Users className="h-6 w-6" />,
                                title: 'Specially designed for English medium students',
                            },
                            {
                                icon: <BookOpen className="h-6 w-6" />,
                                title: 'Concept-based learning, not memorisation',
                            },
                            {
                                icon: <TrendingUp className="h-6 w-6" />,
                                title: 'Confidence-building techniques that remove the fear of Bengali',
                            },
                            {
                                icon: <BookOpenCheck className="h-6 w-6" />,
                                title: 'Exam-focused guidance based on real marking standards',
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group flex items-center gap-4 rounded-2xl border-2 border-brand-navy/5 bg-white p-6 text-left transition-all hover:border-brand-blue/30 hover:shadow-lg"
                            >
                                <div className="flex-shrink-0 rounded-xl bg-brand-blue p-3 text-white transition-all group-hover:scale-110 group-hover:bg-brand-blue-light">
                                    {item.icon}
                                </div>
                                <p className="text-lg font-semibold leading-snug text-brand-navy">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Authority Section */}
            <section className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 md:px-8">
                    <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-24">
                        <div className="relative">
                            <div className="image-placeholder relative aspect-[4/5] overflow-hidden rounded-3xl border-[12px] border-slate-50 shadow-2xl md:rounded-[48px] lg:rounded-[64px]">
                                <img
                                    src="../assets/teacher/19.jpg"
                                    alt="Excellence in Teaching"
                                    className="h-full w-full object-cover grayscale-[0.2]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent"></div>
                            </div>
                            {/* Elite Badge */}
                            <div className="absolute -right-12 -bottom-12 hidden rounded-3xl border border-white/10 bg-brand-blue p-12 shadow-2xl md:block md:rounded-[40px] lg:rounded-[56px]">
                                <Star className="mb-4 h-12 w-12 fill-white text-white" />
                                <p className="text-4xl font-black tracking-tighter text-white">
                                    Trusted Choice
                                </p>
                                <p className="mt-1 text-xs font-bold tracking-widest text-white/80 uppercase">
                                    For O Level Bengali
                                </p>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <div className="space-y-6">
                                <p className="text-[11px] font-black tracking-[0.3em] text-brand-blue uppercase">
                                    Academic Authority
                                </p>
                                <h2 className="font-heading text-5xl leading-tight font-extrabold tracking-tight text-brand-navy">
                                    Examiner-Led{' '}
                                    <span className="text-brand-blue">
                                        Mentorship
                                    </span>
                                </h2>
                                <p className="text-lg leading-relaxed font-medium text-slate-500">
                                    Learn from an experienced O Level examiner who teaches Bengali using simple explanations and modern techniques to help English medium students achieve
                                    {' '}
                                    <span className="font-bold text-brand-navy underline decoration-brand-blue decoration-4 underline-offset-4">
                                        A* & A in O Level Bengali.
                                    </span>
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                                {[
                                    {
                                        title: 'CAIE Specialist',
                                        icon: <Award />,
                                    },
                                    {
                                        title: 'Assessment Specialist',
                                        icon: <BookOpen />,
                                    },
                                    {
                                        title: 'Examiner Insight',
                                        icon: <ShieldCheck />,
                                    },
                                    {
                                        title: 'Result Focused',
                                        icon: <TrendingUp />,
                                    },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="group flex items-center space-x-4 rounded-3xl border border-slate-100 bg-slate-50 p-5 transition-colors hover:border-brand-blue"
                                    >
                                        <div className="rounded-2xl bg-white p-3 text-brand-blue shadow-sm transition-all group-hover:bg-brand-blue group-hover:text-white">
                                            {React.cloneElement(
                                                item.icon as React.ReactElement,
                                                { className: 'w-6 h-6' },
                                            )}
                                        </div>
                                        <h4 className="font-bold text-brand-navy">
                                            {item.title}
                                        </h4>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => navigate('/courses')}
                                className="group inline-flex items-center pt-4 text-lg font-black text-brand-navy transition-colors hover:text-brand-blue"
                            >
                                Discover the Journey
                                <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Bookshelf />

            {/* Life at the Batch - Activity Section */}
            <section className="overflow-hidden bg-slate-50 py-16 md:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 md:px-8">
                    <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 text-brand-blue">
                                <Camera className="h-5 w-5" />
                                <span className="text-xs font-black tracking-widest uppercase">
                                    Life at the Batch
                                </span>
                            </div>
                            <h2 className="font-heading text-4xl leading-tight font-extrabold tracking-tight text-brand-navy md:text-5xl">
                                Beyond the{' '}
                                <span className="text-brand-blue">
                                    Bookshelf
                                </span>
                            </h2>
                            <p className="max-w-xl text-lg font-medium text-slate-500">
                                An environment where Bengali is a living
                                experience of academic growth and cultural
                                connection.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="image-placeholder group aspect-[4/3] overflow-hidden rounded-[32px] shadow-lg">
                            <img
                                src="../assets/teacher/13.jpg"
                                alt="Activity 1"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="image-placeholder group aspect-[4/3] overflow-hidden rounded-[32px] shadow-lg">
                            <img
                                src="../assets/teacher/10.jpg"
                                alt="Activity 2"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="image-placeholder group aspect-[4/3] overflow-hidden rounded-[32px] shadow-lg">
                            <img
                                src="../assets/teacher/14.jpg"
                                alt="Activity 2"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="image-placeholder group aspect-[4/3] overflow-hidden rounded-[32px] shadow-lg">
                            <img
                                src="../assets/teacher/15.jpg"
                                alt="Activity 3"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="image-placeholder group aspect-[4/3] overflow-hidden rounded-[32px] shadow-lg">
                            <img
                                src="../assets/teacher/16.jpg"
                                alt="Activity 4"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="image-placeholder group aspect-[4/3] overflow-hidden rounded-[32px] shadow-lg">
                            <img
                                src="../assets/teacher/6.jpg"
                                alt="Activity 4"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="image-placeholder group aspect-[4/3] overflow-hidden rounded-[32px] shadow-lg">
                            <img
                                src="../assets/teacher/7.jpg"
                                alt="Activity 4"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="image-placeholder group aspect-[4/3] overflow-hidden rounded-[32px] shadow-lg">
                            <img
                                src="../assets/teacher/5.jpg"
                                alt="Activity 4"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="image-placeholder group aspect-[4/3] overflow-hidden rounded-[32px] shadow-lg">
                            <img
                                src="../assets/teacher/9.jpg"
                                alt="Activity 4"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Restored Section */}
            <section className="bg-white py-16 md:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 md:px-8">
                    <div className="mb-20 space-y-4 text-center">
                        <p className="text-[11px] font-black tracking-[0.3em] text-brand-blue uppercase">
                            Success Stories
                        </p>
                        <h2 className="font-heading text-5xl font-extrabold tracking-tight text-brand-navy">
                            Student{' '}
                            <span className="text-brand-blue">
                                Testimonials
                            </span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg font-medium text-slate-500">
                            Hear from our high achievers who mastered O Level
                            Bengali under Rofsan Sir's guidance.
                        </p>
                    </div>

                    {/* Carousel Container */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                        {/* Testimonials Grid */}
                        <div className="grid gap-10 md:grid-cols-3">
                            {currentTestimonials.map((t, i) => (
                                <div
                                    key={startIndex + i}
                                    className="group animate-fade-in relative rounded-2xl border border-slate-100 bg-slate-50 p-10 shadow-sm transition-all hover:shadow-xl md:rounded-[40px] lg:rounded-[48px]"
                                >
                                    <div className="absolute -top-6 left-10 rounded-2xl bg-brand-blue p-4 text-white shadow-lg">
                                        <Quote className="h-6 w-6" />
                                    </div>
                                    <div className="space-y-6 pt-6">
                                        <p className="text-base leading-7 font-medium text-slate-600 italic">
                                            "{t.text}"
                                        </p>
                                        <div className="flex items-center space-x-4 border-t border-slate-200 pt-6">
                                            <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-brand-blue/20">
                                                <img
                                                    src={t.avatar}
                                                    alt={t.name}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-brand-navy">
                                                    {t.name}
                                                </h4>
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-md font-black tracking-widest text-brand-blue uppercase">
                                                        {t.grade}
                                                    </span>
                                                    <span className="text-md tracking-widest text-slate-400 uppercase">
                                                        • {t.year}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute top-1/2 left-2 -translate-y-1/2 transform rounded-full border-2 border-brand-blue/20 bg-white p-4 shadow-xl transition-all hover:scale-110 hover:border-brand-blue hover:bg-brand-blue hover:text-white md:left-0 md:-translate-x-16"
                            aria-label="Previous testimonials"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute top-1/2 right-2 -translate-y-1/2 transform rounded-full border-2 border-brand-blue/20 bg-white p-4 shadow-xl transition-all hover:scale-110 hover:border-brand-blue hover:bg-brand-blue hover:text-white md:right-0 md:translate-x-16"
                            aria-label="Next testimonials"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>

                        {/* Dot Indicators */}
                        <div className="mt-12 flex items-center justify-center space-x-3">
                            {Array.from({ length: totalSlides }).map(
                                (_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`transition-all ${
                                            currentTestimonialIndex === index
                                                ? 'h-3 w-12 bg-brand-blue'
                                                : 'h-3 w-3 bg-slate-300 hover:bg-brand-blue/50'
                                        } rounded-full`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ),
                            )}
                        </div>

                        {/* Counter */}
                        <div className="mt-6 text-center">
                            <p className="text-sm font-medium text-slate-500">
                                Showing {startIndex + 1}-
                                {Math.min(
                                    startIndex + testimonialsPerView,
                                    testimonials.length,
                                )}{' '}
                                of {testimonials.length} testimonials
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum Grid */}
            <section className="border-y border-slate-100 bg-white py-16 md:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 md:px-8">
                    <div className="mb-24 space-y-6 text-center">
                        <h2 className="font-heading text-5xl font-extrabold tracking-tight text-brand-navy">
                        Structured for{' '}
                            <span className="text-brand-blue">Exam Success</span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg leading-relaxed font-medium text-slate-500">
                          Every lesson is strategically designed around the Cambridge O Level Bengali assessment objectives.
                        </p>
                    </div>

                    <div className="grid gap-12 md:grid-cols-3">
                        {[
                            {
                                title: 'Paper 01: Writing',
                                icon: <Layers />,
                                list: [
                                    'Formal & Personal Letter Writing',
                                    'Creative & Descriptive Composition',
                                    'Exam Structure & Marking Strategy',
                                ],
                                footer: 'CODE: 3204/01',
                            },
                            {
                                title: 'Paper 02: Language',
                                icon: <Zap />,
                                list: [
                                    'Vocabulary & Sentence Precision',
                                    '⁠Grammar Logic & Application',
                                    '⁠Comprehension & Answer Writing',
                                ],
                                footer: 'CODE: 3204/02',
                            },
                            {
                                title: 'Mock System',
                                icon: <ClipboardList />,
                                list: [
                                    'Real-Time Mock Assessments',
                                    'Examiner-Style Corrections',
                                    'Personalised Feedback & Improvement Plan',
                                ],
                                footer: 'EXAM READY',
                            },
                        ].map((card, idx) => (
                            <div
                                key={idx}
                                className="card-lift group rounded-3xl border border-slate-100 bg-white p-12 md:rounded-[48px] lg:rounded-[56px]"
                            >
                                <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-[24px] bg-brand-navy text-white shadow-xl transition-colors group-hover:bg-brand-blue">
                                    {React.cloneElement(
                                        card.icon as React.ReactElement,
                                        { className: 'w-8 h-8' },
                                    )}
                                </div>
                                <h3 className="mb-8 text-2xl font-bold tracking-tight text-brand-navy">
                                    {card.title}
                                </h3>
                                <ul className="space-y-5">
                                    {card.list.map((li, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start text-sm font-bold text-slate-500"
                                        >
                                            <CheckCircle className="mr-4 h-5 w-5 shrink-0 text-brand-blue" />
                                            {li}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-12 border-t border-slate-100 pt-8">
                                    <span className="text-[11px] font-black tracking-[0.2em] text-slate-400">
                                        {card.footer}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support Pillar Section */}
            <section className="relative overflow-hidden bg-brand-blue py-16 md:py-24 lg:py-32">
                <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-brand-blue/5 blur-[150px] md:h-[800px] md:w-[800px]"></div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
                    <div className="mb-24 space-y-6 text-center">
                        <h2 className="font-heading text-5xl leading-tight font-extrabold tracking-tight text-white">
                            Elite Support Ecosystem
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-200">
                            Beyond the classroom, we provide the tools needed
                            for total language mastery.
                        </p>
                    </div>

                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: 'Weekly Script Checks',
                                icon: <ShieldCheck />,
                                desc: 'Detailed corrections based on CAIE grade boundaries.',
                            },
                            {
                                title: 'A* Grade Vocabulary',
                                icon: <Star />,
                                desc: 'Exclusive word banks that impress Cambridge markers.',
                            },
                            {
                                title: 'Mock Marathons',
                                icon: <Clock />,
                                desc: 'Time-bound simulations to build exam-day stamina.',
                            },
                            {
                                title: 'Interactive Portal',
                                icon: <TrendingUp />,
                                desc: 'Access notes and recorded modules 24/7.',
                            },
                            {
                                title: 'Parent Connect',
                                icon: <Users />,
                                desc: 'Transparent progress reporting and monthly briefings.',
                            },
                            {
                                title: 'One-to-One Solve',
                                icon: <Heart />,
                                desc: 'Dedicated slots for complex grammar resolution.',
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="glass-dark group rounded-3xl border border-white/5 p-12 transition-all hover:bg-white/10 md:rounded-[40px] lg:rounded-[48px]"
                            >
                                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-brand-white transition-transform group-hover:scale-110">
                                    {React.cloneElement(
                                        item.icon as React.ReactElement,
                                        { className: 'w-8 h-8' },
                                    )}
                                </div>
                                <h4 className="mb-4 text-2xl font-bold tracking-tight text-white">
                                    {item.title}
                                </h4>
                                <p className="text-sm leading-relaxed font-medium text-slate-200">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="bg-slate-50 py-16 md:py-24 lg:py-32">
                <Quiz />
            </div>

            {/* CTA Section */}
            <section className="relative overflow-hidden border-t border-white/5 bg-brand-blue py-32 text-center">
                <div className="relative z-10 mx-auto max-w-4xl space-y-12 px-6">
                    <h2 className="font-heading text-4xl leading-tight font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                        Elevate Your Grade Today
                    </h2>
                    <p className="text-xl leading-relaxed font-medium text-slate-300">
                        Spaces in our specialized examiner-led batches are
                        strictly limited. Secure your spot and start your path
                        to an A*.
                    </p>
                    <div className="flex flex-col justify-center gap-6 sm:flex-row">
                        <AdmissionNow />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HomePage;
