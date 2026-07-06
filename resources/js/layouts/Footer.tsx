import {
    DraftingCompass,
    Facebook,
    Instagram,
    Linkedin,
    Youtube,
    Mail,
    Phone,
} from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <>
            {/* Footer */}
            <footer className="border-t border-brand-navy/10 bg-brand-navy text-white">
                <div className="mx-auto px-4 py-16 md:px-8">
                    <div className="grid gap-12 md:grid-cols-5">
                        {/* Brand */}
                        <div className="space-y-4">
                            <img
                                src="/assets/brand-logo-white.svg"
                                alt="Rofsan Sir"
                                className="h-32 w-auto"
                            />
                            <p className="text-sm leading-relaxed text-slate-300">
                                Award-Winning Bengali Teacher | Certified International Curriculum Educator, Examiner & Assessment Specialist.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="font-heading mb-4 text-lg font-bold">
                                Quick Links
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        to="/"
                                        className="text-sm text-slate-300 transition-colors hover:text-brand-blue-light"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/about"
                                        className="text-sm text-slate-300 transition-colors hover:text-brand-blue-light"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/routine"
                                        className="text-sm text-slate-300 transition-colors hover:text-brand-blue-light"
                                    >
                                        Routine
                                    </Link>
                                </li>


                            </ul>
                        </div>

                        {/* Admission */}
                        <div>
                            <h3 className="font-heading mb-4 text-lg font-bold">
                                Admission
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        to="/class-viii"
                                        className="text-sm text-slate-300 transition-colors hover:text-brand-blue-light"
                                    >
                                        Class VIII
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/class-ix"
                                        className="text-sm text-slate-300 transition-colors hover:text-brand-blue-light"
                                    >
                                        Class IX
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/class-x"
                                        className="text-sm text-slate-300 transition-colors hover:text-brand-blue-light"
                                    >
                                        Class X
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="font-heading mb-4 text-lg font-bold">
                                Resources
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        to="/tips"
                                        className="text-sm text-slate-300 transition-colors hover:text-brand-blue-light"
                                    >
                                        Examiner Tips
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/resources"
                                        className="text-sm text-slate-300 transition-colors hover:text-brand-blue-light"
                                    >
                                        Study Materials
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="font-heading mb-4 text-lg font-bold">
                                Contact
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start space-x-3">
                                    <Phone className="h-5 w-5 text-brand-blue-light" />
                                    <a
                                        href="tel:+8801948116595"
                                        className="text-sm text-slate-300 transition-colors hover:text-brand-blue-light"
                                    >
                                        +880 1948-116595
                                    </a>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <Phone className="h-5 w-5 text-brand-blue-light" />
                                    <a
                                        href="tel:+8801711772662"
                                        className="text-sm text-slate-300 transition-colors hover:text-brand-blue-light"
                                    >
                                        +880 1711-772662
                                    </a>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Mail className="h-5 w-5 text-brand-blue-light" />
                                    <a
                                        href="mailto:rofsankhan@gmail.com"
                                        className="text-sm text-slate-300 transition-colors hover:text-brand-blue-light"
                                    >
                                        rofsankhan@gmail.com
                                    </a>
                                </li>
                            </ul>

                            {/* Social Links */}
                            <div className="mt-6 flex space-x-4">
                                <a
                                    href="https://www.facebook.com/share/1BC8aNJyJx/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full bg-white/10 p-2 transition-all hover:bg-brand-blue-light"
                                >
                                    <Facebook className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://www.instagram.com/rofsansirbengali?igsh=NDRibGRhaGsyeDNh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full bg-white/10 p-2 transition-all hover:bg-brand-blue-light"
                                >
                                    <Instagram className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/rofsankhan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full bg-white/10 p-2 transition-all hover:bg-brand-blue-light"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://youtube.com/@olevelbengali?si=WS2jJ7hTCUOE7rHw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full bg-white/10 p-2 transition-all hover:bg-brand-blue-light"
                                >
                                    <Youtube className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-12 border-t border-white/10 pt-8">
                        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                            <p className="text-sm text-slate-400">
                                © Rofsan Sir {new Date().getFullYear()} All rights
                                reserved.
                            </p>

                            {/* Legal Links */}
                            <div className="flex items-center gap-4 text-sm text-slate-400">
                                <Link
                                    to="/privacy-policy"
                                    className="transition-colors hover:text-brand-blue-light"
                                >
                                    Privacy Policy
                                </Link>
                                <span>•</span>
                                <Link
                                    to="/terms-of-service"
                                    className="transition-colors hover:text-brand-blue-light"
                                >
                                    Terms of Service
                                </Link>
                            </div>

                            <div className="text-sm text-slate-400 transition-colors hover:text-white">
                                <a
                                    href="https://sakibian.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center"
                                >
                                    <DraftingCompass className="mx-1 h-4 w-4 text-slate-300" />
                                    Crafted by sakibian.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
