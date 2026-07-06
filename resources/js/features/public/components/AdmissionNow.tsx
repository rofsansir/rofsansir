import { UserStar } from 'lucide-react';
import React from 'react';

export const AdmissionNow: React.FC = () => {
    return (
        <div className="mt-16 text-center">
            <a
                href="https://edutechs.app/s-online-admission?key=odLPMK4oh4Mus2Y8hXjis4YjTUX2"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-xl bg-brand-blue px-8 py-4 text-xl font-bold text-white shadow-2xl transition-all hover:scale-110 hover:bg-white hover:text-brand-navy focus:ring-4 focus:ring-brand-blue/50 focus:outline-none md:gap-4 md:px-12 md:py-7 md:text-3xl"
            >
                <UserStar className="h-6 w-6 transition-transform group-hover:rotate-12 md:h-8 md:w-8" />
                Admission Now
            </a>
        </div>
    );
};
