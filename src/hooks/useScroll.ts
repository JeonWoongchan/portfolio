'use client'

import {useEffect, useState} from "react";

// 스크롤 움직일 때마다 스크롤Y 값 return 하는 함수
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
    }, [])

    return {scrollY}
};