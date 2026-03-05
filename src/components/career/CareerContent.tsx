"use client";

import { useMemo } from "react";
import CareerCard from "@/src/components/career/CareerCard";
import { useSectionVisible } from "@/src/components/common/Container";
import { useRevealStyle } from "@/src/hooks/ui/useRevealStyle";
import type { CareerItem } from "@/src/types/career";
import { sortByLatestPeriod } from "@/src/utils/yearMonthPeriod";
import { cn } from "@/lib/utils";

interface CareerContentProps {
    items: readonly CareerItem[];
}

const CARD_BASE_DELAY_MS = 180;
const CARD_STAGGER_DELAY_MS = 110;

export default function CareerContent({ items }: CareerContentProps) {
    const isVisible = useSectionVisible();
    const { revealClassName, getRevealStyle } = useRevealStyle({ isVisible });
    const sortedItems = useMemo(() => sortByLatestPeriod(items), [items]);

    return (
        <>
            {sortedItems.map((item, index) => (
                <div
                    key={`${item.company}-${item.periodStart}-${item.periodEnd}`}
                    className={cn(revealClassName)}
                    style={getRevealStyle(CARD_BASE_DELAY_MS + index * CARD_STAGGER_DELAY_MS)}
                >
                    <CareerCard item={item} />
                </div>
            ))}
        </>
    );
}
