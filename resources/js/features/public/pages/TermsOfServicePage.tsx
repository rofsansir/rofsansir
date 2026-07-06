import React from 'react';
import { FileText, CheckCircle, AlertTriangle, Scale, Users, BookOpen } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-24 pb-16">
            <div className="mx-auto max-w-4xl px-6 md:px-8">
                {/* Header */}
                <div className="mb-12 text-center">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-navy shadow-xl">
                        <FileText className="h-10 w-10 text-white" />
                    </div>
                    <h1 className="font-heading mb-4 text-5xl font-extrabold tracking-tight text-brand-navy">
                        Terms of Service
                    </h1>
                    <p className="text-lg text-slate-600">
                        Last updated: March 6, 2026
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl md:p-12">
                    {/* Introduction */}
                    <section>
                        <p className="text-lg leading-relaxed text-slate-700">
                            Welcome to Rofsan Sir O Level Bengali. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully before using our platform.
                        </p>
                    </section>

                    {/* Acceptance of Terms */}
                    <section>
                        <div className="mb-4 flex items-center space-x-3">
                            <CheckCircle className="h-6 w-6 text-brand-blue" />
                            <h2 className="font-heading text-2xl font-bold text-brand-navy">
                                Acceptance of Terms
                            </h2>
                        </div>
                        <p className="leading-relaxed text-slate-700">
                            By creating an account, accessing our website, or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.
                        </p>
                    </section>

                    {/* Eligibility */}
                    <section>
                        <div className="mb-4 flex items-center space-x-3">
                            <Users className="h-6 w-6 text-brand-blue" />
                            <h2 className="font-heading text-2xl font-bold text-brand-navy">
                                Eligibility
                            </h2>
                        </div>
                        <div className="space-y-2 text-slate-700">
                            <p className="leading-relaxed">
                                To use our services, you must:
                            </p>
                            <ul className="ml-6 list-disc space-y-1">
                                <li>Be at least 13 years of age (or have parental consent)</li>
                                <li>Be enrolled as a student in our O Level Bengali program</li>
                                <li>Provide accurate and complete registration information</li>
                                <li>Maintain the security of your account credentials</li>
                            </ul>
                        </div>
                    </section>

                    {/* Services Provided */}
                    <section>
                        <div className="mb-4 flex items-center space-x-3">
                            <BookOpen className="h-6 w-6 text-brand-blue" />
                            <h2 className="font-heading text-2xl font-bold text-brand-navy">
                                Services Provided
                            </h2>
                        </div>
                        <div className="space-y-2 text-slate-700">
                            <p className="leading-relaxed">
                                Rofsan Sir O Level Bengali provides:
                            </p>
                            <ul className="ml-6 list-disc space-y-1">
                                <li>O Level Bengali coaching and tutoring services</li>
                                <li>Access to study materials, notes, and resources</li>
                                <li>Online student portal for enrolled students</li>
                                <li>Class schedules and payment plan information</li>
                                <li>Examiner tips and educational content</li>
                            </ul>
                        </div>
                    </section>

                    {/* User Accounts */}
                    <section>
                        <div className="mb-4 flex items-center space-x-3">
                            <Users className="h-6 w-6 text-brand-blue" />
                            <h2 className="font-heading text-2xl font-bold text-brand-navy">
                                User Accounts and Responsibilities
                            </h2>
                        </div>
                        <div className="space-y-4 text-slate-700">
                            <div>
                                <h3 className="mb-2 font-bold text-brand-navy">Account Security</h3>
                                <p className="leading-relaxed">
                                    You are responsible for:
                                </p>
                                <ul className="ml-6 mt-2 list-disc space-y-1">
                                    <li>Maintaining the confidentiality of your password</li>
                                    <li>All activities that occur under your account</li>
                                    <li>Notifying us immediately of any unauthorized access</li>
                                    <li>Ensuring your account information is accurate and up-to-date</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="mb-2 font-bold text-brand-navy">Prohibited Activities</h3>
                                <p className="leading-relaxed">
                                    You agree NOT to:
                                </p>
                                <ul className="ml-6 mt-2 list-disc space-y-1">
                                    <li>Share your account credentials with others</li>
                                    <li>Use another person's account without permission</li>
                                    <li>Distribute or share copyrighted study materials</li>
                                    <li>Attempt to gain unauthorized access to our systems</li>
                                    <li>Use our services for any illegal or unauthorized purpose</li>
                                    <li>Interfere with or disrupt our services</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Google Integration */}
                    <section>
                        <div className="mb-4 flex items-center space-x-3">
                            <CheckCircle className="h-6 w-6 text-brand-blue" />
                            <h2 className="font-heading text-2xl font-bold text-brand-navy">
                                Google Account Integration
                            </h2>
                        </div>
                        <div className="space-y-2 text-slate-700">
                            <p className="leading-relaxed">
                                When you sign in with Google or connect your Google Drive:
                            </p>
                            <ul className="ml-6 list-disc space-y-1">
                                <li>You authorize us to access specific shared study materials</li>
                                <li>You agree to Google's Terms of Service and Privacy Policy</li>
                                <li>You can revoke access at any time through your Google Account settings</li>
                                <li>We will only access files explicitly shared with you by our administrators</li>
                            </ul>
                        </div>
                    </section>

                    {/* Intellectual Property */}
                    <section>
                        <div className="mb-4 flex items-center space-x-3">
                            <Scale className="h-6 w-6 text-brand-blue" />
                            <h2 className="font-heading text-2xl font-bold text-brand-navy">
                                Intellectual Property Rights
                            </h2>
                        </div>
                        <div className="space-y-4 text-slate-700">
                            <div>
                                <h3 className="mb-2 font-bold text-brand-navy">Our Content</h3>
                                <p className="leading-relaxed">
                                    All content provided through our services, including but not limited to study materials, notes, videos, and educational resources, are protected by copyright and other intellectual property laws. This content is provided for your personal, non-commercial educational use only.
                                </p>
                            </div>
                            <div>
                                <h3 className="mb-2 font-bold text-brand-navy">Restrictions</h3>
                                <p className="leading-relaxed">
                                    You may NOT:
                                </p>
                                <ul className="ml-6 mt-2 list-disc space-y-1">
                                    <li>Copy, reproduce, or distribute our materials without permission</li>
                                    <li>Sell, rent, or commercially exploit our content</li>
                                    <li>Remove copyright notices or proprietary markings</li>
                                    <li>Create derivative works from our materials</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Payment Terms */}
                    <section>
                        <div className="mb-4 flex items-center space-x-3">
                            <FileText className="h-6 w-6 text-brand-blue" />
                            <h2 className="font-heading text-2xl font-bold text-brand-navy">
                                Payment and Fees
                            </h2>
                        </div>
                        <div className="space-y-2 text-slate-700">
                            <ul className="ml-6 list-disc space-y-1">
                                <li>Tuition fees are as specified in our payment plans</li>
                                <li>Payments must be made according to the agreed schedule</li>
                                <li>Fees are non-refundable except as required by law</li>
                                <li>We reserve the right to modify fees with advance notice</li>
                                <li>Late payments may result in suspension of access to services</li>
                            </ul>
                        </div>
                    </section>

                    {/* Disclaimers */}
                    <section>
                        <div className="mb-4 flex items-center space-x-3">
                            <AlertTriangle className="h-6 w-6 text-brand-blue" />
                            <h2 className="font-heading text-2xl font-bold text-brand-navy">
                                Disclaimers and Limitations
                            </h2>
                        </div>
                        <div className="space-y-4 text-slate-700">
                            <div>
                                <h3 className="mb-2 font-bold text-brand-navy">Educational Services</h3>
                                <p className="leading-relaxed">
                                    While we strive to provide high-quality education, we cannot guarantee specific exam results or grades. Student success depends on multiple factors including effort, attendance, and individual aptitude.
                                </p>
                            </div>
                            <div>
                                <h3 className="mb-2 font-bold text-brand-navy">Service Availability</h3>
                                <p className="leading-relaxed">
                                    We provide our services "as is" and "as available." We do not guarantee uninterrupted access and may modify or discontinue services at any time.
                                </p>
                            </div>
                            <div>
                                <h3 className="mb-2 font-bold text-brand-navy">Third-Party Services</h3>
                                <p className="leading-relaxed">
                                    Our platform integrates with third-party services (Google, Firebase). We are not responsible for the availability, accuracy, or content of these external services.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Limitation of Liability */}
                    <section>
                        <div className="mb-4 flex items-center space-x-3">
                            <Scale className="h-6 w-6 text-brand-blue" />
                            <h2 className="font-heading text-2xl font-bold text-brand-navy">
                                Limitation of Liability
                            </h2>
                        </div>
                        <p className="leading-relaxed text-slate-700">
                            To the maximum extent permitted by law, Rofsan Sir O Level Bengali shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses resulting from your use of our services.
                        </p>
                    </section>

                    {/* Termination */}
                    <section>
                        <div className="mb-4 flex items-center space-x-3">
                            <AlertTriangle className="h-6 w-6 text-brand-blue" />
                            <h2 className="font-heading text-2xl font-bold text-brand-navy">
                                Termination
                            </h2>
                        </div>
                        <div className="space-y-2 text-slate-700">
                            <p className="leading-relaxed">
                                We reserve the right to suspend or terminate your account if:
                            </p>
                            <ul className="ml-6 list-disc space-y-1">
                                <li>You violate these Terms of Service</li>
                                <li>You engage in fraudulent or illegal activities</li>
                                <li>You fail to make required payments</li>
                                <li>Your account remains inactive for an extended period</li>
                            </ul>
                            <p className="mt-4 leading-relaxed">
                                You may terminate your account at any time by contacting us. Upon termination, your access to services will cease, but these terms will continue to apply to past use.
                            </p>
                        </div>
                    </section>

                    {/* Changes to Terms */}
                    <section>
                        <div className="mb-4 flex items-center space-x-3">
                            <FileText className="h-6 w-6 text-brand-blue" />
                            <h2 className="font-heading text-2xl font-bold text-brand-navy">
                                Changes to Terms
                            </h2>
                        </div>
                        <p className="leading-relaxed text-slate-700">
                            We may update these Terms of Service from time to time. We will notify you of any material changes by posting the new terms on this page and updating the "Last updated" date. Your continued use of our services after changes constitutes acceptance of the new terms.
                        </p>
                    </section>

                    {/* Governing Law */}
                    <section>
                        <div className="mb-4 flex items-center space-x-3">
                            <Scale className="h-6 w-6 text-brand-blue" />
                            <h2 className="font-heading text-2xl font-bold text-brand-navy">
                                Governing Law
                            </h2>
                        </div>
                        <p className="leading-relaxed text-slate-700">
                            These Terms of Service shall be governed by and construed in accordance with the laws of Bangladesh. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Dhaka, Bangladesh.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="rounded-2xl bg-slate-50 p-6">
                        <div className="mb-4 flex items-center space-x-3">
                            <FileText className="h-6 w-6 text-brand-blue" />
                            <h2 className="font-heading text-2xl font-bold text-brand-navy">
                                Contact Us
                            </h2>
                        </div>
                        <p className="mb-4 leading-relaxed text-slate-700">
                            If you have any questions about these Terms of Service, please contact us:
                        </p>
                        <div className="space-y-2 text-slate-700">
                            <p><strong>Email:</strong> <a href="mailto:support@rofsansir.com" className="text-brand-blue hover:underline">support@rofsansir.com</a></p>
                            <p><strong>Phone:</strong> +880 1948-116595</p>
                            <p><strong>Address:</strong> Lalmatia, Dhaka, Bangladesh</p>
                        </div>
                    </section>

                    {/* Acknowledgment */}
                    <section className="rounded-2xl border-2 border-brand-blue/20 bg-brand-blue/5 p-6">
                        <p className="text-center font-semibold text-brand-navy">
                            By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfServicePage;
