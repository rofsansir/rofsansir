import React, { useEffect, useState } from 'react';

export interface TocItem {
    /** The `id` of the target section element. */
    id: string;
    /** Human-readable label for the navigation link. */
    label: string;
}

interface TableOfContentsProps {
    items: TocItem[];
    /**
     * Viewport breakpoint above which the floating ToC is shown.
     * Default: 'xl' (hidden on small/medium screens).
     */
    showFrom?: 'lg' | 'xl';
    /** Title above the links. */
    title?: string;
}

/**
 * Floating, sticky "On this page" table of contents.
 *
 * - Fixed to the right side, so it does NOT disturb existing full-bleed layouts.
 * - Hidden below the `showFrom` breakpoint (mobile users get the page as-is).
 * - Uses IntersectionObserver to highlight the section currently in view.
 * - Smooth-scrolls to anchors; respects the fixed navbar via `scroll-mt-*` on
 *   the target sections (the consumer must add `scroll-mt-28` to each section).
 *
 * Pass a stable list of `{ id, label }` items matching `id`s on the page.
 */
const TableOfContents: React.FC<TableOfContentsProps> = ({
    items,
    showFrom = 'xl',
    title = 'On this page',
}) => {
    const [activeId, setActiveId] = useState<string | null>(
        items[0]?.id ?? null,
    );

    useEffect(() => {
        if (items.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                // Pick the topmost intersecting section.
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible[0]) {
                    setActiveId(visible[0].target.id);
                }
            },
            {
                // Trigger when a section is roughly in the upper third of the viewport.
                rootMargin: '-30% 0px -60% 0px',
                threshold: 0,
            },
        );

        const els = items
            .map((i) => document.getElementById(i.id))
            .filter((el): el is HTMLElement => Boolean(el));
        els.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [items]);

    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        id: string,
    ) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Keep URL in sync without a jarring jump.
            history.replaceState(null, '', `#${id}`);
        }
    };

    if (items.length === 0) return null;

    const breakpointClass =
        showFrom === 'lg' ? 'hidden lg:block' : 'hidden xl:block';

    return (
        <nav
            aria-label="On this page"
            className={`${breakpointClass} fixed top-1/2 right-6 z-30 w-56 -translate-y-1/2`}
        >
            <div className="rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-sm backdrop-blur-sm">
                <p className="mb-3 text-[10px] font-black tracking-widest text-slate-400 uppercase">
                    {title}
                </p>
                <ul className="max-h-[60vh] space-y-1 overflow-y-auto pr-1">
                    {items.map((item) => {
                        const isActive = activeId === item.id;
                        return (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    onClick={(e) => handleClick(e, item.id)}
                                    className={`block border-l-2 py-1 pr-2 pl-3 text-left text-xs font-medium leading-snug transition-colors ${
                                        isActive
                                            ? 'border-brand-blue text-brand-blue'
                                            : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-brand-navy'
                                    }`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default TableOfContents;
