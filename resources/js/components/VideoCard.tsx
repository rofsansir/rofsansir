import { Clock, Eye, Play } from 'lucide-react';
import React from 'react';

interface VideoCardProps {
    videoId: string;
    title: string;
    duration: string;
    views: string;
    thumbnail?: string;
    onClick: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({
    videoId,
    title,
    duration,
    views,
    thumbnail,
    onClick,
}) => {
    const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return (
        <div
            onClick={onClick}
            className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1"
        >
            <div className="relative aspect-video overflow-hidden bg-slate-200">
                <img
                    src={thumbnailUrl}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all group-hover:bg-black/40">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue shadow-xl transition-all group-hover:scale-110 group-hover:bg-brand-blue-light">
                        <Play className="h-8 w-8 fill-white text-white" />
                    </div>
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 rounded-lg bg-black/80 px-2 py-1 text-xs font-bold text-white">
                    {duration}
                </div>
            </div>
            <div className="p-4">
                <h3 className="mb-2 line-clamp-2 text-lg font-bold text-brand-navy group-hover:text-brand-blue">
                    {title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{duration}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
