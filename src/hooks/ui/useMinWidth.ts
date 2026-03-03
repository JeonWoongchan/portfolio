'use client'

import { useEffect, useState } from 'react';

// 뷰포트 너비가 지정한 최소 폭 이상인지 반응형으로 추적하는 훅
const useMinWidth = (minWidthPx: number) => {
    const [isMinWidth, setIsMinWidth] = useState(() => {
        if (typeof window === 'undefined') return false;
        return window.innerWidth >= minWidthPx;
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(min-width: ${minWidthPx}px)`);

        const handleChange = (event: MediaQueryListEvent) => {
            setIsMinWidth(event.matches);
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, [minWidthPx]);

    return isMinWidth;
};

export default useMinWidth;
