"use client";

import { useQuery } from "@tanstack/react-query";

import { syncPageVisit } from "@/src/apis/page-visit-api";
import { useSyncPageVisitStore } from "@/src/hooks/page-visits/useSyncPageVisitStore";
import { getOrCreateVisitorId } from "@/src/utils/getOrCreateVisitorId";
import { getTodayDate } from "@/src/utils/getTodayDate";

const PAGE_VISIT_QUERY_KEY = ["pageVisit"];

export default function PageVisitSync() {
    const query = useQuery({
        gcTime: 1000 * 60 * 60 * 24,
        queryFn: async () => {
            const visitorId = getOrCreateVisitorId();

            return syncPageVisit({
                visitedAt: new Date().toISOString(),
                visitedDate: getTodayDate(),
                visitorId,
            });
        },
        queryKey: PAGE_VISIT_QUERY_KEY,
        staleTime: 1000 * 60 * 5,
    });

    useSyncPageVisitStore(query);

    return null;
}
