'use client'

import {RefObject, useEffect, useState} from "react";

const OPACITY_OFFSET = 1000;

// section의 스크롤 위치에 따라 opacity를 조절하는 함수
const useSectionOpacity = (ref: RefObject<HTMLElement>, enabled: boolean = true) => {
    const [scrollOpacity, setScrollOpacity] = useState(1);

    useEffect(() => {
        if (!enabled) return;

        // 현재 섹션의 Y 위치를 기준으로 opacity를 계산하고 0~1 범위로 보정한다.
        const updateOpacity = () => {
            const section = ref.current;
            if (!section) return;

            const sectionRect = section.getBoundingClientRect();
            const rawOpacity = sectionRect.y / OPACITY_OFFSET + 1;
            const nextOpacity = Math.max(0, Math.min(1, rawOpacity));
            setScrollOpacity(nextOpacity);
        };

        const frameId = window.requestAnimationFrame(updateOpacity);

        window.addEventListener("scroll", updateOpacity, {passive: true});
        window.addEventListener("resize", updateOpacity);

        return () => {
            window.cancelAnimationFrame(frameId);
            window.removeEventListener("scroll", updateOpacity);
            window.removeEventListener("resize", updateOpacity);
        };
    }, [enabled, ref]);

    return enabled ? scrollOpacity : 1;
};

export default useSectionOpacity;
