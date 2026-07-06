import { ArrowRight, Award, BarChart, RotateCcw, CheckCircle2, XCircle } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QUIZ_QUESTIONS } from '../../../constants';

const Quiz: React.FC = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [userAnswers, setUserAnswers] = useState<number[]>([]);
    const [showReview, setShowReview] = useState(false);

    const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

    const handleAnswer = () => {
        if (selectedOption !== null) {
            setUserAnswers([...userAnswers, selectedOption]);

            if (selectedOption === QUIZ_QUESTIONS[currentStep].correct) {
                setScore(score + 1);
            }
        }

        if (currentStep < QUIZ_QUESTIONS.length - 1) {
            setCurrentStep(currentStep + 1);
            setSelectedOption(null);
        } else {
            setShowResult(true);
        }
    };

    const resetQuiz = () => {
        setCurrentStep(0);
        setScore(0);
        setShowResult(false);
        setSelectedOption(null);
        setUserAnswers([]);
        setShowReview(false);
    };

    const getLevelInfo = (s: number) => {
        if (s <= 3)
            return {
                title: 'Beginner',
                color: 'text-slate-400',
                description:
                    "You're just starting your O Level journey. Let's strengthen your core grammar.",
                suggestion: 'Foundation Plus Course',
                route: '/class-viii',
            };
        if (s <= 7)
            return {
                title: 'Intermediate',
                color: 'text-brand-blue-light',
                description:
                    'Good grasp of basics, but Paper 2 nuances need work to reach the A grade.',
                suggestion: 'Basics Plus & Composition Mastery',
                route: '/class-ix',
            };
        return {
            title: 'Advanced',
            color: 'text-brand-blue',
            description:
                "Excellent foundation! You're a candidate for an A*. Focus on examiner techniques now.",
            suggestion: 'Revision Batch & Mock Program',
            route: '/class-x',
        };
    };

    const levelInfo = getLevelInfo(score);

    return (
        <section className="bg-white py-24" id="diagnostic-quiz">
            <div className="mx-auto max-w-4xl px-4">
                <div className="relative overflow-hidden rounded-[48px] bg-brand-navy p-10 text-white shadow-2xl transition-all duration-500 md:p-16">
                    <div className="relative z-10">
                        {!showResult ? (
                            <div className="animate-fade-in-up space-y-10">
                                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                                    <div className="space-y-3">
                                        <h3 className="text-xs font-bold tracking-widest text-brand-blue-light uppercase">
                                            Diagnostic Assessment
                                        </h3>
                                        <div className="flex items-center space-x-4">
                                            <div className="h-3 w-56 overflow-hidden rounded-full bg-white/10">
                                                <div
                                                    className="h-full bg-brand-blue transition-all duration-300"
                                                    style={{
                                                        width: `${progress}%`,
                                                    }}
                                                ></div>
                                            </div>
                                            <span className="text-xs font-bold text-slate-400">
                                                Progress: {Math.round(progress)}
                                                %
                                            </span>
                                        </div>
                                    </div>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold text-slate-300">
                                        Question {currentStep + 1} of{' '}
                                        {QUIZ_QUESTIONS.length}
                                    </span>
                                </div>

                                <h2 className="font-heading text-3xl leading-tight font-bold text-white md:text-4xl">
                                    {QUIZ_QUESTIONS[currentStep].question}
                                </h2>

                                <div className="grid gap-4">
                                    {QUIZ_QUESTIONS[currentStep].options.map(
                                        (opt, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() =>
                                                    setSelectedOption(idx)
                                                }
                                                aria-label={`Option ${idx + 1}: ${opt}`}
                                                aria-pressed={selectedOption === idx}
                                                className={`group flex w-full items-center justify-between rounded-2xl border-2 p-6 text-left transition-all focus:outline-none focus:ring-4 focus:ring-brand-blue/50 ${
                                                    selectedOption === idx
                                                        ? 'scale-[1.02] border-brand-blue bg-brand-blue/20 text-white'
                                                        : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
                                                }`}
                                            >
                                                <span className="text-lg font-medium">
                                                    {opt}
                                                </span>
                                                <div
                                                    className={`flex h-7 w-7 items-center justify-center rounded-full border-2 transition-colors ${
                                                        selectedOption === idx
                                                            ? 'border-brand-blue bg-brand-blue'
                                                            : 'border-white/20'
                                                    }`}
                                                >
                                                    {selectedOption === idx && (
                                                        <div className="h-2.5 w-2.5 rounded-full bg-white"></div>
                                                    )}
                                                </div>
                                            </button>
                                        ),
                                    )}
                                </div>

                                <div className="pt-6">
                                    <button
                                        disabled={selectedOption === null}
                                        onClick={handleAnswer}
                                        className={`flex w-full items-center justify-center rounded-2xl py-6 text-lg font-black transition-all ${
                                            selectedOption !== null
                                                ? 'transform bg-brand-blue text-white shadow-xl hover:-translate-y-1 hover:bg-brand-blue-dark'
                                                : 'cursor-not-allowed bg-slate-700 text-slate-500'
                                        }`}
                                    >
                                        {currentStep ===
                                        QUIZ_QUESTIONS.length - 1
                                            ? 'Finish Assessment'
                                            : 'Continue to Next Question'}
                                        <ArrowRight className="ml-2 h-6 w-6" />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="animate-fade-in-up space-y-12 text-center">
                                {!showReview ? (
                                    <>
                                        <div className="flex justify-center">
                                            <div className="rounded-full border border-brand-blue/30 bg-brand-blue/20 p-10">
                                                <Award className="h-24 w-24 text-brand-blue-light" />
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center justify-center space-x-2 text-sm font-bold tracking-widest text-brand-blue-light uppercase">
                                                <BarChart className="h-4 w-4" />
                                                <span>Evaluation Result</span>
                                            </div>
                                            <h2
                                                className={`font-heading text-4xl font-extrabold md:text-5xl lg:text-6xl ${levelInfo.color}`}
                                            >
                                                Level: {levelInfo.title}
                                            </h2>
                                            <p className="mx-auto max-w-lg text-xl leading-relaxed text-slate-300">
                                                Score:{' '}
                                                <span className="font-bold text-white">
                                                    {score} / {QUIZ_QUESTIONS.length}
                                                </span>
                                                . {levelInfo.description}
                                            </p>
                                        </div>

                                        <div className="mx-auto max-w-md space-y-8 rounded-[40px] border border-white/10 bg-white/5 p-10 shadow-inner">
                                            <div className="space-y-2">
                                                <p className="text-xs font-black tracking-[0.2em] text-slate-400 uppercase">
                                                    Strategic Suggestion
                                                </p>
                                                <h4 className="text-3xl font-bold text-white">
                                                    {levelInfo.suggestion}
                                                </h4>
                                            </div>
                                            <button
                                                onClick={() => navigate(levelInfo.route)}
                                                className="w-full transform rounded-2xl bg-brand-blue px-8 py-5 font-black text-white shadow-lg transition-all hover:scale-105 hover:bg-brand-blue-dark">
                                                Apply for This Batch
                                            </button>
                                        </div>

                                        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
                                            <button
                                                onClick={() => setShowReview(true)}
                                                className="flex items-center font-bold text-brand-blue-light transition-colors hover:text-white"
                                            >
                                                <BarChart className="mr-2 h-5 w-5" />
                                                Review Answers
                                            </button>
                                            <button
                                                onClick={resetQuiz}
                                                className="flex items-center font-bold text-slate-400 transition-colors hover:text-white"
                                            >
                                                <RotateCcw className="mr-2 h-5 w-5" />
                                                Restart Diagnostic
                                            </button>
                                            <a
                                                href="https://wa.me/8801948116595"
                                                className="font-bold text-brand-blue-light hover:underline"
                                            >
                                                Talk to Rofsan Sir
                                            </a>
                                        </div>
                                    </>
                                ) : (
                                    <div className="space-y-8">
                                        <div className="space-y-4">
                                            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
                                                Answer Review
                                            </h2>
                                            <p className="text-slate-300">
                                                Your Score: <span className="font-bold text-white">{score} / {QUIZ_QUESTIONS.length}</span>
                                            </p>
                                        </div>

                                        <div className="space-y-6 text-left">
                                            {QUIZ_QUESTIONS.map((question, idx) => {
                                                const userAnswer = userAnswers[idx];
                                                const isCorrect = userAnswer === question.correct;

                                                return (
                                                    <div
                                                        key={idx}
                                                        className={`rounded-2xl border-2 p-6 ${
                                                            isCorrect
                                                                ? 'border-green-500/30 bg-green-500/10'
                                                                : 'border-red-500/30 bg-red-500/10'
                                                        }`}
                                                    >
                                                        <div className="mb-4 flex items-start justify-between gap-4">
                                                            <h3 className="text-lg font-bold text-white">
                                                                {idx + 1}. {question.question}
                                                            </h3>
                                                            {isCorrect ? (
                                                                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-green-400" />
                                                            ) : (
                                                                <XCircle className="h-6 w-6 flex-shrink-0 text-red-400" />
                                                            )}
                                                        </div>

                                                        <div className="space-y-3">
                                                            <div className="flex items-start gap-2">
                                                                <span className="text-sm font-bold text-slate-400">Your Answer:</span>
                                                                <span className={`text-sm font-medium ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                                                                    {question.options[userAnswer]}
                                                                </span>
                                                            </div>

                                                            {!isCorrect && (
                                                                <div className="flex items-start gap-2">
                                                                    <span className="text-sm font-bold text-slate-400">Correct Answer:</span>
                                                                    <span className="text-sm font-medium text-green-400">
                                                                        {question.options[question.correct]}
                                                                    </span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className="flex flex-col items-center justify-center gap-6 pt-6 sm:flex-row">
                                            <button
                                                onClick={() => setShowReview(false)}
                                                className="flex items-center font-bold text-brand-blue-light transition-colors hover:text-white"
                                            >
                                                <ArrowRight className="mr-2 h-5 w-5 rotate-180" />
                                                Back to Results
                                            </button>
                                            <button
                                                onClick={resetQuiz}
                                                className="flex items-center font-bold text-slate-400 transition-colors hover:text-white"
                                            >
                                                <RotateCcw className="mr-2 h-5 w-5" />
                                                Restart Diagnostic
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quiz;
