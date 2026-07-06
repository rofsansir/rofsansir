import React from 'react';
import { Shield, Lock, Eye, Database, Mail, Globe } from 'lucide-react';
import SEO from '../../../components/SEO/SEO';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <>
            <SEO path="/privacy-policy" />
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-24 pb-16">
            <div className="mx-auto max-w-4xl px-6 md:px-8">
                {/* Header */}
                <div className="mb-12 text-center">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-navy shadow-xl">
                        <Shield className="h-10 w-10 text-white" />
                    </div>
                    <h1 className="font-heading mb-4 text-5xl font-extrabold tracking-tight text-brand-navy">
                        Privacy Policy
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
                            At Rofsan Sir O Level Bengali, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section>
                        <div className="mb-4 flex items-center space-x-3">
                            <Database className="h-6 w-6 text-brand-blue" />
                            <h2 className="font-heading text-2xl font-bold text-brand-navy">
                                Information We Collect
                            </h2>
                        </div>
                        <div className="space-y-4 text-slate-700">
                            <div>
                                <h3 className="mb-2 font-bold text-brand-navy">Personal Information</h3>
                                <p className="leading-relaxed">
                                    We collect information that you provide directly to us, including:
                                </p>
                                <ul className="ml-6 mt-2 list-disc space-y-1">
                                    <li>Name and email address</li>
                                    <li>Student account credentials</li>
                                    <li>Contact information (phone number, address)</li>
                                    <li>Payment information (processed securely through third-party providers)</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="mb-2 font-bold text-brand-navy">Google Account Information</h3>
                                <p className="leading-relaxed">
                                    When you sign in with Google or connect your Google Drive:
                                </p>
                                <ul className="ml-6 mt-2 list-disc space-y-1">
                                    <li>Google account email address</li>
                                    <li>Profile information (name, profile picture)</li>
                                    <li>OAuth tokens for accessing shared study materials</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="mb-2 font-bold text-brand-navy">Automatically Collected Information</h3>
                                <ul className="ml-6 list-disc space-y-1">
                                    <li>Device information and browser type</li>
                                    <li>IP address and location data</li>
                                    <li>Usage data and analytics (via Google Analytics)</li>
                                    <li>Cookies and similar tracking technologies</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* How We Use Your Information */}
                    <section>
                        <div className="mb-4 flex items-center space-x-3">
                            <Eye className="h-6 w-6 text-brand-blue" />
                            <h2 className="font-heading text-2xl font-bold text-brand-navy">
                                How We Use Your Information
                            </h2>
                        </div>
                        <div className="space-y-2 text-slate-700">
                            <p className="leading-relaxed">We use the information we collect to:</p>
                            <ul className="ml-6 list-disc space-y-1">
                                <li>Provide, maintain, and improve our educational services</li>
                                <li>Authenticate your identity and manage your account</li>
                                <li>Grant access to study materials and resources</li>
                                <li>Process payments and manage enrollments</li>
                                <li>Send important updates, announcements, and educational content</li>
                                <li>Respond to your inquiries and provide customer support</li>
                                <li>Analyze usage patterns to improve user experience</li>
                                <li>Comply with legal obligations and protect our rights</li>
                            </ul>
                        </div>
                    </section>

                    {/* Google Drive Integration */}
                    <section>
                        <div className="mb-4 flex items-center space-x-3">
                            <Globe className="h-6 w-6 text-brand-blue" />
                            <h2 className="font-heading text-2xl font-bold text-brand-navy">
                                Google Drive Integration
                            </h2>
                        </div>
                        <div className="space-y-2 text-slate-700">
                            <p className="leading-relaxed">
                                We use Google Drive to provide students with access to study materials. When you connect your Google account:
                            </p>
                            <ul className="ml-6 list-disc space-y-1">
                                <li>We request read-only access to specific shared folders</li>
                                <li>We do not access your personal Google Drive files</li>
                                <li>We store OAuth tokens securely and encrypted</li>
                                <li>You can revoke access at any time through your Google Account settings</li>
                            </ul>
                        </div>
                    </section>

                    {/* Information Sharing */}
                    <section>
                        <div className="mb-4 flex items-center space-x-3">
                            <Lock className="h-6 w-6 text-brand-blue" />
                            <h2 className="font-heading text-2xl font-bold text-brand-navy">
                                Information Sharing and Disclosure
                            </h2>
                        </div>
                        <div className="space-y-2 text-slate-700">
                            <p className="leading-relaxed">
                                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                            </p>
                            <ul className="ml-6 list-disc space-y-1">
                                <li><strong>Service Providers:</strong> With trusted third-party services (Google, Firebase, payment processors) that help us operate our platform</li>
                                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                            </ul>
                        </div>
                    </section>

                    {/* Data Security */}
                    <section>
                        <div className="mb-4 flex items-center space-x-3">
                            <Shield className="h-6 w-6 text-brand-blue" />
                            <h2 className="font-heading text-2xl font-bold text-brand-navy">
                                Data Security
                            </h2>
                        </div>
                        <p className="leading-relaxed text-slate-700">
                            We implement industry-standard security measures to protect your personal information, including:
                        </p>
                        <ul className="ml-6 mt-2 list-disc space-y-1 text-slate-700">
                            <li>Encrypted data transmission (HTTPS/SSL)</li>
                            <li>Secure password hashing and storage</li>
                            <li>Encrypted OAuth token storage</li>
                            <li>Regular security audits and updates</li>
                            <li>Access controls and authentication mechanisms</li>
                        </ul>
                    </section>

                    {/* Your Rights */}
                    <section>
                        <div className="mb-4 flex items-center space-x-3">
                            <Eye className="h-6 w-6 text-brand-blue" />
                            <h2 className="font-heading text-2xl font-bold text-brand-navy">
                                Your Rights and Choices
                            </h2>
                        </div>
                        <div className="space-y-2 text-slate-700">
                            <p className="leading-relaxed">You have the right to:</p>
                            <ul className="ml-6 list-disc space-y-1">
                                <li>Access and review your personal information</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your account and data</li>
                                <li>Opt-out of marketing communications</li>
                                <li>Revoke Google Drive access permissions</li>
                                <li>Export your data in a portable format</li>
                            </ul>
                            <p className="mt-4 leading-relaxed">
                                To exercise these rights, please contact us at{' '}
                                <a href="mailto:privacy@rofsansir.com" className="font-semibold text-brand-blue hover:underline">
                                    privacy@rofsansir.com
                                </a>
                            </p>
                        </div>
                    </section>

                    {/* Cookies */}
                    <section>
                        <div className="mb-4 flex items-center space-x-3">
                            <Database className="h-6 w-6 text-brand-blue" />
                            <h2 className="font-heading text-2xl font-bold text-brand-navy">
                                Cookies and Tracking Technologies
                            </h2>
                        </div>
                        <p className="leading-relaxed text-slate-700">
                            We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookie preferences through your browser settings.
                        </p>
                    </section>

                    {/* Children's Privacy */}
                    <section>
                        <div className="mb-4 flex items-center space-x-3">
                            <Shield className="h-6 w-6 text-brand-blue" />
                            <h2 className="font-heading text-2xl font-bold text-brand-navy">
                                Children's Privacy
                            </h2>
                        </div>
                        <p className="leading-relaxed text-slate-700">
                            Our services are intended for students aged 13 and above. We do not knowingly collect personal information from children under 13 without parental consent. If you believe we have collected information from a child under 13, please contact us immediately.
                        </p>
                    </section>

                    {/* Changes to Policy */}
                    <section>
                        <div className="mb-4 flex items-center space-x-3">
                            <Globe className="h-6 w-6 text-brand-blue" />
                            <h2 className="font-heading text-2xl font-bold text-brand-navy">
                                Changes to This Privacy Policy
                            </h2>
                        </div>
                        <p className="leading-relaxed text-slate-700">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="rounded-2xl bg-slate-50 p-6">
                        <div className="mb-4 flex items-center space-x-3">
                            <Mail className="h-6 w-6 text-brand-blue" />
                            <h2 className="font-heading text-2xl font-bold text-brand-navy">
                                Contact Us
                            </h2>
                        </div>
                        <p className="mb-4 leading-relaxed text-slate-700">
                            If you have any questions about this Privacy Policy or our data practices, please contact us:
                        </p>
                        <div className="space-y-2 text-slate-700">
                            <p><strong>Email:</strong> <a href="mailto:privacy@rofsansir.com" className="text-brand-blue hover:underline">privacy@rofsansir.com</a></p>
                            <p><strong>Phone:</strong> +880 1948-116595</p>
                            <p><strong>Address:</strong> Lalmatia, Dhaka, Bangladesh</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        </>
    );
};

export default PrivacyPolicyPage;
