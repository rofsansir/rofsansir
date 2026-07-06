import { BookOpenCheck, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';
import SEO from '../../../components/SEO/SEO';
import StructuredData from '../../../components/SEO/StructuredData';

const ContactPage: React.FC = () => {
    return (
        <>
            <SEO path="/contact" />
            <StructuredData type="organization" />
            <div className="min-h-screen bg-slate-50 pt-24">
            {/* Hero Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl space-y-4">
                        <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-brand-blue">
                            Contact & Support
                        </div>
                        <h1 className="font-heading text-4xl font-extrabold text-brand-navy md:text-5xl">
                            Get in touch with <span className="text-brand-blue">Rofsan Sir</span>
                        </h1>
                        <p className="text-lg text-brand-navy/70">
                            Have questions about our O & A Level Bengali classes? We're here to help you succeed.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="container mx-auto -mt-10 px-6">
                <div className="grid gap-6 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-2xl bg-white p-8 shadow-lg">
                        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                            <Phone className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-lg font-bold text-brand-navy">Phone</h3>
                        <a href="tel:+8801948116595" className="text-brand-navy/70 hover:text-brand-blue">
                            +880 1948 116595
                        </a>
                    </div>

                    <div className="rounded-2xl bg-white p-8 shadow-lg">
                        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                            <Mail className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-lg font-bold text-brand-navy">Email</h3>
                        <a href="mailto:rofsankhan@gmail.com" className="text-brand-navy/70 hover:text-brand-blue">
                            rofsankhan@gmail.com
                        </a>
                    </div>

                    <div className="rounded-2xl bg-white p-8 shadow-lg">
                        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-lg font-bold text-brand-navy">Location</h3>
                        <p className="text-brand-navy/70">
                            8/12, Block B, Lalmatia<br />
                            Dhaka-1207
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white p-8 shadow-lg">
                        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                            <BookOpenCheck className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-lg font-bold text-brand-navy">Class Hours</h3>
                        <p className="text-brand-navy/70">
                          Saturday - Thursday:<br /> 10:00 AM - 9:00 PM<br />
                          <span className="text-sm italic">Friday: By Appointment</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Location & Map Section */}
            <section className="container mx-auto px-6 py-16">
                <div className="mx-auto max-w-3xl space-y-6">
                    <div>
                        <h2 className="font-heading mb-2 text-3xl font-extrabold text-brand-navy">
                            Visit Our Center
                        </h2>
                        <p className="mb-2 text-brand-navy/70">
                            Located in Lalmatia, Dhaka. Reach out by phone, email, or WhatsApp for admission inquiries.
                        </p>
                    </div>

                    {/* Google Map */}
                    <div className="overflow-hidden rounded-3xl shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.740188939236!2d90.36837849999999!3d23.7566426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bffb92e1cb8d%3A0x86f96d5f0f18ee33!2sRofsan%20Sir%20-%20O%20Level%20Bengali!5e0!3m2!1sen!2sbd!4v1773096642522!5m2!1sen!2sbd"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Rofsan Sir - 8/12, Block B, Lalmatia, Dhaka 1207"
                        />
                    </div>

                    {/* Location Details */}
                    <div className="rounded-2xl bg-white p-6 shadow-lg">
                        <h3 className="mb-3 text-lg font-bold text-brand-navy">
                            Main Center Address
                        </h3>
                        <p className="mb-4 text-brand-navy/70">
                            8/12, Block B, Lalmatia<br />
                            Dhaka-1207, Bangladesh
                        </p>
                        <a
                            href="https://maps.app.goo.gl/xGKVnJx2nLUxaEmQ8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-navy"
                        >
                            <MapPin className="h-4 w-4" />
                            Open in Google Maps
                        </a>
                    </div>

                    {/* Directions */}
                    <div className="rounded-2xl bg-white p-6 shadow-lg">
                        <h3 className="mb-3 text-lg font-bold text-brand-navy">
                            Directions
                        </h3>
                        <ul className="space-y-2 text-sm text-brand-navy/70">
                            <li className="flex items-start gap-2">
                                <span className="mt-1 text-brand-blue">•</span>
                                <span>From Dhanmondi: 10 minutes via Satmasjid Road</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 text-brand-blue">•</span>
                                <span>From Mirpur: 15 minutes via Ring Road</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 text-brand-blue">•</span>
                                <span>Nearest Landmark: Lalmatia Women College</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            </div>
        </>
    );
};

export default ContactPage;
