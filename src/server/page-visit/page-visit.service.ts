import "server-only";

import type { PageVisitPayload } from "@/src/validators/page-visits";
import { AppError } from "@/src/server/common/app-error";
import { createSupabaseClient } from "@/src/server/supabase/client";

const TABLE_NAME = "page_visits";

// 전체 방문 수를 조회
export async function getPageVisitCountByDate() {
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

// 방문자와 날짜 기준으로 기존 방문 기록을 조회
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

// 기존 방문 기록을 재사용하거나 없으면 새로 생성
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
