import "server-only";

import type { PageVisitPayload } from "@/src/validators/page-visits";
import { AppError } from "@/src/server/common/app-error";
import { createSupabaseClient } from "@/src/server/supabase/client";

const TABLE_NAME = "page_visits";

// 누적 방문 기록 수 조회
export async function getPageVisitCount() {
    const supabase = createSupabaseClient();
    const { count, error } = await supabase
        .from(TABLE_NAME)
        .select("*", { count: "exact", head: true });

    if (error) {
        throw new AppError(
            `page_visits 조회에 실패했습니다: ${error.message}`,
            500
        );
    }

    return count ?? 0;
}

// 해당 visitorId와 날짜의 방문 기록 조회
export async function getPageVisitByVisitorAndDate(params: {
    visitorId: string;
    visitedDate: string;
}) {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
        .from(TABLE_NAME)
        .select("*")
        .eq("visitor_id", params.visitorId)
        .eq("visited_date", params.visitedDate)
        .maybeSingle();

    if (error) {
        throw new AppError(
            `page_visits 조회에 실패했습니다: ${error.message}`,
            500
        );
    }

    return data;
}

// 방문 기록이 없으면 생성하고, 있으면 기존 기록 반환
export async function createOrGetPageVisit(payload: {
    visitorId: PageVisitPayload["visitorId"];
    visitedAt: PageVisitPayload["visitedAt"];
    visitedDate: PageVisitPayload["visitedDate"];
}) {
    const existingVisit = await getPageVisitByVisitorAndDate({
        visitedDate: payload.visitedDate,
        visitorId: payload.visitorId,
    });

    if (existingVisit) {
        return existingVisit;
    }

    const supabase = createSupabaseClient();
    const { data, error } = await supabase
        .from(TABLE_NAME)
        .insert({
            visited_at: payload.visitedAt,
            visited_date: payload.visitedDate,
            visitor_id: payload.visitorId,
        })
        .select()
        .single();

    if (error) {
        throw new AppError(
            `page_visits 생성에 실패했습니다: ${error.message}`,
            500
        );
    }

    return data;
}

//  방문 기록을 동기화한 뒤 누적 방문 기록 수 조회
export async function syncPageVisitAndGetCount(payload: {
    visitorId: PageVisitPayload["visitorId"];
    visitedAt: PageVisitPayload["visitedAt"];
    visitedDate: PageVisitPayload["visitedDate"];
}) {
    await createOrGetPageVisit(payload);

    const count = await getPageVisitCount();

    return {
        count,
        hasVisitedToday: true,
    };
}
