'use client';

import { usePageVisit } from '@/src/hooks/page-visits/usePageVisit';

export default function PageVisitBadge() {
    const { count, error, isLoading } = usePageVisit();

    if (error) {
        return null;
    }

    return (
        <span className="whitespace-nowrap px-1 text-xs text-white/70 tabular-nums">
            {isLoading || count === null ? '...' : `${count} visitors`}
        </span>
    );
}
