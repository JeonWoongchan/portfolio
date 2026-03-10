"use client";

import { ArrowUp } from "lucide-react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { cn } from "@/lib/utils";
import { useSectionStore } from "@/src/store/useSectionStore";
import { SmallText } from "@/src/components/common/Typography";

type ScrollDirection = "down" | "up";

interface SectionScrollActionProps {
    target?: string;
    direction?: ScrollDirection;
    label?: string;
    className?: string;
    onAction?: () => void;
}

const DIRECTION_LABEL_MAP: Record<ScrollDirection, string> = {
    down: "SCROLL",
    up: "Back to top",
};

export default function SectionScrollAction({
    target,
    direction = "down",
    label,
    className,
    onAction,
}: SectionScrollActionProps) {
    const { scrollTo } = useSectionStore();
    const text = label ?? DIRECTION_LABEL_MAP[direction];

    return (
        <button
            type="button"
            aria-label={text}
            onClick={() => {
                if (onAction) {
                    onAction();
                    return;
                }

                if (target) {
                    scrollTo(target);
                }
            }}
            className={cn(
                direction === "down"
                    ? "relative mx-auto my-5 flex h-12.5 w-12.5 cursor-pointer flex-col items-center justify-center gap-2"
                    : "cursor-pointer transition-colors hover:text-(--color-accent)",
                className
            )}
        >
            {/* 아래 방향은 섹션 이동 힌트, 위 방향은 footer 액션으로 고정. */}
            {direction === "down" ? (
                <>
                    <span className="float-icon text-xs opacity-50">{text}</span>
                    <MdKeyboardArrowDown className="float-icon text-xl" aria-hidden="true" />
                </>
            ) : (
                <SmallText className="flex items-center gap-1">
                    {text}
                    <ArrowUp className="size-3.5" aria-hidden="true" />
                </SmallText>
            )}
        </button>
    );
}
