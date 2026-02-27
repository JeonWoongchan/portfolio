'use client'

import {createContext, useContext} from 'react';
import type {CSSProperties, ReactNode, RefObject} from 'react';
import {cn} from '@/lib/utils';
import SectionScrollAction from "@/src/components/common/SectionScrollAction";
import {useRegisterSection} from '@/src/hooks/useRegisterSectionRef';
import useSectionVisibility from '@/src/hooks/useSectionVisibility';

interface ContainerProps {
    children: ReactNode;
    className?: string;
    contentClassName?: string;
    slideDownClassName?: string;
    style?: CSSProperties;
    ref?: RefObject<HTMLElement | null>;
}

type SectionTone = 'navy' | 'navyLight';

interface SectionProps extends ContainerProps {
    nextSection?: string;
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

interface SectionChildProps extends ContainerProps {
    animateOnVisible?: boolean;
    visibleClassName?: string;
}

const SECTION_VISIBILITY_CONTEXT_DEFAULT: SectionVisibilityContextValue = {
    isVisible: false,
};

const SectionVisibilityContext = createContext<SectionVisibilityContextValue>(
    SECTION_VISIBILITY_CONTEXT_DEFAULT
);

const SECTION_TONE_STYLE_MAP: Record<
    SectionTone,
    {
        sectionClassName: string;
        surfaceVars: Record<string, string>;
    }
> = {
    navy: {
        sectionClassName: 'bg-(--color-navy)',
        surfaceVars: {
            '--surface-card': 'var(--color-navy-light)',
            '--surface-card-border': 'var(--color-border-light)',
            '--surface-button': 'var(--color-navy-light)',
            '--surface-button-text': 'var(--color-white)',
            '--surface-button-hover': 'var(--color-accent)',
            '--surface-button-hover-text': 'var(--color-black)',
        },
    },
    navyLight: {
        sectionClassName: 'bg-(--color-navy-light)',
        surfaceVars: {
            '--surface-card': 'var(--color-navy)',
            '--surface-card-border': 'var(--color-border)',
            '--surface-button': 'var(--color-navy)',
            '--surface-button-text': 'var(--color-white)',
            '--surface-button-hover': 'var(--color-accent)',
            '--surface-button-hover-text': 'var(--color-black)',
        },
    },
};

function useSectionVisibilityContext() {
    return useContext(SectionVisibilityContext);
}

export function Section({
    children,
    className = '',
    contentClassName = '',
    slideDownClassName = '',
    style,
    ref,
    nextSection,
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
                    'pt-24 px-16 xl:px-40 2xl:px-100 text-(--color-text) select-none',
                    toneConfig?.sectionClassName,
                    className
                )}
            >
                <div className={cn('w-full flex-1 flex flex-col justify-between', contentClassName)}>
                    {children}
                </div>
                {nextSection && (
                    <SectionScrollAction
                        target={nextSection}
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
    animateOnVisible = false,
    visibleClassName = 'fade-in-down',
}: SectionChildProps) {
    const {isVisible} = useSectionVisibilityContext();

    return (
        <div
            className={cn(
                'relative flex flex-col items-center gap-3 p-4 mb-6',
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
                'flex-1 flex flex-col justify-start',
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
        <ul className={cn('grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-8 justify-items-center', className)}>
            {children}
        </ul>
    );
}
