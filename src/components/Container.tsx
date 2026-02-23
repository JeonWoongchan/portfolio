'use client'

import React, {createContext, RefObject, useContext} from 'react';
import {cn} from '@/lib/utils';
import SlideDown from '@/src/components/SlideDown';
import {useRegisterSection} from '@/src/hooks/useRegisterSectionRef';
import useSectionVisibility from '@/src/hooks/useSectionVisibility';
import useSectionOpacity from '@/src/hooks/useSectionOpacity';
import useMinWidth from '@/src/hooks/useMinWidth';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    contentClassName?: string;
    slideDownClassName?: string;
    ref?: React.RefObject<HTMLElement | null>;
}

interface SectionProps extends ContainerProps {
    nextSection?: string;
    opacityValue?: number;
    sectionKey?: string;
    visibilityThreshold?: number;
    opacityMinWidthPx?: number;
    enableOpacityAnimation?: boolean;
}

interface SectionVisibilityContextValue {
    isVisible: boolean;
}

interface SectionChildProps extends ContainerProps {
    animateOnVisible?: boolean;
    visibleClassName?: string;
}

const DEFAULT_OPACITY_MIN_WIDTH_PX = 1536;
const SECTION_VISIBILITY_CONTEXT_DEFAULT: SectionVisibilityContextValue = {
    isVisible: false,
};

const SectionVisibilityContext = createContext<SectionVisibilityContextValue>(
    SECTION_VISIBILITY_CONTEXT_DEFAULT
);

function useSectionVisibilityContext() {
    return useContext(SectionVisibilityContext);
}

export function Section({
    children,
    className = '',
    contentClassName = '',
    slideDownClassName = '',
    ref,
    nextSection,
    opacityValue,
    sectionKey,
    visibilityThreshold = 0.2,
    opacityMinWidthPx = DEFAULT_OPACITY_MIN_WIDTH_PX,
    enableOpacityAnimation = true,
}: SectionProps) {
    const sectionRef = useRegisterSection(
        sectionKey,
        ref as RefObject<HTMLElement | null> | undefined
    );
    const shouldObserveVisibility = Boolean(sectionKey);
    const isVisible = useSectionVisibility(sectionRef, visibilityThreshold, shouldObserveVisibility);
    const isWide = useMinWidth(opacityMinWidthPx);
    const shouldAnimateOpacity = shouldObserveVisibility && enableOpacityAnimation && isWide;
    const calculatedOpacity = useSectionOpacity(sectionRef, shouldAnimateOpacity);
    const resolvedOpacity = opacityValue ?? calculatedOpacity;
    const style = {opacity: resolvedOpacity};

    return (
        <SectionVisibilityContext.Provider value={{isVisible}}>
            <section
                ref={sectionRef}
                className={cn(
                    'w-full min-h-lvh flex flex-col justify-between',
                    'py-28 px-16 xl:px-40 2xl:px-80 text-(--color-text)',
                    className
                )}
            >
                <div style={style} className={cn('w-full flex-1 flex flex-col justify-between', contentClassName)}>
                    {children}
                </div>
                {nextSection && <SlideDown next={nextSection} className={slideDownClassName} />}
            </section>
        </SectionVisibilityContext.Provider>
    );
}

export function SectionHeader({
    children,
    className = '',
    animateOnVisible = false,
    visibleClassName = 'fade-in-down',
}: SectionChildProps) {
    const {isVisible} = useSectionVisibilityContext();

    return (
        <div
            className={cn(
                'relative flex flex-col items-center gap-3 p-4 mb-8',
                animateOnVisible && 'opacity-0',
                animateOnVisible && isVisible && visibleClassName,
                className
            )}
        >
            {children}
        </div>
    );
}

export function SectionBody({
    children,
    className = '',
    animateOnVisible = false,
    visibleClassName = 'fade-in-up-2',
}: SectionChildProps) {
    const {isVisible} = useSectionVisibilityContext();

    return (
        <div
            className={cn(
                'flex-1 flex flex-col justify-between',
                animateOnVisible && 'opacity-0',
                animateOnVisible && isVisible && visibleClassName,
                className
            )}
        >
            {children}
        </div>
    );
}

export function ContentWrapper({children, className = ''}: ContainerProps) {
    return (
        <div
            className={cn(
                'relative flex-1 flex flex-col xl:flex-row w-full gap-8 justify-center items-center',
                className
            )}
        >
            {children}
        </div>
    );
}

export function GridContainer({children, className = ''}: ContainerProps) {
    return (
        <ul className={cn('grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-12 justify-items-center', className)}>
            {children}
        </ul>
    );
}
