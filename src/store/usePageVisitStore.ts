'use client';

import { create } from "zustand";

interface PageVisitState {
    count: number | null;
    error: string | null;
    hasVisitedToday: boolean;
    isLoading: boolean;
    setPageVisit: (payload: {
        count: number;
        hasVisitedToday: boolean;
    }) => void;
    setPageVisitError: (error: string | null) => void;
    setPageVisitLoading: (isLoading: boolean) => void;
}

export const usePageVisitStore = create<PageVisitState>((set) => ({
    count: null,
    error: null,
    hasVisitedToday: false,
    isLoading: false,
    setPageVisit: (payload) => {
        set({
            count: payload.count,
            error: null,
            hasVisitedToday: payload.hasVisitedToday,
            isLoading: false,
        });
    },
    setPageVisitError: (error) => {
        set({
            error,
            isLoading: false,
        });
    },
    setPageVisitLoading: (isLoading) => {
        set({ isLoading });
    },
}));
