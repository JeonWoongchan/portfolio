import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
    children: React.ReactNode;
    align?: "self-start" | "self-end" | "self-center";
    className?: string;
}

// 섹션 타이틀 (ABOUT ME 같은 큰 제목)
export function SectionTitle({ children, className = "" }: TypographyProps) {
    return (
        <h1 className={cn(
            "text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold py-4",
            className
        )}>
            {children}
        </h1>
    );
}

// 히어로 텍스트 (Home의 FRONTEND DEVELOPER 같은 메인 텍스트)
export function HeroTitle({ children, align = "self-start", className = "" }: TypographyProps) {
    return (
        <div className={cn(
            "flex gap-4 items-center text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold",
            align,
            className
        )}>
            {children}
        </div>
    );
}

// 본문 텍스트 (설명 문구)
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
            "text-xs md:text-sm lg:text-base leading-relaxed",
            className
        )}>
            {children}
        </p>
    );
}