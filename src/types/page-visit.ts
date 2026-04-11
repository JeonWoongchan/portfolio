export type CreatePageVisitRequest = {
    visitorId: string;
    visitedAt: string;
    visitedDate: string;
};

export type PageVisitSyncResponse = {
    data: {
        count: number;
        hasVisitedToday: boolean;
    };
};
