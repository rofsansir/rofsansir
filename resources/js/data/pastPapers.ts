import raw from './pastPapers.json';

/**
 * Static past-paper data for the public site.
 * Loaded from a static JSON export so the site can be deployed fully static
 * (no backend / database required).
 *
 * Regenerate from the database:
 *   sqlite3 database/database.sqlite ".mode json" \
 *     "SELECT id,title,slug,year,session,paper_type AS paperType,
 *             file_name AS fileName,file_path AS filePath,
 *             '/'||file_path AS url,file_size AS fileSize,description,
 *             meta_keywords AS metaKeywords,download_count AS downloadCount,
 *             view_count AS viewCount,is_active AS isActive,
 *             created_at AS createdAt,updated_at AS updatedAt
 *      FROM past_papers WHERE is_active=1 ORDER BY year DESC, session DESC;" \
 *     > resources/js/data/pastPapers.json
 */

export interface PastPaperRow {
    id: number;
    title: string;
    slug: string;
    year: number;
    session: string | null;
    paperType: string;
    fileName: string;
    filePath: string;
    url: string;
    fileSize: number;
    description: string;
    metaKeywords: string;
    downloadCount: number;
    viewCount: number;
    isActive: number;
    createdAt: string;
    updatedAt: string;
}

const rows = raw as PastPaperRow[];

/** All active past papers (raw rows). */
export const pastPapers: PastPaperRow[] = rows;

/** Human-readable file size, matching the old backend accessor. */
export function fileSizeFormatted(bytes?: number | null): string {
    if (!bytes) return 'N/A';
    if (bytes >= 1048576) return (bytes / 1048576).toFixed(2) + ' MB';
    if (bytes >= 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return bytes + ' B';
}

/* ------------------------------- List view ------------------------------- */

export interface PastPaperFile {
    id: string;
    name: string;
    size: number;
    viewUrl: string;
    downloadUrl: string;
    modifiedTime: string;
    paperType: string;
    slug: string;
}

export interface PastPaperYear {
    year: string;
    folderId: string;
    files: PastPaperFile[];
}

/**
 * Past papers grouped by year (and session when present), newest first.
 * Mirrors the shape previously returned by `GET /api/resources/past-papers`.
 */
export function getPastPapersGrouped(): PastPaperYear[] {
    const groups: PastPaperYear[] = [];
    const index = new Map<string, number>();

    for (const p of rows) {
        const label = p.session ? `${p.year} ${p.session}` : `${p.year}`;
        let pos = index.get(label);
        if (pos === undefined) {
            pos = groups.length;
            index.set(label, pos);
            groups.push({ year: label, folderId: '', files: [] });
        }
        groups[pos].files.push({
            id: String(p.id),
            name: p.fileName,
            size: p.fileSize,
            viewUrl: p.url,
            downloadUrl: p.url,
            modifiedTime: p.updatedAt,
            paperType: p.paperType,
            slug: p.slug,
        });
    }

    return groups;
}

/* ------------------------------ Detail view ------------------------------ */

export interface PastPaperDetail {
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

/** Find a single past paper by slug (for the detail / SEO page). */
export function getPastPaperBySlug(slug: string): PastPaperDetail | null {
    const p = rows.find((r) => r.slug === slug);
    if (!p) return null;

    return {
        id: p.id,
        title: p.title,
        slug: p.slug,
        year: p.year,
        session: p.session,
        paper_type: p.paperType,
        file_name: p.fileName,
        file_size: p.fileSize,
        file_size_formatted: fileSizeFormatted(p.fileSize),
        description: p.description,
        meta_keywords: p.metaKeywords,
        download_count: p.downloadCount,
        view_count: p.viewCount,
        viewUrl: p.url,
        downloadUrl: p.url,
    };
}
