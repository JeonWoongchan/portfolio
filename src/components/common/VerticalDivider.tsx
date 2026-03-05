import { cn } from "@/lib/utils";

interface VerticalDividerProps {
    className?: string;
}

export function VerticalDivider({ className }: VerticalDividerProps) {
    return (
        <span
            aria-hidden="true"
            className={cn("inline-block h-auto w-px mx-4 shrink-0 bg-(--color-border)", className)}
        />
    );
}
