'use client'

import { useEffect, useState } from 'react';

// 현재 페이지의 세로 스크롤 위치(window.scrollY)를 구독하는 훅
export const useScroll = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { scrollY };
};
