"use client";

import CareerCard from "@/src/components/career/CareerCard";
import { useSectionVisible } from "@/src/components/common/Container";
import { useRevealStyle } from "@/src/hooks/useRevealStyle";
import type { CareerItem } from "@/src/types/career";
import { cn } from "@/lib/utils";

interface CareerContentProps {
    items: readonly CareerItem[];
}

const CARD_BASE_DELAY_MS = 180;
const CARD_STAGGER_DELAY_MS = 110;

export default function CareerContent({ items }: CareerContentProps) {
    const isVisible = useSectionVisible();
    const { revealClassName, getRevealStyle } = useRevealStyle({ isVisible });

    return (
        <>
            {items.map((item, index) => (
                <div
                    key={`${item.company}-${item.period}`}
                    className={cn(revealClassName)}
                    style={getRevealStyle(CARD_BASE_DELAY_MS + index * CARD_STAGGER_DELAY_MS)}
                >
                    <CareerCard item={item} />
                </div>
            ))}
        </>
    );
}
