import {
    Award,
    BookOpen,
    CheckCircle,
    ClipboardList,
    Clock,
    PenTool,
    ShieldCheck,
    Star,
    Target,
} from 'lucide-react';
import React from 'react';
import SEO from '../../../components/SEO/SEO';
import { AdmissionNow } from '../components/AdmissionNow';

const ClassXPage: React.FC<{ setActiveTab: (tab: string) => void }> = ({
    setActiveTab,
}) => {
    return (
        <>
            <SEO path="/class-10" />
            <div className="animate-fade-in-up min-h-screen bg-white pt-24">
            {/* Breadcrumbs & Header */}
            <section className="border-b border-slate-100 bg-slate-50 py-6">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="flex items-center space-x-2 text-xs font-bold tracking-widest text-slate-400 uppercase">
                        <button
                            onClick={() => setActiveTab('routine')}
                            className="transition-colors hover:text-brand-blue"
                        >
                            Courses
                        </button>
                        <span className="text-slate-300">/</span>
                        <span className="text-brand-navy">
                            Class X Exam Focused Program
                        </span>
                    </div>
                </div>
            </section>

            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 lg:py-32">
                <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        <div className="space-y-8">
                            <div className="inline-flex items-center space-x-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-5 py-2">
                                <Target className="h-4 w-4 text-brand-blue" />
                                <span className="text-xs font-black tracking-widest text-brand-blue uppercase">
                                    Exam Focused Program
                                </span>
                            </div>
                            <h1 className="font-heading text-5xl leading-tight font-extrabold tracking-tight text-brand-navy md:text-7xl">
                                Intensive Preparation for{' '}
                                <span className="text-brand-blue">
                                    Final Examination
                                </span>
                            </h1>
                            <p className="max-w-xl text-xl leading-relaxed font-medium text-slate-500">
                                The Class X programme is an exam-focused course
                                designed to prepare students thoroughly for CAIE
                                O Level Bengali examinations. The course
                                emphasises exam technique, accuracy, and
                                confidence.
                            </p>

                            <div className="grid grid-cols-2 gap-6 pt-8 md:grid-cols-4">
                                {[
                                    {
                                        label: 'Intensive Program',
                                        value: '1 Year',
                                        icon: <Clock className="h-5 w-5" />,
                                    },
                                    {
                                        label: 'Syllabus Coverage',
                                        value: 'Full',
                                        icon: <BookOpen className="h-5 w-5" />,
                                    },
                                    {
                                        label: 'Exam Practice',
                                        value: 'Mock',
                                        icon: (
                                            <ClipboardList className="h-5 w-5" />
                                        ),
                                    },
                                    {
                                        label: 'Exam Ready',
                                        value: '100%',
                                        icon: <Award className="h-5 w-5" />,
                                    },
                                ].map((stat, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="text-brand-blue">
                                            {stat.icon}
                                        </div>
                                        <p className="text-xl leading-none font-black text-brand-navy">
                                            {stat.value}
                                        </p>
                                        <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="overflow-hidden rounded-[64px] border-8 border-slate-50 shadow-2xl">
                                <img
                                    src="../assets/class-banner/ClassX.jpg"
                                    alt="Class X Candidates"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="animate-float absolute -bottom-8 -left-8 rounded-[40px] bg-brand-blue p-8 text-white shadow-2xl">
                                <ShieldCheck className="mb-3 h-10 w-10" />
                                <p className="text-2xl font-black tracking-tighter uppercase">
                                    Perfect For
                                </p>
                                <p className="text-xs font-bold text-white/80">
                                    Class X Candidates
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="space-y-12 rounded-[64px] border border-slate-100 bg-white p-12 shadow-xl md:p-20">
                        <div className="space-y-6 text-center">
                            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-brand-navy md:text-4xl">
                                Program Overview
                            </h2>
                            <div className="mx-auto h-1 w-16 rounded-full bg-brand-blue"></div>
                        </div>
                        <div className="space-y-8 text-center text-lg leading-relaxed font-medium text-slate-600">
                            <p>
                                This intensive programme is specifically
                                designed for Class X students preparing for
                                their final O Level Bengali examination. The
                                focus is on mastering exam techniques, building
                                confidence, and achieving excellent results.
                            </p>
                            <p>
                                Classes are highly structured and exam-oriented.
                                Students practise under exam-like conditions and
                                receive detailed feedback to improve performance
                                and build examination confidence.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center gap-6 pt-6 sm:flex-row">
                            <div className="flex items-center space-x-3 rounded-2xl border border-slate-100 bg-slate-50 px-6 py-3">
                                <Award className="h-5 w-5 text-brand-blue" />
                                <span className="font-bold text-brand-navy">
                                    Exam Excellence
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Students Learn */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="mb-16 space-y-4 text-center">
                        <h2 className="font-heading text-4xl font-extrabold tracking-tight text-brand-navy">
                            What Students Learn
                        </h2>
                        <p className="mx-auto max-w-2xl font-medium text-slate-500">
                            Comprehensive exam preparation covering advanced
                            composition, full syllabus, and exam techniques.
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: 'Advanced Composition',
                                desc: 'Master advanced writing techniques and essay structures.',
                                icon: <PenTool />,
                            },
                            {
                                title: 'Full Paper Coverage',
                                desc: 'Complete Paper 01 and Paper 02 syllabus mastery.',
                                icon: <BookOpen />,
                            },
                            {
                                title: 'Time Management',
                                desc: 'Strategies for optimal exam time allocation.',
                                icon: <Clock />,
                            },
                            {
                                title: 'Answer Presentation',
                                desc: 'Perfecting answer structure and marking awareness.',
                                icon: <ClipboardList />,
                            },
                            {
                                title: 'Mock Examinations',
                                desc: 'Full syllabus mock tests with detailed feedback.',
                                icon: <Award />,
                            },
                            {
                                title: 'Exam Confidence',
                                desc: 'Building mental preparedness for exam success.',
                                icon: <ShieldCheck />,
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="group rounded-[48px] border border-slate-100 bg-slate-50 p-10 transition-all hover:shadow-xl"
                            >
                                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue text-white shadow-lg transition-transform group-hover:scale-110">
                                    <CheckCircle className="h-7 w-7" />
                                </div>
                                <h4 className="mb-4 text-2xl font-bold tracking-tight text-brand-navy">
                                    {item.title}
                                </h4>
                                <p className="text-sm leading-relaxed font-medium text-slate-500">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Teaching Approach */}
            <section className="relative overflow-hidden bg-brand-navy py-24 text-white">
                <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
                    <div className="grid gap-20 lg:grid-cols-2">
                        <div className="space-y-12">
                            <div className="space-y-10 pt-22">
                                <h2 className="font-heading text-4xl font-extrabold tracking-tight">
                                    Teaching Approach
                                </h2>
                                <p className="text-lg text-slate-300">
                                    Highly structured, exam-oriented methodology
                                    with real-time practice and feedback.
                                </p>
                            </div>

                            <div className="grid gap-10">
                                <div className="space-y-6">
                                    <h4 className="flex items-center text-2xl font-bold tracking-tight text-brand-blue-light">
                                        <Target className="mr-4 h-6 w-6" />{' '}
                                        Exam-Focused Learning
                                    </h4>
                                    <ul className="grid gap-4">
                                        {[
                                            'Topic-wise mock tests',
                                            'Full syllabus mock examinations',
                                            'Solve classes with detailed explanations',
                                            'One-to-one feedback where needed',
                                        ].map((item, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center font-bold text-slate-300"
                                            >
                                                <CheckCircle className="mr-4 h-5 w-5 shrink-0 text-brand-blue-light" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="space-y-6">
                                    <h4 className="flex items-center text-2xl font-bold tracking-tight text-brand-blue-light">
                                        <Award className="mr-4 h-6 w-6" /> Exam
                                        Excellence System
                                    </h4>
                                    <ul className="grid gap-4">
                                        {[
                                            'Real exam-style evaluation',
                                            'Time-bound practice sessions',
                                            'Marking scheme familiarization',
                                            'Performance tracking and improvement',
                                        ].map((item, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center font-bold text-slate-300"
                                            >
                                                <CheckCircle className="mr-4 h-5 w-5 shrink-0 text-brand-blue-light" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="h-fit rounded-[64px] border border-white/10 bg-white/5 p-12 backdrop-blur-sm">
                            <div className="space-y-10">
                                <div className="w-fit rounded-2xl bg-brand-blue p-5 shadow-xl">
                                    <Star className="h-10 w-10 text-white" />
                                </div>
                                <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white">
                                    Expected Outcome
                                </h2>
                                <p className="font-serif text-xl leading-relaxed text-slate-400 italic">
                                    "Students enter the O Level Bengali
                                    examination with confidence, clarity, and a
                                    thorough understanding of CAIE exam
                                    requirements. They are fully prepared for
                                    exam success with strong techniques and
                                    mental preparedness."
                                </p>
                                <div className="grid gap-6">
                                    {[
                                        {
                                            title: 'Exam Confidence',
                                            desc: 'Mental preparedness and exam-day confidence',
                                        },
                                        {
                                            title: 'Technique Mastery',
                                            desc: 'Proven exam strategies and time management',
                                        },
                                        {
                                            title: 'Grade Excellence',
                                            desc: 'Prepared for top grades in O Level Bengali',
                                        },
                                    ].map((o, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-start space-x-6 rounded-3xl border border-white/5 bg-white/5 p-6 transition-colors hover:bg-white/10"
                                        >
                                            <div className="text-2xl leading-none font-black text-brand-blue-light">
                                                {idx + 1}
                                            </div>
                                            <div>
                                                <p className="text-lg font-black text-white">
                                                    {o.title}
                                                </p>
                                                <p className="text-sm font-medium text-slate-200">
                                                    {o.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 h-full w-1/2 rounded-full bg-brand-blue/5 blur-[200px]"></div>
            </section>

            {/* CTA Section */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-4xl space-y-12 px-4 text-center">
                    <div className="space-y-4">
                        <h2 className="font-heading text-4xl font-extrabold tracking-tight text-brand-navy md:text-6xl">
                            Ready for{' '}
                            <span className="text-brand-blue">
                                Exam Success?
                            </span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-xl leading-relaxed font-medium text-slate-500">
                            Join our Class X Exam Focused Program and achieve
                            excellence in your O Level Bengali examination.
                        </p>
                    </div>

                    <div className="flex flex-col justify-center gap-6 sm:flex-row">
                        <AdmissionNow />
                    </div>
                </div>
            </section>
            </div>
        </>
    );
};

export default ClassXPage;
