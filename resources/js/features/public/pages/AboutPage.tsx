import {
    Award,
    Book,
    BookCopy,
    BookOpenCheck,
    CheckCircle,
    ChevronDown,
    ChevronRight,
    ChevronUp,
    FileStack,
    GraduationCap,
    Heart,
    ImageIcon,
    ShieldCheck,
    SquareStack,
    Star,
    Target,
    UserRoundKey,
    Users,
    Zap,
} from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../../components/SEO/SEO';
import StructuredData from '../../../components/SEO/StructuredData';
import { AdmissionNow } from '../components/AdmissionNow';
const AboutPage: React.FC = () => {
    const [showFullPhilosophy, setShowFullPhilosophy] = useState(false);

    const navigate = useNavigate();
    const galleryImages = [
        '/assets/teacher/16.jpg',
        '/assets/teacher/4.jpg',
        '/assets/teacher/5.jpg',
        '/assets/teacher/9.jpg',
        '/assets/teacher/7.jpg',
        '/assets/teacher/10.jpg',
    ];

    return (
        <>
            <SEO path="/about" />
            <StructuredData type="person" />
            <StructuredData type="organization" />
            <div className="animate-fade-in-up min-h-screen pt-24">
            {/* Hero Section - Perfect match with backup */}
            <section className="relative overflow-hidden bg-brand-blue-dark py-24">
                <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
                    <div className="grid items-center gap-10 md:gap-16 lg:grid-cols-2 lg:gap-20">
                        <div className="space-y-8">
                            <div className="inline-flex items-center space-x-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-6 py-2.5">
                                <ShieldCheck className="h-5 w-5 text-white" />
                                <span className="text-xs font-black tracking-widest text-white uppercase">
                                    Expert O Level Bengali Educator
                                </span>
                            </div>
                            <h1 className="font-heading text-5xl leading-tight font-extrabold tracking-tight text-white md:text-7xl">
                                Meet your Bengali Teacher
                            </h1>
                            <p className="max-w-2xl text-xl leading-relaxed text-slate-300">
                                <span className="font-bold text-white">
                                    Bengali Educator | Examiner | Published
                                    Author
                                </span>
                            </p>
                            <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                                Rofsan Sir is a{' '}
                                <span className="font-bold text-white">
                                    CAIE-trained educator
                                </span>{' '}
                                and{' '}
                                <span className="font-bold text-white">
                                    CAIE Approved O Level Bengali Examiner
                                </span>{' '}
                                with over{' '}
                                <span className="font-bold text-white">
                                    eight years of experience
                                </span>{' '}
                                teaching O Level Bengali in English-medium
                                academic settings. He is widely respected for
                                his{' '}
                                <span className="font-bold text-white">
                                    clear, structured, and student-friendly
                                    teaching approach
                                </span>
                                , which helps learners—especially those who
                                struggle or feel anxious about Bengali—build
                                confidence and achieve consistent examination
                                success across the country.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <div className="flex items-center space-x-4 rounded-3xl border border-white/10 bg-white/5 px-8 py-4">
                                    <BookCopy className="h-6 w-6 text-white" />
                                    <span className="font-black text-white">
                                        Bengali Educator
                                    </span>
                                </div>
                                <div className="flex items-center space-x-4 rounded-3xl border border-white/10 bg-white/5 px-8 py-4">
                                    <BookOpenCheck className="h-6 w-6 text-white" />
                                    <span className="font-black text-white">
                                        Examiner
                                    </span>
                                </div>
                                <div className="flex items-center space-x-4 rounded-3xl border border-white/10 bg-white/5 px-8 py-4">
                                    <Book className="h-6 w-6 text-white" />
                                    <span className="font-black text-white">
                                        Published Author
                                    </span>
                                </div>
                                <div className="flex items-center space-x-4 rounded-3xl border border-white/10 bg-white/5 px-8 py-4">
                                    <ShieldCheck className="h-6 w-6 text-white" />
                                    <span className="font-black text-white">
                                        CAIE-Certified
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="relative hidden lg:block">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-[56px] border-8 border-white/10 shadow-2xl">
                                <img
                                    src="../assets/teacher/18.jpg"
                                    alt="Rofsan Sir"
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent"></div>
                            </div>
                            <div className="animate-float absolute -right-10 -bottom-10 rounded-[48px] bg-brand-blue p-12 shadow-2xl">
                                <Users className="mb-5 h-14 w-14 text-white" />
                                <p className="text-4xl leading-none font-black text-white">
                                    3000+
                                </p>
                                <p className="text-sm font-black tracking-widest text-white/80 uppercase">
                                    Students Guided
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 h-full w-1/3 rounded-full bg-brand-blue/5 blur-[120px]"></div>
            </section>
            {/* Teaching Experience & Academic Leadership - Two Column with List */}
            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="mb-16 text-center">
                        <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-black tracking-widest text-brand-blue uppercase">
                            <Award className="h-4 w-4" />
                            <span>Experience</span>
                        </div>
                        <h2 className="font-heading mb-6 text-4xl font-extrabold text-brand-navy md:text-5xl">
                            Teaching Experience & Academic Leadership
                        </h2>
                        <p className="mx-auto max-w-3xl text-lg text-slate-600">
                            Extensive experience in English-medium education
                            with senior leadership roles
                        </p>
                    </div>
                    <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
                        <div className="space-y-6 rounded-[40px] border border-brand-blue/20 bg-white p-10 shadow-sm">
                            <h3 className="text-2xl font-bold text-brand-navy text-center">
                                Senior Teaching & Leadership
                            </h3>
                            <p className="text-lg leading-relaxed text-slate-600 font-base mx-auto max-w-2xl">
                                With extensive experience in English-medium education, Rofsan Sir has taught O Level Bengali across multiple academic levels and student profiles. <br /> <br />
                                He has served in <span className="font-bold text-brand-blue">senior teaching and leadership roles</span> within Bengali departments at leading English-medium schools in the country, actively teaching and preparing O Level students while being responsible for <span className="font-bold text-brand-navy">curriculum planning, academic coordination, assessment design, and maintaining high teaching standards</span>.
                            </p>
                            <div className="rounded-3xl bg-brand-blue/5 p-6 text-brand-navy">
                                <p className="font-semibold">
                                    Proven track record of student success and
                                    academic excellence
                                </p>
                            </div>
                        </div>
                        <div className="grid gap-6">
                            {[
                                'Multiple academic levels taught',
                                'Senior department leadership',
                                'Curriculum planning & coordination',
                                'Assessment design expertise',
                                'High teaching standards maintained',
                                'Student and parent needs understood',
                            ].map((insight) => (
                                <div
                                    key={insight}
                                    className="flex items-start gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-brand-blue/30 hover:shadow-xl"
                                >
                                    <div className="mt-1 rounded-full bg-brand-blue/10 p-2 text-brand-blue">
                                        <ShieldCheck className="h-5 w-5" />
                                    </div>
                                    <p className="mt-2 flex items-center text-lg font-semibold text-slate-700">
                                        {insight}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mx-auto mt-10 max-w-4xl rounded-[40px] border border-brand-blue/15 bg-brand-blue/5 p-10 text-center">
                        <p className="text-lg leading-relaxed text-slate-700">
                            His experience within structured academic
                            environments has enabled him to understand the needs
                            of both students and parents, ensuring that learning
                            remains{' '}
                            <span className="font-bold text-brand-blue">
                                organised, goal-oriented, and aligned with
                                international examination expectations
                            </span>
                            .
                        </p>
                    </div>
                </div>
            </section>

            {/* Video Section - O Level Bengali Program */}
            <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 md:px-8">
                    <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-5 lg:gap-20">
                        <div className="space-y-8 lg:col-span-2">
                            <div className="space-y-6">
                                <p className="text-[11px] font-black tracking-[0.3em] text-brand-blue uppercase">
                                    Watch & Learn
                                </p>
                                <h2 className="font-heading text-4xl leading-tight font-extrabold tracking-tight text-brand-navy md:text-5xl">
                                    O Level Bengali{' '}
                                    <span className="text-brand-blue">
                                        with Rofsan Sir
                                    </span>
                                </h2>
                                <p className="text-lg leading-relaxed font-medium text-slate-500">
                                    Get an inside look at our teaching methodology, classroom environment, and the comprehensive approach that helps students achieve A* grades in O Level Bengali.
                                </p>
                            </div>
                            <button
                                onClick={() => navigate('/contact')}
                                className="inline-flex items-center rounded-3xl bg-brand-navy px-8 py-4 font-black text-white shadow-xl transition-all hover:bg-brand-blue hover:scale-105"
                            >
                                Join Our Next Batch
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </button>
                        </div>
                        <div className="lg:col-span-3">
                            <div className="group relative">
                                <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-brand-navy/20 to-brand-blue/20 opacity-75 blur-2xl transition-all group-hover:opacity-100"></div>
                                <div className="relative overflow-hidden rounded-[32px] border-4 border-white shadow-2xl">
                                    {/* TODO: replace the YouTube video ID below with the real one */}
                                    <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                                        <iframe
                                            className="absolute inset-0 h-full w-full"
                                            src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?rel=0"
                                            title="O Level Bengali with Rofsan Sir"
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

            {/* Academic Qualifications - Two Cards */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="mb-16 text-center">
                        <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-black tracking-widest text-brand-blue uppercase">
                            <GraduationCap className="h-4 w-4" />
                            <span>Qualifications</span>
                        </div>
                        <h2 className="font-heading mb-6 text-4xl font-extrabold text-brand-navy md:text-5xl">
                            Academic Qualifications
                        </h2>
                        <p className="mx-auto max-w-3xl text-lg text-slate-600">
                            Strong academic foundation combined with
                            professional training
                        </p>
                    </div>
                    <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
                        <div className="rounded-3xl border border-brand-blue/20 bg-gradient-to-br from-brand-blue/5 to-brand-navy/5 p-10">
                            <div className="mb-6 flex items-center space-x-4">
                                <div className="rounded-2xl bg-brand-blue p-4">
                                    <GraduationCap className="h-8 w-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-navy">
                                        University Degrees
                                    </h3>
                                    <p className="text-sm text-slate-600">
                                        Bengali Language & Literature
                                    </p>
                                </div>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <ShieldCheck className="mt-0.5 mr-3 h-5 w-5 text-brand-blue" />
                                    <span className="text-slate-700">
                                        Honours in Bengali Language and
                                        Literature
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <ShieldCheck className="mt-0.5 mr-3 h-5 w-5 text-brand-blue" />
                                    <span className="text-slate-700">
                                        Master's in Bengali Language and
                                        Literature
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <ShieldCheck className="mt-0.5 mr-3 h-5 w-5 text-brand-blue" />
                                    <span className="font-semibold text-slate-700">
                                        University of Chittagong
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-3xl border border-brand-navy/20 bg-gradient-to-br from-brand-navy/5 to-brand-blue/5 p-10">
                            <div className="mb-6 flex items-center space-x-4">
                                <div className="rounded-2xl bg-brand-navy p-4">
                                    <Award className="h-8 w-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-navy">
                                        Professional Training
                                    </h3>
                                    <p className="text-sm text-slate-600">
                                        Continuous Development
                                    </p>
                                </div>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <ShieldCheck className="mt-0.5 mr-3 h-5 w-5 text-brand-navy" />
                                    <span className="text-slate-700">
                                        CAIE International Education
                                        Training
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <ShieldCheck className="mt-0.5 mr-3 h-5 w-5 text-brand-navy" />
                                    <span className="text-slate-700">
                                        Teaching Methodology Programs
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <ShieldCheck className="mt-0.5 mr-3 h-5 w-5 text-brand-navy" />
                                    <span className="text-slate-700">
                                        Assessment & Classroom Practice Training
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* Cambridge Examiner Insight - Two Column + Image */}
            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="mb-16 text-center">
                        <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-black tracking-widest text-brand-blue uppercase">
                            <ShieldCheck className="h-4 w-4" />
                            <span>Examiner Insight</span>
                        </div>
                        <h2 className="font-heading mb-6 text-4xl font-extrabold text-brand-navy md:text-5xl">
                            CAIE Examiner Insight
                        </h2>
                        <p className="mx-auto max-w-3xl text-lg text-slate-600">
                            Expert guidance from a CAIE Approved Assessment
                            Specialist
                        </p>
                    </div>
                    <div className="mx-auto max-w-6xl space-y-12">
                        <div className="rounded-[40px] border border-brand-blue/20 bg-white p-10 text-center shadow-sm">
                            <p className="text-lg leading-relaxed text-slate-700">
                                As a{' '}
                                <span className="font-bold text-brand-blue">
                                    CAIE Approved O Level Bengali Examiner
                                    (Assessment Specialist)
                                </span>
                                , Rofsan Sir has a thorough understanding of
                                CAIE assessment standards, mark schemes,
                                examiner expectations, and common student
                                errors. This professional insight allows him to
                                guide students on:
                            </p>
                        </div>

                        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
                            <div className="space-y-6 rounded-[40px] border border-brand-blue/20 bg-white p-10 shadow-sm">
                                <h3 className="text-2xl font-bold text-brand-navy">
                                    What Students Learn
                                </h3>
                                <p className="text-lg leading-relaxed text-slate-600">
                                    Expert insights into mark schemes,
                                    assessment expectations, and common student
                                    errors guide every lesson.
                                </p>
                                <div className="rounded-3xl bg-brand-blue/5 p-6 text-brand-navy">
                                    <p className="mt-3 rounded-2xl border border-slate-100 bg-white p-4 font-semibold shadow-sm transition-all hover:border-brand-blue/30 hover:shadow-xl">
                                        <span className="font-bold text-brand-blue-dark">
                                            Effective Answer Structuring
                                        </span>{' '}
                                    </p>
                                    <p className="mt-3 rounded-2xl border border-slate-100 bg-white p-4 font-semibold shadow-sm transition-all hover:border-brand-blue/30 hover:shadow-xl">
                                        <span className="font-bold text-brand-blue-dark">
                                            Appropriate Language Usage
                                        </span>
                                    </p>
                                    <p className="mt-3 rounded-2xl border border-slate-100 bg-white p-4 font-semibold shadow-sm transition-all hover:border-brand-blue/30 hover:shadow-xl">
                                        <span className="font-bold text-brand-blue-dark">
                                            Time Management in Examinations
                                        </span>{' '}
                                    </p>
                                    <p className="mt-3 rounded-2xl border border-slate-100 bg-white p-4 font-semibold shadow-sm transition-all hover:border-brand-blue/30 hover:shadow-xl">
                                        <span className="font-bold text-brand-blue-dark">
                                            Meeting Assessment Objectives
                                            Confidently
                                        </span>
                                    </p>
                                </div>
                                <p className="text-base text-slate-600 italic">
                                    This guidance is provided ethically and
                                    responsibly, focusing on understanding and
                                    application rather than rote memorization.
                                </p>
                            </div>
                            <div className="grid gap-6">
                                {[
                                    'Clear understanding of CAIE expectations',
                                    'Focus on mark schemes and presentation',
                                    'Common mistakes addressed early',
                                    'Ethical exam-focused guidance',
                                    'Answer structuring techniques',
                                    'Time management strategies',
                                ].map((insight) => (
                                    <div
                                        key={insight}
                                        className="flex items-start gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-brand-blue/30 hover:shadow-xl"
                                    >
                                        <div className="mt-1 rounded-full bg-brand-blue/10 p-2 text-brand-blue">
                                            <ShieldCheck className="h-5 w-5" />
                                        </div>
                                        <p className="mt-2 flex items-center text-lg font-semibold text-slate-700">
                                            {insight}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Teaching Philosophy - Split with Image */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="mb-16 text-center">
                        <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-black tracking-widest text-brand-blue uppercase">
                            <Heart className="h-4 w-4" />
                            <span>Philosophy</span>
                        </div>
                        <h2 className="font-heading mb-6 text-4xl font-extrabold text-brand-navy md:text-5xl">
                            Teaching Philosophy
                        </h2>
                        <p className="mx-auto max-w-3xl text-lg text-slate-600">
                            Building confidence through clarity and structured
                            learning
                        </p>
                    </div>
                    <div className="mx-auto max-w-6xl space-y-10">
                        <div className="grid gap-10 lg:grid-cols-2">
                            <div className="space-y-6 rounded-[40px] border border-brand-blue/20 bg-white p-10 shadow-sm">
                                <h3 className="text-2xl font-bold text-brand-navy">
                                    Core Philosophy
                                </h3>
                                <p className="text-lg leading-relaxed text-slate-600">
                                    Rofsan Sir's teaching philosophy centers on{' '}
                                    <span className="font-bold text-brand-blue">
                                        clarity, accessibility, and gradual
                                        skill development
                                    </span>
                                    . Recognizing that many English-medium
                                    students experience fear or discomfort with
                                    Bengali, he emphasizes{' '}
                                    <span className="font-bold text-brand-navy">
                                        simplifying complex concepts, building
                                        language skills step by step, and
                                        encouraging consistent practice
                                    </span>
                                    .
                                </p>
                                <div className="rounded-3xl bg-brand-blue/5 p-6 text-brand-navy">
                                    <p className="font-semibold">
                                        Fear-free learning environment that
                                        builds genuine confidence
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-6 rounded-[40px] border border-brand-navy/20 bg-gradient-to-br from-brand-navy/5 to-brand-blue/5 p-10 shadow-sm">
                                <h3 className="text-2xl font-bold text-brand-navy">
                                    Learning Environment
                                </h3>
                                <p className="text-lg leading-relaxed text-slate-600">
                                    The classroom environment is{' '}
                                    <span className="font-bold text-brand-blue">
                                        calm, supportive, and disciplined
                                    </span>
                                    —allowing students to learn without pressure
                                    while steadily improving their reading,
                                    writing, and analytical abilities.
                                </p>
                                <div className="rounded-3xl bg-white p-6">
                                    <p className="font-semibold text-brand-navy">
                                        Structured progression with personal
                                        attention
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[40px] border border-brand-blue/15 bg-brand-blue/5 p-10">
                            <h3 className="mb-8 text-center text-2xl font-bold text-brand-navy">
                                Why Students Learn Better
                            </h3>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {[
                                    {
                                        icon: <Users className="h-8 w-8" />,
                                        text: 'Bengali explained clearly for English-medium learners',
                                    },
                                    {
                                        icon: <Heart className="h-8 w-8" />,
                                        text: 'Fear-free and student-friendly classroom approach',
                                    },
                                    {
                                        icon: <Book className="h-8 w-8" />,
                                        text: 'Strong focus on writing clarity and structure',
                                    },
                                    {
                                        icon: <Zap className="h-8 w-8" />,
                                        text: 'Regular assessments with detailed feedback',
                                    },
                                    {
                                        icon: <Award className="h-8 w-8" />,
                                        text: 'Step-by-step preparation for O Level examinations',
                                    },
                                    {
                                        icon: (
                                            <ShieldCheck className="h-8 w-8" />
                                        ),
                                        text: 'Proven methodology that builds lasting skills',
                                    },
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="rounded-3xl border border-slate-200 bg-white p-6 transition-all hover:border-brand-blue/50 hover:shadow-xl"
                                    >
                                        <div className="mb-4 w-fit rounded-2xl bg-brand-blue/10 p-3 text-brand-blue">
                                            {item.icon}
                                        </div>
                                        <p className="leading-relaxed text-slate-700">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* My Teaching Approach - Methodology */}
            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="mb-16 text-center">
                        <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-brand-navy/10 px-4 py-1.5 text-xs font-black tracking-widest text-brand-navy uppercase">
                            <Zap className="h-4 w-4" />
                            <span>Methodology</span>
                        </div>
                        <h2 className="font-heading mb-6 text-4xl font-extrabold text-brand-navy md:text-5xl">
                            My Teaching Approach
                        </h2>
                        <p className="mx-auto max-w-3xl text-lg text-slate-600">
                            A student-centered methodology designed for
                            English-medium learners
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                icon: <Book className="h-8 w-8" />,
                                title: 'Logic-Based Grammar',
                                desc: 'Grammar taught through clear logic and reasoning, not rote memorization, making complex rules easy to understand and apply.',
                            },
                            {
                                icon: <Users className="h-8 w-8" />,
                                title: 'Student-Centric Learning',
                                desc: 'Classes adapted to individual learning speeds and styles, ensuring no student is left behind.',
                            },
                            {
                                icon: <Heart className="h-8 w-8" />,
                                title: 'Fear-Free Environment',
                                desc: 'A supportive, judgment-free classroom where students feel safe to make mistakes and learn from them.',
                            },
                            {
                                icon: <Award className="h-8 w-8" />,
                                title: 'Structured Progression',
                                desc: 'Step-by-step curriculum building from foundations to advanced concepts with clear milestones.',
                            },
                            {
                                icon: <Zap className="h-8 w-8" />,
                                title: 'Regular Assessments',
                                desc: 'Frequent practice tests and detailed feedback to track progress and identify areas for improvement.',
                            },
                            {
                                icon: <ShieldCheck className="h-8 w-8" />,
                                title: 'Exam-Focused Training',
                                desc: 'Expert insights applied to teach effective answer writing and time management.',
                            },
                        ].map((approach, idx) => (
                            <div
                                key={idx}
                                className="rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:border-brand-blue/50 hover:shadow-xl"
                            >
                                <div className="mb-6 w-fit rounded-2xl bg-brand-blue/10 p-4 text-brand-blue">
                                    {approach.icon}
                                </div>
                                <h3 className="mb-4 text-xl font-bold text-brand-navy">
                                    {approach.title}
                                </h3>
                                <p className="leading-relaxed text-slate-600">
                                    {approach.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Curriculum & Assessment - Split Layout */}
            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="mb-16 text-center">
                        <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-black tracking-widest text-brand-blue uppercase">
                            <BookCopy className="h-4 w-4" />
                            <span>Curriculum</span>
                        </div>
                        <h2 className="font-heading mb-6 text-4xl font-extrabold text-brand-navy md:text-5xl">
                            Curriculum & Assessment Approach
                        </h2>
                        <p className="mx-auto max-w-3xl text-lg text-slate-600">
                            Comprehensive preparation aligned with CAIE
                            standards
                        </p>
                    </div>
                    <div className="mx-auto max-w-6xl space-y-12">
                        <div className="rounded-[40px] border border-brand-blue/20 bg-white p-10 text-center shadow-sm">
                            <p className="text-lg leading-relaxed text-slate-700">
                                Instruction is fully aligned with the{' '}
                                <span className="font-bold text-brand-blue">
                                    CAIE O Level Bengali syllabus and assessment
                                    framework
                                </span>
                                . Students receive structured coverage of both{' '}
                                <span className="font-bold text-brand-navy">
                                    Paper 01 (Composition Writing)
                                </span>{' '}
                                and{' '}
                                <span className="font-bold text-brand-navy">
                                    Paper 02 (Language & Comprehension)
                                </span>
                                , supported by:
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2">
                            {[
                                {
                                    title: 'Regular Monthly and Pop Assessments',
                                    desc: 'Frequent evaluations to track continuous progress and understanding throughout the academic year',
                                    icon: <Zap className="h-8 w-8" />,
                                },
                                {
                                    title: 'Mid-term and Final Examinations',
                                    desc: 'Comprehensive assessments to measure overall achievement and readiness',
                                    icon: <Award className="h-8 w-8" />,
                                },
                                {
                                    title: 'Topic-wise Mock Tests',
                                    desc: 'Focused practice on specific topics to build mastery and confidence',
                                    icon: <Book className="h-8 w-8" />,
                                },
                                {
                                    title: 'Full Mock Examinations',
                                    desc: 'Complete exam simulations under real conditions to prepare students mentally and academically',
                                    icon: <ShieldCheck className="h-8 w-8" />,
                                },
                            ].map((assessment) => (
                                <div
                                    key={assessment.title}
                                    className="group rounded-3xl border-2 border-slate-100 bg-white p-8 transition-all hover:border-brand-blue/30 hover:shadow-2xl"
                                >
                                    <div className="mb-6 w-fit rounded-2xl bg-brand-blue p-4 text-white shadow-lg transition-transform group-hover:scale-110">
                                        {assessment.icon}
                                    </div>
                                    <h3 className="mb-4 text-xl font-bold text-brand-navy">
                                        {assessment.title}
                                    </h3>
                                    <p className="leading-relaxed text-slate-600">
                                        {assessment.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="rounded-[40px] border border-brand-blue/20 bg-gradient-to-br from-brand-blue/5 to-brand-navy/5 p-10 text-center">
                            <p className="text-lg leading-relaxed text-slate-700 italic">
                                Each assessment is followed by detailed feedback
                                to help students identify areas for improvement
                                and track progress over time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Makes My Classes Different */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="mb-16 text-center">
                        <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-black tracking-widest text-brand-blue uppercase">
                            <Star className="h-4 w-4" />
                            <span>Unique Value</span>
                        </div>
                        <h2 className="font-heading mb-6 text-4xl font-extrabold text-brand-navy md:text-5xl">
                            What Makes My Classes Different
                        </h2>
                        <p className="mx-auto max-w-3xl text-lg text-slate-600">
                            Why students and parents trust Rofsan Sir for O
                            Level Bengali success
                        </p>
                    </div>
                    <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
                        {[
                            {
                                number: '01',
                                title: 'Examiner-Level Insight',
                                desc: (
                                    <>
                                        With deep understanding of O Level assessment,
                                        <br />
                                        I know exactly what examiners look for and how to maximize marks in every answer.
                                    </>
                                ),
                                color: 'brand-blue',
                            },
                            {
                                number: '02',
                                title: 'Proven Track Record',
                                desc: 'Hundreds of students have achieved A*/A grades through my structured, comprehensive teaching methodology.',
                                color: 'brand-navy',
                            },
                            {
                                number: '03',
                                title: 'Comprehensive Resources',
                                desc: 'Author of 5 specialized textbooks covering every aspect of O Level Bengali—from foundations to advanced mastery.',
                                color: 'brand-blue',
                            },
                            {
                                number: '04',
                                title: 'Personalized Attention',
                                desc: 'Small batch sizes ensure individual feedback, progress tracking, and customized support for each student.',
                                color: 'brand-navy',
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="group relative rounded-[40px] border-2 border-slate-100 bg-slate-50 p-10 transition-all hover:border-brand-blue/30 hover:shadow-2xl"
                            >
                                <div
                                    className={`absolute -top-6 -left-6 bg-${item.color} rounded-3xl px-8 py-4 text-3xl font-black text-white shadow-xl`}
                                >
                                    {item.number}
                                </div>
                                <div className="mt-8">
                                    <h3 className="font-heading mb-4 text-2xl font-bold text-brand-navy">
                                        {item.title}
                                    </h3>
                                    <p className="text-lg leading-relaxed text-slate-600">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Academic Resources & Publications - Bold Showcase */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="mb-16 text-center">
                        <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-black tracking-widest text-brand-blue uppercase">
                            <Book className="h-4 w-4" />
                            <span>Publications</span>
                        </div>
                        <h2 className="font-heading mb-6 text-4xl font-extrabold text-brand-navy md:text-5xl">
                            Academic Resources & Publications
                        </h2>
                        <p className="mx-auto max-w-3xl text-lg text-slate-600">
                            Comprehensive learning materials designed for O
                            Level success
                        </p>
                    </div>
                    <div className="mx-auto max-w-6xl space-y-12">
                        <div className="rounded-[40px] border border-brand-blue/20 bg-gradient-to-br from-brand-blue/5 to-brand-navy/5 p-10">
                            <p className="text-center text-lg leading-relaxed text-slate-700">
                                Rofsan Sir is the author of several academic
                                resources developed specifically for O Level
                                Bengali students, including{' '}
                                <span className="font-bold text-brand-blue">
                                    O Level Bengali Foundation Plus, Basics
                                    Plus, Compositions Plus, Practice Plus, and
                                    Revision Plus
                                </span>
                                . These books are carefully designed to support
                                learners at different levels—especially those
                                with weak foundational skills—by making Bengali
                                easier, more structured, and more approachable
                                through guided lessons, systematic practice, and
                                exam-focused support. These resources are{' '}
                                <span className="font-bold text-brand-navy">
                                    classroom-tested, continuously updated, and
                                    aligned with CAIE standards
                                </span>{' '}
                                to support effective learning.
                            </p>
                        </div>

                        {/* Book Images Section */}
                        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-5">
                            {[
                                {
                                    img: '1.png',
                                    title: 'Foundation Plus',
                                    desc: 'Build strong fundamentals',
                                },
                                {
                                    img: '2.png',
                                    title: 'Basics Plus',
                                    desc: 'Master essential skills',
                                },
                                {
                                    img: '3.png',
                                    title: 'Compositions Plus',
                                    desc: 'Perfect your writing',
                                },
                                {
                                    img: '4.png',
                                    title: 'Practice Plus',
                                    desc: 'Extensive practice sets',
                                },
                                {
                                    img: '5.png',
                                    title: 'Revision Plus',
                                    desc: 'Complete exam prep',
                                },
                            ].map((book) => (
                                <div
                                    key={book.title}
                                    className="group flex flex-col items-center"
                                >
                                    <div className="group-hover:shadow-3xl relative mb-6 overflow-hidden rounded-[32px] border-4 border-slate-100 shadow-2xl transition-all group-hover:scale-105 group-hover:border-brand-blue/30">
                                        <img
                                            src={`../assets/books/${book.img}`}
                                            alt={`O Level Bengali ${book.title}`}
                                            className="h-auto w-full"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                                    </div>
                                    <h4 className="text-center text-base font-bold text-brand-navy">
                                        {book.title}
                                    </h4>
                                    <p className="text-center text-sm text-slate-600">
                                        {book.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="rounded-3xl border border-brand-blue/20 bg-white p-6 text-center shadow-sm">
                                <div className="mx-auto mb-4 w-fit rounded-2xl bg-brand-blue/10 p-4">
                                    <Book className="h-8 w-8 text-brand-blue" />
                                </div>
                                <h4 className="mb-2 font-bold text-brand-navy">
                                    Classroom-Tested
                                </h4>
                                <p className="text-sm text-slate-600">
                                    Proven effective with real students
                                </p>
                            </div>
                            <div className="rounded-3xl border border-brand-blue/20 bg-white p-6 text-center shadow-sm">
                                <div className="mx-auto mb-4 w-fit rounded-2xl bg-brand-blue/10 p-4">
                                    <Zap className="h-8 w-8 text-brand-blue" />
                                </div>
                                <h4 className="mb-2 font-bold text-brand-navy">
                                    Continuously Updated
                                </h4>
                                <p className="text-sm text-slate-600">
                                    Aligned with latest syllabus
                                </p>
                            </div>
                            <div className="rounded-3xl border border-brand-blue/20 bg-white p-6 text-center shadow-sm">
                                <div className="mx-auto mb-4 w-fit rounded-2xl bg-brand-blue/10 p-4">
                                    <ShieldCheck className="h-8 w-8 text-brand-blue" />
                                </div>
                                <h4 className="mb-2 font-bold text-brand-navy">
                                    CAIE Standards
                                </h4>
                                <p className="text-sm text-slate-600">
                                    Fully compliant with requirements
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Activity Gallery Section */}
            <section className="overflow-hidden bg-white py-24">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="mb-16 space-y-4 text-center">
                        <div className="inline-flex items-center space-x-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-black tracking-widest text-brand-blue uppercase">
                            <ImageIcon className="h-4 w-4" />
                            <span>Activity Gallery</span>
                        </div>
                        <h2 className="font-heading text-4xl font-extrabold tracking-tight text-brand-navy md:text-5xl">
                            Teaching in Action
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-slate-500">
                            Real moments from our classrooms, student activities, and learning journey.
                        </p>
                    </div>

                    <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
                        {galleryImages.map((img, i) => (
                            <div
                                key={i}
                                className="group overflow-hidden rounded-[32px] border border-slate-100 shadow-lg"
                            >
                                <img
                                    src={img}
                                    alt={`Gallery ${i}`}
                                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Environment - Split with Image */}
            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="mb-16 text-center">
                        <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-black tracking-widest text-brand-blue uppercase">
                            <ImageIcon className="h-4 w-4" />
                            <span>Learning Environment</span>
                        </div>
                        <h2 className="font-heading mb-4 text-4xl font-extrabold text-brand-navy md:text-5xl">
                            Modern & Tech-Supported Learning
                        </h2>
                        <p className="mx-auto max-w-3xl text-lg text-slate-600">
                            Students benefit from a modern, high-tech learning
                            environment supported by digital tools, interactive
                            materials, and carefully designed study resources.
                        </p>
                    </div>
                    <div className="mx-auto max-w-6xl">
                        <div className="grid gap-10 lg:grid-cols-2">
                            <div className="rounded-[56px] border border-brand-blue/20 bg-gradient-to-br from-brand-blue/10 to-brand-navy/10 p-12 shadow-sm">
                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="rounded-2xl bg-brand-blue p-4 shadow-lg">
                                            <Zap className="h-10 w-10 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="mb-2 text-2xl font-bold text-brand-navy">
                                                High-Tech Tools
                                            </h3>
                                            <p className="text-lg leading-relaxed text-slate-700">
                                                Students benefit from a{' '}
                                                <span className="font-bold text-brand-blue">
                                                    modern, high-tech learning
                                                    environment
                                                </span>{' '}
                                                supported by digital tools,
                                                interactive materials, and
                                                carefully designed study
                                                resources.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="rounded-2xl bg-brand-navy p-4 shadow-lg">
                                            <Target className="h-10 w-10 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="mb-2 text-2xl font-bold text-brand-navy">
                                                Disciplined Approach
                                            </h3>
                                            <p className="text-lg leading-relaxed text-slate-700">
                                                This approach enhances
                                                engagement, improves
                                                understanding, and supports
                                                different learning styles while
                                                maintaining{' '}
                                                <span className="font-bold text-brand-navy">
                                                    academic discipline
                                                </span>
                                                .
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-[56px] border-4 border-brand-blue/10 shadow-2xl">
                                <img
                                    src="../assets/teacher/5.jpg"
                                    alt="Learning Environment"
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent"></div>
                                <div className="absolute right-8 bottom-8 left-8">
                                    <p className="text-2xl font-bold text-white">
                                        Modern learning environment with
                                        advanced resources
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* My Commitment to Students */}
            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
                        <div className="relative order-2 lg:order-1">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-[48px] border-8 border-brand-blue/10 shadow-2xl">
                                <img
                                    src="../assets/teacher/2.jpg"
                                    alt="Commitment to Students"
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent"></div>
                            </div>
                            <div className="absolute -right-8 -bottom-8 max-w-xs rounded-[40px] bg-brand-blue p-8 shadow-2xl">
                                <p className="text-lg font-bold text-white">
                                    "Every student deserves to succeed with
                                    confidence and clarity."
                                </p>
                            </div>
                        </div>
                        <div className="order-1 space-y-8 lg:order-2">
                            <div className="inline-flex items-center space-x-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-black tracking-widest text-brand-blue uppercase">
                                <Heart className="h-4 w-4" />
                                <span>My Promise</span>
                            </div>
                            <h2 className="font-heading text-4xl font-extrabold text-brand-navy md:text-5xl">
                                My Commitment to Students
                            </h2>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: 'Ethical Teaching Practices',
                                        desc: 'Honest feedback, transparent progress tracking, and genuine care for student development.',
                                    },
                                    {
                                        title: 'Continuous Improvement',
                                        desc: 'Regular curriculum updates based on latest CAIE requirements and student feedback.',
                                    },
                                    {
                                        title: 'Individual Attention',
                                        desc: 'Recognizing that each student learns differently and adapting teaching methods accordingly.',
                                    },
                                    {
                                        title: 'Long-Term Success Focus',
                                        desc: 'Building genuine understanding rather than short-term exam tricks for lasting language skills.',
                                    },
                                    {
                                        title: 'Parent Partnership',
                                        desc: 'Regular communication with parents about progress, challenges, and strategies for improvement.',
                                    },
                                ].map((commitment, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="mt-1 rounded-full bg-brand-blue p-2">
                                            <ShieldCheck className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="mb-2 text-lg font-bold text-brand-navy">
                                                {commitment.title}
                                            </h4>
                                            <p className="leading-relaxed text-slate-600">
                                                {commitment.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Vision & Mission Section */}
            <section className="relative overflow-hidden bg-brand-blue-dark py-24">
                <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
                    <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
                        <div className="space-y-10 rounded-[64px] border border-white/10 bg-white/5 p-16 backdrop-blur-sm">
                            <div className="w-fit rounded-2xl bg-white/20 p-5">
                                <FileStack className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="font-heading text-4xl font-extrabold text-white">
                                Vision
                            </h2>
                            <p className="font-serif text-2xl leading-relaxed text-slate-400 text-white italic">
                                "Rofsan Sir's vision is to help English-medium
                                students{' '}
                                <span className="font-bold text-slate-300">
                                    overcome fear of Bengali, develop strong
                                    language foundations, and approach O Level
                                    examinations with confidence and clarity
                                </span>
                                —while fostering{' '}
                                <span className="font-bold text-slate-200">
                                    genuine understanding rather than short-term
                                    exam-oriented learning
                                </span>
                                ."
                            </p>
                        </div>
                        <div className="space-y-10 rounded-[64px] border border-white/10 bg-white/5 p-16 backdrop-blur-sm">
                            <div className="w-fit rounded-2xl bg-white/20 p-5">
                                <SquareStack className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="font-heading text-4xl font-extrabold text-white">
                                Mission
                            </h2>
                            <p className="font-serif text-2xl leading-relaxed text-slate-400 text-white italic">
                                "Rofsan Sir remains committed to{' '}
                                <span className="font-bold text-slate-200">
                                    ethical teaching, continuous improvement,
                                    and providing responsible academic guidance
                                </span>{' '}
                                that supports long-term student success."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Rofsan Sir - Navy Background */}
            <section className="relative overflow-hidden bg-brand-blue-dark py-24">
                <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
                    <div className="mb-16 text-center">
                        <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-5 py-2">
                            <Star className="h-4 w-4 text-white" />
                            <span className="text-xs font-black tracking-widest text-white uppercase">
                                Why Choose
                            </span>
                        </div>
                        <h2 className="font-heading mb-6 text-4xl font-extrabold text-white md:text-5xl">
                            Why Choose Rofsan Sir
                        </h2>
                        <p className="mx-auto max-w-4xl text-lg leading-relaxed text-slate-300">
                            Choosing the right teacher plays a vital role in a
                            student's confidence and success in O Level Bengali.
                            Rofsan Sir focuses on making learning clear,
                            supportive, and well-structured—so that both parents
                            and students feel confident about the journey.
                        </p>
                    </div>

                    <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                icon: <CheckCircle className="h-12 w-12" />,
                                title: 'Easy-to-Understand Teaching',
                                desc: 'Bengali is explained in a simple, step-by-step manner that suits English-medium students, especially those who find the subject challenging.',
                            },
                            {
                                icon: <Heart className="h-12 w-12" />,
                                title: 'Confidence-Building Approach',
                                desc: 'Lessons are designed to reduce fear and pressure, helping students feel comfortable and motivated to improve.',
                            },
                            {
                                icon: <ShieldCheck className="h-12 w-12" />,
                                title: 'Clear Exam Preparation',
                                desc: 'Students are guided on how to write answers properly, manage time, and meet CAIE exam requirements with confidence.',
                            },
                            {
                                icon: <Zap className="h-12 w-12" />,
                                title: 'Regular Practice & Feedback',
                                desc: 'Continuous assessments and personalised feedback help students understand their progress and areas for improvement.',
                            },
                            {
                                icon: <Award className="h-12 w-12" />,
                                title: 'Strong Foundations First',
                                desc: 'Emphasis is placed on basic language skills so students improve steadily, not just before exams.',
                            },
                            {
                                icon: <Users className="h-12 w-12" />,
                                title: 'Safe & Supportive Learning Environment',
                                desc: 'A calm, disciplined, and friendly classroom where students feel encouraged and supported.',
                            },
                        ].map((feature) => (
                            <div
                                key={feature.title}
                                className="group rounded-[56px] border-2 border-slate-100 bg-white p-12 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
                            >
                                <div className="mb-10 w-fit rounded-3xl bg-brand-navy/5 p-6 text-brand-navy transition-all group-hover:bg-brand-blue group-hover:text-white group-hover:shadow-lg">
                                    {feature.icon}
                                </div>
                                <h3 className="font-heading mb-5 text-xl font-bold tracking-tight text-brand-navy">
                                    {feature.title}
                                </h3>
                                <p className="text-base leading-relaxed text-slate-600">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="mx-auto mt-12 max-w-4xl text-center text-lg text-slate-300">
                        This balanced and caring approach ensures that students
                        are well-prepared for O Level examinations while
                        developing{' '}
                        <span className="font-bold text-white">
                            confidence, clarity, and a positive attitude
                        </span>{' '}
                        towards learning Bengali.
                    </p>

                    <AdmissionNow />
                </div>
                <div className="absolute top-0 left-0 h-full w-1/3 rounded-full bg-brand-blue/5 blur-[120px]"></div>
                <div className="absolute right-0 bottom-0 h-1/2 w-1/3 rounded-full bg-brand-blue/5 blur-[120px]"></div>
            </section>

            {/* Why I Teach Bengali - Personal Philosophy */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
                        <div className="space-y-8">
                            <div className="inline-flex items-center space-x-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-black tracking-widest text-brand-blue uppercase">
                                <Heart className="h-4 w-4" />
                                <span>Personal Philosophy</span>
                            </div>
                            <h2 className="font-heading text-4xl font-extrabold text-brand-navy md:text-5xl">
                                Why Do I Teach O Level Bengali?
                            </h2>

                            {/* Summary bullets before expandable content */}
                            <div className="rounded-3xl bg-brand-blue/5 p-6">
                                <h3 className="mb-4 text-lg font-bold text-brand-navy">My Mission:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">Help students overcome fear of Bengali through structured, logical teaching</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">Build genuine understanding, not just exam tricks</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">Use examiner insights to guide preparation ethically and responsibly</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">Create a fear-free environment where confidence naturally grows</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-6 text-lg leading-relaxed text-slate-700">
                                <p class="italic">
                                    <span className="font-bold text-brand-navy">
                                        The answer is simple —{' '}
                                    </span>
                                    <span className="font-bold text-brand-blue">
                                        because too many capable students lose
                                        confidence in a subject they should
                                        never have been afraid of.
                                    </span>{' '}
                                    <br />
                                    <br />
                                    Over the years of teaching in English-medium
                                    academic environments, I have repeatedly
                                    seen intelligent, hardworking students
                                    hesitate when it comes to Bengali. Not
                                    because they lack ability. Not because they
                                    are careless. But because they were never
                                    shown the language in a structured, logical,
                                    and accessible way.
                                </p>
                                <p class="italic">
                                    O Level Bengali often feels overwhelming to
                                    students who think and write primarily in
                                    English.{' '}
                                    <span className="font-bold text-brand-navy">
                                        Grammar appears complicated. Composition
                                        feels unpredictable. Examination
                                        standards seem unclear. Gradually,
                                        hesitation turns into fear — and fear
                                        affects performance.
                                    </span>{' '}
                                </p>
                                <p className="border-l-4 border-brand-blue pl-6 font-semibold text-brand-blue italic">
                                    That is where my work truly begins.
                                </p>

                                {showFullPhilosophy && (
                                    <>
                                        <p>
                                            I teach O Level Bengali to bring
                                            clarity where confusion exists. With
                                            academic training in Bengali
                                            Language and Literature, leadership
                                            experience in English-medium
                                            institutions, and examiner-level
                                            understanding of CAIE assessment
                                            standards, my goal is to simplify
                                            what feels complex.
                                        </p>
                                        <p className="border-l-4 border-brand-blue pl-6 font-semibold text-brand-blue italic">
                                            Bengali is not difficult when it is
                                            taught step by step.
                                        </p>
                                        <p>
                                            Grammar becomes manageable when its
                                            structure is explained logically.
                                            Composition improves when students
                                            understand how to organise ideas
                                            clearly. Examination confidence
                                            grows when learners know exactly
                                            what assessment objectives require
                                            and how answers are evaluated.
                                        </p>
                                        <p>
                                            <span className="font-bold text-brand-navy">
                                                As a CAIE Approved O Level
                                                Bengali Examiner,
                                            </span>{' '}
                                            <span className="font-bold text-brand-blue">
                                                I understand how scripts are
                                                assessed,
                                            </span>{' '}
                                            how marks are awarded, and where
                                            students commonly lose valuable
                                            points. This insight allows me to
                                            guide preparation ethically and
                                            responsibly — focusing on clarity,
                                            structure, and consistent practice
                                            rather than memorisation.
                                        </p>

                                        <p>
                                            Teaching O Level Bengali is not just
                                            about preparing students for one
                                            examination session.{' '}
                                            <span className="font-bold text-brand-blue">
                                                It is about helping
                                                English-medium learners
                                                reconnect with their language
                                                academically, remove fear, and
                                                build steady confidence.{' '}
                                            </span>
                                        </p>
                                        <p>
                                            In my classroom,{' '}
                                            <span className="font-bold text-brand-blue">
                                                learning is structured,
                                                disciplined,
                                            </span>{' '}
                                            and supportive. Regular assessments,
                                            mock examinations, detailed
                                            feedback, and carefully designed
                                            resources ensure that improvement is
                                            gradual and measurable. Students are
                                            encouraged to think, to write
                                            clearly, and to approach exams
                                            calmly.
                                        </p>
                                        <p>
                                            <span className="font-bold text-brand-navy">
                                                I teach O Level Bengali
                                            </span>{' '}
                                            <span className="font-bold text-brand-blue">
                                                {' '}
                                                because I believe no student
                                                should feel intimidated by their
                                                own language.
                                            </span>{' '}
                                            When clarity replaces confusion,
                                            confidence naturally follows. And
                                            when confidence grows, success
                                            becomes the outcome — not the
                                            pressure.
                                        </p>
                                    </>
                                )}

                                <button
                                    onClick={() =>
                                        setShowFullPhilosophy(
                                            !showFullPhilosophy,
                                        )
                                    }
                                    className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 font-semibold text-white transition-all hover:bg-brand-navy focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 focus:outline-none"
                                >
                                    {showFullPhilosophy ? (
                                        <>
                                            Show Less
                                            <ChevronUp className="h-5 w-5" />
                                        </>
                                    ) : (
                                        <>
                                            Read More
                                            <ChevronDown className="h-5 w-5" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-[48px] border-8 border-brand-navy/10 shadow-2xl">
                                <img
                                    src="../assets/teacher/17.jpg"
                                    alt="Teaching Philosophy"
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default AboutPage;
