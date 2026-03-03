"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import SectionActionButton from "@/src/components/common/SectionActionButton";
import { GridContainer, useSectionVisible } from "@/src/components/common/Container";
import ArchiveCountItem from "@/src/components/archive/ArchiveCountItem";
import ArchiveGridCard from "@/src/components/archive/ArchiveGridCard";
import { useCategoryFilter } from "@/src/hooks/useCategoryFilter";
import { ArchiveCategory } from "@/src/types/archive";
import { cn } from "@/lib/utils";

interface ArchiveInteractiveProps {
    categories: readonly ArchiveCategory[];
}

const ITEMS_PER_PAGE = 6;
const COUNT_ITEM_DELAY_MS = 100;
const GRID_CARD_BASE_DELAY_MS = 250;
const GRID_CARD_STAGGER_MS = 70;
const ACTION_BUTTON_DELAY_MS = 550;

// TODO: 커스텀훅 분리
export default function ArchiveInteractive({ categories }: ArchiveInteractiveProps) {
    const isVisible = useSectionVisible();
    const { selectedKey, setSelectedKey, categoryOptions, filteredCategories } =
        useCategoryFilter({ categories });
    const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);

    const getRevealStyle = (delayMs: number): CSSProperties | undefined =>
        isVisible ? { animationDelay: `${delayMs}ms` } : undefined;

    const handleSelectCategory = (key: string) => {
        setSelectedKey(key);
        setVisibleCount(ITEMS_PER_PAGE);
    };

    const filteredItems = useMemo(
        () =>
            filteredCategories.flatMap((category) =>
                category.items.map((item) => ({
                    ...item,
                    category: category.key,
                }))
            ),
        [filteredCategories]
    );

    const visibleItems = useMemo(
        () => filteredItems.slice(0, visibleCount),
        [filteredItems, visibleCount]
    );

    const hasMoreItems = visibleItems.length < filteredItems.length;
    const canToggleItems = filteredItems.length > ITEMS_PER_PAGE;
    const isExpanded = !hasMoreItems;

    const handleToggleVisible = () => {
        setVisibleCount(isExpanded ? ITEMS_PER_PAGE : filteredItems.length);
    };

    return (
        <>
            <div
                className={cn(isVisible ? "fade-in-up" : "opacity-0")}
                style={getRevealStyle(COUNT_ITEM_DELAY_MS)}
            >
                <ArchiveCountItem
                    selectedKey={selectedKey}
                    options={categoryOptions}
                    onSelect={handleSelectCategory}
                />
            </div>

            <GridContainer className="mx-auto mt-8 w-full max-w-6xl md:grid-cols-2 xl:grid-cols-3">
                {visibleItems.map((item, index) => (
                    <li
                        key={`${item.category}-${item.id}`}
                        className={cn("w-full", isVisible ? "fade-in-up" : "opacity-0")}
                        style={getRevealStyle(
                            GRID_CARD_BASE_DELAY_MS + index * GRID_CARD_STAGGER_MS
                        )}
                    >
                        <ArchiveGridCard item={item} />
                    </li>
                ))}
            </GridContainer>
            {canToggleItems && (
                <div
                    className={cn("mt-4 flex justify-center", isVisible ? "fade-in-up" : "opacity-0")}
                    style={getRevealStyle(ACTION_BUTTON_DELAY_MS)}
                >
                    <SectionActionButton
                        type="button"
                        className="w-full min-w-28 sm:w-auto"
                        onClick={handleToggleVisible}
                    >
                        {isExpanded ? "접기" : "더보기"}
                    </SectionActionButton>
                </div>
            )}
        </>
    );
}
