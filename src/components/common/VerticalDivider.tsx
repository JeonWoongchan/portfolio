import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface VerticalDividerProps {
    className?: string;
}

interface VerticalInsetDividerProps {
    side: "left" | "right";
    className?: string;
    contentClassName?: string;
    dividerClassName?: string;
    children: ReactNode;
}

export function VerticalDivider({ className }: VerticalDividerProps) {
    return (
        <span
            aria-hidden="true"
            className={cn("inline-block h-4 w-px shrink-0 bg-(--color-border)", className)}
        />
    );
}

export function VerticalInsetDivider({
    side,
    className,
    contentClassName,
    dividerClassName,
    children,
}: VerticalInsetDividerProps) {
    if (side === "left") {
        return (
            <div className={cn("flex items-stretch", className)}>
                <VerticalDivider className={cn("h-auto", dividerClassName)} />
                <div className={cn("pl-4", contentClassName)}>{children}</div>
            </div>
        );
    }

    return (
        <div className={cn("flex items-stretch", className)}>
            <div className={cn("pr-4", contentClassName)}>{children}</div>
            <VerticalDivider className={cn("h-auto", dividerClassName)} />
        </div>
    );
}
