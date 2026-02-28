"use client";

import { useEffect, useRef } from "react";
import type { RefObject } from "react";

const ARCHIVE_DRAWER_TRIGGER_OFFSET_PX = 120;
const SCROLL_DELTA_THRESHOLD_PX = 8;

interface UseArchiveFooterTriggerParams {
    archiveSectionRef: RefObject<HTMLElement | null>;
    isFooterOpen: boolean;
    onOpenFooter: () => void;
}

export function useArchiveFooterTrigger({
    archiveSectionRef,
    isFooterOpen,
    onOpenFooter,
}: UseArchiveFooterTriggerParams) {
    const previousScrollYRef = useRef<number>(0);
    const hasAutoOpenedRef = useRef(false);

    useEffect(() => {
        previousScrollYRef.current = window.scrollY;
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDelta = currentScrollY - previousScrollYRef.current;
            previousScrollYRef.current = currentScrollY;

            if (scrollDelta < SCROLL_DELTA_THRESHOLD_PX || hasAutoOpenedRef.current || isFooterOpen) {
                return;
            }

            const sectionElement = archiveSectionRef.current;
            if (!sectionElement) {
                return;
            }

            const sectionTop = sectionElement.offsetTop;
            const sectionBottom = sectionTop + sectionElement.offsetHeight;
            const viewportBottom = currentScrollY + window.innerHeight;
            const isInArchiveRange = currentScrollY >= sectionTop && currentScrollY <= sectionBottom;
            const reachedArchiveBottom =
                viewportBottom >= sectionBottom - ARCHIVE_DRAWER_TRIGGER_OFFSET_PX;

            if (isInArchiveRange && reachedArchiveBottom) {
                hasAutoOpenedRef.current = true;
                onOpenFooter();
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [archiveSectionRef, isFooterOpen, onOpenFooter]);
}
