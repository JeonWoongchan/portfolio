import { cn } from "@/lib/utils";
import type { ReactNode } from 'react';

interface HeroTextProps {
    children: ReactNode;
    align?: "self-start" | "self-end";
    className?: string;
    imageSrc?: string;
    imageAlt?: string;
}

export default function HeroText({ children, align = "self-start", className }: HeroTextProps) {
    return (
        <div className={cn("text-9xl font-bold text-white inline-flex items-center gap-8", align, className)}>
            {children}
        </div>
    );
}
