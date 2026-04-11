import type {
    CreatePageVisitRequest,
    PageVisitSyncResponse,
} from "@/src/types/page-visit";

const PAGE_VISITS_ENDPOINT = "/api/page-visits";

export async function syncPageVisit(payload: CreatePageVisitRequest) {
    const response = await fetch(PAGE_VISITS_ENDPOINT, {
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
    });

    if (!response.ok) {
        throw new Error("방문자 동기화 요청에 실패했습니다.");
    }

    const result = (await response.json()) as PageVisitSyncResponse;

    return result.data;
}
