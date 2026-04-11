"use client";

import type { UseQueryResult } from "@tanstack/react-query";
import { useEffect } from "react";

import { usePageVisitStore } from "@/src/store/usePageVisitStore";

interface PageVisitQueryData {
    count: number;
    hasVisitedToday: boolean;
}

export function useSyncPageVisitStore(
    query: UseQueryResult<PageVisitQueryData, Error>
) {
    const setPageVisit = usePageVisitStore((state) => state.setPageVisit);
    const setPageVisitError = usePageVisitStore((state) => state.setPageVisitError);
    const setPageVisitLoading = usePageVisitStore((state) => state.setPageVisitLoading);

    useEffect(() => {
        setPageVisitLoading(query.isLoading);
    }, [query.isLoading, setPageVisitLoading]);

    useEffect(() => {
        if (!query.data) {
            return;
        }

        setPageVisit(query.data);
    }, [query.data, setPageVisit]);

    useEffect(() => {
        if (!(query.error instanceof Error)) {
            return;
        }

        setPageVisitError(query.error.message);
    }, [query.error, setPageVisitError]);
}
