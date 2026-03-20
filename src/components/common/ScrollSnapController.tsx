'use client';

import {useEffect} from "react";

export default function ScrollSnapController() {
    useEffect(() => {
        const SPEED_THRESHOLD = 4; // 조절 필요
        let lastTime = 0;

        const handleWheel = (e: WheelEvent) => {
            const now = Date.now();
            const timeDiff = now - lastTime;
            const speed = Math.abs(e.deltaY) / timeDiff; // 방향 무관하게 절댓값만

            console.log('speed:', speed);

            if (speed > SPEED_THRESHOLD) {
                document.documentElement.style.scrollSnapType = 'none';
            } else {
                document.documentElement.style.scrollSnapType = '';
            }

            lastTime = now;
        };

        window.addEventListener('wheel', handleWheel, { passive: true });
        return () => window.removeEventListener('wheel', handleWheel);
    }, []);

    return null;
}
