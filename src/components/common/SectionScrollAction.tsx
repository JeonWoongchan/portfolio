"use client";

import { ArrowUp } from "lucide-react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { cn } from "@/lib/utils";
import { useSectionStore } from "@/src/store/useSectionStore";
import { SmallText } from "@/src/components/common/Typography";

type ScrollDirection = "down" | "up";
type ScrollActionVariant = "hint" | "inline";

interface SectionScrollActionProps {
    target?: string;
    direction?: ScrollDirection;
    variant?: ScrollActionVariant;
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
    variant = "hint",
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
                variant === "hint"
                    ? "relative mx-auto my-5 flex h-12.5 w-12.5 cursor-pointer flex-col items-center justify-center gap-2"
                    : "cursor-pointer transition-colors hover:text-(--color-accent)",
                className
            )}
        >
            {variant === "hint" ? (
                <>
                    <span className="float-icon text-xs opacity-50">{text}</span>
                    {direction === "down" ? (
                        <MdKeyboardArrowDown className="float-icon text-xl" aria-hidden="true" />
                    ) : (
                        <ArrowUp className="float-icon size-5" aria-hidden="true" />
                    )}
                </>
            ) : (
                <SmallText className="flex items-center gap-1">
                    {text}
                    {direction === "down" ? (
                        <MdKeyboardArrowDown className="text-xl" aria-hidden="true" />
                    ) : (
                        <ArrowUp className="size-3.5" aria-hidden="true" />
                    )}
                </SmallText>
            )}
        </button>
    );
}
