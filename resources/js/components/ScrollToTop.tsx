import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * Automatically scrolls to top of page when route changes
 * Supports scroll restoration for back/forward navigation
 */
const ScrollToTop: React.FC = () => {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        // If there's a hash (anchor link), scroll to that element
        if (hash) {
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            // Scroll to top for new navigation
            // Use instant scroll for browser back/forward, smooth for normal navigation
            window.scrollTo({ 
                top: 0, 
                behavior: 'instant' as ScrollBehavior 
            });
        }
    }, [pathname, hash, key]);

    return null;
};

export default ScrollToTop;
