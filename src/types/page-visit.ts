export type PageVisitCountResponse = {
    data: {
        count: number;
    };
};

export type CreatePageVisitRequest = {
    visitorId: string;
    visitedAt: string;
    visitedDate: string;
};
