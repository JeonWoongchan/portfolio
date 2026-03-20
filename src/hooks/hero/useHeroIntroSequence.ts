'use client';

import { useEffect, useState } from 'react';

interface UseHeroIntroSequenceOptions {
    bootToLogoDelayMs?: number;
    logoToContentDelayMs?: number;
}

const BOOT_TO_LOGO_DELAY_MS = 2500;
export const LOGO_TO_CONTENT_DELAY_MS = 3600;

type HeroIntroPhase = 0 | 1 | 2;

export function useHeroIntroSequence({
    bootToLogoDelayMs = BOOT_TO_LOGO_DELAY_MS,
    logoToContentDelayMs = LOGO_TO_CONTENT_DELAY_MS,
}: UseHeroIntroSequenceOptions = {}): HeroIntroPhase {
    const [phase, setPhase] = useState<HeroIntroPhase>(0);

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
            setPhase(0);
        };
    }, [bootToLogoDelayMs, logoToContentDelayMs]);

    return phase;
}
