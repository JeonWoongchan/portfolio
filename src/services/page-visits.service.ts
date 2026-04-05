import { createClient } from "@supabase/supabase-js";
import { getSupabaseEnv } from "@/src/lib/env/supabase";
import type { PageVisitPayload } from "@/src/validators/page-visits";

const TABLE_NAME = "page_visits";

function getSupabaseClient() {
    const { supabasePublishableKey, supabaseUrl } = getSupabaseEnv();

    return createClient(supabaseUrl, supabasePublishableKey);
}

export async function getPageVisitCountByDate() {
    const supabase = getSupabaseClient();
    const { count, error } = await supabase
        .from(TABLE_NAME)
        .select("*", { count: "exact", head: true });

    if (error) {
        throw new Error(`page_visits 조회에 실패했습니다: ${error.message}`);
    }

    return count ?? 0;
}

export async function getPageVisitByVisitorAndDate(params: {
    visitorId: string;
    visitedDate: string;
}) {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
        .from(TABLE_NAME)
        .select("*")
        .eq("visitor_id", params.visitorId)
        .maybeSingle();

    if (error) {
        throw new Error(`page_visits 조회에 실패했습니다: ${error.message}`);
    }

    return data;
}

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

    const supabase = getSupabaseClient();
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
        throw new Error(`page_visits 생성에 실패했습니다: ${error.message}`);
    }

    return data;
}
