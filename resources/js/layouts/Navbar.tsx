import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path: string) => location.pathname === path;

    const navLinks = [
        { id: 'home', label: 'Home', path: '/' },
        { id: 'about', label: 'About Rofsan Sir', path: '/about' },
        {
            id: 'courses',
            label: 'Courses & Admission',
            path: '/courses',
        },
        { id: 'tips', label: 'Examiner Tips', path: '/tips' },
        { id: 'faq', label: 'FAQ', path: '/faq' },
        { id: 'resources', label: 'Resources', path: '/resources' },
        { id: 'contact', label: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white shadow-lg'
                    : 'bg-white/95 backdrop-blur-sm'
            }`}
        >
            <div className="mx-auto px-4 md:px-8">
                <div className="flex h-20 items-center justify-between gap-8">
                    {/* Logo - Left */}
                    <Link
                        to="/"
                        className="flex items-center space-x-3 transition-transform hover:scale-105"
                    >
                        <img
                            src="/assets/brand-logo.png"
                            alt="Rofsan Sir"
                            className="h-16 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation - Center */}
                    <div className="hidden flex-1 items-center justify-center space-x-2 lg:flex xl:space-x-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                to={link.path}
                                className={`rounded-lg px-2.5 py-2 text-xs font-semibold transition-all focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 focus:outline-none lg:text-sm xl:px-3 ${
                                    isActive(link.path)
                                        ? 'bg-brand-blue text-white'
                                        : 'text-brand-navy hover:bg-brand-blue/10 hover:text-brand-blue'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="rounded-lg p-2 text-brand-navy transition-colors hover:bg-brand-navy/5 lg:hidden"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="border-t border-brand-navy/10 py-4 lg:hidden">
                        <div className="space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.id}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block rounded-lg px-4 py-2 font-medium transition-all ${
                                        isActive(link.path)
                                            ? 'bg-brand-blue text-white'
                                            : 'text-brand-navy hover:bg-brand-blue/10'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
