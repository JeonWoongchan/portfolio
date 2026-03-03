'use client';

import { create } from 'zustand';

export type HeroIntroPhase = 0 | 1 | 2;

interface HeroIntroStore {
    phase: HeroIntroPhase;
    setPhase: (phase: HeroIntroPhase) => void;
    resetPhase: () => void;
}

const HERO_INTRO_INITIAL_PHASE: HeroIntroPhase = 0;

export const useHeroIntroStore = create<HeroIntroStore>((set) => ({
    phase: HERO_INTRO_INITIAL_PHASE,
    setPhase: (phase) => set({ phase }),
    resetPhase: () => set({ phase: HERO_INTRO_INITIAL_PHASE }),
}));

