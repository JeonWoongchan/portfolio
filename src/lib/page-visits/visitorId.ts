const VISITOR_STORAGE_KEY = "portfolio-visitor-id";

export function getTodayDate() {
    return new Date().toISOString().slice(0, 10);
}

export function getOrCreateVisitorId() {
    const existingVisitorId = window.localStorage.getItem(VISITOR_STORAGE_KEY);

    if (existingVisitorId) {
        return existingVisitorId;
    }

    const nextVisitorId = crypto.randomUUID();
    window.localStorage.setItem(VISITOR_STORAGE_KEY, nextVisitorId);

    return nextVisitorId;
}
