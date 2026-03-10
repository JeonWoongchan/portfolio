'use client';

import { useEffect } from 'react';
import { type HeroIntroPhase, useHeroIntroStore } from '@/src/store/useHeroIntroStore';

interface UseHeroIntroSequenceOptions {
    bootToLogoDelayMs?: number;
    logoToContentDelayMs?: number;
}

const BOOT_TO_LOGO_DELAY_MS = 3000;
const LOGO_TO_CONTENT_DELAY_MS = 3600;

export function useHeroIntroSequence({
    bootToLogoDelayMs = BOOT_TO_LOGO_DELAY_MS,
    logoToContentDelayMs = LOGO_TO_CONTENT_DELAY_MS,
}: UseHeroIntroSequenceOptions = {}): HeroIntroPhase {
    const phase = useHeroIntroStore((state) => state.phase);
    const setPhase = useHeroIntroStore((state) => state.setPhase);
    const resetPhase = useHeroIntroStore((state) => state.resetPhase);

    useEffect(() => {
        const bootToLogo = setTimeout(() => {
            setPhase(1);
        }, bootToLogoDelayMs);

        const logoToContent = setTimeout(() => {
            setPhase(2);
        }, logoToContentDelayMs);

        return () => {
            clearTimeout(bootToLogo);
            clearTimeout(logoToContent);
            resetPhase();
        };
    }, [bootToLogoDelayMs, logoToContentDelayMs, resetPhase, setPhase]);

    return phase;
}

