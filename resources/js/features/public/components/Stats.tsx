import { BookOpen, ClipboardCheck, GraduationCap, Users } from 'lucide-react';
import React from 'react';

const Stats: React.FC = () => {
    const stats = [
        { icon: <Users />, value: '3000+', label: 'Students Mentored' },
        { icon: <GraduationCap />, value: '8+', label: 'Years Teaching Experience' },
        {
            icon: <ClipboardCheck />,
            value: '98%',
            label: 'A* & A Success Rate',
        },
        {
            icon: <BookOpen />,
            value: '5+ Published',
            label: 'Guidebooks',
        },
    ];

    return (
        <div className="relative z-20 mx-4 -mt-10 max-w-7xl rounded-2xl border-y border-slate-100 bg-white py-12 shadow-sm md:mx-8 lg:mx-auto">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center space-y-2 border-r border-slate-100 text-center last:border-r-0"
                    >
                        <div className="mb-1 h-8 w-8 text-brand-blue">
                            {stat.icon}
                        </div>
                        <p className="font-heading text-2xl font-extrabold text-brand-navy">
                            {stat.value}
                        </p>
                        <p className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stats;
