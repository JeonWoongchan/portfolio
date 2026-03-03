"use client";

import { useCallback } from "react";
import type { CSSProperties } from "react";

interface UseRevealStyleOptions {
    isVisible: boolean;
    hiddenClassName?: string;
    visibleClassName?: string;
}

interface UseRevealStyleResult {
    revealClassName: string;
    getRevealStyle: (delayMs: number) => CSSProperties | undefined;
}

const DEFAULT_HIDDEN_CLASS_NAME = "opacity-0";
const DEFAULT_VISIBLE_CLASS_NAME = "fade-in-up";

// 섹션 가시성 상태에 맞춰 공통 애니메이션 클래스/지연 스타일을 제공하는 훅
export function useRevealStyle({
    isVisible,
    hiddenClassName = DEFAULT_HIDDEN_CLASS_NAME,
    visibleClassName = DEFAULT_VISIBLE_CLASS_NAME,
}: UseRevealStyleOptions): UseRevealStyleResult {
    const revealClassName = isVisible ? visibleClassName : hiddenClassName;

    const getRevealStyle = useCallback(
        (delayMs: number): CSSProperties | undefined =>
            isVisible ? { animationDelay: `${delayMs}ms` } : undefined,
        [isVisible]
    );

    return {
        revealClassName,
        getRevealStyle,
    };
}
