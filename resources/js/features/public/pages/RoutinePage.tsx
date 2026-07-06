import {
    Award,
    CheckCircle,
    GraduationCap,
    Mail,
    MapPin,
    Monitor,
    Phone,
    School,
    Smartphone,
    BookOpenText,
    Spotlight,
    Layers,
    BookCopy,
    Star,
    Users,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { AdmissionNow } from '../components/AdmissionNow';
interface Routine {
    id: number;
    class_level: string;
    batch: string;
    day_1: string | null;
    time_1: string | null;
    classroom_1: string | null;
    day_2: string | null;
    time_2: string | null;
    classroom_2: string | null;
    session_year: string;
}

interface PaymentPlan {
    id: number;
    class_level: string;
    monthly_fee: number;
    months: number;
    total_fee: number;
    full_payment_discount: number | null;
    installment_amount: number | null;
    admission_fee: string | null;
    books_fee: string | null;
    additional_fee: string | null;
    features: string | null;
    payment_terms: string | null;
}

const CoursesAdmissionPage: React.FC = () => {
    const [activeBatch, setActiveBatch] = useState('Class-10');
    const [routines, setRoutines] = useState<Routine[]>([]);
    const [paymentPlans, setPaymentPlans] = useState<PaymentPlan[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        // Static site: routines & payment plans are no longer fetched from a
        // backend (those tables were empty). The page renders hardcoded program
        // cards, so we just stop the loading state.
        setLoading(false);
    };

    // Group routines by class level
    const groupedRoutines = routines.reduce(
        (acc, routine) => {
            const key = routine.class_level;
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(routine);
            return acc;
        },
        {} as Record<string, Routine[]>,
    );

    const programs = [
        {
            title: 'Foundation Batch',
            batch: 'Class VIII',
            features: [
                'Basic sentence structure',
                'Vocabulary building',
                'Composition writing basics',
                'Comprehension basics',
            ],
            duration: '1 Year',
            type: 'Small Batch',
            color: 'border-brand-blue-light/30',
            id: 'class-viii',
        },
        {
            title: 'Regular Program',
            batch: 'Class IX',
            features: [
                'Composition writing skills',
                'Vocabulary expansion',
                'CAIE assessment prep',
                'Comprehension development',
            ],
            duration: '1 Year',
            type: 'Focused Groups',
            color: 'border-brand-blue/30',
            id: 'class-ix',
        },
        {
            title: 'Exam Focused',
            batch: 'Class X',
            features: [
                'Advanced composition techniques',
                'Time management strategies',
                'Full syllabus coverage',
                'Comprehension mastery',
            ],
            duration: '1 Year',
            type: 'Exam Ready',
            color: 'border-brand-navy/30',
            id: 'class-x',
        },
    ];

    return (
        <div className="animate-fade-in-up min-h-screen pt-24">
            {/* Page Hero Header */}
            <section className="relative overflow-hidden bg-brand-blue-dark py-24">
                <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
                    <div className="mx-auto max-w-4xl space-y-8 text-center">
                        <div className="inline-flex items-center space-x-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-6 py-2.5">
                            <Award className="h-5 w-5 text-white" />
                            <span className="text-xs font-black tracking-widest text-white uppercase">
                              International Curriculum Trained & Certified Teacher
                            </span>
                        </div>
                        <h1 className="font-heading text-5xl leading-tight font-extrabold tracking-tight text-white md:text-7xl">
                            O Level Bengali{' '}
                            <span className="text-brand-blue-light">Courses</span>
                        </h1>
                        <p className="text-xl leading-relaxed text-slate-300">
                            ⁠Specialised preparation for Cambridge & Edexcel O Level Bengali  for English medium students.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-12 md:grid-cols-4">
                            {[
                                {
                                    label: 'Experience',
                                    value: '8+',
                                    icon: (
                                        <GraduationCap className="h-6 w-6 text-white" />
                                    ),
                                },
                                {
                                    label: 'Success',
                                    value: '98%',
                                    icon: (
                                        <Star className="h-6 w-6 text-white" />
                                    ),
                                },
                                {
                                    label: 'Students Guided',
                                    value: '3000+',
                                    icon: (
                                        <Users className="h-6 w-6 text-white" />
                                    ),
                                },
                                {
                                    label: 'Rating',
                                    value: '4.9/5',
                                    icon: (
                                        <CheckCircle className="h-6 w-6 text-white" />
                                    ),
                                },
                            ].map((stat, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col items-center rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-inner"
                                >
                                    <div className="mb-3 text-brand-blue-light">
                                        {stat.icon}
                                    </div>
                                    <p className="text-3xl font-black text-white">
                                        {stat.value}
                                    </p>
                                    <p className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 h-full w-1/2 rounded-full bg-brand-blue/5 blur-[120px]"></div>
            </section>

            {/* Programs Selection */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="mb-20 space-y-6 text-center">
                        <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-black tracking-widest text-brand-blue uppercase">
                            <span>Programs</span>
                        </div>
                        <div className="mx-auto mb-6 flex w-fit items-center justify-center">
                            <Layers className="h-18 w-18" />
                        </div>
                        <h2 className="font-heading text-4xl font-extrabold tracking-tight text-brand-navy md:text-5xl">
                            Our Programs
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-500">
                            Designed for different skill levels to ensure every
                            student reaches their target grade.
                        </p>
                    </div>

                    <div className="grid gap-10 lg:grid-cols-3">
                        {programs.map((program, i) => (
                            <div
                                key={i}
                                className={`border-2 bg-slate-50 ${program.color} group flex flex-col rounded-[56px] p-12 transition-all hover:shadow-2xl`}
                            >
                                <div className="flex-grow space-y-8">
                                    <div className="space-y-3">
                                        <h3 className="text-3xl font-black tracking-tight text-brand-navy">
                                            {program.title}
                                        </h3>
                                        <span className="inline-flex w-fit rounded-full bg-brand-blue px-4 py-2 text-[14px] font-black tracking-widest text-white uppercase">
                                            {program.batch}
                                        </span>
                                    </div>
                                    <ul className="space-y-5">
                                        {program.features.map(
                                            (feature, fidx) => (
                                                <li
                                                    key={fidx}
                                                    className="flex items-start font-bold text-slate-600"
                                                >
                                                    <CheckCircle className="mr-4 h-6 w-6 shrink-0 text-brand-blue" />
                                                    {feature}
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                    <div className="flex justify-between border-t border-slate-200 pt-8 text-xs font-black tracking-widest text-slate-400 uppercase">
                                        <span>{program.duration}</span>
                                        <span>{program.type}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => {
                                        window.location.href = `/${program.id}`;
                                    }}
                                    className="mt-12 w-full rounded-3xl bg-brand-navy py-6 text-xl font-black text-white shadow-xl transition-all group-hover:scale-[1.02] hover:bg-brand-blue"
                                >
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Our Courses? */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="mb-20 space-y-6 text-center">
                        <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-black tracking-widest text-brand-blue uppercase">
                            <span>Academic</span>
                        </div>
                        <div className="mx-auto mb-6 flex w-fit items-center justify-center">
                            <BookCopy className="h-18 w-18" />
                        </div>
                        <h2 className="font-heading text-4xl font-extrabold tracking-tight text-brand-navy md:text-5xl">
                            The Academic Advantage
                        </h2>
                        <p className="text-lg leading-relaxed text-slate-500">
                            Experience the difference with our proven teaching
                            methodology.
                        </p>
                    </div>
                    <div className="grid gap-10 md:grid-cols-2">
                        {[
                            {
                                title: 'Certified Teacher',
                                icon: <Award />,
                                desc: 'Expert teacher with 8+ years of experience in leading institutions.',
                                color: 'bg-brand-blue/10 text-brand-blue',
                            },
                            {
                                title: 'Small Batches',
                                icon: <Users />,
                                desc: 'Personalized attention with strictly limited students per batch for interactive learning.',
                                color: 'bg-brand-blue-light/10 text-brand-blue-light',
                            },
                            {
                                title: 'International Curriculum Aligned',
                                icon: <GraduationCap />,
                                desc: 'Curriculum and teaching approach aligned with international examination boards including Cambridge (CAIE) and Pearson Edexcel, ensuring students are prepared according to global academic standards.',
                                color: 'bg-brand-navy/5 text-brand-navy',
                            },
                            {
                                title: 'High Tech Classroom',
                                icon: <School />,
                                desc: 'A tech-enabled classroom that tracks student progress, presentation performance, and analytical reports.',
                                color: 'bg-brand-navy/5 text-brand-navy',
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="group space-y-8 rounded-[56px] bg-slate-50 p-12 text-center shadow-inner transition-all hover:shadow-2xl"
                            >
                                <div
                                    className={`${item.color} mx-auto flex h-24 w-24 items-center justify-center rounded-[40px] shadow-lg transition-transform group-hover:scale-110`}
                                >
                                    {React.cloneElement(
                                        item.icon as React.ReactElement,
                                        { className: 'w-12 h-12' },
                                    )}
                                </div>
                                <h4 className="text-2xl font-black tracking-tight text-brand-navy">
                                    {item.title}
                                </h4>
                                <p className="text-base leading-relaxed text-slate-500">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Class Modes */}
            <section className="relative overflow-hidden bg-brand-blue-dark py-24 text-white">
                <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
                    <div className="mb-20 space-y-6 text-center">
                        <div className="mx-auto mb-6 flex w-fit items-center justify-center">
                            <BookOpenText className="h-18 w-18" />
                        </div>

                        <h2 className="font-heading text-4xl font-extrabold tracking-tight md:text-5xl">
                            Class Modes
                        </h2>
                        <p className="text-xl leading-relaxed text-slate-400">
                            Choose the learning environment that suits your
                            schedule.
                        </p>
                    </div>
                    <div className="grid gap-16 md:grid-cols-2">
                        <div className="group space-y-10 rounded-[64px] border border-white/10 bg-white/5 p-16 shadow-2xl transition-all hover:bg-white/10">
                            <div className="flex items-center space-x-8">
                                <div className="rounded-[32px] bg-brand-blue p-6 shadow-xl transition-transform group-hover:scale-110">
                                    <Smartphone className="h-10 w-10" />
                                </div>
                                <div>
                                    <h3 className="text-4xl font-black tracking-tight">
                                        Offline
                                    </h3>
                                    <p className="mt-1 text-sm font-black tracking-[0.2em] text-brand-white uppercase">
                                        Lalmatia Campus
                                    </p>
                                </div>
                            </div>
                            <ul className="grid gap-6">
                                {[
                                    'Physical classroom experience in Dhaka',
                                    'Interactive face-to-face sessions',
                                    'Printed study materials provided',
                                    'All study materials provided',
                                    'Direct feedback sessions',
                                ].map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start font-bold text-brand-white"
                                    >
                                        <CheckCircle className="mr-5 h-6 w-6 shrink-0 text-brand-white" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex items-center border-t border-white/10 pt-10 text-slate-200">
                                <MapPin className="mr-5 h-6 w-6 text-brand-white" />
                                <span className="text-lg font-black">
                                    8/12, Block B, Lalmatia, Dhaka
                                </span>
                            </div>
                        </div>

                        <div className="group space-y-10 rounded-[64px] border border-white/10 bg-white/5 p-16 shadow-2xl transition-all hover:bg-white/10">
                            <div className="flex items-center space-x-8">
                                <div className="rounded-[32px] bg-brand-blue-light p-6 shadow-xl transition-transform group-hover:scale-110">
                                    <Monitor className="h-10 w-10" />
                                </div>
                                <div>
                                    <h3 className="text-4xl font-black tracking-tight">
                                        Online
                                    </h3>
                                    <p className="mt-1 text-sm font-black tracking-[0.2em] text-brand-white uppercase">
                                        Virtual Classroom
                                    </p>
                                </div>
                            </div>
                            <ul className="grid gap-6">
                                {[
                                    'Global accessibility for all students',
                                    'Live interactive Zoom/Google Meet sessions',
                                    'Full digital resource repository',
                                    'Recorded session archives',
                                ].map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start font-bold text-brand-white"
                                    >
                                        <CheckCircle className="mr-5 h-6 w-6 shrink-0 text-brand-white" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex items-center border-t border-white/10 pt-10 text-slate-200">
                                <Monitor className="mr-5 h-6 w-6 text-brand-white" />
                                <span className="text-lg font-black tracking-tight">
                                    Google Classroom Integration
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 h-full w-1/2 rounded-full bg-brand-blue/5 blur-[200px]"></div>
            </section>

            {/* Final Admission CTA */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-5xl space-y-16 px-4 text-center">

                    <div className="rounded-3xl border border-slate-100 bg-slate-50 p-16 shadow-inner md:rounded-[48px] md:p-24 lg:rounded-[64px]">
                        <div className="mb-20 space-y-6 text-center">
                            <div className="mx-auto mb-6 flex w-fit items-center justify-center">
                                <Spotlight className="h-18 w-18 text-brand-navy" />
                            </div>
                            <h2 className="font-heading text-5xl font-extrabold tracking-tight text-brand-navy md:text-7xl">
                                Secure Your Spot
                            </h2>
                            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-500">
                                Let's get you started on the path to O Level
                                Bengali success. Enroll now to reserve your seat
                                in our upcoming batches and take the first step
                                towards mastering the CAIE 3204 syllabus with
                                Rofsan Sir.
                            </p>
                        </div>

                        <div className="grid gap-12 text-left md:grid-cols-3">
                            <div className="space-y-6">
                                <div className="w-fit rounded-2xl bg-white p-5 shadow-xl">
                                    <Phone className="h-8 w-8 text-brand-blue" />
                                </div>
                                <div className="space-y-2 text-lg font-bold text-slate-600">
                                    <p>+880 1948-116595</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="w-fit rounded-2xl bg-white p-5 shadow-xl">
                                    <Mail className="h-8 w-8 text-brand-blue" />
                                </div>
                                <p className="text-lg font-bold text-slate-600">
                                    rofsankhan@gmail.com
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="w-fit rounded-2xl bg-white p-5 shadow-xl">
                                    <MapPin className="h-8 w-8 text-brand-blue" />
                                </div>
                                <p className="text-lg font-bold text-slate-600">
                                    Lalmatia, Dhaka
                                </p>
                            </div>
                        </div>

                        <div className="mt-20 flex flex-col justify-center gap-8 sm:flex-row">
                            <AdmissionNow />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CoursesAdmissionPage;
