'use client'

import { RefObject, useEffect, useState } from 'react';

const OPACITY_OFFSET = 1000;

// 섹션의 현재 Y 위치를 기준으로 투명도(opacity)를 0~1 범위에서 계산하는 훅
const useSectionOpacity = (ref: RefObject<HTMLElement | null>, enabled: boolean = true) => {
    const [scrollOpacity, setScrollOpacity] = useState(1);

    useEffect(() => {
        if (!enabled) return;

        // 섹션 위치 변화에 맞춰 투명도를 계산하고 클램핑한다.
        const updateOpacity = () => {
            const section = ref.current;
            if (!section) return;

            const sectionRect = section.getBoundingClientRect();
            const rawOpacity = sectionRect.y / OPACITY_OFFSET + 1;
            const nextOpacity = Math.max(0, Math.min(1, rawOpacity));
            setScrollOpacity(nextOpacity);
        };

        const frameId = window.requestAnimationFrame(updateOpacity);

        window.addEventListener('scroll', updateOpacity, { passive: true });
        window.addEventListener('resize', updateOpacity);

        return () => {
            window.cancelAnimationFrame(frameId);
            window.removeEventListener('scroll', updateOpacity);
            window.removeEventListener('resize', updateOpacity);
        };
    }, [enabled, ref]);

    return enabled ? scrollOpacity : 1;
};

export default useSectionOpacity;
