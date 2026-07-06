import React from 'react';
// Added missing Sparkles icon import
import {
    Award,
    BookOpen,
    CheckCircle,
    ClipboardList,
    Clock,
    Edit3,
    PenTool,
    Sparkles,
    Star,
    Target,
    Users,
    Zap,
} from 'lucide-react';
import SEO from '../../../components/SEO/SEO';
import { AdmissionNow } from '../components/AdmissionNow';

const ClassIXPage: React.FC<{ setActiveTab: (tab: string) => void }> = ({
    setActiveTab,
}) => {
    return (
        <>
            <SEO path="/class-9" />
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
                            Class IX Regular Program
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
                                <Zap className="h-4 w-4 text-brand-blue" />
                                <span className="text-xs font-black tracking-widest text-brand-blue uppercase">
                                    Regular Program
                                </span>
                            </div>
                            <h1 className="font-heading text-5xl leading-tight font-extrabold tracking-tight text-brand-navy md:text-7xl">
                                Strengthening Skills &{' '}
                                <span className="text-brand-blue">
                                    Exam Readiness
                                </span>
                            </h1>
                            <p className="max-w-xl text-xl leading-relaxed font-medium text-slate-500">
                                The Class IX programme focuses on developing
                                core O Level Bengali skills while gradually
                                introducing exam-style practice. Students learn
                                to apply language concepts correctly and
                                confidently.
                            </p>

                            <div className="grid grid-cols-2 gap-6 pt-8 md:grid-cols-4">
                                {[
                                    {
                                        label: 'Program Duration',
                                        value: '1 Year',
                                        icon: <Clock className="h-5 w-5" />,
                                    },
                                    {
                                        label: 'Practice Sessions',
                                        value: 'Weekly',
                                        icon: <PenTool className="h-5 w-5" />,
                                    },
                                    {
                                        label: 'Aligned Curriculum',
                                        value: 'CAIE',
                                        icon: <Award className="h-5 w-5" />,
                                    },
                                    {
                                        label: 'Exam Focused',
                                        value: '100%',
                                        icon: <Target className="h-5 w-5" />,
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
                                    src="../assets/class-banner/ClassIX.jpg"
                                    alt="Class IX Students"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="animate-float absolute -bottom-8 -left-8 rounded-[40px] bg-brand-blue p-8 text-white shadow-2xl">
                                <Award className="mb-3 h-10 w-10" />
                                <p className="text-2xl font-black tracking-tighter uppercase">
                                    Perfect For
                                </p>
                                <p className="text-xs font-bold text-white/80">
                                    Class IX Students
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
                                This comprehensive programme bridges the gap
                                between foundational learning and advanced exam
                                preparation. Students develop proficiency in all
                                aspects of O Level Bengali while building
                                confidence for examinations.
                            </p>
                            <p>
                                Concepts are explained clearly with regular
                                practice sessions. Students are encouraged to
                                write confidently while developing accuracy and
                                structure in their answers.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center gap-6 pt-6 sm:flex-row">
                            <div className="flex items-center space-x-3 rounded-2xl border border-slate-100 bg-slate-50 px-6 py-3">
                                <Users className="h-5 w-5 text-brand-blue" />
                                <span className="font-bold text-brand-navy">
                                    Focused Groups
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
                        <p className="mx-auto max-w-2xl font-medium text-slate-600">
                            Comprehensive curriculum covering composition,
                            language skills, and exam techniques.
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: 'Composition Writing',
                                desc: 'Letter, Report, Dialogue writing fundamentals.',
                                icon: <PenTool />,
                            },
                            {
                                title: 'Vocabulary Expansion',
                                desc: 'Advanced vocabulary and sentence transformation.',
                                icon: <Sparkles />,
                            },
                            {
                                title: 'Reading Techniques',
                                desc: 'Advanced reading and comprehension strategies.',
                                icon: <BookOpen />,
                            },
                            {
                                title: 'CAIE Assessment Prep',
                                desc: 'Understanding O Level assessment expectations.',
                                icon: <Target />,
                            },
                            {
                                title: 'Language Comprehension',
                                desc: 'MCQ and open-ended comprehension practice.',
                                icon: <ClipboardList />,
                            },
                            {
                                title: 'Writing Skills',
                                desc: 'Developing accuracy and structure in answers.',
                                icon: <Edit3 />,
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
                                    Structured methodology combining theory,
                                    practice, and personalized feedback.
                                </p>
                            </div>

                            <div className="grid gap-10">
                                <div className="space-y-6">
                                    <h4 className="flex items-center text-2xl font-bold tracking-tight text-brand-blue-light">
                                        <BookOpen className="mr-4 h-6 w-6" />{' '}
                                        Comprehensive Learning
                                    </h4>
                                    <ul className="grid gap-4">
                                        {[
                                            'Clear concept explanations',
                                            'Regular practice sessions',
                                            'Topic-wise assessments',
                                            'Writing practice with feedback',
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
                                        <ClipboardList className="mr-4 h-6 w-6" />{' '}
                                        Assessment & Progress
                                    </h4>
                                    <ul className="grid gap-4">
                                        {[
                                            'Monthly and pop tests',
                                            'Mid-term and yearly examinations',
                                            'Detailed progress reports',
                                            'Personalized improvement plans',
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
                                <p className="font-serif text-xl leading-relaxed text-slate-300 italic">
                                    "Students develop strong fundamentals,
                                    improved writing ability, and readiness to
                                    enter Class X with confidence. They gain
                                    proficiency in all aspects of O Level
                                    Bengali while building examination skills."
                                </p>
                                <div className="grid gap-6">
                                    {[
                                        {
                                            title: 'Writing Proficiency',
                                            desc: 'Master composition writing with proper structure and style',
                                        },
                                        {
                                            title: 'Language Mastery',
                                            desc: 'Strong command over Bengali vocabulary and grammar',
                                        },
                                        {
                                            title: 'Exam Readiness',
                                            desc: 'Prepared for Class X O Level Bengali examinations',
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
                <div className="absolute bottom-0 left-0 h-full w-1/2 rounded-full bg-brand-blue/5 blur-[200px]"></div>
            </section>

            {/* CTA Section */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-4xl space-y-12 px-4 text-center">
                    <div className="space-y-4">
                        <h2 className="font-heading text-4xl font-extrabold tracking-tight text-brand-navy md:text-6xl">
                            Ready to Excel in{' '}
                            <span className="text-brand-blue">
                                Class IX Bengali?
                            </span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-xl leading-relaxed font-medium text-slate-500">
                            Join our Class IX Regular Program and build a strong
                            foundation for your O Level success.
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

export default ClassIXPage;
