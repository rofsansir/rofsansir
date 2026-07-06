import { Award, CheckCircle, GraduationCap, BookOpen, ShieldCheck } from 'lucide-react';
import React from 'react';

import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section className="relative overflow-hidden bg-white pt-24 pb-20 lg:pt-32 lg:pb-32">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 -mt-48 -mr-48 h-[300px] w-[300px] rounded-full bg-brand-blue/5 blur-[120px] md:h-[600px] md:w-[600px]"></div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
                <div className="grid items-center gap-10 md:gap-16 lg:grid-cols-2 lg:gap-20">
                    <div className="animate-fade-in-up space-y-8 sm:space-y-10">
                        <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
                            <div className="inline-flex items-center space-x-3 rounded-full border border-brand-navy/10 bg-brand-navy/5 px-5 py-2">
                                <BookOpen className="h-5 w-5 text-brand-blue" />
                                <span className="bengali-text text-[10px] font-black tracking-widest text-brand-blue uppercase">
                                    আগে চাই মাতৃভাষার শক্ত গাঁথুনি
                                </span>
                            </div>
                        </div>

                        <h1 className="font-heading text-5xl leading-[1.1] font-extrabold tracking-tight text-brand-blue sm:text-6xl md:text-8xl">
                            O Level{' '}
                            <span className="text-brand-navy">Bengali</span>{' '}
                            <span className="text-4xl text-brand-navy md:text-5xl">
                                with{' '}
                            </span>{' '}
                            <span className="md:text-10xl text-brand-blue sm:text-8xl">
                                Rofsan Sir
                            </span>{' '}
                        </h1>

                        {/* Scannable credentials instead of long paragraph */}
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-2">
                                <ShieldCheck className="h-5 w-5 text-brand-blue" />
                                <span className="text-sm font-bold text-brand-navy">CAIE Approved Examiner</span>
                            </div>

                            <h3 className="text-xl font-bold text-brand-navy">
                                Your Guide to A* in O Level Bengali
                            </h3>

                            <ul className="grid gap-3 sm:grid-cols-2">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-brand-blue" />
                                    <span className="text-slate-700">8+ Years Experience</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-brand-blue" />
                                    <span className="text-slate-700">3000+ Students Mentored</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-brand-blue" />
                                    <span className="text-slate-700">Author of 5 Textbooks</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-brand-blue" />
                                    <span className="text-slate-700">98% A* & A Success Rate</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-6 pt-4 sm:flex-row">
                            <button
                                onClick={() => {
                                    window.open(
                                        'https://edutechs.app/s-online-admission?key=odLPMK4oh4Mus2Y8hXjis4YjTUX2',
                                        '_blank'
                                    );
                                }}
                                aria-label="Start learning - Apply for admission (opens in new window)"
                                className="hover:shadow-3xl flex items-center justify-center rounded-2xl bg-brand-blue px-8 py-3 text-base font-black text-white shadow-2xl shadow-brand-blue/20 transition-all hover:-translate-y-1 focus:ring-4 focus:ring-brand-blue/50 focus:outline-none sm:px-10 sm:py-4 sm:text-lg"
                            >
                                <GraduationCap className="mr-2 h-5 w-5" />
                                Start Learning
                            </button>
                            <button
                                onClick={() => navigate('/resources')}
                                className="rounded-2xl border-2 border-brand-navy/20 bg-white px-8 py-3 text-center text-base font-black text-brand-navy transition-all hover:border-brand-navy hover:bg-brand-navy hover:text-white focus:ring-4 focus:ring-brand-navy/50 focus:outline-none sm:px-10 sm:py-4 sm:text-lg"
                            >
                                View Resources
                            </button>
                        </div>
                    </div>

                    <div
                        className="animate-fade-in-up relative hidden md:block"
                        style={{ animationDelay: '0.2s' }}
                    >
                        <div className="group relative mx-auto aspect-[4/5] max-w-lg">
                            {/* Profile Image Container */}
                            <div className="absolute inset-0 rotate-6 rounded-[80px] bg-brand-blue opacity-10 shadow-2xl transition-transform duration-700 group-hover:rotate-12"></div>
                            <div className="absolute inset-0 -rotate-3 rounded-[80px] bg-brand-navy opacity-5 shadow-2xl transition-transform duration-700 group-hover:-rotate-6"></div>
                            <div className="image-placeholder relative z-10 h-full w-full overflow-hidden rounded-[80px] border-8 border-white shadow-2xl">
                                <img
                                    src="../assets/teacher/1.jpg"
                                    alt="Rofsan Sir"
                                    className="h-full w-full object-cover grayscale-[0.1] transition-all duration-700 hover:grayscale-0"
                                />
                            </div>

                            {/* Floating Badge - Positioned ON TOP of the image */}
                            <div className="animate-float absolute -bottom-10 -left-10 z-20 flex items-center space-x-6 rounded-[40px] border border-white/10 bg-brand-blue-dark/95 p-8 text-white shadow-2xl backdrop-blur-lg">
                                <div className="rounded-2xl bg-brand-blue p-4 shadow-lg">
                                    <Award className="h-10 w-10 text-white" />
                                </div>
                                <div>
                                    <p className="text-3xl leading-none font-black tracking-tighter">
                                        Visionary & Educator
                                    </p>
                                    <p className="mt-1 text-[10px] font-bold tracking-widest text-white uppercase">
                                        O Level Bengali Specialist
                                    </p>
                                    <div className="mt-2 flex items-center space-x-1">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <CheckCircle
                                                key={s}
                                                className="h-3 w-3 fill-brand-blue-dark text-white"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
