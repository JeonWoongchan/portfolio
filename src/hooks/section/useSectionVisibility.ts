'use client'

import { RefObject, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import useMeasure from 'react-use-measure';

const SNAP_DISABLE_RATIO = 1.05;

// 특정 섹션이 뷰포트에 진입했는지 감지하고, 한 번 보이면 true를 유지하는 훅
const useSectionVisibility = (
    ref: RefObject<HTMLElement | null>,
    threshold = 0.2,
    enabled = true
) => {
    const { ref: inViewRef, inView } = useInView({
        threshold,
        triggerOnce: true,
        skip: !enabled,
    });

    useEffect(() => {
        if (!enabled) {
            return;
        }

        const sectionElement = ref.current;

        if (!sectionElement) {
            return;
        }

        inViewRef(sectionElement);

        return () => {
            inViewRef(null);
        };
    }, [enabled, inViewRef, ref]);

    return enabled ? inView : false;
};

export default useSectionVisibility;

// 섹션 높이가 뷰포트보다 크게 확장되면 스냅을 끄고, 일반 길이면 스냅을 유지한다.
export function useSectionSnapState(
    ref: RefObject<HTMLElement | null>,
    enabled = true
) {
    const [measureRef, bounds] = useMeasure();
    const [viewportHeight, setViewportHeight] = useState<number>(() => (
        typeof window === 'undefined' ? 0 : window.innerHeight
    ));

    useEffect(() => {
        if (!enabled) {
            return;
        }

        const handleResize = () => {
            setViewportHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [enabled]);

    useEffect(() => {
        if (!enabled) {
            return;
        }

        const sectionElement = ref.current;

        if (!sectionElement) {
            return;
        }

        measureRef(sectionElement);
        return () => {
            measureRef(null);
        };
    }, [enabled, measureRef, ref]);

    useEffect(() => {
        if (!enabled) {
            return;
        }

        const sectionElement = ref.current;

        if (!sectionElement || viewportHeight <= 0) {
            return;
        }

        const sectionHeight = bounds.height;
        const isLargeSection = sectionHeight > viewportHeight * SNAP_DISABLE_RATIO;

        sectionElement.dataset.snap = isLargeSection ? 'off' : 'on';
    }, [bounds.height, enabled, ref, viewportHeight]);
}
