import React from 'react';

interface YouTubeEmbedProps {
    videoId: string;
    title: string;
    autoplay?: boolean;
    controls?: boolean;
    className?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
    videoId,
    title,
    autoplay = false,
    controls = true,
    className = '',
}) => {
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&controls=${controls ? 1 : 0}&rel=0&modestbranding=1`;

    return (
        <div className={`relative aspect-video overflow-hidden rounded-2xl shadow-2xl ${className}`}>
            <iframe
                src={embedUrl}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                loading="lazy"
            />
        </div>
    );
};

export default YouTubeEmbed;
