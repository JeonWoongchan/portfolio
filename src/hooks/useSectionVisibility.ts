'use client'

import { RefObject, useEffect, useState } from 'react';

// 특정 섹션이 뷰포트에 보이는지 감지하는 커스텀 훅
const useSectionVisibility = (
    ref: RefObject<HTMLElement>,
    threshold = 0.2
) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
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
    }, [isVisible, ref, threshold]);

    return isVisible;
};

export default useSectionVisibility;