'use client';

import { create } from 'zustand';

interface SectionStore {
    refs: Record<string, HTMLElement | null>;
    currentSectionKey: string | null;
    setRef: (key: string, element: HTMLElement | null) => void;
    setCurrentSectionKey: (key: string | null) => void;
    scrollTo: (key: string) => void;
}

export const useSectionStore = create<SectionStore>((set, get) => ({
    refs: {},
    currentSectionKey: 'Hero',

    setRef: (key: string, element: HTMLElement | null) => {
        set((state) => ({
            refs: { ...state.refs, [key]: element }
        }));
    },

    setCurrentSectionKey: (key) => {
        set({ currentSectionKey: key });
    },

    scrollTo: (key: string) => {
        const { refs } = get();
        refs[key]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}));
