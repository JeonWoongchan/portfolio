const VISITOR_STORAGE_KEY = "portfolio-visitor-id";

// localStorage에 방문자 ID 기록 또는 조회
export function getOrCreateVisitorId() {
    const existingVisitorId = window.localStorage.getItem(VISITOR_STORAGE_KEY);

    if (existingVisitorId) {
        return existingVisitorId;
    }

    const nextVisitorId = crypto.randomUUID();
    window.localStorage.setItem(VISITOR_STORAGE_KEY, nextVisitorId);

    return nextVisitorId;
}
