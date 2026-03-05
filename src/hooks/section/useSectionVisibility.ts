'use client'

import { RefObject, useEffect, useState } from 'react';

// 특정 섹션이 뷰포트에 진입했는지 감지하고, 한 번 보이면 true를 유지하는 훅
const useSectionVisibility = (
    ref: RefObject<HTMLElement | null>,
    threshold = 0.2,
    enabled = true
) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!enabled) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [enabled, isVisible, ref, threshold]);

    return isVisible;
};

export default useSectionVisibility;
