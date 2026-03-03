"use client";

import AboutInfoGrid from "@/src/components/about/AboutInfoGrid";
import AboutProfileCard from "@/src/components/about/AboutProfileCard";
import AboutQuoteCard from "@/src/components/about/AboutQuoteCard";
import { useSectionVisible } from "@/src/components/common/Container";
import { useRevealStyle } from "@/src/hooks/ui/useRevealStyle";
import { cn } from "@/lib/utils";

const PROFILE_DELAY_MS = 140;
const INFO_GRID_DELAY_MS = 230;
const QUOTE_DELAY_MS = 360;

export default function AboutContent() {
    const isVisible = useSectionVisible();
    const { revealClassName, getRevealStyle } = useRevealStyle({ isVisible });

    return (
        <>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
                <div
                    className={cn("lg:basis-1/4", revealClassName)}
                    style={getRevealStyle(PROFILE_DELAY_MS)}
                >
                    <AboutProfileCard />
                </div>
                <div
                    className={cn("min-w-0 lg:basis-3/4", revealClassName)}
                    style={getRevealStyle(INFO_GRID_DELAY_MS)}
                >
                    <AboutInfoGrid />
                </div>
            </div>

            <div className={cn(revealClassName)} style={getRevealStyle(QUOTE_DELAY_MS)}>
                <AboutQuoteCard />
            </div>
        </>
    );
}

