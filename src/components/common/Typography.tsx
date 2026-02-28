import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
    children: ReactNode;
    align?: string;
    className?: string;
}

// 섹션 타이틀
export function SectionTitle({ children, className = "" }: TypographyProps) {
    return (
        <h1 className={cn(
            "relative text-center text-4xl md:text-5xl font-bold text-white pb-4",
            "before:absolute before:left-1/2 before:-translate-x-1/2 before:bottom-0 before:w-16 before:h-0.5 before:bg-(--color-accent)",
            className
        )}>
            {children}
            <span className={"text-(--color-accent) ml-1"}>.</span>
        </h1>
    );
}

// 섹션 설명
export function SectionDescription({ children, className = "" }: TypographyProps) {
    return (
        <p className={cn(
            "text-left text-base leading-relaxed text-(--color-text-content)",
            className
        )}>
            {children}
        </p>
    );
}

// 히어로 텍스트
export function HeroTitle({ children, align = "self-start", className = "" }: TypographyProps) {
    return (
        <div className={cn(
            "flex gap-12 items-center text-2xl sm:text-3xl xl:text-5xl font-bold",
            align,
            className
        )}>
            {children}
        </div>
    );
}

// 본문 텍스트
export function BodyText({ children, className = "" }: TypographyProps) {
    return (
        <p className={cn(
            "text-sm md:text-base font-semibold leading-relaxed text-white",
            className
        )}>
            {children}
        </p>
    );
}

// 작은 본문 텍스트
export function SmallText({ children, className = "" }: TypographyProps) {
    return (
        <p className={cn(
            "text-xs md:text-sm leading-relaxed text-(--color-text-content)",
            className
        )}>
            {children}
        </p>
    );
}
