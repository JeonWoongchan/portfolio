'use client';

import { usePageVisitStore } from "@/src/store/usePageVisitStore";

export default function PageVisitBadge() {
    const count = usePageVisitStore((state) => state.count);
    const error = usePageVisitStore((state) => state.error);
    const isLoading = usePageVisitStore((state) => state.isLoading);

    if (error) {
        return null;
    }

    return (
        <span className="whitespace-nowrap rounded-lg border px-2 py-0.5 text-xs text-white/70 tabular-nums">
            <span className="mr-1 inline-block h-2 w-2 rounded-full bg-(--color-highlight)" />
            {isLoading || count === null ? "0 visitors" : `${count.toLocaleString()} visitors`}
        </span>
    );
}
