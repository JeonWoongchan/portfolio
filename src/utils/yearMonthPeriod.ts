import type { YearMonth } from "@/src/types/yearMonth";

// 내부 저장 포맷(YYYY-MM)과 화면 표시 포맷(YYYY.MM) 규칙
const YEAR_MONTH_SEPARATOR = "-";
const DISPLAY_SEPARATOR = ".";
const RANGE_SEPARATOR = " ~ ";

// 단일 YearMonth 값을 UI 표기용 문자열로 변환
export function formatYearMonth(value: YearMonth): string {
    const [year, month] = value.split(YEAR_MONTH_SEPARATOR);
    return `${year}${DISPLAY_SEPARATOR}${month}`;
}

// 시작/종료 월 범위를 표시 문자열로 변환 (동일 월이면 단일 값만 반환)
export function formatYearMonthRange(periodStart: YearMonth, periodEnd: YearMonth): string {
    const startText = formatYearMonth(periodStart);
    const endText = formatYearMonth(periodEnd);

    if (startText === endText) {
        return startText;
    }

    return `${startText}${RANGE_SEPARATOR}${endText}`;
}

// 최신 항목이 먼저 오도록 기간 범위를 정렬:
// 1) 종료 월 내림차순 2) 시작 월 내림차순
export function compareYearMonthRangeByLatest(
    left: { periodStart: YearMonth; periodEnd: YearMonth },
    right: { periodStart: YearMonth; periodEnd: YearMonth }
): number {
    const endOrder = right.periodEnd.localeCompare(left.periodEnd);
    if (endOrder !== 0) {
        return endOrder;
    }

    return right.periodStart.localeCompare(left.periodStart);
}
