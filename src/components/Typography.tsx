import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
    children: React.ReactNode;
    align?: string;
    className?: string;
}

// 섹션 타이틀
export function SectionTitle({ children, className = "" }: TypographyProps) {
    return (
        <h1 className={cn(
            "text-left text-4xl md:text-5xl font-bold text-white",
            className
        )}>
            {children}
        </h1>
    );
}

// 섹션 설명
export function SectionDescription({ children, className = "" }: TypographyProps) {
    return (
        <p className={cn(
            "text-left text-base md:text-lg text-text-secondary leading-relaxed text-gray-400",
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
            "flex gap-12 items-center text-5xl font-bold",
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
            "text-sm md:text-base lg:text-lg leading-relaxed",
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
            "text-xs md:text-sm lg:text-base leading-relaxed text-gray-400",
            className
        )}>
            {children}
        </p>
    );
}