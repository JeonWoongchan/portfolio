'use client'

import { RefObject, useEffect, useState } from 'react';

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