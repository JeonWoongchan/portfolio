interface UsePhaseRevealOptions {
    phase: number;
    startPhase: number;
    hiddenClassName?: string;
    animationPrefix?: string;
    maxAnimationOrder?: number;
}

interface UsePhaseRevealResult {
    isActive: boolean;
    containerClassName: string;
    getAnimationClassName: (order: number) => string;
}

const DEFAULT_HIDDEN_CLASS_NAME = "pointer-events-none opacity-0";
const DEFAULT_ANIMATION_PREFIX = "fade-in-up";
const DEFAULT_MAX_ANIMATION_ORDER = 5;

export function usePhaseReveal({
    phase,
    startPhase,
    hiddenClassName = DEFAULT_HIDDEN_CLASS_NAME,
    animationPrefix = DEFAULT_ANIMATION_PREFIX,
    maxAnimationOrder = DEFAULT_MAX_ANIMATION_ORDER,
}: UsePhaseRevealOptions): UsePhaseRevealResult {
    const isActive = phase >= startPhase;
    const containerClassName = isActive ? "" : hiddenClassName;

    const getAnimationClassName = (order: number) => {
        if (!isActive) {
            return "";
        }

        const clampedOrder = Math.min(Math.max(order, 1), maxAnimationOrder);
        return `${animationPrefix}-${clampedOrder}`;
    };

    return {
        isActive,
        containerClassName,
        getAnimationClassName,
    };
}
