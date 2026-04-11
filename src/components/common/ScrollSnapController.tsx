'use client';

import {useEffect} from "react";

const DESKTOP_MEDIA_QUERY = '(min-width: 768px)';

export default function ScrollSnapController() {
    useEffect(() => {
        const SPEED_THRESHOLD = 3;
        const mediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);
        let lastTime = 0;

        const resetScrollSnapType = () => {
            document.documentElement.style.scrollSnapType = '';
        };

        const handleWheel = (e: WheelEvent) => {
            if (!mediaQuery.matches) {
                resetScrollSnapType();
                return;
            }

            const now = Date.now();
            const timeDiff = now - lastTime;
            const speed = Math.abs(e.deltaY) / timeDiff;
            const isScrollingUp = e.deltaY < 0;

            if (isScrollingUp && speed > SPEED_THRESHOLD) {
                document.documentElement.style.scrollSnapType = 'none';
            } else {
                resetScrollSnapType();
            }

            lastTime = now;
        };

        const handleViewportChange = () => {
            if (!mediaQuery.matches) {
                resetScrollSnapType();
            }
        };

        window.addEventListener('wheel', handleWheel, {passive: true});
        mediaQuery.addEventListener('change', handleViewportChange);

        return () => {
            window.removeEventListener('wheel', handleWheel);
            mediaQuery.removeEventListener('change', handleViewportChange);
        };
    }, []);

    return null;
}
