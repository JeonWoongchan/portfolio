import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
    children: React.ReactNode,
    className?: string,
    ref?: React.RefObject<HTMLElement>
}

// 섹션 래퍼 (전체 섹션)
export function Section({children, className = "", ref}: ContainerProps) {
    return (
        <section
            ref={ref}
            className={cn(
                "w-full min-h-screen flex flex-col justify-between py-16 px-4 xl:px-16 2xl:px-32",
                className
            )}
        >
            {children}
        </section>
    );
}

// 섹션 헤더 (제목 + 구분선)
export function SectionHeader({children, className = ""}: ContainerProps) {
    return (
        <div className={cn(
            "flex justify-start border-b-2 border-gray-300 pb-3",
            className
        )}>
            {children}
        </div>
    );
}

// 컨텐츠 래퍼 (이미지 + 텍스트 같은 flex 레이아웃)
export function ContentWrapper({children, className = ""}: ContainerProps) {
    return (
        <div
            className={cn(
                "flex flex-col xl:flex-row w-full gap-8 xl:px-30 py-8 justify-center items-center",
                className
            )}
        >
            {children}
        </div>
    );
}

// 텍스트 그룹 (여러 단락 묶음)
export function TextGroup({children, className = ""}: ContainerProps) {
    return (
        <div className={cn(
            "space-y-4 md:space-y-6 text-left",
            className
        )}>
            {children}
        </div>
    );
}

// 그리드 컨테이너 (카드 리스트)
export function GridContainer({children, className = ""}: ContainerProps) {
    return (
        <ul className={cn(
            "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 my-9",
            className
        )}>
            {children}
        </ul>
    );
}