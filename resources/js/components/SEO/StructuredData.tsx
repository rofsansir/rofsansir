import { Helmet } from 'react-helmet-async';
import React from 'react';

interface StructuredDataProps {
    type?: 'organization' | 'person' | 'course' | 'article' | 'breadcrumb' | 'faq';
    data?: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type = 'organization', data }) => {
    const getSchema = () => {
        switch (type) {
            case 'organization':
                return {
                    '@context': 'https://schema.org',
                    '@type': 'EducationalOrganization',
                    name: 'Rofsan Sir O Level Bengali',
                    alternateName: 'Rofsan Sir',
                    url: 'https://rofsansir.com',
                    logo: 'https://rofsansir.com/assets/brand-logo.png',
                    description: 'Expert O Level Bengali coaching in Dhaka, Bangladesh. Cambridge-approved examiner with 8+ years of teaching experience.',
                    address: {
                        '@type': 'PostalAddress',
                        streetAddress: 'Lalmatia',
                        addressLocality: 'Dhaka',
                        addressRegion: 'Dhaka Division',
                        postalCode: '1207',
                        addressCountry: 'BD',
                    },
                    geo: {
                        '@type': 'GeoCoordinates',
                        latitude: 23.7461,
                        longitude: 90.3742,
                    },
                    contactPoint: {
                        '@type': 'ContactPoint',
                        telephone: '+880-1948-116595',
                        contactType: 'Customer Service',
                        email: 'rofsankhan@gmail.com',
                        availableLanguage: ['English', 'Bengali'],
                    },
                    sameAs: [
                        'https://facebook.com/rofsankhan',
                        'https://youtube.com/@olevelbengali',
                        'https://instagram.com/rofsankhan',
                        'https://linkedin.com/in/rofsankhan',
                    ],
                    founder: {
                        '@type': 'Person',
                        name: 'Rofsan Khan',
                        jobTitle: 'O Level Bengali Teacher & Cambridge Examiner',
                    },
                };

            case 'person':
                return {
                    '@context': 'https://schema.org',
                    '@type': 'Person',
                    name: 'Rofsan Khan',
                    alternateName: 'Rofsan Sir',
                    jobTitle: 'O Level Bengali Teacher & Cambridge Examiner',
                    description: 'Cambridge-approved O Level Bengali Examiner with 8+ years of teaching experience in Dhaka, Bangladesh.',
                    worksFor: {
                        '@type': 'EducationalOrganization',
                        name: 'Rofsan Sir O Level Bengali',
                    },
                    knowsAbout: [
                        'O Level Bengali',
                        'CAIE Bengali',
                        'Cambridge Assessment',
                        'Bengali Language Teaching',
                        'Exam Preparation',
                    ],
                    alumniOf: {
                        '@type': 'EducationalOrganization',
                        name: 'University of Dhaka',
                    },
                    address: {
                        '@type': 'PostalAddress',
                        addressLocality: 'Dhaka',
                        addressCountry: 'BD',
                    },
                    email: 'rofsankhan@gmail.com',
                    telephone: '+880-1948-116595',
                    sameAs: [
                        'https://facebook.com/rofsankhan',
                        'https://youtube.com/@olevelbengali',
                    ],
                };

            case 'course':
                return {
                    '@context': 'https://schema.org',
                    '@type': 'Course',
                    name: 'O Level Bengali Coaching',
                    description: 'Comprehensive O Level Bengali preparation course for Cambridge CAIE students. Expert guidance from Cambridge-approved examiner.',
                    provider: {
                        '@type': 'EducationalOrganization',
                        name: 'Rofsan Sir O Level Bengali',
                        sameAs: 'https://rofsansir.com',
                    },
                    educationalLevel: 'O Level',
                    courseCode: '3204',
                    hasCourseInstance: {
                        '@type': 'CourseInstance',
                        courseMode: 'In-person',
                        location: {
                            '@type': 'Place',
                            address: {
                                '@type': 'PostalAddress',
                                addressLocality: 'Dhaka',
                                addressCountry: 'BD',
                            },
                        },
                        instructor: {
                            '@type': 'Person',
                            name: 'Rofsan Khan',
                            jobTitle: 'Cambridge O Level Bengali Examiner',
                        },
                    },
                    offers: {
                        '@type': 'Offer',
                        category: 'Educational',
                        priceCurrency: 'BDT',
                    },
                    inLanguage: 'Bengali',
                    availableLanguage: ['Bengali', 'English'],
                };

            case 'article':
                return data || {};

            case 'breadcrumb':
                return data || {};

            case 'faq': {
                // Expects data = FAQEntry[] (flattened, all categories).
                const entries: Array<{ question: string; answer: string }> =
                    data || [];
                return {
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    mainEntity: entries.map((e) => ({
                        '@type': 'Question',
                        name: e.question,
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: e.answer,
                        },
                    })),
                };
            }

            default:
                return {};
        }
    };

    const schema = getSchema();

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default StructuredData;
