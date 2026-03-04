"use client";

import { useEffect, useRef } from "react";

const BOTTOM_THRESHOLD_PX = 2;
const CLOSE_WHEEL_DELTA_THRESHOLD = -2;

interface UseFooterOverscrollTriggerParams {
    isFooterOpen: boolean;
    onOpenFooter: () => void;
    onCloseFooter: () => void;
}

function isAtPageBottom(): boolean {
    const scrollBottom = window.scrollY + window.innerHeight;
    const pageBottom = document.documentElement.scrollHeight;
    return scrollBottom >= pageBottom - BOTTOM_THRESHOLD_PX;
}

// 페이지 하단에서 추가 하향 스크롤(오버스크롤) 입력 시 푸터 열기를 트리거하는 훅
export function useFooterOverscrollTrigger({
    isFooterOpen,
    onOpenFooter,
    onCloseFooter,
}: UseFooterOverscrollTriggerParams) {
    const wasAtBottomRef = useRef(false);
    const isArmedRef = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (isFooterOpen) {
                return;
            }

            const atBottom = isAtPageBottom();

            if (!atBottom) {
                wasAtBottomRef.current = false;
                isArmedRef.current = false;
                return;
            }

            if (!wasAtBottomRef.current) {
                wasAtBottomRef.current = true;
                // 하단 도달 직후 한 번 더 내리는 입력을 오버스크롤 트리거로 사용한다.
                isArmedRef.current = true;
            }
        };

        const handleWheel = (event: WheelEvent) => {
            if (isFooterOpen) {
                if (event.deltaY < CLOSE_WHEEL_DELTA_THRESHOLD) {
                    onCloseFooter();
                }
                return;
            }

            if (event.deltaY <= 0 || !isAtPageBottom()) {
                return;
            }

            if (!isArmedRef.current) {
                isArmedRef.current = true;
                return;
            }

            isArmedRef.current = false;
            onOpenFooter();
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("wheel", handleWheel, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("wheel", handleWheel);
        };
    }, [isFooterOpen, onOpenFooter, onCloseFooter]);
}
