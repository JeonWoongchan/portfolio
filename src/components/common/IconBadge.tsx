import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconBadgeTone = "accent" | "green" | "yellow";

interface IconBadgeProps {
    icon: LucideIcon;
    tone: IconBadgeTone;
    className?: string;
    iconClassName?: string;
}

const toneClassNameMap: Record<IconBadgeTone, string> = {
    accent: "bg-(--color-accent)/15 text-(--color-accent)",
    green: "bg-(--color-green)/15 text-(--color-green)",
    yellow: "bg-(--color-yellow)/15 text-(--color-yellow)",
};

export default function IconBadge({ icon: Icon, tone, className, iconClassName }: IconBadgeProps) {
    return (
        <span
            className={cn(
                "flex items-center justify-center rounded-md",
                toneClassNameMap[tone],
                className
            )}
        >
            <Icon className={cn("size-3.5", iconClassName)} aria-hidden="true" />
        </span>
    );
}
