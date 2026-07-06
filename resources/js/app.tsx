import { ChevronUp, MessageSquare } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AboutPage from './features/public/pages/AboutPage';
import BookDetailPage from './features/public/pages/BookDetailPage';
import ClassIXPage from './features/public/pages/ClassIXPage';
import ClassVIIIPage from './features/public/pages/ClassVIIIPage';
import ClassXPage from './features/public/pages/ClassXPage';
import ContactPage from './features/public/pages/ContactPage';
import ExaminerTipsPage from './features/public/pages/ExaminerTipsPage';
import HomePage from './features/public/pages/HomePage';
import PastPaperDetailPage from './features/public/pages/PastPaperDetailPage';
import PrivacyPolicyPage from './features/public/pages/PrivacyPolicyPage';
import ResourcesPage from './features/public/pages/ResourcesPage';
import RoutinePage from './features/public/pages/RoutinePage';
import TermsOfServicePage from './features/public/pages/TermsOfServicePage';
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';

const AppContent: React.FC = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);

    // Static public site — navbar/footer are always visible.
    const shouldHideNavbar = false;
    const isAdminDashboard = false;

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="font-body relative overflow-x-hidden bg-[#fcfcfc] text-brand-navy selection:bg-brand-blue/20">
            {/* Toast Notifications */}
            <Toaster
                position="top-right"
                reverseOrder={false}
                gutter={8}
                toastOptions={{
                    duration: 4000,
                    style: {
                        background: '#fff',
                        color: '#344871',
                        padding: '16px',
                        borderRadius: '12px',
                        boxShadow: '0 10px 40px rgba(52, 72, 113, 0.15)',
                        maxWidth: '500px',
                    },
                    success: {
                        iconTheme: {
                            primary: '#10b981',
                            secondary: '#fff',
                        },
                        style: {
                            border: '2px solid #10b981',
                        },
                    },
                    error: {
                        iconTheme: {
                            primary: '#ef4444',
                            secondary: '#fff',
                        },
                        style: {
                            border: '2px solid #ef4444',
                        },
                    },
                    loading: {
                        iconTheme: {
                            primary: '#0EA5E9',
                            secondary: '#fff',
                        },
                    },
                }}
            />

            {/* Scroll to top on route change */}
            <ScrollToTop />

            {/* Show Navbar on all routes except admin dashboard */}
            {!shouldHideNavbar && <Navbar />}

            {/* Main content - navbar is fixed for non-admin dashboard routes */}
            <main className="min-h-screen">
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/routine" element={<RoutinePage />} />
                    <Route path="/resources" element={<ResourcesPage />} />
                    <Route path="/past-papers/:slug" element={<PastPaperDetailPage />} />
                    <Route path="/tips" element={<ExaminerTipsPage />} />
                    <Route path="/tips/:id" element={<ExaminerTipsPage />} />
                    <Route path="/courses" element={<RoutinePage />} />
                    <Route path="/class-8" element={<ClassVIIIPage />} />
                    <Route path="/class-viii" element={<ClassVIIIPage />} />
                    <Route path="/class-9" element={<ClassIXPage />} />
                    <Route path="/class-ix" element={<ClassIXPage />} />
                    <Route path="/class-10" element={<ClassXPage />} />
                    <Route path="/class-x" element={<ClassXPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                    <Route path="/terms-of-service" element={<TermsOfServicePage />} />

                    {/* Book Routes - Individual routes for each book */}
                    <Route path="/o-level-bengali-basic-plus" element={<BookDetailPage />} />
                    <Route path="/o-level-bengali-composition-plus" element={<BookDetailPage />} />
                    <Route path="/o-level-bengali-practice-plus" element={<BookDetailPage />} />
                    <Route path="/o-level-bengali-revision-plus" element={<BookDetailPage />} />
                    <Route path="/o-level-bengali-foundation-plus" element={<BookDetailPage />} />

                    {/* Fallback - redirect to home */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>

            {/* Floating Action Buttons - Only on non-admin dashboard routes */}
            {!shouldHideNavbar && (
                <>
                    {/* Admission Query - Right Bottom */}
                    <a
                        href="https://wa.me/8801948116595"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group animate-float fixed right-6 bottom-1 z-[60] inline-flex items-center gap-2 rounded-full bg-brand-blue px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition-all hover:-translate-y-0.5 hover:bg-brand-blue-light hover:shadow-xl active:translate-y-0"
                        aria-label="Contact on WhatsApp"
                    >
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                            <MessageSquare className="h-4 w-4" />
                        </span>
                        <span className="whitespace-nowrap">
                            Admission Query
                        </span>
                    </a>

                    {/* Back to Top - Left Bottom */}
                    <button
                        onClick={scrollToTop}
                        className={`fixed left-6 bottom-1 z-[60] transform rounded-full bg-brand-blue p-4 text-white shadow-2xl transition-all duration-500 ${
                            showBackToTop
                                ? 'translate-y-0 scale-100 opacity-100'
                                : 'pointer-events-none translate-y-10 scale-50 opacity-0'
                        } hover:bg-brand-blue active:scale-90`}
                        aria-label="Back to top"
                    >
                        <ChevronUp className="h-6 w-6" />
                    </button>


                </>
            )}

            {/* Footer - Only on non-admin dashboard routes */}
            {!shouldHideNavbar && <Footer />}
        </div>
    );
};

const App: React.FC = () => {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <AppContent />
            </BrowserRouter>
        </HelmetProvider>
    );
};

export default App;
