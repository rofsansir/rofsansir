import React from 'react';
// Added missing icon imports (Edit3, PenTool, Library) to fix compilation errors
import {
    Award,
    BookOpen,
    CheckCircle,
    Clock,
    Edit3,
    Heart,
    Library,
    PenTool,
    Sparkles,
    Star,
    Target,
    Users,
} from 'lucide-react';
import SEO from '../../../components/SEO/SEO';
import { AdmissionNow } from '../components/AdmissionNow';

const ClassVIIIPage: React.FC<{ setActiveTab: (tab: string) => void }> = ({
    setActiveTab,
}) => {
    return (
        <>
            <SEO path="/class-8" />
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
                            Foundation Batch (Class VIII)
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
                                <Sparkles className="h-4 w-4 text-brand-blue" />
                                <span className="text-xs font-black tracking-widest text-brand-blue uppercase">
                                    Foundation Program
                                </span>
                            </div>
                            <h1 className="font-heading text-5xl leading-tight font-extrabold tracking-tight text-brand-navy md:text-7xl">
                                Building Strong Foundations in{' '}
                                <span className="text-brand-blue">
                                    O Level Bengali
                                </span>
                            </h1>
                            <p className="max-w-xl text-xl leading-relaxed text-slate-500">
                                The Foundation Batch is designed for students
                                who are beginning their O Level Bengali journey
                                or who need extra support to strengthen their
                                basic language skills.
                            </p>

                            <div className="grid grid-cols-2 gap-6 pt-8 md:grid-cols-4">
                                {[
                                    {
                                        label: 'Program Duration',
                                        value: '1 Year',
                                        icon: <Clock className="h-5 w-5" />,
                                    },
                                    {
                                        label: 'Batch Size',
                                        value: 'Small',
                                        icon: <Users className="h-5 w-5" />,
                                    },
                                    {
                                        label: 'Assessments',
                                        value: 'Weekly',
                                        icon: <Award className="h-5 w-5" />,
                                    },
                                    {
                                        label: 'Personal Attention',
                                        value: '100%',
                                        icon: <Heart className="h-5 w-5" />,
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
                                    src="../assets/class-banner/ClassVIII.jpg"
                                    alt="Foundation Batch"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="animate-float absolute -bottom-8 -left-8 rounded-[40px] bg-brand-blue p-8 text-white shadow-2xl">
                                <Target className="mb-3 h-10 w-10" />
                                <p className="text-2xl font-black tracking-tighter uppercase">
                                    Perfect For
                                </p>
                                <p className="text-xs font-bold text-white/80">
                                    Class VIII Students
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="space-y-12 rounded-[64px] bg-white p-12 shadow-xl md:p-20">
                        <div className="space-y-6 text-center">
                            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-brand-navy md:text-4xl">
                                Program Overview
                            </h2>
                            <div className="mx-auto h-1 w-16 rounded-full bg-brand-blue"></div>
                        </div>
                        <div className="space-y-8 text-center text-lg leading-relaxed text-slate-600">
                            <p>
                                This programme focuses on building confidence,
                                clarity, and familiarity with Bengali in a
                                structured and supportive way. Students learn at
                                their own pace with personalized guidance.
                            </p>
                            <p>
                                Lessons are delivered in a simple, step-by-step
                                manner specially suited for English-medium
                                students. Extra attention is given to students
                                who feel anxious or weak in Bengali.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center gap-6 pt-6 sm:flex-row">
                            <div className="flex items-center space-x-3 rounded-2xl border border-slate-100 bg-slate-50 px-6 py-3">
                                <Users className="h-5 w-5 text-brand-blue" />
                                <span className="font-bold text-brand-navy">
                                    Limited Seats
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
                        <p className="mx-auto max-w-2xl text-slate-500">
                            Comprehensive curriculum covering all essential
                            Bengali language fundamentals.
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: 'Basic Sentence Structure',
                                desc: 'Learn proper sentence formation and usage in Bengali.',
                                icon: <Sparkles />,
                            },
                            {
                                title: 'Vocabulary Building',
                                desc: 'Expand vocabulary for everyday and academic contexts.',
                                icon: <BookOpen />,
                            },
                            {
                                title: 'Spelling & Word Formation',
                                desc: 'Master Bengali spelling rules and word building.',
                                icon: <Edit3 />,
                            },
                            {
                                title: 'Composition Writing Basics',
                                desc: 'Introduction to basic writing and composition skills.',
                                icon: <PenTool />,
                            },
                            {
                                title: 'Reading Comprehension',
                                desc: 'Develop basic reading and understanding skills.',
                                icon: <Library />,
                            },
                            {
                                title: 'Writing Comprehension',
                                desc: 'Develop basic of comprehension writing skills.',
                                icon: <Library />,
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
                                <p className="text-sm leading-relaxed text-slate-500">
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
                                <p className="text-lg text-slate-200">
                                    Our methodology is designed to make learning
                                    Bengali enjoyable and effective.
                                </p>
                            </div>

                            <div className="grid gap-10">
                                <div className="space-y-6">
                                    <h4 className="flex items-center text-2xl font-bold text-brand-blue-light">
                                        <Users className="mr-4 h-6 w-6" />{' '}
                                        Student-Centered Learning
                                    </h4>
                                    <ul className="grid gap-4">
                                        {[
                                            'Personalized pace learning',
                                            'Individual attention and support',
                                            'Regular progress monitoring',
                                            'Confidence building approach',
                                        ].map((item, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center font-bold text-slate-300"
                                            >
                                                <CheckCircle className="mr-4 h-5 w-5 text-brand-blue-light" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="space-y-6">
                                    <h4 className="flex items-center text-2xl font-bold text-brand-blue-light">
                                        <Award className="mr-4 h-6 w-6" />{' '}
                                        Assessment & Practice
                                    </h4>
                                    <ul className="grid gap-4">
                                        {[
                                            'Regular class tests',
                                            'Basic writing practice',
                                            'Guided worksheets',
                                            'Foundational assessments',
                                        ].map((item, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center font-bold text-slate-300"
                                            >
                                                <CheckCircle className="mr-4 h-5 w-5 text-brand-blue-light" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="h-fit rounded-[64px] border border-white/10 bg-white/5 p-12 backdrop-blur-sm">
                            <div className="space-y-10">
                                <div className="w-fit rounded-2xl bg-brand-blue p-5">
                                    <Star className="h-10 w-10 text-white" />
                                </div>
                                <h2 className="font-heading text-3xl font-extrabold text-white">
                                    Expected Outcome
                                </h2>
                                <p className="font-serif text-lg leading-relaxed text-slate-200 italic">
                                    "Students complete the Foundation Batch with
                                    improved confidence, basic language control,
                                    and readiness to move into the Class IX O
                                    Level Bengali programme."
                                </p>
                                <div className="grid gap-6">
                                    {[
                                        {
                                            title: 'Confidence',
                                            desc: 'Overcome anxiety and build confidence in Bengali',
                                        },
                                        {
                                            title: 'Foundation',
                                            desc: 'Strong fundamentals for future learning',
                                        },
                                        {
                                            title: 'Readiness',
                                            desc: 'Prepared for advanced O Level courses',
                                        },
                                    ].map((o, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-start space-x-6 rounded-3xl bg-white/5 p-6"
                                        >
                                            <div className="text-2xl leading-none font-black text-brand-blue-light">
                                                {idx + 1}
                                            </div>
                                            <div>
                                                <p className="text-lg font-black text-white">
                                                    {o.title}
                                                </p>
                                                <p className="text-sm text-slate-300">
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
                <div className="absolute top-0 right-0 h-full w-1/3 rounded-full bg-brand-blue/5 blur-[120px]"></div>
            </section>

            {/* CTA Section */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-4xl space-y-12 px-4 text-center">
                    <div className="space-y-4">
                        <h2 className="font-heading text-4xl font-extrabold tracking-tight text-brand-navy md:text-6xl">
                            Ready to Start Your{' '}
                            <span className="text-brand-blue">
                                Bengali Journey?
                            </span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-xl leading-relaxed text-slate-500">
                            Join our Foundation Batch and build a strong
                            foundation for your O Level Bengali success.
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

export default ClassVIIIPage;
