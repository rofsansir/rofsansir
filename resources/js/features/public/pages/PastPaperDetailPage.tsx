import { Download, Eye, FileText, Calendar, Tag } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import { AdmissionNow } from '../components/AdmissionNow';
import { getPastPaperBySlug } from '@/data/pastPapers';

interface PastPaper {
    id: number;
    title: string;
    slug: string;
    year: number;
    session: string | null;
    paper_type: string;
    file_name: string;
    file_size: number;
    file_size_formatted: string;
    description: string;
    meta_keywords: string;
    download_count: number;
    view_count: number;
    viewUrl: string;
    downloadUrl: string;
}

const PastPaperDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [paper, setPaper] = useState<PastPaper | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const found = slug ? getPastPaperBySlug(slug) : null;
        if (found) {
            setPaper(found);
        } else {
            setError(true);
        }
        setLoading(false);
    }, [slug]);

    const handleDownload = () => {
        // Download tracking removed for static deployment (no backend).
        // The actual file download is handled by the <a download> link via paper.downloadUrl.
    };

    if (loading) {
        return (
            <div className="animate-fade-in-up min-h-screen pt-24">
                <div className="mx-auto max-w-4xl px-4 py-24 text-center">
                    <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-brand-blue/30 border-t-brand-blue"></div>
                    <p className="mt-4 text-slate-600">Loading past paper...</p>
                </div>
            </div>
        );
    }

    if (error || !paper) {
        return (
            <div className="animate-fade-in-up min-h-screen pt-24">
                <div className="mx-auto max-w-4xl px-4 py-24 text-center">
                    <FileText className="mx-auto h-16 w-16 text-slate-300" />
                    <h1 className="mt-6 text-3xl font-bold text-brand-navy">
                        Past Paper Not Found
                    </h1>
                    <p className="mt-4 text-slate-600">
                        The past paper you're looking for doesn't exist or has been removed.
                    </p>
                    <button
                        onClick={() => navigate('/resources')}
                        className="mt-8 rounded-full bg-brand-blue px-8 py-3 font-bold text-white transition-all hover:bg-brand-navy"
                    >
                        Browse All Resources
                    </button>
                </div>
            </div>
        );
    }

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'DigitalDocument',
        name: paper.title,
        description: paper.description,
        about: {
            '@type': 'Course',
            name: 'O Level Bengali',
            courseCode: 'CAIE 3204',
        },
        datePublished: paper.year.toString(),
        fileFormat: 'application/pdf',
        inLanguage: 'bn',
        provider: {
            '@type': 'EducationalOrganization',
            name: 'Rofsan Sir - O Level Bengali',
            url: window.location.origin,
        },
        keywords: paper.meta_keywords,
    };

    return (
        <>
            <Helmet>
                <title>{paper.title} | Rofsan Sir - O Level Bengali</title>
                <meta name="description" content={paper.description} />
                <meta name="keywords" content={paper.meta_keywords} />

                {/* Open Graph */}
                <meta property="og:title" content={paper.title} />
                <meta property="og:description" content={paper.description} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={window.location.href} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={paper.title} />
                <meta name="twitter:description" content={paper.description} />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <div className="animate-fade-in-up min-h-screen pt-24">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-brand-blue py-20">
                    <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-8">
                        <div className="space-y-6 text-center">
                            <div className="inline-flex items-center space-x-2 rounded-full border border-white/30 bg-white/10 px-5 py-2">
                                <FileText className="h-4 w-4 text-white" />
                                <span className="text-xs font-black tracking-widest text-white uppercase">
                                    {paper.paper_type}
                                </span>
                            </div>
                            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                                {paper.title}
                            </h1>
                            <p className="mx-auto max-w-2xl text-lg text-slate-200">
                                {paper.description}
                            </p>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 h-full w-1/3 rounded-full bg-white/5 blur-[120px]"></div>
                </section>

                {/* Paper Details */}
                <section className="bg-white py-16">
                    <div className="mx-auto max-w-4xl px-4 md:px-8">
                        <div className="rounded-[40px] border border-brand-navy/10 bg-white p-8 shadow-lg md:p-12">
                            {/* Meta Information */}
                            <div className="mb-8 grid gap-6 md:grid-cols-3">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-2xl bg-brand-blue/10 p-3">
                                        <Calendar className="h-6 w-6 text-brand-blue" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Year</p>
                                        <p className="font-bold text-brand-navy">
                                            {paper.year} {paper.session}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="rounded-2xl bg-brand-blue/10 p-3">
                                        <Tag className="h-6 w-6 text-brand-blue" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Type</p>
                                        <p className="font-bold text-brand-navy">
                                            {paper.paper_type}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="rounded-2xl bg-brand-blue/10 p-3">
                                        <FileText className="h-6 w-6 text-brand-blue" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Size</p>
                                        <p className="font-bold text-brand-navy">
                                            {paper.file_size_formatted}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={paper.viewUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-brand-navy/10 bg-white px-8 py-4 text-base font-bold text-brand-navy transition-all hover:border-brand-blue hover:text-brand-blue"
                                >
                                    <Eye className="h-5 w-5" />
                                    View PDF
                                </a>
                                <a
                                    href={paper.downloadUrl}
                                    download
                                    onClick={handleDownload}
                                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-blue px-8 py-4 text-base font-bold text-white transition-all hover:bg-brand-navy"
                                >
                                    <Download className="h-5 w-5" />
                                    Download PDF
                                </a>
                            </div>

                            {/* Stats */}
                            <div className="mt-8 flex items-center justify-center gap-8 border-t border-brand-navy/10 pt-8 text-sm text-slate-600">
                                <div>
                                    <span className="font-bold text-brand-navy">
                                        {paper.view_count}
                                    </span>{' '}
                                    views
                                </div>
                                <div>
                                    <span className="font-bold text-brand-navy">
                                        {paper.download_count}
                                    </span>{' '}
                                    downloads
                                </div>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-12 rounded-[40px] bg-brand-blue/5 p-8">
                            <h2 className="mb-4 text-2xl font-bold text-brand-navy">
                                About This Past Paper
                            </h2>
                            <p className="leading-relaxed text-slate-700">
                                This is an official CAIE O Level Bengali (3204) past paper from {paper.year}
                                {paper.session && ` ${paper.session}`}. Use this resource to practice exam questions,
                                understand the paper format, and improve your Bengali language skills. For expert
                                guidance and comprehensive O Level Bengali preparation, join Rofsan Sir's classes.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-slate-50 py-16">
                    <div className="mx-auto max-w-4xl px-4 text-center">
                        <h2 className="font-heading mb-6 text-3xl font-extrabold text-brand-navy md:text-4xl">
                            Need Help with O Level Bengali?
                        </h2>
                        <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600">
                            Get expert guidance from a CAIE Approved O Level Bengali Examiner.
                            Join our classes and master the CAIE 3204 syllabus.
                        </p>
                        <AdmissionNow />
                    </div>
                </section>
            </div>
        </>
    );
};

export default PastPaperDetailPage;
