'use client';

import { create } from 'zustand';

interface SectionStore {
    refs: Record<string, HTMLElement | null>;
    setRef: (key: string, element: HTMLElement | null) => void;
    scrollTo: (key: string) => void;
}

export const useSectionStore = create<SectionStore>((set, get) => ({
    refs: {},

    setRef: (key: string, element: HTMLElement | null) => {
        set((state) => ({
            refs: { ...state.refs, [key]: element }
        }));
    },

    scrollTo: (key: string) => {
        const { refs } = get();
        refs[key]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}));