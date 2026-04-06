'use client';

import { usePageVisit } from '@/src/hooks/page-visits/usePageVisit';

export default function PageVisitBadge() {
    const { count, error, isLoading } = usePageVisit();

    if (error) {
        return null;
    }

    return (
        <span className="whitespace-nowrap px-2 py-0.5 text-xs text-white/70 tabular-nums border rounded-lg">
            <span className="inline-block h-2 w-2 mr-1 rounded-full bg-(--color-highlight)" />
            {isLoading || count === null ? '0 visitors' : `${count.toLocaleString()} visitors`}
        </span>
    );
}
