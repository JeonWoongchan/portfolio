"use client";

import { useEffect, useRef } from "react";

const BOTTOM_THRESHOLD_PX = 2;
const CLOSE_WHEEL_DELTA_THRESHOLD = -2;
// 모바일에서 하단 오버스크롤 의도를 판단하는 최소 스와이프 거리(px)
const OPEN_TOUCH_DELTA_THRESHOLD_PX = 24;
const CLOSE_TOUCH_DELTA_THRESHOLD_PX = 24;

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
    // 터치 시작점과 1회 처리 플래그를 저장해 중복 트리거를 방지한다.
    const touchStartYRef = useRef<number | null>(null);
    const touchHandledRef = useRef(false);

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

        const handleTouchStart = (event: TouchEvent) => {
            const touch = event.touches[0];

            if (!touch) {
                return;
            }

            touchStartYRef.current = touch.clientY;
            touchHandledRef.current = false;
        };

        const handleTouchMove = (event: TouchEvent) => {
            // 같은 제스처에서 open/close를 여러 번 호출하지 않도록 차단한다.
            if (touchHandledRef.current) {
                return;
            }

            const touch = event.touches[0];
            const touchStartY = touchStartYRef.current;

            if (!touch || touchStartY === null) {
                return;
            }

            const swipeDeltaY = touchStartY - touch.clientY;

            if (isFooterOpen) {
                // Footer가 열린 상태에서는 아래 방향 스와이프로 닫기를 허용한다.
                if (swipeDeltaY < -CLOSE_TOUCH_DELTA_THRESHOLD_PX) {
                    touchHandledRef.current = true;
                    onCloseFooter();
                }
                return;
            }

            // 페이지 최하단 + 위 방향 스와이프일 때만 오버스크롤 오픈 후보로 본다.
            if (!isAtPageBottom() || swipeDeltaY < OPEN_TOUCH_DELTA_THRESHOLD_PX) {
                return;
            }

            // 첫 제스처는 arm, 연속 제스처에서 실제 Footer를 연다.
            if (!isArmedRef.current) {
                isArmedRef.current = true;
                return;
            }

            isArmedRef.current = false;
            touchHandledRef.current = true;
            onOpenFooter();
        };

        const handleTouchEnd = () => {
            // 제스처 종료 시 상태를 초기화해 다음 입력을 정상 처리한다.
            touchStartYRef.current = null;
            touchHandledRef.current = false;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("wheel", handleWheel, { passive: true });
        window.addEventListener("touchstart", handleTouchStart, { passive: true });
        window.addEventListener("touchmove", handleTouchMove, { passive: true });
        window.addEventListener("touchend", handleTouchEnd, { passive: true });
        window.addEventListener("touchcancel", handleTouchEnd, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleTouchEnd);
            window.removeEventListener("touchcancel", handleTouchEnd);
        };
    }, [isFooterOpen, onOpenFooter, onCloseFooter]);
}
