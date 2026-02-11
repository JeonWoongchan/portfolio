import React from 'react';
import { cn } from '@/lib/utils';
import SlideDown from "@/src/components/SlideDown";

interface ContainerProps {
    children: React.ReactNode,
    className?: string,
    contentClassName?: string,
    slideDownClassName?: string,
    ref?: React.RefObject<HTMLElement>
}

interface SectionProps extends ContainerProps {
    nextSection?: string;
    opacityValue?: number;
}

// 섹션 래퍼 (전체 섹션)
export function Section({
    children,
    className = "",
    contentClassName = "",
    slideDownClassName = "",
    ref,
    nextSection,
    opacityValue = 1
}: SectionProps) {
    const style = { opacity: opacityValue }

    return (
        <section
            ref={ref}
            className={cn(
                "w-full min-h-screen flex flex-col justify-between",
                "py-32 px-4 sm:px-8 xl:px-80 xl:max-h-239.75 bg-(--color-navy) text-(--color-text)",
                className
            )}
        >
            <div style={style} className={cn(
                "w-full flex-1 flex flex-col justify-between", contentClassName
            )}>
                {children}
            </div>
            {nextSection && <SlideDown next={nextSection} className={slideDownClassName} />}
        </section>
    );
}

// 섹션 헤더 (제목 + 구분선)
export function SectionHeader({children, className = ""}: ContainerProps) {
    return (
        <div className={cn(
            "relative flex flex-col items-center gap-3 p-4 mb-8",
            className
        )}>
            {children}
        </div>
    );
}

// 섹션 바디
export function SectionBody({children, className = ""}: ContainerProps) {
    return (
        <div className={cn(
            "flex-1 flex flex-col justify-between",
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
                "relative flex-1 flex flex-col xl:flex-row w-full gap-8 justify-center items-center",
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
            "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 justify-items-center",
            className
        )}>
            {children}
        </ul>
    );
}