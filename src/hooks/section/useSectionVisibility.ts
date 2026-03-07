'use client'

// TODO: 추후 섹션 관찰 로직은 라이브러리(예: react-intersection-observer, react-use-measure) 전환 검토
import { RefObject, useEffect, useState } from 'react';

const SNAP_DISABLE_RATIO = 1.05;

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

// 섹션 높이가 뷰포트보다 크게 확장되면 스냅을 끄고, 일반 길이면 스냅을 유지한다.
export function useSectionSnapState(
    ref: RefObject<HTMLElement | null>,
    enabled = true
) {
    useEffect(() => {
        if (!enabled) {
            return;
        }

        const sectionElement = ref.current;

        if (!sectionElement) {
            return;
        }

        const updateSnapState = () => {
            const viewportHeight = window.innerHeight;
            const sectionHeight = sectionElement.scrollHeight;
            const isLargeSection = sectionHeight > viewportHeight * SNAP_DISABLE_RATIO;

            sectionElement.dataset.snap = isLargeSection ? 'off' : 'on';
        };

        updateSnapState();

        const resizeObserver = new ResizeObserver(() => {
            updateSnapState();
        });

        resizeObserver.observe(sectionElement);
        window.addEventListener('resize', updateSnapState);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('resize', updateSnapState);
        };
    }, [enabled, ref]);
}
