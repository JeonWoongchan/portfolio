import type {
    CreatePageVisitRequest,
    PageVisitCountResponse,
} from "@/src/types/page-visit";

const PAGE_VISITS_ENDPOINT = "/api/page-visits";

export async function savePageVisit(payload: CreatePageVisitRequest) {
    const response = await fetch(PAGE_VISITS_ENDPOINT, {
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
    });

    if (!response.ok) {
        throw new Error("방문 기록 요청에 실패했습니다.");
    }
}

export async function getPageVisitCount() {
    const response = await fetch(PAGE_VISITS_ENDPOINT);

    if (!response.ok) {
        throw new Error("방문자 수 조회 요청에 실패했습니다.");
    }

    const result = (await response.json()) as PageVisitCountResponse;

    return result.data.count;
}
