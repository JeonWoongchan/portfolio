import type { YearMonth } from "@/src/types/yearMonth";

type PeriodEnd = YearMonth | "";

const ONGOING_SORT_KEY = "9999.12";

const toPeriodEndSortKey = (periodEnd: PeriodEnd): YearMonth | typeof ONGOING_SORT_KEY => {
    return periodEnd === "" ? ONGOING_SORT_KEY : periodEnd;
};

export function compareYearMonthRangeByLatest(
    left: { periodStart: YearMonth; periodEnd: PeriodEnd },
    right: { periodStart: YearMonth; periodEnd: PeriodEnd }
): number {
    const endOrder = toPeriodEndSortKey(right.periodEnd).localeCompare(toPeriodEndSortKey(left.periodEnd));
    if (endOrder !== 0) {
        return endOrder;
    }

    return right.periodStart.localeCompare(left.periodStart);
}

export function sortByLatestPeriod<T extends { periodStart: YearMonth; periodEnd: PeriodEnd }>(
    items: readonly T[],
    tieBreaker?: (left: T, right: T) => number
): T[] {
    return [...items].sort((left, right) => {
        const periodOrder = compareYearMonthRangeByLatest(left, right);
        if (periodOrder !== 0) {
            return periodOrder;
        }

        return tieBreaker ? tieBreaker(left, right) : 0;
    });
}
