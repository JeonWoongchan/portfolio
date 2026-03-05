'use client'

import {createContext, useContext} from 'react';
import type {CSSProperties, ReactNode, RefObject} from 'react';
import {cn} from '@/lib/utils';
import SectionScrollAction from "@/src/components/common/SectionScrollAction";
import {useRegisterSection} from '@/src/hooks/section/useRegisterSectionRef';
import useSectionVisibility from '@/src/hooks/section/useSectionVisibility';
import {SECTION_TONE_STYLE_MAP, type SectionTone} from "@/src/utils/sectionTone";

interface ContainerProps {
    children: ReactNode;
    className?: string;
    contentClassName?: string;
    slideDownClassName?: string;
    style?: CSSProperties;
    ref?: RefObject<HTMLElement | null>;
}

interface SectionProps extends ContainerProps {
    nextSection?: string;
    onNextAction?: () => void;
    opacityValue?: number;
    sectionKey?: string;
    visibilityThreshold?: number;
    opacityMinWidthPx?: number;
    enableOpacityAnimation?: boolean;
    tone?: SectionTone;
}

interface SectionVisibilityContextValue {
    isVisible: boolean;
}

const SECTION_VISIBILITY_CONTEXT_DEFAULT: SectionVisibilityContextValue = {
    isVisible: false,
};

const SectionVisibilityContext = createContext<SectionVisibilityContextValue>(
    SECTION_VISIBILITY_CONTEXT_DEFAULT
);

function useSectionVisibilityContext() {
    return useContext(SectionVisibilityContext);
}

export function useSectionVisible() {
    const {isVisible} = useSectionVisibilityContext();
    return isVisible;
}

export function Section({
    children,
    className = '',
    contentClassName = '',
    slideDownClassName = '',
    style,
    ref,
    nextSection,
    onNextAction,
    sectionKey,
    visibilityThreshold = 0.2,
    tone,
}: SectionProps) {
    const sectionRef = useRegisterSection(
        sectionKey,
        ref as RefObject<HTMLElement | null> | undefined
    );
    const shouldObserveVisibility = Boolean(sectionKey);
    const isVisible = useSectionVisibility(sectionRef, visibilityThreshold, shouldObserveVisibility);
    const toneConfig = tone ? SECTION_TONE_STYLE_MAP[tone] : null;

    return (
        <SectionVisibilityContext.Provider value={{isVisible}}>
            <section
                ref={sectionRef}
                style={{...(toneConfig?.surfaceVars ?? {}), ...style}}
                className={cn(
                    'w-full min-h-dvh flex flex-col justify-between',
                    'pt-24 px-6 sm:px-10 lg:px-16 xl:px-24 2xl:px-100 text-(--color-text) select-none',
                    toneConfig?.sectionClassName,
                    className
                )}
            >
                <div className={cn('w-full flex-1 flex flex-col justify-between', contentClassName)}>
                    {children}
                </div>
                {(nextSection || onNextAction) && (
                    <SectionScrollAction
                        target={nextSection}
                        onAction={onNextAction}
                        direction="down"
                        variant="hint"
                        className={slideDownClassName}
                    />
                )}
            </section>
        </SectionVisibilityContext.Provider>
    );
}

export function SectionHeader({
    children,
    className = '',
}: ContainerProps) {

    return (
        <div
            className={cn(
                'relative flex flex-col items-center gap-3 p-4 mb-6', 'fade-in-down',
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
}: ContainerProps) {
    return (
        <div
            className={cn(
                'relative flex-1 flex flex-col justify-start',
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
        <ul className={cn('grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center', className)}>
            {children}
        </ul>
    );
}

