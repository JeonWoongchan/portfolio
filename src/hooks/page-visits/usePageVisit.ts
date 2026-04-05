'use client';

import { useEffect, useState } from 'react';
import {
    savePageVisit,
    getPageVisitCount,
} from '@/src/lib/page-visits/pageVisitApi';
import {
    getOrCreateVisitorId,
    getTodayDate,
} from '@/src/lib/page-visits/visitorId';

export function usePageVisit() {
    const [count, setCount] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [visitorId, setVisitorId] = useState<string>('');

    useEffect(() => {
        setVisitorId(getOrCreateVisitorId());
    }, []);

    useEffect(() => {
        if (!visitorId) {
            return;
        }

        const visitedDate = getTodayDate();
        const visitedAt = new Date().toISOString();
        let isCancelled = false;

        async function syncPageVisit() {
            setIsLoading(true);
            setError(null);

            try {
                // 방문자 수 저장
                await savePageVisit({
                    visitorId,
                    visitedAt,
                    visitedDate,
                });

                // 방문자 수 조회
                const nextCount = await getPageVisitCount();

                if (isCancelled) {
                    return;
                }

                setCount(nextCount);
            } catch (caughtError) {
                if (isCancelled) {
                    return;
                }

                setError(
                    caughtError instanceof Error
                        ? caughtError.message
                        : '알 수 없는 오류가 발생했습니다.'
                );
            } finally {
                if (!isCancelled) {
                    setIsLoading(false);
                }
            }
        }

        void syncPageVisit();

        return () => {
            isCancelled = true;
        };
    }, [visitorId]);

    return {
        count,
        error,
        isLoading,
    };
}
